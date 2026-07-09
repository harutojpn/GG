// world.js — 大地アルディア: 地形・水・溶岩・植生・遺跡・魔城・遠景・コライダー
// 契約: ARCHITECTURE.md / 全てプロシージャル・シード固定で決定的
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  Simplex2, mulberry32, clamp, lerp, smoothstep,
  toonMaterial, glowMaterial, canvasTexture,
  loadGLTF, toonifyGLTF, measureObject,
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

// ---------------- Kenney GLBアセット(木・岩・城)の読み込みと単一ジオメトリ化 ----------------
// util.loadGLTF/toonifyGLTF/measureObject を使い、GLTFシーンを「変換焼き込み済み・頂点カラー付きの
// 単一 BufferGeometry」に潰す。以降は既存の InstancedMesh 配置ロジック(composeAt 等)にそのまま乗る。
const NATURE_DIR = 'assets/kenney/nature/';
const CASTLE_DIR = 'assets/kenney/castle/';

async function loadAssetSet(dir, names) {
  const entries = await Promise.all(names.map((n) => loadGLTF(dir + n + '.glb').then((g) => [n, g])));
  return Object.fromEntries(entries);
}

function loadNatureAssets() {
  return loadAssetSet(NATURE_DIR, [
    'tree_default', 'tree_oak', 'tree_detailed', 'tree_default_fall',
    'tree_cone', 'tree_cone_dark', 'tree_fat_darkh',
    'rock_largeA', 'rock_largeC', 'rock_largeE', 'rock_smallB', 'rock_smallD', 'rock_tallA', 'rock_tallC',
    'plant_bush', 'plant_bushDetailed',
  ]);
}

function loadCastleAssets() {
  return loadAssetSet(CASTLE_DIR, [
    'wall', 'tower-square-base', 'tower-square-mid-windows', 'tower-square-roof',
    'gate', 'flag-banner-long',
  ]);
}

// GLTFシーンの全メッシュのワールド変換を焼き込み、material.color を頂点カラーとして
// 単一の非インデックスジオメトリにマージする(既存 pushGeo/colorize と同じ流儀)。
// tint を渡すと toonifyGLTF で一旦その色に染めてから焼き込む(城のようにテクスチャが無い/使えない場合用)。
// tint が null なら各メッシュの元の material.color(Kenneyの単色マテリアル)をそのまま焼き込む(木・岩用)。
function bakeGeometry(gltf, tint = null) {
  const root = gltf.scene.clone(true);
  if (tint != null) toonifyGLTF(root, tint);
  root.updateMatrixWorld(true);
  const parts = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    const src = o.geometry;
    const g = src.index ? src.toNonIndexed() : src.clone();
    g.applyMatrix4(o.matrixWorld);
    const posOnly = new THREE.BufferGeometry();
    posOnly.setAttribute('position', g.attributes.position);
    colorize(posOnly, o.material.color.getHex());
    parts.push(posOnly);
    g.dispose();
  });
  const merged = mergeGeometries(parts);
  for (const p of parts) p.dispose();
  return merged;
}

// 高さ基準で正規化(木用): targetH(m) に高さが合うよう geometry.scale を焼き込む
function normalizeByHeight(gltf, targetH, tint = null) {
  const { size } = measureObject(gltf.scene);
  const k = targetH / Math.max(1e-4, size.y);
  const geo = bakeGeometry(gltf, tint);
  geo.scale(k, k, k);
  return geo;
}

// 半径基準で正規化(岩・茂み用: 旧 IcosahedronGeometry(1,0) と同じ基準に合わせる)
function normalizeByRadius(gltf, targetR, tint = null) {
  const { size } = measureObject(gltf.scene);
  const k = targetR / Math.max(1e-4, Math.max(size.x, size.z) / 2);
  const geo = bakeGeometry(gltf, tint);
  geo.scale(k, k, k);
  return geo;
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
      if (rd < 5.2) {
        const rm = 1 - smoothstep(2.0, 4.8, rd);
        col.lerp(PALETTE.road, rm * (0.72 + cn2 * 0.1));
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
    g.fillStyle = '#ff6a24';
    g.fillRect(0, 0, s, s);
    const rand = mulberry32(0xF1AE);
    // 冷えた岩皮(暗い焦げ茶・小さめを多数)
    for (let i = 0; i < 90; i++) {
      const x = rand() * s, y = rand() * s, r = 5 + rand() * 16;
      g.fillStyle = `rgba(${52 + (rand() * 26) | 0}, ${22 + (rand() * 12) | 0}, 10, ${0.5 + rand() * 0.35})`;
      g.beginPath(); g.ellipse(x, y, r, r * (0.45 + rand() * 0.5), rand() * Math.PI, 0, Math.PI * 2); g.fill();
    }
    // 明るい亀裂
    g.strokeStyle = 'rgba(255, 226, 150, 0.85)';
    for (let i = 0; i < 26; i++) {
      g.lineWidth = 1 + rand() * 1.8;
      g.beginPath();
      let x = rand() * s, y = rand() * s;
      g.moveTo(x, y);
      for (let k = 0; k < 5; k++) { x += (rand() - 0.5) * 52; y += (rand() - 0.5) * 52; g.lineTo(x, y); }
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

// ---------------- 古城(魔城)の外観(Kenney Castle Kit のモジュラーパーツ組み) ----------------
function buildCastle(ctx, assets) {
  const R = 78, WALL_H = 13, WALL_T = 4;

  // --- パーツごとに1体分のジオメトリへ焼き込み(石材はグレー、屋根は濃紺、門は木/鉄) ---
  const stoneTint = 0x8a8577, roofTint = 0x39304f;
  const wallGeo = bakeGeometry(assets['wall'], stoneTint);
  const baseGeo = bakeGeometry(assets['tower-square-base'], stoneTint);
  const midGeo = bakeGeometry(assets['tower-square-mid-windows'], stoneTint);
  const roofGeo = bakeGeometry(assets['tower-square-roof'], roofTint);
  const gateGeo = bakeGeometry(assets['gate'], 0x2a1f1c);
  const bannerGeo = bakeGeometry(assets['flag-banner-long'], 0x6a2740);

  const wallT = [], baseT = [], midT = [], roofT = [], glowT = [];

  // 塔の配置(南=+z が門)。±14°は門の両脇
  const towerAngles = [14, -14, 72, -72, 136, -136, 180].map((d) => (d * Math.PI) / 180);
  const towers = towerAngles.map((a) => ({ a, x: Math.sin(a) * R, z: Math.cos(a) * R }));

  // 城壁の順路(門の間 ±14° は開ける)
  const order = [14, 72, 136, 180, -136, -72, -14].map((d) => (d * Math.PI) / 180);

  // tower-square-base(足元)→ tower-square-mid-windows × nMid(胴)→ tower-square-roof(尖塔屋根)
  // を積み上げる。footR: 塔の見た目半径相当(足元スケール) / apexY: 尖塔の頂点高さ(積み上げ後に一致するよう自動計算)
  const stackTower = (x, z, ry, footR, apexY, nMid) => {
    const kXZ = footR / 0.5; // パーツの原寸フットプリントは1辺1(半幅0.5)
    const kY = apexY / (1.01 * (1 + nMid) + 2.01); // base+mid*n の高さ1.01・roofの高さ2.01(原寸)
    let y = 0;
    baseT.push({ x, y, z, ry, sx: kXZ, sy: kY, sz: kXZ });
    y += 1.01 * kY;
    for (let i = 0; i < nMid; i++) {
      midT.push({ x, y, z, ry, sx: kXZ, sy: kY, sz: kXZ });
      y += 1.01 * kY;
    }
    roofT.push({ x, y, z, ry, sx: kXZ, sy: kY, sz: kXZ });
    glowT.push({ x, y: y + 2.01 * kY - 0.6, z }); // 尖塔頂上の妖光(窓の代わり)
  };

  // 周壁の塔7本
  for (const t of towers) {
    const gate = Math.abs(t.a) < 0.5;
    stackTower(t.x, t.z, t.a, gate ? 5.6 : 7, gate ? 26 : 31, 1);
  }

  // 城壁(wall.glb をタイル状に並べる。門の間は開けたまま)
  const tileWall = (ax, az, bx, bz) => {
    const len = Math.hypot(bx - ax, bz - az);
    const ry = Math.atan2(-(bz - az), bx - ax);
    const kY = (WALL_H + 5) / 1.31; // 原寸の壁高さ1.31 → 胸壁込みの目標高さへ
    const kZ = WALL_T / 1.0;        // 原寸の厚み1 → 目標の壁厚へ
    const n = Math.max(2, Math.round(len / (kY * 0.85)));
    for (let k = 0; k < n; k++) {
      const u = (k + 0.5) / n;
      wallT.push({ x: lerp(ax, bx, u), y: 0, z: lerp(az, bz, u), ry, sx: len / n, sy: kY, sz: kZ });
    }
  };
  for (let i = 0; i < order.length - 1; i++) {
    const ax = Math.sin(order[i]) * R, az = Math.cos(order[i]) * R;
    const bx = Math.sin(order[i + 1]) * R, bz = Math.cos(order[i + 1]) * R;
    tileWall(ax, az, bx, bz);
  }

  // 中央天守(主塔 + 側塔2 + 後方尖塔)— 城壁より高く威容を出す(同じパーツの使い回し)
  stackTower(0, -8, 0, 13, 65, 1);
  stackTower(16, -2, 0, 6, 52.5, 2);
  stackTower(-16, -2, 0, 6, 52.5, 2);
  stackTower(0, -26, 0, 5, 72.5, 3);

  // --- グループ組み立て ---
  const group = new THREE.Group();
  const addInst = (geo, transforms) => {
    if (!transforms.length) return null;
    const mat = toonMaterial(0xffffff, { vertexColors: true });
    const mesh = new THREE.InstancedMesh(facet(geo), mat, transforms.length);
    for (let i = 0; i < transforms.length; i++) {
      const t = transforms[i];
      composeAt(mesh, i, t.x, t.y, t.z, t.ry, t.sx, t.sy, t.sz);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.frustumCulled = false;
    mesh.castShadow = true; mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };
  addInst(wallGeo, wallT);
  addInst(baseGeo, baseT);
  addInst(midGeo, midT);
  addInst(roofGeo, roofT);

  // 妖光(塔頂の紫の発光球。窓明かりの代替)
  if (glowT.length) {
    const glowGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const glowMesh = new THREE.InstancedMesh(glowGeo, glowMaterial(0x9a55ff, 1.8), glowT.length);
    for (let i = 0; i < glowT.length; i++) {
      const g = glowT[i];
      composeAt(glowMesh, i, g.x, g.y, g.z, 0, 1, 1, 1);
    }
    glowMesh.instanceMatrix.needsUpdate = true;
    glowMesh.frustumCulled = false;
    group.add(glowMesh);
  }

  // 門(アーチ扉 + 奥の暗闇 + 両脇の垂れ幕)
  const gateMat = toonMaterial(0xffffff, { vertexColors: true });
  const gateMesh = new THREE.Mesh(gateGeo, gateMat);
  gateMesh.position.set(0, 0, R - 3);
  gateMesh.rotation.y = Math.PI / 2;
  gateMesh.scale.setScalar(9.5);
  gateMesh.castShadow = true;
  group.add(gateMesh);

  const voidMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 13),
    new THREE.MeshBasicMaterial({ color: 0x0b0614 })
  );
  voidMesh.position.set(0, 4.5, R - 1);
  group.add(voidMesh);

  const bannerMat = toonMaterial(0xffffff, { vertexColors: true, side: THREE.DoubleSide });
  for (const a of [towerAngles[0], towerAngles[1]]) {
    const bx = Math.sin(a) * (R - 4.2), bz = Math.cos(a) * (R - 4.2);
    const banner = new THREE.Mesh(bannerGeo, bannerMat);
    banner.position.set(bx, 9, bz);
    banner.rotation.y = a;
    banner.scale.setScalar(6);
    banner.castShadow = true;
    group.add(banner);
  }

  group.position.set(CASTLE.x, PLATEAU_H - 0.4, CASTLE.z);
  ctx.scene.add(group);

  // --- コライダー(壁は円柱の列で近似・門は開ける)— 既存ロジックを維持 ---
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
    -0.09, 0, 0, 0.09, 0, 0, -0.055, 0.5, 0.02,
    0.055, 0.5, 0.02, 0, 0.95, 0.06,
  ]), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array([
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  ]), 3));
  // 根元は深緑 → 穂先は明るく(彩度は上品に)
  g.setAttribute('color', new THREE.BufferAttribute(new Float32Array([
    0.24, 0.45, 0.19, 0.24, 0.45, 0.19, 0.34, 0.58, 0.26,
    0.34, 0.58, 0.26, 0.46, 0.71, 0.34,
  ]), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(10), 2));
  g.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4]);
  return g;
}

// 1インスタンス = 数本の草の束(単発の針より自然でリッチに読める)
function tuftGeometry() {
  const blade = bladeGeometry();
  const rand = mulberry32(0x66A55);
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + rand() * 0.9;
    const r = i === 0 ? 0 : 0.15 + rand() * 0.38;
    const s = 0.78 + rand() * 0.5;
    pushGeo(parts, blade,
      Math.sin(a) * r, 0, Math.cos(a) * r,
      (rand() - 0.5) * 0.3, rand() * Math.PI * 2, (rand() - 0.5) * 0.3,
      s * 1.5, s * (0.7 + rand() * 0.4), s * 1.5);
  }
  blade.dispose();
  return mergeGeometries(parts);
}

function buildGrass(ctx) {
  const rand = mulberry32(0x6E4A55);
  GRASS_MAX = 15000;
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
  grassMesh = new THREE.InstancedMesh(tuftGeometry(), mat, GRASS_MAX);
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
    const s = 0.7 + rand() * 0.55;
    composeAt(grassMesh, i, x, getHeight(x, z) - 0.04, z, rand() * Math.PI * 2, s, s * (0.8 + rand() * 0.35), s);
    const dk = b === 'forest' ? 0.75 : 1;
    c.setRGB((0.78 + rand() * 0.22) * dk, (0.88 + rand() * 0.2) * dk, (0.72 + rand() * 0.2) * dk);
    grassMesh.setColorAt(i, c);
    i++;
  }
  GRASS_MAX = i;
  grassMesh.count = i;
  ctx.scene.add(grassMesh);
}

// 木/岩/茂み等の共通ビルダー: 変換リスト → InstancedMesh
function instancedFrom(ctx, geo, transforms, { shadow = true, tint = null } = {}) {
  if (!transforms.length) return null;
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

// transforms を rand() で n 個のバケツにランダム分割(バリエーションごとに別 InstancedMesh にするため)
function partitionN(list, n, rand) {
  const buckets = Array.from({ length: n }, () => []);
  for (const item of list) buckets[Math.floor(rand() * n) % n].push(item);
  return buckets;
}

function buildVegetation(ctx, nature) {
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

  // 広葉樹: Kenney tree_default / tree_oak / tree_detailed / tree_default_fall の4種にランダム分割
  const broadNames = ['tree_default', 'tree_oak', 'tree_detailed', 'tree_default_fall'];
  const broadGeos = [5.2, 5.0, 5.3, 5.2].map((h, i) => normalizeByHeight(nature[broadNames[i]], h));
  const broadTint = (c, t) => c.setRGB(0.85 + ((t.x * 13.7) % 1 + 1) % 1 * 0.3, 0.9 + ((t.z * 7.3) % 1 + 1) % 1 * 0.2, 0.85);
  partitionN(broad, broadGeos.length, rand).forEach((arr, i) => instancedFrom(ctx, broadGeos[i], arr, { tint: broadTint }));

  // 針葉樹: tree_cone / tree_cone_dark の2種
  const pineGeos = [normalizeByHeight(nature['tree_cone'], 5.4), normalizeByHeight(nature['tree_cone_dark'], 5.4)];
  const pineTint = (c, t) => c.setRGB(0.9, 0.9 + ((t.x * 5.1) % 1 + 1) % 1 * 0.2, 0.9);
  partitionN(pines, pineGeos.length, rand).forEach((arr, i) => instancedFrom(ctx, pineGeos[i], arr, { tint: pineTint }));

  // 火山の枯木: 焦げた広葉樹(tree_fat_darkh)+ ゴツゴツした岩(rock_tallC)で荒涼感を近似
  const deadGeos = [normalizeByHeight(nature['tree_fat_darkh'], 4.2), normalizeByHeight(nature['rock_tallC'], 3.0)];
  const deadTint = (c) => c.multiplyScalar(0.68 + ((c.r * 97) % 1) * 0.12);
  partitionN(deads, deadGeos.length, rand).forEach((arr, i) => instancedFrom(ctx, deadGeos[i], arr, { tint: deadTint }));

  // 岩: 大小の Kenney rock を6種、既存の色(dirt/grass)を活かし乗算でトーンを合わせる
  const rockNames = ['rock_largeA', 'rock_largeC', 'rock_largeE', 'rock_smallB', 'rock_smallD', 'rock_tallA'];
  const rockGeos = rockNames.map((n) => normalizeByRadius(nature[n], 1));
  const rockTint = (c, t) => {
    const m = 0.85 + ((t.x * 3.3 + t.z * 1.7) % 1 + 1) % 1 * 0.3;
    c.multiplyScalar(m);
    if (t.v) c.multiplyScalar(0.6); // 火山: 焦げた岩肌
  };
  partitionN(rocks, rockGeos.length, rand).forEach((arr, i) => instancedFrom(ctx, rockGeos[i], arr, { tint: rockTint }));

  // 茂み: plant_bush / plant_bushDetailed の2種
  const bushGeos = [normalizeByRadius(nature['plant_bush'], 1), normalizeByRadius(nature['plant_bushDetailed'], 1)];
  const bushTint = (c, t) => c.multiplyScalar(0.8 + ((t.z * 9.1) % 1 + 1) % 1 * 0.4);
  partitionN(bushes, bushGeos.length, rand).forEach((arr, i) => instancedFrom(ctx, bushGeos[i], arr, { tint: bushTint }));

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

  // Kenney製GLB(木・岩・城)の読み込みは地形生成と並行して進める
  const natureLoad = loadNatureAssets();
  const castleLoad = loadCastleAssets();

  buildTerrain(ctx);
  buildWater(ctx);
  buildLava(ctx);
  buildCastle(ctx, await castleLoad);
  buildRuins(ctx);
  buildMountains(ctx);
  buildVegetation(ctx, await natureLoad);

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
