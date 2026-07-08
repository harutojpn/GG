// sky.js — 空ドーム・太陽/月/星・雲・昼夜サイクル・ライティングリグ・霧
// 契約: ARCHITECTURE.md — ctx.sky = { sunDir, sunLight, setOverride(mode) }
// dayPhase: 0=夜明け / 0.25=正午 / 0.5=日暮れ / 0.75=真夜中(全て連続補間)
import * as THREE from 'three';
import { lerp, smoothstep, damp, toonMaterial, mulberry32 } from './util.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------- 空ドームシェーダ ----------------
const DOME_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const DOME_FRAG = /* glsl */ `
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uHor;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uSunCol;
uniform float uGlow;
uniform float uNight;
uniform float uTime;
uniform float uFlash;
uniform float uSunI;
varying vec3 vDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;

  // 縦グラデーション(地平線の霞 → 中間 → 天頂)
  vec3 col = mix(uHor, uMid, smoothstep(-0.06, 0.16, h));
  col = mix(col, uTop, smoothstep(0.10, 0.60, h));
  col *= 1.0 - 0.42 * smoothstep(0.02, 0.42, -h); // 地平線下は静かに沈める

  // 太陽ディスク + 柔らかいグロー(夜明け/夕暮れは uGlow が強まる)
  float sd = dot(d, uSunDir);
  float disk = smoothstep(0.99938, 0.99966, sd);
  float halo = pow(max(sd, 0.0), 80.0) * 0.38 + pow(max(sd, 0.0), 7.0) * 0.12;
  col += uSunCol * (disk * 1.7 + halo * uGlow) * uSunI;

  // 夜: 星・天の川・月(uNight で連続フェード)
  float nightAmt = uNight * smoothstep(-0.04, 0.22, h);
  float moonAmt = uNight * smoothstep(-0.10, 0.02, h);
  if (nightAmt + moonAmt > 0.004) {
    // 瞬く星(方向セルのハッシュ)
    vec3 sp = d * 140.0;
    vec3 cell = floor(sp);
    vec3 f = fract(sp) - 0.5;
    float h1 = hash13(cell);
    vec3 mwN = normalize(vec3(0.58, 0.18, 0.79));
    float bd = dot(d, mwN);
    float band = exp(-bd * bd * 55.0);
    vec3 j = vec3(hash13(cell + 17.1), hash13(cell + 31.7), hash13(cell + 47.3)) - 0.5;
    float sdist = length(f - j * 0.72);
    float thr = 0.986 - band * 0.03; // 天の川帯は星密度が上がる
    float srad = 0.14 + 0.26 * hash13(cell + 5.5);
    float star = step(thr, h1) * smoothstep(srad, 0.0, sdist);
    float tw = 0.7 + 0.3 * sin(uTime * (1.2 + h1 * 5.0) + h1 * 44.0);
    float bright = 0.5 + 1.3 * pow(hash13(cell + 9.9), 4.0);
    col += mix(vec3(1.0, 0.93, 0.82), vec3(0.80, 0.90, 1.0), hash13(cell + 13.3))
         * (star * tw * bright * nightAmt);

    // 天の川(帯 + まだら雲)
    float pat = vnoise(d * 10.0) * 0.6 + vnoise(d * 24.0) * 0.4;
    float mw = band * smoothstep(0.32, 0.78, pat);
    col += vec3(0.52, 0.60, 0.85) * (mw * nightAmt * 0.17);
    col += vec3(0.85, 0.82, 0.95) * (band * band * nightAmt * 0.035);

    // 月(海の模様 + 欠け + 淡い暈)
    float md = dot(d, uMoonDir);
    if (md > 0.9985) {
      float mdisk = smoothstep(0.99952, 0.99982, md);
      vec3 mo = normalize(uMoonDir + vec3(0.030, 0.014, -0.012));
      float shade = smoothstep(0.99940, 0.99986, dot(d, mo));
      float sea = vnoise(d * 420.0) * 0.5 + vnoise(d * 840.0) * 0.5;
      float mtex = 0.78 + 0.22 * smoothstep(0.30, 0.70, sea);
      col += vec3(0.92, 0.96, 1.05)
           * (mdisk * max(1.0 - shade * 0.9, 0.06) * mtex * moonAmt * 1.25);
    }
    col += vec3(0.55, 0.65, 0.90) * (pow(max(md, 0.0), 300.0) * moonAmt * 0.35);
  }

  // 稲光(ボス戦のみ・控えめな冷光)
  col += vec3(0.40, 0.36, 0.52) * uFlash;

  // ディザ(グラデーションのバンディング低減)
  col += (hash13(d * 63.7) - 0.5) * 0.008;

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

// ---------------- 昼夜パレット(キーフレーム連続補間) ----------------
const C = (hex) => new THREE.Color(hex);
function K(p, top, mid, hor, sun, glow, light, lightInt, hemiS, hemiG, hemiInt, cloud, fogN, fogF) {
  return {
    p, top: C(top), mid: C(mid), hor: C(hor), sun: C(sun), glow,
    light: C(light), lightInt, hemiS: C(hemiS), hemiG: C(hemiG), hemiInt,
    cloud: C(cloud), fogN, fogF,
  };
}
// p / 天頂 / 中間 / 地平線 / 太陽色 / 暈 / 直射光 / 強さ / 半球空 / 半球地 / 強さ / 雲 / 霧near / 霧far
const KEYS = [
  K(0.000, 0x46508c, 0xc4737f, 0xf8c184, 0xffd9a6, 1.70, 0xffb27c, 1.15, 0x9a86a0, 0x4c4238, 0.50, 0xf0b49a, 130, 1150), // 夜明け(茜と金)
  K(0.035, 0x4d5590, 0xd07f7d, 0xffc470, 0xffdca4, 1.50, 0xffc088, 1.50, 0xa695ae, 0x54483e, 0.62, 0xffcfa4, 150, 1250), // 朝焼けの盛り
  K(0.085, 0x4c78b8, 0x93b8d8, 0xf0d2a0, 0xffe8c0, 1.00, 0xffd9a8, 1.80, 0xaecce8, 0x5a6650, 0.78, 0xffe0cc, 180, 1350), // 朝
  K(0.140, 0x4586d2, 0x82c4e8, 0xdcedec, 0xfff2d6, 0.65, 0xffedc8, 2.10, 0xc4e2f6, 0x66765c, 0.90, 0xfbfdfe, 220, 1500),
  K(0.250, 0x3d7dd2, 0x7ec8e8, 0xdaeef2, 0xfff8e8, 0.50, 0xfff2d8, 2.30, 0xcfe9fa, 0x6c7c60, 0.95, 0xf6fafc, 260, 1600), // 正午(爽やかな青)
  K(0.400, 0x477fc4, 0x8ec2de, 0xe9dfc2, 0xffeecb, 0.70, 0xffe3b2, 2.00, 0xc6dff0, 0x68705a, 0.85, 0xfdf3e0, 210, 1450),
  K(0.470, 0x585a94, 0xc07a62, 0xffab54, 0xffcf88, 1.40, 0xffb571, 1.50, 0xa88690, 0x4e4438, 0.60, 0xffc49a, 160, 1300), // 黄昏の入り
  K(0.500, 0x53356e, 0xc25b54, 0xff8a46, 0xffb066, 1.90, 0xff9a58, 1.00, 0x8c6288, 0x453a32, 0.45, 0xf0977c, 145, 1200), // 日暮れ(燃える橙→紫)
  K(0.545, 0x232052, 0x51325e, 0x9a4e50, 0xff9860, 1.00, 0xc09080, 0.50, 0x50466e, 0x282430, 0.32, 0x6a4c5c, 115, 1050), // 薄明
  K(0.600, 0x0c1230, 0x18224a, 0x2c3a60, 0xffb070, 0.35, 0xaec6ee, 0.40, 0x2c3a5e, 0x161c26, 0.30, 0x2c3652,  95,  980), // 宵
  K(0.750, 0x070c24, 0x101a3a, 0x20304e, 0xffb070, 0.25, 0xbdd3f6, 0.50, 0x27365a, 0x131a24, 0.30, 0x252e48,  90,  950), // 真夜中(深い紺)
  K(0.900, 0x0a102a, 0x141e42, 0x263254, 0xffb070, 0.30, 0xb2c8ee, 0.42, 0x2a3658, 0x151b25, 0.29, 0x293250,  95,  980),
  K(0.955, 0x1c2148, 0x3c3260, 0x6e4660, 0xffc890, 0.80, 0xcf9a84, 0.50, 0x584e72, 0x2a2530, 0.34, 0x584458, 110, 1050), // 暁の予感
  K(1.000, 0x46508c, 0xc4737f, 0xf8c184, 0xffd9a6, 1.70, 0xffb27c, 1.15, 0x9a86a0, 0x4c4238, 0.50, 0xf0b49a, 130, 1150), // = 0.0
];

// サンプル結果(毎フレーム使い回し・生成禁止)
const P = {
  top: new THREE.Color(), mid: new THREE.Color(), hor: new THREE.Color(),
  sun: new THREE.Color(), light: new THREE.Color(),
  hemiS: new THREE.Color(), hemiG: new THREE.Color(), cloud: new THREE.Color(),
  glow: 0, lightInt: 0, hemiInt: 0, fogN: 100, fogF: 1000,
};
function samplePalette(phase) {
  const x = phase - Math.floor(phase);
  let i = 0;
  while (i < KEYS.length - 2 && KEYS[i + 1].p <= x) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = smoothstep(a.p, b.p, x);
  P.top.lerpColors(a.top, b.top, t);
  P.mid.lerpColors(a.mid, b.mid, t);
  P.hor.lerpColors(a.hor, b.hor, t);
  P.sun.lerpColors(a.sun, b.sun, t);
  P.light.lerpColors(a.light, b.light, t);
  P.hemiS.lerpColors(a.hemiS, b.hemiS, t);
  P.hemiG.lerpColors(a.hemiG, b.hemiG, t);
  P.cloud.lerpColors(a.cloud, b.cloud, t);
  P.glow = lerp(a.glow, b.glow, t);
  P.lightInt = lerp(a.lightInt, b.lightInt, t);
  P.hemiInt = lerp(a.hemiInt, b.hemiInt, t);
  P.fogN = lerp(a.fogN, b.fogN, t);
  P.fogF = lerp(a.fogF, b.fogF, t);
}

// ---------------- オーバーライド(祠 / ボス) ----------------
const BOSS = {
  top: C(0x160709), mid: C(0x3a1113), hor: C(0x5e1f16),
  light: C(0xff7050), lightInt: 0.6,
  hemiS: C(0x58252e), hemiG: C(0x170c0e), hemiInt: 0.34,
  cloud: C(0x381417), fogN: 26, fogF: 330,
};
const SHRINE = {
  fog: C(0x0a1417),
  light: C(0x86e2d6), lightInt: 0.42,
  hemiS: C(0x2f8f88), hemiG: C(0x0d2124), hemiInt: 0.55,
  fogN: 620, fogF: 3200,
  dir: new THREE.Vector3(0.3, 1, 0.22).normalize(),
};

// ---------------- モジュール状態 ----------------
const CLOUD_N = 46;
let dome, domeU, clouds, cloudMat, cloudBase, cloudSpeed;
let sun, hemi, fog, bg;
let overrideMode = null;
let shrineB = 0, bossB = 0;
let flash = 0, boltT = 4;
let windX = 0, windZ = 0;
const rand = mulberry32(0xa11ce);

const _sunDir = new THREE.Vector3();
const _moonDir = new THREE.Vector3();
const _lightDir = new THREE.Vector3();

// ---------------- 雲(InstancedMesh・低ポリの柔らかい塊) ----------------
function buildClouds(scene) {
  const defs = [
    [0.0, 0.10, 0.0, 1.70, 1.00, 1.25],
    [1.55, 0.05, 0.35, 1.05, 0.72, 0.90],
    [-1.50, 0.00, -0.25, 1.15, 0.80, 1.00],
    [0.55, 0.55, -0.70, 0.85, 0.60, 0.80],
    [-0.65, 0.50, 0.65, 0.70, 0.52, 0.72],
  ];
  const puffs = [];
  for (const [x, y, z, sx, sy, sz] of defs) {
    const g = new THREE.IcosahedronGeometry(1, 1);
    g.scale(sx, sy, sz);
    g.translate(x, y, z);
    puffs.push(g);
  }
  let geo = null;
  try { geo = mergeGeometries(puffs); } catch { geo = null; }
  if (!geo) geo = puffs[0];
  geo.computeVertexNormals(); // 非インデックス → フラットな面法線(低ポリの柔らかい塊)
  cloudMat = toonMaterial(0xf6fafc);
  clouds = new THREE.InstancedMesh(geo, cloudMat, CLOUD_N);
  clouds.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  clouds.castShadow = false;
  clouds.receiveShadow = false;
  clouds.frustumCulled = false;
  cloudBase = new Float32Array(CLOUD_N * 3);
  cloudSpeed = new Float32Array(CLOUD_N);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion();
  const s = new THREE.Vector3(), v = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < CLOUD_N; i++) {
    const x = (rand() - 0.5) * 2600;
    const z = (rand() - 0.5) * 2600;
    const y = 135 + rand() * 110;
    cloudBase[i * 3] = x;
    cloudBase[i * 3 + 1] = y;
    cloudBase[i * 3 + 2] = z;
    cloudSpeed[i] = 0.6 + rand() * 0.8;
    const sc = 9 + rand() * 17;
    q.setFromAxisAngle(up, rand() * Math.PI * 2);
    s.set(sc * (0.8 + rand() * 0.6), sc * 0.55, sc);
    m.compose(v.set(x, y, z), q, s);
    clouds.setMatrixAt(i, m);
  }
  scene.add(clouds);
}

// ---------------- init ----------------
export async function init(ctx) {
  const scene = ctx.scene;

  // 空ドーム(fog非適用・プレイヤー追従・最初に描画)
  const domeGeo = new THREE.SphereGeometry(1800, 48, 24);
  const domeMat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color(0x3d7dd2) },
      uMid: { value: new THREE.Color(0x7ec8e8) },
      uHor: { value: new THREE.Color(0xdaeef2) },
      uSunDir: { value: new THREE.Vector3(0.8, 0.4, 0.3).normalize() },
      uMoonDir: { value: new THREE.Vector3(-0.8, -0.4, -0.3).normalize() },
      uSunCol: { value: new THREE.Color(0xfff8e8) },
      uGlow: { value: 0.6 },
      uNight: { value: 0 },
      uTime: { value: 0 },
      uFlash: { value: 0 },
      uSunI: { value: 1 },
    },
    vertexShader: DOME_VERT,
    fragmentShader: DOME_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  dome = new THREE.Mesh(domeGeo, domeMat);
  dome.frustumCulled = false;
  dome.renderOrder = -100;
  domeU = domeMat.uniforms;
  scene.add(dome);

  buildClouds(scene);

  // ライティングリグ(直射光は太陽/月を1灯で滑らかに切替)
  sun = new THREE.DirectionalLight(0xfff2d8, 2.3);
  sun.castShadow = true;
  const sms = (ctx.quality && ctx.quality.shadowMapSize) || 1024;
  sun.shadow.mapSize.set(sms, sms);
  const sc = sun.shadow.camera;
  sc.left = -60; sc.right = 60; sc.top = 60; sc.bottom = -60;
  sc.near = 20; sc.far = 420;
  sc.updateProjectionMatrix();
  sun.shadow.bias = -0.00035;
  sun.shadow.normalBias = 0.7;
  scene.add(sun, sun.target);

  hemi = new THREE.HemisphereLight(0xcfe9fa, 0x6c7c60, 0.95);
  scene.add(hemi);

  // 霧と背景(色は常に地平線色と一致。ドーム非表示時の逃げにも使う)
  fog = new THREE.Fog(0xdaeef2, 260, 1600);
  scene.fog = fog;
  bg = new THREE.Color(0xdaeef2);
  scene.background = bg;

  ctx.on('quality-changed', (q) => {
    const size = (q && q.shadowMapSize) || (ctx.quality && ctx.quality.shadowMapSize) || 1024;
    if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    sun.shadow.mapSize.set(size, size);
  });

  ctx.sky = {
    sunDir: new THREE.Vector3(0.9, 0.3, 0.3).normalize(),
    sunLight: sun,
    setOverride(mode) {
      overrideMode = (mode === 'shrine' || mode === 'boss') ? mode : null;
    },
  };
}

// ---------------- update ----------------
export function update(ctx, dt) {
  if (!dome) return;
  const phase = ctx.time.dayPhase;
  const el = ctx.time.elapsed;
  const pp = (ctx.player && ctx.player.position) || ctx.camera.position;
  const dd = (ctx.quality && ctx.quality.drawDist) || 1;

  // 太陽と月の軌道(0=東の地平線 → 0.25=天頂 → 0.5=西の地平線)
  const a = phase * Math.PI * 2;
  _sunDir.set(Math.cos(a), Math.sin(a), 0.34).normalize();
  _moonDir.set(-Math.cos(a) * 0.92, -Math.sin(a), -0.42).normalize();
  const elev = _sunDir.y;
  const nightF = 1 - smoothstep(-0.16, -0.02, elev); // 星は日没後にのみ現れる
  const dayW = smoothstep(-0.12, 0.02, elev);

  // オーバーライドの滑らかなブレンド
  shrineB = damp(shrineB, overrideMode === 'shrine' ? 1 : 0, 4, dt);
  bossB = damp(bossB, overrideMode === 'boss' ? 1 : 0, 2.5, dt);
  if (shrineB < 0.001) shrineB = 0;
  if (bossB < 0.001) bossB = 0;

  // 稲光風の明滅(ボス時のみ・控えめ)
  if (bossB > 0.4) {
    boltT -= dt;
    if (boltT <= 0) { flash = 0.55 + rand() * 0.45; boltT = 2.8 + rand() * 5.5; }
  }
  flash = Math.max(0, flash - dt * 3.2);
  const fl = flash * bossB;

  // パレット取得 → オーバーライドを合成
  samplePalette(phase);
  if (bossB > 0) {
    P.top.lerp(BOSS.top, bossB); P.mid.lerp(BOSS.mid, bossB); P.hor.lerp(BOSS.hor, bossB);
    P.light.lerp(BOSS.light, bossB);
    P.hemiS.lerp(BOSS.hemiS, bossB); P.hemiG.lerp(BOSS.hemiG, bossB);
    P.cloud.lerp(BOSS.cloud, bossB);
    P.glow = lerp(P.glow, 0, bossB);
    P.lightInt = lerp(P.lightInt, BOSS.lightInt, bossB);
    P.hemiInt = lerp(P.hemiInt, BOSS.hemiInt, bossB);
    P.fogN = lerp(P.fogN, BOSS.fogN, bossB);
    P.fogF = lerp(P.fogF, BOSS.fogF, bossB);
  }
  if (shrineB > 0) {
    P.top.lerp(SHRINE.fog, shrineB); P.mid.lerp(SHRINE.fog, shrineB); P.hor.lerp(SHRINE.fog, shrineB);
    P.light.lerp(SHRINE.light, shrineB);
    P.hemiS.lerp(SHRINE.hemiS, shrineB); P.hemiG.lerp(SHRINE.hemiG, shrineB);
    P.cloud.lerp(SHRINE.fog, shrineB);
    P.glow = lerp(P.glow, 0, shrineB);
    P.lightInt = lerp(P.lightInt, SHRINE.lightInt, shrineB);
    P.hemiInt = lerp(P.hemiInt, SHRINE.hemiInt, shrineB);
    P.fogN = lerp(P.fogN, SHRINE.fogN, shrineB);
    P.fogF = lerp(P.fogF, SHRINE.fogF, shrineB);
  }

  // 霧・背景(常に地平線色と一致 / 距離は drawDist でスケール)
  fog.color.copy(P.hor);
  fog.near = P.fogN * dd;
  fog.far = Math.max(P.fogF * dd, fog.near + 120);
  bg.copy(P.hor);

  // 空ドーム(位置のみプレイヤー追従)
  dome.visible = shrineB < 0.98;
  if (dome.visible) {
    dome.position.copy(pp);
    domeU.uTop.value.copy(P.top);
    domeU.uMid.value.copy(P.mid);
    domeU.uHor.value.copy(P.hor);
    domeU.uSunDir.value.copy(_sunDir);
    domeU.uMoonDir.value.copy(_moonDir);
    domeU.uSunCol.value.copy(P.sun);
    domeU.uGlow.value = P.glow;
    domeU.uSunI.value = (1 - bossB) * (1 - shrineB);
    domeU.uNight.value = nightF * (1 - bossB) * (1 - shrineB);
    domeU.uTime.value = el;
    domeU.uFlash.value = fl;
  }

  // 直射光(昼=太陽の暖色 / 夜=月光の青白 を連続切替)
  _lightDir.copy(_sunDir).multiplyScalar(dayW).addScaledVector(_moonDir, 1 - dayW);
  if (shrineB > 0) _lightDir.lerp(SHRINE.dir, shrineB);
  if (_lightDir.lengthSq() < 0.05) _lightDir.set(0.2, 1, 0.1);
  _lightDir.y = Math.max(_lightDir.y, 0.08);
  _lightDir.normalize();
  sun.position.copy(pp).addScaledVector(_lightDir, 170);
  sun.target.position.copy(pp);
  sun.color.copy(P.light);
  sun.intensity = P.lightInt + fl * 1.2;

  hemi.color.copy(P.hemiS);
  hemi.groundColor.copy(P.hemiG);
  hemi.intensity = P.hemiInt + fl * 0.35;

  // 雲のドリフト(位置のみ書き換え・生成なし)
  clouds.visible = shrineB < 0.98;
  if (clouds.visible) {
    windX += dt * 2.4;
    windZ += dt * 0.7;
    const arr = clouds.instanceMatrix.array;
    for (let i = 0; i < CLOUD_N; i++) {
      const spd = cloudSpeed[i];
      const bx = cloudBase[i * 3] + windX * spd;
      const bz = cloudBase[i * 3 + 2] + windZ * spd;
      arr[i * 16 + 12] = (((bx + 1300) % 2600) + 2600) % 2600 - 1300;
      arr[i * 16 + 13] = cloudBase[i * 3 + 1] + Math.sin(el * 0.08 + i * 2.1) * 4;
      arr[i * 16 + 14] = (((bz + 1300) % 2600) + 2600) % 2600 - 1300;
    }
    clouds.instanceMatrix.needsUpdate = true;
    cloudMat.color.copy(P.cloud);
  }

  // 公開API更新(正規化済みの太陽方向)
  ctx.sky.sunDir.copy(_sunDir);
}
