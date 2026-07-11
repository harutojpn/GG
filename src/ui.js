// ui.js — 全DOM UI(タイトル / HUD / ダイアログ / ポーズ / 設定 / ミニマップ / 死亡 / エンディング)
// 契約: ARCHITECTURE.md — ctx.ui = { showMessage, showDialog, setPrompt, toast, setBossBar, flash }
// css/style.css はこのモジュールの担当者が全面所有する。
import * as THREE from 'three';
import { clamp, damp, TMP } from './util.js';

let C = null;      // 共有コンテキスト
let root = null;   // #ui-root
const R = {};      // DOM 参照
const stats = { playTime: 0, kills: 0 };

// ---------------- 定数 ----------------
const HEART_D = 'M12 20.3C7.9 17.2 1.7 12.6 1.7 7.8 1.7 4.8 4 2.6 6.7 2.6c2.1 0 4 1.2 5.3 3.3 1.3-2.1 3.2-3.3 5.3-3.3 2.7 0 5 2.2 5 5.2 0 4.8-6.2 9.4-10.3 12.5z';
const ST_CIRC = 150.8; // 2π×24

const INTRO_LINES = [
  '遠き昔——大地アルディアを闇で覆った魔獣ヴァルモスは、初代勇者の剣によって北の古城の奥深くに封じられた。',
  'だが永き時は封印を蝕み、魔獣はいま再び目覚める。城は瘴気に沈み、大地には魔物の影が這い始めた……。',
  '緑衣の勇者よ——4つの祠を巡り「気の珠」を3つ集め、北の魔城の結界を破るのだ。大地の命運は、その手に。',
];

const GUIDE_ROWS = [
  ['W A S D', '移動'],
  ['マウス', 'カメラ'],
  ['左クリック / J', '攻撃'],
  ['右クリック / K', 'ガード'],
  ['Q', 'ロックオン'],
  ['C', '回避ロール'],
];

const CTL_ROWS = [
  ['WASD / 矢印', '移動'],
  ['マウス / ドラッグ', 'カメラ(クリックで視点固定)'],
  ['Shift', 'ダッシュ(スタミナ消費)'],
  ['Space', 'ジャンプ'],
  ['左クリック / J', '攻撃(3段コンボ)'],
  ['右クリック / K', '盾ガード'],
  ['Q', 'ロックオン切替'],
  ['C', '回避ロール(スタミナ消費・無敵時間)'],
  ['E', '調べる・話す・決定'],
  ['Esc / P', 'ポーズ'],
];

// ---------------- 小さなヘルパー ----------------
function el(tag, cls, parent) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (parent) parent.appendChild(e);
  return e;
}
function retrigger(node, cls) {
  node.classList.remove(cls);
  void node.offsetWidth;
  node.classList.add(cls);
}
function keycaps(s) {
  return s.split(' / ').map((k) => `<span class="kc">${k}</span>`).join('<span class="ksep">/</span>');
}
function fmtTime(t) {
  t = Math.max(0, Math.floor(t));
  const h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
  return h > 0 ? `${h}時間${m}分${s}秒` : m > 0 ? `${m}分${s}秒` : `${s}秒`;
}
function showScreen(sc) {
  clearTimeout(sc._hideT);
  sc.classList.remove('leaving');
  sc.classList.add('visible');
}
function hideScreen(sc) {
  if (!sc.classList.contains('visible') || sc.classList.contains('leaving')) return;
  sc.classList.add('leaving');
  sc._hideT = setTimeout(() => sc.classList.remove('visible', 'leaving'), 400);
}

// ================================================================
// init
// ================================================================
export async function init(ctx) {
  C = ctx;
  root = document.getElementById('ui-root');
  root.innerHTML = '';

  buildDefs();
  buildVignette();
  buildHUD();
  buildReticle();
  buildFloatLayer();
  buildMessageLayer();
  buildBossBar();
  buildGuide();
  buildDialog();
  buildToastLayer();
  buildFlash();
  buildTitle();
  buildPause();
  buildGameover();
  buildEnding();
  buildModal();
  wireSounds();
  buildMinimapBase();

  ctx.ui = { showMessage, showDialog, setPrompt, toast, setBossBar, flash };

  ctx.on('state', onState);
  ctx.on('player-damaged', onDamaged);
  ctx.on('enemy-killed', () => { stats.kills++; });
  ctx.on('pickup', onPickup);
  ctx.on('game-start', () => { stats.playTime = 0; stats.kills = 0; });

  document.body.dataset.uistate = ctx.state;
}

// ================================================================
// update(毎フレーム)
// ================================================================
export function update(ctx, dt) {
  const s = ctx.state;
  const inGame = s === 'playing' || s === 'shrine' || s === 'boss';
  if (inGame) stats.playTime += dt;
  if (modal.open && ctx.input.justPressed('Escape')) closeModal();
  if (dlg.active) dlgUpdate(dt, inGame || s === 'title');
  if (inGame) {
    hudUpdate(dt);
    reticleUpdate();
  }
  if (boss.visible) bossUpdate(dt);
}

// ================================================================
// 状態遷移
// ================================================================
function onState(d) {
  const to = d.to;
  document.body.dataset.uistate = to;
  closeModal(true);
  const inGame = to === 'playing' || to === 'shrine' || to === 'boss';
  R.hud.classList.toggle('on', inGame);
  if (inGame) wakeHud();

  if (to === 'title') showScreen(R.title); else hideScreen(R.title);
  if (to === 'paused') { fillPauseStats(); showScreen(R.pause); } else hideScreen(R.pause);
  if (to === 'gameover') showScreen(R.gameover); else hideScreen(R.gameover);
  if (to === 'ending') { fillEndingStats(); showScreen(R.ending); } else hideScreen(R.ending);

  if (!inGame && to !== 'paused') {
    setPrompt(null);
    R.reticle.classList.remove('on');
    retOn = false;
    R.guide.classList.remove('on');
    R.vignette.classList.remove('active');
    lowHp = false;
    if (to === 'title' || to === 'ending') setBossBar(false);
  }
  if (to === 'gameover' || to === 'title' || to === 'ending') cancelDialogs();
}

// ================================================================
// 共通ビルド
// ================================================================
function buildDefs() {
  const d = el('div', 'svg-defs', root);
  d.innerHTML = `<svg width="0" height="0" aria-hidden="true"><defs>
    <linearGradient id="ui-hgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff9aa2"/><stop offset=".42" stop-color="#e2465a"/><stop offset="1" stop-color="#9a2136"/>
    </linearGradient>
    <radialGradient id="ui-hsheen" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="rgba(255,255,255,.85)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <linearGradient id="ui-ggrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c6f4d5"/><stop offset=".45" stop-color="#5cc488"/><stop offset="1" stop-color="#217c4d"/>
    </linearGradient>
    <linearGradient id="ui-stgrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8bf1e0"/><stop offset=".55" stop-color="#3fd9c4"/><stop offset="1" stop-color="#23b7a2"/>
    </linearGradient>
  </defs></svg>`;
}

function buildVignette() { R.vignette = el('div', '', root); R.vignette.id = 'vignette'; }
function buildFlash() { R.flash = el('div', '', root); R.flash.id = 'flash'; }
function buildFloatLayer() { R.floatLayer = el('div', '', root); R.floatLayer.id = 'float-layer'; }

// ================================================================
// HUD
// ================================================================
function buildHUD() {
  const hud = el('div', '', root); hud.id = 'hud'; R.hud = hud;

  const left = el('div', '', hud); left.id = 'hud-left';
  R.hearts = el('div', '', left); R.hearts.id = 'hearts';

  const st = el('div', '', left); st.id = 'stamina'; R.stamina = st;
  st.innerHTML = `<svg viewBox="0 0 60 60">
    <circle class="stb" cx="30" cy="30" r="24"/>
    <circle class="stf" cx="30" cy="30" r="24" transform="rotate(-90 30 30)" stroke-dashoffset="0"/>
  </svg>`;
  R.stFg = st.querySelector('.stf');

  const orbs = el('div', '', left); orbs.id = 'orbs';
  R.orbs = [];
  for (let i = 0; i < 4; i++) R.orbs.push(el('span', 'orb', orbs));

  const gems = el('div', '', left); gems.id = 'gems'; R.gems = gems;
  gems.innerHTML = `<svg viewBox="0 0 24 24">
    <path d="M12 2.4 19.6 9 12 21.6 4.4 9Z" fill="url(#ui-ggrad)" stroke="rgba(235,255,240,.4)" stroke-width=".7"/>
    <path d="M4.4 9h15.2M12 2.4 8.4 9l3.6 12.6L15.6 9 12 2.4" fill="none" stroke="rgba(240,255,245,.3)" stroke-width=".6"/>
  </svg><span class="g-count">0</span>`;
  R.gemCount = gems.querySelector('.g-count');

  const mm = el('div', '', hud); mm.id = 'minimap';
  const cv = document.createElement('canvas');
  cv.width = 340; cv.height = 340;
  mm.appendChild(cv);
  R.mapCanvas = cv;

  const pr = el('div', '', hud); pr.id = 'prompt'; R.prompt = pr;
  R.pKey = el('span', 'p-key', pr);
  R.pTxt = el('span', 'p-txt', pr);
}

// ---- ハート列 ----
let prevHp = -1, prevMax = -1, lowHp = false;
function renderHearts(hp, maxHp) {
  let html = '';
  for (let i = 0; i < maxHp; i++) {
    const v = hp - i;
    const cls = v >= 1 ? 'full' : v >= 0.5 ? 'half' : 'empty';
    html += `<svg class="heart ${cls}" viewBox="0 0 24 22"><path class="hb" d="${HEART_D}"/><path class="hf" d="${HEART_D}" fill="url(#ui-hgrad)"/><ellipse class="hsheen" cx="8.4" cy="7" rx="3.1" ry="2" fill="url(#ui-hsheen)"/></svg>`;
  }
  R.hearts.innerHTML = html;
}

// ---- スタミナ ----
let stShow = false, stFullT = 0, stEx = false, prevStOff = -1;
// ---- 珠・緑石 ----
let prevOrbs = -1, prevGems = -1;
// ---- HUD静穏フェード(探索中は空気のように控えめに) ----
let hudActiveT = 0, hudIdle = false;
const HUD_IDLE_DELAY = 4.5; // 無操作でこの秒数後に薄れる
function wakeHud() {
  hudActiveT = 0;
  if (hudIdle) { hudIdle = false; if (R.hud) R.hud.classList.remove('idle'); }
}

function hudUpdate(dt) {
  const p = C.player;
  if (!p) return;

  // ハート
  const hp = Math.round(clamp(p.hp, 0, 99) * 2) / 2;
  const maxHp = Math.max(1, Math.round(p.maxHp));
  if (hp !== prevHp || maxHp !== prevMax) {
    if (prevMax > 0 && maxHp > prevMax) retrigger(R.hearts, 'bless');
    renderHearts(hp, maxHp);
    if (prevHp >= 0) wakeHud();
    prevHp = hp; prevMax = maxHp;
  }

  // 低HP警告
  const low = p.hp > 0 && p.hp <= 1.0;
  if (low !== lowHp) { lowHp = low; R.vignette.classList.toggle('active', low); }

  // スタミナ円弧
  const frac = clamp(p.stamina / Math.max(1, p.maxStamina), 0, 1);
  if (frac >= 0.999) {
    stFullT += dt;
    if (stShow && stFullT > 0.55) { stShow = false; R.stamina.classList.remove('on'); }
  } else {
    stFullT = 0;
    if (!stShow) { stShow = true; R.stamina.classList.add('on'); }
  }
  if (!stEx && p.stamina <= 0.02) { stEx = true; R.stamina.classList.add('ex'); }
  else if (stEx && p.stamina > 30) { stEx = false; R.stamina.classList.remove('ex'); }
  const off = Math.round(ST_CIRC * (1 - frac) * 10) / 10;
  if (off !== prevStOff) { prevStOff = off; R.stFg.style.strokeDashoffset = off; }

  // 気の珠
  const orbs = clamp(p.spiritOrbs | 0, 0, 4);
  if (orbs !== prevOrbs) {
    for (let i = 0; i < 4; i++) {
      const o = R.orbs[i];
      if (i < orbs) {
        if (!o.classList.contains('lit')) {
          o.classList.add('lit');
          retrigger(o, 'gain');
          setTimeout(() => o.classList.remove('gain'), 950);
        }
      } else o.classList.remove('lit');
    }
    if (prevOrbs >= 0) wakeHud();
    prevOrbs = orbs;
  }

  // 緑石
  const gems = p.gems | 0;
  if (gems !== prevGems) {
    R.gemCount.textContent = gems;
    if (prevGems >= 0 && gems > prevGems) { retrigger(R.gems, 'pop'); wakeHud(); }
    prevGems = gems;
  }

  // 静穏フェード: 戦闘・スタミナ消費・プロンプト・低HP・会話中は常時鮮明、
  // それ以外(平穏な移動・探索)ではハートとミニマップだけを薄く残して世界に溶け込ませる
  const busy = boss.visible || stShow || !!promptCur || lowHp || dlg.active;
  if (busy) hudActiveT = 0; else hudActiveT += dt;
  const idle = !busy && hudActiveT > HUD_IDLE_DELAY;
  if (idle !== hudIdle) { hudIdle = idle; R.hud.classList.toggle('idle', idle); }

  drawMinimap();
}

function onDamaged() {
  wakeHud();
  retrigger(R.hearts, 'hurt');
  flash('rgba(186,26,42,1)', 0.16);
}

function onPickup(d) {
  wakeHud();
  const kind = d && d.kind;
  let x = innerWidth * 0.5, y = innerHeight * 0.58;
  if (d && d.pos && C.camera) {
    const sc = worldToScreen(d.pos, 1.4);
    if (sc.ok) { x = sc.x; y = sc.y; }
  }
  const color = kind === 'heart' ? '#ff93a0' : kind === 'orb' ? '#66ecd9' : '#93e6ab';
  floatText('+1', x, y, color);
}

function floatText(text, x, y, color) {
  const f = el('div', 'float-txt', R.floatLayer);
  f.textContent = text;
  f.style.left = x + 'px';
  f.style.top = y + 'px';
  if (color) f.style.color = color;
  setTimeout(() => f.remove(), 1250);
}

// ================================================================
// ミニマップ
// ================================================================
const map = { g: null, off: null, shade: null };

function buildMinimapBase() {
  try {
    const g = R.mapCanvas.getContext('2d');
    map.g = g;
    const sh = g.createRadialGradient(85, 85, 22, 85, 85, 85);
    sh.addColorStop(0, 'rgba(8,12,14,.05)');
    sh.addColorStop(0.62, 'rgba(8,12,14,.16)');
    sh.addColorStop(0.86, 'rgba(7,10,12,.4)');
    sh.addColorStop(1, 'rgba(6,9,11,.66)');
    map.shade = sh;

    const world = C.world;
    if (!world || !world.getHeight) return;
    const N = 64;
    const src = document.createElement('canvas');
    src.width = src.height = N;
    const sg = src.getContext('2d');
    const img = sg.createImageData(N, N);
    const hs = new Float32Array(N * N);
    let hmin = 1e9, hmax = -1e9;
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const x = -1000 + ((i + 0.5) * 2000) / N;
        const z = -1000 + ((j + 0.5) * 2000) / N;
        let h = 0;
        try { h = world.getHeight(x, z) || 0; } catch (e) { /* noop */ }
        hs[j * N + i] = h;
        if (h < hmin) hmin = h;
        if (h > hmax) hmax = h;
      }
    }
    const span = Math.max(1, hmax - hmin);
    // 落ち着いた低彩度トーン(世界に溶け込む上品な地図)
    const COL = {
      plains: [92, 118, 82], forest: [58, 92, 74], lake: [76, 116, 134],
      volcano: [112, 78, 66], castle: [88, 80, 102], ruins: [120, 114, 100],
    };
    const WATER = [64, 102, 122];
    const wl = typeof world.waterLevel === 'number' ? world.waterLevel : -1e9;
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const x = -1000 + ((i + 0.5) * 2000) / N;
        const z = -1000 + ((j + 0.5) * 2000) / N;
        let biome = 'plains';
        try { biome = world.getBiome(x, z) || 'plains'; } catch (e) { /* noop */ }
        const h = hs[j * N + i];
        const c = h <= wl + 0.15 ? WATER : (COL[biome] || COL.plains);
        const b = 0.66 + 0.34 * ((h - hmin) / span);
        const o = (j * N + i) * 4;
        img.data[o] = Math.min(255, c[0] * b);
        img.data[o + 1] = Math.min(255, c[1] * b);
        img.data[o + 2] = Math.min(255, c[2] * b);
        img.data[o + 3] = 255;
      }
    }
    sg.putImageData(img, 0, 0);
    const off = document.createElement('canvas');
    off.width = off.height = 256;
    const og = off.getContext('2d');
    og.imageSmoothingEnabled = true;
    og.imageSmoothingQuality = 'high';
    og.drawImage(src, 0, 0, 256, 256);
    map.off = off;
  } catch (e) { /* 地図なしでも致命ではない */ }
}

function mapDiamond(g, x, y, r, color) {
  g.save();
  g.translate(x, y);
  g.rotate(Math.PI / 4);
  g.shadowColor = color;
  g.shadowBlur = 5;
  g.fillStyle = color;
  g.fillRect(-r * 0.7, -r * 0.7, r * 1.4, r * 1.4);
  g.restore();
}

function drawMinimap() {
  const g = map.g;
  if (!g) return;
  const S = 170, c = 85, rad = 83, k = S / 2000;
  g.setTransform(2, 0, 0, 2, 0, 0);
  g.clearRect(0, 0, S, S);
  g.save();
  g.beginPath();
  g.arc(c, c, rad, 0, Math.PI * 2);
  g.clip();
  if (map.off) g.drawImage(map.off, 0, 0, 256, 256, 0, 0, S, S);
  else { g.fillStyle = '#20303a'; g.fillRect(0, 0, S, S); }
  if (map.shade) { g.fillStyle = map.shade; g.fillRect(0, 0, S, S); }

  // 祠 ◆(未クリア: シアン / クリア: 金)
  const list = C.shrines && C.shrines.list;
  if (list) {
    for (let i = 0; i < list.length; i++) {
      const sh = list[i];
      if (!sh || !sh.pos) continue;
      mapDiamond(g, c + sh.pos.x * k, c + sh.pos.z * k, 4, sh.completed ? '#e9cd75' : '#3fe0c8');
    }
  }
  // 魔城 ▲(紫)
  const cg = C.world && C.world.castleGatePos;
  if (cg) {
    const x = c + cg.x * k, y = c + cg.z * k;
    g.save();
    g.shadowColor = '#c08df0';
    g.shadowBlur = 6;
    g.fillStyle = '#bd88ef';
    g.beginPath();
    g.moveTo(x, y - 5.4);
    g.lineTo(x + 4.8, y + 3.8);
    g.lineTo(x - 4.8, y + 3.8);
    g.closePath();
    g.fill();
    g.restore();
  }
  // プレイヤー矢印(向きに回転)
  const p = C.player;
  if (p && p.position) {
    let mx = p.position.x * k, mz = p.position.z * k;
    const d = Math.hypot(mx, mz), lim = rad - 8;
    if (d > lim) { mx *= lim / d; mz *= lim / d; }
    g.save();
    g.translate(c + mx, c + mz);
    g.rotate(Math.PI - (p.heading || 0));
    g.shadowColor = 'rgba(255,244,206,.95)';
    g.shadowBlur = 5;
    g.fillStyle = '#fff6da';
    g.beginPath();
    g.moveTo(0, -6.2);
    g.lineTo(4.4, 4.8);
    g.lineTo(0, 2.3);
    g.lineTo(-4.4, 4.8);
    g.closePath();
    g.fill();
    g.restore();
  }
  g.restore();

  // 金の細縁(細く控えめに) + 北方位
  g.beginPath();
  g.arc(c, c, rad, 0, Math.PI * 2);
  g.strokeStyle = 'rgba(201,162,39,.62)';
  g.lineWidth = 1;
  g.stroke();
  g.beginPath();
  g.arc(c, c, rad - 2.6, 0, Math.PI * 2);
  g.strokeStyle = 'rgba(233,205,117,.14)';
  g.lineWidth = 0.8;
  g.stroke();
  g.beginPath();
  g.arc(c, c - rad + 9, 6.6, 0, Math.PI * 2);
  g.fillStyle = 'rgba(8,12,15,.7)';
  g.fill();
  g.strokeStyle = 'rgba(201,162,39,.42)';
  g.lineWidth = 0.8;
  g.stroke();
  g.font = '9px serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = 'rgba(236,201,102,.92)';
  g.fillText('北', c, c - rad + 9.4);
}

// ================================================================
// ロックオンレティクル
// ================================================================
const _inv = new THREE.Matrix4();
const _scr = { x: 0, y: 0, ok: false };
let retOn = false;

function worldToScreen(pos, yOff) {
  const cam = C.camera;
  cam.updateMatrixWorld();
  _inv.copy(cam.matrixWorld).invert();
  TMP.v1.set(pos.x, pos.y + (yOff || 0), pos.z).applyMatrix4(_inv);
  if (TMP.v1.z > -0.35) { _scr.ok = false; return _scr; } // カメラ後方
  TMP.v1.applyMatrix4(cam.projectionMatrix);
  _scr.ok = TMP.v1.x > -1.08 && TMP.v1.x < 1.08 && TMP.v1.y > -1.08 && TMP.v1.y < 1.08;
  _scr.x = (TMP.v1.x * 0.5 + 0.5) * innerWidth;
  _scr.y = (0.5 - TMP.v1.y * 0.5) * innerHeight;
  return _scr;
}

function buildReticle() {
  const r = el('div', '', root); r.id = 'reticle'; R.reticle = r;
  el('div', 'r1', r);
  el('div', 'r2', r);
}

function reticleUpdate() {
  const t = C.camera3p && C.camera3p.lockTarget;
  let ok = false;
  if (t && t.alive !== false && t.pos) {
    const sc = worldToScreen(t.pos, (t.radius || 0.8) * 1.1);
    if (sc.ok) {
      ok = true;
      R.reticle.style.transform = `translate3d(${sc.x.toFixed(1)}px,${sc.y.toFixed(1)}px,0)`;
    }
  }
  if (ok !== retOn) { retOn = ok; R.reticle.classList.toggle('on', ok); }
}

// ================================================================
// プロンプト
// ================================================================
let promptCur = null;
function setPrompt(text) {
  const t = text || null;
  if (t === promptCur) return;
  promptCur = t;
  if (!t) { R.prompt.classList.remove('on'); return; }
  const m = /^([A-Za-z0-9]{1,8})\s*キー\s*[::]?\s*(.*)$/.exec(t);
  if (m) {
    R.pKey.style.display = '';
    R.pKey.textContent = m[1];
    R.pTxt.textContent = m[2] || '';
  } else {
    R.pKey.style.display = 'none';
    R.pTxt.textContent = t;
  }
  retrigger(R.prompt, 'on');
}

// ================================================================
// ボスバー
// ================================================================
const boss = { visible: false, ghost: 1, lastFill: -1, lastGhost: -1 };

function buildBossBar() {
  const b = el('div', '', root); b.id = 'bossbar'; R.bossbar = b;
  b.innerHTML = `<div class="bb-name"></div>
    <div class="bb-frame"><div class="bb-track"><div class="bb-ghost"></div><div class="bb-fill"></div></div></div>`;
  R.bbName = b.querySelector('.bb-name');
  R.bbFill = b.querySelector('.bb-fill');
  R.bbGhost = b.querySelector('.bb-ghost');
}

function setBossBar(visible, name) {
  const v = !!visible;
  if (name != null) R.bbName.textContent = String(name);
  if (v === boss.visible) return;
  boss.visible = v;
  if (v) { boss.ghost = 1; boss.lastFill = -1; boss.lastGhost = -1; bossUpdate(0); }
  R.bossbar.classList.toggle('on', v);
}

function bossUpdate(dt) {
  const b = C.boss;
  if (!b) return;
  const frac = clamp(b.maxHp > 0 ? b.hp / b.maxHp : 0, 0, 1);
  boss.ghost = Math.max(frac, damp(boss.ghost, frac, 2.2, dt));
  const f = Math.round(frac * 1000) / 10;
  const gh = Math.round(boss.ghost * 1000) / 10;
  if (f !== boss.lastFill) { boss.lastFill = f; R.bbFill.style.width = f + '%'; }
  if (gh !== boss.lastGhost) { boss.lastGhost = gh; R.bbGhost.style.width = gh + '%'; }
}

// ================================================================
// showMessage(キュー式・中央上)
// ================================================================
const msgQ = [];
let msgBusy = false;

function buildMessageLayer() { R.msgLayer = el('div', '', root); R.msgLayer.id = 'msg-layer'; }

function showMessage(text, opts) {
  const o = opts || {};
  msgQ.push({
    text: String(text == null ? '' : text),
    duration: typeof o.duration === 'number' ? o.duration : 3,
    sub: o.sub == null ? null : String(o.sub),
  });
  pumpMsg();
}

function pumpMsg() {
  if (msgBusy || !msgQ.length) return;
  msgBusy = true;
  const m = msgQ.shift();
  const box = el('div', 'msg', R.msgLayer);
  el('div', 'msg-rule', box);
  const t = el('div', 'msg-text', box);
  t.textContent = m.text;
  if (m.sub) { const su = el('div', 'msg-sub', box); su.textContent = m.sub; }
  el('div', 'msg-rule', box);
  requestAnimationFrame(() => box.classList.add('in'));
  setTimeout(() => {
    box.classList.add('outing');
    setTimeout(() => { box.remove(); msgBusy = false; pumpMsg(); }, 620);
  }, Math.max(0.4, m.duration) * 1000 + 420);
}

// ================================================================
// toast(右上・キュー式)
// ================================================================
const toastQ = [];
let toastN = 0;

function buildToastLayer() { R.toastLayer = el('div', '', root); R.toastLayer.id = 'toast-layer'; }

function toast(text) {
  toastQ.push(String(text == null ? '' : text));
  pumpToast();
}

function pumpToast() {
  if (toastN >= 4 || !toastQ.length) return;
  toastN++;
  const txt = toastQ.shift();
  const t = el('div', 'toast', R.toastLayer);
  const dia = el('span', 't-dia', t);
  dia.textContent = '◆';
  const sp = el('span', '', t);
  sp.textContent = txt;
  requestAnimationFrame(() => t.classList.add('in'));
  setTimeout(() => {
    t.classList.add('out');
    setTimeout(() => { t.remove(); toastN--; pumpToast(); }, 380);
  }, 2500);
}

// ================================================================
// showDialog(下部パネル・タイプ演出)
// ================================================================
const dlg = { q: [], active: false, lines: null, onDone: null, li: 0, chars: 0, t: 0, done: false };

function buildDialog() {
  const d = el('div', 'panel', root); d.id = 'dialog'; R.dialog = d;
  const orn = el('div', 'dlg-orn', d);
  orn.textContent = '◆';
  R.dlgText = el('div', 'dlg-text', d);
  R.dlgNext = el('div', 'dlg-next', d);
  R.dlgNext.textContent = '▼';
  d.addEventListener('click', () => dlgAdvance());
}

function showDialog(lines, onDone) {
  const arr = Array.isArray(lines)
    ? lines.filter((l) => l != null).map(String)
    : lines != null ? [String(lines)] : [];
  if (!arr.length) { if (typeof onDone === 'function') onDone(); return; }
  dlg.q.push({ lines: arr, onDone });
  if (!dlg.active) nextDlg();
}

function nextDlg() {
  const item = dlg.q.shift();
  if (!item) { dlg.active = false; return; }
  dlg.active = true;
  dlg.lines = item.lines;
  dlg.onDone = item.onDone;
  R.dialog.classList.add('visible');
  startDlgLine(0);
}

function startDlgLine(i) {
  dlg.li = i; dlg.chars = 0; dlg.t = 0; dlg.done = false;
  R.dlgText.textContent = '';
  R.dlgNext.classList.remove('on');
}

function dlgFlush() {
  const line = dlg.lines[dlg.li];
  R.dlgText.textContent = line.slice(0, dlg.chars);
  if (dlg.chars >= line.length) {
    dlg.done = true;
    R.dlgNext.classList.add('on');
  }
}

function dlgAdvance() {
  if (!dlg.active || !dlg.lines) return;
  if (C.audio && C.audio.play) C.audio.play('ui');
  if (!dlg.done) { dlg.chars = dlg.lines[dlg.li].length; dlgFlush(); return; }
  if (dlg.li < dlg.lines.length - 1) { startDlgLine(dlg.li + 1); return; }
  const cb = dlg.onDone;
  dlg.lines = null; dlg.onDone = null; dlg.done = false;
  R.dialog.classList.remove('visible');
  setTimeout(nextDlg, 280);
  if (typeof cb === 'function') { try { cb(); } catch (e) { /* noop */ } }
}

function dlgUpdate(dt, interactive) {
  if (!dlg.lines) return;
  if (!dlg.done) {
    dlg.t += dt;
    const line = dlg.lines[dlg.li];
    let n = dlg.chars;
    while (dlg.t >= 0.02 && n < line.length) { dlg.t -= 0.02; n++; }
    if (n !== dlg.chars) { dlg.chars = n; dlgFlush(); }
  }
  if (interactive && C.input.justPressed('KeyE')) dlgAdvance();
}

function cancelDialogs() {
  dlg.q.length = 0;
  dlg.lines = null; dlg.onDone = null;
  dlg.active = false; dlg.done = false;
  R.dialog.classList.remove('visible');
}

// ================================================================
// flash
// ================================================================
function flash(color, opacity) {
  const f = R.flash;
  f.style.transition = 'none';
  f.style.background = color || '#ffffff';
  f.style.opacity = String(clamp(opacity == null ? 0.5 : opacity, 0, 1));
  void f.offsetWidth;
  f.style.transition = 'opacity .3s ease-out';
  f.style.opacity = '0';
}

// ================================================================
// 操作ガイド(開始直後 5 秒)
// ================================================================
function buildGuide() {
  const g = el('div', 'panel', root); g.id = 'guide'; R.guide = g;
  let rows = '';
  for (const [k, a] of GUIDE_ROWS) rows += `<div class="gd-k">${keycaps(k)}</div><div class="gd-a">${a}</div>`;
  g.innerHTML = `<div class="gd-title">旅の心得</div><div class="gd-rows">${rows}</div>`;
}

function showGuide() {
  R.guide.classList.add('on');
  clearTimeout(R.guide._t);
  R.guide._t = setTimeout(() => R.guide.classList.remove('on'), 5000);
}

// ================================================================
// タイトル
// ================================================================
function buildTitle() {
  const t = el('section', 'screen', root); t.id = 'title-screen'; R.title = t;
  t.innerHTML = `
    <div class="tt-center">
      <div class="tt-orn tt-orn-t"><span class="tl"></span><span class="td">◆</span><span class="tl r"></span></div>
      <h1 class="tt-logo">アルディアの伝説</h1>
      <div class="tt-sub">〜緑衣の勇者と滅びの魔城〜</div>
      <div class="tt-orn tt-orn-b"><span class="tl"></span><span class="td sm">◆</span><span class="tl r"></span></div>
      <nav class="tt-menu">
        <button class="mbtn" data-act="start">はじめる</button>
        <button class="mbtn" data-act="controls">操作方法</button>
        <button class="mbtn" data-act="settings">設定</button>
      </nav>
    </div>
    <footer class="tt-foot">オリジナルファンメイド作品 — ゼルダの伝説へのオマージュ</footer>`;
  t.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'start') startAdventure();
    else if (act === 'controls') openModal('controls');
    else if (act === 'settings') openModal('settings');
  });
}

function startAdventure() {
  C.emit('game-start');
  showDialog(INTRO_LINES, showGuide);
}

// ================================================================
// ポーズ
// ================================================================
function buildPause() {
  const p = el('section', 'screen', root); p.id = 'pause-screen'; R.pause = p;
  p.innerHTML = `
    <h2 class="pz-head">休息</h2>
    <div class="tt-orn pz-orn"><span class="tl"></span><span class="td sm">◆</span><span class="tl r"></span></div>
    <nav class="pz-menu">
      <button class="mbtn" data-act="resume">再開</button>
      <button class="mbtn" data-act="settings">設定</button>
      <button class="mbtn" data-act="title">タイトルへ</button>
    </nav>
    <div class="pz-stats">
      <div class="stat"><span class="s-l">旅の時間</span><span class="s-v pz-time">—</span></div>
      <div class="stat"><span class="s-l">討伐した魔物</span><span class="s-v pz-kills">0</span></div>
      <div class="stat"><span class="s-l">緑石</span><span class="s-v pz-gems">0</span></div>
    </div>`;
  R.pzTime = p.querySelector('.pz-time');
  R.pzKills = p.querySelector('.pz-kills');
  R.pzGems = p.querySelector('.pz-gems');
  p.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'resume') C.setState(C._pausedFrom || 'playing');
    else if (act === 'settings') openModal('settings');
    else if (act === 'title') C.emit('title-request');
  });
}

function fillPauseStats() {
  R.pzTime.textContent = fmtTime(stats.playTime);
  R.pzKills.textContent = String(stats.kills);
  R.pzGems.textContent = String(C.player ? C.player.gems | 0 : 0);
}

// ================================================================
// 死亡画面
// ================================================================
function buildGameover() {
  const g = el('section', 'screen', root); g.id = 'gameover-screen'; R.gameover = g;
  g.innerHTML = `
    <div class="go-text">勇者は倒れた…</div>
    <nav class="go-menu">
      <button class="obtn" data-act="respawn">ふたたび挑む</button>
      <button class="obtn" data-act="title">タイトルへ</button>
    </nav>`;
  g.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    if (b.dataset.act === 'respawn') C.emit('respawn-request');
    else C.emit('title-request');
  });
}

// ================================================================
// エンディング
// ================================================================
function buildEnding() {
  const g = el('section', 'screen', root); g.id = 'ending-screen'; R.ending = g;
  g.innerHTML = `
    <div class="ed-l1">魔獣は討たれ、大地に朝が戻った</div>
    <div class="ed-l2">伝説は語り継がれる</div>
    <div class="ed-orn">◆</div>
    <div class="ed-stats">
      <div class="stat"><span class="s-l">クリア時間</span><span class="s-v ed-time">—</span></div>
      <div class="stat"><span class="s-l">討伐した魔物</span><span class="s-v ed-kills">0</span></div>
      <div class="stat"><span class="s-l">集めた緑石</span><span class="s-v ed-gems">0</span></div>
    </div>
    <button class="mbtn ed-btn" data-act="title">タイトルへ</button>`;
  g.querySelector('.ed-btn').addEventListener('click', () => C.emit('title-request'));
}

function fillEndingStats() {
  R.ending.querySelector('.ed-time').textContent = fmtTime(stats.playTime);
  R.ending.querySelector('.ed-kills').textContent = String(stats.kills);
  R.ending.querySelector('.ed-gems').textContent = String(C.player ? C.player.gems | 0 : 0);
}

// ================================================================
// モーダル(設定 / 操作方法)
// ================================================================
const modal = { open: false, kind: null };

function buildModal() {
  const m = el('div', '', root); m.id = 'modal-layer'; R.modal = m;
  m.innerHTML = `
    <div class="modal-back"></div>
    <div class="modal panel">
      <button class="modal-x" aria-label="閉じる">×</button>
      <h2 class="modal-title"></h2>
      <div class="modal-body"></div>
    </div>`;
  R.modalTitle = m.querySelector('.modal-title');
  R.modalBody = m.querySelector('.modal-body');
  m.querySelector('.modal-back').addEventListener('click', () => closeModal());
  m.querySelector('.modal-x').addEventListener('click', () => closeModal());
  buildSettingsBody();
  buildControlsBody();
}

function buildSettingsBody() {
  const b = document.createElement('div');
  b.className = 'set-body';
  b.innerHTML = `
    <div class="set-row">
      <span class="set-label">画質</span>
      <div class="seg">
        <button data-q="high">高</button><button data-q="medium">中</button><button data-q="low">低</button>
      </div>
    </div>
    <div class="set-row">
      <span class="set-label">音楽の音量</span>
      <input class="vol-music" type="range" min="0" max="1" step="0.01">
      <span class="set-val vm">70</span>
    </div>
    <div class="set-row">
      <span class="set-label">効果音の音量</span>
      <input class="vol-sfx" type="range" min="0" max="1" step="0.01">
      <span class="set-val vs">90</span>
    </div>
    <p class="set-note">画質を変えると、草木の密度や光の表現が変わります。</p>`;
  R.setBody = b;
  b.querySelector('.seg').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-q]');
    if (!btn) return;
    C.settings.quality = btn.dataset.q;
    if (C.applyQuality) C.applyQuality();
    syncSettings();
  });
  const vm = b.querySelector('.vol-music');
  const vs = b.querySelector('.vol-sfx');
  vm.addEventListener('input', () => {
    C.settings.musicVol = clamp(Number(vm.value) || 0, 0, 1);
    b.querySelector('.vm').textContent = Math.round(C.settings.musicVol * 100);
  });
  vs.addEventListener('input', () => {
    C.settings.sfxVol = clamp(Number(vs.value) || 0, 0, 1);
    b.querySelector('.vs').textContent = Math.round(C.settings.sfxVol * 100);
  });
  vs.addEventListener('change', () => { if (C.audio && C.audio.play) C.audio.play('ui'); });
}

function syncSettings() {
  const b = R.setBody;
  b.querySelectorAll('.seg button').forEach((x) => x.classList.toggle('active', x.dataset.q === C.settings.quality));
  const vm = b.querySelector('.vol-music');
  const vs = b.querySelector('.vol-sfx');
  vm.value = C.settings.musicVol;
  vs.value = C.settings.sfxVol;
  b.querySelector('.vm').textContent = Math.round(C.settings.musicVol * 100);
  b.querySelector('.vs').textContent = Math.round(C.settings.sfxVol * 100);
}

function buildControlsBody() {
  const b = document.createElement('div');
  b.className = 'ctl-body';
  let rows = '';
  for (const [k, a] of CTL_ROWS) rows += `<tr><td class="k">${keycaps(k)}</td><td class="a">${a}</td></tr>`;
  b.innerHTML = `<table class="ctl-table"><tbody>${rows}</tbody></table>`;
  R.ctlBody = b;
}

function openModal(kind) {
  modal.open = true;
  modal.kind = kind;
  R.modalTitle.textContent = kind === 'settings' ? '設定' : '操作方法';
  R.modalBody.innerHTML = '';
  R.modalBody.appendChild(kind === 'settings' ? R.setBody : R.ctlBody);
  if (kind === 'settings') syncSettings();
  R.modal.classList.toggle('wide', kind === 'controls');
  R.modal.classList.add('open');
  root.classList.add('modal-open');
}

function closeModal(silent) {
  if (!modal.open) return;
  modal.open = false;
  R.modal.classList.remove('open');
  root.classList.remove('modal-open');
  if (!silent && C.audio && C.audio.play) C.audio.play('uiBack');
}

// ================================================================
// ボタン効果音
// ================================================================
let lastHover = null;
function wireSounds() {
  root.addEventListener('pointerover', (e) => {
    const b = e.target.closest ? e.target.closest('button') : null;
    if (b !== lastHover) {
      lastHover = b;
      if (b && C.audio && C.audio.play) C.audio.play('ui');
    }
  });
  root.addEventListener('pointerdown', (e) => {
    if (e.target.closest && e.target.closest('button') && C.audio && C.audio.play) C.audio.play('ui');
  });
}
