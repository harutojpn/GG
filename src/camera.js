// camera.js — 三人称カメラ: 滑らか追従 / 地形衝突回避 / ロックオン / 画面揺れ / シネマティック
// 契約: ARCHITECTURE.md — ctx.camera3p = { lockTarget, setLockTarget(e), shake(strength), cinematic(mode) }
import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, smoothstep } from './util.js';

// ---------------- 定数 ----------------
const PITCH_MIN = -0.35, PITCH_MAX = 1.25;
const DIST_MIN = 4, DIST_MAX = 13;
const SENS_X = 0.0032, SENS_Y = 0.0026, WHEEL_SENS = 0.011;
const HEAD_Y = 1.6;          // 注視点: プレイヤー頭上
const AIM_LIFT = 0.45;       // 注視をやや上げてプレイヤーを画面下1/3付近に置く
const GROUND_CLEAR = 0.4;    // カメラの地面クリアランス
const COLLIDE_SAMPLES = 8;
const FOV_BASE = 55, FOV_DASH = 61;
const DASH_SPEED = 7.0;      // 水平速度がこれを超えたらダッシュFOV
const LOCK_ACQUIRE = 32, LOCK_RELEASE = 40;
const CASTLE_Z = -650;       // 古城の中心(構図用)

// ---------------- 状態 ----------------
let yaw = 0;                 // カメラの水平角(注視点→カメラ方向)
let pitch = 0.30;
let distTarget = 7.5;        // ホイール操作の目標距離
let distCur = 7.5;           // damp 後の希望距離
let collideCur = 7.5;        // 衝突解決後の実距離(ズームインは即時・アウトはdamp)
let mode = 'follow';         // 'follow' | 'title' | 'bossIntro' | 'ending'
let requestedCine = null;    // cinematic() で明示指定されたモード
let cineT = 0, titleT = 0;
let followT = 1;             // シネマティック→追従の移行進捗(0→1 / 約1秒)
let fovCur = FOV_BASE, fovTarget = FOV_BASE;
let lockTarget = null;
let shakeAmp = 0, shakeT = 0;
const shakePhase = [0, 0, 0, 0, 0, 0];
let api = null;

const lookCur = new THREE.Vector3(0, HEAD_Y, 250); // 現在の注視点(damp)
const basePos = new THREE.Vector3(0, 8, 262);      // 揺れ適用前のカメラ位置
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _gateFallback = new THREE.Vector3(0, 0, -560);

// ---------------- ヘルパー ----------------
function enemyPos(e) {
  if (!e) return null;
  return e.pos || (e.root && e.root.position) || null;
}

function setLock(ctx, t) {
  const next = t || null;
  if (next === lockTarget) return;
  lockTarget = next;
  if (api) api.lockTarget = next;
  ctx.emit('lockon', { target: next });
}

function startShake(strength) {
  const s = clamp(strength || 0, 0, 1);
  if (s <= 0) return;
  shakeAmp = Math.max(shakeAmp, s);
  shakeT = 0;
  for (let i = 0; i < 6; i++) shakePhase[i] = Math.random() * Math.PI * 2;
}

// 注視点→希望カメラ位置の線分を8点サンプリングし、地面(+クリアランス)を
// 割らない最大距離を返す。境界は線形補間で滑らかに。
function collideDist(ctx, look, dx, dy, dz, want) {
  let prevD = 0;
  let prevClear = Math.max(
    look.y - (ctx.getGroundHeight(look.x, look.z) + GROUND_CLEAR), 0.001);
  for (let i = 1; i <= COLLIDE_SAMPLES; i++) {
    const d = (want * i) / COLLIDE_SAMPLES;
    const py = look.y + dy * d;
    const g = ctx.getGroundHeight(look.x + dx * d, look.z + dz * d) + GROUND_CLEAR;
    const clear = py - g;
    if (clear < 0) {
      const f = prevClear / (prevClear - clear); // 直前サンプルとの間で交点を近似
      return clamp(prevD + (d - prevD) * f - 0.2, 1.3, want);
    }
    prevD = d;
    prevClear = Math.max(clear, 0.001);
  }
  return want;
}

function switchMode(next, ctx) {
  if (next !== 'follow' && lockTarget) setLock(ctx, null);
  mode = next;
  cineT = 0;
  if (next === 'title') titleT = 0;
  if (next === 'follow') {
    // 現在のカメラ位置から yaw/pitch/距離を導出 → カット無しで追従へ滑らかに復帰
    _a.copy(basePos).sub(lookCur);
    const d = _a.length();
    if (d > 0.05) {
      yaw = Math.atan2(_a.x, _a.z);
      pitch = clamp(Math.asin(clamp(_a.y / d, -1, 1)), PITCH_MIN, PITCH_MAX);
    }
    distCur = clamp(d, 1.5, 120);
    collideCur = distCur;
    followT = 0; // 約1秒かけて通常の機敏さへ
  }
}

// ---------------- 追従カメラ ----------------
function updateFollow(ctx, dt) {
  const cam = ctx.camera;
  const pl = ctx.player;
  const m = ctx.input.mouse;
  const s = ctx.state;
  const inGame = s === 'playing' || s === 'shrine' || s === 'boss';

  // --- ロックオン: Q でトグル / 死亡・離脱で自動解除 ---
  if (inGame && ctx.input.justPressed('KeyQ')) {
    if (lockTarget) {
      setLock(ctx, null);
    } else if (ctx.combat && typeof ctx.combat.nearestTargetable === 'function') {
      const t = ctx.combat.nearestTargetable(pl.position, LOCK_ACQUIRE);
      if (t) setLock(ctx, t);
    }
  }
  let tp = enemyPos(lockTarget);
  if (lockTarget && (!lockTarget.alive || !tp || tp.distanceTo(pl.position) > LOCK_RELEASE)) {
    setLock(ctx, null);
    tp = null;
  }

  // --- 入力(yaw / pitch / ホイール距離) ---
  if (lockTarget && tp) {
    yaw -= m.dx * SENS_X * 0.35; // ロック中は手動を弱め、対象方向へdamp
    yaw = dampAngle(yaw, Math.atan2(pl.position.x - tp.x, pl.position.z - tp.z), 4.2, dt);
    pitch = clamp(pitch + m.dy * SENS_Y, PITCH_MIN, PITCH_MAX);
    pitch = damp(pitch, clamp(pitch, 0.22, 0.60), 2.6, dt); // やや高めの見下ろしへ寄せる
  } else {
    yaw -= m.dx * SENS_X;
    pitch = clamp(pitch + m.dy * SENS_Y, PITCH_MIN, PITCH_MAX);
  }
  distTarget = clamp(distTarget + m.wheel * WHEEL_SENS, DIST_MIN, DIST_MAX);

  // シネマティックからの復帰中はゆったり → 1秒ほどで通常応答へ
  followT = Math.min(1, followT + dt / 1.1);
  const ease = smoothstep(0, 1, followT);
  const lookRate = lerp(2.2, 12, ease);
  const distRate = lerp(1.8, 6, ease);

  // --- 注視点: 頭上1.6m(ロック中は対象方向へ少しだけブレンド) ---
  _a.copy(pl.position);
  _a.y += HEAD_Y;
  if (lockTarget && tp) {
    _b.set(tp.x, tp.y + 1.2, tp.z).sub(_a);
    const d = _b.length();
    if (d > 0.001) _a.addScaledVector(_b, Math.min(0.32, 3.5 / d)); // 両者をフレームに
    _a.y += 0.25;
  }
  lookCur.lerp(_a, 1 - Math.exp(-lookRate * dt));

  // --- 距離 ---
  const wantDist = clamp(distTarget + (lockTarget ? 1.5 : 0), DIST_MIN, DIST_MAX + 2);
  distCur = damp(distCur, wantDist, distRate, dt);

  // --- 地形衝突: めり込みは即時ズームイン / 復帰はdamp ---
  const cp = Math.cos(pitch);
  const dx = Math.sin(yaw) * cp, dy = Math.sin(pitch), dz = Math.cos(yaw) * cp;
  const allowed = collideDist(ctx, lookCur, dx, dy, dz, distCur);
  if (allowed < collideCur) collideCur = allowed;
  else collideCur = damp(collideCur, allowed, 3.2, dt);

  basePos.set(
    lookCur.x + dx * collideCur,
    lookCur.y + dy * collideCur,
    lookCur.z + dz * collideCur);
  const gy = ctx.getGroundHeight(basePos.x, basePos.z) + GROUND_CLEAR;
  if (basePos.y < gy) basePos.y = gy;

  cam.position.copy(basePos);
  _c.copy(lookCur);
  _c.y += AIM_LIFT;
  cam.lookAt(_c);

  // --- ダッシュFOV(velocity の水平速度で判定) ---
  const v = pl.velocity;
  const hs = v ? Math.hypot(v.x, v.z) : 0;
  fovTarget = hs > DASH_SPEED ? FOV_DASH : FOV_BASE;
}

// ---------------- シネマティック ----------------
function updateCinematic(ctx, dt) {
  const cam = ctx.camera;
  const pl = ctx.player;
  const gate = (ctx.world && ctx.world.castleGatePos) || _gateFallback;
  cineT += dt;
  let posRate = 1.5;

  if (mode === 'title') {
    // 開始地点の周囲をゆっくり周回するドリー。南側で城方向へ視線をブレンド。
    titleT += dt;
    const pp = pl.position;
    const ang = 0.85 + titleT * 0.07;
    const r = 14.5 + Math.sin(titleT * 0.10 + 0.6) * 2.4;               // 12.1〜16.9m
    const h = 2.9 + Math.sin(titleT * 0.06 + 1.5) * 1.3;                // 高さゆるやかに
    _a.set(pp.x + Math.sin(ang) * r, pp.y + h, pp.z + Math.cos(ang) * r);
    const k = 0.16 + 0.34 * Math.max(0, Math.cos(ang));                 // 南側ほど城寄り
    _c.set(-pp.x, 0, CASTLE_Z - pp.z);
    if (_c.lengthSq() > 0.001) _c.normalize();
    _b.set(
      pp.x + _c.x * 26 * k,
      pp.y + HEAD_Y + 5.5 * k,
      pp.z + _c.z * 26 * k);
    fovTarget = 50;
    posRate = 1.7;
  } else if (mode === 'bossIntro') {
    // 城門前を仰ぎ見るスイープ(下から上へ)
    const e = smoothstep(0, 6.5, cineT);
    _a.set(
      gate.x + lerp(-9, 7, e),
      gate.y + lerp(1.4, 10.5, e),
      gate.z + lerp(30, 24, e));
    _b.set(gate.x, gate.y + lerp(5, 26, e), gate.z + lerp(-4, -16, e));
    fovTarget = 52;
    posRate = 1.4;
  } else {
    // ending: 城前からゆっくり上昇し世界を見渡す
    const e = smoothstep(0, 16, cineT);
    _a.set(
      gate.x + Math.sin(cineT * 0.05) * 8,
      gate.y + lerp(5, 130, e),
      gate.z + lerp(45, 90, e));
    _b.set(gate.x, gate.y + lerp(18, 2, e), gate.z + lerp(-30, 620, e));
    fovTarget = 56;
    posRate = 1.2;
  }

  // カット禁止 — 位置・注視とも damp で滑らかに移動
  lookCur.lerp(_b, 1 - Math.exp(-2.3 * dt));
  basePos.lerp(_a, 1 - Math.exp(-posRate * dt));
  const gy = ctx.getGroundHeight(basePos.x, basePos.z) + 1.0;
  if (basePos.y < gy) basePos.y = gy;
  cam.position.copy(basePos);
  cam.lookAt(lookCur);
}

// ---------------- 画面揺れ ----------------
function applyShake(ctx, dt) {
  if (shakeAmp <= 0) return;
  shakeT += dt;
  const a = shakeAmp * Math.exp(-3.4 * shakeT);
  if (a < 0.003) {
    shakeAmp = 0;
    return;
  }
  const t = ctx.time.elapsed;
  const cam = ctx.camera;
  cam.position.x += a * 0.32 * (Math.sin(t * 33 + shakePhase[0]) * 0.62 + Math.sin(t * 51 + shakePhase[1]) * 0.38);
  cam.position.y += a * 0.26 * (Math.sin(t * 39 + shakePhase[2]) * 0.62 + Math.sin(t * 57 + shakePhase[3]) * 0.38);
  cam.position.z += a * 0.20 * Math.sin(t * 29 + shakePhase[4]);
  cam.rotateZ(a * 0.035 * Math.sin(t * 43 + shakePhase[5]));
}

// ---------------- 公開 ----------------
export async function init(ctx) {
  const pl = ctx.player;
  if (pl && pl.position) {
    lookCur.set(pl.position.x, pl.position.y + HEAD_Y, pl.position.z);
  }
  basePos.copy(ctx.camera.position);
  fovCur = ctx.camera.fov || FOV_BASE;
  fovTarget = fovCur;
  yaw = 0;
  pitch = 0.30;
  distTarget = 7.5;
  distCur = 7.5;
  collideCur = 7.5;
  mode = 'follow';
  requestedCine = null;
  lockTarget = null;
  shakeAmp = 0;

  api = {
    lockTarget: null,
    setLockTarget(e) { setLock(ctx, e || null); },
    shake(strength) { startShake(strength); },
    cinematic(m) {
      requestedCine = (m === 'title' || m === 'bossIntro' || m === 'ending') ? m : null;
    },
  };
  ctx.camera3p = api;

  // タイトル/ゲームオーバーに戻ったら明示シネマティックは破棄(取り残し防止)
  ctx.on('state', (d) => {
    const to = d && d.to;
    if (to === 'title' || to === 'gameover') requestedCine = null;
  });
}

export function update(ctx, dt) {
  const cam = ctx.camera;
  const pl = ctx.player;
  if (!cam || !pl || !pl.position) return;

  // state==='title' は常にタイトルシネマティック。それ以外は明示指定 or 追従。
  const active = ctx.state === 'title' ? 'title' : (requestedCine || 'follow');
  if (active !== mode) switchMode(active, ctx);

  if (mode === 'follow') updateFollow(ctx, dt);
  else updateCinematic(ctx, dt);

  // FOV(ダッシュ/シネマティック)を滑らかに反映
  fovCur = damp(fovCur, fovTarget, 4.5, dt);
  if (Math.abs(cam.fov - fovCur) > 0.002) {
    cam.fov = fovCur;
    cam.updateProjectionMatrix();
  }

  applyShake(ctx, dt);
}
