// 共有ユーティリティ — 全モジュール共通。編集禁止(契約: ARCHITECTURE.md)
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ---------------- 乱数(シード付き・決定的) ----------------
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const rng = mulberry32(0x51DA); // 共有インスタンス(ワールド生成等の決定性が必要な場面ではローカル生成を推奨)

// ---------------- 2D Simplex ノイズ ----------------
const GRAD = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
];

export class Simplex2 {
  constructor(seed = 1337) {
    const rand = mulberry32(seed);
    this.perm = new Uint8Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }
  noise(xin, yin) {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    let n0 = 0, n1 = 0, n2 = 0;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s), j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const x0 = xin - (i - t), y0 = yin - (j - t);
    const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      const g = GRAD[this.perm[ii + this.perm[jj]] % 8];
      t0 *= t0; n0 = t0 * t0 * (g[0] * x0 + g[1] * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      const g = GRAD[this.perm[ii + i1 + this.perm[jj + j1]] % 8];
      t1 *= t1; n1 = t1 * t1 * (g[0] * x1 + g[1] * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      const g = GRAD[this.perm[ii + 1 + this.perm[jj + 1]] % 8];
      t2 *= t2; n2 = t2 * t2 * (g[0] * x2 + g[1] * y2);
    }
    return 70 * (n0 + n1 + n2); // おおよそ [-1, 1]
  }
  // フラクタル(fBm)。octaves 3〜5 推奨
  fbm(x, y, octaves = 4, lacunarity = 2.0, gain = 0.5) {
    let amp = 0.5, freq = 1, sum = 0, norm = 0;
    for (let o = 0; o < octaves; o++) {
      sum += amp * this.noise(x * freq, y * freq);
      norm += amp;
      amp *= gain; freq *= lacunarity;
    }
    return sum / norm;
  }
}

// ---------------- 数学ヘルパー ----------------
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
// フレームレート非依存の指数減衰補間: current→target(rate は 1/秒 目安 4〜12)
export const damp = (current, target, rate, dt) => lerp(current, target, 1 - Math.exp(-rate * dt));
// 角度差を [-PI, PI] に正規化
export const angleDelta = (from, to) => {
  let d = (to - from) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
};
export const dampAngle = (current, target, rate, dt) =>
  current + angleDelta(current, target) * (1 - Math.exp(-rate * dt));

// ---------------- トゥーン調マテリアル(共有) ----------------
let _gradientMap = null;
export function toonGradientMap() {
  if (_gradientMap) return _gradientMap;
  // 5段階のセルシェーディング用グラデーション(旧4段より階調が豊かで、陰は締まり
  // ハイライト側は伸びる。バンドの境目に僅かな中間色を挟み「板っぽさ」を軽減)。
  const data = new Uint8Array([58, 104, 150, 200, 245]);
  const tex = new THREE.DataTexture(data, data.length, 1, THREE.RedFormat);
  tex.minFilter = THREE.LinearFilter;   // 境界をほんの少しだけ滑らかに(セル感は保つ)
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  _gradientMap = tex;
  return tex;
}

// 統一ルック: 必ずこれで作る。opts は MeshToonMaterial のパラメータを上書き
export function toonMaterial(color, opts = {}) {
  return new THREE.MeshToonMaterial({
    color,
    gradientMap: toonGradientMap(),
    ...opts,
  });
}

// 発光素材(Bloom で輝く)。intensity 0.6〜2.5 目安
export function glowMaterial(color, intensity = 1.2, opts = {}) {
  return new THREE.MeshToonMaterial({
    color,
    gradientMap: toonGradientMap(),
    emissive: new THREE.Color(color),
    emissiveIntensity: intensity,
    ...opts,
  });
}

// リムライト付きトゥーン素材。輪郭に沿って淡い縁光を足し、立体感と高級感を出す。
// 主役級(勇者・ボス等)向け。opts.rimColor / rimStrength(0.2〜0.6) / rimPower(2〜4)。
export function rimToon(color, opts = {}) {
  const {
    rimColor = 0xdff0ff, rimStrength = 0.35, rimPower = 3.0, ...rest
  } = opts;
  const m = new THREE.MeshToonMaterial({ color, gradientMap: toonGradientMap(), ...rest });
  const uRim = { value: new THREE.Color(rimColor) };
  const uStr = { value: rimStrength };
  const uPow = { value: rimPower };
  m.userData.rim = { uRim, uStr, uPow };
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uRimColor = uRim;
    shader.uniforms.uRimStrength = uStr;
    shader.uniforms.uRimPower = uPow;
    // GLSL側に uniform 宣言を注入(共通チャンクの直後)。宣言漏れだとコンパイルに失敗する。
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
       uniform vec3 uRimColor;
       uniform float uRimStrength;
       uniform float uRimPower;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `#include <opaque_fragment>
       {
         float _rim = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0), uRimPower);
         gl_FragColor.rgb += uRimColor * (_rim * uRimStrength);
       }`
    );
  };
  // three にマテリアル種別のキャッシュを分けさせる(onBeforeCompile 併用時の安全策)
  m.customProgramCacheKey = () => 'rimToon';
  return m;
}

// 反転ハル方式の輪郭線。mesh の子として黒いバックフェースを法線方向に押し出して描く。
// セル調の締まった輪郭を与える(非スキンメッシュ向け)。thickness は mesh のローカル単位。
export function addOutline(mesh, opts = {}) {
  const { color = 0x0b0d14, thickness = 0.03 } = opts;
  const mat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uThick: { value: thickness } },
    vertexShader: `
      uniform float uThick;
      void main() {
        vec3 p = position + normalize(normal) * uThick;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 uColor;
      void main() { gl_FragColor = vec4(uColor, 1.0); }`,
    side: THREE.BackSide,
  });
  const outline = new THREE.Mesh(mesh.geometry, mat);
  outline.castShadow = false;
  outline.receiveShadow = false;
  outline.frustumCulled = mesh.frustumCulled;
  mesh.add(outline);
  return outline;
}

// ---------------- CanvasTexture ヘルパー ----------------
export function canvasTexture(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ---------------- シーングラフ小物 ----------------
// プリミティブを組み合わせてキャラ等を作るときの糖衣
export function part(geo, mat, x = 0, y = 0, z = 0, parent = null) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}

// 一時変数(毎フレームの new を避ける)— 借りたフレーム内でのみ使用
export const TMP = {
  v1: new THREE.Vector3(),
  v2: new THREE.Vector3(),
  v3: new THREE.Vector3(),
  q1: new THREE.Quaternion(),
  c1: new THREE.Color(),
};

// ---------------- GLB読み込み(Kenney等のCC0モデル用) ----------------
const _gltfLoader = new GLTFLoader();
const _gltfCache = new Map(); // url → Promise<GLTF>(同一モデルの重複ロードを防ぐ)

// url(例 'assets/kenney/characters/character-human.glb')を読み込みPromiseで返す。結果はキャッシュされる。
export function loadGLTF(url) {
  if (!_gltfCache.has(url)) {
    _gltfCache.set(url, new Promise((resolve, reject) => {
      _gltfLoader.load(url, resolve, undefined, reject);
    }));
  }
  return _gltfCache.get(url);
}

// GLTFシーンの全メッシュのマテリアルを、元のtexture/skinningを保ったままトゥーン調に置き換える。
// tint: 乗算する色(0xffffffなら元の配色のまま)。emissiveIntensity等の追加opts可。
export function toonifyGLTF(root, tint = 0xffffff, opts = {}) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    const src = o.material;
    // three r170 では skinning はマテリアルのパラメータではなく isSkinnedMesh から自動判定される。
    const mat = new THREE.MeshToonMaterial({
      map: src.map || null,
      color: tint,
      gradientMap: toonGradientMap(),
      transparent: src.transparent,
      alphaTest: src.alphaTest,
      ...opts,
    });
    o.material = mat;
    o.castShadow = true;
  });
  return root;
}

// バウンディングボックスから正規化スケールを算出(高さ基準 or XZ半径基準)。
// pushGeo/composeAt 等の既存インスタンス変換(sx,sy,sz)と噛み合うよう、
// 呼び出し側が「意図した基準寸法」に対する倍率を得るためのヘルパー。
export function measureObject(root) {
  const box = new THREE.Box3().setFromObject(root);
  const size = new THREE.Vector3();
  box.getSize(size);
  return { size, box };
}
