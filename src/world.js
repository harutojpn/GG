// world.js — 大地アルディア: 地形・水・溶岩・植生・遺跡・魔城・遠景・コライダー
// 契約: ARCHITECTURE.md / 全てプロシージャル・シード固定で決定的
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  Simplex2, mulberry32, clamp, lerp, smoothstep,
  toonMaterial, glowMaterial, canvasTexture,
} from './util.js';

// ---------------- 定数(ワールドマップ契約座標) ----------------
const WATER_LEVEL = -4;
const CASTLE = { x: 0, z: -650 };
const VOLCANO = { x: 550, z: -450 };
const LAKE = { x: -450, z: 350 };
const FOREST = { x: 450, z: 150 };
const RUINS = { x: -190, z: -60 };
const PLATEAU_H = 24;      // 古城台地の高さ
const LAVA_Y = 52;         // 溶岩湖の水面
const SHRINES = [
  { x: 180, z: 80 }, { x: -360, z: 260 }, { x: 430, z: 40 }, { x: 430, z: -300 },
];

// ---------------- ノイズ(シード固定・決定的) ----------------
const nBase = new Simplex2(9001);   // 大きなうねり
const nHill = new Simplex2(4242);   // 中スケールの丘
const nRough = new Simplex2(777);   // 岩肌の粗さ
const nColor = new Simplex2(3131);  // 彩色ゆらぎ

// ---------------- 高さ場(解析的・キャッシュ不要の速度) ----------------
// 平坦化スポット(祠×4 + 開始地点)。h は init 時に rawHeight で解決
const FLAT_SPOTS = [
  { x: 180, z: 80, r: 12, h: 0 },
  { x: -360, z: 260, r: 12, h: 0 },
  { x: 430, z: 40, r: 12, h: 0 },
  { x: 430, z: -300, r: 12, h: 0 },
  { x: 0, z: 250, r: 15, h: 0 },
];
let spotsResolved = false;

function rawHeight(x, z) {
  const edge = Math.max(Math.abs(x), Math.abs(z));
  if (edge > 1350) return -16; // 遥か外周は海底(破綻防止・軽量化)

  // --- 基本の草原: 大きなうねり + 緩やかな丘 ---
  let h = 3.5
    + nBase.fbm(x * 0.0016, z * 0.0016, 3) * 7.0
    + nHill.fbm(x * 0.0062, z * 0.0062, 4) * 2.4;

  // --- 深き森(東): 起伏中程度 ---
  const dxf = x - FOREST.x, dzf = z - FOREST.z;
  const df = Math.sqrt(dxf * dxf + dzf * dzf);
  if (df < 250) {
    const fm = 1 - smoothstep(110, 245, df);
    h += fm * (nHill.fbm(x * 0.01, z * 0.01, 3) * 5.0 + 2.0);
  }

  // --- 火山(北東): 高い円錐 + 火口 + 岩肌の粗さ ---
  const dxv = x - VOLCANO.x, dzv = z - VOLCANO.z;
  const dv = Math.sqrt(dxv * dxv + dzv * dzv);
  if (dv < 260) {
    const t = Math.max(0, 1 - dv / 235);
    if (t > 0) {
      let cone = Math.pow(t, 1.5) * 96;
      cone += nRough.fbm(x * 0.02, z * 0.02, 3) * 7.0 * Math.min(1, t * 2.4);
      const crater = (1 - smoothstep(14, 46, dv)) * 44; // 火口の窪み
      h += Math.max(0, cone - crater);
    }
  }

  // --- 静寂の湖(南西): waterLevel より低い窪地・岸は滑らか ---
  const dxl = x - LAKE.x, dzl = z - LAKE.z;
  const dl = Math.sqrt(dxl * dxl + dzl * dzl);
  if (dl < 180) {
    const lm = 1 - smoothstep(55, 175, dl);
    const bed = -10.5 + nHill.fbm(x * 0.011, z * 0.011, 2) * 1.6;
    h = lerp(h, bed, Math.pow(lm, 1.15));
  }

  // --- 古城の台地(北) ---
  const dxc = x - CASTLE.x, dzc = z - CASTLE.z;
  const dc = Math.sqrt(dxc * dxc + dzc * dzc);
  if (dc < 210) {
    const pm = 1 - smoothstep(115, 200, dc);
    const top = PLATEAU_H + nHill.fbm(x * 0.008, z * 0.008, 3) * 1.1;
    h = lerp(h, top, pm);
  }

  // --- 城へ上る南向きの坂道(z -350 → -530 で草原から台地へ) ---
  if (z < -320 && z > -610 && Math.abs(x) < 70) {
    const t = smoothstep(-350, -530, z);          // 南=0 → 北=1
    const lat = 1 - smoothstep(26, 62, Math.abs(x));
    const rampH = lerp(4.5, PLATEAU_H, t);
    h = lerp(h, rampH, lat * smoothstep(-322, -352, z));
  }

  // --- 城門前の広場 x∈[-60,60], z∈[-640,-520] を平坦化 ---
  {
    const mx = 1 - smoothstep(60, 84, Math.abs(x));
    const mz = smoothstep(-500, -524, z) * (1 - smoothstep(-644, -672, z));
    const m = mx * mz;
    if (m > 0) h = lerp(h, PLATEAU_H, m);
  }

  // --- ワールド縁: 海へ沈む(外は水平線まで水) ---
  if (edge > 950) h = lerp(h, -16, smoothstep(950, 1180, edge));

  return h;
}

function getHeight(x, z) {
  let h = rawHeight(x, z);
  if (spotsResolved) {
    for (let i = 0; i < FLAT_SPOTS.length; i++) {
      const s = FLAT_SPOTS[i];
      const dx = x - s.x, dz = z - s.z;
      const d2 = dx * dx + dz * dz;
      const rOut = s.r + 16;
      if (d2 < rOut * rOut) {
        const m = 1 - smoothstep(s.r, rOut, Math.sqrt(d2));
        h = lerp(h, s.h, m);
      }
    }
  }
  return h;
}

function resolveFlatSpots() {
  for (const s of FLAT_SPOTS) s.h = rawHeight(s.x, s.z);
  spotsResolved = true;
}

function getBiome(x, z) {
  const dc = Math.hypot(x - CASTLE.x, z - CASTLE.z);
  if (dc < 205 || (Math.abs(x) < 70 && z < -500 && z > -672)) return 'castle';
  if (Math.hypot(x - VOLCANO.x, z - VOLCANO.z) < 235) return 'volcano';
  if (Math.hypot(x - LAKE.x, z - LAKE.z) < 178) return 'lake';
  if (Math.hypot(x - FOREST.x, z - FOREST.z) < 215) return 'forest';
  if (Math.hypot(x - RUINS.x, z - RUINS.z) < 95) return 'ruins';
  return 'plains';
}

// 傾斜(単位あたりの高低差)— 彩色・植生配置用
function slopeAt(x, z) {
  const e = 1.6;
  const hx = getHeight(x + e, z) - getHeight(x - e, z);
  const hz = getHeight(x, z + e) - getHeight(x, z - e);
  return Math.sqrt(hx * hx + hz * hz) / (2 * e);
}

// ---------------- 道(頂点カラーで描く導線) ----------------
// 開始地点→城門の本道 + 各祠への小道
const ROADS = [
  // 本道: (0,250) → 城門(0,-560)
  [[0, 258], [7, 180], [-10, 100], [-6, 20], [8, -90], [2, -210], [0, -330], [0, -470], [0, -572]],
  // 平原の祠 (180,80)
  [[-4, 62], [84, 66], [172, 78]],
  // 湖畔の祠 (-360,260)
  [[-2, 242], [-120, 254], [-244, 264], [-350, 261]],
  // 森の祠 (430,40)
  [[1, 4], [142, 16], [292, 28], [420, 38]],
  // 火山麓の祠 (430,-300)
  [[1, -302], [152, -308], [302, -303], [420, -300]],
];

function distToSeg(px, pz, ax, az, bx, bz) {
  const abx = bx - ax, abz = bz - az;
  const t = clamp(((px - ax) * abx + (pz - az) * abz) / (abx * abx + abz * abz), 0, 1);
  const dx = px - (ax + abx * t), dz = pz - (az + abz * t);
  return Math.sqrt(dx * dx + dz * dz);
}

function roadDist(x, z) {
  let best = 1e9;
  for (let r = 0; r < ROADS.length; r++) {
    const pts = ROADS[r];
    for (let i = 0; i < pts.length - 1; i++) {
      const d = distToSeg(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
      if (d < best) best = d;
    }
  }
  return best;
}

// ---------------- ジオメトリ小道具 ----------------
const _m4 = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

// 頂点カラー属性を一色で塗る(マージ後も色が残る)
function colorize(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

// 変換を焼き込んだクローンを配列へ
function pushGeo(list, geo, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const g = geo.clone();
  _e.set(rx, ry, rz); _q.setFromEuler(_e);
  _p.set(x, y, z); _s.set(sx, sy, sz);
  _m4.compose(_p, _q, _s);
  g.applyMatrix4(_m4);
  list.push(g);
  return g;
}

// インスタンス行列を組む
function composeAt(mesh, i, x, y, z, ry, sx, sy, sz) {
  _e.set(0, ry, 0); _q.setFromEuler(_e);
  _p.set(x, y, z); _s.set(sx, sy, sz);
  _m4.compose(_p, _q, _s);
  mesh.setMatrixAt(i, _m4);
}

// __MORE__
