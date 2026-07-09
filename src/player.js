// player.js — 緑衣の勇者(プロシージャルモデル・アニメーション・操作・戦闘)
// 契約: ARCHITECTURE.md / ctx.player を完全実装
import * as THREE from 'three';
import {
  toonMaterial, clamp, lerp, damp, dampAngle, angleDelta, smoothstep, part, TMP,
} from './util.js';

// ---------------- 定数 ----------------
const GRAVITY = -30;
const JUMP_V = 11;
const RUN_SPEED = 6.2;
const DASH_MUL = 1.65;
const ROLL_TIME = 0.45;
const ROLL_SPEED = 9.2;
const ROLL_COST = 25;
const DASH_COST = 20;      // /s
const REGEN_RATE = 25;     // /s
const REGEN_DELAY = 1.0;   // s
const EXHAUST_TIME = 3.0;  // s
const PLAYER_R = 0.42;     // 衝突半径
const SHEATHE_DELAY = 4.0; // 戦闘後の自動納刀
const HURT_TIME = 0.38;
const INVULN_TIME = 1.0;

// 3段コンボ(dur秒 / active0..1 はdurに対する割合 / lunge=前進速度)
const ATTACKS = [
  { dur: 0.42, a0: 0.34, a1: 0.62, dmg: 1.0, lunge: 3.8, sfx: 'sword1' },
  { dur: 0.46, a0: 0.36, a1: 0.66, dmg: 1.0, lunge: 4.0, sfx: 'sword2' },
  { dur: 0.74, a0: 0.34, a1: 0.78, dmg: 1.5, lunge: 2.6, sfx: 'sword3' },
];

// ---------------- モジュール状態 ----------------
let root, spinG, inner, hips, torso, headG, capMid, capTip;
let shR, elbR, shL, elbL, legR, kneeR, legL, kneeL;
let gripR, shieldGrip, backSheath, backShieldG, bootR, bootL, eyeR, eyeL;
let sword, shield;
let api = null;
let vel = null;
let facing = Math.PI;
let onGround = true, frozen = false, dead = false, diedEmitted = false;
let armed = false, blocking = false;
let action = null;            // {type:'atk'|'roll'|'hurt'|'dead', t, dur, idx, ...}
let attackBuf = 0;            // 攻撃入力バッファ残秒
let invulnT = 0, combatT = 0;
let regenDelay = 0, exhaustT = 0;
let runPhase = 0, prevStepSin = 0, moveAmt = 0, strafeX = 0, strafeZ = 1;
let landT = 0, landHeavy = false;
let idleT = 0, lookNext = 3.5, lookT = 0, lookDir = 0;
let blinkT = 2.5, blinkAnim = 0;
let swingSeq = 0, spinExtra = 0, elapsed = 0;

const _hitPos = new THREE.Vector3();
const _hit = { pos: _hitPos, radius: 1.5, damage: 1, swingId: 0 };
const _fx = new THREE.Vector3();
const _fwd = new THREE.Vector3();
const _rgt = new THREE.Vector3();
const _mv = new THREE.Vector3();

// ポーズターゲット(毎フレーム使い回し)
const PT = {
  hipsY: 0, hipsRY: 0,
  torsoRX: 0, torsoRY: 0, torsoRZ: 0,
  headRX: 0, headRY: 0, headRZ: 0,
  shRX_R: 0.10, shRZ_R: -0.10, elbR_: 0.25,
  shRX_L: 0.10, shRZ_L: 0.10, elbL_: 0.25,
  legR_: 0, kneeR_: 0.06, legL_: 0, kneeL_: 0.06,
};
function resetPose() {
  PT.hipsY = 0; PT.hipsRY = 0;
  PT.torsoRX = 0.02; PT.torsoRY = 0; PT.torsoRZ = 0;
  PT.headRX = 0; PT.headRY = 0; PT.headRZ = 0;
  PT.shRX_R = 0.10; PT.shRZ_R = -0.12; PT.elbR_ = 0.25;
  PT.shRX_L = 0.10; PT.shRZ_L = 0.12; PT.elbL_ = 0.25;
  PT.legR_ = 0; PT.kneeR_ = 0.06; PT.legL_ = 0; PT.kneeL_ = 0.06;
  if (armed) { PT.shRX_R = 0.16; PT.elbR_ = 0.45; PT.elbL_ = 0.40; }
}

// ---------------- モデル生成 ----------------
function buildModel() {
  const M = {
    tunic: toonMaterial(0x3c8f4f),
    tunicDk: toonMaterial(0x2f6e3d),
    skin: toonMaterial(0xf2c69c),
    hair: toonMaterial(0xe3b34f),
    white: toonMaterial(0xf0ecdd),
    boots: toonMaterial(0x6e4a2c),
    leather: toonMaterial(0x8a6136),
    dark: toonMaterial(0x40301e),
    gold: toonMaterial(0xc9a227),
    navy: toonMaterial(0x2b3a55),
    steel: toonMaterial(0x9fb2bd),
    shieldF: toonMaterial(0x44525e),
    eye: toonMaterial(0x231b12),
    blade: toonMaterial(0xe8f2f6, { emissive: new THREE.Color(0x33e0c8), emissiveIntensity: 0.38 }),
    emblem: toonMaterial(0x33e0c8, { emissive: new THREE.Color(0x33e0c8), emissiveIntensity: 1.1 }),
  };

  root = new THREE.Group();
  spinG = new THREE.Group(); spinG.position.y = 0.55; root.add(spinG);
  inner = new THREE.Group(); inner.position.y = -0.55; spinG.add(inner);
  hips = new THREE.Group(); hips.position.y = 0.92; inner.add(hips);

  // --- 脚(右=-X / 左=+X。モデルは+Z向き) ---
  const thighGeo = new THREE.CylinderGeometry(0.078, 0.066, 0.40, 7);
  const shinGeo = new THREE.CylinderGeometry(0.056, 0.080, 0.32, 7);
  const footGeo = new THREE.BoxGeometry(0.11, 0.09, 0.20);
  const cuffGeo = new THREE.CylinderGeometry(0.086, 0.082, 0.09, 7);
  const mkLeg = (sx) => {
    const hip = new THREE.Group(); hip.position.set(sx * 0.105, -0.03, 0); hips.add(hip);
    part(thighGeo, M.white, 0, -0.20, 0, hip);
    const knee = new THREE.Group(); knee.position.set(0, -0.40, 0); hip.add(knee);
    part(cuffGeo, M.boots, 0, -0.11, 0, knee);
    part(shinGeo, M.boots, 0, -0.26, 0, knee);
    const foot = part(footGeo, M.boots, 0, -0.415, 0.045, knee);
    return { hip, knee, foot };
  };
  const LR = mkLeg(-1), LL = mkLeg(1);
  legR = LR.hip; kneeR = LR.knee; bootR = LR.foot;
  legL = LL.hip; kneeL = LL.knee; bootL = LL.foot;

  // --- 胴 ---
  torso = new THREE.Group(); torso.position.y = 0.04; hips.add(torso);
  const skirt = part(new THREE.CylinderGeometry(0.185, 0.295, 0.30, 7), M.tunic, 0, 0.09, 0, torso);
  skirt.rotation.y = Math.PI / 7;
  part(new THREE.CylinderGeometry(0.225, 0.24, 0.075, 7), M.dark, 0, 0.205, 0, torso); // ベルト
  part(new THREE.BoxGeometry(0.075, 0.06, 0.03), M.gold, 0, 0.205, 0.225, torso);     // バックル
  part(new THREE.CylinderGeometry(0.155, 0.215, 0.34, 7), M.tunic, 0, 0.385, 0, torso); // 胸
  part(new THREE.CylinderGeometry(0.105, 0.15, 0.10, 7), M.tunicDk, 0, 0.545, 0, torso); // 襟
  // 背中の鞘・盾アンカー(柄が右肩上・切先が左腰)
  backSheath = new THREE.Group();
  backSheath.position.set(-0.15, 0.50, -0.185);
  backSheath.rotation.set(0.10, 0, -2.60);
  torso.add(backSheath);
  part(new THREE.BoxGeometry(0.095, 0.74, 0.05), M.leather, 0, 0.44, 0, backSheath);
  part(new THREE.BoxGeometry(0.11, 0.06, 0.06), M.gold, 0, 0.62, 0, backSheath);
  backShieldG = new THREE.Group();
  backShieldG.position.set(0.02, 0.30, -0.27);
  backShieldG.rotation.set(0, Math.PI, 0.08);
  torso.add(backShieldG);

  // --- 腕 ---
  const upperGeo = new THREE.CylinderGeometry(0.056, 0.05, 0.26, 7);
  const foreGeo = new THREE.CylinderGeometry(0.052, 0.068, 0.24, 7);
  const handGeo = new THREE.SphereGeometry(0.056, 7, 6);
  const padGeo = new THREE.SphereGeometry(0.088, 7, 6);
  const mkArm = (sx) => {
    const sh = new THREE.Group(); sh.position.set(sx * 0.265, 0.50, 0); torso.add(sh);
    const pad = part(padGeo, M.tunic, sx * 0.01, 0.015, 0, sh);
    pad.scale.set(1, 0.8, 0.9);
    part(upperGeo, M.white, 0, -0.145, 0, sh);
    const elb = new THREE.Group(); elb.position.set(0, -0.28, 0); sh.add(elb);
    part(foreGeo, M.leather, 0, -0.125, 0, elb);
    part(handGeo, M.skin, 0, -0.27, 0, elb);
    return { sh, elb };
  };
  const AR = mkArm(-1), AL = mkArm(1);
  shR = AR.sh; elbR = AR.elb; shL = AL.sh; elbL = AL.elb;
  gripR = new THREE.Group(); gripR.position.set(0, -0.28, 0.01); gripR.rotation.x = 2.35; elbR.add(gripR);
  shieldGrip = new THREE.Group(); shieldGrip.position.set(0.09, -0.15, 0); shieldGrip.rotation.set(0, Math.PI / 2, Math.PI / 2); elbL.add(shieldGrip);

  // --- 頭 ---
  headG = new THREE.Group(); headG.position.y = 0.585; torso.add(headG);
  const face = part(new THREE.SphereGeometry(0.155, 9, 8), M.skin, 0, 0.105, 0.012, headG);
  face.scale.set(0.98, 1, 0.94);
  // 耳(横に少し尖る)
  const earGeo = new THREE.ConeGeometry(0.03, 0.09, 4);
  const earR = part(earGeo, M.skin, -0.15, 0.10, -0.01, headG); earR.rotation.z = Math.PI / 2 + 0.15;
  const earL = part(earGeo, M.skin, 0.15, 0.10, -0.01, headG); earL.rotation.z = -Math.PI / 2 - 0.15;
  // 目
  const eyeGeo = new THREE.BoxGeometry(0.03, 0.062, 0.02);
  eyeR = part(eyeGeo, M.eye, -0.056, 0.105, 0.148, headG);
  eyeL = part(eyeGeo, M.eye, 0.056, 0.105, 0.148, headG);
  // 金髪の前髪
  const bang = part(new THREE.BoxGeometry(0.21, 0.075, 0.06), M.hair, 0, 0.20, 0.105, headG);
  bang.rotation.x = 0.28;
  const tuftR = part(new THREE.BoxGeometry(0.055, 0.12, 0.05), M.hair, -0.105, 0.155, 0.085, headG);
  tuftR.rotation.set(0.15, 0, 0.25);
  const tuftL = part(new THREE.BoxGeometry(0.055, 0.12, 0.05), M.hair, 0.105, 0.155, 0.085, headG);
  tuftL.rotation.set(0.15, 0, -0.25);
  part(new THREE.BoxGeometry(0.05, 0.09, 0.04), M.hair, 0, 0.155, 0.125, headG).rotation.x = 0.35;
  // とんがり頭巾(基部+後ろへ垂れる2節)
  const hood = part(new THREE.ConeGeometry(0.20, 0.26, 8), M.tunic, 0, 0.295, -0.025, headG);
  hood.rotation.x = -0.30;
  part(new THREE.CylinderGeometry(0.20, 0.19, 0.085, 8), M.tunicDk, 0, 0.20, -0.005, headG);
  capMid = new THREE.Group(); capMid.position.set(0, 0.385, -0.09); headG.add(capMid);
  part(new THREE.ConeGeometry(0.098, 0.26, 7), M.tunic, 0, 0.11, 0, capMid);
  capTip = new THREE.Group(); capTip.position.set(0, 0.225, 0); capMid.add(capTip);
  part(new THREE.ConeGeometry(0.047, 0.22, 6), M.tunic, 0, 0.09, 0, capTip);
  part(new THREE.SphereGeometry(0.028, 6, 5), M.tunicDk, 0, 0.205, 0, capTip);

  // --- 剣(グリップ原点、+Yが刃先) ---
  sword = new THREE.Group();
  const blade = part(new THREE.BoxGeometry(0.052, 0.60, 0.016), M.blade, 0, 0.415, 0, sword);
  blade.scale.z = 1; blade.geometry.translate(0, 0, 0);
  const tip = part(new THREE.ConeGeometry(0.037, 0.09, 4), M.blade, 0, 0.755, 0, sword);
  tip.rotation.y = Math.PI / 4; tip.scale.z = 0.3;
  part(new THREE.BoxGeometry(0.16, 0.038, 0.05), M.gold, 0, 0.105, 0, sword);
  part(new THREE.CylinderGeometry(0.021, 0.021, 0.15, 6), M.navy, 0, 0.015, 0, sword);
  part(new THREE.SphereGeometry(0.032, 6, 5), M.gold, 0, -0.065, 0, sword);

  // --- 丸盾(+Zが表) ---
  shield = new THREE.Group();
  const sf = part(new THREE.CylinderGeometry(0.26, 0.235, 0.045, 12), M.shieldF, 0, 0, 0, shield);
  sf.rotation.x = Math.PI / 2;
  const rim = part(new THREE.TorusGeometry(0.245, 0.026, 6, 12), M.gold, 0, 0, 0.02, shield);
  const emb = part(new THREE.CylinderGeometry(0.095, 0.095, 0.022, 3), M.emblem, 0, -0.01, 0.032, shield);
  emb.rotation.x = Math.PI / 2; emb.rotation.z = 0;
  part(new THREE.SphereGeometry(0.045, 7, 6), M.gold, 0, 0.10, 0.035, shield).scale.set(1, 1, 0.55);

  root.userData.rig = { hips, torso, headG, shR, shL, legR, legL, kneeR, kneeL, capMid, inner };
  setArmed(false, true);
  return root;
}

// 武装切替(剣と盾を背中⇔手に付け替え)
function setArmed(v, force) {
  if (armed === v && !force) return;
  armed = v;
  if (v) {
    gripR.add(sword);
    sword.position.set(0, 0.04, 0); sword.rotation.set(0, 0, 0);
    shieldGrip.add(shield);
    shield.position.set(0, 0, 0.02); shield.rotation.set(0, 0, 0);
  } else {
    backSheath.add(sword);
    sword.position.set(0, 0.06, 0); sword.rotation.set(0, 0, 0);
    backShieldG.add(shield);
    shield.position.set(0, 0, 0); shield.rotation.set(0, 0, 0);
  }
}

// ---------------- 死亡 / 蘇生 ----------------
let _ctx = null;
function die() {
  if (dead) return;
  dead = true;
  blocking = false;
  spinExtra = 0;
  action = { type: 'dead', t: 0, dur: 999 };
  if (!diedEmitted) { diedEmitted = true; _ctx.emit('player-died'); }
}
function revive() {
  dead = false; diedEmitted = false; action = null;
  spinG.rotation.set(0, 0, 0); spinExtra = 0;
  invulnT = 1.2; landT = 0; inner.visible = true;
}

// ---------------- init ----------------
export async function init(ctx) {
  _ctx = ctx;
  buildModel();
  vel = new THREE.Vector3();
  if (ctx.world && ctx.world.startPos) root.position.copy(ctx.world.startPos);
  else root.position.set(0, 0, 250);
  root.position.y = ctx.getGroundHeight(root.position.x, root.position.z);
  root.rotation.y = facing;
  ctx.scene.add(root);
  resetPose();
  applyPose(1, 500); // 初期姿勢を即適用(タイトル背景用)

  api = {
    obj: root,
    position: root.position,
    heading: facing,
    velocity: vel,
    hp: 3.0, maxHp: 3.0,
    stamina: 100, maxStamina: 100,
    spiritOrbs: 0, gems: 0,
    onGround: true, isRolling: false, isBlocking: false,

    damage(amount, fromPos) {
      if (dead || invulnT > 0) return;
      if (action && action.type === 'roll') return; // ロール無敵
      combatT = SHEATHE_DELAY;
      setArmed(true);
      let blocked = false;
      if (blocking && fromPos) {
        const ang = Math.atan2(fromPos.x - root.position.x, fromPos.z - root.position.z);
        if (Math.abs(angleDelta(facing, ang)) <= 70 * Math.PI / 180) blocked = true;
      }
      // ノックバック方向
      let kx = -Math.sin(facing), kz = -Math.cos(facing);
      if (fromPos) {
        const dx = root.position.x - fromPos.x, dz = root.position.z - fromPos.z;
        const d = Math.hypot(dx, dz);
        if (d > 1e-4) { kx = dx / d; kz = dz / d; }
      }
      if (blocked) {
        amount *= 0.2;
        vel.x += kx * 2.5; vel.z += kz * 2.5;
        ctx.audio.play('block');
        _fx.set(root.position.x + Math.sin(facing) * 0.55, root.position.y + 1.05, root.position.z + Math.cos(facing) * 0.55);
        ctx.effects.burst(_fx, 'spark');
      } else {
        vel.x = kx * 6.5; vel.z = kz * 6.5;
        if (onGround) vel.y = 2.5, onGround = false;
        action = { type: 'hurt', t: 0, dur: HURT_TIME };
        spinExtra = 0;
        ctx.ui.flash('#ff2222', 0.25);
        ctx.audio.play('damage');
        _fx.set(root.position.x, root.position.y + 1.0, root.position.z);
        ctx.effects.burst(_fx, 'hit');
      }
      invulnT = INVULN_TIME;
      api.hp = clamp(api.hp - amount, 0, api.maxHp);
      ctx.emit('player-damaged', { hp: api.hp, amount });
      if (api.hp <= 0) die();
    },

    heal(amount) {
      api.hp = clamp(api.hp + amount, 0, api.maxHp);
      if (dead && api.hp > 0) revive();
    },

    addMaxHeart() { api.maxHp += 1; api.hp = api.maxHp; },

    getAttackHit() {
      if (!action || action.type !== 'atk') return null;
      const A = ATTACKS[action.idx];
      const k = action.t / A.dur;
      if (k < A.a0 || k > A.a1) return null;
      _hitPos.set(
        root.position.x + Math.sin(facing) * 1.3,
        root.position.y + 1.0,
        root.position.z + Math.cos(facing) * 1.3);
      _hit.damage = A.dmg;
      _hit.swingId = action.swingId;
      return _hit;
    },

    teleport(pos, heading = Math.PI) {
      root.position.copy(pos);
      facing = heading;
      api.heading = heading;
      root.rotation.y = heading;
      vel.set(0, 0, 0);
      if (!dead) {
        action = null; spinG.rotation.set(0, 0, 0); spinExtra = 0;
        inner.visible = true;
      }
      blocking = false; api.isBlocking = false; api.isRolling = false;
      onGround = true; api.onGround = true;
      runPhase = 0; prevStepSin = 0; moveAmt = 0; landT = 0;
    },

    setFrozen(v) {
      frozen = !!v;
      if (frozen) {
        blocking = false; attackBuf = 0;
        if (action && action.type !== 'dead') { action = null; spinG.rotation.x = 0; spinExtra = 0; }
        vel.x = 0; vel.z = 0;
      }
    },
  };
  ctx.player = api;
}

// ---------------- アクション開始 ----------------
function startAttack(ctx, idx) {
  setArmed(true);
  attackBuf = 0;
  swingSeq++;
  action = { type: 'atk', idx, t: 0, dur: ATTACKS[idx].dur, swingId: swingSeq, sfxDone: false };
  combatT = SHEATHE_DELAY;
  blocking = false;
  spinExtra = 0;
  const lock = ctx.camera3p ? ctx.camera3p.lockTarget : null;
  if (!lock && _mv.lengthSq() > 0.5) facing = Math.atan2(_mv.x, _mv.z);
}

function startRoll(ctx, hasMove) {
  api.stamina = clamp(api.stamina - ROLL_COST, 0, api.maxStamina);
  regenDelay = REGEN_DELAY;
  if (api.stamina <= 0) exhaustT = EXHAUST_TIME;
  const dir = hasMove ? Math.atan2(_mv.x, _mv.z) : facing;
  action = { type: 'roll', t: 0, dur: ROLL_TIME, dx: Math.sin(dir), dz: Math.cos(dir) };
  facing = dir;
  attackBuf = 0;
  blocking = false;
  ctx.audio.play('roll');
  footBurst(ctx, 0);
}

function footBurst(ctx, which) {
  const m = which === 1 ? bootR : which === 2 ? bootL : null;
  if (m) m.getWorldPosition(_fx);
  else { _fx.copy(root.position); _fx.y += 0.06; }
  ctx.effects.burst(_fx, 'dust');
}

// ---------------- update ----------------
export function update(ctx, dt) {
  if (!api) return;
  elapsed += dt;
  const pos = root.position;
  const inp = ctx.input;
  const canControl = !frozen && !dead;

  // ---- タイマー ----
  if (invulnT > 0) invulnT -= dt;
  if (attackBuf > 0) attackBuf -= dt;
  if (landT > 0) landT -= dt;
  if (exhaustT > 0) exhaustT -= dt;
  if (regenDelay > 0) regenDelay -= dt;
  else api.stamina = clamp(api.stamina + REGEN_RATE * dt, 0, api.maxStamina);

  // ---- カメラ相対の移動入力 ----
  let f = 0, s = 0;
  if (canControl) {
    f = (inp.keys.has('KeyW') || inp.keys.has('ArrowUp') ? 1 : 0) - (inp.keys.has('KeyS') || inp.keys.has('ArrowDown') ? 1 : 0);
    s = (inp.keys.has('KeyD') || inp.keys.has('ArrowRight') ? 1 : 0) - (inp.keys.has('KeyA') || inp.keys.has('ArrowLeft') ? 1 : 0);
  }
  ctx.camera.getWorldDirection(_fwd);
  _fwd.y = 0;
  if (_fwd.lengthSq() < 1e-6) _fwd.set(0, 0, -1);
  _fwd.normalize();
  _rgt.set(-_fwd.z, 0, _fwd.x);
  _mv.set(_fwd.x * f + _rgt.x * s, 0, _fwd.z * f + _rgt.z * s);
  const hasMove = _mv.lengthSq() > 1e-6;
  if (hasMove) _mv.normalize();

  // ---- ロックオン ----
  const lock = ctx.camera3p ? ctx.camera3p.lockTarget : null;
  const locked = !!(lock && lock.alive !== false && lock.pos);
  const lockAng = locked ? Math.atan2(lock.pos.x - pos.x, lock.pos.z - pos.z) : 0;

  // ---- ガード ----
  const wantBlock = canControl && !action && onGround && (inp.mouse.right || inp.keys.has('KeyK'));
  if (wantBlock && !blocking) { setArmed(true); combatT = SHEATHE_DELAY; }
  blocking = wantBlock;

  // ---- 攻撃入力(バッファ) ----
  if (canControl && (inp.mouse.leftJust || inp.justPressed('KeyJ'))) attackBuf = 0.30;

  // ---- アクション開始 ----
  if (canControl && !action && onGround) {
    if (attackBuf > 0) startAttack(ctx, 0);
    else if (inp.justPressed('KeyC') && exhaustT <= 0 && api.stamina >= ROLL_COST) startRoll(ctx, hasMove);
    else if (inp.justPressed('Space')) {
      vel.y = JUMP_V; onGround = false; blocking = false;
      ctx.audio.play('jump');
      footBurst(ctx, 0);
    }
  }

  // ---- 移動 / ダッシュ ----
  const wl = ctx.world && ctx.world.waterLevel !== undefined ? ctx.world.waterLevel : -1e9;
  const wading = pos.y < wl + 0.4;
  let dashing = false;
  if (!action) {
    let spd = 0;
    if (hasMove) {
      spd = RUN_SPEED;
      if (canControl && onGround && !blocking && exhaustT <= 0 && api.stamina > 0 &&
          (inp.keys.has('ShiftLeft') || inp.keys.has('ShiftRight'))) {
        dashing = true;
        spd *= DASH_MUL;
        api.stamina = clamp(api.stamina - DASH_COST * dt, 0, api.maxStamina);
        regenDelay = REGEN_DELAY;
        if (api.stamina <= 0) exhaustT = EXHAUST_TIME;
      }
      if (blocking) spd *= 0.5;
      if (wading) spd *= 0.5;
      if (locked) facing = dampAngle(facing, lockAng, 14, dt);
      else facing = dampAngle(facing, Math.atan2(_mv.x, _mv.z), dashing ? 15 : 11, dt);
    } else if (locked) {
      facing = dampAngle(facing, lockAng, 14, dt);
    }
    const rate = onGround ? 12 : 3.5;
    vel.x = damp(vel.x, _mv.x * spd, rate, dt);
    vel.z = damp(vel.z, _mv.z * spd, rate, dt);
  } else {
    // ---- アクション進行 ----
    action.t += dt;
    const k = action.t / action.dur;
    if (action.type === 'atk') {
      const A = ATTACKS[action.idx];
      if (!action.sfxDone && k >= A.a0 - 0.10) { action.sfxDone = true; ctx.audio.play(A.sfx); }
      const lungeK = smoothstep(A.a0 - 0.10, A.a0 + 0.10, k) * (1 - smoothstep(A.a1, A.a1 + 0.14, k));
      vel.x = damp(vel.x, Math.sin(facing) * A.lunge * lungeK, 18, dt);
      vel.z = damp(vel.z, Math.cos(facing) * A.lunge * lungeK, 18, dt);
      if (k < A.a0) {
        if (locked) facing = dampAngle(facing, lockAng, 16, dt);
        else if (hasMove) facing = dampAngle(facing, Math.atan2(_mv.x, _mv.z), 10, dt);
      }
      if (k >= 1) {
        if (attackBuf > 0 && action.idx < 2 && onGround && canControl) startAttack(ctx, action.idx + 1);
        else { action = null; spinExtra = 0; }
      }
    } else if (action.type === 'roll') {
      const sp = ROLL_SPEED * (1 - 0.55 * smoothstep(0.55, 1, k)) * (wading ? 0.5 : 1);
      vel.x = action.dx * sp; vel.z = action.dz * sp;
      if (k >= 1) { action = null; spinG.rotation.x = 0; }
    } else if (action.type === 'hurt') {
      vel.x = damp(vel.x, 0, 5, dt); vel.z = damp(vel.z, 0, 5, dt);
      if (action.t >= action.dur) action = null;
    } else if (action.type === 'dead') {
      vel.x = damp(vel.x, 0, 8, dt); vel.z = damp(vel.z, 0, 8, dt);
    }
  }

  // ---- 物理 ----
  if (!onGround) vel.y += GRAVITY * dt;
  pos.x += vel.x * dt;
  pos.z += vel.z * dt;
  pos.y += vel.y * dt;

  // 円柱コライダー押し出し
  const cols = ctx.colliders;
  for (let i = 0; i < cols.length; i++) {
    const c = cols[i];
    const dx = pos.x - c.x, dz = pos.z - c.z;
    const rr = c.radius + PLAYER_R;
    const d2 = dx * dx + dz * dz;
    if (d2 >= rr * rr) continue;
    if (c.height !== undefined && pos.y > ctx.getGroundHeight(c.x, c.z) + c.height) continue;
    if (d2 < 1e-8) { pos.x -= Math.sin(facing) * rr; pos.z -= Math.cos(facing) * rr; continue; }
    const d = Math.sqrt(d2), push = (rr - d) / d;
    pos.x += dx * push; pos.z += dz * push;
  }

  // 移動範囲制限
  const b = ctx.playerBounds;
  if (b) { pos.x = clamp(pos.x, b.minX, b.maxX); pos.z = clamp(pos.z, b.minZ, b.maxZ); }

  // 接地・着地
  const gh = ctx.getGroundHeight(pos.x, pos.z);
  if (pos.y <= gh) {
    if (!onGround) {
      landHeavy = vel.y < -14;
      landT = landHeavy ? 0.26 : 0.15;
      ctx.audio.play('land');
      footBurst(ctx, 0);
    }
    pos.y = gh; vel.y = 0; onGround = true;
  } else if (onGround) {
    if (pos.y - gh < 0.4) pos.y = gh;
    else onGround = false;
  }

  // ---- 自動納刀(戦闘後4秒) ----
  if (armed) {
    if (blocking || (action && action.type === 'atk')) combatT = SHEATHE_DELAY;
    else {
      combatT -= dt;
      if (combatT <= 0 && !action) setArmed(false);
    }
  }

  // ---- 足音・走行サイクル ----
  const hSpeed = Math.hypot(vel.x, vel.z);
  const sN = clamp(hSpeed / RUN_SPEED, 0, 1.8);
  moveAmt = damp(moveAmt, onGround && hSpeed > 0.6 ? 1 : 0, 10, dt);
  if (onGround && !action && hSpeed > 0.4) {
    runPhase += dt * (4.5 + hSpeed * 1.3);
    const stepSin = Math.sin(runPhase);
    if (hSpeed > 2.2 && prevStepSin * stepSin <= 0 && prevStepSin !== stepSin) {
      ctx.audio.play('step');
      footBurst(ctx, prevStepSin < 0 ? 1 : 2);
    }
    prevStepSin = stepSin;
  } else prevStepSin = 0;

  // ---- ポーズ計算 ----
  resetPose();
  let rate = 14;
  if (dead && action) rate = poseDead(action.t);
  else if (action && action.type === 'roll') rate = poseRoll(clamp(action.t / ROLL_TIME, 0, 1));
  else if (action && action.type === 'atk') rate = poseAttack(action.idx, clamp(action.t / ATTACKS[action.idx].dur, 0, 1));
  else if (action && action.type === 'hurt') rate = poseHurt(action.t / HURT_TIME);
  else if (!onGround) rate = poseAir(vel.y);
  else {
    if (moveAmt > 0.06) poseMove(sN, dashing, locked);
    else poseIdle(elapsed, dt);
    if (blocking) poseBlockOverlay();
    if (landT > 0) poseLandOverlay();
  }
  if (exhaustT > 0 && !action && onGround) { PT.torsoRX += 0.12; PT.headRX += 0.16; }

  applyPose(dt, rate);
  if (!action) spinG.rotation.x = damp(spinG.rotation.x, 0, 20, dt);
  root.rotation.y = facing + spinExtra;

  // ---- 頭巾の揺れ(二次アニメ) ----
  const capSway = Math.sin(elapsed * 2.2) * 0.06 + Math.sin(runPhase * 2) * 0.12 * moveAmt;
  capMid.rotation.x = damp(capMid.rotation.x, -0.80 - moveAmt * 0.35 - clamp(vel.y * 0.022, -0.3, 0.3) + capSway, 8, dt);
  capTip.rotation.x = damp(capTip.rotation.x, -0.62 - moveAmt * 0.28 + Math.sin(elapsed * 2.2 + 0.9) * 0.08 + Math.sin(runPhase * 2 + 1.2) * 0.15 * moveAmt, 7, dt);
  capMid.rotation.z = damp(capMid.rotation.z, Math.sin(elapsed * 1.7) * 0.05, 6, dt);

  // ---- まばたき ----
  blinkT -= dt;
  if (blinkT <= 0) { blinkT = 2 + Math.random() * 3.5; blinkAnim = 0.13; }
  if (blinkAnim > 0) blinkAnim -= dt;
  eyeR.scale.y = damp(eyeR.scale.y, blinkAnim > 0 ? 0.12 : 1, 30, dt);
  eyeL.scale.y = eyeR.scale.y;

  // ---- 被弾無敵の点滅 ----
  inner.visible = dead || !(invulnT > 0 && Math.floor(invulnT * 14) % 2 === 0);

  // ---- 公開状態の同期 ----
  api.onGround = onGround;
  api.isRolling = !!(action && action.type === 'roll');
  api.isBlocking = blocking;
  api.heading = facing;
}

// ---------------- ポーズ(状態別) ----------------
const easeOut3 = (u) => { u = clamp(u, 0, 1); return 1 - (1 - u) * (1 - u) * (1 - u); };

function poseIdle(t, dt) {
  const br = Math.sin(t * 1.7); // 呼吸
  PT.torsoRX = 0.035 + br * 0.022;
  PT.hipsY = -0.012 + br * 0.010;
  PT.shRZ_R = -0.14 - br * 0.02;
  PT.shRZ_L = 0.14 + br * 0.02;
  PT.elbR_ = (armed ? 0.52 : 0.28) + br * 0.03;
  PT.elbL_ = (armed ? 0.42 : 0.28) + br * 0.03;
  PT.legR_ = -0.045; PT.legL_ = 0.055;
  PT.kneeR_ = 0.09; PT.kneeL_ = 0.06;
  // 時々あたりを見回す
  idleT += dt;
  if (lookT > 0) {
    lookT -= dt;
    const env = Math.sin(clamp(1 - lookT / 1.5, 0, 1) * Math.PI);
    PT.headRY = lookDir * env;
    PT.headRX = 0.05 * env;
    PT.torsoRY = lookDir * env * 0.14;
  } else if (idleT >= lookNext) {
    idleT = 0;
    lookNext = 2.5 + Math.random() * 4;
    lookT = 1.5;
    lookDir = (Math.random() < 0.5 ? -1 : 1) * (0.5 + Math.random() * 0.35);
  }
}

function poseMove(sN, dashing, locked) {
  idleT = 0; lookT = 0;
  const ph = runPhase;
  const w = clamp(sN, 0, 1);
  const legAmp = 0.34 + 0.44 * w + (dashing ? 0.13 : 0);
  const armAmp = 0.36 + 0.48 * w + (dashing ? 0.17 : 0);
  const sR = Math.sin(ph), sL = -sR;
  const cR = Math.cos(ph);
  PT.legR_ = -sR * legAmp; PT.legL_ = -sL * legAmp;
  PT.kneeR_ = Math.max(0, cR) * (0.6 + 0.7 * w);
  PT.kneeL_ = Math.max(0, -cR) * (0.6 + 0.7 * w);
  PT.shRX_R = sR * armAmp; PT.shRX_L = sL * armAmp;
  PT.elbR_ = 0.4 + Math.max(0, -sR) * 0.65 + (armed ? 0.12 : 0);
  PT.elbL_ = 0.4 + Math.max(0, -sL) * 0.65;
  PT.shRZ_R = -0.12; PT.shRZ_L = 0.12;
  PT.torsoRX = 0.06 + w * 0.12 + (dashing ? 0.22 : 0); // 前傾(ダッシュで強く)
  PT.torsoRY = sR * 0.09;
  PT.hipsY = (-0.055 + Math.abs(cR) * 0.055) * w;
  PT.headRX = -PT.torsoRX * 0.55;
  if (locked) { // ストレイフ: 脚は移動方向へ・上体は対象へ
    const la = angleDelta(facing, Math.atan2(_mv.x, _mv.z));
    PT.hipsRY = clamp(la * 0.45, -0.85, 0.85);
    PT.torsoRZ = -Math.sin(la) * 0.07;
  }
}

function poseAir(vy) {
  const up = clamp(vy / JUMP_V, -1, 1);
  PT.torsoRX = 0.13 - up * 0.07;
  PT.legR_ = -0.58 + up * 0.10; PT.kneeR_ = 1.05;
  PT.legL_ = 0.32; PT.kneeL_ = 0.5;
  PT.shRX_R = -0.5 - up * 0.3; PT.shRZ_R = -0.6;
  PT.shRX_L = -0.5 - up * 0.3; PT.shRZ_L = 0.6;
  PT.elbR_ = 0.55; PT.elbL_ = 0.55;
  PT.headRX = vy < 0 ? 0.12 : -0.08;
  return 10;
}

function poseLandOverlay() {
  const c = clamp(landT / (landHeavy ? 0.26 : 0.15), 0, 1) * (landHeavy ? 1 : 0.5);
  PT.hipsY -= 0.22 * c;
  PT.kneeR_ += 0.95 * c; PT.kneeL_ += 0.95 * c;
  PT.legR_ -= 0.48 * c; PT.legL_ -= 0.42 * c;
  PT.torsoRX += 0.32 * c;
  PT.shRX_R -= 0.3 * c; PT.shRX_L -= 0.3 * c;
}

function poseBlockOverlay() {
  PT.shRX_L = -1.18; PT.shRZ_L = -0.55; PT.elbL_ = 1.4;
  PT.shRX_R = 0.35; PT.shRZ_R = -0.4; PT.elbR_ = 0.8;
  PT.torsoRX += 0.10; PT.torsoRY = 0.18;
  PT.hipsY -= 0.06;
  PT.legR_ -= 0.16; PT.legL_ += 0.13;
  PT.kneeR_ += 0.28; PT.kneeL_ += 0.16;
  PT.headRX = -0.04;
}

function poseAttack(idx, k) {
  idleT = 0;
  if (idx === 0) { // 一段目: 右薙ぎ(右へ大きく溜めて左へ振り抜く)
    const w = smoothstep(0, 0.20, k);
    const s = easeOut3((k - 0.24) / 0.30);
    const rec = smoothstep(0.80, 1, k);
    PT.torsoRY = lerp(-0.85 * w, 0.95, s) * (1 - rec * 0.45);
    PT.torsoRX = 0.10 + s * 0.16;
    PT.shRX_R = lerp(lerp(0.15, -0.40, w), -1.35, s);
    PT.shRZ_R = lerp(lerp(-0.12, -1.15, w), 0.45, s);
    PT.elbR_ = lerp(lerp(0.45, 1.05, w), 0.10, s);
    PT.shRX_L = lerp(0.1, 0.55, s); PT.shRZ_L = 0.38; PT.elbL_ = 0.7;
    PT.hipsY = -0.05 - s * 0.03;
    PT.legR_ = -0.38 * s; PT.legL_ = 0.30 * s;
    PT.kneeR_ = 0.30; PT.kneeL_ = 0.26;
    PT.headRY = -PT.torsoRY * 0.45;
    return k < 0.24 ? 16 : 30;
  }
  if (idx === 1) { // 二段目: 左薙ぎ(返しの逆袈裟)
    const w = smoothstep(0, 0.22, k);
    const s = easeOut3((k - 0.26) / 0.30);
    const rec = smoothstep(0.82, 1, k);
    PT.torsoRY = lerp(0.90 * w, -0.95, s) * (1 - rec * 0.45);
    PT.torsoRX = 0.12 + s * 0.12;
    PT.shRX_R = lerp(lerp(-0.4, -0.85, w), -1.25, s);
    PT.shRZ_R = lerp(lerp(0.1, 0.75, w), -1.25, s);
    PT.elbR_ = lerp(lerp(0.5, 1.15, w), 0.14, s);
    PT.shRX_L = 0.3; PT.shRZ_L = lerp(0.2, 0.8, s); PT.elbL_ = 0.6;
    PT.hipsY = -0.06;
    PT.legR_ = 0.30 * s; PT.legL_ = -0.38 * s;
    PT.kneeR_ = 0.26; PT.kneeL_ = 0.30;
    PT.headRY = -PT.torsoRY * 0.45;
    return k < 0.26 ? 16 : 30;
  }
  // 三段目: 大振り回転斬り(全身が一回転)
  const w = smoothstep(0, 0.24, k);
  const s = easeOut3((k - 0.26) / 0.42);
  spinExtra = Math.PI * 2 * easeOut3((k - 0.26) / 0.52);
  if (k >= 0.99) spinExtra = 0;
  PT.torsoRY = lerp(-0.9 * w, -0.15, s);
  PT.torsoRX = 0.16 + w * 0.10;
  PT.shRX_R = lerp(lerp(0.15, -0.5, w), -0.9, s);
  PT.shRZ_R = lerp(lerp(-0.12, -0.55, w), -1.5, s); // 腕を水平に伸ばして薙ぐ
  PT.elbR_ = lerp(lerp(0.45, 1.2, w), 0.05, s);
  PT.shRX_L = -0.35; PT.shRZ_L = lerp(0.2, 0.95, s); PT.elbL_ = 0.45;
  PT.hipsY = -0.10 - Math.sin(clamp(s, 0, 1) * Math.PI) * 0.07;
  PT.legR_ = -0.32; PT.legL_ = 0.36;
  PT.kneeR_ = 0.45; PT.kneeL_ = 0.52;
  PT.headRY = 0.1;
  return k < 0.24 ? 15 : 26;
}

function poseRoll(k) {
  // 前転: easeInOut で一回転
  const e = k < 0.5 ? 2 * k * k : 1 - (2 - 2 * k) * (2 - 2 * k) / 2;
  spinG.rotation.x = Math.PI * 2 * e;
  PT.hipsY = -0.32;
  PT.torsoRX = 0.85; PT.headRX = 0.6;
  PT.legR_ = -1.65; PT.legL_ = -1.55;
  PT.kneeR_ = 2.2; PT.kneeL_ = 2.3;
  PT.shRX_R = -0.9; PT.shRZ_R = -0.35; PT.elbR_ = 2.1;
  PT.shRX_L = -0.9; PT.shRZ_L = 0.35; PT.elbL_ = 2.1;
  return 26;
}

function poseHurt(k) {
  const c = Math.sin(clamp(k, 0, 1) * Math.PI); // のけぞって戻る
  PT.torsoRX = -0.40 * c;
  PT.headRX = -0.32 * c;
  PT.shRX_R = -0.5 * c; PT.shRZ_R = -0.75 * c - 0.1;
  PT.shRX_L = -0.5 * c; PT.shRZ_L = 0.75 * c + 0.1;
  PT.elbR_ = 0.8; PT.elbL_ = 0.8;
  PT.hipsY = -0.06 * c;
  PT.legR_ = -0.28 * c; PT.kneeR_ = 0.45 * c;
  PT.legL_ = 0.15 * c;
  return 22;
}

function poseDead(t) {
  const k1 = smoothstep(0, 0.5, t);    // 膝から崩れ落ちる
  const k2 = smoothstep(0.65, 1.35, t); // 前へ倒れ込む
  PT.hipsY = -0.52 * k1 - 0.14 * k2;
  PT.kneeR_ = 2.35 * k1; PT.kneeL_ = 2.35 * k1;
  PT.legR_ = 0.12 * k1; PT.legL_ = 0.12 * k1;
  PT.torsoRX = 0.22 * k1 + 0.6 * k2;
  PT.headRX = 0.28 * k1 + 0.4 * k2;
  PT.shRX_R = 0.2 * k1 - 0.55 * k2; PT.shRZ_R = -0.3;
  PT.shRX_L = 0.2 * k1 - 0.55 * k2; PT.shRZ_L = 0.3;
  PT.elbR_ = 0.3; PT.elbL_ = 0.3;
  spinG.rotation.x = 1.15 * k2;
  return 8;
}

// ---------------- ポーズ適用(dampブレンド) ----------------
function applyPose(dt, rate) {
  const D = (o, p, v) => { o[p] = damp(o[p], v, rate, dt); };
  D(hips.position, 'y', 0.92 + PT.hipsY);
  D(hips.rotation, 'y', PT.hipsRY);
  D(torso.rotation, 'x', PT.torsoRX);
  D(torso.rotation, 'y', PT.torsoRY - PT.hipsRY);
  D(torso.rotation, 'z', PT.torsoRZ);
  D(headG.rotation, 'x', PT.headRX - PT.torsoRX * 0.4);
  D(headG.rotation, 'y', PT.headRY);
  D(headG.rotation, 'z', PT.headRZ);
  D(shR.rotation, 'x', PT.shRX_R);
  D(shR.rotation, 'z', PT.shRZ_R);
  D(elbR.rotation, 'x', -Math.max(0, PT.elbR_));
  D(shL.rotation, 'x', PT.shRX_L);
  D(shL.rotation, 'z', PT.shRZ_L);
  D(elbL.rotation, 'x', -Math.max(0, PT.elbL_));
  D(legR.rotation, 'x', PT.legR_);
  D(kneeR.rotation, 'x', Math.max(0, PT.kneeR_));
  D(legL.rotation, 'x', PT.legL_);
  D(kneeL.rotation, 'x', Math.max(0, PT.kneeL_));
}
