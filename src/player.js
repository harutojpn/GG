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
  hips = new THREE.Group(); hips.position.y = 0.88; inner.add(hips);

  // --- 脚(右=-X / 左=+X。モデルは+Z向き) ---
  const thighGeo = new THREE.CylinderGeometry(0.078, 0.066, 0.38, 7);
  const shinGeo = new THREE.CylinderGeometry(0.058, 0.082, 0.30, 7);
  const footGeo = new THREE.BoxGeometry(0.11, 0.09, 0.20);
  const cuffGeo = new THREE.CylinderGeometry(0.088, 0.084, 0.09, 7);
  const mkLeg = (sx) => {
    const hip = new THREE.Group(); hip.position.set(sx * 0.105, -0.03, 0); hips.add(hip);
    part(thighGeo, M.white, 0, -0.19, 0, hip);
    const knee = new THREE.Group(); knee.position.set(0, -0.38, 0); hip.add(knee);
    part(cuffGeo, M.boots, 0, -0.10, 0, knee);
    part(shinGeo, M.boots, 0, -0.24, 0, knee);
    const foot = part(footGeo, M.boots, 0, -0.385, 0.045, knee);
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
  // 背中の鞘・盾アンカー
  backSheath = new THREE.Group();
  backSheath.position.set(-0.10, 0.30, -0.20);
  backSheath.rotation.set(0.12, 0, 2.62);
  torso.add(backSheath);
  part(new THREE.BoxGeometry(0.085, 0.52, 0.045), M.leather, 0, 0.30, 0, backSheath);
  part(new THREE.BoxGeometry(0.10, 0.06, 0.055), M.gold, 0, 0.52, 0, backSheath);
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
  gripR = new THREE.Group(); gripR.position.set(0, -0.28, 0.01); gripR.rotation.x = 1.45; elbR.add(gripR);
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
  // とんがり頭巾(基部+揺れる2節)
  const hood = part(new THREE.ConeGeometry(0.195, 0.30, 8), M.tunic, 0, 0.315, -0.02, headG);
  hood.rotation.x = -0.22;
  part(new THREE.CylinderGeometry(0.20, 0.19, 0.085, 8), M.tunicDk, 0, 0.21, -0.005, headG);
  capMid = new THREE.Group(); capMid.position.set(0, 0.43, -0.075); headG.add(capMid);
  part(new THREE.ConeGeometry(0.105, 0.24, 7), M.tunic, 0, 0.10, 0, capMid);
  capTip = new THREE.Group(); capTip.position.set(0, 0.21, 0); capMid.add(capTip);
  part(new THREE.ConeGeometry(0.052, 0.20, 6), M.tunic, 0, 0.085, 0, capTip);
  part(new THREE.SphereGeometry(0.026, 6, 5), M.tunicDk, 0, 0.185, 0, capTip);

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
