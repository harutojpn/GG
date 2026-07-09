// boss.js — 魔城の結界とボス「魔獣ヴァルモス」(契約: ARCHITECTURE.md)
// 結界(渦シェーダ) → E開戦シーケンス → 4攻撃パターン+2形態 → 撃破演出 / リトライ復帰
import * as THREE from 'three';
import {
  toonMaterial, glowMaterial, clamp, lerp, damp, dampAngle, angleDelta, smoothstep, part, TMP,
} from './util.js';

let C = null; // ctx キャプチャ

// ---- 結界 ----
let barrier, barrierMat, gateRing, gateRingMat, runeRing, runeMat;
// ---- アリーナ魔法壁 ----
let walls, wallMat;
const BOUNDS = { minX: -55, maxX: 55, minZ: -650, maxZ: -505 };
// ---- ボス ----
let bossRoot, body, neck, head, jaw;
let legs = [];      // {g, upper, lower}
let tailSegs = [];
let aura, auraMat;
let matBody, matDark, matHorn, eyeMat, crackMat, mawMat;
let bossEnemy = null;
const spawnPos = new THREE.Vector3(0, 0, -580);
// ---- 弾/衝撃波プール ----
const rings = [];   // {mesh, mat, r, active, hitDone}
const bolts = [];   // {mesh, vel, active, life}
// ---- 進行状態 ----
let seq = null, seqT = 0, seqFx = 0;    // 演出シーケンス
let battle = false;
let phase = 1;
let nearGate = false, promptOn = false;
let hitFlash = 0;

// ---- AI ----
const ai = {
  state: 'idle', t: 0, cd: 1.6,
  heading: 0, speedMul: 1,
  clawCd: 0, chargeCd: 0, slamCd: 0, flameCd: 0,
  dashDir: new THREE.Vector3(), dashRemain: 1, hitDone: false, clawHitDone: false, fired: false,
  leapFrom: new THREE.Vector3(), leapTo: new THREE.Vector3(),
  gaitT: 0, moveAmt: 0,
};
// ---- ポーズ(滑らか補間) ----
const pose = { pitch: 0, roll: 0, y: 0, headP: 0, headY: 0, jaw: 0.06, crouch: 0, paw: 0, maw: 0.4, eyes: 2.4 };
const TGT = { pitch: 0, roll: 0, y: 0, headP: 0, headY: 0, jaw: 0.06, crouch: 0, paw: 0, maw: 0.4, eyes: 2.4 };

const gY = (x, z) => C.getGroundHeight(x, z);

const VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

// 渦巻く紫黒のエネルギー壁
const BARRIER_FRAG = /* glsl */`
varying vec2 vUv;
uniform float uTime, uBreak;
void main(){
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float a = atan(p.y, p.x);
  float swirl  = sin(a * 3.0 + uTime * 1.6 - r * 9.0) * 0.5 + 0.5;
  float swirl2 = sin(a * 5.0 - uTime * 2.4 + r * 14.0) * 0.5 + 0.5;
  float core = smoothstep(1.0, 0.15, r);
  vec3 deep = vec3(0.07, 0.02, 0.13);
  vec3 vio  = vec3(0.42, 0.12, 0.72);
  vec3 mag  = vec3(0.85, 0.38, 1.0);
  vec3 col = mix(deep, vio, swirl * core) + mag * pow(swirl2 * core, 3.0) * 0.85;
  float rim = smoothstep(0.70, 0.97, r) * smoothstep(1.06, 0.97, r);
  col += mag * rim * 1.7;
  float alpha = core * (0.62 + 0.32 * swirl) + rim * 0.95;
  float n = sin(p.x * 23.0 + p.y * 31.0 + uTime * 3.0) * 0.5 + 0.5;
  alpha *= 1.0 - smoothstep(uBreak * 1.3 - 0.25, uBreak * 1.3, n * 0.72 + r * 0.28);
  gl_FragColor = vec4(col * (1.0 + uBreak * 2.2), alpha);
}
`;

// アリーナ境界の薄く光る魔法壁
const WALL_FRAG = /* glsl */`
varying vec2 vUv;
uniform float uTime;
void main(){
  float y = vUv.y;
  float band = sin(y * 22.0 - uTime * 2.1) * 0.5 + 0.5;
  float weave = sin(vUv.x * 90.0 + uTime * 0.8) * sin(y * 36.0 - uTime * 1.4) * 0.5 + 0.5;
  float a = (1.0 - y) * (1.0 - y) * 0.30 + band * 0.05 + weave * 0.04;
  gl_FragColor = vec4(vec3(0.55, 0.26, 0.92), a * 0.55);
}
`;

// ================= 構築 =================
function buildBarrier(gatePos) {
  barrierMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uBreak: { value: 0 } },
    vertexShader: VERT, fragmentShader: BARRIER_FRAG,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  barrier = new THREE.Mesh(new THREE.PlaneGeometry(15, 11), barrierMat);
  barrier.position.set(gatePos.x, gatePos.y + 5.2, gatePos.z);
  C.scene.add(barrier);

  gateRingMat = glowMaterial(0xb050ff, 1.7);
  gateRing = new THREE.Mesh(new THREE.TorusGeometry(7.0, 0.17, 8, 56), gateRingMat);
  gateRing.scale.set(1.04, 0.72, 1);
  gateRing.position.copy(barrier.position);
  C.scene.add(gateRing);

  runeMat = new THREE.MeshBasicMaterial({
    color: 0x8a2be2, transparent: true, opacity: 0.30,
    side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  runeRing = new THREE.Mesh(new THREE.RingGeometry(4.6, 5.4, 48), runeMat);
  runeRing.rotation.x = -Math.PI / 2;
  runeRing.position.set(gatePos.x, gY(gatePos.x, gatePos.z + 1.5) + 0.12, gatePos.z + 1.5);
  C.scene.add(runeRing);
}

function buildWalls() {
  wallMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: VERT, fragmentShader: WALL_FRAG,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  walls = new THREE.Group();
  walls.visible = false;
  const w = BOUNDS.maxX - BOUNDS.minX, d = BOUNDS.maxZ - BOUNDS.minZ, h = 10;
  const cx = (BOUNDS.minX + BOUNDS.maxX) / 2, cz = (BOUNDS.minZ + BOUNDS.maxZ) / 2;
  const mk = (width, x, z, ry) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(width, h), wallMat);
    m.position.set(x, gY(x, z) + h / 2 - 0.5, z);
    m.rotation.y = ry;
    walls.add(m);
  };
  mk(w, cx, BOUNDS.minZ, 0);
  mk(w, cx, BOUNDS.maxZ, 0);
  mk(d, BOUNDS.minX, cz, Math.PI / 2);
  mk(d, BOUNDS.maxX, cz, Math.PI / 2);
  C.scene.add(walls);
}

function makeLeg(x, z) {
  const g = new THREE.Group();
  g.position.set(x, -0.35, z);
  body.add(g);
  const upper = new THREE.Group();
  g.add(upper);
  part(new THREE.BoxGeometry(0.62, 1.2, 0.74), matBody, 0, -0.55, 0, upper);
  const lower = new THREE.Group();
  lower.position.set(0, -1.1, 0);
  upper.add(lower);
  part(new THREE.BoxGeometry(0.46, 1.0, 0.56), matDark, 0, -0.45, 0, lower);
  part(new THREE.BoxGeometry(0.64, 0.28, 0.82), matDark, 0, -0.95, 0.1, lower);
  for (let k = -1; k <= 1; k++) {
    const claw = part(new THREE.ConeGeometry(0.09, 0.34, 5), matHorn, k * 0.19, -0.97, 0.55, lower);
    claw.rotation.x = 1.35;
  }
  return { g, upper, lower };
}

function buildBoss() {
  matBody = toonMaterial(0x241a36, { emissive: 0x000000 });
  matDark = toonMaterial(0x151024);
  matHorn = toonMaterial(0x574a6e);
  eyeMat = glowMaterial(0xb44dff, 2.4);
  crackMat = glowMaterial(0x8a2be2, 1.5);
  mawMat = glowMaterial(0xa030ff, 0.4);

  bossRoot = new THREE.Group();
  bossRoot.visible = false;
  bossRoot.position.copy(spawnPos);
  C.scene.add(bossRoot);

  body = new THREE.Group();
  body.position.y = 2.5;
  bossRoot.add(body);

  part(new THREE.BoxGeometry(2.6, 2.0, 2.7), matBody, 0, 0.15, 1.0, body);    // 胸
  part(new THREE.BoxGeometry(2.2, 1.7, 2.7), matBody, 0, -0.05, -1.15, body); // 腹〜腰
  part(new THREE.BoxGeometry(1.9, 0.9, 1.7), matDark, 0, 1.25, 0.9, body);    // 肩の隆起
  for (let i = 0; i < 4; i++) { // 背の棘
    const sp = part(new THREE.ConeGeometry(0.26 - i * 0.03, 0.95 - i * 0.12, 5), matHorn,
      0, 1.55 - i * 0.16, 1.35 - i * 1.05, body);
    sp.rotation.x = -0.35;
  }
  // 体の亀裂(紫発光)
  const crackDefs = [
    [1.30, 0.35, 1.2, 0.5, 1.0, 0.3], [-1.30, 0.1, 0.6, 0.4, 1.2, -0.2],
    [1.10, -0.2, -1.0, 0.35, 0.9, 0.4], [-1.10, 0.3, -1.5, 0.45, 1.1, -0.4],
    [0.6, 1.05, 0.0, 0.4, 0.8, 1.2], [-0.5, -0.85, 0.4, 0.35, 0.9, 0.9],
  ];
  for (const [x, y, z, w, l, rz] of crackDefs) {
    const c = part(new THREE.BoxGeometry(0.07, w, l), crackMat, x, y, z, body);
    c.rotation.z = rz;
    c.castShadow = false;
  }

  neck = new THREE.Group();
  neck.position.set(0, 0.7, 2.25);
  body.add(neck);
  const neckMesh = part(new THREE.BoxGeometry(1.1, 1.0, 1.5), matBody, 0, 0.28, 0.5, neck);
  neckMesh.rotation.x = -0.35;

  head = new THREE.Group();
  head.position.set(0, 0.8, 1.1);
  neck.add(head);
  part(new THREE.BoxGeometry(1.15, 0.85, 1.5), matBody, 0, 0.1, 0.35, head);  // 頭蓋
  part(new THREE.BoxGeometry(0.8, 0.48, 0.95), matDark, 0, -0.06, 1.3, head); // 鼻先
  part(new THREE.ConeGeometry(0.07, 0.28, 5), matHorn, 0.26, -0.34, 1.55, head).rotation.x = Math.PI;  // 上牙
  part(new THREE.ConeGeometry(0.07, 0.28, 5), matHorn, -0.26, -0.34, 1.55, head).rotation.x = Math.PI;
  part(new THREE.SphereGeometry(0.15, 8, 6), eyeMat, 0.36, 0.24, 0.95, head).castShadow = false;  // 目
  part(new THREE.SphereGeometry(0.15, 8, 6), eyeMat, -0.36, 0.24, 0.95, head).castShadow = false;
  for (const s of [1, -1]) { // 角(左右・二段で湾曲)
    const h1 = part(new THREE.ConeGeometry(0.20, 1.05, 6), matHorn, s * 0.46, 0.75, 0.0, head);
    h1.rotation.z = -s * 0.55; h1.rotation.x = 0.35;
    const h2 = part(new THREE.ConeGeometry(0.12, 0.75, 6), matHorn, 0, 0.75, 0, h1);
    h2.rotation.z = -s * 0.5;
  }
  jaw = new THREE.Group(); // 顎+口内発光
  jaw.position.set(0, -0.30, 0.45);
  head.add(jaw);
  part(new THREE.BoxGeometry(0.74, 0.26, 1.55), matDark, 0, -0.12, 0.7, jaw);
  part(new THREE.ConeGeometry(0.06, 0.24, 5), matHorn, 0.22, 0.06, 1.35, jaw);
  part(new THREE.ConeGeometry(0.06, 0.24, 5), matHorn, -0.22, 0.06, 1.35, jaw);
  part(new THREE.BoxGeometry(0.58, 0.14, 1.0), mawMat, 0, 0.04, 0.65, jaw).castShadow = false;

  legs = [makeLeg(1.18, 1.55), makeLeg(-1.18, 1.55), makeLeg(1.05, -1.55), makeLeg(-1.05, -1.55)];

  // 尻尾(5節+発光棘)
  let parent = body, first = true;
  tailSegs = [];
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Group();
    s.position.set(0, first ? 0.05 : 0, first ? -2.35 : -0.9);
    parent.add(s);
    part(new THREE.BoxGeometry(0.56 - i * 0.08, 0.5 - i * 0.07, 1.0), i % 2 ? matDark : matBody, 0, 0, -0.5, s);
    tailSegs.push(s);
    parent = s; first = false;
  }
  const tip = part(new THREE.ConeGeometry(0.14, 0.7, 5), crackMat, 0, 0, -1.25, parent);
  tip.rotation.x = -Math.PI / 2;
  tip.castShadow = false;

  // 第2形態の赤いオーラ殻
  auraMat = new THREE.MeshBasicMaterial({
    color: 0xff2f45, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide,
  });
  aura = new THREE.Mesh(new THREE.SphereGeometry(3.5, 18, 12), auraMat);
  aura.position.y = 2.3;
  bossRoot.add(aura);
}

function buildPools() {
  for (let i = 0; i < 2; i++) {
    const mat = glowMaterial(0x9b40ff, 2.0, { transparent: true, opacity: 0.9 });
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(1, 0.2, 8, 48), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.visible = false;
    mesh.castShadow = false;
    C.scene.add(mesh);
    rings.push({ mesh, mat, r: 0, active: false, hitDone: false });
  }
  const boltGeo = new THREE.SphereGeometry(0.32, 8, 6);
  const trailGeo = new THREE.ConeGeometry(0.2, 1.0, 6);
  for (let i = 0; i < 6; i++) {
    const mesh = new THREE.Mesh(boltGeo, glowMaterial(0xc44dff, 2.6));
    const trail = new THREE.Mesh(trailGeo, glowMaterial(0x7a22cc, 1.2, { transparent: true, opacity: 0.7 }));
    trail.rotation.x = -Math.PI / 2;
    trail.position.z = -0.6;
    mesh.add(trail);
    mesh.visible = false;
    mesh.castShadow = false;
    C.scene.add(mesh);
    bolts.push({ mesh, vel: new THREE.Vector3(), active: false, life: 0 });
  }
}

// ================= init =================
export async function init(ctx) {
  C = ctx;
  const gate = ctx.world.castleGatePos;
  spawnPos.set(gate.x, 0, gate.z - 20);
  spawnPos.y = gY(spawnPos.x, spawnPos.z);
  buildBarrier(gate);
  buildWalls();
  buildBoss();
  buildPools();

  bossEnemy = {
    root: bossRoot,
    pos: bossRoot.position,
    hp: 60, maxHp: 60,
    alive: false,
    radius: 3,
    name: '魔獣ヴァルモス',
    isBoss: true,
    damage(dmg, fromPos) {
      if (!this.alive || seq) return;
      const mul = ai.state === 'stun' ? 2 : 0.5; // スタン中は弱点
      this.hp = Math.max(0, this.hp - dmg * mul);
      C.boss.hp = this.hp;
      hitFlash = 1;
      C.camera3p.shake(ai.state === 'stun' ? 0.25 : 0.12);
      if (this.hp <= 30 && phase === 1 && this.hp > 0) enterPhase2();
      if (this.hp <= 0) { this.alive = false; startDying(); }
    },
  };

  ctx.boss = {
    active: false, defeated: false,
    hp: 60, maxHp: 60,
    // デバッグ用フック(契約外・統合コードは使用しないこと)
    _forceAttack(name) { forceAttack(name); },
  };

  // リトライ: ボス戦(または開戦演出)中に gameover / title へ落ちたら撤去して結界復活
  ctx.on('state', ({ to }) => {
    if ((to === 'gameover' || to === 'title') && (C.boss.active || seq) && !C.boss.defeated) {
      resetFight();
    }
  });
}

// ================= 進行制御 =================
function startIntro() {
  if (promptOn) { C.ui.setPrompt(null); promptOn = false; }
  C.player.setFrozen(true);
  seq = 'break'; seqT = 0; seqFx = 0;
  C.audio.play('burn');
}

function beginBattle() {
  battle = true;
  phase = 1;
  ai.state = 'idle'; ai.t = 0; ai.cd = 1.6; ai.speedMul = 1;
  ai.clawCd = 0; ai.chargeCd = 2.5; ai.slamCd = 1.5; ai.flameCd = 0;
  ai.moveAmt = 0;
  bossEnemy.hp = bossEnemy.maxHp;
  bossEnemy.alive = true;
  C.combat.registerEnemy(bossEnemy);
  C.boss.active = true;
  C.boss.hp = bossEnemy.hp;
  C.setState('boss');
  C.sky.setOverride('boss');
  C.emit('boss-start');
  C.ui.setBossBar(true, '魔獣ヴァルモス');
  C.playerBounds = { minX: BOUNDS.minX, maxX: BOUNDS.maxX, minZ: BOUNDS.minZ, maxZ: BOUNDS.maxZ };
  walls.visible = true;
}

function enterPhase2() {
  phase = 2;
  ai.speedMul = 1.3;
  ai.state = 'rage'; ai.t = 0;
  eyeMat.color.setHex(0xff3555); eyeMat.emissive.setHex(0xff3555);
  crackMat.color.setHex(0xff2848); crackMat.emissive.setHex(0xff2848);
  mawMat.color.setHex(0xff4060); mawMat.emissive.setHex(0xff4060);
  TMP.v1.copy(bossRoot.position); TMP.v1.y += 2.5;
  C.effects.burst(TMP.v1, 'magic', { count: 40, scale: 2 });
  C.camera3p.shake(0.6);
  C.audio.play('burn');
  C.emit('boss-phase', { phase: 2 });
}

function startDying() {
  battle = false;
  seq = 'dying'; seqT = 0; seqFx = 0;
  for (const r of rings) { r.active = false; r.mesh.visible = false; }
  for (const b of bolts) { b.active = false; b.mesh.visible = false; }
  C.camera3p.shake(0.5);
  C.audio.play('kill');
}

function finishDefeat() {
  bossRoot.visible = false;
  C.boss.defeated = true;
  C.boss.active = false;
  C.boss.hp = 0;
  C.playerBounds = null;
  walls.visible = false;
  C.emit('boss-defeated');
  C.ui.setBossBar(false);
  C.sky.setOverride(null);
  C.camera3p.cinematic('ending');
  seq = 'endwait'; seqT = 0;
}

function resetFight() {
  seq = null; seqT = 0;
  battle = false;
  phase = 1;
  hitFlash = 0;
  bossEnemy.alive = false;
  bossEnemy.hp = bossEnemy.maxHp;
  const i = C.combat.enemies.indexOf(bossEnemy);
  if (i >= 0) C.combat.enemies.splice(i, 1);
  bossRoot.visible = false;
  bossRoot.position.copy(spawnPos);
  bossRoot.rotation.set(0, 0, 0);
  body.rotation.set(0, 0, 0);
  body.position.y = 2.5;
  ai.state = 'idle'; ai.t = 0; ai.cd = 1.6; ai.speedMul = 1; ai.heading = 0; ai.moveAmt = 0;
  eyeMat.color.setHex(0xb44dff); eyeMat.emissive.setHex(0xb44dff); eyeMat.emissiveIntensity = 2.4;
  crackMat.color.setHex(0x8a2be2); crackMat.emissive.setHex(0x8a2be2); crackMat.emissiveIntensity = 1.5;
  mawMat.color.setHex(0xa030ff); mawMat.emissive.setHex(0xa030ff);
  matBody.emissive.setHex(0x000000);
  auraMat.opacity = 0;
  pose.eyes = 2.4; pose.maw = 0.4;
  barrier.visible = true; gateRing.visible = true; runeRing.visible = true;
  barrierMat.uniforms.uBreak.value = 0;
  for (const r of rings) { r.active = false; r.mesh.visible = false; }
  for (const b of bolts) { b.active = false; b.mesh.visible = false; }
  walls.visible = false;
  C.playerBounds = null;
  C.boss.active = false;
  C.boss.hp = bossEnemy.maxHp;
  C.ui.setBossBar(false);
  C.sky.setOverride(null);
  C.camera3p.cinematic(null);
  C.player.setFrozen(false);
  nearGate = false; promptOn = false;
}

// ================= 開戦/撃破シーケンス =================
function updateSeq(dt) {
  seqT += dt;
  const gate = C.world.castleGatePos;

  if (seq === 'break') {
    // 結界の砕散: 渦が過熱しながら崩れる
    barrierMat.uniforms.uBreak.value = smoothstep(0, 1.6, seqT);
    gateRingMat.emissiveIntensity = 1.7 + seqT * 2.2;
    seqFx -= dt;
    if (seqFx <= 0) {
      seqFx = 0.18;
      TMP.v1.set(
        gate.x + (Math.random() - 0.5) * 11,
        barrier.position.y + (Math.random() - 0.5) * 7,
        gate.z + (Math.random() - 0.5) * 1.5);
      C.effects.burst(TMP.v1, 'magic', { count: 14 });
      if (Math.random() < 0.4) C.audio.play('burn');
    }
    if (seqT >= 1.6) {
      barrier.visible = false; gateRing.visible = false; runeRing.visible = false;
      TMP.v1.copy(barrier.position);
      C.effects.burst(TMP.v1, 'magic', { count: 70, scale: 2.4 });
      C.audio.play('burn');
      C.camera3p.shake(0.55);
      // 降臨開始
      bossRoot.position.copy(spawnPos);
      bossRoot.position.y = spawnPos.y + 42;
      bossRoot.rotation.set(0, 0, 0);
      ai.heading = 0; // 南(プレイヤー側)を向く
      bossRoot.visible = true;
      seq = 'descend'; seqT = 0;
    }
  } else if (seq === 'descend') {
    const k = Math.min(1, seqT / 0.9);
    bossRoot.position.y = spawnPos.y + 42 * (1 - k * k);
    if (k >= 1) {
      bossRoot.position.y = spawnPos.y;
      C.camera3p.shake(0.9);
      TMP.v1.copy(bossRoot.position); TMP.v1.y += 0.4;
      C.effects.burst(TMP.v1, 'dust', { count: 46, scale: 2.6 });
      C.effects.burst(TMP.v1, 'magic', { count: 24, scale: 1.6 });
      C.audio.play('hit');
      seq = 'roar'; seqT = 0; seqFx = 0;
    }
  } else if (seq === 'roar') {
    if (seqFx === 0 && seqT >= 0.15) {
      seqFx = 1;
      C.audio.play('burn');
      C.camera3p.shake(0.4);
    }
    if (seqT >= 1.4) {
      C.camera3p.cinematic('bossIntro');
      seq = 'cine'; seqT = 0;
    }
  } else if (seq === 'cine') {
    if (seqT >= 3.1) {
      C.camera3p.cinematic(null);
      C.player.setFrozen(false);
      seq = null;
      beginBattle();
    }
  } else if (seq === 'dying') {
    // スロー崩落: 亀裂から紫光が漏れ、体が沈む
    const k = smoothstep(0, 3.4, seqT);
    body.rotation.z = k * 0.55;
    body.position.y = 2.5 - k * 1.5;
    crackMat.emissiveIntensity = 1.5 + k * 3.5;
    pose.eyes = lerp(pose.eyes, 0.2, k);
    seqFx -= dt;
    if (seqFx <= 0) {
      seqFx = 0.22;
      TMP.v1.copy(bossRoot.position);
      TMP.v1.x += (Math.random() - 0.5) * 3.5;
      TMP.v1.y += 1.2 + Math.random() * 2.4;
      TMP.v1.z += (Math.random() - 0.5) * 3.5;
      C.effects.burst(TMP.v1, 'magic', { count: 12 });
      C.camera3p.shake(0.1);
    }
    if (seqT >= 3.4) {
      TMP.v1.copy(bossRoot.position); TMP.v1.y += 1.6;
      C.effects.burst(TMP.v1, 'death', { count: 60, scale: 2.8 });
      C.effects.burst(TMP.v1, 'magic', { count: 60, scale: 2.4 });
      C.audio.play('kill');
      finishDefeat();
    }
  } else if (seq === 'endwait') {
    if (seqT >= 3.0) {
      seq = null;
      C.setState('ending');
    }
  }
}

// ================= 攻撃開始 =================
function startClaw() {
  ai.state = 'claw'; ai.t = 0; ai.clawHitDone = false;
  ai.clawCd = 1.8 / ai.speedMul;
}
function startCharge() {
  ai.state = 'chargeWind'; ai.t = 0;
  ai.dashRemain = phase === 2 ? 2 : 1;
  ai.chargeCd = 8 / ai.speedMul;
  C.audio.play('burn');
}
function startSlam() {
  ai.state = 'slamWind'; ai.t = 0;
  ai.slamCd = 8 / ai.speedMul;
}
function startFlame() {
  ai.state = 'flame'; ai.t = 0; ai.fired = false;
  ai.flameCd = 4.5 / ai.speedMul;
}
function forceAttack(name) {
  if (!battle || (ai.state !== 'idle' && ai.state !== 'recover')) return;
  if (name === 'claw') startClaw();
  else if (name === 'charge') startCharge();
  else if (name === 'slam') startSlam();
  else if (name === 'flame') startFlame();
  else if (name === 'stun') { ai.state = 'stun'; ai.t = 0; }
}

function selectAttack(dist) {
  if (dist > 12 && ai.chargeCd <= 0) return startCharge();
  if (dist < 5 && ai.clawCd <= 0) return startClaw();
  if (dist >= 5 && dist <= 12) {
    if (ai.slamCd <= 0 && (ai.flameCd > 0 || Math.random() < 0.55)) return startSlam();
    if (ai.flameCd <= 0) return startFlame();
  }
  if (ai.flameCd <= 0 && dist >= 5) return startFlame();
  ai.cd = 0.4;
}

function endAttack(cd) {
  ai.state = 'idle';
  ai.t = 0;
  ai.cd = cd / ai.speedMul;
}

// ================= 弾/衝撃波 =================
function spawnRing(x, z) {
  for (const r of rings) {
    if (r.active) continue;
    r.active = true; r.hitDone = false; r.r = 0.6;
    r.mesh.position.set(x, gY(x, z) + 0.5, z);
    r.mesh.scale.set(0.6, 0.6, 1);
    r.mat.opacity = 0.95;
    r.mesh.visible = true;
    return;
  }
}

function updateRings(dt) {
  const p = C.player;
  for (const r of rings) {
    if (!r.active) continue;
    r.r += 13 * dt;
    r.mesh.scale.set(r.r, r.r, 1);
    r.mat.opacity = clamp(1 - r.r / 26, 0, 1) * 0.95;
    if (!r.hitDone && p) {
      const dx = p.position.x - r.mesh.position.x, dz = p.position.z - r.mesh.position.z;
      const d = Math.hypot(dx, dz);
      if (Math.abs(d - r.r) < 1.3 && p.onGround) {
        r.hitDone = true;
        p.damage(1.0, r.mesh.position);
        C.camera3p.shake(0.4);
      }
    }
    if (r.r > 26) { r.active = false; r.mesh.visible = false; }
  }
}

function fireBolts() {
  head.getWorldPosition(TMP.v1);
  TMP.v2.copy(C.player.position); TMP.v2.y += 1.2;
  TMP.v2.sub(TMP.v1);
  if (TMP.v2.lengthSq() < 0.01) TMP.v2.set(0, 0, 1);
  TMP.v2.normalize();
  let n = 0;
  for (const b of bolts) {
    if (b.active || n >= 3) continue;
    const off = (n - 1) * 0.32; // 扇状 ±18度
    const ca = Math.cos(off), sa = Math.sin(off);
    b.vel.set(TMP.v2.x * ca + TMP.v2.z * sa, TMP.v2.y * 0.5, -TMP.v2.x * sa + TMP.v2.z * ca);
    b.vel.normalize().multiplyScalar(20);
    b.mesh.position.copy(TMP.v1);
    TMP.v3.copy(TMP.v1).add(b.vel);
    b.mesh.lookAt(TMP.v3);
    b.life = 0;
    b.active = true;
    b.mesh.visible = true;
    n++;
  }
  C.audio.play('burn');
}

function updateBolts(dt) {
  const p = C.player;
  for (const b of bolts) {
    if (!b.active) continue;
    b.life += dt;
    b.mesh.position.addScaledVector(b.vel, dt);
    b.mesh.rotation.z += dt * 9;
    const m = b.mesh.position;
    let hit = false;
    if (p) {
      TMP.v2.copy(p.position); TMP.v2.y += 1.0;
      if (m.distanceToSquared(TMP.v2) < 1.44) {
        p.damage(0.5, m);
        hit = true;
      }
    }
    if (!hit && m.y < gY(m.x, m.z) + 0.25) hit = true;
    if (hit || b.life > 4) {
      if (hit) C.effects.burst(m, 'magic', { count: 14 });
      b.active = false;
      b.mesh.visible = false;
    }
  }
}

// ================= 戦闘AI =================
function updateAI(dt) {
  const p = C.player.position;
  const bp = bossRoot.position;
  const dx = p.x - bp.x, dz = p.z - bp.z;
  const dist = Math.hypot(dx, dz);
  const angTo = Math.atan2(dx, dz);
  ai.t += dt;
  ai.clawCd -= dt; ai.chargeCd -= dt; ai.slamCd -= dt; ai.flameCd -= dt;
  let speed = 0;

  switch (ai.state) {
    case 'idle': {
      ai.heading = dampAngle(ai.heading, angTo, 3 * ai.speedMul, dt);
      if (dist > 4.4) speed = 4.8 * ai.speedMul;
      ai.cd -= dt;
      if (ai.cd <= 0) selectAttack(dist);
      break;
    }
    case 'rage': { // 第2形態移行の咆哮
      if (ai.t >= 1.3) endAttack(0.7);
      break;
    }
    case 'claw': { // ①爪
      ai.heading = dampAngle(ai.heading, angTo, ai.t < 0.5 ? 4 : 0.5, dt);
      if (!ai.clawHitDone && ai.t >= 0.55) {
        ai.clawHitDone = true;
        C.audio.play('hit');
        if (dist < 5 && Math.abs(angleDelta(ai.heading, angTo)) < 1.0) {
          C.player.damage(0.5, bp);
        }
      }
      if (ai.t >= 1.25) endAttack(0.9);
      break;
    }
    case 'chargeWind': { // ②突進: 2秒溜め(前傾+唸り)
      ai.heading = dampAngle(ai.heading, angTo, 1.3, dt);
      if (ai.t >= 2.0) {
        ai.dashDir.set(Math.sin(ai.heading), 0, Math.cos(ai.heading));
        ai.state = 'chargeDash'; ai.t = 0; ai.hitDone = false;
        C.audio.play('hit');
      }
      break;
    }
    case 'chargeDash': {
      const v = 26 * ai.speedMul;
      bp.x += ai.dashDir.x * v * dt;
      bp.z += ai.dashDir.z * v * dt;
      speed = v;
      if (!ai.hitDone && dist < 3.4) {
        ai.hitDone = true;
        C.player.damage(1.0, bp);
        C.camera3p.shake(0.5);
      }
      const cxp = clamp(bp.x, BOUNDS.minX + 3, BOUNDS.maxX - 3);
      const czp = clamp(bp.z, BOUNDS.minZ + 3, BOUNDS.maxZ - 3);
      const wallHit = (cxp !== bp.x || czp !== bp.z) || ai.t > 3;
      bp.x = cxp; bp.z = czp;
      if (wallHit) {
        ai.dashRemain--;
        TMP.v1.copy(bp); TMP.v1.y += 1.5;
        C.effects.burst(TMP.v1, 'dust', { count: 30, scale: 2 });
        C.camera3p.shake(0.6);
        C.audio.play('hit');
        if (ai.hitDone) endAttack(1.2);          // 命中していたら軽い硬直のみ
        else if (ai.dashRemain > 0) { ai.state = 'chargeTurn'; ai.t = 0; } // 第2形態: 2連続
        else { ai.state = 'stun'; ai.t = 0; C.audio.play('block'); }       // 壁衝突スタン
      }
      break;
    }
    case 'chargeTurn': {
      ai.heading = dampAngle(ai.heading, angTo, 6, dt);
      if (ai.t >= 0.55) {
        ai.dashDir.set(Math.sin(ai.heading), 0, Math.cos(ai.heading));
        ai.state = 'chargeDash'; ai.t = 0; ai.hitDone = false;
        C.audio.play('hit');
      }
      break;
    }
    case 'stun': { // 3秒無防備(被ダメ2倍)
      if (ai.t >= 3.0) endAttack(0.8);
      break;
    }
    case 'slamWind': { // ③大地砕き: 溜め→跳躍
      ai.heading = dampAngle(ai.heading, angTo, 3, dt);
      if (ai.t >= 0.7) {
        ai.leapFrom.copy(bp);
        ai.leapTo.set(
          clamp(p.x, BOUNDS.minX + 4, BOUNDS.maxX - 4), 0,
          clamp(p.z, BOUNDS.minZ + 4, BOUNDS.maxZ - 4));
        TMP.v1.set(ai.leapTo.x - ai.leapFrom.x, 0, ai.leapTo.z - ai.leapFrom.z);
        const d = TMP.v1.length();
        if (d > 16) {
          TMP.v1.multiplyScalar(16 / d);
          ai.leapTo.set(ai.leapFrom.x + TMP.v1.x, 0, ai.leapFrom.z + TMP.v1.z);
        }
        ai.state = 'slamAir'; ai.t = 0;
        C.audio.play('jump');
      }
      break;
    }
    case 'slamAir': {
      const k = Math.min(1, ai.t / 0.85);
      bp.x = lerp(ai.leapFrom.x, ai.leapTo.x, k);
      bp.z = lerp(ai.leapFrom.z, ai.leapTo.z, k);
      bp.y = lerp(gY(ai.leapFrom.x, ai.leapFrom.z), gY(ai.leapTo.x, ai.leapTo.z), k) + Math.sin(k * Math.PI) * 6;
      if (k >= 1) {
        bp.y = gY(bp.x, bp.z);
        spawnRing(bp.x, bp.z);
        TMP.v1.copy(bp); TMP.v1.y += 0.4;
        C.effects.burst(TMP.v1, 'dust', { count: 40, scale: 2.4 });
        C.effects.burst(TMP.v1, 'magic', { count: 20, scale: 1.5 });
        C.camera3p.shake(0.75);
        C.audio.play('hit');
        ai.state = 'slamLand'; ai.t = 0;
      }
      break;
    }
    case 'slamLand': {
      if (ai.t >= 1.0) endAttack(1.2);
      break;
    }
    case 'flame': { // ④魔炎弾: 仰け反り→3連扇状
      ai.heading = dampAngle(ai.heading, angTo, 2.5, dt);
      if (!ai.fired && ai.t >= 0.85) {
        ai.fired = true;
        fireBolts();
      }
      if (ai.t >= 1.55) endAttack(1.3);
      break;
    }
  }

  // 移動(前進)と接地
  if (speed > 0 && ai.state !== 'chargeDash') {
    bp.x += Math.sin(ai.heading) * speed * dt;
    bp.z += Math.cos(ai.heading) * speed * dt;
  }
  if (ai.state !== 'slamAir') {
    bp.x = clamp(bp.x, BOUNDS.minX + 3, BOUNDS.maxX - 3);
    bp.z = clamp(bp.z, BOUNDS.minZ + 3, BOUNDS.maxZ - 3);
    bp.y = damp(bp.y, gY(bp.x, bp.z), 18, dt);
  }
  ai.gaitT += speed * dt * 0.55;
  ai.moveAmt = damp(ai.moveAmt, speed > 0.5 ? 1 : 0, 8, dt);
  bossRoot.rotation.y = ai.heading;
}

// ================= プロシージャルアニメ =================
function computePoseTargets(t) {
  TGT.pitch = 0; TGT.roll = 0; TGT.y = 0; TGT.headP = 0; TGT.headY = 0;
  TGT.jaw = 0.06; TGT.crouch = 0; TGT.paw = 0;
  TGT.maw = phase === 2 ? 0.9 : 0.4;
  TGT.eyes = phase === 2 ? 2.8 : 2.4;

  const st = seq || ai.state;
  if (st === 'descend') {
    TGT.crouch = 0.55; TGT.jaw = 0.35; TGT.pitch = 0.1;
  } else if (st === 'roar' || st === 'rage' || st === 'cine') {
    const rt = st === 'cine' ? Math.max(0, 1 - seqT * 1.5) : 1;
    TGT.pitch = -0.32 * rt;            // 仰け反り
    TGT.headP = -0.85 * rt;
    TGT.jaw = 0.85 * rt;
    TGT.y = 0.15 * rt;
    TGT.eyes = 3.2;
  } else if (st === 'dying') {
    TGT.headP = 0.6; TGT.jaw = 0.5; TGT.crouch = 0.6; TGT.eyes = pose.eyes;
  } else if (st === 'claw') {
    if (ai.t < 0.55) { TGT.paw = 1; TGT.roll = -0.14; TGT.headP = -0.15; TGT.pitch = -0.08; } // 予備動作: 前肢を大きく振り上げ
    else { TGT.paw = -0.55; TGT.pitch = 0.22; TGT.headP = 0.2; TGT.jaw = 0.5; }               // 振り下ろし
  } else if (st === 'chargeWind') {
    TGT.pitch = 0.3; TGT.headP = 0.45; TGT.crouch = 0.25; TGT.jaw = 0.4;   // 前傾+唸り
    TGT.roll = Math.sin(t * 42) * 0.035;                                   // 震え
    TGT.eyes = 3.4;
  } else if (st === 'chargeDash') {
    TGT.pitch = 0.18; TGT.headP = 0.25; TGT.jaw = 0.6;
  } else if (st === 'chargeTurn') {
    TGT.pitch = 0.1; TGT.crouch = 0.2;
  } else if (st === 'stun') {
    TGT.headP = 0.75; TGT.crouch = 0.4; TGT.jaw = 0.42;                    // 頭を垂れる
    TGT.eyes = 0.05;                                                       // 目の発光が消える
    TGT.roll = Math.sin(t * 2.2) * 0.04;
  } else if (st === 'slamWind') {
    TGT.crouch = 0.85; TGT.pitch = 0.18; TGT.headP = 0.3;                  // 深い沈み込み
  } else if (st === 'slamAir') {
    TGT.crouch = 0.5; TGT.pitch = -0.15 + Math.min(1, ai.t / 0.85) * 0.4; TGT.jaw = 0.5;
  } else if (st === 'slamLand') {
    TGT.crouch = 0.55; TGT.pitch = 0.12; TGT.headP = 0.25;
  } else if (st === 'flame') {
    const k = ai.fired ? Math.max(0, 1 - (ai.t - 0.85) * 2.2) : Math.min(1, ai.t / 0.85);
    TGT.headP = -0.55 * k; TGT.pitch = -0.12 * k; TGT.jaw = 0.85 * k;      // 仰け反り+口内発光
    TGT.maw = 0.4 + k * 3.2;
  } else { // idle / 歩行
    TGT.y = Math.sin(t * 1.9) * 0.05;
    if (battle && !seq) {
      const dyaw = angleDelta(ai.heading, Math.atan2(
        C.player.position.x - bossRoot.position.x,
        C.player.position.z - bossRoot.position.z));
      TGT.headY = clamp(dyaw, -0.5, 0.5);
    }
  }
}

function animateBoss(dt, t) {
  computePoseTargets(t);
  pose.pitch = damp(pose.pitch, TGT.pitch, 9, dt);
  pose.roll = damp(pose.roll, TGT.roll, 9, dt);
  pose.y = damp(pose.y, TGT.y, 9, dt);
  pose.headP = damp(pose.headP, TGT.headP, 10, dt);
  pose.headY = damp(pose.headY, TGT.headY, 7, dt);
  pose.jaw = damp(pose.jaw, TGT.jaw, 12, dt);
  pose.crouch = damp(pose.crouch, TGT.crouch, 9, dt);
  pose.paw = damp(pose.paw, TGT.paw, 13, dt);
  pose.maw = damp(pose.maw, TGT.maw, 10, dt);
  pose.eyes = damp(pose.eyes, TGT.eyes, 10, dt);

  if (seq !== 'dying') {
    body.rotation.x = pose.pitch;
    body.rotation.z = pose.roll;
    body.position.y = 2.5 + pose.y - pose.crouch * 0.85;
  } else {
    body.rotation.x = pose.pitch; // z/y は updateSeq が制御
  }
  neck.rotation.x = pose.headP * 0.55;
  neck.rotation.y = pose.headY;
  head.rotation.x = pose.headP * 0.55;
  jaw.rotation.x = pose.jaw;

  // 四足の重い歩み(対角ペア)
  const PH = [0, Math.PI, Math.PI, 0];
  for (let i = 0; i < 4; i++) {
    const L = legs[i];
    const swing = Math.sin(ai.gaitT + PH[i]) * 0.55 * ai.moveAmt;
    let ux = swing - pose.crouch * 0.55;
    let lx = Math.max(0, -Math.sin(ai.gaitT + PH[i])) * 0.7 * ai.moveAmt + pose.crouch * 1.05;
    if (i === 0) { ux -= pose.paw * 1.5; lx += Math.max(0, pose.paw) * 1.1; } // 右前肢(爪攻撃)
    L.upper.rotation.x = ux;
    L.lower.rotation.x = lx;
  }
  // 尻尾のうねり
  for (let i = 0; i < tailSegs.length; i++) {
    tailSegs[i].rotation.y = Math.sin(t * 2.1 + i * 0.7) * 0.15 * (1 + ai.moveAmt * 0.8);
    tailSegs[i].rotation.x = Math.sin(t * 1.3 + i * 0.5) * 0.05 + pose.crouch * 0.08;
  }

  // 発光(目・口・被弾明滅)
  eyeMat.emissiveIntensity = pose.eyes + (phase === 2 ? Math.sin(t * 7) * 0.25 : 0);
  mawMat.emissiveIntensity = pose.maw;
  if (hitFlash > 0) {
    hitFlash = Math.max(0, hitFlash - dt * 4.5);
    const f = hitFlash * hitFlash;
    matBody.emissive.setRGB(0.5 * f, 0.16 * f, 0.75 * f);
    if (seq !== 'dying') crackMat.emissiveIntensity = (phase === 2 ? 2.1 : 1.5) + f * 2.5;
  }
  // 第2形態の赤いオーラ
  if (phase === 2 && bossEnemy.alive) {
    auraMat.opacity = damp(auraMat.opacity, 0.11 + Math.sin(t * 5.5) * 0.04, 6, dt);
    const s = 1 + Math.sin(t * 4.7) * 0.045;
    aura.scale.setScalar(s);
  } else {
    auraMat.opacity = damp(auraMat.opacity, 0, 8, dt);
  }
}

// ================= 結界の接近判定 =================
function updateGate() {
  const pl = C.player;
  const gate = C.world.castleGatePos;
  const dx = pl.position.x - gate.x, dz = pl.position.z - gate.z;
  if (dx * dx + dz * dz < 36) { // 6m以内
    if (!nearGate) {
      nearGate = true;
      if (pl.spiritOrbs < 3) {
        C.ui.showMessage('結界は固く閉ざされている', { sub: '気の珠が3つ必要だ' });
      }
    }
    if (pl.spiritOrbs >= 3) {
      if (!promptOn) { C.ui.setPrompt('E: 結界を破る'); promptOn = true; }
      if (C.input.justPressed('KeyE')) startIntro();
    } else if (promptOn) {
      C.ui.setPrompt(null); promptOn = false;
    }
  } else {
    nearGate = false;
    if (promptOn) { C.ui.setPrompt(null); promptOn = false; }
  }
}

// ================= update =================
export function update(ctx, dt) {
  if (!C || !bossRoot) return;
  const t = ctx.time.elapsed;

  // 結界の常時演出
  if (barrier.visible) {
    barrierMat.uniforms.uTime.value = t;
    if (!seq) gateRingMat.emissiveIntensity = 1.7 + Math.sin(t * 2.1) * 0.45;
    runeMat.opacity = 0.30 + Math.sin(t * 1.6) * 0.08;
    runeRing.rotation.z = t * 0.15;
  }
  if (walls.visible) wallMat.uniforms.uTime.value = t;

  if (seq) updateSeq(dt);
  else if (battle && ctx.state === 'boss' && bossEnemy.alive) updateAI(dt);

  if (battle || seq === 'dying') {
    updateRings(dt);
    updateBolts(dt);
  }
  if (bossRoot.visible) animateBoss(dt, t);

  // 結界前の接近判定(通常フィールドのみ)
  if (ctx.state === 'playing' && !seq && !battle && !ctx.boss.defeated && barrier.visible) {
    updateGate();
  }
}
