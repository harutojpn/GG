// effects.js — ポストプロセス(Bloom / 色調 / ビネット / フィルムグレイン)とパーティクル全般
// 契約: ARCHITECTURE.md — ctx.effects = { render(dt), burst(pos, preset, opts), onResize(w, h) }
//
// ポストプロセス: EffectComposer + RenderPass + UnrealBloomPass + OutputPass + 色調ShaderPass。
//   quality.postFX === false のときは composer を使わず renderer.render で素通し。
// パーティクル: プール式 THREE.Points ×3系統(加算合成 / 通常アルファ / 葉スプライト)。
//   毎フレームの new を避け、Float32Array を CPU 更新して needsUpdate する。
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { canvasTexture, mulberry32 } from './util.js';

// ============================================================================
// 内部状態
// ============================================================================
let CTX = null;
let composer = null;
let bloomPass = null;
let gradePass = null;
let poolAdd = null;   // 加算合成: spark / magic / fire / orb / firefly / 光の粒
let poolAlpha = null; // 通常アルファ: dust / smoke / 綿毛 / 熱の揺らぎ
let poolLeaf = null;  // 通常アルファ + 葉スプライト(回転あり): leaf / grass

const V2 = new THREE.Vector2();
const C = new THREE.Color();
const R = Math.random;
const rr = (a, b) => a + R() * (b - a);

// ============================================================================
// 色調整パス(穏やかなビネット + わずかな彩度/コントラスト + ごく薄いグレイン)
// OutputPass の後段(表示色空間)で処理する。
// ============================================================================
const GradeShader = {
  name: 'ArdiaGradeShader',
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1280, 720) },
    uVignette: { value: 0.30 },   // 四隅の減光量(控えめ)
    uSaturation: { value: 1.055 },// わずかな彩度向上
    uContrast: { value: 0.10 },   // 弱いS字コントラスト
    uGrain: { value: 0.014 },     // ごく薄いフィルムグレイン
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uVignette;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uGrain;
    varying vec2 vUv;

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;

      // 彩度(輝度を保ったまま上品に)
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = clamp(mix(vec3(lum), col, uSaturation), 0.0, 1.0);

      // 弱いコントラスト(S字)
      col = mix(col, col * col * (3.0 - 2.0 * col), uContrast);

      // 穏やかなビネット
      vec2 q = vUv - 0.5;
      q.x *= 1.25;
      float d = length(q);
      col *= 1.0 - uVignette * smoothstep(0.40, 0.85, d);

      // ごく薄い時間変化グレイン(暗部にわずかに多め)
      float g = hash12(vUv * uRes + vec2(mod(uTime * 61.7, 977.0), mod(uTime * 38.9, 733.0))) - 0.5;
      col += g * uGrain * (0.4 + 0.6 * (1.0 - lum));

      gl_FragColor = vec4(col, 1.0);
    }`,
};

// ============================================================================
// パーティクル用シェーダ(Points / 距離減衰サイズ / 頂点色 / 個別回転)
// tonemapping / colorspace チャンクは画面直描画時のみ有効化される(three仕様)ため
// composer 経由(リニアRT)でも二重補正にならない。
// ============================================================================
const PARTICLE_VERT = /* glsl */`
  uniform float uScale;
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aAlpha;
  attribute float aRot;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vRot;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vRot = aRot;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uScale / max(0.12, -mv.z), 0.0, 512.0);
    gl_Position = projectionMatrix * mv;
  }`;

const PARTICLE_FRAG = /* glsl */`
  uniform sampler2D uMap;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vRot;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float c = cos(vRot), s = sin(vRot);
    uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c) + 0.5;
    vec4 tex = texture2D(uMap, clamp(uv, 0.0, 1.0));
    float a = tex.a * vAlpha;
    if (a < 0.006) discard;
    gl_FragColor = vec4(vColor * tex.rgb, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

// ============================================================================
// プロシージャルなスプライトテクスチャ(外部アセット禁止 → CanvasTexture)
// ============================================================================
function makeSoftTex() {
  // 柔らかい発光円(加算合成用: 中心が濃く裾が長い)
  return canvasTexture(64, (g, s) => {
    const r = s / 2;
    const grad = g.createRadialGradient(r, r, 0, r, r, r);
    grad.addColorStop(0.0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(255,255,255,0.85)');
    grad.addColorStop(0.6, 'rgba(255,255,255,0.28)');
    grad.addColorStop(1.0, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, s, s);
  });
}

function makePuffTex() {
  // 不定形の煙・土埃用(複数の淡い円を重ねる。決定的乱数で生成)
  return canvasTexture(128, (g, s) => {
    const rand = mulberry32(0xE0F);
    const c = s / 2;
    for (let i = 0; i < 9; i++) {
      const a = rand() * Math.PI * 2;
      const dist = rand() * s * 0.16;
      const x = c + Math.cos(a) * dist;
      const y = c + Math.sin(a) * dist;
      const rad = s * (0.16 + rand() * 0.16);
      const grad = g.createRadialGradient(x, y, 0, x, y, rad);
      grad.addColorStop(0, 'rgba(255,255,255,0.30)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grad;
      g.beginPath();
      g.arc(x, y, rad, 0, Math.PI * 2);
      g.fill();
    }
    // 全体を中心からフェードさせて縁を消す
    g.globalCompositeOperation = 'destination-in';
    const m = g.createRadialGradient(c, c, 0, c, c, c);
    m.addColorStop(0, 'rgba(255,255,255,1)');
    m.addColorStop(0.65, 'rgba(255,255,255,0.85)');
    m.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = m;
    g.fillRect(0, 0, s, s);
  });
}

function makeLeafTex() {
  // 小さな葉(白基調 — 頂点色で着色する)
  return canvasTexture(64, (g, s) => {
    const c = s / 2;
    g.translate(c, c);
    const grad = g.createLinearGradient(0, -24, 0, 24);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(185,185,185,1)');
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(0, -23);
    g.bezierCurveTo(11, -13, 12, 8, 0, 23);
    g.bezierCurveTo(-12, 8, -11, -13, 0, -23);
    g.closePath();
    g.fill();
    // 中央の葉脈
    g.strokeStyle = 'rgba(130,130,130,0.55)';
    g.lineWidth = 1.6;
    g.beginPath();
    g.moveTo(0, -19);
    g.lineTo(0, 19);
    g.stroke();
  });
}

// ============================================================================
// パーティクルプール
// CPUデータ: [vx,vy,vz, age,life, size0,alpha0, grav,drag,flut, spin,swirl,grow,
//             fadeIn,fadeOut, pulse, phase] = 17 floats/粒
// ============================================================================
const STRIDE = 17;

// スポーン仕様(共有オブジェクト — 毎フレーム/バーストでの new を避ける)
const P = {
  x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
  life: 1, size: 0.1, r: 1, g: 1, b: 1, alpha: 1,
  grav: 0, drag: 0, flut: 0, spin: 0, swirl: 0, grow: 0,
  fadeIn: 0.02, fadeOut: -1, pulse: 0, rot: 0,
};

function p0(x, y, z) {
  P.x = x; P.y = y; P.z = z;
  P.vx = P.vy = P.vz = 0;
  P.life = 1; P.size = 0.1;
  P.r = P.g = P.b = 1; P.alpha = 1;
  P.grav = 0; P.drag = 0; P.flut = 0; P.spin = 0; P.swirl = 0; P.grow = 0;
  P.fadeIn = 0.02; P.fadeOut = -1; P.pulse = 0; P.rot = 0;
}

class Pool {
  constructor(cap, texture, blending, renderOrder) {
    this.cap = cap;
    this.count = 0;
    this._last = 0;
    this.data = new Float32Array(cap * STRIDE);

    const geo = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(new Float32Array(cap * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(new Float32Array(cap * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aSiz = new THREE.BufferAttribute(new Float32Array(cap), 1).setUsage(THREE.DynamicDrawUsage);
    this.aAlp = new THREE.BufferAttribute(new Float32Array(cap), 1).setUsage(THREE.DynamicDrawUsage);
    this.aRot = new THREE.BufferAttribute(new Float32Array(cap), 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.aPos);
    geo.setAttribute('aColor', this.aCol);
    geo.setAttribute('aSize', this.aSiz);
    geo.setAttribute('aAlpha', this.aAlp);
    geo.setAttribute('aRot', this.aRot);
    geo.setDrawRange(0, 0);
    this.geo = geo;

    this.mat = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: texture }, uScale: { value: 600 } },
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      blending,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      fog: false,
    });

    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = renderOrder;
    this.points.matrixAutoUpdate = false;
  }

  spawn() { // 共有オブジェクト P から1粒生成
    if (this.count >= this.cap) return;
    const i = this.count++;
    const i3 = i * 3;
    const pa = this.aPos.array, ca = this.aCol.array;
    pa[i3] = P.x; pa[i3 + 1] = P.y; pa[i3 + 2] = P.z;
    ca[i3] = P.r; ca[i3 + 1] = P.g; ca[i3 + 2] = P.b;
    this.aSiz.array[i] = P.size;
    this.aAlp.array[i] = P.fadeIn > 0 ? 0 : P.alpha;
    this.aRot.array[i] = P.rot;
    const d = i * STRIDE, D = this.data;
    D[d] = P.vx; D[d + 1] = P.vy; D[d + 2] = P.vz;
    D[d + 3] = 0; D[d + 4] = Math.max(0.05, P.life);
    D[d + 5] = P.size; D[d + 6] = P.alpha;
    D[d + 7] = P.grav; D[d + 8] = P.drag; D[d + 9] = P.flut;
    D[d + 10] = P.spin; D[d + 11] = P.swirl; D[d + 12] = P.grow;
    D[d + 13] = P.fadeIn;
    D[d + 14] = P.fadeOut >= 0 ? P.fadeOut : P.life * 0.35;
    D[d + 15] = P.pulse; D[d + 16] = R() * 6.2831;
  }

  _copy(src, dst) { // 末尾の粒を空いたスロットへ移す(コンパクション)
    const s3 = src * 3, d3 = dst * 3;
    const pa = this.aPos.array, ca = this.aCol.array;
    pa[d3] = pa[s3]; pa[d3 + 1] = pa[s3 + 1]; pa[d3 + 2] = pa[s3 + 2];
    ca[d3] = ca[s3]; ca[d3 + 1] = ca[s3 + 1]; ca[d3 + 2] = ca[s3 + 2];
    this.aSiz.array[dst] = this.aSiz.array[src];
    this.aAlp.array[dst] = this.aAlp.array[src];
    this.aRot.array[dst] = this.aRot.array[src];
    const sd = src * STRIDE, dd = dst * STRIDE, D = this.data;
    for (let k = 0; k < STRIDE; k++) D[dd + k] = D[sd + k];
  }

  update(dt, t) {
    const pa = this.aPos.array, sa = this.aSiz.array, aa = this.aAlp.array, ra = this.aRot.array;
    const D = this.data;
    let i = 0;
    while (i < this.count) {
      const d = i * STRIDE;
      const life = D[d + 4];
      const age = D[d + 3] + dt;
      if (age >= life) {
        this.count--;
        if (i !== this.count) this._copy(this.count, i);
        continue;
      }
      D[d + 3] = age;
      // 速度: 重力 → 抗力 → 渦(水平速度の回転)
      let vx = D[d], vy = D[d + 1], vz = D[d + 2];
      vy -= D[d + 7] * dt;
      const drag = D[d + 8];
      if (drag > 0) {
        const f = Math.max(0, 1 - drag * dt);
        vx *= f; vy *= f; vz *= f;
      }
      const sw = D[d + 11];
      if (sw !== 0) {
        const a = sw * dt, c = Math.cos(a), s = Math.sin(a);
        const nx = vx * c - vz * s;
        vz = vx * s + vz * c;
        vx = nx;
      }
      D[d] = vx; D[d + 1] = vy; D[d + 2] = vz;
      // 位置 + 揺らぎ(flutter)
      const i3 = i * 3;
      let px = pa[i3] + vx * dt, py = pa[i3 + 1] + vy * dt, pz = pa[i3 + 2] + vz * dt;
      const fl = D[d + 9];
      if (fl > 0) {
        const ph = D[d + 16];
        px += Math.cos(t * 1.7 + ph) * fl * dt;
        pz += Math.sin(t * 1.3 + ph * 1.71) * fl * dt;
        py += Math.sin(t * 2.1 + ph * 2.3) * fl * 0.4 * dt;
      }
      pa[i3] = px; pa[i3 + 1] = py; pa[i3 + 2] = pz;
      // 回転・サイズ・アルファ
      ra[i] += D[d + 10] * dt;
      const k = age / life;
      sa[i] = D[d + 5] * (1 + D[d + 12] * k);
      let al = D[d + 6];
      const fi = D[d + 13];
      if (fi > 0 && age < fi) al *= age / fi;
      const rem = life - age, fo = D[d + 14];
      if (rem < fo && fo > 0) al *= rem / fo;
      const pu = D[d + 15];
      if (pu > 0) al *= 0.55 + 0.45 * Math.sin(t * pu + D[d + 16] * 3.0);
      aa[i] = al;
      i++;
    }
    this.geo.setDrawRange(0, this.count);
    if (this.count > 0 || this._last > 0) {
      this._flag(this.aPos, 3);
      this._flag(this.aCol, 3);
      this._flag(this.aSiz, 1);
      this._flag(this.aAlp, 1);
      this._flag(this.aRot, 1);
    }
    this._last = this.count;
  }

  _flag(attr, items) {
    attr.needsUpdate = true;
    if (attr.clearUpdateRanges) {
      attr.clearUpdateRanges();
      attr.addUpdateRange(0, Math.max(this.count, 1) * items);
    }
  }
}

// ============================================================================
// バーストプリセット
// ============================================================================
function cnt(o, base) {
  const mul = (CTX && CTX.quality.particleMul) || 1;
  return Math.max(1, Math.round((o.count != null ? o.count : base) * mul));
}

// 基準色(opts.color 指定があればそれを優先)を C に設定
function baseColor(o, r, g, b) {
  if (o && o.color != null) C.set(o.color);
  else C.setRGB(r, g, b);
  return C;
}

// C にジッターを掛けて P.r/g/b へ
function tint(lo, hi) {
  const j = rr(lo, hi);
  P.r = C.r * j; P.g = C.g * j; P.b = C.b * j;
}

const PRESETS = {
  // 白金の火花が放射(斬撃ヒット)
  hit(x, y, z, o, s) {
    // 一瞬の閃光
    p0(x, y, z);
    baseColor(o, 1.15, 1.1, 0.92); tint(0.95, 1.0);
    P.size = 1.0 * s; P.life = 0.15; P.alpha = 0.65; P.grow = 1.6;
    P.fadeIn = 0; P.fadeOut = 0.12;
    poolAdd.spawn();
    const n = cnt(o, 20);
    for (let i = 0; i < n; i++) {
      p0(x, y, z);
      const th = R() * Math.PI * 2, ph = (R() - 0.35) * 1.5;
      const sp = rr(3.2, 8.0) * s;
      P.vx = Math.cos(th) * Math.cos(ph) * sp;
      P.vy = Math.sin(ph) * sp * 0.8 + 1.2;
      P.vz = Math.sin(th) * Math.cos(ph) * sp;
      P.grav = 16; P.drag = 1.2;
      P.life = rr(0.22, 0.5); P.size = rr(0.05, 0.11) * s;
      if (o && o.color != null) { baseColor(o, 1, 1, 1); tint(0.85, 1.1); }
      else { const k = R(); P.r = 1.1; P.g = 1.05 - 0.28 * k; P.b = 0.92 - 0.55 * k; }
      P.fadeIn = 0; P.fadeOut = 0.12;
      poolAdd.spawn();
    }
  },

  // 小さな金の火花(剣が石を掠める等)
  spark(x, y, z, o, s) {
    const n = cnt(o, 12);
    baseColor(o, 1.05, 0.8, 0.38);
    for (let i = 0; i < n; i++) {
      p0(x, y, z);
      tint(0.8, 1.1);
      const th = R() * Math.PI * 2;
      const sp = rr(1.6, 4.4) * s;
      P.vx = Math.cos(th) * sp; P.vz = Math.sin(th) * sp;
      P.vy = rr(0.8, 3.0) * s;
      P.grav = 10; P.drag = 1.0;
      P.life = rr(0.3, 0.65); P.size = rr(0.04, 0.09) * s;
      P.fadeIn = 0; P.fadeOut = 0.15;
      poolAdd.spawn();
    }
  },

  // 撃破: 紫黒の煙 + 立ち上る魔素の粒
  death(x, y, z, o, s) {
    const ns = cnt(o, 12);
    for (let i = 0; i < ns; i++) {
      p0(x + rr(-0.4, 0.4) * s, y + rr(0, 0.7) * s, z + rr(-0.4, 0.4) * s);
      const j = rr(0.75, 1.25);
      P.r = 0.13 * j; P.g = 0.08 * j; P.b = 0.20 * j;
      const th = R() * Math.PI * 2;
      const sp = rr(0.1, 0.7);
      P.vx = Math.cos(th) * sp; P.vz = Math.sin(th) * sp;
      P.vy = rr(0.4, 1.1);
      P.drag = 1.8; P.spin = rr(-1.2, 1.2);
      P.life = rr(1.0, 1.9); P.size = rr(0.5, 0.9) * s;
      P.alpha = rr(0.4, 0.58); P.grow = 1.6;
      P.fadeIn = 0.06;
      poolAlpha.spawn();
    }
    const nm = cnt(o, 14);
    baseColor(o, 0.5, 0.2, 1.0);
    for (let i = 0; i < nm; i++) {
      p0(x + rr(-0.5, 0.5) * s, y + rr(0.1, 0.9) * s, z + rr(-0.5, 0.5) * s);
      tint(0.75, 1.1);
      const th = R() * Math.PI * 2;
      const sp = rr(0.2, 0.8);
      P.vx = Math.cos(th) * sp; P.vz = Math.sin(th) * sp;
      P.vy = rr(0.7, 1.9);
      P.swirl = rr(1.5, 3.5) * (R() < 0.5 ? -1 : 1);
      P.flut = 0.5; P.drag = 0.3;
      P.life = rr(0.9, 1.8); P.size = rr(0.05, 0.11) * s;
      P.fadeIn = 0.1;
      poolAdd.spawn();
    }
  },

  // 草の切れ端が舞う
  grass(x, y, z, o, s) {
    const n = cnt(o, 10);
    for (let i = 0; i < n; i++) {
      p0(x + rr(-0.3, 0.3), y + rr(0, 0.3), z + rr(-0.3, 0.3));
      if (o && o.color != null) { baseColor(o, 1, 1, 1); tint(0.8, 1.1); }
      else { P.r = rr(0.12, 0.24); P.g = rr(0.3, 0.48); P.b = rr(0.06, 0.14); }
      const th = R() * Math.PI * 2;
      const sp = rr(0.8, 2.6) * s;
      P.vx = Math.cos(th) * sp; P.vz = Math.sin(th) * sp;
      P.vy = rr(1.2, 3.2) * s;
      P.grav = 7; P.drag = 0.8; P.flut = 1.2;
      P.rot = R() * 6.28; P.spin = rr(-8, 8);
      P.life = rr(0.7, 1.4); P.size = rr(0.11, 0.19) * s;
      P.fadeIn = 0; P.fadeOut = 0.2;
      poolLeaf.spawn();
    }
  },

  // 柔らかな土埃
  dust(x, y, z, o, s) {
    const n = cnt(o, 9);
    baseColor(o, 0.58, 0.52, 0.42);
    for (let i = 0; i < n; i++) {
      p0(x + rr(-0.3, 0.3) * s, y + rr(0, 0.25), z + rr(-0.3, 0.3) * s);
      tint(0.85, 1.15);
      const th = R() * Math.PI * 2;
      const sp = rr(0.4, 1.4) * s;
      P.vx = Math.cos(th) * sp; P.vz = Math.sin(th) * sp;
      P.vy = rr(0.2, 0.7);
      P.drag = 2.2; P.spin = rr(-0.8, 0.8);
      P.life = rr(0.6, 1.2); P.size = rr(0.3, 0.6) * s;
      P.alpha = rr(0.2, 0.33); P.grow = 1.8;
      P.fadeIn = 0.05;
      poolAlpha.spawn();
    }
  },

  // 桃色の光粒がゆっくり上昇(回復)
  heal(x, y, z, o, s) {
    const n = cnt(o, 14);
    baseColor(o, 1.0, 0.4, 0.58);
    for (let i = 0; i < n; i++) {
      const th = R() * Math.PI * 2, rad = rr(0.15, 0.85) * s;
      p0(x + Math.cos(th) * rad, y + rr(0, 0.6), z + Math.sin(th) * rad);
      tint(0.85, 1.05);
      P.vy = rr(0.5, 1.2);
      P.flut = 0.4; P.pulse = rr(2, 4);
      P.life = rr(1.3, 2.2); P.size = rr(0.06, 0.12) * s;
      P.alpha = 0.85; P.fadeIn = 0.25;
      poolAdd.spawn();
    }
  },

  // シアンの光が渦を巻いて上昇(気の珠・祠)
  orb(x, y, z, o, s) {
    const n = cnt(o, 18);
    baseColor(o, 0.1, 0.85, 0.8);
    for (let i = 0; i < n; i++) {
      const th = R() * Math.PI * 2, rad = rr(0.25, 0.8) * s;
      p0(x + Math.cos(th) * rad, y + rr(0, 0.5), z + Math.sin(th) * rad);
      tint(0.8, 1.05);
      const tsp = rr(1.2, 2.2) * s; // 接線方向 → swirl で螺旋に
      P.vx = -Math.sin(th) * tsp; P.vz = Math.cos(th) * tsp;
      P.vy = rr(1.0, 2.2);
      P.swirl = 3.0; P.drag = 0.3;
      P.life = rr(1.1, 1.9); P.size = rr(0.06, 0.12) * s;
      P.fadeIn = 0.12;
      poolAdd.spawn();
    }
  },

  // 火の粉が爆ぜる
  fire(x, y, z, o, s) {
    // ほの明るい火明かり
    for (let i = 0; i < 2; i++) {
      p0(x + rr(-0.2, 0.2), y + rr(0, 0.3), z + rr(-0.2, 0.2));
      baseColor(o, 1.0, 0.42, 0.14); tint(0.85, 1.0);
      P.size = rr(0.4, 0.6) * s; P.life = rr(0.2, 0.35);
      P.alpha = 0.35; P.grow = 1.4; P.fadeIn = 0;
      poolAdd.spawn();
    }
    const n = cnt(o, 15);
    for (let i = 0; i < n; i++) {
      p0(x + rr(-0.25, 0.25) * s, y + rr(0, 0.3), z + rr(-0.25, 0.25) * s);
      if (o && o.color != null) { baseColor(o, 1, 1, 1); tint(0.85, 1.1); }
      else { const k = R(); P.r = 1.12; P.g = 0.5 + 0.3 * k; P.b = 0.14 + 0.14 * k; }
      const th = R() * Math.PI * 2;
      const sp = rr(0.6, 2.4) * s;
      P.vx = Math.cos(th) * sp; P.vz = Math.sin(th) * sp;
      P.vy = rr(1.8, 4.5) * s;
      P.grav = 3.5; P.drag = 0.7; P.flut = 0.8;
      P.life = rr(0.5, 1.1); P.size = rr(0.045, 0.1) * s;
      P.fadeIn = 0; P.fadeOut = 0.18;
      poolAdd.spawn();
    }
  },

  // 紫の魔力が弾ける
  magic(x, y, z, o, s) {
    p0(x, y, z);
    baseColor(o, 0.58, 0.32, 1.1); tint(0.9, 1.0);
    P.size = 0.85 * s; P.life = 0.16; P.alpha = 0.5; P.grow = 1.5;
    P.fadeIn = 0; P.fadeOut = 0.13;
    poolAdd.spawn();
    const n = cnt(o, 16);
    baseColor(o, 0.5, 0.22, 1.05);
    for (let i = 0; i < n; i++) {
      p0(x, y, z);
      tint(0.8, 1.1);
      const th = R() * Math.PI * 2, ph = (R() - 0.5) * 2.4;
      const sp = rr(1.8, 4.5) * s;
      P.vx = Math.cos(th) * Math.cos(ph) * sp;
      P.vy = Math.sin(ph) * sp * 0.7 + 0.8;
      P.vz = Math.sin(th) * Math.cos(ph) * sp;
      P.swirl = rr(-3, 3); P.drag = 2.4;
      P.life = rr(0.5, 1.0); P.size = rr(0.05, 0.13) * s;
      P.fadeIn = 0; P.fadeOut = 0.2;
      poolAdd.spawn();
    }
  },

  // 葉がひらひらと舞い落ちる
  leaf(x, y, z, o, s) {
    const n = cnt(o, 7);
    for (let i = 0; i < n; i++) {
      p0(x + rr(-1.2, 1.2) * s, y + rr(0, 1.5) * s, z + rr(-1.2, 1.2) * s);
      if (o && o.color != null) { baseColor(o, 1, 1, 1); tint(0.8, 1.1); }
      else {
        const k = R();
        P.r = 0.14 + 0.18 * k; P.g = rr(0.32, 0.5); P.b = 0.07 + 0.09 * k;
      }
      P.vx = rr(-0.3, 0.3); P.vz = rr(-0.3, 0.3);
      P.vy = rr(-0.5, -0.2);
      P.grav = 0.9; P.drag = 0.6; P.flut = 1.6;
      P.rot = R() * 6.28; P.spin = rr(-4, 4);
      P.life = rr(2.5, 4.5); P.size = rr(0.1, 0.18) * s;
      P.fadeIn = 0.2; P.fadeOut = 0.5;
      poolLeaf.spawn();
    }
  },

  // ふわり漂う光点(蛍)
  firefly(x, y, z, o, s) {
    const n = cnt(o, 5);
    baseColor(o, 0.72, 0.95, 0.38);
    for (let i = 0; i < n; i++) {
      p0(x + rr(-1.5, 1.5) * s, y + rr(0.2, 1.8) * s, z + rr(-1.5, 1.5) * s);
      tint(0.75, 1.0);
      P.vx = rr(-0.15, 0.15); P.vy = rr(-0.05, 0.15); P.vz = rr(-0.15, 0.15);
      P.flut = 0.7;
      P.life = rr(4, 7); P.size = rr(0.05, 0.08) * s;
      P.alpha = 0.9; P.pulse = rr(1.5, 3);
      P.fadeIn = 0.8; P.fadeOut = 1.2;
      poolAdd.spawn();
    }
  },
};

// ============================================================================
// 常駐環境演出(プレイヤー周辺30m・頻度控えめに)
// ============================================================================
let biome = 'plains';
let biomeT = 0;
const acc = { firefly: 0, leaf: 0, ember: 0, heat: 0, glint: 0, fluff: 0, rune: 0, mote: 0 };

// プレイヤー周辺のランダム地点(戻り値は P.x/P.z に直接は入れず引数レスで共有)
let _ax = 0, _az = 0;
function around(p, rMin, rMax) {
  const th = R() * Math.PI * 2, rad = rr(rMin, rMax);
  _ax = p.x + Math.cos(th) * rad;
  _az = p.z + Math.sin(th) * rad;
}

function spawnRune(ctx, p) {
  around(p, 1, 7);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(0.2, 1.8), _az);
  P.r = 0.2; P.g = 0.82; P.b = 0.72;
  P.vy = rr(0.25, 0.6);
  P.flut = 0.25;
  P.life = rr(2.5, 4); P.size = rr(0.03, 0.07);
  P.alpha = 0.8; P.pulse = 2.5; P.fadeIn = 0.5; P.fadeOut = 0.8;
  poolAdd.spawn();
}

function spawnFirefly(ctx, p) {
  around(p, 4, 26);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(0.4, 2.2), _az);
  const j = rr(0.7, 1.0);
  P.r = 0.72 * j; P.g = 0.95 * j; P.b = 0.36 * j;
  P.vx = rr(-0.15, 0.15); P.vy = rr(-0.05, 0.12); P.vz = rr(-0.15, 0.15);
  P.flut = 0.7;
  P.life = rr(5, 9); P.size = rr(0.05, 0.08);
  P.alpha = 0.9; P.pulse = rr(1.4, 2.8);
  P.fadeIn = 1.0; P.fadeOut = 1.4;
  poolAdd.spawn();
}

function spawnForestLeaf(ctx, p) {
  around(p, 3, 24);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(3, 8), _az);
  const k = R();
  P.r = 0.14 + 0.18 * k; P.g = rr(0.3, 0.5); P.b = 0.07 + 0.09 * k;
  P.vx = rr(-0.3, 0.3); P.vy = rr(-0.55, -0.25); P.vz = rr(-0.3, 0.3);
  P.grav = 0.9; P.drag = 0.6; P.flut = 1.6;
  P.rot = R() * 6.28; P.spin = rr(-4, 4);
  P.life = rr(4, 7); P.size = rr(0.09, 0.17);
  P.fadeIn = 0.4; P.fadeOut = 0.6;
  poolLeaf.spawn();
}

function spawnEmber(ctx, p) {
  around(p, 3, 26);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(0, 1), _az);
  const k = R();
  P.r = 1.1; P.g = 0.45 + 0.3 * k; P.b = 0.12 + 0.12 * k;
  P.vy = rr(0.8, 2.2);
  P.grav = -0.4; P.flut = 0.6;
  P.life = rr(1.2, 2.6); P.size = rr(0.04, 0.09);
  P.fadeIn = 0.1; P.fadeOut = 0.4;
  poolAdd.spawn();
}

function spawnHeat(ctx, p) {
  around(p, 2, 20);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(0.2, 1), _az);
  const j = rr(0.8, 1.1);
  P.r = 0.95 * j; P.g = 0.6 * j; P.b = 0.36 * j;
  P.vy = rr(1.0, 2.0);
  P.drag = 0.3; P.flut = 0.5;
  P.life = rr(1.2, 2.0); P.size = rr(0.8, 1.4);
  P.alpha = 0.06; P.grow = 1.2; P.fadeIn = 0.4;
  poolAlpha.spawn();
}

function spawnGlint(ctx, p) {
  around(p, 2, 28);
  const w = ctx.world;
  if (w.getHeight(_ax, _az) >= w.waterLevel - 0.12) return; // 水面のみ
  p0(_ax, w.waterLevel + 0.04, _az);
  const j = rr(0.7, 1.1);
  P.r = 0.8 * j; P.g = 0.98 * j; P.b = 1.0 * j;
  P.life = rr(0.5, 1.1); P.size = rr(0.03, 0.07);
  P.alpha = 0.9; P.pulse = 8; P.fadeIn = 0.15; P.fadeOut = 0.3;
  poolAdd.spawn();
}

function spawnFluff(ctx, p) {
  around(p, 4, 26);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(0.5, 2.5), _az);
  const j = rr(0.85, 1.0);
  P.r = 0.95 * j; P.g = 0.95 * j; P.b = 0.9 * j;
  P.vx = rr(0.25, 0.7); P.vy = rr(0.08, 0.3); P.vz = rr(-0.2, 0.2);
  P.flut = 0.9;
  P.life = rr(5, 8); P.size = rr(0.06, 0.1);
  P.alpha = 0.55; P.fadeIn = 1.0; P.fadeOut = 1.2;
  poolAlpha.spawn();
}

function spawnDarkMote(ctx, p) {
  around(p, 3, 22);
  const gy = ctx.getGroundHeight(_ax, _az);
  p0(_ax, gy + rr(0.2, 3), _az);
  const j = rr(0.7, 1.0);
  P.r = 0.48 * j; P.g = 0.28 * j; P.b = 0.72 * j;
  P.vy = rr(0.2, 0.5);
  P.flut = 0.4;
  P.life = rr(2, 4); P.size = rr(0.04, 0.08);
  P.alpha = 0.55; P.pulse = rr(1.5, 3);
  P.fadeIn = 0.6; P.fadeOut = 0.8;
  poolAdd.spawn();
}

function pour(key, rate, dt, fn, ctx, p) {
  acc[key] += rate * dt;
  while (acc[key] >= 1) { acc[key] -= 1; fn(ctx, p); }
}

function ambient(ctx, dt) {
  const pl = ctx.player;
  if (!pl || !ctx.world) return;
  const p = pl.position;
  const mul = ctx.quality.particleMul || 1;

  biomeT -= dt;
  if (biomeT <= 0) {
    biomeT = 0.5;
    biome = ctx.world.getBiome(p.x, p.z) || 'plains';
  }

  // 祠の中は神聖な静寂 — ルーンの微粒子のみ
  if (ctx.state === 'shrine') {
    pour('rune', 0.9 * mul, dt, spawnRune, ctx, p);
    return;
  }

  // 夜は蛍(火山・魔城以外)
  if (ctx.time.isNight && biome !== 'volcano' && biome !== 'castle') {
    pour('firefly', 1.0 * mul, dt, spawnFirefly, ctx, p);
  }

  if (biome === 'forest') {
    pour('leaf', 1.4 * mul, dt, spawnForestLeaf, ctx, p);
  } else if (biome === 'volcano') {
    pour('ember', 3.0 * mul, dt, spawnEmber, ctx, p);
    pour('heat', 0.7 * mul, dt, spawnHeat, ctx, p);
  } else if (biome === 'lake') {
    pour('glint', 5.0 * mul, dt, spawnGlint, ctx, p);
  } else if (biome === 'plains') {
    if (!ctx.time.isNight) pour('fluff', 0.3 * mul, dt, spawnFluff, ctx, p);
  } else if (biome === 'castle') {
    pour('mote', 0.5 * mul, dt, spawnDarkMote, ctx, p);
  }
}

// ============================================================================
// ポストプロセス構築 / サイズ追従
// ============================================================================
function buildComposer() {
  if (composer || !CTX) return;
  const { renderer, scene, camera } = CTX;
  renderer.getDrawingBufferSize(V2);
  const rt = new THREE.WebGLRenderTarget(Math.max(1, V2.x), Math.max(1, V2.y), {
    type: THREE.HalfFloatType,
    samples: 4, // トゥーン輪郭のエッジを滑らかに(MSAA)
  });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.38, 0.55, 0.82);
  composer.addPass(bloomPass);
  composer.addPass(new OutputPass());
  gradePass = new ShaderPass(GradeShader);
  composer.addPass(gradePass); // 表示色空間で色調整(最終段)
  fitComposer();
}

function fitComposer() {
  if (!CTX) return;
  if (composer) {
    // MSAA サンプル数を品質に合わせる(変更時は dispose で再確保)
    const smp = CTX.settings.quality === 'high' ? 4 : 2;
    if (composer.renderTarget1.samples !== smp) {
      composer.renderTarget1.samples = smp;
      composer.renderTarget2.samples = smp;
      composer.renderTarget1.dispose();
      composer.renderTarget2.dispose();
    }
    composer.setPixelRatio(CTX.quality.pixelRatio || 1);
    composer.setSize(innerWidth, innerHeight);
  }
  // 解像度依存ユニフォーム(ポイントサイズ・グレイン)
  CTX.renderer.getDrawingBufferSize(V2);
  const scale = V2.y / (2 * Math.tan(THREE.MathUtils.degToRad(CTX.camera.fov) * 0.5));
  if (poolAdd) {
    poolAdd.mat.uniforms.uScale.value = scale;
    poolAlpha.mat.uniforms.uScale.value = scale;
    poolLeaf.mat.uniforms.uScale.value = scale;
  }
  if (gradePass) gradePass.uniforms.uRes.value.set(V2.x, V2.y);
}

// ============================================================================
// 契約 API
// ============================================================================
function render() {
  if (!CTX) return;
  if (composer && CTX.quality.postFX) {
    if (gradePass) gradePass.uniforms.uTime.value = CTX.time.elapsed % 1000;
    composer.render();
  } else {
    CTX.renderer.render(CTX.scene, CTX.camera);
  }
}

function burst(pos, preset, opts) {
  if (!pos || !PRESETS[preset]) return;
  const o = opts || {};
  const s = o.scale || 1;
  // pos は呼び出し側の所有物 — 成分のみ読み取り(コピーして使用)
  PRESETS[preset](pos.x, pos.y, pos.z, o, s);
}

function onResize() {
  fitComposer();
}

export async function init(ctx) {
  CTX = ctx;

  const softTex = makeSoftTex();
  const puffTex = makePuffTex();
  const leafTex = makeLeafTex();

  poolAdd = new Pool(2000, softTex, THREE.AdditiveBlending, 950);
  poolAlpha = new Pool(2000, puffTex, THREE.NormalBlending, 940);
  poolLeaf = new Pool(1200, leafTex, THREE.NormalBlending, 945);
  ctx.scene.add(poolAlpha.points, poolLeaf.points, poolAdd.points);

  if (ctx.quality.postFX) buildComposer();
  fitComposer();

  ctx.on('quality-changed', (q) => {
    if (q && q.postFX && !composer) buildComposer();
    fitComposer();
  });

  ctx.effects = { render, burst, onResize };
}

export function update(ctx, dt) {
  const t = ctx.time.elapsed;
  poolAdd.update(dt, t);
  poolAlpha.update(dt, t);
  poolLeaf.update(dt, t);
  ambient(ctx, dt);
}
