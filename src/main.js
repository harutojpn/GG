// アルディアの伝説 — エントリポイント / ゲームループ / 入力 / 状態管理
// 契約: ARCHITECTURE.md(このファイルは基盤所有者のみが編集する)
import * as THREE from 'three';
import { clamp } from './util.js';

import * as world from './world.js';
import * as sky from './sky.js';
import * as effects from './effects.js';
import * as player from './player.js';
import * as camera3p from './camera.js';
import * as combat from './combat.js';
import * as shrines from './shrines.js';
import * as boss from './boss.js';
import * as audio from './audio.js';
import * as ui from './ui.js';

// ---------------- レンダラ / シーン ----------------
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.3, 3000);
camera.position.set(0, 8, 262);

// ---------------- 入力 ----------------
const keys = new Set();
const justSet = new Set();
const mouse = { dx: 0, dy: 0, wheel: 0, left: false, right: false, leftJust: false, rightJust: false };

addEventListener('keydown', (e) => {
  if (e.repeat) return;
  keys.add(e.code);
  justSet.add(e.code);
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  firstGesture();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => { keys.clear(); mouse.left = mouse.right = false; });

canvas.addEventListener('pointerdown', (e) => {
  if (e.button === 0) { mouse.left = true; mouse.leftJust = true; }
  if (e.button === 2) { mouse.right = true; mouse.rightJust = true; }
  firstGesture();
  const s = ctx.state;
  if ((s === 'playing' || s === 'shrine' || s === 'boss') && !document.pointerLockElement) {
    try {
      const r = canvas.requestPointerLock?.();
      if (r && typeof r.catch === 'function') r.catch(() => {});
    } catch { /* iframe等でポインターロック不可 → 下のフリールックで代替 */ }
  }
});
addEventListener('pointerup', (e) => {
  if (e.button === 0) mouse.left = false;
  if (e.button === 2) mouse.right = false;
});
const cursor = { x: innerWidth / 2, y: innerHeight / 2 };
addEventListener('mousemove', (e) => {
  cursor.x = e.clientX; cursor.y = e.clientY;
  const s = ctx.state;
  const inGame = s === 'playing' || s === 'shrine' || s === 'boss';
  // ポインターロック中 / ゲーム中(ロック不可環境のフリールック) / ドラッグ中 は視点を回す
  if (document.pointerLockElement === canvas || inGame || mouse.left || mouse.right) {
    mouse.dx += e.movementX; mouse.dy += e.movementY;
  }
});

// ポインターロック不可環境: カーソルが画面端に達したら連続回転(端で視点が止まる問題の対策)
const EDGE = 90;            // 端とみなす幅(px)
const EDGE_SPEED = 1100;    // 最大押し込み時の回転量(px相当/秒)
function edgeLook(dt) {
  if (document.pointerLockElement === canvas) return;
  const s = ctx.state;
  if (s !== 'playing' && s !== 'shrine' && s !== 'boss') return;
  const w = innerWidth, h = innerHeight;
  let px = 0, py = 0;
  if (cursor.x < EDGE) px = -(EDGE - cursor.x) / EDGE;
  else if (cursor.x > w - EDGE) px = (cursor.x - (w - EDGE)) / EDGE;
  if (cursor.y < EDGE) py = -(EDGE - cursor.y) / EDGE;
  else if (cursor.y > h - EDGE) py = (cursor.y - (h - EDGE)) / EDGE;
  // 端に深く入るほど速く(2乗カーブで中央付近の誤爆を防ぐ)
  mouse.dx += px * Math.abs(px) * EDGE_SPEED * dt;
  mouse.dy += py * Math.abs(py) * EDGE_SPEED * dt;
}
addEventListener('wheel', (e) => { mouse.wheel += e.deltaY; }, { passive: true });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

let gestureDone = false;
function firstGesture() {
  if (gestureDone) return;
  gestureDone = true;
  ctx.audio?.unlock?.();
}

// ---------------- コンテキスト ----------------
const events = new EventTarget();

const ctx = {
  renderer, scene, camera, canvas,
  state: 'loading',
  setState(s) {
    const from = ctx.state;
    if (from === s) return;
    ctx.state = s;
    if (s === 'paused' || s === 'title' || s === 'gameover' || s === 'ending') {
      document.exitPointerLock?.();
    }
    ctx.emit('state', { from, to: s });
  },
  events,
  emit(name, detail) { events.dispatchEvent(new CustomEvent(name, { detail })); },
  on(name, fn) { events.addEventListener(name, (e) => fn(e.detail)); },
  time: { elapsed: 0, dt: 0, dayPhase: 0.10, isNight: false },
  input: {
    keys,
    justPressed: (code) => justSet.has(code),
    mouse,
    get pointerLocked() { return document.pointerLockElement === canvas; },
  },
  settings: { quality: 'high', musicVol: 0.7, sfxVol: 0.9 },
  quality: {},
  applyQuality() {
    const q = ctx.settings.quality;
    const dpr = window.devicePixelRatio || 1;
    ctx.quality = {
      pixelRatio: q === 'high' ? Math.min(dpr, 2) : q === 'medium' ? Math.min(dpr, 1.35) : 1,
      shadowMapSize: q === 'high' ? 2048 : q === 'medium' ? 1024 : 512,
      grassMul: q === 'high' ? 1 : q === 'medium' ? 0.55 : 0.28,
      particleMul: q === 'high' ? 1 : q === 'medium' ? 0.6 : 0.35,
      postFX: q !== 'low',
      drawDist: q === 'high' ? 1 : q === 'medium' ? 0.85 : 0.65,
    };
    renderer.setPixelRatio(ctx.quality.pixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    ctx.emit('quality-changed', ctx.quality);
  },

  // 地形アクセス(worldが設定し、shrine/bossが一時差し替え)
  getGroundHeight: () => 0,
  colliders: [],
  playerBounds: null,

  world: null, sky: null, player: null, camera3p: null, combat: null,
  shrines: null, boss: null, ui: null, audio: null, effects: null,
};

// ---------------- グローバル状態遷移 ----------------
ctx.on('game-start', () => ctx.setState('playing'));
ctx.on('player-died', () => {
  setTimeout(() => { if (ctx.state !== 'gameover') ctx.setState('gameover'); }, 1600);
});
ctx.on('respawn-request', () => {
  const p = ctx.player;
  p.heal(p.maxHp);
  p.teleport(ctx.world.startPos.clone(), Math.PI);
  ctx.setState('playing');
});
ctx.on('title-request', () => {
  const p = ctx.player;
  p.heal(p.maxHp);
  p.teleport(ctx.world.startPos.clone(), Math.PI);
  ctx.setState('title');
});

// ---------------- リサイズ ----------------
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  ctx.effects?.onResize?.(innerWidth, innerHeight);
});

// ---------------- 起動 ----------------
const bootStatus = document.getElementById('boot-status');
const bootBar = document.getElementById('boot-bar');
function bootProgress(i, total, label) {
  if (bootStatus) bootStatus.textContent = label;
  if (bootBar) bootBar.style.width = `${Math.round((i / total) * 100)}%`;
}

const MODULES = [
  ['大地を創造しています…', world],
  ['空と光を呼んでいます…', sky],
  ['風の粒子を織っています…', effects],
  ['勇者を目覚めさせています…', player],
  ['視界を整えています…', camera3p],
  ['魔物が蠢いています…', combat],
  ['祠に灯を点しています…', shrines],
  ['魔城が軋んでいます…', boss],
  ['旋律を紡いでいます…', audio],
  ['旅支度をしています…', ui],
];

async function boot() {
  ctx.applyQuality();
  let i = 0;
  for (const [label, mod] of MODULES) {
    bootProgress(i, MODULES.length, label);
    // 描画1フレーム分譲ってUI更新を反映
    await new Promise((r) => requestAnimationFrame(r));
    try {
      await mod.init(ctx);
    } catch (err) {
      console.warn('[init失敗]', label, err);
    }
    i++;
  }
  bootProgress(MODULES.length, MODULES.length, '準備完了');
  document.getElementById('boot')?.classList.add('boot-done');
  setTimeout(() => document.getElementById('boot')?.remove(), 900);
  ctx.setState('title');
  requestAnimationFrame(loop);
}

// ---------------- メインループ ----------------
const clock = new THREE.Clock();
const DAY_LENGTH = 240; // 秒/一昼夜

const GAMEPLAY = [player, camera3p, world, sky, combat, shrines, boss, effects, audio, ui];
const AMBIENT = [camera3p, world, sky, effects, audio, ui]; // title / gameover / ending
const PAUSED = [audio, ui];

function loop() {
  requestAnimationFrame(loop);
  const dt = clamp(clock.getDelta(), 0, 1 / 20);
  ctx.time.dt = dt;
  ctx.time.elapsed += dt;

  edgeLook(dt);

  const s = ctx.state;
  const active = (s === 'playing' || s === 'shrine' || s === 'boss') ? GAMEPLAY
    : (s === 'title' || s === 'gameover' || s === 'ending') ? AMBIENT
    : (s === 'paused') ? PAUSED : null;

  // 昼夜の進行(ポーズ・祠内部では停止)
  if (s === 'playing' || s === 'boss' || s === 'title') {
    ctx.time.dayPhase = (ctx.time.dayPhase + dt / DAY_LENGTH) % 1;
  }
  ctx.time.isNight = ctx.time.dayPhase > 0.55 && ctx.time.dayPhase < 0.95;

  // ポーズ切替
  if ((s === 'playing' || s === 'shrine' || s === 'boss') &&
      (justSet.has('Escape') || justSet.has('KeyP'))) {
    ctx._pausedFrom = s;
    ctx.setState('paused');
  } else if (s === 'paused' && (justSet.has('Escape') || justSet.has('KeyP'))) {
    ctx.setState(ctx._pausedFrom || 'playing');
  }

  if (active) {
    for (const mod of active) {
      try { mod.update(ctx, dt); } catch (err) {
        if (!mod._errOnce) { mod._errOnce = true; console.warn('[update失敗]', err); }
      }
    }
  }

  try { ctx.effects?.render?.(dt); } catch { renderer.render(scene, camera); }

  // フレーム末: 単発入力をリセット
  justSet.clear();
  mouse.dx = 0; mouse.dy = 0; mouse.wheel = 0;
  mouse.leftJust = false; mouse.rightJust = false;
}

// デバッグ/自動テスト用(shot.mjs の eval から状態操作するために公開)
window.__ctx = ctx;

boot();
