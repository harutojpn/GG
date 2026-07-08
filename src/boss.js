// boss.js — 魔獣ヴァルモス(スタブ: 担当エージェントが全面実装)
export async function init(ctx) {
  ctx.boss = {
    active: false,
    defeated: false,
    hp: 60, maxHp: 60,
  };
}

export function update(ctx, dt) {}
