// shrines.js — 祠×4(外観+内部パズル部屋+入退場+報酬)
// 契約: ARCHITECTURE.md — ctx.shrines = { list, completedCount, active }
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { toonMaterial, glowMaterial, clamp, lerp, smoothstep, damp, canvasTexture, TMP } from './util.js';

// ---------------- 定数 ----------------
const CYAN = 0x33e0c8;
const CYAN_SOFT = 0x66ead6;
const GOLD = 0xf0be4a;
const GOLD_DEEP = 0xc9a227;

const SHRINE_DEFS = [
  { x: 180, z: 80, name: '力の祠' },
  { x: -360, z: 260, name: '水鏡の祠' },
  { x: 430, z: 40, name: '樹霊の祠' },
  { x: 430, z: -300, name: '烈火の祠' },
];
const ROOM_X = 3000, ROOM_Z0 = 3000, ROOM_DZ = 300;
const ENTER_DIST = 4;      // 入場プロンプト距離
const PAD_DIST = 1.5;      // 退場円陣の判定距離

// ---------------- モジュール状態 ----------------
let S = null;
const _tv = new THREE.Vector3();
const _tv2 = new THREE.Vector3();

// ---------------- ジオメトリ小道具 ----------------
function boxAt(w, h, d, x, y, z, ry = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (ry) g.rotateY(ry);
  g.translate(x, y, z);
  return g;
}
function cylAt(rt, rb, h, seg, x, y, z) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  g.translate(x, y, z);
  return g;
}
function torusFlat(r, tube, y, seg = 24) {
  const g = new THREE.TorusGeometry(r, tube, 6, seg);
  g.rotateX(Math.PI / 2);
  g.translate(0, y, 0);
  return g;
}
function merged(parts) {
  const g = mergeGeometries(parts, false);
  for (const p of parts) p.dispose();
  return g;
}
function addMesh(parent, geo, mat, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = shadow;
  parent.add(m);
  return m;
}

// ======================================================================
// init
// ======================================================================
export async function init(ctx) {
  S = {
    ctx,
    api: null,
    exts: [],          // 外観 {group, doorPos, exitPos, runeMat, flameMat, beaconMat}
    rooms: [],         // 内部の部屋
    prompt: null,      // 自分が出している現在のプロンプト
    savedGround: null,
    savedBounds: null,
    added: [],         // 入場時に push したコライダー
    inside: false,
    seq: null,         // 宝箱開封演出
    enterCool: 0,
  };

  // ---- 共有マテリアル ----
  S.M = {
    extStone: toonMaterial(0x8a8577),
    wall: toonMaterial(0x4c4739),
    floor: toonMaterial(0x5b5546),
    dark: toonMaterial(0x2b2823),
    door: toonMaterial(0x716b58),
    mov: toonMaterial(0x7d766a),
    wood: toonMaterial(0x6e4a2f),
    gold: glowMaterial(GOLD_DEEP, 0.35),
    glowAdd: new THREE.MeshBasicMaterial({
      color: CYAN, transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
    padAdd: new THREE.MeshBasicMaterial({
      color: CYAN, transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }),
    beamAdd: new THREE.MeshBasicMaterial({
      color: 0xaef5e8, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    }),
    orb: glowMaterial(CYAN, 2.3),
    candle: glowMaterial(CYAN_SOFT, 2.0, { transparent: true, opacity: 0.92 }),
  };

  buildExteriors(ctx);
  buildRooms(ctx);

  // ---- 契約API ----
  S.api = {
    list: SHRINE_DEFS.map((d) => ({
      pos: new THREE.Vector3(d.x, ctx.world.getHeight(d.x, d.z), d.z),
      name: d.name,
      completed: false,
    })),
    completedCount: 0,
    active: -1,
  };
  ctx.shrines = S.api;

  // 死亡・タイトル復帰などで祠内部のまま状態遷移した場合の後始末
  ctx.on('state', ({ from, to }) => {
    if (S.inside && from === 'shrine' && (to === 'gameover' || to === 'title')) {
      restoreOutside(ctx);
    }
  });
}

// ======================================================================
// 外観(4つ共通ジオメトリ・個別マテリアル)
// ======================================================================
function buildExteriors(ctx) {
  // --- 石造り部(共有ジオメトリ) ---
  const stone = [];
  stone.push(cylAt(6.4, 6.9, 0.55, 8, 0, 0.28, 0));   // 台座 3段
  stone.push(cylAt(5.3, 5.8, 0.55, 8, 0, 0.82, 0));
  stone.push(cylAt(4.4, 4.9, 0.5, 8, 0, 1.32, 0));
  stone.push(cylAt(3.1, 3.4, 3.0, 8, 0, 3.07, 0));    // 本体(八角)
  stone.push(boxAt(0.5, 3.2, 0.5, -1.45, 3.15, 3.0)); // 門柱
  stone.push(boxAt(0.5, 3.2, 0.5, 1.45, 3.15, 3.0));
  stone.push(boxAt(3.7, 0.55, 0.72, 0, 4.95, 3.0));   // 楣
  stone.push(cylAt(4.2, 4.2, 0.18, 8, 0, 4.62, 0));   // 軒板
  // 曲線屋根(Lathe)
  const roofPts = [
    new THREE.Vector2(4.2, 0), new THREE.Vector2(3.55, 0.38),
    new THREE.Vector2(2.75, 1.05), new THREE.Vector2(1.9, 1.85),
    new THREE.Vector2(1.1, 2.55), new THREE.Vector2(0.5, 3.05),
    new THREE.Vector2(0.05, 3.42),
  ];
  const roof = new THREE.LatheGeometry(roofPts, 8);
  roof.translate(0, 4.7, 0);
  stone.push(roof);
  // 篝火(台)×2
  for (const s of [-1, 1]) {
    stone.push(cylAt(0.24, 0.36, 1.15, 6, s * 3.4, 0.58, 5.2));
    stone.push(cylAt(0.58, 0.4, 0.32, 6, s * 3.4, 1.3, 5.2));
  }
  const stoneGeo = merged(stone);

  // --- 発光紋様部(共有ジオメトリ・シアン→クリアで金) ---
  const glow = [];
  glow.push(boxAt(2.0, 2.7, 0.14, 0, 2.78, 3.02));    // 入口の光る扉
  glow.push(torusFlat(3.42, 0.07, 4.25));             // 本体上部の紋様帯
  glow.push(torusFlat(4.58, 0.05, 1.62));             // 台座の円環紋
  glow.push(torusFlat(4.24, 0.05, 4.56));             // 軒下の光線
  for (let k = 1; k <= 7; k++) {                      // 縦の紋様(正面以外)
    const strip = boxAt(0.15, 1.9, 0.1, 0, 3.0, 3.02);
    strip.rotateY(k * Math.PI / 4);
    glow.push(strip);
  }
  const disc = new THREE.CircleGeometry(1.25, 20);    // 入口前の円陣
  disc.rotateX(-Math.PI / 2);
  disc.translate(0, 0.06, 5.2);
  glow.push(disc);
  const orb = new THREE.SphereGeometry(0.36, 10, 8);  // 頂部の宝珠
  orb.translate(0, 8.3, 0);
  glow.push(orb);
  glow.push(torusFlat(0.52, 0.05, 7.9, 16));
  const glowGeo = merged(glow);

  // --- 炎(共有ジオメトリ)---
  const fl = [];
  for (const s of [-1, 1]) {
    fl.push(cylAt(0.02, 0.32, 0.85, 6, s * 3.4, 1.9, 5.2));
    fl.push(cylAt(0.01, 0.16, 0.5, 5, s * 3.4, 2.28, 5.2));
  }
  const flameGeo = merged(fl);
  const beaconGeo = new THREE.CylinderGeometry(0.24, 0.36, 56, 8, 1, true);
  beaconGeo.translate(0, 32, 0);

  for (let i = 0; i < 4; i++) {
    const d = SHRINE_DEFS[i];
    const h = ctx.world.getHeight(d.x, d.z);
    const len = Math.hypot(d.x, d.z) || 1;
    const dirX = -d.x / len, dirZ = -d.z / len; // 世界の中心へ向く
    const yaw = Math.atan2(dirX, dirZ);

    const group = new THREE.Group();
    group.position.set(d.x, h, d.z);
    group.rotation.y = yaw;

    const runeMat = glowMaterial(CYAN, 1.3);
    const flameMat = glowMaterial(0x5ceadb, 1.8, { transparent: true, opacity: 0.9 });
    const beaconMat = new THREE.MeshBasicMaterial({
      color: CYAN, transparent: true, opacity: 0.1,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    });

    addMesh(group, stoneGeo, S.M.extStone);
    addMesh(group, glowGeo, runeMat, false);
    addMesh(group, flameGeo, flameMat, false);
    group.add(new THREE.Mesh(beaconGeo, beaconMat));
    ctx.scene.add(group);

    // 周囲コライダー
    ctx.colliders.push({ x: d.x, z: d.z, radius: 5.9, height: 9 });
    for (const s of [-1, 1]) {
      const lx = s * 3.4, lz = 5.2;
      ctx.colliders.push({
        x: d.x + lx * Math.cos(yaw) + lz * Math.sin(yaw),
        z: d.z - lx * Math.sin(yaw) + lz * Math.cos(yaw),
        radius: 0.62, height: 2.2,
      });
    }

    S.exts.push({
      group, runeMat, flameMat, beaconMat,
      doorPos: new THREE.Vector3(d.x + dirX * 3.1, h, d.z + dirZ * 3.1),
      exitPos: new THREE.Vector3(d.x + dirX * 7.6, h, d.z + dirZ * 7.6),
      exitHeading: Math.atan2(dirX, dirZ),
    });
  }
}

function setShrineGold(i) {
  const e = S.exts[i];
  e.runeMat.color.setHex(GOLD);
  e.runeMat.emissive.setHex(GOLD);
  e.flameMat.color.setHex(0xffc855);
  e.flameMat.emissive.setHex(0xffc855);
  e.beaconMat.color.setHex(GOLD);
}

// ======================================================================
// 内部の部屋(事前構築・非表示)
// ======================================================================
function buildRooms(ctx) {
  for (let i = 0; i < 4; i++) {
    const origin = new THREE.Vector3(ROOM_X, 0, ROOM_Z0 + i * ROOM_DZ);
    const group = new THREE.Group();
    group.position.copy(origin);
    group.visible = false;
    ctx.scene.add(group);

    const northZ = i === 3 ? -16.4 : -20.4;
    const room = {
      index: i, group, origin,
      northZ,
      bounds: {
        minX: origin.x - 12.55, maxX: origin.x + 12.55,
        minZ: origin.z + northZ + 0.85, maxZ: origin.z + 16.05,
      },
      colliders: [],      // 入場時に push(可動物含む)
      doorCol: null,
      door: null, doorOpen: false, doorAnim: 0, doorDelay: 0,
      chest: null, chestWorld: null,
      solved: false,
      p: null,
      entranceWorld: new THREE.Vector3(origin.x, 0, origin.z + 11),
      padWorld: new THREE.Vector3(origin.x, 0, origin.z + 13.8),
      ground: null,
      update: null, resetPuzzle: null, promptOf: null,
    };

    buildShell(ctx, room);
    if (i === 0) buildRoom0(ctx, room);
    else if (i === 1) buildRoom1(ctx, room);
    else if (i === 2) buildRoom2(ctx, room);
    else buildRoom3(ctx, room);

    // 柱コライダー
    for (const px of [-10.5, 10.5]) {
      for (const pz of [9, 0, -8.5]) {
        if (i === 3 && pz !== 9) continue; // 溶岩内の柱は判定不要
        room.colliders.push({ x: origin.x + px, z: origin.z + pz, radius: 0.95, height: 6 });
      }
    }
    S.rooms.push(room);
  }
}

// ---- 部屋の躯体(床/壁/柱/円陣/扉/宝箱) ----
function buildShell(ctx, room) {
  const i = room.index, g = room.group, M = S.M;
  const northZ = room.northZ;
  const stone = [], darks = [], glows = [];

  // 床
  if (i === 2) {
    stone.push(boxAt(26, 1, 19, 0, -0.5, 7.5));       // 手前側 z[-2..17]
    stone.push(boxAt(26, 1, 13, 0, -0.5, -13.5));     // 奥側 z[-20..-7]
    darks.push(boxAt(26, 0.5, 5.4, 0, -6.75, -4.5));  // 奈落の底
    darks.push(boxAt(26, 5.4, 0.45, 0, -3.5, -1.78)); // 竪穴の壁
    darks.push(boxAt(26, 5.4, 0.45, 0, -3.5, -7.22));
  } else if (i === 3) {
    stone.push(boxAt(26, 1, 11, 0, -0.5, 11.5));      // 手前側 z[6..17]
    stone.push(boxAt(8, 1.7, 4, -6, -0.85, -14));     // 西の島(水晶)
    stone.push(boxAt(8, 1.7, 4, 6, -0.85, -14));      // 東の島(宝箱)
    darks.push(boxAt(26, 0.4, 23.4, 0, -3.1, -5.5));  // 溶岩の底
  } else {
    stone.push(boxAt(26, 1, 37, 0, -0.5, -1.5));
  }

  // 外周壁
  const wallLen = 16.9 - northZ;
  const wallZC = (16.9 + northZ) / 2;
  stone.push(boxAt(27.6, 6, 0.8, 0, 3, 16.9));
  stone.push(boxAt(27.6, 6, 0.8, 0, 3, northZ));
  stone.push(boxAt(0.8, 6, wallLen, -13.4, 3, wallZC));
  stone.push(boxAt(0.8, 6, wallLen, 13.4, 3, wallZC));
  // 中仕切り壁+楣(宝物殿への扉、烈火のみ無し)
  if (i !== 3) {
    stone.push(boxAt(11.35, 6, 0.9, -7.33, 3, -10));
    stone.push(boxAt(11.35, 6, 0.9, 7.33, 3, -10));
    stone.push(boxAt(4.2, 1.5, 0.9, 0, 5.25, -10));
    for (const sx of [-1, 1]) {
      for (const cx of [2.6, 4.8, 7.0, 9.2, 11.4]) {
        room.colliders.push({ x: room.origin.x + sx * cx, z: room.origin.z - 10, radius: 1.15, height: 6 });
      }
    }
  }

  // 柱×6+頂部の光環
  for (const px of [-10.5, 10.5]) {
    for (const pz of [9, 0, -8.5]) {
      if (i === 3 && pz !== 9) continue;
      stone.push(cylAt(0.5, 0.66, 6, 7, px, 2.5, pz));
      stone.push(boxAt(1.5, 0.35, 1.5, px, 5.62, pz));
      const band = torusFlat(0.62, 0.05, 4.7, 16);
      band.translate(px, 0, pz);
      glows.push(band);
    }
  }
  // 壁面の光線
  glows.push(boxAt(0.08, 0.1, wallLen - 1, -12.96, 2.6, wallZC));
  glows.push(boxAt(0.08, 0.1, wallLen - 1, 12.96, 2.6, wallZC));
  glows.push(boxAt(25.6, 0.1, 0.08, 0, 2.6, northZ + 0.44));
  glows.push(boxAt(25.6, 0.1, 0.08, 0, 2.6, 16.46));
  // 床外周のリム光(浮遊感)
  glows.push(boxAt(26.4, 0.14, 0.14, 0, -0.95, 16.9));
  glows.push(boxAt(26.4, 0.14, 0.14, 0, -0.95, northZ));
  glows.push(boxAt(0.14, 0.14, wallLen, -13.2, -0.95, wallZC));
  glows.push(boxAt(0.14, 0.14, wallLen, 13.2, -0.95, wallZC));

  addMesh(g, merged(stone), i === 3 ? M.wall : M.floor);
  if (darks.length) addMesh(g, merged(darks), M.dark, false);
  addMesh(g, merged(glows), M.glowAdd, false);

  // 発光ルーンの床(CanvasTexture・加算)
  const runePlane = new THREE.PlaneGeometry(26, 37);
  runePlane.rotateX(-Math.PI / 2);
  runePlane.translate(0, 0.03, -1.5);
  const runeMat = new THREE.MeshBasicMaterial({
    map: makeRuneFloorTexture(i), transparent: true, opacity: 0.9,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  addMesh(g, runePlane, runeMat, false);

  // 奥壁の紋章
  const emblem = new THREE.PlaneGeometry(5, 5);
  emblem.translate(0, 3.1, northZ + 0.46);
  addMesh(g, emblem, makeEmblemMat(), false);

  // 間接光(PointLight 2灯)
  const lightColors = [0x6fe8d4, 0x7fc8ff, 0x8fe8a8, 0xff8a4a];
  const l1 = new THREE.PointLight(lightColors[i], 60, 36, 2);
  l1.position.set(0, 6, i === 3 ? -4 : 2);
  g.add(l1);
  const l2 = new THREE.PointLight(0xffd9a0, 26, 18, 2);
  l2.position.set(i === 3 ? 6 : 0, 4.2, i === 3 ? -13 : -15);
  g.add(l2);

  // 入口の光る円陣(退場用)
  const ring = new THREE.RingGeometry(0.95, 1.3, 28);
  ring.rotateX(-Math.PI / 2); ring.translate(0, 0.04, 13.8);
  const inner = new THREE.CircleGeometry(0.52, 20);
  inner.rotateX(-Math.PI / 2); inner.translate(0, 0.04, 13.8);
  addMesh(g, merged([ring, inner]), M.padAdd, false);
  const padBeam = new THREE.CylinderGeometry(0.9, 1.15, 5.5, 12, 1, true);
  padBeam.translate(0, 2.8, 13.8);
  addMesh(g, padBeam, new THREE.MeshBasicMaterial({
    color: CYAN, transparent: true, opacity: 0.05,
    blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  }), false);

  // 扉(烈火は橋で代替)
  if (i !== 3) {
    const door = addMesh(g, new THREE.BoxGeometry(3.3, 4.6, 0.55), M.door);
    door.position.set(0, 2.3, -10);
    const dg = new THREE.Mesh(boxAt(1.7, 2.7, 0.62, 0, 0.1, 0), M.glowAdd);
    door.add(dg);
    room.door = door;
    room.doorCol = { x: room.origin.x, z: room.origin.z - 10, radius: 1.75, height: 5.5 };
  }

  // 宝箱(0-2: 奥の宝物殿 / 3: 東の島)
  const cx = i === 3 ? 6 : 0, cz = i === 3 ? -14 : -15.5;
  addMesh(g, cylAt(1.7, 1.95, 0.4, 8, cx, 0.2, cz), M.floor);
  room.chest = buildChest(g, cx, cz, i === 3 ? -Math.PI / 2 : 0);
  room.chestWorld = new THREE.Vector3(room.origin.x + cx, 0.6, room.origin.z + cz);
  room.colliders.push({ x: room.origin.x + cx, z: room.origin.z + cz, radius: 0.85, height: 1.6 });
}

function makeRuneFloorTexture(i) {
  return canvasTexture(512, (c, s) => {
    const X = (x) => (x + 13) / 26 * s;
    const Z = (z) => (z + 20) / 37 * s;
    c.fillStyle = '#000';
    c.fillRect(0, 0, s, s);
    const cc = (x, z, r, a = 0.5, w = 2) => {
      c.strokeStyle = `rgba(90,235,215,${a})`;
      c.lineWidth = w;
      c.beginPath();
      c.ellipse(X(x), Z(z), r / 26 * s, r / 37 * s, 0, 0, Math.PI * 2);
      c.stroke();
    };
    // 中央の魔法陣
    const cz0 = i === 3 ? 11 : 2;
    cc(0, cz0, 4.5, 0.55, 3);
    cc(0, cz0, 3.6, 0.35, 2);
    cc(0, cz0, 1.2, 0.4, 2);
    c.fillStyle = 'rgba(90,235,215,0.5)';
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4;
      c.fillRect(X(Math.sin(a) * 4.0) - 3, Z(cz0 + Math.cos(a) * 2.8) - 3, 6, 6);
    }
    // 入口円陣の飾り
    cc(0, 13.8, 2.0, 0.4, 2);
    // 部屋ごとの床標示
    if (i === 0) {
      c.strokeStyle = 'rgba(90,235,215,0.28)';
      c.lineWidth = 1.5;
      for (let k = -4; k <= 4; k++) {
        const v = (k + 0.5) * 1.6;
        c.beginPath(); c.moveTo(X(-5.6), Z(1 + v)); c.lineTo(X(5.6), Z(1 + v)); c.stroke();
        c.beginPath(); c.moveTo(X(v), Z(1 - 5.6)); c.lineTo(X(v), Z(1 + 5.6)); c.stroke();
      }
    } else if (i === 1) {
      for (const x of [-4.5, 0, 4.5]) cc(x, -3.4, 1.0, 0.5, 2);
    } else if (i === 2) {
      cc(-5, 6, 1.3, 0.55, 2);
      cc(-3.5, -8.6, 1.3, 0.55, 2);
    }
    // 周囲の古代文字風グリフ
    c.fillStyle = 'rgba(90,235,215,0.4)';
    c.font = `${Math.floor(s * 0.045)}px serif`;
    const glyphs = '古の力ここに眠る';
    for (let k = 0; k < 8; k++) {
      const a = k * Math.PI / 4 + 0.4;
      c.fillText(glyphs[k], X(Math.sin(a) * 10.5), Z(cz0 + Math.cos(a) * 5.5));
    }
  });
}

let _emblemMat = null;
function makeEmblemMat() {
  if (_emblemMat) return _emblemMat;
  const tex = canvasTexture(256, (c, s) => {
    c.fillStyle = '#000';
    c.fillRect(0, 0, s, s);
    c.strokeStyle = 'rgba(110,240,220,0.85)';
    c.lineWidth = 5;
    c.beginPath(); c.arc(s / 2, s / 2, s * 0.38, 0, Math.PI * 2); c.stroke();
    c.lineWidth = 3;
    c.beginPath(); c.arc(s / 2, s / 2, s * 0.3, 0, Math.PI * 2); c.stroke();
    c.beginPath();
    c.moveTo(s / 2, s * 0.2); c.lineTo(s * 0.68, s / 2); c.lineTo(s / 2, s * 0.8); c.lineTo(s * 0.32, s / 2);
    c.closePath(); c.stroke();
    c.fillStyle = 'rgba(110,240,220,0.9)';
    c.beginPath();
    c.moveTo(s / 2, s * 0.38); c.lineTo(s * 0.58, s / 2); c.lineTo(s / 2, s * 0.62); c.lineTo(s * 0.42, s / 2);
    c.closePath(); c.fill();
  });
  _emblemMat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  return _emblemMat;
}

// ---- 宝箱(金装飾) ----
function buildChest(parent, x, z, ry) {
  const M = S.M;
  const g = new THREE.Group();
  g.position.set(x, 0.4, z);
  g.rotation.y = ry;
  parent.add(g);

  addMesh(g, boxAt(1.15, 0.6, 0.75, 0, 0.3, 0), M.wood);
  addMesh(g, merged([
    boxAt(0.14, 0.64, 0.79, -0.3, 0.3, 0),
    boxAt(0.14, 0.64, 0.79, 0.3, 0.3, 0),
    boxAt(0.2, 0.24, 0.08, 0, 0.52, 0.38),
  ]), M.gold);

  const lid = new THREE.Group();
  lid.position.set(0, 0.6, -0.375);
  g.add(lid);
  addMesh(lid, boxAt(1.15, 0.3, 0.75, 0, 0.15, 0.375), M.wood);
  addMesh(lid, merged([
    boxAt(0.14, 0.34, 0.79, -0.3, 0.15, 0.375),
    boxAt(0.14, 0.34, 0.79, 0.3, 0.15, 0.375),
  ]), M.gold);

  // 気の珠(発光ダイヤ)
  const orbGeo = new THREE.OctahedronGeometry(0.3, 0);
  orbGeo.scale(1, 1.4, 1);
  const orb = new THREE.Mesh(orbGeo, M.orb);
  orb.position.set(0, 0.5, 0);
  orb.visible = false;
  g.add(orb);

  // 光柱
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.72, 7.5, 12, 1, true), M.beamAdd);
  beam.position.set(0, 3.9, 0);
  beam.visible = false;
  g.add(beam);

  return { group: g, lid, orb, beam, opened: false };
}

// ======================================================================
// 部屋 0: 力の祠 — 石塊のグリッド押し引き
// ======================================================================
const CS = 1.6; // グリッドセル
function g0x(cx) { return cx * CS; }
function g0z(cz) { return 1 + cz * CS; }

function buildRoom0(ctx, room) {
  const g = room.group;
  const p = room.p = {
    cellX: 2, cellZ: 2,
    startX: 2, startZ: 2,
    swX: -2, swZ: -2,
    obstacles: [[0, 0], [-1, 1], [1, 2]],
    grabbed: false,
    slide: null, // {fx,fz,tx,tz,t,pfx,pfz}
    cool: 0,
  };

  // 障害の石柱
  const obs = [];
  for (const [ox, oz] of p.obstacles) {
    obs.push(boxAt(1.35, 1.5, 1.35, g0x(ox), 0.75, g0z(oz)));
    obs.push(boxAt(1.05, 0.4, 1.05, g0x(ox), 1.65, g0z(oz)));
    room.colliders.push({ x: room.origin.x + g0x(ox), z: room.origin.z + g0z(oz), radius: 0.95, height: 1.9 });
  }
  addMesh(g, merged(obs), S.M.wall);

  // 発光スイッチ床
  p.swMat = glowMaterial(CYAN, 0.45);
  const sw = addMesh(g, new THREE.BoxGeometry(1.45, 0.1, 1.45), p.swMat, false);
  sw.position.set(g0x(p.swX), 0.05, g0z(p.swZ));

  // 重い石塊(1.2m立方)
  const block = new THREE.Group();
  addMesh(block, new THREE.BoxGeometry(1.2, 1.2, 1.2), S.M.mov);
  const inl = [];
  for (let k = 0; k < 4; k++) {
    const q = boxAt(0.46, 0.46, 0.06, 0, 0, 0.61);
    q.rotateZ(Math.PI / 4);
    q.rotateY(k * Math.PI / 2);
    inl.push(q);
  }
  addMesh(block, merged(inl), S.M.glowAdd, false);
  block.position.set(g0x(p.cellX), 0.6, g0z(p.cellZ));
  g.add(block);
  p.block = block;
  p.blockCol = { x: room.origin.x + block.position.x, z: room.origin.z + block.position.z, radius: 0.8, height: 1.4 };
  room.colliders.push(p.blockCol);

  room.ground = () => 0;

  room.resetPuzzle = () => {
    p.cellX = p.startX; p.cellZ = p.startZ;
    p.grabbed = false; p.slide = null;
    p.block.position.set(g0x(p.cellX), 0.6, g0z(p.cellZ));
    p.blockCol.x = room.origin.x + p.block.position.x;
    p.blockCol.z = room.origin.z + p.block.position.z;
    p.swMat.emissiveIntensity = 0.45;
    p.swMat.color.setHex(CYAN); p.swMat.emissive.setHex(CYAN);
  };

  room.update = (c2, dt) => updateRoom0(c2, room, dt);
  room.promptOf = (c2) => {
    if (room.solved) return null;
    if (p.grabbed) return 'E: 離す / WASD: 押し引き';
    const pl = c2.player.position;
    const dx = pl.x - (room.origin.x + p.block.position.x);
    const dz = pl.z - (room.origin.z + p.block.position.z);
    if (dx * dx + dz * dz < 1.75 * 1.75) return 'E: 石塊を掴む';
    return null;
  };
}

function cellBlocked0(p, cx, cz) {
  if (Math.abs(cx) > 3 || Math.abs(cz) > 3) return true;
  for (const [ox, oz] of p.obstacles) if (ox === cx && oz === cz) return true;
  return false;
}

function updateRoom0(ctx, room, dt) {
  const p = room.p;
  const pl = ctx.player;
  p.cool = Math.max(0, p.cool - dt);

  if (p.slide) {
    // 0.5秒で1マススライド
    const sl = p.slide;
    sl.t = Math.min(1, sl.t + dt / 0.5);
    const k = smoothstep(0, 1, sl.t);
    const bx = lerp(g0x(sl.fx), g0x(sl.tx), k);
    const bz = lerp(g0z(sl.fz), g0z(sl.tz), k);
    p.block.position.set(bx, 0.6, bz);
    p.blockCol.x = room.origin.x + bx;
    p.blockCol.z = room.origin.z + bz;
    // プレイヤーも同じ量だけ移動
    pl.position.x = sl.pfx + (g0x(sl.tx) - g0x(sl.fx)) * k;
    pl.position.z = sl.pfz + (g0z(sl.tz) - g0z(sl.fz)) * k;
    pl.position.y = 0;
    if (sl.t >= 1) {
      p.cellX = sl.tx; p.cellZ = sl.tz;
      p.slide = null; p.cool = 0.06;
      if (!room.solved && p.cellX === p.swX && p.cellZ === p.swZ) {
        room.solved = true;
        p.grabbed = false;
        pl.setFrozen(false);
        p.swMat.emissiveIntensity = 2.2;
        p.swMat.color.setHex(GOLD); p.swMat.emissive.setHex(GOLD);
        _tv.set(room.origin.x + bx, 1.4, room.origin.z + bz);
        ctx.effects.burst(_tv, 'magic');
        ctx.audio.play('switch');
        room.doorDelay = 0.5;
      }
    }
    return;
  }

  if (room.solved) return;

  if (p.grabbed) {
    if (ctx.input.justPressed('KeyE')) {
      p.grabbed = false;
      pl.setFrozen(false);
      return;
    }
    if (p.cool > 0) return;
    // カメラ基準のWASDを4方位に量子化
    ctx.camera.getWorldDirection(TMP.v1);
    let fx = 0, fz = 0;
    if (Math.abs(TMP.v1.x) > Math.abs(TMP.v1.z)) fx = Math.sign(TMP.v1.x);
    else fz = Math.sign(TMP.v1.z);
    const rx = -fz, rz = fx; // 右方向
    const k = ctx.input.keys;
    let dx = 0, dz = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) { dx = fx; dz = fz; }
    else if (k.has('KeyS') || k.has('ArrowDown')) { dx = -fx; dz = -fz; }
    else if (k.has('KeyD') || k.has('ArrowRight')) { dx = rx; dz = rz; }
    else if (k.has('KeyA') || k.has('ArrowLeft')) { dx = -rx; dz = -rz; }
    if (dx === 0 && dz === 0) return;
    const tx = p.cellX + dx, tz = p.cellZ + dz;
    if (cellBlocked0(p, tx, tz)) return;
    // プレイヤーの移動先も検証
    const px = pl.position.x - room.origin.x + dx * CS;
    const pz = pl.position.z - room.origin.z + dz * CS;
    if (px < -11.6 || px > 11.6 || pz < -8.7 || pz > 14.5) return;
    for (const [ox, oz] of p.obstacles) {
      if (Math.abs(px - g0x(ox)) < 1.05 && Math.abs(pz - g0z(oz)) < 1.05) return;
    }
    p.slide = {
      fx: p.cellX, fz: p.cellZ, tx, tz, t: 0,
      pfx: pl.position.x, pfz: pl.position.z,
    };
    ctx.audio.play('switch');
    return;
  }

  // 掴む
  if (ctx.input.justPressed('KeyE')) {
    const dx = pl.position.x - (room.origin.x + p.block.position.x);
    const dz = pl.position.z - (room.origin.z + p.block.position.z);
    if (dx * dx + dz * dz < 1.75 * 1.75 && pl.onGround) {
      p.grabbed = true;
      pl.setFrozen(true);
      ctx.audio.play('ui');
    }
  }
}

// ======================================================================
// 部屋 1: 水鏡の祠 — 燭台の点火順
// ======================================================================
function buildRoom1(ctx, room) {
  const g = room.group;
  const xs = [-4.5, 0, 4.5];
  const p = room.p = {
    xs,
    order: [1, 2, 0],   // 手本(中央→右→左)
    progress: 0,
    lit: [false, false, false],
    demoT: 0, wrongT: 0,
    flames: [], runeMats: [],
  };

  const stands = [];
  for (let k = 0; k < 3; k++) {
    const x = xs[k];
    stands.push(cylAt(0.34, 0.46, 0.25, 7, x, 0.12, -5.5));
    stands.push(cylAt(0.09, 0.15, 1.25, 6, x, 0.85, -5.5));
    stands.push(cylAt(0.34, 0.16, 0.26, 7, x, 1.55, -5.5));
    // 手本ルーン(足元)
    const rm = new THREE.MeshBasicMaterial({
      color: CYAN, transparent: true, opacity: 0.08,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const rg = new THREE.CircleGeometry(0.85, 22);
    rg.rotateX(-Math.PI / 2);
    const rmesh = new THREE.Mesh(rg, rm);
    rmesh.position.set(x, 0.05, -3.4);
    g.add(rmesh);
    p.runeMats.push(rm);
    // 炎
    const fl = new THREE.Mesh(merged([
      cylAt(0.02, 0.24, 0.62, 6, 0, 0.3, 0),
      cylAt(0.01, 0.12, 0.36, 5, 0, 0.55, 0),
    ]), S.M.candle);
    fl.position.set(x, 1.72, -5.5);
    fl.visible = false;
    g.add(fl);
    p.flames.push(fl);
    room.colliders.push({ x: room.origin.x + x, z: room.origin.z - 5.5, radius: 0.5, height: 2 });
  }
  addMesh(g, merged(stands), S.M.gold);

  room.ground = () => 0;

  room.resetPuzzle = () => {
    p.progress = 0; p.demoT = 0; p.wrongT = 0;
    for (let k = 0; k < 3; k++) {
      p.lit[k] = false;
      p.flames[k].visible = false;
      p.runeMats[k].opacity = 0.08;
      p.runeMats[k].color.setHex(CYAN);
    }
  };

  room.update = (c2, dt) => updateRoom1(c2, room, dt);
  room.promptOf = (c2) => {
    if (room.solved) return null;
    const k = nearestCandle(room, c2.player.position);
    if (k >= 0 && !p.lit[k]) return 'E: 燭台に火を灯す';
    return null;
  };
}

function nearestCandle(room, pos) {
  const p = room.p;
  let best = -1, bd = 1.7 * 1.7;
  for (let k = 0; k < 3; k++) {
    const dx = pos.x - (room.origin.x + p.xs[k]);
    const dz = pos.z - (room.origin.z - 5.5);
    const d = dx * dx + dz * dz;
    if (d < bd) { bd = d; best = k; }
  }
  return best;
}

function updateRoom1(ctx, room, dt) {
  const p = room.p;
  const t = ctx.time.elapsed;

  // 炎のゆらめき
  for (let k = 0; k < 3; k++) {
    if (p.flames[k].visible) {
      const s = 1 + Math.sin(t * 10.5 + k * 2.1) * 0.14;
      p.flames[k].scale.set(s, 1 + Math.sin(t * 7.7 + k) * 0.1, s);
    }
  }

  if (room.solved) return;

  // 間違い演出(赤く明滅→消灯)
  if (p.wrongT > 0) {
    p.wrongT -= dt;
    const a = clamp(p.wrongT / 0.8, 0, 1);
    for (const rm of p.runeMats) {
      rm.color.setHex(0xff5648);
      rm.opacity = 0.15 + 0.5 * a * Math.abs(Math.sin(t * 14));
    }
    if (p.wrongT <= 0) {
      for (const rm of p.runeMats) { rm.color.setHex(CYAN); rm.opacity = 0.08; }
      p.demoT = -0.8;
    }
    return;
  }

  // 手本の再生(進捗ゼロの間のみ)
  if (p.progress === 0) {
    p.demoT += dt;
    const CYC = 3 * 1.0 + 1.8;
    const dT = ((p.demoT % CYC) + CYC) % CYC;
    const idx = Math.floor(dT / 1.0);
    for (let k = 0; k < 3; k++) {
      let o = 0.08;
      if (p.demoT >= 0 && idx < 3 && p.order[idx] === k) {
        const f = dT - idx;
        o = 0.1 + 0.85 * Math.sin(clamp(f / 0.75, 0, 1) * Math.PI);
      }
      p.runeMats[k].opacity = o;
    }
  } else {
    // 進捗表示: 点火済みのルーンが灯る
    for (let k = 0; k < 3; k++) p.runeMats[k].opacity = p.lit[k] ? 0.7 : 0.08;
  }

  if (ctx.input.justPressed('KeyE')) {
    const k = nearestCandle(room, ctx.player.position);
    if (k >= 0 && !p.lit[k]) {
      if (k === p.order[p.progress]) {
        p.lit[k] = true;
        p.flames[k].visible = true;
        p.progress++;
        ctx.audio.play('torch');
        _tv.set(room.origin.x + p.xs[k], 1.9, room.origin.z - 5.5);
        ctx.effects.burst(_tv, 'fire', { count: 8 });
        if (p.progress >= 3) {
          room.solved = true;
          for (const rm of p.runeMats) { rm.opacity = 0.75; rm.color.setHex(GOLD); }
          room.doorDelay = 0.6;
          ctx.audio.play('orb');
        }
      } else {
        // 失敗: 全消灯+低い音
        for (let j = 0; j < 3; j++) { p.lit[j] = false; p.flames[j].visible = false; }
        p.progress = 0;
        p.wrongT = 0.8;
        ctx.audio.play('uiBack');
      }
    }
  }
}

// ======================================================================
// 部屋 2: 樹霊の祠 — 光の珠を動く足場で対岸へ
// ======================================================================
function buildRoom2(ctx, room) {
  const g = room.group;
  const p = room.p = {
    platX: 0,
    holding: false,
    orbHome: new THREE.Vector3(-5, 1.5, 6),       // 開始側の台座上(ローカル)
    orbGoal: new THREE.Vector3(-3.5, 1.55, -8.6), // 対岸の台座上
    prevPX: 0, prevPZ: 0, prevValid: false,
    fallCool: 0,
  };

  // 動く足場(往復)
  const plat = new THREE.Group();
  addMesh(plat, boxAt(3, 0.5, 5.4, 0, -0.25, 0), S.M.mov);
  addMesh(plat, merged([
    boxAt(0.12, 0.06, 5.4, -1.44, 0.02, 0),
    boxAt(0.12, 0.06, 5.4, 1.44, 0.02, 0),
  ]), S.M.glowAdd, false);
  plat.position.set(0, 0, -4.5);
  g.add(plat);
  p.plat = plat;

  // 台座×2
  const peds = [];
  for (const [px, pz] of [[-5, 6], [-3.5, -8.6]]) {
    peds.push(cylAt(0.4, 0.56, 1.15, 7, px, 0.58, pz));
    peds.push(cylAt(0.55, 0.42, 0.18, 7, px, 1.22, pz));
    room.colliders.push({ x: room.origin.x + px, z: room.origin.z + pz, radius: 0.62, height: 1.5 });
  }
  addMesh(g, merged(peds), S.M.floor);
  const t1 = torusFlat(0.5, 0.04, 1.32, 16);
  t1.translate(-5, 0, 6);
  const t2 = torusFlat(0.5, 0.04, 1.37, 16);
  t2.translate(-3.5, 0, -8.6);
  addMesh(g, merged([t1, t2]), S.M.glowAdd, false);

  // 光の珠
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 10), S.M.orb);
  orb.position.copy(p.orbHome);
  g.add(orb);
  p.orb = orb;

  room.ground = (wx, wz) => {
    const x = wx - room.origin.x, z = wz - room.origin.z;
    if (z < -2 && z > -7) {
      if (Math.abs(x - p.platX) < 1.55) return 0; // 足場の上
      return -6.5; // 穴(底あり)
    }
    return 0;
  };

  room.resetPuzzle = () => {
    p.holding = false;
    p.orb.position.copy(p.orbHome);
    p.fallCool = 0;
    p.prevValid = false;
  };

  room.update = (c2, dt) => updateRoom2(c2, room, dt);
  room.promptOf = (c2) => {
    if (room.solved) return null;
    const pl = c2.player.position;
    if (p.holding) {
      const dx = pl.x - (room.origin.x + p.orbGoal.x);
      const dz = pl.z - (room.origin.z + p.orbGoal.z);
      if (dx * dx + dz * dz < 2.0 * 2.0) return 'E: 珠を台座へ置く';
      return 'E: 珠を置く';
    }
    const dx = pl.x - (room.origin.x + p.orb.position.x);
    const dz = pl.z - (room.origin.z + p.orb.position.z);
    if (dx * dx + dz * dz < 1.8 * 1.8) return 'E: 光の珠を持つ';
    return null;
  };
}

function updateRoom2(ctx, room, dt) {
  const p = room.p;
  const pl = ctx.player;
  const t = ctx.time.elapsed;
  p.fallCool = Math.max(0, p.fallCool - dt);

  // 持ち運び中は移動0.8倍(前フレーム位置から補正)+ジャンプ不可
  if (p.holding && p.prevValid) {
    const dx = pl.position.x - p.prevPX, dz = pl.position.z - p.prevPZ;
    pl.position.x = p.prevPX + dx * 0.8;
    pl.position.z = p.prevPZ + dz * 0.8;
    if (pl.velocity.y > 0) {
      pl.velocity.y = 0;
      pl.position.y = ctx.getGroundHeight(pl.position.x, pl.position.z);
    }
  }

  // 足場の往復
  const prevX = p.platX;
  p.platX = Math.sin(t * (Math.PI * 2 / 7)) * 6.5;
  p.plat.position.x = p.platX;
  const pdx = p.platX - prevX;
  // 乗っていれば運ぶ
  {
    const lx = pl.position.x - room.origin.x, lz = pl.position.z - room.origin.z;
    if (pl.position.y < 0.25 && lz < -1.7 && lz > -7.3 && Math.abs(lx - prevX) < 1.95) {
      pl.position.x += pdx;
    }
  }

  // 珠の追従・待機の浮遊
  if (p.holding) {
    p.orb.position.set(
      pl.position.x - room.origin.x,
      pl.position.y + 2.2 + Math.sin(t * 3.1) * 0.09,
      pl.position.z - room.origin.z);
  }
  p.orb.rotation.y += dt * 0.8;

  // 穴に落ちたら開始側へ(珠もリセット)
  if (pl.position.y < -2.2 && p.fallCool <= 0) {
    p.fallCool = 1;
    ctx.ui.flash('#000000', 0.55);
    _tv.set(room.origin.x, 0, room.origin.z + 4);
    pl.teleport(_tv, Math.PI);
    if (p.holding || (!room.solved && p.orb.position.y < -1)) {
      p.holding = false;
      p.orb.position.copy(p.orbHome);
    }
    ctx.audio.play('roll');
    return;
  }

  if (room.solved) { p.prevValid = false; return; }

  if (ctx.input.justPressed('KeyE')) {
    if (p.holding) {
      const gx = room.origin.x + p.orbGoal.x, gz = room.origin.z + p.orbGoal.z;
      const dx = pl.position.x - gx, dz = pl.position.z - gz;
      if (dx * dx + dz * dz < 2.0 * 2.0) {
        // 対岸の台座へ → 開放
        p.holding = false;
        p.orb.position.copy(p.orbGoal);
        room.solved = true;
        room.doorDelay = 0.5;
        _tv.set(gx, 2.2, gz);
        ctx.effects.burst(_tv, 'magic');
        ctx.audio.play('orb');
      } else {
        p.holding = false;
        const lx = pl.position.x - room.origin.x, lz = pl.position.z - room.origin.z;
        const gh = room.ground(pl.position.x, pl.position.z);
        if (gh < -1) {
          p.orb.position.copy(p.orbHome); // 穴の上には置けない
        } else {
          p.orb.position.set(lx, gh + 0.42, lz);
        }
        ctx.audio.play('ui');
      }
    } else {
      const dx = pl.position.x - (room.origin.x + p.orb.position.x);
      const dz = pl.position.z - (room.origin.z + p.orb.position.z);
      if (dx * dx + dz * dz < 1.8 * 1.8) {
        p.holding = true;
        ctx.audio.play('pickup');
      }
    }
  }

  p.prevPX = pl.position.x; p.prevPZ = pl.position.z;
  p.prevValid = true;
}

// ======================================================================
// 部屋 3: 烈火の祠 — 消える足場と水晶スイッチ
// ======================================================================
function buildRoom3(ctx, room) {
  const g = room.group;
  const p = room.p = {
    tiles: [],       // {x,z,mesh,frameMat,frame,topY}
    period: 5.6, upDur: 2.8,
    bridgeUp: false, bridgeY: -2.8,
    lastSwing: -1,
    burnCool: 0,
    crystalPos: new THREE.Vector3(-6, 1.9, -14),
  };

  // 溶岩(発光床)
  p.lavaTex = canvasTexture(256, (c, s) => {
    c.fillStyle = '#802010';
    c.fillRect(0, 0, s, s);
    const rnd = (() => { let a = 12345; return () => ((a = (a * 16807) % 2147483647) / 2147483647); })();
    for (let k = 0; k < 60; k++) {
      const x = rnd() * s, y = rnd() * s, r = 8 + rnd() * 30;
      const gr = c.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,120,40,0.9)');
      gr.addColorStop(1, 'rgba(160,40,15,0)');
      c.fillStyle = gr;
      c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
    }
    c.strokeStyle = 'rgba(255,220,120,0.8)';
    c.lineWidth = 2.5;
    for (let k = 0; k < 12; k++) {
      c.beginPath();
      let x = rnd() * s, y = rnd() * s;
      c.moveTo(x, y);
      for (let j = 0; j < 5; j++) { x += (rnd() - 0.5) * 90; y += (rnd() - 0.5) * 90; c.lineTo(x, y); }
      c.stroke();
    }
  });
  p.lavaTex.wrapS = p.lavaTex.wrapT = THREE.RepeatWrapping;
  const lavaGeo = new THREE.PlaneGeometry(26, 23.4);
  lavaGeo.rotateX(-Math.PI / 2);
  lavaGeo.translate(0, -0.9, -5.5);
  p.lavaMat = new THREE.MeshBasicMaterial({ map: p.lavaTex, color: 0xffb060 });
  addMesh(g, lavaGeo, p.lavaMat, false);

  // 出現/消滅する足場
  const tileGeo = new THREE.BoxGeometry(2.2, 0.8, 2.2);
  const frameGeo = merged([
    boxAt(2.3, 0.08, 0.14, 0, 0, -1.08),
    boxAt(2.3, 0.08, 0.14, 0, 0, 1.08),
    boxAt(0.14, 0.08, 2.3, -1.08, 0, 0),
    boxAt(0.14, 0.08, 2.3, 1.08, 0, 0),
  ]);
  const tilePos = [
    [0, 4.4], [-1.9, 2.3], [-0.2, 0.2], [1.7, -1.8],
    [0.2, -3.9], [-1.6, -5.9], [-3.2, -8.1], [-4.6, -10.4],
  ];
  for (let k = 0; k < tilePos.length; k++) {
    const [tx, tz] = tilePos[k];
    const mesh = addMesh(g, tileGeo, S.M.mov);
    mesh.position.set(tx, -3.4, tz);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0xffa050, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(tx, -0.82, tz);
    g.add(frame);
    p.tiles.push({ x: tx, z: tz, mesh, frameMat, frame, topY: -3 });
  }

  // 水晶スイッチ(西の島)
  addMesh(g, merged([
    cylAt(0.42, 0.6, 1.2, 7, -6, 0.6, -14),
    cylAt(0.58, 0.44, 0.2, 7, -6, 1.3, -14),
  ]), S.M.wall);
  p.crystalMat = glowMaterial(0x8fd8ff, 1.5);
  const cryGeo = new THREE.OctahedronGeometry(0.42, 0);
  cryGeo.scale(1, 1.35, 1);
  p.crystal = new THREE.Mesh(cryGeo, p.crystalMat);
  p.crystal.position.set(-6, 1.95, -14);
  g.add(p.crystal);
  room.colliders.push({ x: room.origin.x - 6, z: room.origin.z - 14, radius: 0.66, height: 1.6 });

  // 橋(スイッチで架かる)
  const bridge = new THREE.Group();
  addMesh(bridge, boxAt(4.6, 0.5, 2.6, 0, -0.25, 0), S.M.mov);
  addMesh(bridge, merged([
    boxAt(4.6, 0.06, 0.12, 0, 0.02, -1.24),
    boxAt(4.6, 0.06, 0.12, 0, 0.02, 1.24),
  ]), S.M.glowAdd, false);
  bridge.position.set(0, p.bridgeY, -14);
  g.add(bridge);
  p.bridge = bridge;

  room.ground = (wx, wz) => {
    const x = wx - room.origin.x, z = wz - room.origin.z;
    if (z >= 6) return 0;                                   // 手前の床
    if (z >= -16 && z <= -12) {
      const ax = Math.abs(x);
      if (ax >= 2 && ax <= 10) return 0;                    // 島
      if (ax < 2 && p.bridgeUp && p.bridgeY > -0.4) return 0; // 橋
    }
    for (let k = 0; k < p.tiles.length; k++) {
      const tl = p.tiles[k];
      if (tl.topY > -0.2 && Math.abs(x - tl.x) < 1.12 && Math.abs(z - tl.z) < 1.12) return Math.max(0, tl.topY);
    }
    return -2.5; // 溶岩の中
  };

  room.resetPuzzle = () => {
    p.bridgeUp = false;
    p.bridgeY = -2.8;
    p.bridge.position.y = p.bridgeY;
    p.crystalMat.color.setHex(0x8fd8ff);
    p.crystalMat.emissive.setHex(0x8fd8ff);
    p.crystalMat.emissiveIntensity = 1.5;
    p.burnCool = 0;
    p.lastSwing = -1;
  };

  room.update = (c2, dt) => updateRoom3(c2, room, dt);
  room.promptOf = (c2) => {
    if (room.solved) return null;
    const dx = c2.player.position.x - (room.origin.x - 6);
    const dz = c2.player.position.z - (room.origin.z - 14);
    if (dx * dx + dz * dz < 2.6 * 2.6) return '剣で水晶を叩け';
    return null;
  };
}

function updateRoom3(ctx, room, dt) {
  const p = room.p;
  const pl = ctx.player;
  const t = ctx.time.elapsed;
  p.burnCool = Math.max(0, p.burnCool - dt);

  // 溶岩の脈動
  p.lavaTex.offset.x = t * 0.012;
  p.lavaTex.offset.y = t * 0.008;
  const lp = 0.85 + Math.sin(t * 1.7) * 0.15;
  p.lavaMat.color.setRGB(lp, 0.55 * lp, 0.28 * lp);

  // 足場サイクル(出現1.5秒前に予兆の明滅)
  for (let k = 0; k < p.tiles.length; k++) {
    const tl = p.tiles[k];
    const ph = ((t + k * 0.7) % p.period + p.period) % p.period;
    const up = ph < p.upDur;
    tl.topY = damp(tl.topY, up ? 0 : -3.0, 13, dt);
    tl.mesh.position.y = tl.topY - 0.4;
    const warn = !up && (p.period - ph) < 1.5;
    if (warn) {
      tl.frameMat.opacity = 0.25 + 0.55 * Math.abs(Math.sin(t * 16));
      tl.frame.position.y = -0.82;
    } else if (tl.topY > -0.3) {
      tl.frameMat.opacity = 0.35;
      tl.frame.position.y = tl.topY + 0.04;
    } else {
      tl.frameMat.opacity = 0;
    }
  }

  // 水晶の明滅・回転
  p.crystal.rotation.y += dt * 1.2;
  p.crystal.position.y = 1.95 + Math.sin(t * 2.3) * 0.08;
  if (!room.solved) p.crystalMat.emissiveIntensity = 1.3 + Math.sin(t * 4) * 0.4;

  // 橋の上昇
  if (p.bridgeUp && p.bridgeY < 0) {
    p.bridgeY = Math.min(0, p.bridgeY + dt * 3.2);
    p.bridge.position.y = p.bridgeY;
    if (p.bridgeY >= 0) {
      _tv.set(room.origin.x, 0.3, room.origin.z - 14);
      ctx.effects.burst(_tv, 'dust');
      ctx.audio.play('switch');
    }
  }

  // 溶岩に落ちた: 0.5ダメージ+開始側へ
  if (p.burnCool <= 0 && pl.position.y < -0.55 && pl.hp > 0) {
    if (room.ground(pl.position.x, pl.position.z) < -2) {
      p.burnCool = 1.2;
      _tv.set(pl.position.x, pl.position.y, pl.position.z);
      ctx.effects.burst(_tv, 'fire');
      ctx.audio.play('burn');
      pl.damage(0.5, null);
      if (pl.hp > 0) {
        _tv.set(room.origin.x, 0, room.origin.z + 8.5);
        pl.teleport(_tv, Math.PI);
      }
      return;
    }
  }

  if (room.solved) return;

  // 剣で水晶を叩く
  const hit = pl.getAttackHit();
  if (hit && hit.swingId !== p.lastSwing) {
    _tv.set(room.origin.x + p.crystalPos.x, p.crystal.position.y, room.origin.z + p.crystalPos.z);
    if (hit.pos.distanceTo(_tv) < hit.radius + 0.75) {
      p.lastSwing = hit.swingId;
      room.solved = true;
      p.bridgeUp = true;
      p.crystalMat.color.setHex(GOLD);
      p.crystalMat.emissive.setHex(GOLD);
      p.crystalMat.emissiveIntensity = 3.0;
      ctx.effects.burst(_tv, 'spark');
      ctx.audio.play('switch');
      ctx.camera3p.shake(0.3);
    }
  }
}

// ======================================================================
// update(毎フレーム)
// ======================================================================
export function update(ctx, dt) {
  if (typeof window !== 'undefined') { window.__shrDbg = (window.__shrDbg || 0) + 1; window.__shrS = S; }
  if (!S || !S.api) return;
  animateExteriors(ctx, dt);
  S.enterCool = Math.max(0, S.enterCool - dt);

  if (ctx.state === 'playing') fieldUpdate(ctx, dt);
  else if (ctx.state === 'shrine' && S.api.active >= 0) shrineUpdate(ctx, dt);
}

function setPromptOnce(ctx, text) {
  if (S.prompt !== text) {
    S.prompt = text;
    ctx.ui.setPrompt(text);
  }
}

// ---- 外観の演出 ----
function animateExteriors(ctx, dt) {
  const t = ctx.time.elapsed;
  const nightBoost = ctx.time.isNight ? 0.55 : 0;
  for (let i = 0; i < 4; i++) {
    const e = S.exts[i];
    e.runeMat.emissiveIntensity = 1.15 + nightBoost + Math.sin(t * 1.6 + i * 1.7) * 0.25;
    e.flameMat.emissiveIntensity = 1.7 + nightBoost + Math.sin(t * 9.3 + i * 2.4) * 0.28 + Math.sin(t * 23.7 + i) * 0.14;
    e.beaconMat.opacity = (ctx.time.isNight ? 0.16 : 0.05) + Math.sin(t * 1.2 + i) * 0.02;
  }
}

// ---- フィールド: 入場判定 ----
function fieldUpdate(ctx, dt) {
  const pl = ctx.player.position;
  let near = -1;
  for (let i = 0; i < 4; i++) {
    const dp = S.exts[i].doorPos;
    const dx = pl.x - dp.x, dz = pl.z - dp.z;
    if (dx * dx + dz * dz < ENTER_DIST * ENTER_DIST) { near = i; break; }
  }
  if (near >= 0) {
    setPromptOnce(ctx, 'E: 祠に入る');
    if (ctx.input.justPressed('KeyE') && S.enterCool <= 0) enterShrine(ctx, near);
  } else if (S.prompt === 'E: 祠に入る') {
    setPromptOnce(ctx, null);
  }
}

// ---- 入場 ----
function enterShrine(ctx, i) {
  const room = S.rooms[i];
  const done = S.api.list[i].completed;
  room.group.visible = true;
  if (!done) {
    room.solved = false;
    room.resetPuzzle();
    setDoorClosed(room);
    resetChest(room);
  } else {
    // クリア済み: 扉は開いたまま・宝箱は開封済み
    room.solved = true;
    if (room.door) { room.doorOpen = true; room.door.position.y = -2.75; }
    if (room.index === 3) { room.p.bridgeUp = true; room.p.bridgeY = 0; room.p.bridge.position.y = 0; }
    room.chest.opened = true;
    room.chest.lid.rotation.x = -2.05;
    room.chest.beam.visible = true;
  }
  room.doorDelay = 0;
  room.doorAnim = 0;

  ctx.ui.flash('#000000', 1);
  setPromptOnce(ctx, null);
  ctx.player.teleport(room.entranceWorld, Math.PI);
  ctx.setState('shrine');
  ctx.sky.setOverride('shrine');

  S.savedGround = ctx.getGroundHeight;
  S.savedBounds = ctx.playerBounds;
  ctx.getGroundHeight = room.ground;
  ctx.playerBounds = room.bounds;

  S.added.length = 0;
  for (const c of room.colliders) { ctx.colliders.push(c); S.added.push(c); }
  if (room.doorCol && !room.doorOpen) { ctx.colliders.push(room.doorCol); S.added.push(room.doorCol); }

  S.api.active = i;
  S.inside = true;
  S.enterCool = 0.5;
  ctx.audio.play('ui');
  ctx.emit('shrine-enter', { index: i });
}

// ---- 退場(通常) ----
function exitShrine(ctx) {
  const i = S.api.active;
  if (i < 0) return;
  const e = S.exts[i];
  restoreOutside(ctx);
  ctx.ui.flash('#000000', 1);
  ctx.player.teleport(e.exitPos, e.exitHeading);
  ctx.setState('playing');
  S.enterCool = 0.5;
  ctx.audio.play('ui');
}

// ---- 内部状態の復元(退場・死亡・タイトル共通) ----
function restoreOutside(ctx) {
  const i = S.api.active;
  if (!S.inside || i < 0) return;
  const room = S.rooms[i];
  for (const c of S.added) {
    const at = ctx.colliders.indexOf(c);
    if (at >= 0) ctx.colliders.splice(at, 1);
  }
  S.added.length = 0;
  if (S.savedGround) ctx.getGroundHeight = S.savedGround;
  ctx.playerBounds = S.savedBounds;
  S.savedGround = null;
  S.savedBounds = null;
  ctx.sky.setOverride(null);
  room.group.visible = false;
  if (room.p && room.p.grabbed) { room.p.grabbed = false; ctx.player.setFrozen(false); }
  if (S.seq) { ctx.player.setFrozen(false); S.seq = null; }
  S.api.active = -1;
  S.inside = false;
  setPromptOnce(ctx, null);
  ctx.emit('shrine-exit', { index: i });
}

// ---- 扉 ----
function setDoorClosed(room) {
  room.doorOpen = false;
  if (room.door) room.door.position.y = 2.3;
}

function openDoor(ctx, room) {
  if (room.doorOpen || !room.door) return;
  room.doorOpen = true;
  room.doorAnim = 1;
  // 扉コライダーを撤去
  const at = ctx.colliders.indexOf(room.doorCol);
  if (at >= 0) ctx.colliders.splice(at, 1);
  const at2 = S.added.indexOf(room.doorCol);
  if (at2 >= 0) S.added.splice(at2, 1);
  ctx.audio.play('switch');
  ctx.camera3p.shake(0.25);
  _tv.set(room.origin.x, 0.4, room.origin.z - 10);
  ctx.effects.burst(_tv, 'dust');
}

// ---- 祠の内部(毎フレーム) ----
function shrineUpdate(ctx, dt) {
  const room = S.rooms[S.api.active];
  const t = ctx.time.elapsed;

  // 円陣の脈動
  S.M.padAdd.opacity = 0.6 + Math.sin(t * 2.6) * 0.22;

  // 扉の開放遅延→開扉
  if (room.doorDelay > 0) {
    room.doorDelay -= dt;
    if (room.doorDelay <= 0) openDoor(ctx, room);
  }
  // 扉スライド(重い石の扉が沈む)
  if (room.door && room.doorAnim > 0) {
    room.door.position.y = Math.max(-2.75, room.door.position.y - dt * 4.2);
    if (room.door.position.y <= -2.75) room.doorAnim = 0;
  }

  // パズル本体
  room.update(ctx, dt);

  // 宝箱開封演出
  if (S.seq) {
    updateChestSeq(ctx, room, dt);
    setPromptOnce(ctx, null);
    return;
  }

  // ---- プロンプトと E 操作 ----
  const pl = ctx.player.position;
  const grabbedBusy = room.p && room.p.grabbed;

  // 退場円陣
  if (!grabbedBusy) {
    const dxp = pl.x - room.padWorld.x, dzp = pl.z - room.padWorld.z;
    if (dxp * dxp + dzp * dzp < PAD_DIST * PAD_DIST) {
      setPromptOnce(ctx, 'E: 祠を出る');
      if (ctx.input.justPressed('KeyE') && S.enterCool <= 0) exitShrine(ctx);
      return;
    }
  }

  // 宝箱
  const chest = room.chest;
  const canChest = !chest.opened &&
    (room.index === 3 ? (room.p.bridgeUp && room.p.bridgeY >= 0) : room.doorOpen);
  if (canChest && !grabbedBusy) {
    const dxc = pl.x - room.chestWorld.x, dzc = pl.z - room.chestWorld.z;
    if (dxc * dxc + dzc * dzc < 2.3 * 2.3) {
      setPromptOnce(ctx, 'E: 宝箱を開ける');
      if (ctx.input.justPressed('KeyE')) startChestSeq(ctx, room);
      return;
    }
  }

  // パズル固有プロンプト
  const pp = room.promptOf(ctx);
  if (pp) { setPromptOnce(ctx, pp); return; }

  // 開封後は円陣へ誘導
  if (chest.opened) { setPromptOnce(ctx, '入口の光る円陣から祠を出よう'); return; }

  setPromptOnce(ctx, null);
}

// ---- 宝箱開封演出 ----
function startChestSeq(ctx, room) {
  room.chest.opened = true;
  S.seq = { t: 0, granted: false, heartDue: false, burstDone: false };
  ctx.player.setFrozen(true);
  ctx.audio.play('chest');
}

function resetChest(room) {
  const c = room.chest;
  c.opened = false;
  c.lid.rotation.x = 0;
  c.orb.visible = false;
  c.orb.scale.set(1, 1, 1);
  c.orb.position.set(0, 0.5, 0);
  c.beam.visible = false;
}

function chestWorldPos(room, y) {
  return _tv2.set(room.chestWorld.x, y, room.chestWorld.z);
}

function updateChestSeq(ctx, room, dt) {
  const q = S.seq;
  const chest = room.chest;
  q.t += dt;
  const t = q.t;

  // 蓋が開く
  chest.lid.rotation.x = -2.05 * smoothstep(0, 0.55, t);

  // 光柱+きらめき
  if (t >= 0.25) {
    if (!q.burstDone) {
      q.burstDone = true;
      chest.beam.visible = true;
      ctx.effects.burst(chestWorldPos(room, 1.2), 'orb');
    }
    S.M.beamAdd.opacity = t < 2.2 ? Math.min(0.5, (t - 0.25) * 0.9) : Math.max(0.14, 0.5 - (t - 2.2) * 0.8);
  }

  // 気の珠が浮かび上がる(1.5秒)
  if (t >= 0.5) {
    chest.orb.visible = true;
    const k = clamp((t - 0.5) / 1.5, 0, 1);
    chest.orb.position.y = 0.5 + k * 1.85;
    chest.orb.rotation.y += dt * 3.2;
    const grow = Math.min(1, (t - 0.5) * 3);
    const fade = t > 2.05 ? Math.max(0, 1 - (t - 2.05) / 0.55) : 1;
    chest.orb.scale.setScalar(Math.max(0.001, grow * fade));
  }

  // 報酬付与
  if (t >= 2.0 && !q.granted) {
    q.granted = true;
    const i = room.index;
    const p = ctx.player;
    p.spiritOrbs++;
    p.heal(p.maxHp);
    S.api.list[i].completed = true;
    S.api.completedCount++;
    setShrineGold(i);
    q.heartDue = p.spiritOrbs % 2 === 0;
    ctx.audio.play('orb');
    ctx.effects.burst(chestWorldPos(room, 2.4), 'heal');
    ctx.ui.showMessage('気の珠を手に入れた', { sub: '祠の加護が勇者に宿る' });
    ctx.emit('shrine-complete', { index: i });
  }

  // 終幕
  if (t >= 2.7) {
    chest.orb.visible = false;
    if (q.heartDue) {
      ctx.player.addMaxHeart();
      ctx.ui.showMessage('命の器が満ちた', { sub: 'ハートの器がひとつ増えた' });
      ctx.audio.play('heart');
    }
    ctx.player.setFrozen(false);
    S.seq = null;
  }
}
