// player.js — 勇者(スタブ: 担当エージェントが全面実装)
import * as THREE from 'three';
import { toonMaterial, clamp } from './util.js';

let root, vel;

export async function init(ctx) {
  root = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.9, 4, 8), toonMaterial(0x3f7a4e));
  body.position.y = 0.85;
  body.castShadow = true;
  root.add(body);
  root.position.copy(ctx.world.startPos);
  root.position.y = ctx.getGroundHeight(root.position.x, root.position.z);
  ctx.scene.add(root);
  vel = new THREE.Vector3();

  ctx.player = {
    obj: root,
    position: root.position,
    heading: Math.PI,
    velocity: vel,
    hp: 3, maxHp: 3,
    stamina: 100, maxStamina: 100,
    spiritOrbs: 0, gems: 0,
    onGround: true, isRolling: false, isBlocking: false,
    damage(amount, fromPos) {
      this.hp = clamp(this.hp - amount, 0, this.maxHp);
      ctx.emit('player-damaged', { hp: this.hp, amount });
      if (this.hp <= 0) ctx.emit('player-died');
    },
    heal(amount) { this.hp = clamp(this.hp + amount, 0, this.maxHp); },
    addMaxHeart() { this.maxHp += 1; this.hp = this.maxHp; },
    getAttackHit() { return null; },
    teleport(pos, heading = Math.PI) {
      root.position.copy(pos);
      this.heading = heading;
    },
    setFrozen() {},
  };
}

export function update(ctx, dt) {
  const k = ctx.input.keys;
  const speed = 10;
  const f = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
  const s = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
  root.position.x += s * speed * dt;
  root.position.z -= f * speed * dt;
  root.position.y = ctx.getGroundHeight(root.position.x, root.position.z);
}
