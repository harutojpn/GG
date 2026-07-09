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
      // 岩肌の粗さ(火口内では抑えて溶岩から岩が突き出ないように)
      cone += nRough.fbm(x * 0.02, z * 0.02, 3) * 7.0 * Math.min(1, t * 2.4) * smoothstep(16, 42, dv);
      const crater = (1 - smoothstep(20, 52, dv)) * 56; // 火口の窪み(底は溶岩面より下)
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

// 面法線を立てる(非インデックスジオメトリをローポリのフラット陰影に)
function facet(geo) {
  geo.computeVertexNormals();
  return geo;
}

// 頂点カラー属性を一色で塗る(マージ後も色が残る)
function colorize(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

// 変換を焼き込んだクローンを配列へ(マージ互換のため非インデックス化)
function pushGeo(list, geo, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
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

// ---------------- 地形メッシュ(単一ジオメトリ・頂点カラー) ----------------
const PALETTE = {
  grassA: new THREE.Color(0x6fae5a), grassB: new THREE.Color(0x5f9c4d),
  grassC: new THREE.Color(0x7fba66),
  forest: new THREE.Color(0x467f46), forestDeep: new THREE.Color(0x3a7245),
  rock: new THREE.Color(0x8a8577), rockDark: new THREE.Color(0x6f6a5e),
  volcano: new THREE.Color(0x6b3a2e), scorch: new THREE.Color(0x45261c),
  sand: new THREE.Color(0xc9b183), bed: new THREE.Color(0x8f8468),
  road: new THREE.Color(0xcdb27f), plaza: new THREE.Color(0x9a927d),
};

function buildTerrain(ctx) {
  const SEG = 300, SIZE = 2000, N = SEG + 1;
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const count = pos.count;
  const heights = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const h = getHeight(pos.getX(i), pos.getZ(i));
    heights[i] = h;
    pos.setY(i, h);
  }

  // 傾斜は格子近傍から(getHeight 再呼び出しなしで軽量)
  const step = SIZE / SEG;
  const slopeOf = (i) => {
    const ix = i % N, iy = (i / N) | 0;
    const xm = heights[iy * N + Math.max(0, ix - 1)];
    const xp = heights[iy * N + Math.min(SEG, ix + 1)];
    const zm = heights[Math.max(0, iy - 1) * N + ix];
    const zp = heights[Math.min(SEG, iy + 1) * N + ix];
    const dx = (xp - xm) / (2 * step), dz = (zp - zm) / (2 * step);
    return Math.sqrt(dx * dx + dz * dz);
  };

  const colors = new Float32Array(count * 3);
  const col = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = heights[i];
    const slope = slopeOf(i);
    const cn = nColor.fbm(x * 0.02, z * 0.02, 2);          // 彩色ゆらぎ
    const cn2 = nColor.noise(x * 0.11 + 50, z * 0.11 - 30); // 細かい斑

    // 草原ベース(ゆらぎで2〜3色を混ぜる)
    col.copy(PALETTE.grassA);
    if (cn > 0.12) col.lerp(PALETTE.grassC, smoothstep(0.12, 0.6, cn));
    else if (cn < -0.12) col.lerp(PALETTE.grassB, smoothstep(-0.12, -0.6, cn));

    // 森の下草(深緑)
    const df = Math.hypot(x - FOREST.x, z - FOREST.z);
    if (df < 250) {
      const fm = 1 - smoothstep(120, 240, df);
      col.lerp(cn2 > 0 ? PALETTE.forest : PALETTE.forestDeep, fm * 0.85);
    }

    // 火山(赤茶の岩肌 → 山頂は焦げ茶)
    const dv = Math.hypot(x - VOLCANO.x, z - VOLCANO.z);
    if (dv < 250) {
      const vm = 1 - smoothstep(150, 240, dv);
      col.lerp(PALETTE.volcano, vm * 0.95);
      col.lerp(PALETTE.scorch, vm * smoothstep(28, 62, h) * 0.85);
      if (cn2 > 0.25 && vm > 0.5) col.lerp(PALETTE.rockDark, 0.35);
    }

    // 水辺の砂 → 水底
    if (h < WATER_LEVEL + 2.4) {
      const sm = 1 - smoothstep(WATER_LEVEL + 0.2, WATER_LEVEL + 2.4, h);
      col.lerp(PALETTE.sand, sm);
      if (h < WATER_LEVEL - 0.8) col.lerp(PALETTE.bed, smoothstep(WATER_LEVEL - 0.8, WATER_LEVEL - 5, h));
    }

    // 急斜面は岩肌
    const sr = smoothstep(0.5, 0.95, slope);
    if (sr > 0) col.lerp(dv < 240 ? PALETTE.rockDark : PALETTE.rock, sr * 0.8);

    // 城門前広場は踏み固められた石畳風
    {
      const mx = 1 - smoothstep(58, 80, Math.abs(x));
      const mz = smoothstep(-504, -524, z) * (1 - smoothstep(-640, -668, z));
      const m = mx * mz;
      if (m > 0) col.lerp(PALETTE.plaza, m * (0.75 + cn2 * 0.15));
    }

    // 道(本道+小道)— 水没部は描かない
    if (h > WATER_LEVEL + 0.3) {
      const rd = roadDist(x, z);
      if (rd < 6.5) {
        const rm = 1 - smoothstep(2.8, 6.0, rd);
        col.lerp(PALETTE.road, rm * (0.82 + cn2 * 0.12));
      }
    }

    // 全体の明度ゆらぎ(のっぺり防止・控えめに)
    const v = 1 + cn2 * 0.045;
    colors[i * 3] = col.r * v; colors[i * 3 + 1] = col.g * v; colors[i * 3 + 2] = col.b * v;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  // MeshToonMaterial は flatShading 非対応 → 非インデックス化 + 面法線でローポリの陰影に
  const flatGeo = geo.toNonIndexed();
  flatGeo.computeVertexNormals();
  geo.dispose();

  const mat = toonMaterial(0xffffff, { vertexColors: true });
  const mesh = new THREE.Mesh(flatGeo, mat);
  mesh.receiveShadow = true;
  mesh.name = 'terrain';
  ctx.scene.add(mesh);
  return mesh;
}

// ---------------- 水(湖 + 外周の海・穏やかな波) ----------------
const waterUniform = { value: 0 };

function buildWater(ctx) {
  const geo = new THREE.PlaneGeometry(4800, 4800, 120, 120);
  geo.rotateX(-Math.PI / 2);
  const mat = toonMaterial(0x3f8fb0, { transparent: true, opacity: 0.72 });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = waterUniform;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader
      .replace(
        '#include <beginnormal_vertex>',
        `#include <beginnormal_vertex>
        {
          float ddx = 0.009 * cos(position.x * 0.045 + uTime * 0.9)
                    + 0.0059 * cos((position.x + position.z) * 0.021 + uTime * 0.45);
          float ddz = -0.0104 * sin(position.z * 0.052 + uTime * 0.7)
                    + 0.0059 * cos((position.x + position.z) * 0.021 + uTime * 0.45);
          objectNormal = normalize(vec3(-ddx * 14.0, 1.0, -ddz * 14.0));
        }`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        transformed.y += sin(position.x * 0.045 + uTime * 0.9) * 0.2
                       + cos(position.z * 0.052 + uTime * 0.7) * 0.2
                       + sin((position.x + position.z) * 0.021 + uTime * 0.45) * 0.28;`
      );
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = WATER_LEVEL;
  mesh.name = 'water';
  ctx.scene.add(mesh);

  // 海底(半透明水の下の暗い床 — 空が透けるのを防ぐ)
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(6000, 6000, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x1e3a44 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -15.5;
  ctx.scene.add(floor);
  return mesh;
}

// ---------------- 溶岩(火口の発光湖) ----------------
let lavaMat = null, lavaTex = null, lavaLight = null;

function buildLava(ctx) {
  lavaTex = canvasTexture(256, (g, s) => {
    g.fillStyle = '#ff5a1f';
    g.fillRect(0, 0, s, s);
    const rand = mulberry32(0xF1AE);
    // 暗い岩塊
    for (let i = 0; i < 46; i++) {
      const x = rand() * s, y = rand() * s, r = 8 + rand() * 26;
      g.fillStyle = `rgba(${60 + (rand() * 40) | 0}, ${20 + (rand() * 14) | 0}, 10, ${0.55 + rand() * 0.3})`;
      g.beginPath(); g.ellipse(x, y, r, r * (0.5 + rand() * 0.5), rand() * Math.PI, 0, Math.PI * 2); g.fill();
    }
    // 明るい亀裂
    g.strokeStyle = 'rgba(255, 214, 130, 0.9)';
    for (let i = 0; i < 22; i++) {
      g.lineWidth = 1.5 + rand() * 2.5;
      g.beginPath();
      let x = rand() * s, y = rand() * s;
      g.moveTo(x, y);
      for (let k = 0; k < 4; k++) { x += (rand() - 0.5) * 60; y += (rand() - 0.5) * 60; g.lineTo(x, y); }
      g.stroke();
    }
  });
  lavaTex.wrapS = lavaTex.wrapT = THREE.RepeatWrapping;

  const geo = new THREE.CircleGeometry(40, 40);
  geo.rotateX(-Math.PI / 2);
  lavaMat = new THREE.MeshBasicMaterial({ map: lavaTex, fog: false });
  lavaMat.color.setRGB(1.5, 1.35, 1.2); // Bloom で輝く明度
  const mesh = new THREE.Mesh(geo, lavaMat);
  mesh.position.set(VOLCANO.x, LAVA_Y, VOLCANO.z);
  mesh.name = 'lava';
  ctx.scene.add(mesh);

  lavaLight = new THREE.PointLight(0xff6a20, 900, 190, 1.9);
  lavaLight.position.set(VOLCANO.x, LAVA_Y + 14, VOLCANO.z);
  ctx.scene.add(lavaLight);
  return mesh;
}

// ---------------- 古城(魔城)の外観 ----------------
function buildCastle(ctx) {
  const stoneGeos = [], roofGeos = [], glowGeos = [];
  const R = 78, WALL_H = 13, WALL_T = 4;

  const cyl = (r0, r1, h, seg = 8) => new THREE.CylinderGeometry(r0, r1, h, seg, 1);
  const cone = (r, h, seg = 8) => new THREE.ConeGeometry(r, h, seg, 1);
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);

  // 塔の配置(南=+z が門)。±14°は門の両脇
  const towerAngles = [14, -14, 72, -72, 136, -136, 180].map((d) => (d * Math.PI) / 180);
  const towers = towerAngles.map((a) => ({ a, x: Math.sin(a) * R, z: Math.cos(a) * R }));

  // 城壁(門の間 ±14° は開ける)
  const order = [14, 72, 136, 180, -136, -72, -14].map((d) => (d * Math.PI) / 180);
  for (let i = 0; i < order.length - 1; i++) {
    const ax = Math.sin(order[i]) * R, az = Math.cos(order[i]) * R;
    const bx = Math.sin(order[i + 1]) * R, bz = Math.cos(order[i + 1]) * R;
    const len = Math.hypot(bx - ax, bz - az);
    const ry = Math.atan2(-(bz - az), bx - ax);
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    pushGeo(stoneGeos, box(len + 2, WALL_H + 5, WALL_T), mx, WALL_H / 2 - 2.5, mz, 0, ry, 0);
    pushGeo(stoneGeos, box(len + 2, 1.7, WALL_T + 1.4), mx, WALL_H + 0.85, mz, 0, ry, 0); // 胸壁
  }

  // 塔(円筒 + 尖塔屋根)+ 妖光の窓
  for (const t of towers) {
    const gate = Math.abs(t.a) < 0.5;
    const r = gate ? 5.6 : 7, h = gate ? 22 : 27;
    pushGeo(stoneGeos, cyl(r, r * 1.15, h + 4, 8), t.x, h / 2 - 2, t.z);
    pushGeo(roofGeos, cone(r * 1.35, gate ? 8 : 10, 8), t.x, h + (gate ? 4 : 5) - 2, t.z);
    // 窓(外向き)
    const wy = h - 6;
    pushGeo(glowGeos, box(0.8, 1.7, 0.3), t.x + Math.sin(t.a) * r, wy, t.z + Math.cos(t.a) * r, 0, t.a, 0);
  }

  // 門楼(門洞 = 暗い奥行き)
  pushGeo(stoneGeos, box(5, 17, 7), -8.5, 8.5 - 2, R - 1);
  pushGeo(stoneGeos, box(5, 17, 7), 8.5, 8.5 - 2, R - 1);
  pushGeo(stoneGeos, box(22, 5.5, 7), 0, 15.5, R - 1);   // まぐさ石
  pushGeo(roofGeos, box(24, 1.6, 8.4), 0, 18.9, R - 1);

  // 中央天守(主塔 + 側塔 + 後方尖塔)
  pushGeo(stoneGeos, box(36, 12, 30), 0, 4, -8);
  pushGeo(stoneGeos, cyl(12.5, 14.5, 38, 10), 0, 25, -8);
  pushGeo(roofGeos, cone(15.5, 14, 10), 0, 51, -8);
  pushGeo(stoneGeos, cyl(5, 6, 30, 8), 16, 22, -2);
  pushGeo(roofGeos, cone(7, 9.5, 8), 16, 41.5, -2);
  pushGeo(stoneGeos, cyl(5, 6, 30, 8), -16, 22, -2);
  pushGeo(roofGeos, cone(7, 9.5, 8), -16, 41.5, -2);
  pushGeo(stoneGeos, cyl(3.6, 4.4, 46, 8), 0, 27, -26);
  pushGeo(roofGeos, cone(5.4, 12, 8), 0, 56, -26);

  // 天守の窓(四方 + 高層)
  const keepWin = [
    [0, 34, 1], [0, 40, 1], [0.6, 28, 1], [-0.6, 28, 1],
    [Math.PI, 34, 1], [Math.PI, 40, 1],
    [Math.PI / 2, 36, 1], [-Math.PI / 2, 36, 1],
  ];
  for (const [a, y] of keepWin) {
    pushGeo(glowGeos, box(1.0, 2.2, 0.3), Math.sin(a) * 13.6, y, -8 + Math.cos(a) * 13.6, 0, a, 0);
  }
  pushGeo(glowGeos, box(0.9, 1.8, 0.3), 0, 46, -26 + 4.1);
  pushGeo(glowGeos, box(0.9, 1.8, 0.3), 16, 34, -2 + 5.2);
  pushGeo(glowGeos, box(0.9, 1.8, 0.3), -16, 34, -2 + 5.2);

  const stoneMat = toonMaterial(0x565064);
  const roofMat = toonMaterial(0x39304f);
  const glowMat = glowMaterial(0x9a55ff, 1.7);

  const group = new THREE.Group();
  const stone = new THREE.Mesh(facet(mergeGeometries(stoneGeos)), stoneMat);
  stone.castShadow = true; stone.receiveShadow = true;
  const roof = new THREE.Mesh(facet(mergeGeometries(roofGeos)), roofMat);
  roof.castShadow = true;
  const glow = new THREE.Mesh(mergeGeometries(glowGeos), glowMat);
  // 門洞の闇
  const voidMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 13),
    new THREE.MeshBasicMaterial({ color: 0x0b0614 })
  );
  voidMesh.position.set(0, 4.5, R + 2.51);
  group.add(stone, roof, glow, voidMesh);
  group.position.set(CASTLE.x, PLATEAU_H - 0.4, CASTLE.z);
  ctx.scene.add(group);

  // --- コライダー(壁は円柱の列で近似・門は開ける) ---
  const addCol = (lx, lz, radius) => ctx.colliders.push({ x: CASTLE.x + lx, z: CASTLE.z + lz, radius });
  for (let i = 0; i < order.length - 1; i++) {
    const ax = Math.sin(order[i]) * R, az = Math.cos(order[i]) * R;
    const bx = Math.sin(order[i + 1]) * R, bz = Math.cos(order[i + 1]) * R;
    const len = Math.hypot(bx - ax, bz - az);
    const n = Math.max(2, Math.round(len / 7));
    for (let k = 0; k <= n; k++) {
      const t = k / n;
      addCol(lerp(ax, bx, t), lerp(az, bz, t), 3.6);
    }
  }
  for (const t of towers) addCol(t.x, t.z, Math.abs(t.a) < 0.5 ? 6.2 : 7.6);
  addCol(-8.5, R - 1, 3.4); addCol(8.5, R - 1, 3.4); // 門柱
  addCol(0, -8, 17);   // 天守
  addCol(0, -26, 5.5); // 尖塔

  return group;
}

// ---------------- 遺跡(古代の柱・崩れたアーチ) ----------------
function buildRuins(ctx) {
  const rand = mulberry32(0x9D1E5);
  const stoneMat = toonMaterial(0x948b76);
  const geos = [];

  const pillarAt = (x, z, scale, tilt, ry, broken) => {
    const y = getHeight(x, z);
    const h = (broken ? 2.4 + rand() * 1.6 : 5.6) * scale;
    pushGeo(geos, new THREE.BoxGeometry(2.5, 0.7, 2.5), x, y + 0.2, z, 0, ry, 0);
    pushGeo(geos, new THREE.CylinderGeometry(0.8, 0.95, h, 7), x, y + 0.55 + h / 2, z, tilt, ry, tilt * 0.6);
    if (!broken) pushGeo(geos, new THREE.BoxGeometry(2.2, 0.55, 2.2), x, y + 0.55 + h + 0.27, z, tilt, ry, tilt * 0.6);
    ctx.colliders.push({ x, z, radius: 1.25 });
  };

  const archAt = (x, z, ry) => {
    const y = getHeight(x, z);
    const dx = Math.cos(ry) * 3.2, dz = -Math.sin(ry) * 3.2;
    pillarAt(x - dx, z - dz, 1, 0, ry, false);
    pillarAt(x + dx, z + dz, 1, 0, ry, false);
    pushGeo(geos, new THREE.BoxGeometry(8.4, 1.15, 2.0), x, y + 6.9, z, 0, ry, 0);
    // 崩れ落ちた石塊
    for (let i = 0; i < 3; i++) {
      const bx = x + (rand() - 0.5) * 9, bz = z + (rand() - 0.5) * 9;
      pushGeo(geos, new THREE.BoxGeometry(1 + rand() * 1.4, 0.8 + rand() * 0.8, 1 + rand()),
        bx, getHeight(bx, bz) + 0.3, bz, rand() * 0.5, rand() * Math.PI, rand() * 0.5);
    }
  };

  // 中心の環状遺跡
  const ringN = 8;
  for (let i = 0; i < ringN; i++) {
    const a = (i / ringN) * Math.PI * 2;
    const x = RUINS.x + Math.sin(a) * 24, z = RUINS.z + Math.cos(a) * 24;
    if (rand() < 0.72) pillarAt(x, z, 0.9 + rand() * 0.3, (rand() - 0.5) * 0.14, a, rand() < 0.4);
  }
  archAt(RUINS.x, RUINS.z - 2, 0.4);
  archAt(RUINS.x + 46, RUINS.z + 30, -0.9);

  // 平原に点在する柱
  const spots = [[-80, 120], [110, -140], [-260, 40], [60, -260], [-120, -180], [230, 190]];
  for (const [x, z] of spots) {
    if (getBiome(x, z) !== 'plains' && getBiome(x, z) !== 'ruins') continue;
    pillarAt(x + (rand() - 0.5) * 10, z + (rand() - 0.5) * 10,
      0.8 + rand() * 0.4, (rand() - 0.5) * 0.2, rand() * Math.PI, rand() < 0.55);
  }

  const mesh = new THREE.Mesh(facet(mergeGeometries(geos)), stoneMat);
  mesh.castShadow = true; mesh.receiveShadow = true;
  ctx.scene.add(mesh);
  return mesh;
}

// ---------------- 遠景の山脈リング ----------------
function buildMountains(ctx) {
  const rand = mulberry32(0x30A17);
  const N = 46;
  const geo = facet(new THREE.ConeGeometry(1, 1, 6, 1).toNonIndexed());
  const mat = toonMaterial(0x5e6d78);
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  const c = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + rand() * 0.12;
    const rad = 1190 + rand() * 220;
    const h = 190 + rand() * 230;
    const w = 95 + rand() * 105;
    composeAt(mesh, i, Math.sin(a) * rad, -30 + h / 2, Math.cos(a) * rad, rand() * Math.PI, w, h, w);
    c.setHSL(0.56 + rand() * 0.04, 0.16 + rand() * 0.1, 0.42 + rand() * 0.14);
    mesh.setColorAt(i, c);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  ctx.scene.add(mesh);
  return mesh;
}

// ---------------- 植生(全て InstancedMesh・シード固定) ----------------
const grassUniform = { value: 0 };
let grassMesh = null, flowerMesh = null;
let GRASS_MAX = 0, FLOWER_MAX = 0;

// 配置の共通チェック(水中・急斜面・道・広場・城内・平坦化スポットを避ける)
function placeOK(x, z, opts = {}) {
  const h = getHeight(x, z);
  if (h < WATER_LEVEL + (opts.minAboveWater ?? 0.6)) return false;
  if (slopeAt(x, z) > (opts.maxSlope ?? 0.85)) return false;
  if (roadDist(x, z) < (opts.roadGap ?? 3.4)) return false;
  if (Math.hypot(x - CASTLE.x, z - CASTLE.z) < (opts.castleGap ?? 96)) return false;
  if (Math.abs(x) < 64 && z < -512 && z > -652) return false; // 城門前広場
  for (const s of FLAT_SPOTS) {
    if (Math.hypot(x - s.x, z - s.z) < s.r + (opts.spotGap ?? 4)) return false;
  }
  return true;
}

function bladeGeometry() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
    -0.07, 0, 0, 0.07, 0, 0, -0.045, 0.55, 0.02,
    0.045, 0.55, 0.02, 0, 1.05, 0.06,
  ]), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array([
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  ]), 3));
  // 根元は深緑 → 穂先は明るく
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array([
    0.30, 0.54, 0.24, 0.30, 0.54, 0.24, 0.42, 0.68, 0.33,
    0.42, 0.68, 0.33, 0.55, 0.80, 0.42,
  ]), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(10), 2));
  g.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4]);
  return g;
}

function buildGrass(ctx) {
  const rand = mulberry32(0x6E4A55);
  GRASS_MAX = 36000;
  const mat = toonMaterial(0xffffff, { vertexColors: true, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = grassUniform;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float wgt = smoothstep(0.05, 1.0, position.y);
        float sway = sin(uTime * 1.7 + ip.x * 0.15 + ip.y * 0.13) * 0.55
                   + sin(uTime * 3.3 + ip.x * 0.37 - ip.y * 0.21) * 0.24;
        transformed.x += sway * wgt * 0.42;
        transformed.z += cos(uTime * 1.35 + ip.y * 0.17) * 0.5 * wgt * 0.3;
      #endif`
    );
  };
  grassMesh = new THREE.InstancedMesh(bladeGeometry(), mat, GRASS_MAX);
  grassMesh.frustumCulled = false;
  const c = new THREE.Color();
  let i = 0, guard = 0;
  while (i < GRASS_MAX && guard++ < GRASS_MAX * 14) {
    const x = (rand() * 2 - 1) * 970, z = (rand() * 2 - 1) * 970;
    const b = getBiome(x, z);
    let p = 0;
    if (b === 'plains' || b === 'ruins') p = 0.8;
    else if (b === 'lake') p = 0.75;
    else if (b === 'forest') p = 0.5;
    else if (b === 'volcano') p = Math.hypot(x - VOLCANO.x, z - VOLCANO.z) > 205 ? 0.14 : 0;
    else if (b === 'castle') p = 0.25; // 台地の縁の草
    if (p === 0 || rand() > p) continue;
    if (!placeOK(x, z, { roadGap: 3.0, maxSlope: 0.95, spotGap: 1 })) continue;
    const s = 0.75 + rand() * 0.8;
    composeAt(grassMesh, i, x, getHeight(x, z) - 0.03, z, rand() * Math.PI * 2, s, s * (0.8 + rand() * 0.55), s);
    const dk = b === 'forest' ? 0.78 : 1;
    c.setRGB((0.85 + rand() * 0.3) * dk, (0.9 + rand() * 0.25) * dk, (0.8 + rand() * 0.3) * dk);
    grassMesh.setColorAt(i, c);
    i++;
  }
  GRASS_MAX = i;
  grassMesh.count = i;
  ctx.scene.add(grassMesh);
}

// 木/岩/茂み等の共通ビルダー: 変換リスト → InstancedMesh
function instancedFrom(ctx, geo, transforms, { shadow = true, tint = null } = {}) {
  const mat = toonMaterial(0xffffff, { vertexColors: true });
  const mesh = new THREE.InstancedMesh(facet(geo), mat, transforms.length);
  mesh.frustumCulled = false;
  const c = new THREE.Color();
  for (let i = 0; i < transforms.length; i++) {
    const t = transforms[i];
    composeAt(mesh, i, t.x, t.y, t.z, t.ry, t.sx, t.sy, t.sz);
    if (tint) { tint(c, t); mesh.setColorAt(i, c); }
  }
  mesh.castShadow = shadow;
  ctx.scene.add(mesh);
  return mesh;
}

function treeGeo(kind) {
  const parts = [];
  if (kind === 'broadleaf') {
    pushGeo(parts, colorize(new THREE.CylinderGeometry(0.22, 0.42, 3.0, 6), 0x6b4a33), 0, 1.5, 0);
    pushGeo(parts, colorize(new THREE.IcosahedronGeometry(1.95, 0), 0x3f8a4f), 0, 3.9, 0, 0, 0, 0, 1, 0.88, 1);
    pushGeo(parts, colorize(new THREE.IcosahedronGeometry(1.45, 0), 0x357a48), 1.0, 3.1, 0.55, 0, 0.7, 0);
    pushGeo(parts, colorize(new THREE.IcosahedronGeometry(1.3, 0), 0x46955a), -0.9, 3.3, -0.5, 0, 1.9, 0);
  } else if (kind === 'pine') {
    pushGeo(parts, colorize(new THREE.CylinderGeometry(0.18, 0.34, 2.4, 6), 0x5a4030), 0, 1.2, 0);
    pushGeo(parts, colorize(new THREE.ConeGeometry(1.7, 2.8, 7), 0x2f6b4f), 0, 3.2, 0);
    pushGeo(parts, colorize(new THREE.ConeGeometry(1.3, 2.4, 7), 0x2a6248), 0, 4.6, 0);
    pushGeo(parts, colorize(new THREE.ConeGeometry(0.9, 2.0, 7), 0x337052), 0, 5.9, 0);
  } else { // dead
    pushGeo(parts, colorize(new THREE.CylinderGeometry(0.14, 0.36, 3.6, 5), 0x4a3b30), 0, 1.8, 0, 0, 0, 0.06);
    pushGeo(parts, colorize(new THREE.CylinderGeometry(0.05, 0.11, 1.6, 4), 0x453629), 0.5, 2.9, 0, 0, 0, -0.9);
    pushGeo(parts, colorize(new THREE.CylinderGeometry(0.04, 0.09, 1.3, 4), 0x453629), -0.45, 2.3, 0.1, 0.5, 0, 0.9);
    pushGeo(parts, colorize(new THREE.CylinderGeometry(0.04, 0.08, 1.1, 4), 0x40312a), 0.1, 3.4, -0.4, -0.7, 0, 0.2);
  }
  return mergeGeometries(parts);
}

function buildVegetation(ctx) {
  const rand = mulberry32(0x7EE5EED);
  buildGrass(ctx);

  const broad = [], pines = [], deads = [], rocks = [], bushes = [], flowers = [];
  const tryN = (n, fn) => { for (let k = 0; k < n; k++) fn(); };

  // 深き森: 広葉樹 高密度 + 松
  tryN(900, () => {
    const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * 200;
    const x = FOREST.x + Math.sin(a) * r, z = FOREST.z + Math.cos(a) * r;
    if (!placeOK(x, z, { roadGap: 5, maxSlope: 0.7 })) return;
    const s = 0.85 + rand() * 0.9;
    const list = r > 130 && rand() < 0.45 ? pines : broad;
    list.push({ x, y: getHeight(x, z) - 0.15, z, ry: rand() * Math.PI * 2, sx: s, sy: s * (0.9 + rand() * 0.3), sz: s });
    ctx.colliders.push({ x, z, radius: 0.62 * s });
  });
  // 平原・湖畔・遺跡の点在木
  tryN(420, () => {
    const x = (rand() * 2 - 1) * 940, z = (rand() * 2 - 1) * 940;
    const b = getBiome(x, z);
    if (b !== 'plains' && b !== 'lake' && b !== 'ruins') return;
    if (rand() > (b === 'lake' ? 0.5 : 0.28)) return;
    if (!placeOK(x, z, { roadGap: 6, maxSlope: 0.6 })) return;
    const s = 0.8 + rand() * 0.85;
    const list = (z < -150 && rand() < 0.5) || rand() < 0.18 ? pines : broad;
    list.push({ x, y: getHeight(x, z) - 0.15, z, ry: rand() * Math.PI * 2, sx: s, sy: s * (0.9 + rand() * 0.3), sz: s });
    ctx.colliders.push({ x, z, radius: 0.62 * s });
  });
  // 火山: 枯木
  tryN(240, () => {
    const a = rand() * Math.PI * 2, r = 115 + rand() * 105;
    const x = VOLCANO.x + Math.sin(a) * r, z = VOLCANO.z + Math.cos(a) * r;
    if (!placeOK(x, z, { roadGap: 4, maxSlope: 1.15 })) return;
    if (rand() > 0.45) return;
    const s = 0.8 + rand() * 0.8;
    deads.push({ x, y: getHeight(x, z) - 0.1, z, ry: rand() * Math.PI * 2, sx: s, sy: s, sz: s });
    ctx.colliders.push({ x, z, radius: 0.45 * s });
  });
  // 岩(火山多め・平原/湖畔にも)
  tryN(760, () => {
    const x = (rand() * 2 - 1) * 960, z = (rand() * 2 - 1) * 960;
    const b = getBiome(x, z);
    const p = b === 'volcano' ? 0.75 : b === 'plains' ? 0.16 : b === 'forest' ? 0.14 : b === 'lake' ? 0.2 : 0;
    if (rand() > p) return;
    if (!placeOK(x, z, { roadGap: 4.5, maxSlope: 1.5, minAboveWater: -0.5 })) return;
    const sx = 0.7 + rand() * 2.1, sy = 0.55 + rand() * 1.6, sz = 0.7 + rand() * 2.1;
    rocks.push({ x, y: getHeight(x, z) - sy * 0.35, z, ry: rand() * Math.PI * 2, sx, sy, sz, v: b === 'volcano' });
    const cr = Math.max(sx, sz) * 0.85;
    if (cr > 1.0) ctx.colliders.push({ x, z, radius: cr });
  });
  // 茂み
  tryN(520, () => {
    const x = (rand() * 2 - 1) * 940, z = (rand() * 2 - 1) * 940;
    const b = getBiome(x, z);
    const p = b === 'forest' ? 0.55 : b === 'plains' || b === 'ruins' ? 0.3 : b === 'lake' ? 0.35 : 0;
    if (rand() > p) return;
    if (!placeOK(x, z, { roadGap: 4, maxSlope: 0.7 })) return;
    const s = 0.55 + rand() * 0.9;
    bushes.push({ x, y: getHeight(x, z) + s * 0.25, z, ry: rand() * Math.PI * 2, sx: s, sy: s * 0.62, sz: s });
  });
  // 花(平原と湖畔を彩る)
  tryN(2600, () => {
    const x = (rand() * 2 - 1) * 940, z = (rand() * 2 - 1) * 940;
    const b = getBiome(x, z);
    const p = b === 'plains' || b === 'ruins' ? 0.62 : b === 'lake' ? 0.55 : b === 'forest' ? 0.12 : 0;
    if (rand() > p) return;
    if (!placeOK(x, z, { roadGap: 3.2, maxSlope: 0.6, spotGap: 1 })) return;
    const s = 0.75 + rand() * 0.7;
    flowers.push({ x, y: getHeight(x, z), z, ry: rand() * Math.PI * 2, sx: s, sy: s, sz: s, k: (rand() * 4) | 0 });
  });

  instancedFrom(ctx, treeGeo('broadleaf'), broad, {
    tint: (c, t) => c.setRGB(0.85 + ((t.x * 13.7) % 1 + 1) % 1 * 0.3, 0.9 + ((t.z * 7.3) % 1 + 1) % 1 * 0.2, 0.85),
  });
  instancedFrom(ctx, treeGeo('pine'), pines, {
    tint: (c, t) => c.setRGB(0.9, 0.9 + ((t.x * 5.1) % 1 + 1) % 1 * 0.2, 0.9),
  });
  instancedFrom(ctx, treeGeo('dead'), deads, {});
  const rockGeo = colorize(new THREE.IcosahedronGeometry(1, 0), 0xffffff);
  instancedFrom(ctx, rockGeo, rocks, {
    tint: (c, t) => {
      if (t.v) c.setRGB(0.42, 0.3, 0.25); else c.setRGB(0.55, 0.53, 0.47);
      const m = 0.85 + ((t.x * 3.3 + t.z * 1.7) % 1 + 1) % 1 * 0.3;
      c.multiplyScalar(m);
    },
  });
  const bushGeo = colorize(new THREE.IcosahedronGeometry(1, 0), 0x4a8748);
  instancedFrom(ctx, bushGeo, bushes, {
    tint: (c, t) => c.setScalar(0.8 + ((t.z * 9.1) % 1 + 1) % 1 * 0.4),
  });

  // 花: 十字の花弁(instanceColor で色変え)
  const petalParts = [];
  const petal = colorize(new THREE.PlaneGeometry(0.3, 0.3), 0xffffff);
  pushGeo(petalParts, petal, 0, 0.36, 0, -Math.PI / 2.4, 0, 0);
  pushGeo(petalParts, petal, 0, 0.36, 0, -Math.PI / 2.4, Math.PI / 2, 0);
  pushGeo(petalParts, colorize(new THREE.PlaneGeometry(0.05, 0.4), 0x3f7a35), 0, 0.18, 0);
  const flowerGeo = mergeGeometries(petalParts);
  const fmat = toonMaterial(0xffffff, { vertexColors: true, side: THREE.DoubleSide });
  FLOWER_MAX = flowers.length;
  flowerMesh = new THREE.InstancedMesh(flowerGeo, fmat, FLOWER_MAX);
  flowerMesh.frustumCulled = false;
  const fc = new THREE.Color();
  const FCOLS = [0xf2f0e4, 0xffd75e, 0xe88ab8, 0x9db8ff];
  for (let i = 0; i < flowers.length; i++) {
    const t = flowers[i];
    composeAt(flowerMesh, i, t.x, t.y, t.z, t.ry, t.sx, t.sy, t.sz);
    fc.set(FCOLS[t.k]);
    flowerMesh.setColorAt(i, fc);
  }
  ctx.scene.add(flowerMesh);
}

function applyGrassQuality(q) {
  const mul = clamp(q?.grassMul ?? 1, 0.05, 1);
  if (grassMesh) grassMesh.count = Math.max(200, Math.floor(GRASS_MAX * mul));
  if (flowerMesh) flowerMesh.count = Math.max(80, Math.floor(FLOWER_MAX * (0.4 + mul * 0.6)));
}

// ---------------- init / update ----------------
export async function init(ctx) {
  resolveFlatSpots();

  buildTerrain(ctx);
  buildWater(ctx);
  buildLava(ctx);
  buildCastle(ctx);
  buildRuins(ctx);
  buildMountains(ctx);
  buildVegetation(ctx);

  ctx.world = {
    getHeight,
    getBiome,
    waterLevel: WATER_LEVEL,
    castleGatePos: new THREE.Vector3(0, getHeight(0, -560), -560),
    startPos: new THREE.Vector3(0, getHeight(0, 250), 250),
  };
  ctx.getGroundHeight = getHeight;

  applyGrassQuality(ctx.quality);
  ctx.on('quality-changed', (q) => applyGrassQuality(q));
}

export function update(ctx, dt) {
  // 軽量アニメーションのみ: 草の風・水面の波・溶岩のゆらぎ
  waterUniform.value += dt;
  grassUniform.value += dt;
  if (lavaTex) {
    lavaTex.offset.x += dt * 0.009;
    lavaTex.offset.y += dt * 0.006;
  }
  if (lavaMat) {
    const t = ctx.time.elapsed;
    const p = 1.28 + Math.sin(t * 2.1) * 0.16 + Math.sin(t * 5.3) * 0.07;
    lavaMat.color.setRGB(p * 1.22, p * 1.02, p * 0.88);
  }
  if (lavaLight) lavaLight.intensity = 850 + Math.sin(ctx.time.elapsed * 2.7) * 230;
}
