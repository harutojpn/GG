// shrines.js — 祠×4・パズル(スタブ: 担当エージェントが全面実装)
import * as THREE from 'three';

export async function init(ctx) {
  ctx.shrines = {
    list: [
      { pos: new THREE.Vector3(180, 0, 80), name: '力の祠', completed: false },
      { pos: new THREE.Vector3(-360, 0, 260), name: '水鏡の祠', completed: false },
      { pos: new THREE.Vector3(430, 0, 40), name: '樹霊の祠', completed: false },
      { pos: new THREE.Vector3(430, 0, -300), name: '烈火の祠', completed: false },
    ],
    completedCount: 0,
    active: -1,
  };
}

export function update(ctx, dt) {}
