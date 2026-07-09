// combat.js — 敵・AI・戦闘システム
// 契約: ARCHITECTURE.md — ctx.combat = { enemies, nearestTargetable, registerEnemy, damageEnemy }
// 敵3種(全てプロシージャル): ゴブリン(野営地) / ボーンソルジャー(夜の平原) / 魔導ウィスプ(遺跡・火山)
import * as THREE from 'three';
import {
  toonMaterial, glowMaterial, clamp, lerp, smoothstep, damp, dampAngle,
  canvasTexture, part, mulberry32, TMP,
} from './util.js';

const rand = mulberry32(0xBA7712);

// ================= 調整定数 =================
const NORTH_Z = -558;           // 城門より北へは入らない
const FAR_DIST = 120;           // これより遠い敵は間引き更新
const FAR_TICK = 2;             // 間引き間隔(秒)
const HIDE_DIST = 140;          // 描画カリング距離
const CAMP_RESPAWN = 90;        // 野営地の再湧き(秒)
const CAMP_RESPAWN_MIN_D = 50;  // 再湧きに必要なプレイヤー距離
const DROP_LIFE = 30;           // ドロップ自然消滅(秒)

const GOB = { hp: 2, radius: 0.7, walk: 1.15, run: 4.2, notice: 18, range: 2.0, reach: 2.7, dmg: 0.5, height: 1.25, hitY: 0.7 };
const SKL = { hp: 4, radius: 0.65, speed: 4.2 * 1.3, range: 2.0, reach: 2.8, dmg: 0.5, height: 1.8, hitY: 1.0, max: 6 };
const WSP = { hp: 2, radius: 0.6, near: 8, far: 20, fireCd: 2.5, dmg: 0.5, height: 0.6, hitY: 0 };

// ================= モジュール状態 =================
let ctxRef = null;
let combatGroup = null;
const enemies = [];      // 契約: ctx.combat.enemies(ボス登録含む)
const camps = [];
const wispSpots = [];
const skeletons = [];
const drops = [];
const fireballs = [];
const dmgPool = [];
const alertPool = [];
const sepList = [];      // 分離処理の一時リスト(再利用)
let trail = null;
let prevNight = false;
let skelSpawnT = 0;
let campTick = 0;
let G = null;            // 共有ジオメトリ
let M = null;            // 共有マテリアル

const _v1 = new THREE.Vector3();

// ================= 小ヘルパー =================
function sfx(name, opts) { try { ctxRef.audio && ctxRef.audio.play(name, opts); } catch (e) { /* noop */ } }
function burst(pos, preset, opts) { try { ctxRef.effects && ctxRef.effects.burst(pos, preset, opts); } catch (e) { /* noop */ } }
function posOf(e) { return e.pos || (e.root && e.root.position) || null; }

// 敵が立ち入れる座標か(深い水・城門より北を禁止)
function validPos(ctx, x, z) {
  if (z < NORTH_Z) return false;
  const wl = ctx.world ? ctx.world.waterLevel : -9999;
  return ctx.getGroundHeight(x, z) > wl - 0.5;
}

// 中心付近で立てる場所を探す(なければ中心をそのまま返す)
function findDryPos(ctx, x, z, maxR = 8) {
  if (validPos(ctx, x, z)) return { x, z };
  for (let i = 0; i < 12; i++) {
    const a = rand() * Math.PI * 2;
    const r = 2 + rand() * maxR;
    const nx = x + Math.sin(a) * r, nz = z + Math.cos(a) * r;
    if (validPos(ctx, nx, nz)) return { x: nx, z: nz };
  }
  return { x, z };
}

// ================= 共有アセット =================
function buildShared() {
  G = {
    sphere: new THREE.SphereGeometry(1, 10, 8),
    cone: new THREE.ConeGeometry(1, 1, 6),
    cone4: new THREE.ConeGeometry(1, 1, 4),
    limb: new THREE.CylinderGeometry(1, 0.82, 2, 7),
    box: new THREE.BoxGeometry(1, 1, 1),
    skirt: new THREE.CylinderGeometry(0.26, 0.37, 0.26, 9, 1, true),
    rib: new THREE.TorusGeometry(0.17, 0.028, 5, 10),
    rock: new THREE.DodecahedronGeometry(1, 0),
    gem: new THREE.OctahedronGeometry(0.16, 0),
  };
  G.gem.scale(1, 1.45, 1);
  // テント(三角プリズム: 底面が地面に付くよう回転を焼き込み)
  G.tent = new THREE.CylinderGeometry(0.95, 0.95, 1.7, 3, 1, false, Math.PI / 2);
  G.tent.rotateZ(Math.PI / 2);
  G.tent.translate(0, 0.48, 0);
  // ハート形
  const hs = new THREE.Shape();
  hs.moveTo(2.5, 2.5);
  hs.bezierCurveTo(2.5, 2.5, 2.0, 0, 0, 0);
  hs.bezierCurveTo(-3.0, 0, -3.0, 3.5, -3.0, 3.5);
  hs.bezierCurveTo(-3.0, 5.5, -1.0, 7.7, 2.5, 9.5);
  hs.bezierCurveTo(6.0, 7.7, 8.0, 5.5, 8.0, 3.5);
  hs.bezierCurveTo(8.0, 3.5, 8.0, 0, 5.0, 0);
  hs.bezierCurveTo(3.5, 0, 2.5, 2.5, 2.5, 2.5);
  G.heart = new THREE.ExtrudeGeometry(hs, { depth: 2.2, bevelEnabled: true, bevelThickness: 0.8, bevelSize: 0.8, bevelSegments: 1, steps: 1 });
  G.heart.center();
  G.heart.rotateZ(Math.PI);
  G.heart.scale(0.035, 0.035, 0.035);

  M = {
    gobSkin: toonMaterial(0x9d5233),
    gobDark: toonMaterial(0x7c3f28),
    cloth: toonMaterial(0xb59a54, { side: THREE.DoubleSide }),
    wood: toonMaterial(0x775230),
    eyeY: glowMaterial(0xffd23e, 1.6),
    bone: toonMaterial(0xe8e2d0),
    blade: toonMaterial(0xb9c3cf),
    grip: toonMaterial(0x4e3b28),
    eyeR: glowMaterial(0xff3b30, 1.8),
    wispCore: glowMaterial(0xd18bff, 2.1),
    wispMid: glowMaterial(0x9a4de0, 1.1, { transparent: true, opacity: 0.45, depthWrite: false }),
    wispShell: glowMaterial(0x7a35c0, 0.7, { transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending }),
    stone: toonMaterial(0x8a8577),
    flameO: glowMaterial(0xff8a2a, 1.7),
    flameI: glowMaterial(0xffd76a, 2.2),
    tent: toonMaterial(0x8a6242),
    heart: glowMaterial(0xff4d6d, 1.1),
    gem: glowMaterial(0x4dff88, 1.4),
    fireball: glowMaterial(0xd06bff, 2.4),
    fireHalo: glowMaterial(0xb26bff, 1.2, { transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }),
    flash: new THREE.MeshBasicMaterial({ color: 0xffffff }),
  };
}

// 被弾フラッシュ用: メッシュと元マテリアルの一覧を収集
function collectFlash(root) {
  const list = [];
  root.traverse((o) => { if (o.isMesh) list.push({ m: o, mat: o.material }); });
  return list;
}

// ================= 敵モデル(プロシージャル) =================
function buildGoblin() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 0.5;
  root.add(body);

  const torso = part(G.sphere, M.gobSkin, 0, 0.16, 0, body);
  torso.scale.set(0.30, 0.35, 0.27);
  const belly = part(G.sphere, M.gobDark, 0, 0.10, 0.10, body);
  belly.scale.set(0.20, 0.22, 0.17);
  const cloth = part(G.skirt, M.cloth, 0, -0.02, 0, body);

  const head = new THREE.Group();
  head.position.set(0, 0.52, 0.02);
  body.add(head);
  const skull = part(G.sphere, M.gobSkin, 0, 0, 0, head);
  skull.scale.set(0.26, 0.24, 0.25);
  const earL = part(G.cone4, M.gobSkin, -0.26, 0.08, -0.02, head);
  earL.scale.set(0.09, 0.34, 0.045);
  earL.rotation.z = 1.25; earL.rotation.y = -0.25;
  const earR = part(G.cone4, M.gobSkin, 0.26, 0.08, -0.02, head);
  earR.scale.set(0.09, 0.34, 0.045);
  earR.rotation.z = -1.25; earR.rotation.y = 0.25;
  const nose = part(G.cone, M.gobDark, 0, -0.03, 0.27, head);
  nose.scale.set(0.05, 0.16, 0.05);
  nose.rotation.x = Math.PI / 2;
  const eyeL = part(G.sphere, M.eyeY, -0.10, 0.04, 0.21, head);
  eyeL.scale.setScalar(0.045);
  const eyeR = part(G.sphere, M.eyeY, 0.10, 0.04, 0.21, head);
  eyeR.scale.setScalar(0.045);

  const armL = new THREE.Group(); armL.position.set(-0.31, 0.34, 0); body.add(armL);
  const armLm = part(G.limb, M.gobSkin, 0, -0.16, 0, armL); armLm.scale.set(0.065, 0.18, 0.065);
  part(G.sphere, M.gobDark, 0, -0.36, 0, armL).scale.setScalar(0.08);

  const armR = new THREE.Group(); armR.position.set(0.31, 0.34, 0); body.add(armR);
  const armRm = part(G.limb, M.gobSkin, 0, -0.16, 0, armR); armRm.scale.set(0.065, 0.18, 0.065);
  part(G.sphere, M.gobDark, 0, -0.36, 0, armR).scale.setScalar(0.08);
  const club = new THREE.Group(); club.position.set(0, -0.36, 0.02); armR.add(club);
  const shaft = part(G.limb, M.wood, 0, 0, 0.22, club);
  shaft.scale.set(0.035, 0.24, 0.035);
  shaft.rotation.x = Math.PI / 2;
  const clubHead = part(G.sphere, M.wood, 0, 0, 0.46, club);
  clubHead.scale.set(0.09, 0.09, 0.13);

  const legL = new THREE.Group(); legL.position.set(-0.12, 0.34, 0); root.add(legL);
  const legLm = part(G.limb, M.gobSkin, 0, -0.12, 0, legL); legLm.scale.set(0.07, 0.14, 0.07);
  part(G.sphere, M.gobDark, 0, -0.28, 0.04, legL).scale.set(0.085, 0.055, 0.115);
  const legR = new THREE.Group(); legR.position.set(0.12, 0.34, 0); root.add(legR);
  const legRm = part(G.limb, M.gobSkin, 0, -0.12, 0, legR); legRm.scale.set(0.07, 0.14, 0.07);
  part(G.sphere, M.gobDark, 0, -0.28, 0.04, legR).scale.set(0.085, 0.055, 0.115);

  return { root, p: { body, head, earL, earR, armL, armR, legL, legR, club }, flash: collectFlash(root) };
}

function buildSkeleton() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 0.98;
  root.add(body);

  const pelvis = part(G.box, M.bone, 0, 0, 0, body); pelvis.scale.set(0.26, 0.12, 0.16);
  const spine = part(G.limb, M.bone, 0, 0.2, 0, body); spine.scale.set(0.03, 0.17, 0.03);
  for (let i = 0; i < 3; i++) {
    const rib = part(G.rib, M.bone, 0, 0.26 + i * 0.10, 0, body);
    rib.rotation.x = Math.PI / 2;
    const s = 1 - i * 0.1;
    rib.scale.set(s, s * 0.78, 0.78);
  }
  const clav = part(G.limb, M.bone, 0, 0.55, 0, body);
  clav.scale.set(0.022, 0.19, 0.022);
  clav.rotation.z = Math.PI / 2;

  const head = new THREE.Group(); head.position.set(0, 0.72, 0); body.add(head);
  const skull = part(G.sphere, M.bone, 0, 0, 0, head); skull.scale.set(0.145, 0.155, 0.15);
  const jaw = part(G.box, M.bone, 0, -0.13, 0.02, head); jaw.scale.set(0.13, 0.055, 0.11);
  part(G.sphere, M.eyeR, -0.055, 0.01, 0.125, head).scale.setScalar(0.032);
  part(G.sphere, M.eyeR, 0.055, 0.01, 0.125, head).scale.setScalar(0.032);

  const armL = new THREE.Group(); armL.position.set(-0.24, 0.55, 0); body.add(armL);
  part(G.limb, M.bone, 0, -0.27, 0, armL).scale.set(0.028, 0.26, 0.028);
  part(G.sphere, M.bone, 0, -0.27, 0, armL).scale.setScalar(0.042);
  part(G.sphere, M.bone, 0, -0.55, 0, armL).scale.setScalar(0.05);

  const armR = new THREE.Group(); armR.position.set(0.24, 0.55, 0); body.add(armR);
  part(G.limb, M.bone, 0, -0.27, 0, armR).scale.set(0.028, 0.26, 0.028);
  part(G.sphere, M.bone, 0, -0.27, 0, armR).scale.setScalar(0.042);
  part(G.sphere, M.bone, 0, -0.55, 0, armR).scale.setScalar(0.05);
  const sword = new THREE.Group(); sword.position.set(0, -0.56, 0.02); armR.add(sword);
  const grip = part(G.limb, M.grip, 0, 0, 0.02, sword);
  grip.scale.set(0.018, 0.07, 0.018); grip.rotation.x = Math.PI / 2;
  part(G.box, M.grip, 0, 0, 0.12, sword).scale.set(0.15, 0.035, 0.035);
  part(G.box, M.blade, 0, 0, 0.45, sword).scale.set(0.07, 0.018, 0.62);
  const tip = part(G.cone4, M.blade, 0, 0, 0.8, sword);
  tip.scale.set(0.035, 0.07, 0.009); tip.rotation.x = Math.PI / 2;

  const legL = new THREE.Group(); legL.position.set(-0.1, 0.86, 0); root.add(legL);
  part(G.limb, M.bone, 0, -0.42, 0, legL).scale.set(0.03, 0.4, 0.03);
  part(G.sphere, M.bone, 0, -0.42, 0, legL).scale.setScalar(0.042);
  part(G.box, M.bone, 0, -0.84, 0.03, legL).scale.set(0.07, 0.035, 0.15);
  const legR = new THREE.Group(); legR.position.set(0.1, 0.86, 0); root.add(legR);
  part(G.limb, M.bone, 0, -0.42, 0, legR).scale.set(0.03, 0.4, 0.03);
  part(G.sphere, M.bone, 0, -0.42, 0, legR).scale.setScalar(0.042);
  part(G.box, M.bone, 0, -0.84, 0.03, legR).scale.set(0.07, 0.035, 0.15);

  return { root, p: { body, head, armL, armR, legL, legR, sword }, flash: collectFlash(root) };
}

function buildWisp() {
  const root = new THREE.Group();
  const coreG = new THREE.Group();
  root.add(coreG);
  const core = new THREE.Mesh(G.sphere, M.wispCore); core.scale.setScalar(0.19); coreG.add(core);
  const mid = new THREE.Mesh(G.sphere, M.wispMid); mid.scale.setScalar(0.27); coreG.add(mid);
  const shell = new THREE.Mesh(G.sphere, M.wispShell); shell.scale.setScalar(0.4); coreG.add(shell);
  const orbit = new THREE.Group(); orbit.rotation.x = 0.6; root.add(orbit);
  const s1 = new THREE.Mesh(G.sphere, M.wispCore); s1.scale.setScalar(0.045); s1.position.set(0.5, 0, 0); orbit.add(s1);
  const s2 = new THREE.Mesh(G.sphere, M.wispCore); s2.scale.setScalar(0.035); s2.position.set(-0.48, 0.06, 0); orbit.add(s2);
  root.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  return { root, p: { coreG, shell, orbit }, flash: collectFlash(root) };
}

// ================= 野営地の小物(焚き火・テント・木箱) =================
function buildCampProps(ctx, center) {
  const g = new THREE.Group();
  g.position.copy(center);
  const baseY = center.y;
  // 石囲い
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + rand() * 0.3;
    const st = part(G.rock, M.stone, Math.sin(a) * 0.55, 0.07, Math.cos(a) * 0.55, g);
    st.scale.setScalar(0.11 + rand() * 0.06);
    st.rotation.set(rand() * 3, rand() * 3, rand() * 3);
  }
  // 薪(三脚状)
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    const log = part(G.limb, M.wood, Math.sin(a) * 0.16, 0.22, Math.cos(a) * 0.16, g);
    log.scale.set(0.045, 0.26, 0.045);
    log.rotation.x = Math.cos(a) * 0.65;
    log.rotation.z = -Math.sin(a) * 0.65;
  }
  // 炎(揺らめきは update で)
  const flameO = part(G.cone, M.flameO, 0, 0.42, 0, g); flameO.scale.set(0.2, 0.45, 0.2); flameO.castShadow = false;
  const flameI = part(G.cone, M.flameI, 0, 0.38, 0, g); flameI.scale.set(0.11, 0.3, 0.11); flameI.castShadow = false;
  // テント
  const ta = rand() * Math.PI * 2;
  const tent = part(G.tent, M.tent, Math.sin(ta) * 2.6, 0, Math.cos(ta) * 2.6, g);
  tent.rotation.y = ta + Math.PI / 2 + (rand() - 0.5);
  tent.position.y = ctx.getGroundHeight(center.x + tent.position.x, center.z + tent.position.z) - baseY;
  // 木箱
  const ba = ta + 2 + rand();
  const box = part(G.box, M.wood, Math.sin(ba) * 1.9, 0.19, Math.cos(ba) * 1.9, g);
  box.scale.setScalar(0.38);
  box.rotation.y = rand() * 1.5;
  box.position.y = ctx.getGroundHeight(center.x + box.position.x, center.z + box.position.z) - baseY + 0.19;
  return { group: g, flameO, flameI };
}

// ================= 敵の生成 =================
function baseEnemy(build, def, name, type) {
  const e = {
    root: build.root,
    pos: build.root.position,
    hp: def.hp, maxHp: def.hp,
    alive: true,
    radius: def.radius,
    name,
    isBoss: false,
    damage(dmg, fromPos) { damageEnemyImpl(this, dmg, fromPos); },
    // 内部
    _own: true, _gone: false,
    type, p: build.p, flash: build.flash,
    state: 'patrol', t: 0, animT: rand() * 6, phase: rand() * Math.PI * 2,
    yaw: rand() * Math.PI * 2,
    kb: new THREE.Vector3(),
    home: new THREE.Vector3(),
    staggerT: 0, flashT: 0, farAcc: 0, colT: 0, colCache: [],
    restT: 0, hasTarget: false, tx: 0, tz: 0, yOff: 0,
    height: def.height, hitY: def.hitY,
    hitDone: false, distP: 999,
    camp: null, spot: null, hoverY: 0, fireT: rand() * 1.5, dustT: 0,
    _lastSwingId: -1,
  };
  e.root.rotation.y = e.yaw;
  return e;
}

function spawnGoblin(ctx, x, z, camp) {
  const e = baseEnemy(buildGoblin(), GOB, 'ゴブリン', 'goblin');
  e.pos.set(x, ctx.getGroundHeight(x, z), z);
  e.home.copy(e.pos);
  e.camp = camp;
  e.restT = rand() * 2;
  camp.members.push(e);
  enemies.push(e);
  combatGroup.add(e.root);
  return e;
}

function spawnCampGoblins(ctx, camp) {
  camp.clearedAt = -1;
  const n = 2 + Math.floor(rand() * 3); // 2〜4体
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rand();
    const r = 1.8 + rand() * 1.8;
    const p = findDryPos(ctx, camp.center.x + Math.sin(a) * r, camp.center.z + Math.cos(a) * r, 5);
    spawnGoblin(ctx, p.x, p.z, camp);
  }
}

function spawnSkeleton(ctx, x, z) {
  const e = baseEnemy(buildSkeleton(), SKL, 'ボーンソルジャー', 'skeleton');
  e.pos.set(x, ctx.getGroundHeight(x, z), z);
  e.home.copy(e.pos);
  e.state = 'rise';
  e.yOff = -1.7;
  e.dustT = 0;
  skeletons.push(e);
  enemies.push(e);
  combatGroup.add(e.root);
  burst(e.pos.clone(), 'dust', { count: 14 });
  return e;
}

function spawnWisp(ctx, spot) {
  const e = baseEnemy(buildWisp(), WSP, '魔導ウィスプ', 'wisp');
  const g = ctx.getGroundHeight(spot.pos.x, spot.pos.z);
  e.pos.set(spot.pos.x, g + 1.5, spot.pos.z);
  e.home.copy(spot.pos);
  e.hoverY = g + 1.5;
  e.state = 'hover';
  e.spot = spot;
  spot.enemy = e;
  enemies.push(e);
  combatGroup.add(e.root);
  return e;
}

// ================= 被弾・撃破 =================
function startFlash(e) {
  if (e.flashT <= 0) {
    for (const f of e.flash) f.m.material = M.flash;
  }
  e.flashT = 0.08;
}
function restoreFlash(e) {
  for (const f of e.flash) f.m.material = f.mat;
}

function damageEnemyImpl(e, dmg, fromPos) {
  const ctx = ctxRef;
  if (!ctx || !e || e._gone || !e.alive) return;

  // 登録敵(ボス等)は本体の damage に委譲(再入ガード付き)
  if (!e._own) {
    const reentrant = !!e._dmgLock;
    if (reentrant) {
      e.hp = Math.max(0, (e.hp ?? 1) - dmg);
      if (e.hp <= 0) e.alive = false;
    } else if (typeof e.damage === 'function') {
      e._dmgLock = true;
      try { e.damage(dmg, fromPos); } catch (err) { /* noop */ }
      e._dmgLock = false;
    } else {
      e.hp = Math.max(0, (e.hp ?? 1) - dmg);
      if (e.hp <= 0) e.alive = false;
    }
    if (!reentrant) {
      const p = posOf(e);
      if (p) {
        spawnDmgNumber(p.x, p.y + 2.2, p.z, dmg);
        _v1.set(p.x, p.y + 1.5, p.z);
        burst(_v1.clone(), 'hit');
      }
      sfx('hit');
      const killed = !e.alive || e.hp <= 0;
      ctx.emit('enemy-hit', { enemy: e, pos: p ? p.clone() : null, damage: dmg, killed });
      if (killed && !e._killEmitted) {
        e._killEmitted = true;
        ctx.emit('enemy-killed', { enemy: e, pos: p ? p.clone() : null });
      }
    }
    return;
  }

  // --- 自前の敵 ---
  e.hp = Math.max(0, e.hp - dmg);
  startFlash(e);
  if (fromPos) {
    const dx = e.pos.x - fromPos.x, dz = e.pos.z - fromPos.z;
    const d = Math.hypot(dx, dz) || 1;
    const kb = e.type === 'wisp' ? 3.2 : 5.0;
    e.kb.x += (dx / d) * kb;
    e.kb.z += (dz / d) * kb;
  }
  e.staggerT = 0.35;
  spawnDmgNumber(e.pos.x, e.root.position.y + e.height + 0.35, e.pos.z, dmg);
  _v1.set(e.pos.x, e.root.position.y + e.hitY + 0.3, e.pos.z);
  burst(_v1.clone(), 'hit');
  sfx('hit');

  const killed = e.hp <= 0;
  ctx.emit('enemy-hit', { enemy: e, pos: e.pos.clone(), damage: dmg, killed });
  if (killed) {
    e.alive = false;
    e.state = 'dying';
    e.t = 0;
    ctx.emit('enemy-killed', { enemy: e, pos: e.pos.clone() });
  } else if (e.state !== 'rise' && e.state !== 'dying' && e.state !== 'crumble') {
    if (e.type !== 'wisp') { e.state = 'stunned'; e.t = 0; }
  }
}

function finalizeDeath(ctx, e, withDrops, withSfx) {
  _v1.set(e.pos.x, e.root.position.y + 0.5, e.pos.z);
  burst(_v1.clone(), 'death');
  if (withSfx) sfx('kill');
  if (withDrops) spawnDrops(ctx, e.pos.x, e.root.position.y, e.pos.z);
  if (e.flashT > 0) restoreFlash(e);
  combatGroup.remove(e.root);
  e._gone = true;
  e.alive = false;
  if (e.camp) {
    const i = e.camp.members.indexOf(e);
    if (i >= 0) e.camp.members.splice(i, 1);
    if (e.camp.members.length === 0) e.camp.clearedAt = ctx.time.elapsed;
  }
  if (e.spot) { e.spot.enemy = null; e.spot.deadAt = ctx.time.elapsed; }
  if (e.type === 'skeleton') {
    const i = skeletons.indexOf(e);
    if (i >= 0) skeletons.splice(i, 1);
  }
}

// ================= ダメージ数字(CanvasTextureスプライト) =================
function buildDmgPool() {
  for (let i = 0; i < 12; i++) {
    const c = document.createElement('canvas');
    c.width = 128; c.height = 80;
    const g = c.getContext('2d');
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
    const sp = new THREE.Sprite(mat);
    sp.scale.set(0.9, 0.56, 1);
    sp.visible = false;
    sp.renderOrder = 60;
    combatGroup.add(sp);
    dmgPool.push({ sp, g, tex, mat, t: 99, active: false, last: '' });
  }
}

function spawnDmgNumber(x, y, z, dmg) {
  let item = null, oldest = null, ot = -1;
  for (const d of dmgPool) {
    if (!d.active) { item = d; break; }
    if (d.t > ot) { ot = d.t; oldest = d; }
  }
  item = item || oldest;
  if (!item) return;
  const text = (dmg % 1 === 0) ? String(dmg) : dmg.toFixed(1);
  if (item.last !== text) {
    const g = item.g;
    g.clearRect(0, 0, 128, 80);
    g.font = '700 46px Georgia, "Times New Roman", serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 7; g.strokeStyle = 'rgba(30,24,18,0.7)';
    g.strokeText(text, 64, 42);
    g.fillStyle = '#ffffff';
    g.fillText(text, 64, 42);
    item.tex.needsUpdate = true;
    item.last = text;
  }
  item.active = true;
  item.t = 0;
  item.sp.visible = true;
  item.mat.opacity = 1;
  item.sp.position.set(x + (rand() - 0.5) * 0.4, y, z + (rand() - 0.5) * 0.4);
}

function updateDmgNumbers(dt) {
  for (const d of dmgPool) {
    if (!d.active) continue;
    d.t += dt;
    d.sp.position.y += dt * 1.1 * Math.max(0.15, 1 - d.t);
    const pop = 1 + 0.35 * Math.exp(-d.t * 9);
    d.sp.scale.set(0.9 * pop, 0.56 * pop, 1);
    d.mat.opacity = d.t < 0.35 ? 1 : clamp(1 - (d.t - 0.35) / 0.5, 0, 1);
    if (d.t >= 0.9) { d.active = false; d.sp.visible = false; }
  }
}

// ================= 「!」気づきスプライト =================
let alertMat = null;
function buildAlertPool() {
  const tex = canvasTexture(128, (g) => {
    g.font = '900 104px Georgia, serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.lineWidth = 18; g.strokeStyle = 'rgba(150,30,24,0.95)';
    g.strokeText('!', 64, 66);
    g.fillStyle = '#fff8ee';
    g.fillText('!', 64, 66);
  });
  alertMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
  for (let i = 0; i < 6; i++) {
    const sp = new THREE.Sprite(alertMat);
    sp.visible = false;
    sp.renderOrder = 61;
    combatGroup.add(sp);
    alertPool.push({ sp, e: null, t: 0, active: false });
  }
}

function showAlert(e) {
  let a = alertPool.find((x) => !x.active) || alertPool[0];
  a.active = true; a.t = 0; a.e = e;
  a.sp.visible = true;
  a.sp.position.set(e.pos.x, e.root.position.y + e.height + 0.6, e.pos.z);
}

function updateAlerts(dt) {
  for (const a of alertPool) {
    if (!a.active) continue;
    a.t += dt;
    if (a.t > 0.5 || !a.e || a.e._gone) {
      a.active = false; a.sp.visible = false; a.e = null;
      continue;
    }
    a.sp.position.set(a.e.pos.x, a.e.root.position.y + a.e.height + 0.6 + a.t * 0.25, a.e.pos.z);
    const k = smoothstep(0, 0.1, a.t);
    const s = 0.72 * k * (1 + 0.3 * Math.exp(-a.t * 12));
    a.sp.scale.set(s, s, 1);
  }
}

// ================= 火球の尾(共有Points) =================
const TRAIL_N = 240;
function buildTrail() {
  const pos = new Float32Array(TRAIL_N * 3);
  const col = new Float32Array(TRAIL_N * 3);
  const base = new Float32Array(TRAIL_N * 3);
  const life = new Float32Array(TRAIL_N);
  const max = new Float32Array(TRAIL_N);
  for (let i = 0; i < TRAIL_N; i++) pos[i * 3 + 1] = -9999;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
  const dotTex = canvasTexture(64, (g, s) => {
    const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.55)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, s, s);
  });
  const mat = new THREE.PointsMaterial({
    size: 0.5, map: dotTex, vertexColors: true, transparent: true, opacity: 0.9,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.renderOrder = 20;
  combatGroup.add(points);
  trail = { geo, pos, col, base, life, max, head: 0 };
}

function trailEmit(x, y, z, r, g, b, lifeSec) {
  const i = trail.head % TRAIL_N;
  trail.head++;
  trail.pos[i * 3] = x + (rand() - 0.5) * 0.12;
  trail.pos[i * 3 + 1] = y + (rand() - 0.5) * 0.12;
  trail.pos[i * 3 + 2] = z + (rand() - 0.5) * 0.12;
  trail.base[i * 3] = r; trail.base[i * 3 + 1] = g; trail.base[i * 3 + 2] = b;
  trail.life[i] = lifeSec;
  trail.max[i] = lifeSec;
}

function updateTrail(dt) {
  let any = false;
  for (let i = 0; i < TRAIL_N; i++) {
    if (trail.life[i] <= 0) continue;
    any = true;
    trail.life[i] -= dt;
    const k = Math.max(0, trail.life[i] / trail.max[i]);
    trail.col[i * 3] = trail.base[i * 3] * k;
    trail.col[i * 3 + 1] = trail.base[i * 3 + 1] * k;
    trail.col[i * 3 + 2] = trail.base[i * 3 + 2] * k;
    if (trail.life[i] <= 0) trail.pos[i * 3 + 1] = -9999;
  }
  if (any) {
    trail.geo.attributes.position.needsUpdate = true;
    trail.geo.attributes.color.needsUpdate = true;
  }
}

// ================= 火球 =================
function buildFireballs() {
  for (let i = 0; i < 10; i++) {
    const g = new THREE.Group();
    const core = new THREE.Mesh(G.sphere, M.fireball); core.scale.setScalar(0.16); core.castShadow = false; g.add(core);
    const halo = new THREE.Mesh(G.sphere, M.fireHalo); halo.scale.setScalar(0.3); halo.castShadow = false; g.add(halo);
    g.visible = false;
    combatGroup.add(g);
    fireballs.push({ g, core, halo, active: false, vel: new THREE.Vector3(), life: 0, emitT: 0 });
  }
}

function spawnFireball(ctx, e) {
  let fb = fireballs.find((f) => !f.active);
  if (!fb) return;
  fb.active = true;
  fb.life = 0;
  fb.emitT = 0;
  fb.g.visible = true;
  fb.g.position.set(e.pos.x, e.root.position.y + 0.1, e.pos.z);
  const pp = ctx.player.position;
  _v1.set(pp.x - fb.g.position.x, pp.y + 1.0 - fb.g.position.y, pp.z - fb.g.position.z).normalize();
  fb.vel.copy(_v1).multiplyScalar(11);
  sfx('magic');
  burst(fb.g.position.clone(), 'magic', { count: 6 });
}

function killFireball(fb, preset) {
  if (preset) burst(fb.g.position.clone(), preset);
  fb.active = false;
  fb.g.visible = false;
}

function updateFireballs(ctx, dt) {
  const pp = ctx.player.position;
  for (const fb of fireballs) {
    if (!fb.active) continue;
    fb.life += dt;
    fb.g.position.addScaledVector(fb.vel, dt);
    const p = fb.g.position;
    const k = 1 + Math.sin(ctx.time.elapsed * 22 + fb.life * 7) * 0.15;
    fb.core.scale.setScalar(0.16 * k);
    fb.halo.scale.setScalar(0.3 * (2 - k));
    fb.emitT -= dt;
    while (fb.emitT <= 0) {
      fb.emitT += 0.03;
      trailEmit(p.x, p.y, p.z, 0.85, 0.5, 1.0, 0.45);
    }
    // プレイヤー命中
    const dx = pp.x - p.x, dy = pp.y + 1.0 - p.y, dz = pp.z - p.z;
    if (dx * dx + dy * dy + dz * dz < 1.2 * 1.2) {
      try { ctx.player.damage(WSP.dmg, p); } catch (err) { /* noop */ }
      sfx('burn');
      killFireball(fb, 'fire');
      continue;
    }
    // 地形接触
    if (p.y <= ctx.getGroundHeight(p.x, p.z) + 0.15) { killFireball(fb, 'fire'); continue; }
    if (fb.life > 6) killFireball(fb, 'magic');
  }
}

// ================= ドロップ(ハート / 緑石) =================
function spawnDrops(ctx, x, y, z) {
  if (rand() < 0.4) {
    spawnDrop(ctx, 'heart', x, y, z);
  } else {
    const n = 1 + Math.floor(rand() * 3);
    for (let i = 0; i < n; i++) spawnDrop(ctx, 'gem', x, y, z);
  }
}

function spawnDrop(ctx, kind, x, y, z) {
  if (drops.length > 36) {
    const old = drops.shift();
    combatGroup.remove(old.mesh);
  }
  const mesh = new THREE.Mesh(kind === 'heart' ? G.heart : G.gem, kind === 'heart' ? M.heart : M.gem);
  mesh.castShadow = true;
  mesh.position.set(x, y + 0.7, z);
  combatGroup.add(mesh);
  drops.push({
    kind, mesh,
    vel: new THREE.Vector3((rand() - 0.5) * 2.6, 3.2 + rand() * 1.6, (rand() - 0.5) * 2.6),
    age: 0, grounded: false, baseY: 0, phase: rand() * Math.PI * 2, dieK: 0,
  });
}

function updateDrops(ctx, dt) {
  const pp = ctx.player.position;
  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i];
    const m = d.mesh;
    d.age += dt;

    if (d.age > DROP_LIFE) {
      d.dieK += dt / 0.4;
      const s = Math.max(0.001, 1 - d.dieK);
      m.scale.setScalar(s);
      if (d.dieK >= 1) { combatGroup.remove(m); drops.splice(i, 1); }
      continue;
    }
    // 消滅前は点滅
    m.visible = d.age < DROP_LIFE - 4 || Math.sin(ctx.time.elapsed * 16) > -0.2;

    if (!d.grounded) {
      d.vel.y -= 12 * dt;
      m.position.addScaledVector(d.vel, dt);
      const g = ctx.getGroundHeight(m.position.x, m.position.z) + 0.25;
      if (m.position.y <= g && d.vel.y < 0) { d.grounded = true; d.baseY = g; }
    } else {
      d.baseY = ctx.getGroundHeight(m.position.x, m.position.z) + 0.25;
      m.position.y = d.baseY + 0.1 + Math.sin(ctx.time.elapsed * 3 + d.phase) * 0.08;
      m.rotation.y += dt * 2.4;
    }

    const dx = pp.x - m.position.x, dz = pp.z - m.position.z;
    const dy = pp.y + 0.8 - m.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

    if (d.kind === 'gem') {
      if (dist < 2.5 && dist > 0.001) {
        const sp = (6.5 * (1 - dist / 2.8) + 2.5) * dt / dist;
        m.position.x += dx * sp;
        m.position.y += dy * sp;
        m.position.z += dz * sp;
      }
      if (dist < 0.85) {
        ctx.player.gems += 1;
        ctx.emit('pickup', { kind: 'gem', pos: m.position.clone() });
        sfx('pickup');
        burst(m.position.clone(), 'spark', { color: 0x7dffb0, count: 8 });
        combatGroup.remove(m);
        drops.splice(i, 1);
      }
    } else if (dist < 1.15) {
      ctx.player.heal(1);
      ctx.emit('pickup', { kind: 'heart', pos: m.position.clone() });
      sfx('heart');
      burst(m.position.clone(), 'heal');
      combatGroup.remove(m);
      drops.splice(i, 1);
    }
  }
}

// ================= 移動ヘルパー =================
function faceTo(e, tx, tz) {
  e.yaw = Math.atan2(tx - e.pos.x, tz - e.pos.z);
}

function moveToward(ctx, e, tx, tz, speed, dt) {
  const dx = tx - e.pos.x, dz = tz - e.pos.z;
  const d = Math.hypot(dx, dz);
  if (d < 0.001) return true;
  e.yaw = Math.atan2(dx, dz);
  const step = Math.min(speed * dt, d);
  const nx = e.pos.x + (dx / d) * step;
  const nz = e.pos.z + (dz / d) * step;
  if (validPos(ctx, nx, nz)) {
    e.pos.x = nx; e.pos.z = nz;
    return true;
  }
  e.hasTarget = false;
  return false;
}

function pickWander(ctx, e) {
  for (let i = 0; i < 6; i++) {
    const a = rand() * Math.PI * 2;
    const r = 2 + rand() * 6;
    const tx = e.home.x + Math.sin(a) * r;
    const tz = e.home.z + Math.cos(a) * r;
    if (validPos(ctx, tx, tz)) {
      e.tx = tx; e.tz = tz; e.hasTarget = true; e.t = 0;
      return;
    }
  }
  e.restT = 1.5;
}

// 障害物(colliders)からの押し出し。近傍リストは0.7秒毎に更新
function resolveColliders(ctx, e, dt) {
  e.colT -= dt;
  if (e.colT <= 0) {
    e.colT = 0.7;
    e.colCache.length = 0;
    const cols = ctx.colliders;
    if (cols) {
      for (let i = 0; i < cols.length && e.colCache.length < 6; i++) {
        const c = cols[i];
        const dx = c.x - e.pos.x, dz = c.z - e.pos.z;
        if (dx * dx + dz * dz < 100) e.colCache.push(c);
      }
    }
  }
  for (const c of e.colCache) {
    const dx = e.pos.x - c.x, dz = e.pos.z - c.z;
    const rr = (c.radius || 0.5) + e.radius * 0.6;
    const d2 = dx * dx + dz * dz;
    if (d2 < rr * rr && d2 > 0.0001) {
      const d = Math.sqrt(d2);
      const push = (rr - d);
      const nx = e.pos.x + (dx / d) * push, nz = e.pos.z + (dz / d) * push;
      if (validPos(ctx, nx, nz)) { e.pos.x = nx; e.pos.z = nz; }
    }
  }
}

// ================= アニメーション =================
function walkAnim(e, dt, run01) {
  const p = e.p;
  e.animT += dt * (5 + run01 * 6.5);
  const s = Math.sin(e.animT);
  const amp = 0.45 + run01 * 0.5;
  p.legL.rotation.x = s * amp;
  p.legR.rotation.x = -s * amp;
  p.armL.rotation.x = damp(p.armL.rotation.x, -s * amp * 0.7, 14, dt);
  p.armR.rotation.x = damp(p.armR.rotation.x, s * amp * 0.45, 14, dt);
  p.body.position.y = 0.5 + Math.abs(Math.cos(e.animT)) * 0.05 * (0.4 + run01);
  p.body.rotation.x = damp(p.body.rotation.x, 0.05 + run01 * 0.22, 8, dt);
  p.body.position.x = 0;
  if (p.earL) {
    p.earL.rotation.z = 1.25 + Math.sin(e.animT * 0.7) * 0.07;
    p.earR.rotation.z = -1.25 - Math.cos(e.animT * 0.7) * 0.07;
    p.head.rotation.y = damp(p.head.rotation.y, 0, 8, dt);
  }
}

function idleAnim(e, dt) {
  const p = e.p;
  e.animT += dt * 2;
  p.body.position.y = 0.5 + Math.sin(e.animT) * 0.015;
  p.body.position.x = 0;
  p.legL.rotation.x = damp(p.legL.rotation.x, 0, 8, dt);
  p.legR.rotation.x = damp(p.legR.rotation.x, 0, 8, dt);
  p.armL.rotation.x = damp(p.armL.rotation.x, 0, 6, dt);
  p.armR.rotation.x = damp(p.armR.rotation.x, 0, 6, dt);
  p.body.rotation.x = damp(p.body.rotation.x, 0.04, 6, dt);
  if (p.head) p.head.rotation.y = Math.sin(e.animT * 0.35) * 0.3;
}

function skelWalkAnim(e, dt, ctx) {
  const p = e.p;
  e.animT += dt * 9.5;
  const s = Math.sin(e.animT);
  p.legL.rotation.x = s * 0.85;
  p.legR.rotation.x = -s * 0.85;
  p.armL.rotation.x = damp(p.armL.rotation.x, -s * 0.5 - 0.15, 14, dt);
  p.armR.rotation.x = damp(p.armR.rotation.x, s * 0.3 - 0.2, 14, dt);
  // 骨のカタカタ揺れ
  const el = ctx.time.elapsed;
  p.armL.rotation.z = Math.sin(el * 43 + e.phase) * 0.045;
  p.armR.rotation.z = -Math.sin(el * 47 + e.phase) * 0.045;
  p.head.rotation.z = Math.sin(el * 31 + e.phase) * 0.05;
  p.body.position.y = 0.98 + Math.abs(Math.cos(e.animT)) * 0.06;
  p.body.rotation.x = damp(p.body.rotation.x, 0.22, 8, dt);
}

function dyingUpdate(ctx, e, dt) {
  e.t += dt;
  const p = e.p;
  if (e.type === 'wisp') {
    const k = Math.min(1, e.t / 0.45);
    e.root.scale.setScalar(Math.max(0.01, 1 - 0.9 * k * k));
    p.coreG.rotation.y += dt * 14;
    if (e.t >= 0.45) {
      burst(e.pos.clone(), 'magic', { count: 10 });
      finalizeDeath(ctx, e, true, true);
    }
    return;
  }
  if (e.t < 0.16 && p.body) {
    p.body.rotation.z = Math.sin(e.t * 46) * 0.12; // ふらつき
  } else if (p.body) {
    p.body.rotation.z = damp(p.body.rotation.z, 0, 10, dt);
  }
  const fall = smoothstep(0.12, 0.55, e.t);
  e.root.rotation.x = -fall * 1.45; // 仰向けに倒れる
  e.yOff = -0.06 * fall;
  if (e.t >= 0.68) finalizeDeath(ctx, e, true, true);
}

// ================= ゴブリンAI =================
function goblinUpdate(ctx, e, dt, distP) {
  const p = e.p;
  const pp = ctx.player.position;
  const playerOk = ctx.player.hp > 0;
  e.t += dt;

  switch (e.state) {
    case 'patrol': {
      if (playerOk && distP < GOB.notice) {
        e.state = 'alert'; e.t = 0;
        showAlert(e);
        sfx('alert');
        faceTo(e, pp.x, pp.z);
        break;
      }
      const dh = Math.hypot(e.home.x - e.pos.x, e.home.z - e.pos.z);
      if (dh > 20) { // 追跡で離れすぎたら駆け足で野営地へ
        moveToward(ctx, e, e.home.x, e.home.z, GOB.run * 0.8, dt);
        walkAnim(e, dt, 0.7);
        break;
      }
      if (e.restT > 0) { e.restT -= dt; idleAnim(e, dt); break; }
      if (!e.hasTarget || e.t > 9) pickWander(ctx, e);
      if (e.hasTarget) {
        moveToward(ctx, e, e.tx, e.tz, GOB.walk, dt);
        if (Math.hypot(e.tx - e.pos.x, e.tz - e.pos.z) < 0.4) {
          e.hasTarget = false;
          e.restT = 1 + rand() * 2.5;
        }
        walkAnim(e, dt, 0.15);
      }
      break;
    }
    case 'alert': {
      faceTo(e, pp.x, pp.z);
      p.body.rotation.x = damp(p.body.rotation.x, -0.14, 12, dt); // のけぞって驚く
      p.body.position.y = 0.5 + Math.sin(e.t * 30) * 0.02;
      if (e.t >= 0.5) { e.state = 'chase'; e.t = 0; }
      break;
    }
    case 'chase': {
      if (!playerOk || distP > 30) { e.state = 'patrol'; e.t = 0; e.hasTarget = false; break; }
      faceTo(e, pp.x, pp.z);
      if (distP <= GOB.range) { e.state = 'windup'; e.t = 0; break; }
      moveToward(ctx, e, pp.x, pp.z, GOB.run, dt);
      walkAnim(e, dt, 1);
      break;
    }
    case 'windup': { // 棍棒を高く掲げて震える(0.6s)
      faceTo(e, pp.x, pp.z);
      const k = Math.min(1, e.t / 0.6);
      p.armR.rotation.x = damp(p.armR.rotation.x, -2.6, 16, dt);
      p.armL.rotation.x = damp(p.armL.rotation.x, -0.5, 10, dt);
      p.body.rotation.x = damp(p.body.rotation.x, -0.12, 10, dt);
      p.body.position.x = Math.sin(ctx.time.elapsed * 55) * 0.022 * k;
      p.legL.rotation.x = damp(p.legL.rotation.x, 0.25, 10, dt);
      p.legR.rotation.x = damp(p.legR.rotation.x, -0.25, 10, dt);
      if (e.t >= 0.6) { e.state = 'swing'; e.t = 0; e.hitDone = false; }
      break;
    }
    case 'swing': { // 振り下ろし
      const k = Math.min(1, e.t / 0.16);
      p.armR.rotation.x = lerp(-2.6, 1.05, k * (2 - k));
      p.body.rotation.x = lerp(-0.12, 0.42, k);
      p.body.position.x = 0;
      if (!e.hitDone && e.t >= 0.1) {
        e.hitDone = true;
        if (playerOk && distP < GOB.reach) {
          try { ctx.player.damage(GOB.dmg, e.pos); } catch (err) { /* noop */ }
        }
      }
      if (e.t >= 0.3) { e.state = 'recover'; e.t = 0; }
      break;
    }
    case 'recover': { // 1秒様子見
      p.armR.rotation.x = damp(p.armR.rotation.x, 0, 6, dt);
      p.armL.rotation.x = damp(p.armL.rotation.x, 0, 6, dt);
      p.body.rotation.x = damp(p.body.rotation.x, 0.05, 6, dt);
      p.body.position.y = 0.5 + Math.sin(e.t * 5) * 0.02;
      faceTo(e, pp.x, pp.z);
      if (e.t >= 1) {
        e.t = 0;
        e.state = !playerOk ? 'patrol' : distP <= GOB.range + 0.3 ? 'windup' : distP < 30 ? 'chase' : 'patrol';
      }
      break;
    }
    case 'stunned': { // のけぞり
      p.body.rotation.x = damp(p.body.rotation.x, -0.5, 14, dt);
      p.armR.rotation.x = damp(p.armR.rotation.x, -0.6, 10, dt);
      if (e.t >= 0.3) { e.state = 'chase'; e.t = 0; }
      break;
    }
    case 'dying': dyingUpdate(ctx, e, dt); return;
  }
}

// ================= ボーンソルジャーAI =================
function skeletonUpdate(ctx, e, dt, distP) {
  const p = e.p;
  const pp = ctx.player.position;
  const playerOk = ctx.player.hp > 0;
  e.t += dt;

  switch (e.state) {
    case 'rise': { // 地面から這い出る
      const k = Math.min(1, e.t / 0.8);
      e.yOff = -1.7 * (1 - k * k * (3 - 2 * k));
      e.dustT -= dt;
      if (e.dustT <= 0) {
        e.dustT = 0.22;
        burst(e.pos.clone(), 'dust', { count: 6 });
      }
      p.armL.rotation.x = -2.2 * (1 - k);
      p.armR.rotation.x = -2.2 * (1 - k);
      if (e.t >= 0.8) { e.state = 'chase'; e.t = 0; e.yOff = 0; }
      break;
    }
    case 'chase': {
      if (!playerOk) { idleAnim(e, dt); break; }
      faceTo(e, pp.x, pp.z);
      if (distP <= SKL.range) { e.state = 'windup'; e.t = 0; break; }
      if (distP < 100) {
        moveToward(ctx, e, pp.x, pp.z, SKL.speed, dt);
        skelWalkAnim(e, dt, ctx);
      } else {
        idleAnim(e, dt);
      }
      break;
    }
    case 'windup': {
      faceTo(e, pp.x, pp.z);
      const k = Math.min(1, e.t / 0.45);
      p.armR.rotation.x = damp(p.armR.rotation.x, -2.9, 18, dt);
      p.armR.rotation.z = damp(p.armR.rotation.z, 0.4, 12, dt);
      p.body.rotation.x = damp(p.body.rotation.x, -0.1, 10, dt);
      p.body.position.x = Math.sin(ctx.time.elapsed * 50) * 0.012 * k;
      if (e.t >= 0.45) { e.state = 'swing'; e.t = 0; e.hitDone = false; }
      break;
    }
    case 'swing': {
      const k = Math.min(1, e.t / 0.14);
      p.armR.rotation.x = lerp(-2.9, 1.15, k * (2 - k));
      p.armR.rotation.z = lerp(0.4, -0.15, k);
      p.body.rotation.x = lerp(-0.1, 0.4, k);
      p.body.position.x = 0;
      if (!e.hitDone && e.t >= 0.08) {
        e.hitDone = true;
        if (playerOk && distP < SKL.reach) {
          try { ctx.player.damage(SKL.dmg, e.pos); } catch (err) { /* noop */ }
        }
      }
      if (e.t >= 0.24) { e.state = 'recover'; e.t = 0; }
      break;
    }
    case 'recover': {
      p.armR.rotation.x = damp(p.armR.rotation.x, -0.2, 8, dt);
      p.armR.rotation.z = damp(p.armR.rotation.z, 0, 8, dt);
      p.body.rotation.x = damp(p.body.rotation.x, 0.15, 8, dt);
      faceTo(e, pp.x, pp.z);
      if (e.t >= 0.7) { e.state = 'chase'; e.t = 0; }
      break;
    }
    case 'stunned': {
      p.body.rotation.x = damp(p.body.rotation.x, -0.45, 14, dt);
      if (e.t >= 0.18) { e.state = 'chase'; e.t = 0; }
      break;
    }
    case 'crumble': { // 夜明け: 崩れて消える
      const k = Math.min(1, e.t / 0.6);
      e.yOff = -1.3 * k * k;
      e.root.scale.set(1 - k * 0.35, Math.max(0.05, 1 - k * 0.85), 1 - k * 0.35);
      e.root.rotation.z = k * 0.4;
      e.dustT -= dt;
      if (e.dustT <= 0) { e.dustT = 0.2; burst(e.pos.clone(), 'dust', { count: 4 }); }
      if (e.t >= 0.6) finalizeDeath(ctx, e, false, false);
      break;
    }
    case 'dying': dyingUpdate(ctx, e, dt); return;
    default: { e.state = 'chase'; break; }
  }
}

// ================= 魔導ウィスプAI =================
function wispUpdate(ctx, e, dt, distP) {
  const p = e.p;
  const pp = ctx.player.position;
  const playerOk = ctx.player.hp > 0;
  const el = ctx.time.elapsed;
  e.t += dt;

  if (e.state === 'dying') { dyingUpdate(ctx, e, dt); return; }

  // 浮遊(接地+1.5m)
  const g = ctx.getGroundHeight(e.pos.x, e.pos.z);
  e.hoverY = damp(e.hoverY, g + 1.5, 3, dt);
  e.root.position.y = e.hoverY + Math.sin(el * 1.7 + e.phase) * 0.25;

  // 外殻・衛星の明滅と回転
  p.orbit.rotation.y += dt * 2.6;
  const pulse = 1 + Math.sin(el * 5 + e.phase) * 0.1;
  p.shell.scale.setScalar(0.4 * pulse);

  const charge = smoothstep(WSP.fireCd - 0.4, WSP.fireCd, e.fireT);
  p.coreG.scale.setScalar(1 + charge * 0.5 + Math.sin(el * 9 + e.phase) * 0.05);

  if (playerOk && distP < 45) {
    faceTo(e, pp.x, pp.z);
    // 8〜20mを保って漂う
    let mx = 0, mz = 0, sp = 0;
    const dx = (pp.x - e.pos.x) / (distP || 1), dz = (pp.z - e.pos.z) / (distP || 1);
    if (distP < WSP.near) { mx = -dx; mz = -dz; sp = 3.0; }
    else if (distP > WSP.far) { mx = dx; mz = dz; sp = 2.2; }
    else {
      const dir = Math.sin(el * 0.35 + e.phase) > 0 ? 1 : -1;
      mx = -dz * dir; mz = dx * dir; sp = 1.2;
    }
    const nx = e.pos.x + mx * sp * dt, nz = e.pos.z + mz * sp * dt;
    if (validPos(ctx, nx, nz)) { e.pos.x = nx; e.pos.z = nz; }

    // 2.5秒毎に火球
    if (distP < 32) {
      e.fireT += dt;
      if (e.fireT >= WSP.fireCd) {
        e.fireT = rand() * 0.3;
        spawnFireball(ctx, e);
      }
    }
  } else {
    // 定位置周辺をゆらゆら
    e.fireT = Math.min(e.fireT, WSP.fireCd - 0.6);
    const dh = Math.hypot(e.home.x - e.pos.x, e.home.z - e.pos.z);
    if (dh > 6) {
      moveToward(ctx, e, e.home.x, e.home.z, 1.5, dt);
    } else {
      const nx = e.pos.x + Math.sin(el * 0.5 + e.phase) * 0.5 * dt;
      const nz = e.pos.z + Math.cos(el * 0.4 + e.phase) * 0.5 * dt;
      if (validPos(ctx, nx, nz)) { e.pos.x = nx; e.pos.z = nz; }
    }
  }
}

// ================= 敵ごとの更新 =================
function updateEnemy(ctx, e, dt) {
  const pp = ctx.player.position;
  const distP = Math.hypot(pp.x - e.pos.x, pp.z - e.pos.z);
  e.distP = distP;

  const vis = distP < HIDE_DIST;
  if (e.root.visible !== vis) e.root.visible = vis;

  // 間引き更新(120m超は2秒毎)
  if (distP > FAR_DIST && e.state !== 'dying' && e.state !== 'crumble') {
    e.farAcc += dt;
    if (e.farAcc < FAR_TICK) return;
    dt = Math.min(e.farAcc, 0.5);
    e.farAcc = 0;
  }

  // 被弾フラッシュの復帰
  if (e.flashT > 0) {
    e.flashT -= dt;
    if (e.flashT <= 0) restoreFlash(e);
  }
  // ノックバック
  if (e.kb.lengthSq() > 0.0004) {
    const nx = e.pos.x + e.kb.x * dt, nz = e.pos.z + e.kb.z * dt;
    if (validPos(ctx, nx, nz)) { e.pos.x = nx; e.pos.z = nz; }
    e.kb.multiplyScalar(Math.max(0, 1 - 7 * dt));
  }
  if (e.staggerT > 0) e.staggerT -= dt;

  if (e.type === 'goblin') goblinUpdate(ctx, e, dt, distP);
  else if (e.type === 'skeleton') skeletonUpdate(ctx, e, dt, distP);
  else wispUpdate(ctx, e, dt, distP);

  if (e._gone) return;

  // 接地と向き
  if (e.type !== 'wisp') {
    e.root.position.y = ctx.getGroundHeight(e.pos.x, e.pos.z) + e.yOff;
    if (distP < 100 && e.alive) resolveColliders(ctx, e, dt);
  }
  e.root.rotation.y = dampAngle(e.root.rotation.y, e.yaw, 10, dt);
}

// 敵同士の重なりをやわらかく解消
function separation(ctx) {
  sepList.length = 0;
  for (const e of enemies) {
    if (e._own && e.alive && e.type !== 'wisp' && e.distP < 90) sepList.push(e);
  }
  for (let i = 0; i < sepList.length; i++) {
    for (let j = i + 1; j < sepList.length; j++) {
      const a = sepList[i], b = sepList[j];
      const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
      const rr = a.radius + b.radius - 0.35;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        const push = (rr - d) * 0.5;
        const px = (dx / d) * push, pz = (dz / d) * push;
        if (validPos(ctx, a.pos.x - px, a.pos.z - pz)) { a.pos.x -= px; a.pos.z -= pz; }
        if (validPos(ctx, b.pos.x + px, b.pos.z + pz)) { b.pos.x += px; b.pos.z += pz; }
      }
    }
  }
}

// ================= スポーン管理 =================
function manageCamps(ctx, dt) {
  const pp = ctx.player.position;
  const el = ctx.time.elapsed;
  for (let i = 0; i < camps.length; i++) {
    const c = camps[i];
    const d = Math.hypot(pp.x - c.center.x, pp.z - c.center.z);
    const vis = d < 170;
    if (c.props.group.visible !== vis) c.props.group.visible = vis;
    if (vis) { // 炎の揺らめき
      c.props.flameO.scale.set(
        0.2 * (1 + Math.sin(el * 11 + i * 2.1) * 0.12),
        0.45 * (1 + Math.sin(el * 13.7 + i) * 0.2),
        0.2 * (1 + Math.cos(el * 10.3 + i) * 0.12));
      c.props.flameI.scale.set(
        0.11 * (1 + Math.sin(el * 17 + i) * 0.18),
        0.3 * (1 + Math.sin(el * 19.3 + i * 1.7) * 0.25),
        0.11);
    }
    if (campTick <= 0 && c.members.length === 0 && c.clearedAt >= 0 &&
        el - c.clearedAt > CAMP_RESPAWN && d > CAMP_RESPAWN_MIN_D) {
      spawnCampGoblins(ctx, c);
    }
  }
}

function manageSkeletons(ctx, dt) {
  const night = ctx.time.isNight;
  if (night && ctx.state === 'playing' && ctx.player.hp > 0) {
    skelSpawnT -= dt;
    if (skelSpawnT <= 0) {
      skelSpawnT = 2.2 + rand() * 1.5;
      if (skeletons.length < SKL.max) {
        const pp = ctx.player.position;
        for (let i = 0; i < 8; i++) {
          const a = rand() * Math.PI * 2;
          const r = 30 + rand() * 30;
          const x = pp.x + Math.sin(a) * r, z = pp.z + Math.cos(a) * r;
          let biome = 'plains';
          try { biome = ctx.world.getBiome(x, z); } catch (err) { /* noop */ }
          if (biome === 'plains' && validPos(ctx, x, z)) {
            spawnSkeleton(ctx, x, z);
            break;
          }
        }
      }
    }
  }
  if (prevNight && !night) { // 夜明け: 全員崩れる
    for (const s of skeletons) {
      if (s.state !== 'crumble' && s.state !== 'dying') {
        s.alive = false;
        s.state = 'crumble';
        s.t = 0;
      }
    }
  }
  prevNight = night;
}

function manageWisps(ctx) {
  const pp = ctx.player.position;
  const el = ctx.time.elapsed;
  for (const s of wispSpots) {
    if (!s.enemy && el - s.deadAt > CAMP_RESPAWN &&
        Math.hypot(pp.x - s.pos.x, pp.z - s.pos.z) > CAMP_RESPAWN_MIN_D) {
      spawnWisp(ctx, s);
    }
  }
}

// ================= プレイヤー攻撃の適用 =================
function applyPlayerAttack(ctx) {
  let hit = null;
  try { hit = ctx.player.getAttackHit ? ctx.player.getAttackHit() : null; } catch (err) { /* noop */ }
  if (!hit || !hit.pos) return;
  const hr = hit.radius || 1;
  for (const e of enemies) {
    if (!e.alive || e._gone) continue;
    if (e._lastSwingId === hit.swingId) continue;
    const p = posOf(e);
    if (!p) continue;
    const dx = hit.pos.x - p.x, dz = hit.pos.z - p.z;
    const rr = hr + (e.radius || 0.6);
    if (dx * dx + dz * dz > rr * rr) continue;
    const cy = e._own ? (e.root.position.y + e.hitY) : p.y;
    const tol = e._own ? 2.4 : 4.5;
    if (Math.abs(hit.pos.y - cy) > tol) continue;
    e._lastSwingId = hit.swingId; // 契約: 同一swingIdは同一敵に1回のみ
    damageEnemyImpl(e, hit.damage ?? 1, ctx.player.position);
  }
}

// ================= init / update =================
export async function init(ctx) {
  ctxRef = ctx;
  buildShared();
  combatGroup = new THREE.Group();
  combatGroup.name = 'combat';
  ctx.scene.add(combatGroup);
  buildDmgPool();
  buildAlertPool();
  buildTrail();
  buildFireballs();

  // --- ゴブリン野営地: 草原x3・森x2・湖畔x1・火山麓x1 ---
  const campDefs = [
    [70, 150], [-130, 90], [150, -40],   // 草原
    [410, 190], [500, 100],              // 森
    [-340, 330],                         // 湖畔
    [470, -350],                         // 火山麓
  ];
  for (const [cx, cz] of campDefs) {
    const p = findDryPos(ctx, cx, cz, 14);
    const center = new THREE.Vector3(p.x, ctx.getGroundHeight(p.x, p.z), p.z);
    const camp = { center, members: [], clearedAt: -1, props: buildCampProps(ctx, center) };
    combatGroup.add(camp.props.group);
    camps.push(camp);
    spawnCampGoblins(ctx, camp);
  }

  // --- ウィスプ: 火山の定点 + 遺跡(biome走査で発見) ---
  const spotDefs = [[505, -390], [585, -470], [530, -515], [612, -408]];
  const ruinPts = [];
  try {
    for (let x = -880; x <= 880; x += 80) {
      for (let z = -520; z <= 880; z += 80) {
        if (ctx.world.getBiome(x, z) === 'ruins') ruinPts.push([x, z]);
      }
    }
  } catch (err) { /* noop */ }
  for (const rp of ruinPts) {
    if (spotDefs.length >= 8) break;
    if (spotDefs.every(([sx, sz]) => Math.hypot(sx - rp[0], sz - rp[1]) > 60)) spotDefs.push(rp);
  }
  for (const [sx, sz] of spotDefs) {
    const p = findDryPos(ctx, sx, sz, 10);
    const spot = { pos: new THREE.Vector3(p.x, 0, p.z), enemy: null, deadAt: -999 };
    wispSpots.push(spot);
    spawnWisp(ctx, spot);
  }

  prevNight = ctx.time.isNight;

  // --- 契約API ---
  ctx.combat = {
    enemies,
    nearestTargetable(pos, maxDist = 32) {
      if (!pos) return null;
      let best = null, bd = maxDist;
      for (const e of enemies) {
        if (!e.alive || e._gone) continue;
        const p = posOf(e);
        if (!p) continue;
        const d = pos.distanceTo(p);
        if (d <= bd) { bd = d; best = e; }
      }
      return best;
    },
    registerEnemy(e) {
      if (e && enemies.indexOf(e) < 0) enemies.push(e);
    },
    damageEnemy(e, dmg, fromPos) { damageEnemyImpl(e, dmg, fromPos); },
  };
}

export function update(ctx, dt) {
  if (!ctx.combat || !ctx.player) return;
  if (ctx.state === 'shrine') return; // 祠内部ではフィールド戦闘を凍結(地形差し替え対策)

  campTick -= dt;
  manageCamps(ctx, dt);
  if (campTick <= 0) {
    campTick = 1;
    manageWisps(ctx);
  }
  manageSkeletons(ctx, dt);

  // マテリアル共有の明滅(ウィスプ)
  M.wispCore.emissiveIntensity = 1.9 + Math.sin(ctx.time.elapsed * 8.5) * 0.55;

  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    if (!e._own) continue; // ボス等は本体側が更新
    updateEnemy(ctx, e, dt);
    if (e._gone) enemies.splice(i, 1);
  }
  separation(ctx);

  applyPlayerAttack(ctx);
  updateFireballs(ctx, dt);
  updateDrops(ctx, dt);
  updateDmgNumbers(dt);
  updateAlerts(dt);
  updateTrail(dt);
}
