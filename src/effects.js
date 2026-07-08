// effects.js — ポストプロセス・パーティクル(スタブ: 担当エージェントが全面実装)
export async function init(ctx) {
  ctx.effects = {
    render() { ctx.renderer.render(ctx.scene, ctx.camera); },
    burst() {},
    onResize() {},
  };
}

export function update(ctx, dt) {}
