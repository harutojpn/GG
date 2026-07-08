// combat.js — 敵・AI・戦闘(スタブ: 担当エージェントが全面実装)
export async function init(ctx) {
  ctx.combat = {
    enemies: [],
    nearestTargetable() { return null; },
    registerEnemy(e) { this.enemies.push(e); },
    damageEnemy(e, dmg, fromPos) {
      e.hp -= dmg;
      const killed = e.hp <= 0;
      if (killed) e.alive = false;
      ctx.emit('enemy-hit', { enemy: e, pos: e.pos, damage: dmg, killed });
      if (killed) ctx.emit('enemy-killed', { enemy: e, pos: e.pos });
    },
  };
}

export function update(ctx, dt) {}
