// camera.js — 三人称カメラ(スタブ: 担当エージェントが全面実装)
import * as THREE from 'three';

let yaw = Math.PI, pitch = 0.35, dist = 8;

export async function init(ctx) {
  ctx.camera3p = {
    lockTarget: null,
    setLockTarget(e) { this.lockTarget = e; },
    shake() {},
    cinematic() {},
  };
}

export function update(ctx, dt) {
  const p = ctx.player?.position;
  if (!p) return;
  yaw -= ctx.input.mouse.dx * 0.003;
  pitch = Math.min(1.2, Math.max(-0.3, pitch + ctx.input.mouse.dy * 0.003));
  const cx = p.x + Math.sin(yaw) * Math.cos(pitch) * dist;
  const cz = p.z + Math.cos(yaw) * Math.cos(pitch) * dist;
  const cy = p.y + 2 + Math.sin(pitch) * dist;
  ctx.camera.position.set(cx, cy, cz);
  ctx.camera.lookAt(p.x, p.y + 1.4, p.z);
}
