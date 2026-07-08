// world.js — 地形・水・植生・遺跡・古城外観(スタブ: 担当エージェントが全面実装)
import * as THREE from 'three';
import { toonMaterial } from './util.js';

export async function init(ctx) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(2400, 2400, 1, 1),
    toonMaterial(0x6fae5a)
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  ctx.scene.add(ground);

  ctx.getGroundHeight = () => 0;
  ctx.world = {
    getHeight: () => 0,
    getBiome: () => 'plains',
    waterLevel: -4,
    castleGatePos: new THREE.Vector3(0, 0, -560),
    startPos: new THREE.Vector3(0, 0, 250),
  };
}

export function update(ctx, dt) {}
