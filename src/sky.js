// sky.js — 空・昼夜・ライティング(スタブ: 担当エージェントが全面実装)
import * as THREE from 'three';

let sun, hemi;

export async function init(ctx) {
  hemi = new THREE.HemisphereLight(0xbfe3ff, 0x4a5a3a, 0.9);
  ctx.scene.add(hemi);
  sun = new THREE.DirectionalLight(0xfff2d8, 2.2);
  sun.position.set(120, 200, 80);
  sun.castShadow = true;
  sun.shadow.mapSize.set(ctx.quality.shadowMapSize, ctx.quality.shadowMapSize);
  sun.shadow.camera.left = -80; sun.shadow.camera.right = 80;
  sun.shadow.camera.top = 80; sun.shadow.camera.bottom = -80;
  sun.shadow.camera.far = 600;
  ctx.scene.add(sun, sun.target);
  ctx.scene.background = new THREE.Color(0x7ec8e8);
  ctx.scene.fog = new THREE.Fog(0x9fd4e8, 300, 1400);

  ctx.sky = {
    sunDir: new THREE.Vector3(0.5, 0.8, 0.3).normalize(),
    sunLight: sun,
    setOverride() {},
  };
}

export function update(ctx, dt) {
  if (ctx.player) {
    const p = ctx.player.position;
    sun.position.set(p.x + 120, 200, p.z + 80);
    sun.target.position.copy(p);
  }
}
