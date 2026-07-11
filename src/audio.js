// audio.js — WebAudio 完全合成 BGM / SFX / 環境音(外部アセット不使用)
// 契約(ARCHITECTURE.md): ctx.audio = { unlock, play, setMusic } / update が自律選曲
import { clamp } from './util.js';

let C = null;                 // AudioContext(unlock で生成 + resume)
let master, comp, musicBus, sfxBus, ambBus;
let reverb, delayNode;
let noiseBuf = null;

// ---- 選曲・シーケンサ状態 ----
let currentName = null;       // 現在希望中のBGM名(null=無音)
let lastAuto = '__none';      // 自律選曲の前回結果(変化検知で手動 setMusic を尊重)
let songInsts = [];           // 再生中インスタンス(クロスフェード中は複数)
let duckUntil = 0;            // ジングル中の BGM ダッキング終了時刻
let sorrowDone = false;
let lastState = '';

// ---- 環境音状態 ----
let amb = null;
let birdNext = 0, cricketNext = 0;

const P = (m) => 440 * Math.pow(2, (m - 69) / 12); // MIDI→Hz
const rand = Math.random;
const LOOKAHEAD = 0.35;

// ================= 基盤グラフ =================

function buildGraph() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  C = new AC();
  comp = C.createDynamicsCompressor();
  comp.threshold.value = -16; comp.knee.value = 18; comp.ratio.value = 5;
  comp.attack.value = 0.004; comp.release.value = 0.22;
  master = g(0.9); master.connect(comp); comp.connect(C.destination);
  musicBus = g(0); sfxBus = g(0.9); ambBus = g(0);
  musicBus.connect(master); sfxBus.connect(master); ambBus.connect(master);

  // 上質なリバーブ(プロシージャル生成 IR: 減衰ノイズ)
  reverb = C.createConvolver();
  reverb.buffer = makeImpulse(2.6, 2.6);
  const rg = g(0.5); reverb.connect(rg); rg.connect(master);
  for (const [bus, v] of [[musicBus, 0.32], [sfxBus, 0.18], [ambBus, 0.1]]) {
    const s = g(v); bus.connect(s); s.connect(reverb);
  }
  // ディレイセンド(音楽用)
  delayNode = C.createDelay(1); delayNode.delayTime.value = 0.31;
  const dl = C.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 2200;
  const fb = g(0.32);
  delayNode.connect(dl); dl.connect(fb); fb.connect(delayNode);
  const dg = g(0.35); dl.connect(dg); dg.connect(master);
  const ds = g(0.16); musicBus.connect(ds); ds.connect(delayNode);

  buildAmbient();
  // 検証専用のデバッグフック(契約API外・ゲームからは不使用)
  try { window.__audioDbg = { get ctx() { return C; }, get master() { return master; } }; } catch (_) {}
}

function makeImpulse(sec, decay) {
  const len = Math.max(1, Math.floor(C.sampleRate * sec));
  const buf = C.createBuffer(2, len, C.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = (rand() * 2 - 1) * Math.pow(1 - i / len, decay);
      last = last * 0.62 + w * 0.38; // 軽いローパスで角を取る
      d[i] = last;
    }
  }
  return buf;
}

function getNoise() {
  if (!noiseBuf) {
    const len = C.sampleRate * 2;
    noiseBuf = C.createBuffer(1, len, C.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = rand() * 2 - 1;
  }
  return noiseBuf;
}

// ================= 小さなヘルパー =================

function g(v) { const n = C.createGain(); n.gain.value = v; return n; }

function autoGC(src, nodes) {
  src.onended = () => { for (const n of nodes) { try { n.disconnect(); } catch (_) {} } };
}

function osc(type, freq, t, stop) {
  const o = C.createOscillator(); o.type = type; o.frequency.value = freq;
  o.start(t); o.stop(stop);
  return o;
}

function noiseSrc(t, dur) {
  const s = C.createBufferSource(); s.buffer = getNoise(); s.loop = true;
  try { s.start(t, rand() * 1.5); } catch (_) { s.start(t); }
  s.stop(t + dur);
  return s;
}

function panNode(v) {
  if (C.createStereoPanner) { const p = C.createStereoPanner(); p.pan.value = clamp(v, -1, 1); return p; }
  return g(1);
}

// 撥弦系エンベロープ(即時アタック→指数減衰)
function pluck(p, t, peak, tau) {
  p.setValueAtTime(0.0001, t);
  p.linearRampToValueAtTime(peak, t + 0.008);
  p.setTargetAtTime(0.0001, t + 0.012, tau);
}

// 持続系エンベロープ(attack→hold→release)
function swell(p, t, a, peak, dur, rel) {
  const h = Math.max(t + a, t + dur);
  p.setValueAtTime(0.0001, t);
  p.linearRampToValueAtTime(peak, t + a);
  p.setValueAtTime(peak, h);
  p.linearRampToValueAtTime(0.0001, h + rel);
}

// ================= 楽器(音色) =================
// 署名: (t, f[Hz], dur[s], vel, out)

const INST = {
  // ハープ風: 三角波 + 短い倍音、速い減衰
  harp(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const o = osc('triangle', f, t, t + 2.2); o.connect(e);
    pluck(e.gain, t, vel, 0.32);
    const e2 = g(0); e2.connect(out);
    const o2 = osc('sine', f * 2, t, t + 1.1); o2.connect(e2);
    pluck(e2.gain, t, vel * 0.18, 0.14);
    autoGC(o, [e, e2, o, o2]);
  },
  // ピアノ風(夜曲用): 長めの減衰と柔らかい倍音
  piano(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const o = osc('triangle', f, t, t + 5); o.connect(e);
    pluck(e.gain, t, vel, 0.9);
    const e2 = g(0); e2.connect(out);
    const o2 = osc('sine', f * 2.001, t, t + 2.5); o2.connect(e2);
    pluck(e2.gain, t, vel * 0.12, 0.35);
    autoGC(o, [e, e2, o, o2]);
  },
  // フルート風: サイン + 遅れて掛かるビブラート + 息のノイズ
  flute(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const o = osc('sine', f, t, t + dur + 0.35); o.connect(e);
    const lfo = osc('sine', 5.2, t, t + dur + 0.35);
    const lg = g(0); lfo.connect(lg); lg.connect(o.detune);
    lg.gain.setValueAtTime(0, t);
    lg.gain.linearRampToValueAtTime(14, t + Math.min(0.5, dur * 0.6));
    swell(e.gain, t, 0.07, vel, Math.max(0.1, dur - 0.06), 0.18);
    const bf = C.createBiquadFilter(); bf.type = 'bandpass'; bf.frequency.value = f * 2; bf.Q.value = 9;
    const be = g(0); const ns = noiseSrc(t, dur + 0.3);
    ns.connect(bf); bf.connect(be); be.connect(out);
    swell(be.gain, t, 0.09, vel * 0.05, Math.max(0.1, dur - 0.06), 0.15);
    autoGC(o, [e, o, lfo, lg, bf, be, ns]);
  },
  // 弦パッド: デチューンした鋸波2本 + ローパス + 遅いアタック
  strings(t, f, dur, vel, out) {
    const lp = C.createBiquadFilter(); lp.type = 'lowpass';
    lp.frequency.value = Math.min(f * 3.2, 2600); lp.Q.value = 0.4;
    const e = g(0); lp.connect(e); e.connect(out);
    const o1 = osc('sawtooth', f, t, t + dur + 1.3); o1.detune.value = -6; o1.connect(lp);
    const o2 = osc('sawtooth', f * 1.003, t, t + dur + 1.3); o2.detune.value = 6; o2.connect(lp);
    swell(e.gain, t, Math.min(0.6, dur * 0.35), vel, dur, 1.0);
    autoGC(o1, [lp, e, o1, o2]);
  },
  // ベース: サイン + 矩形少量
  bass(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const o = osc('sine', f, t, t + dur + 0.2); o.connect(e);
    const o2 = osc('square', f, t, t + dur + 0.2);
    const g2 = g(0.13); o2.connect(g2); g2.connect(e);
    swell(e.gain, t, 0.015, vel, dur * 0.85, 0.1);
    autoGC(o, [e, o, o2, g2]);
  },
  // ベル: FM(サイン2つ)
  bell(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const car = osc('sine', f, t, t + 3.2);
    const mod = osc('sine', f * 2.76, t, t + 3.2);
    const mg = g(0); mod.connect(mg); mg.connect(car.frequency);
    mg.gain.setValueAtTime(f * 1.6, t);
    mg.gain.setTargetAtTime(0.0001, t, 0.35);
    car.connect(e);
    pluck(e.gain, t, vel, clamp(dur, 0.5, 1.2));
    autoGC(car, [e, car, mod, mg]);
  },
  // ---- 打楽器(f, dur は未使用) ----
  kick(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const o = osc('sine', 120, t, t + 0.32); o.connect(e);
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.11);
    pluck(e.gain, t, vel, 0.09);
    autoGC(o, [e, o]);
  },
  // 膜共振風の太鼓: ピッチ落ちサイン + バンドパスノイズ
  taiko(t, f, dur, vel, out) {
    const e = g(0); e.connect(out);
    const o = osc('sine', 96, t, t + 0.6); o.connect(e);
    o.frequency.setValueAtTime(96, t);
    o.frequency.exponentialRampToValueAtTime(52, t + 0.2);
    pluck(e.gain, t, vel, 0.16);
    const bp = C.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 180; bp.Q.value = 6;
    const e2 = g(0); const ns = noiseSrc(t, 0.4);
    ns.connect(bp); bp.connect(e2); e2.connect(out);
    pluck(e2.gain, t, vel * 0.5, 0.09);
    autoGC(o, [e, o, bp, e2, ns]);
  },
  shaker(t, f, dur, vel, out) {
    const hp = C.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 6500;
    const e = g(0); const ns = noiseSrc(t, 0.14);
    ns.connect(hp); hp.connect(e); e.connect(out);
    pluck(e.gain, t, vel, 0.025);
    autoGC(ns, [hp, e, ns]);
  },
  snare(t, f, dur, vel, out) {
    const bp = C.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1700; bp.Q.value = 0.8;
    const e = g(0); const ns = noiseSrc(t, 0.2);
    ns.connect(bp); bp.connect(e); e.connect(out);
    pluck(e.gain, t, vel, 0.06);
    const e2 = g(0); e2.connect(out);
    const o = osc('sine', 210, t, t + 0.12); o.connect(e2);
    pluck(e2.gain, t, vel * 0.6, 0.035);
    autoGC(ns, [bp, e, ns, e2, o]);
  },
};

// ================= 楽曲(全てオリジナル旋律) =================
// イベント: { t:拍, i:楽器名, f:Hz, d:拍, v:vel }

function note(a, t, i, m, d, v) { a.push({ t, i, f: m > 0 ? P(m) : 0, d, v }); }
function chordAt(a, t, i, ms, d, v) { for (const m of ms) note(a, t, i, m, d, v); }

// タイトル: 荘厳で静かなハープアルペジオ + 弦(ニ短調⇄ヘ長調の揺らぎ, ♩=72)
function buildTitle() {
  const a = [];
  const prog = [
    [50, 53, 57, 62], // Dm
    [46, 50, 53, 58], // B♭
    [53, 57, 60, 65], // F
    [48, 52, 55, 60], // C
    [50, 53, 57, 62], // Dm
    [43, 46, 50, 55], // Gm
    [45, 49, 52, 57], // A
    [50, 53, 57, 62], // Dm
  ];
  const pat = [0, 1, 2, 3, 2, 1, 2, 3];
  prog.forEach((ch, b) => {
    const t0 = b * 4;
    pat.forEach((pi, k) => note(a, t0 + k * 0.5, 'harp', ch[pi], 0.5, k === 0 ? 0.4 : 0.28));
    chordAt(a, t0, 'strings', [ch[0] + 12, ch[1] + 12, ch[2] + 12], 4.1, 0.08);
    note(a, t0, 'bass', ch[0] - 12, 3.5, 0.28);
  });
  [[0, 69], [8, 70], [16, 69], [22, 67], [24, 65], [28, 64]]
    .forEach(([t, m]) => note(a, t, 'bell', m, 3, 0.13)); // 遠くの鐘
  return { bpm: 72, beats: 32, events: a };
}

// フィールド: 冒険心をくすぐる主旋律(フルート)+ 弦 + 軽い打楽器(ト長調, ♩=102)
function buildField() {
  const a = [];
  const G = [43, 47, 50], Cc = [48, 52, 55], Em = [40, 43, 47], D = [50, 54, 57], Am = [45, 48, 52];
  const prog = [G, G, Cc, G, Em, Cc, D, D, G, G, Cc, Am, G, Cc, D, G];
  prog.forEach((ch, b) => {
    const t0 = b * 4;
    note(a, t0, 'bass', ch[0], 0.9, 0.4);
    note(a, t0 + 1.5, 'bass', ch[0], 0.4, 0.28);
    note(a, t0 + 2, 'bass', ch[0] + 7, 0.9, 0.34);
    note(a, t0 + 3, 'bass', ch[0], 0.9, 0.28);
    chordAt(a, t0, 'strings', [ch[0] + 12, ch[1] + 12, ch[2] + 12], 3.9, 0.065);
    note(a, t0 + 1, 'harp', ch[1] + 24, 0.5, 0.15);
    note(a, t0 + 3.5, 'harp', ch[2] + 24, 0.5, 0.12);
    note(a, t0, 'kick', 0, 0, 0.42);
    note(a, t0 + 2, 'kick', 0, 0, 0.34);
    for (let k = 0; k < 8; k++) note(a, t0 + k * 0.5, 'shaker', 0, 0, k % 2 ? 0.13 : 0.07);
  });
  [3, 7, 11, 15].forEach((b) => {
    [0, 0.25, 0.5, 0.75].forEach((o, k) => note(a, b * 4 + 3 + o, 'taiko', 0, 0, 0.2 + k * 0.05));
  });
  const melA = [
    [0, 71, 1], [1, 74, 0.5], [1.5, 76, 0.5], [2, 79, 1.9],
    [4, 78, 1], [5, 76, 0.5], [5.5, 74, 0.5], [6, 76, 1.9],
    [8, 72, 1], [9, 74, 0.5], [9.5, 76, 0.5], [10, 74, 1], [11, 71, 0.9],
    [12, 69, 2.4], [14.5, 71, 0.5], [15, 72, 0.9],
    [16, 74, 1], [17, 79, 1], [18, 81, 1.9],
    [20, 83, 1.4], [21.5, 81, 0.5], [22, 79, 1], [23, 76, 0.9],
    [24, 74, 1], [25, 76, 0.5], [25.5, 78, 0.5], [26, 81, 1], [27, 78, 0.9],
    [28, 79, 2.8],
  ];
  const melB = [
    [0, 71, 1], [1, 74, 0.5], [1.5, 76, 0.5], [2, 79, 1.9],
    [4, 81, 1], [5, 79, 0.5], [5.5, 78, 0.5], [6, 79, 1.9],
    [8, 84, 1], [9, 83, 0.5], [9.5, 81, 0.5], [10, 79, 1], [11, 76, 0.9],
    [12, 74, 2.4], [14.5, 74, 0.5], [15, 76, 0.9],
    [16, 79, 1], [17, 83, 1], [18, 86, 1.9],
    [20, 84, 1.4], [21.5, 83, 0.5], [22, 81, 1], [23, 79, 0.9],
    [24, 78, 1], [25, 81, 1], [26, 74, 1], [27, 76, 0.9],
    [28, 79, 2.8],
  ];
  melA.forEach(([t, m, d]) => note(a, t, 'flute', m, d, 0.4));
  melB.forEach(([t, m, d]) => note(a, t + 32, 'flute', m, d, 0.42));
  return { bpm: 102, beats: 64, events: a };
}

// 夜: 静謐なピアノ風単音 + 薄いパッド(♩=60)
function buildNight() {
  const a = [];
  [[0, [45, 52, 57]], [8, [41, 48, 53]], [16, [43, 50, 55]], [24, [40, 47, 52]]]
    .forEach(([t, ch]) => chordAt(a, t, 'strings', ch, 8.2, 0.045));
  const mel = [
    [0, 69, 2], [3, 72, 1], [4, 76, 3], [8, 74, 2], [11, 72, 1], [12, 69, 3.5],
    [16, 67, 2], [19, 69, 1], [20, 74, 3.5], [24, 76, 1.5], [26, 72, 1.5], [28, 69, 3.5],
  ];
  mel.forEach(([t, m, d]) => note(a, t, 'piano', m, d, 0.28));
  note(a, 14, 'piano', 57, 1.5, 0.16);
  note(a, 30, 'piano', 52, 1.5, 0.14);
  return { bpm: 60, beats: 32, events: a };
}

// 祠: 神秘的なベル + 低いドローン(ニのドリア旋法, ♩=66)
function buildShrine() {
  const a = [];
  for (let b = 0; b < 8; b++) {
    note(a, b * 4, 'bass', 38, 4.3, 0.22);
    if (b % 2 === 0) chordAt(a, b * 4, 'strings', [50, 57], 8.3, 0.05);
  }
  [[0, 74, 3], [6, 77, 2], [10, 79, 2], [14, 81, 3], [20, 79, 2], [24, 71, 3], [28, 72, 2]]
    .forEach(([t, m, d]) => note(a, t, 'bell', m, d, 0.24));
  note(a, 12, 'bell', 86, 2, 0.08);
  note(a, 26, 'bell', 84, 2, 0.07);
  return { bpm: 66, beats: 32, events: a };
}

// ボス: 低音オスティナート + 疾走打楽器 + 不協和音(ホのフリギア, ♩=140)
function buildBoss() {
  const a = [];
  const riffA = [40, 40, 41, 40, 43, 40, 46, 40];
  const riffB = [45, 45, 46, 45, 48, 45, 51, 45];
  for (let b = 0; b < 8; b++) {
    const riff = b < 4 ? riffA : riffB;
    const t0 = b * 4;
    riff.forEach((m, k) => note(a, t0 + k * 0.5, 'bass', m, 0.28, k % 2 ? 0.36 : 0.48));
    for (let k = 0; k < 4; k++) note(a, t0 + k, 'kick', 0, 0, 0.5);
    note(a, t0 + 1, 'snare', 0, 0, 0.36);
    note(a, t0 + 3, 'snare', 0, 0, 0.36);
    for (let k = 0; k < 8; k++) note(a, t0 + k * 0.5 + 0.25, 'shaker', 0, 0, 0.1);
    if (b % 4 === 3) [3, 3.25, 3.5, 3.75].forEach((o, k) => note(a, t0 + o, 'taiko', 0, 0, 0.26 + k * 0.07));
  }
  chordAt(a, 0, 'strings', [64, 65, 70], 1.6, 0.15);
  chordAt(a, 8, 'strings', [64, 65, 70], 1.6, 0.15);
  chordAt(a, 16, 'strings', [69, 70, 75], 1.6, 0.16);
  chordAt(a, 24, 'strings', [70, 71, 76], 1.6, 0.17);
  note(a, 4, 'bell', 76, 1.5, 0.18); note(a, 12, 'bell', 75, 1.5, 0.18);
  note(a, 20, 'bell', 81, 1.5, 0.2); note(a, 28, 'bell', 82, 1.5, 0.2);
  return { bpm: 140, beats: 32, events: a };
}

// エンディング: 温かい賛歌(field 主題の変奏, ト長調, ♩=76)
function buildEnding() {
  const a = [];
  const G = [43, 47, 50], Cc = [48, 52, 55], Am = [45, 48, 52], D = [50, 54, 57];
  const prog = [G, Cc, Am, D, G, Cc, D, G];
  const hp = [0, 2, 1, 2];
  prog.forEach((ch, b) => {
    const t0 = b * 4;
    chordAt(a, t0, 'strings', [ch[0] + 12, ch[1] + 12, ch[2] + 12], 4.2, 0.1);
    note(a, t0, 'bass', ch[0], 3.6, 0.3);
    hp.forEach((pi, k) => note(a, t0 + k, 'harp', ch[pi] + 24, 1, 0.18));
  });
  const mel = [
    [0, 71, 1.5], [1.5, 74, 0.5], [2, 79, 1.9],
    [4, 81, 1], [5, 79, 1], [6, 76, 1.9],
    [8, 72, 1], [9, 74, 1], [10, 76, 1], [11, 74, 0.9],
    [12, 71, 1], [13, 69, 2.9],
    [16, 74, 1.5], [17.5, 79, 0.5], [18, 81, 1.9],
    [20, 83, 2], [22, 81, 1], [23, 79, 0.9],
    [24, 78, 1], [25, 81, 1], [26, 79, 1], [27, 76, 0.9],
    [28, 79, 3.6],
  ];
  mel.forEach(([t, m, d]) => note(a, t, 'flute', m, d, 0.38));
  [[0, 67], [8, 72], [16, 67], [24, 74]].forEach(([t, m]) => note(a, t, 'bell', m, 2, 0.12));
  return { bpm: 76, beats: 32, events: a };
}

const SONG_BUILDERS = {
  title: buildTitle, field: buildField, night: buildNight,
  shrine: buildShrine, boss: buildBoss, ending: buildEnding,
};
const songCache = {};
function getSong(name) {
  if (!name || !SONG_BUILDERS[name]) return null;
  if (!songCache[name]) {
    const s = SONG_BUILDERS[name]();
    s.events.sort((x, y) => x.t - y.t);
    songCache[name] = s;
  }
  return songCache[name];
}

// ================= シーケンサ(lookahead 方式・タイマー不使用) =================

function startSong(name, fade) {
  const def = getSong(name);
  if (!def) return null;
  const gg = g(0); gg.connect(musicBus);
  const now = C.currentTime;
  gg.gain.setValueAtTime(0.0001, now);
  gg.gain.linearRampToValueAtTime(1, now + fade);
  return { name, def, g: gg, idx: 0, loopStart: now + 0.06, fading: false, killAt: 0 };
}

function fadeOutInst(inst, dur) {
  if (inst.fading) return;
  inst.fading = true;
  const now = C.currentTime;
  const cur = inst.g.gain.value;
  inst.g.gain.cancelScheduledValues(now);
  inst.g.gain.setValueAtTime(Math.max(cur, 0.0001), now);
  inst.g.gain.linearRampToValueAtTime(0.0001, now + dur);
  inst.killAt = now + dur + 0.15;
}

// クロスフェードで曲を切替(name=null で無音へ)
function switchTo(name) {
  currentName = name && SONG_BUILDERS[name] ? name : null;
  if (!C) return;
  for (const inst of songInsts) fadeOutInst(inst, 2);
  if (currentName && C.state === 'running') {
    const inst = startSong(currentName, 2);
    if (inst) songInsts.push(inst);
  }
}

function scheduleInst(inst, until) {
  const def = inst.def;
  const spb = 60 / def.bpm;
  const evs = def.events;
  const loopDur = def.beats * spb;
  const now = C.currentTime;
  // タブ非アクティブ等で大きく遅れた場合はループ位置を早送り
  if (inst.loopStart + loopDur < now) {
    const k = Math.floor((now - inst.loopStart) / loopDur);
    inst.loopStart += k * loopDur;
    inst.idx = 0;
  }
  let guard = 0;
  while (guard++ < 4000) {
    if (inst.idx >= evs.length) { inst.idx = 0; inst.loopStart += loopDur; continue; }
    const ev = evs[inst.idx];
    const t = inst.loopStart + ev.t * spb;
    if (t >= until) break;
    inst.idx++;
    if (t < now - 0.03) continue; // 過ぎたノートは鳴らさない
    const fn = INST[ev.i];
    if (fn) fn(t, ev.f, Math.max(0.05, ev.d * spb), ev.v, inst.g);
  }
}

// ================= ジングル / イベント連動 =================

function shrineJingle() {
  if (!C || C.state !== 'running') return;
  duckUntil = C.currentTime + 4;
  const n = C.currentTime + 0.05;
  [[0, 79], [0.14, 84], [0.28, 88], [0.42, 91]].forEach(([o, m]) => {
    INST.bell(n + o, P(m), 1, 0.34, sfxBus);
    INST.harp(n + o, P(m), 0.8, 0.26, sfxBus);
  });
  [84, 88, 91, 96].forEach((m) => INST.bell(n + 0.72, P(m), 2.4, 0.16, sfxBus));
  INST.strings(n + 0.72, P(60), 2.2, 0.07, sfxBus);
  INST.strings(n + 0.72, P(64), 2.2, 0.07, sfxBus);
  INST.strings(n + 0.72, P(67), 2.2, 0.07, sfxBus);
}

function victoryFanfare() {
  if (!C || C.state !== 'running') return;
  duckUntil = C.currentTime + 6;
  const n = C.currentTime + 0.05;
  const hit = (o, m, d, v) => {
    INST.strings(n + o, P(m), d, v, sfxBus);
    INST.bell(n + o, P(m + 12), d, v * 0.55, sfxBus);
  };
  hit(0, 67, 0.16, 0.24); hit(0.2, 67, 0.16, 0.24); hit(0.4, 67, 0.16, 0.24);
  hit(0.6, 72, 0.7, 0.28);
  hit(1.35, 71, 0.18, 0.24); hit(1.55, 72, 0.18, 0.24);
  hit(1.75, 74, 0.9, 0.3);
  [67, 71, 74, 79].forEach((m) => hit(2.7, m, 2.2, 0.16));
  [0, 0.6, 1.75, 2.7].forEach((o) => { INST.kick(n + o, 0, 0, 0.5, sfxBus); INST.taiko(n + o, 0, 0, 0.4, sfxBus); });
}

function sorrowMotif() {
  if (!C || C.state !== 'running') return;
  const n = C.currentTime + 0.1;
  INST.piano(n, P(64), 1.2, 0.32, sfxBus);
  INST.piano(n + 0.9, P(60), 1.2, 0.3, sfxBus);
  INST.piano(n + 1.8, P(57), 2.5, 0.3, sfxBus);
  INST.strings(n + 1.8, P(45), 2.6, 0.07, sfxBus);
  INST.strings(n + 1.8, P(52), 2.6, 0.06, sfxBus);
}

function phaseHit() {
  if (!C || C.state !== 'running') return;
  const n = C.currentTime + 0.02;
  INST.taiko(n, 0, 0, 0.6, sfxBus);
  INST.kick(n, 0, 0, 0.6, sfxBus);
  INST.taiko(n + 0.14, 0, 0, 0.5, sfxBus);
  INST.kick(n + 0.14, 0, 0, 0.55, sfxBus);
  INST.snare(n + 0.28, 0, 0, 0.4, sfxBus);
}

// ================= 効果音(SFX) =================
// 署名: (t, opts, V) — V は音量倍率。ノードは都度生成し ended で自動解放

function noiseSweep(t, { type = 'bandpass', f0 = 800, f1 = 3000, q = 1, dur = 0.15, vel = 0.3, a = 0.01 }) {
  const flt = C.createBiquadFilter(); flt.type = type; flt.Q.value = q;
  flt.frequency.setValueAtTime(Math.max(30, f0), t);
  flt.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
  const e = g(0); const ns = noiseSrc(t, dur + 0.12);
  ns.connect(flt); flt.connect(e); e.connect(sfxBus);
  e.gain.setValueAtTime(0.0001, t);
  e.gain.linearRampToValueAtTime(vel, t + a);
  e.gain.linearRampToValueAtTime(0.0001, t + dur);
  autoGC(ns, [flt, e, ns]);
}

function blip(t, f0, f1, dur, vel, type = 'sine') {
  const e = g(0); e.connect(sfxBus);
  const o = osc(type, f0, t, t + dur + 0.05); o.connect(e);
  o.frequency.setValueAtTime(Math.max(20, f0), t);
  o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  e.gain.setValueAtTime(0.0001, t);
  e.gain.linearRampToValueAtTime(vel, t + 0.012);
  e.gain.linearRampToValueAtTime(0.0001, t + dur);
  autoGC(o, [e, o]);
}

function thump(t, f0, f1, dur, vel) {
  const e = g(0); e.connect(sfxBus);
  const o = osc('sine', f0, t, t + dur + 0.1); o.connect(e);
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(25, f1), t + dur * 0.7);
  pluck(e.gain, t, vel, dur * 0.5);
  autoGC(o, [e, o]);
}

function swordSwish(t, k, V) {
  noiseSweep(t, { f0: 900 * k, f1: 4200 * k, q: 1.6, dur: 0.16, vel: 0.5 * V });
  noiseSweep(t, { type: 'highpass', f0: 3000 * k, f1: 7000 * k, q: 0.7, dur: 0.1, vel: 0.2 * V });
  blip(t, 520 * k, 180 * k, 0.09, 0.1 * V, 'triangle');
}

const SFX = {
  sword1(t, o, V) { swordSwish(t, 1, V); },
  sword2(t, o, V) { swordSwish(t, 1.14, V); },
  sword3(t, o, V) { swordSwish(t, 1.3, V); },
  hit(t, o, V) {
    noiseSweep(t, { f0: 1100, f1: 260, q: 1.1, dur: 0.11, vel: 0.5 * V });
    thump(t, 150, 55, 0.14, 0.5 * V);
  },
  kill(t, o, V) {
    blip(t, 620, 85, 0.42, 0.22 * V, 'sawtooth');
    noiseSweep(t, { f0: 2200, f1: 280, q: 2, dur: 0.42, vel: 0.2 * V });
    INST.bell(t, 660, 0.35, 0.14 * V, sfxBus);
  },
  damage(t, o, V) {
    thump(t, 210, 48, 0.2, 0.6 * V);
    noiseSweep(t, { type: 'lowpass', f0: 900, f1: 160, dur: 0.14, vel: 0.3 * V });
  },
  block(t, o, V) {
    const e = g(0); e.connect(sfxBus);
    const o1 = osc('square', 820, t, t + 0.2);
    const o2 = osc('square', 1240, t, t + 0.2);
    const g2 = g(0.5); o1.connect(e); o2.connect(g2); g2.connect(e);
    pluck(e.gain, t, 0.26 * V, 0.045);
    autoGC(o1, [e, o1, o2, g2]);
    noiseSweep(t, { type: 'highpass', f0: 4000, f1: 6000, dur: 0.04, vel: 0.24 * V });
    thump(t, 300, 120, 0.07, 0.2 * V);
  },
  step(t, o, V) {
    const r = 0.9 + rand() * 0.22; // 毎回わずかにピッチ変化
    thump(t, 190 * r, 80 * r, 0.07, 0.16 * V);
    noiseSweep(t, { type: 'lowpass', f0: 900 * r, f1: 300, dur: 0.05, vel: 0.07 * V });
  },
  jump(t, o, V) {
    blip(t, 300, 620, 0.16, 0.18 * V);
    noiseSweep(t, { f0: 500, f1: 1400, q: 1, dur: 0.12, vel: 0.08 * V });
  },
  land(t, o, V) {
    thump(t, 170, 60, 0.1, 0.3 * V);
    noiseSweep(t, { type: 'lowpass', f0: 800, f1: 200, dur: 0.08, vel: 0.14 * V });
  },
  roll(t, o, V) {
    noiseSweep(t, { f0: 480, f1: 950, q: 0.6, dur: 0.24, vel: 0.2 * V, a: 0.05 });
    thump(t + 0.16, 140, 70, 0.08, 0.12 * V);
  },
  pickup(t, o, V) {
    blip(t, 880, 1320, 0.09, 0.2 * V);
    INST.harp(t + 0.02, 1760, 0.15, 0.12 * V, sfxBus);
  },
  heart(t, o, V) {
    INST.bell(t, P(76), 0.5, 0.22 * V, sfxBus);
    INST.bell(t + 0.13, P(81), 0.8, 0.24 * V, sfxBus);
    INST.harp(t, P(64), 0.5, 0.14 * V, sfxBus);
  },
  orb(t, o, V) {
    // 神聖な上昇グリッサンド + ベル
    const e = g(0); e.connect(sfxBus);
    const o1 = osc('sine', 440, t, t + 0.7);
    const o2 = osc('sine', 441.5, t, t + 0.7);
    o1.connect(e); o2.connect(e);
    for (const oo of [o1, o2]) {
      oo.frequency.setValueAtTime(440, t);
      oo.frequency.exponentialRampToValueAtTime(1760, t + 0.55);
    }
    swell(e.gain, t, 0.05, 0.16 * V, 0.5, 0.15);
    autoGC(o1, [e, o1, o2]);
    INST.bell(t + 0.5, P(88), 1.4, 0.26 * V, sfxBus);
    INST.bell(t + 0.62, P(93), 1.6, 0.18 * V, sfxBus);
  },
  chest(t, o, V) {
    [[0, 72], [0.13, 76], [0.26, 79]].forEach(([dt, m], k) => {
      INST.harp(t + dt, P(m), 0.4, 0.26 * V, sfxBus);
      INST.bell(t + dt, P(m), k === 2 ? 1.4 : 0.4, 0.18 * V, sfxBus);
    });
  },
  switch(t, o, V) {
    thump(t, 120, 40, 0.28, 0.5 * V);
    noiseSweep(t, { type: 'lowpass', f0: 420, f1: 90, dur: 0.24, vel: 0.28 * V, a: 0.03 });
    noiseSweep(t + 0.03, { f0: 700, f1: 300, q: 5, dur: 0.16, vel: 0.09 * V });
  },
  torch(t, o, V) {
    noiseSweep(t, { type: 'lowpass', f0: 3200, f1: 420, dur: 0.2, vel: 0.4 * V });
    thump(t, 110, 60, 0.09, 0.2 * V);
  },
  ui(t, o, V) {
    noiseSweep(t, { f0: 1200, f1: 1100, q: 8, dur: 0.035, vel: 0.2 * V, a: 0.004 });
    blip(t, 660, 620, 0.05, 0.14 * V, 'triangle');
  },
  uiBack(t, o, V) {
    noiseSweep(t, { f0: 800, f1: 720, q: 8, dur: 0.04, vel: 0.16 * V, a: 0.004 });
    blip(t, 440, 400, 0.06, 0.12 * V, 'triangle');
  },
  burn(t, o, V) {
    noiseSweep(t, { type: 'lowpass', f0: 2600, f1: 380, dur: 0.3, vel: 0.4 * V });
    for (let k = 0; k < 4; k++) {
      noiseSweep(t + 0.04 + rand() * 0.2, { f0: 1500 + rand() * 1500, f1: 600, q: 3, dur: 0.05, vel: 0.14 * V });
    }
    thump(t, 100, 50, 0.16, 0.28 * V);
  },
};

// ================= 環境音レイヤー =================

function buildAmbient() {
  amb = {};
  const layer = (mk) => { const gg = g(0); mk(gg); gg.connect(ambBus); return { g: gg, target: 0, applied: -1 }; };
  // 薄い風(フィルタノイズ + ゆらぎ)
  amb.wind = layer((out) => {
    const f = C.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 480; f.Q.value = 0.35;
    const src = C.createBufferSource(); src.buffer = getNoise(); src.loop = true; src.start();
    src.connect(f); f.connect(out);
    const l = osc('sine', 0.13, C.currentTime, C.currentTime + 86400);
    const lg = g(0.35); l.connect(lg); lg.connect(out.gain);   // 音量ゆらぎ
    const lf = g(180); l.connect(lf); lf.connect(f.frequency); // 音色ゆらぎ
  });
  // 火山の地鳴り
  amb.rumble = layer((out) => {
    const f = C.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 75; f.Q.value = 1.1;
    const src = C.createBufferSource(); src.buffer = getNoise(); src.loop = true; src.start();
    src.connect(f); f.connect(out);
    const l = osc('sine', 0.45, C.currentTime, C.currentTime + 86400);
    const lg = g(0.5); l.connect(lg); lg.connect(out.gain);
  });
  // 湖のさざなみ
  amb.water = layer((out) => {
    const f = C.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 950; f.Q.value = 0.6;
    const src = C.createBufferSource(); src.buffer = getNoise(); src.loop = true; src.start();
    src.connect(f); f.connect(out);
    const l = osc('sine', 0.7, C.currentTime, C.currentTime + 86400);
    const lg = g(0.6); l.connect(lg); lg.connect(out.gain);
    const lf = g(320); l.connect(lf); lf.connect(f.frequency);
  });
}

// 小鳥のさえずり(昼・不定期)
function birdChirp(t) {
  const base = 2300 + rand() * 1500;
  const n = 2 + ((rand() * 3) | 0);
  const e = g(0);
  const pn = panNode(rand() * 1.6 - 0.8);
  const o = osc('sine', base, t, t + n * 0.13 + 0.1);
  o.connect(e); e.connect(pn); pn.connect(ambBus);
  for (let k = 0; k < n; k++) {
    const tt = t + k * (0.08 + rand() * 0.05);
    o.frequency.setValueAtTime(base + rand() * 350, tt);
    o.frequency.exponentialRampToValueAtTime(base * (1.22 + rand() * 0.25), tt + 0.05);
    e.gain.setValueAtTime(0.0001, tt);
    e.gain.linearRampToValueAtTime(0.05 + rand() * 0.035, tt + 0.015);
    e.gain.linearRampToValueAtTime(0.0001, tt + 0.065);
  }
  autoGC(o, [e, pn, o]);
}

// 虫の音(夜・規則的なチチチ)
function cricketChirp(t) {
  const pn = panNode(rand() * 1.2 - 0.6);
  pn.connect(ambBus);
  let last = null;
  for (let k = 0; k < 3; k++) {
    const tt = t + k * 0.085;
    const o = osc('triangle', 4250 + rand() * 120, tt, tt + 0.06);
    const e = g(0); o.connect(e); e.connect(pn);
    e.gain.setValueAtTime(0.0001, tt);
    e.gain.linearRampToValueAtTime(0.028, tt + 0.012);
    e.gain.linearRampToValueAtTime(0.0001, tt + 0.05);
    autoGC(o, [o, e]);
    last = o;
  }
  if (last) { const prev = last.onended; last.onended = () => { prev?.(); try { pn.disconnect(); } catch (_) {} }; }
}

function setSmooth(param, holder, v) {
  if (Math.abs(holder.applied - v) < 0.004) return;
  holder.applied = v;
  param.setTargetAtTime(v, C.currentTime, 0.4);
}

function updateAmbient(ctx, now) {
  const s = ctx.state;
  const active = s === 'playing' || s === 'boss';
  const scene = active || s === 'title' || s === 'ending';
  let wind = 0, rumble = 0, water = 0;
  if (scene && s !== 'paused') wind = 0.05;
  if (active && ctx.world && ctx.player) {
    const b = ctx.world.getBiome(ctx.player.position.x, ctx.player.position.z);
    if (b === 'volcano') rumble = 0.14;
    if (b === 'lake') water = 0.09;
  }
  if (s === 'shrine') { wind = 0; rumble = 0; water = 0; } // 祠は残響のみの静寂
  setSmooth(amb.wind.g.gain, amb.wind, wind);
  setSmooth(amb.rumble.g.gain, amb.rumble, rumble);
  setSmooth(amb.water.g.gain, amb.water, water);

  const day = s === 'playing' && !ctx.time.isNight;
  const night = s === 'playing' && ctx.time.isNight;
  if (day) {
    if (birdNext < now + 0.4) {
      birdChirp(Math.max(birdNext, now + 0.08));
      birdNext = Math.max(birdNext, now) + 1.2 + rand() * 4.5;
    }
  } else birdNext = Math.max(birdNext, now + 1.5);
  if (night) {
    if (cricketNext < now + 0.4) {
      cricketChirp(Math.max(cricketNext, now + 0.08));
      cricketNext = Math.max(cricketNext, now) + 1.05 + rand() * 0.25;
    }
  } else cricketNext = Math.max(cricketNext, now + 1.5);
}

// ================= 契約API / メインループ =================

export async function init(ctx) {
  ctx.audio = {
    // 初回ユーザー操作で main が呼ぶ(未生成なら生成 + resume)
    unlock() {
      try {
        if (!C) buildGraph();
        if (C && C.state !== 'running') {
          const p = C.resume();
          if (p && p.catch) p.catch(() => {});
        }
      } catch (_) {}
    },
    // SFX 再生(未知の名前・suspended 中は静かに無視)
    play(name, opts = {}) {
      try {
        if (!C || C.state !== 'running') return;
        const fn = SFX[name];
        if (!fn) return;
        fn(C.currentTime + 0.005, opts || {}, clamp((opts && opts.vol) != null ? opts.vol : 1, 0, 2));
      } catch (_) {}
    },
    // BGM 切替(2秒クロスフェード)。自律選曲は状態変化時のみ上書きする
    setMusic(name) {
      try {
        const n = name || null;
        if (n === currentName) return;
        if (n && !SONG_BUILDERS[n]) return;
        switchTo(n);
      } catch (_) {}
    },
  };

  // イベント連動
  ctx.on('shrine-complete', () => { try { shrineJingle(); } catch (_) {} });
  ctx.on('boss-defeated', () => { try { victoryFanfare(); } catch (_) {} });
  ctx.on('boss-phase', () => { try { phaseHit(); } catch (_) {} });
  ctx.on('player-died', () => {
    try { sorrowDone = true; switchTo(null); sorrowMotif(); } catch (_) {}
  });
}

export function update(ctx, dt) {
  if (!C || C.state !== 'running') return;
  const now = C.currentTime;
  const s = ctx.state;

  // 音量の滑らかな反映 + ポーズ/ジングルのダッキング
  let duck = 1;
  if (s === 'paused') duck = 0.4;
  if (now < duckUntil) duck *= 0.3;
  const mv = clamp(ctx.settings.musicVol != null ? ctx.settings.musicVol : 0.7, 0, 1);
  const sv = clamp(ctx.settings.sfxVol != null ? ctx.settings.sfxVol : 0.9, 0, 1);
  musicBus.gain.setTargetAtTime(mv * duck * 0.9, now, 0.12);
  sfxBus.gain.setTargetAtTime(sv, now, 0.12);
  ambBus.gain.setTargetAtTime(sv * (s === 'paused' ? 0.2 : 0.85), now, 0.25);

  // 自律選曲(状態の変化時のみ切替 → 手動 setMusic を不必要に上書きしない)
  if (s !== 'paused') {
    let want;
    if (s === 'title') want = 'title';
    else if (s === 'ending') want = 'ending';
    else if (s === 'boss') want = 'boss';
    else if (s === 'shrine') want = 'shrine';
    else if (s === 'playing') want = ctx.time.isNight ? 'night' : 'field';
    else want = null; // gameover 等は無音
    if (want !== lastAuto) {
      lastAuto = want;
      if (want !== currentName) switchTo(want);
    }
  }

  // 死亡 → ゲームオーバー時の悲哀モチーフ(1回だけ)
  if (s === 'gameover' && lastState !== 'gameover' && !sorrowDone) {
    sorrowDone = true;
    try { sorrowMotif(); } catch (_) {}
  }
  if (s === 'playing') sorrowDone = false;
  lastState = s;

  // 希望曲がまだ鳴っていなければ開始(unlock 直後・復帰時)
  if (currentName && !songInsts.some((i) => i.name === currentName && !i.fading)) {
    const inst = startSong(currentName, 1.5);
    if (inst) songInsts.push(inst);
  }

  // lookahead スケジューリング(タイマー不使用)
  const until = now + LOOKAHEAD;
  for (const inst of songInsts) scheduleInst(inst, until);
  if (songInsts.some((i) => i.killAt && now > i.killAt)) {
    songInsts = songInsts.filter((i) => {
      if (i.killAt && now > i.killAt) { try { i.g.disconnect(); } catch (_) {} return false; }
      return true;
    });
  }

  // 環境音
  if (amb) updateAmbient(ctx, now);
}
