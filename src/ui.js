// ui.js — 全DOM UI(スタブ: 担当エージェントが全面実装)
export async function init(ctx) {
  ctx.ui = {
    showMessage() {},
    showDialog(lines, onDone) { onDone?.(); },
    setPrompt() {},
    toast() {},
    setBossBar() {},
    flash() {},
  };
  // 暫定: タイトルを即開始できる仮ボタン
  const root = document.getElementById('ui-root');
  const btn = document.createElement('button');
  btn.textContent = 'はじめる';
  btn.style.cssText = 'position:absolute;bottom:18%;left:50%;transform:translateX(-50%);padding:12px 44px;font-size:18px;';
  btn.onclick = () => { btn.remove(); ctx.emit('game-start'); };
  ctx.on('state', ({ to }) => { if (to === 'title' && !btn.isConnected) root.appendChild(btn); });
  root.appendChild(btn);
}

export function update(ctx, dt) {}
