# アルディアの伝説 〜緑衣の勇者〜 / Architecture Contract

ゼルダの伝説へのオマージュとして制作する、ブラウザ完結型フル3Dオープンフィールドアクション。
Three.js (v0.170.0) + esbuild。**全モジュールはこの契約に厳密に従うこと。**

## ゲーム概要(世界観・テキストは全て日本語)

- タイトル: **アルディアの伝説** / サブタイトル: **〜緑衣の勇者と滅びの魔城〜**
- 物語: 大地アルディアに魔獣**ヴァルモス**が蘇り、古城は闇に包まれた。緑衣の勇者は
  大地に眠る **4つの祠** を巡って「気の珠」を集め、魔城の結界を破り、魔獣を討つ。
- 進行: フィールド探索 → 祠(パズル)×4 → 気の珠3個以上で魔城の結界が解け、ボス戦 → エンディング。

## 技術スタック / ビルド

- `npm run build` → `esbuild src/main.js --bundle --minify --format=iife --outfile=dist/game.js`
- `three` と `three/addons/*`(examples/jsm)を import 可能。**その他の外部依存・外部URL・画像/音声アセットは一切禁止**。
  ジオメトリ・テクスチャ・音は全てプロシージャル生成する。
- `index.html` は `dist/game.js` を読み込む。DOM: `<canvas id="game">` と `<div id="ui-root">` のみ。
  UIのDOMは全て `ui.js` が `#ui-root` 内に生成する。CSSは `css/style.css`(ui.js の担当者が全面所有)。

## モジュール構成(1ファイル=1担当者)

| ファイル | 責務 |
|---|---|
| `src/main.js` | 起動、ctx生成、入力、ゲームループ、状態遷移、画質適用(**編集禁止・完成済み**) |
| `src/util.js` | 共有ユーティリティ(**編集禁止・完成済み**)|
| `src/world.js` | 地形・水・植生・岩・遺跡・道・古城の外観・ワールドコライダー |
| `src/sky.js` | 空ドーム・太陽/月/星・雲・昼夜サイクル・ライティングリグ・霧 |
| `src/player.js` | 主人公モデル(プロシージャル)・移動/ジャンプ/ダッシュ/回避・攻撃コンボ/ガード・アニメーション |
| `src/camera.js` | 三人称カメラ・衝突回避・ロックオン・タイトル/ボス用シネマティック |
| `src/combat.js` | 敵(3種+)・AI・スポーン・被弾/撃破処理・ドロップ・ロックオン対象管理 |
| `src/shrines.js` | 祠×4の外観と内部パズル部屋・入退場・報酬 |
| `src/boss.js` | 魔城の結界・ボス「魔獣ヴァルモス」・多段階戦闘・撃破演出 |
| `src/ui.js` | 全DOM UI: ロード/タイトル/HUD/ダイアログ/ポーズ/設定/ミニマップ/死亡/エンディング + `css/style.css` |
| `src/audio.js` | WebAudioによる完全合成BGM(5曲+)と効果音 |
| `src/effects.js` | ポストプロセス(Bloom等)・パーティクル全般・画質スケーリング |

各モジュールは次を export する:

```js
export async function init(ctx)   // 初期化。ctx.xxx = { ...公開API } を必ず設定
export function update(ctx, dt)   // 毎フレーム。dt は秒(最大 1/20 にクランプ済み)
```

**init 実行順**(main.js が await で直列実行):
`world → sky → effects → player → camera → combat → shrines → boss → audio → ui`

**update 実行順**(state が 'playing'|'shrine'|'boss' のとき):
`player → camera → world → sky → combat → shrines → boss → effects → audio → ui`
※ state が 'title' のときも `camera / world / sky / effects / audio / ui` は update される(タイトル背景演出のため)。
※ 描画は main が `ctx.effects.render(dt)` を呼ぶ(effects が composer 未使用時は renderer.render にフォールバック)。

## ctx(共有コンテキスト)完全仕様

main.js が生成し全 init/update に渡す。各モジュールは自分の公開APIを `ctx.<名前空間>` に設定する。

```js
ctx = {
  // --- main.js が提供(全モジュールから読み取り可) ---
  renderer,            // THREE.WebGLRenderer (shadowMap有効, sRGB, ACESFilmic)
  scene,               // THREE.Scene
  camera,              // THREE.PerspectiveCamera (fov55, near0.3, far3000)
  canvas,              // HTMLCanvasElement
  state,               // 'loading'|'title'|'playing'|'paused'|'shrine'|'boss'|'gameover'|'ending'
  setState(s),         // 状態遷移(main所有)。遷移時に emit('state', {from,to})
  events,              // EventTarget
  emit(name, detail),  // events.dispatchEvent(new CustomEvent(name,{detail}))
  on(name, fn),        // addEventListener の糖衣。fn(detail) で呼ばれる
  time: {
    elapsed,           // 起動からの秒
    dt,                // 今フレームの秒
    dayPhase,          // 0..1 (0=夜明け6時, 0.25=正午, 0.5=日暮れ18時, 0.75=真夜中)。周期240秒
    isNight,           // dayPhase が 0.55..0.95 の間 true
  },
  input: {
    keys,              // Set<code> 押下中
    justPressed(code), // このフレームに押されたか (例 'KeyE','Space','Escape')
    mouse: { dx, dy, wheel, left, right, leftJust, rightJust }, // dx/dy はフレーム毎の移動量(消費不要, mainがリセット)
    pointerLocked,     // boolean
  },
  settings: { quality: 'high'|'medium'|'low', musicVol: 0..1, sfxVol: 0..1 },
  quality: {           // settings.quality から main が導出。'quality-changed' emit 時に再読込
    pixelRatio, shadowMapSize, grassMul /*0.3..1*/, particleMul, postFX /*bool*/, drawDist /*0.6..1*/
  },
  applyQuality(),      // ui の設定変更後に呼ぶ → main が quality を再計算し emit('quality-changed')

  // --- 地形アクセス(world が設定、shrine/boss が一時差し替え可) ---
  getGroundHeight: (x, z) => number,  // その座標の地面Y。差し替えたら退場時に必ず復元
  colliders: [],       // {x, z, radius, height?} の円柱障害物。世界/祠/ボスが push/削除。playerが衝突解決
  playerBounds: null,  // {minX,maxX,minZ,maxZ} | null 祠内部等での移動制限

  // --- 各モジュールが init で設定する公開API(下記の各節を参照) ---
  world, sky, player, camera3p, combat, shrines, boss, ui, audio, effects,
}
```

### ctx.world(world.js)

```js
ctx.world = {
  getHeight(x, z),          // 地形高さ(滑らか・連続)。|x|,|z| > 1200 でも破綻しない値を返す
  getBiome(x, z),           // 'plains'|'forest'|'lake'|'volcano'|'castle'|'ruins'
  waterLevel,               // 水面Y(定数)
  castleGatePos,            // THREE.Vector3 魔城の門(結界)の位置
  startPos,                 // THREE.Vector3 プレイヤー初期位置
}
```

### ctx.sky(sky.js)

```js
ctx.sky = {
  sunDir,      // THREE.Vector3(正規化・太陽方向) 毎フレーム更新
  sunLight,    // THREE.DirectionalLight(影あり。shadow設定はsky所有、quality対応)
  setOverride(mode), // null|'shrine'|'boss' 祠内部/ボス戦用のライティングへ切替
}
```

### ctx.player(player.js)

```js
ctx.player = {
  obj,                  // THREE.Object3D ルート(scene に追加済み)
  position,             // obj.position のエイリアス
  heading,              // ラジアン。進行方向
  velocity,             // THREE.Vector3
  hp, maxHp,            // ハート数(float)。初期 3.0 / ダメージは 0.5 単位が基本
  stamina, maxStamina,  // 0..100
  spiritOrbs,           // 気の珠 所持数
  gems,                 // 緑石(通貨・スコア)所持数
  onGround, isRolling, isBlocking,
  damage(amount, fromPos), // 無敵時間・ノックバック・emit('player-damaged')。hp<=0 → emit('player-died')
  heal(amount),
  addMaxHeart(),           // maxHp+1 して全回復
  getAttackHit(),          // 攻撃判定中: {pos:Vector3, radius, damage, swingId} / それ以外 null
  teleport(pos, heading),  // 祠出入り等の瞬間移動
  setFrozen(bool),         // 演出中の操作無効化
}
```

### ctx.camera3p(camera.js)

```js
ctx.camera3p = {
  lockTarget,             // 現在のロックオン対象(combatの敵オブジェクト)|null
  setLockTarget(e|null),
  shake(strength),        // 0.1〜1.0 画面揺れ
  cinematic(mode),        // null|'title'|'bossIntro'|'ending' 演出カメラ
}
```

### ctx.combat(combat.js)

```js
ctx.combat = {
  enemies: [],            // 下記 Enemy の配列(死亡後も少しの間残る場合あり alive で判定)
  nearestTargetable(pos, maxDist),  // ロックオン用。alive な最寄り敵 | null
  registerEnemy(e),       // boss.js がボスを登録するのに使う
  damageEnemy(e, dmg, fromPos),     // ヒットエフェクト・ノックバック・撃破処理込み
}
// Enemy 形状: { root:Object3D, pos:root.position, hp, maxHp, alive:bool, radius, name:'ゴブリン'等,
//              isBoss:bool, damage(dmg, fromPos) }
```

夜(time.isNight)はスケルトンが平原に湧く。敵は agro 範囲でプレイヤーを追跡し攻撃。
プレイヤーの攻撃判定は combat.update 内で `ctx.player.getAttackHit()` を読み、同一 swingId は同一敵に1回だけ適用。
撃破時: `effects.burst(pos,'death')`, ドロップ(ハート回復 or 緑石)を地面に生成し接触で取得 → emit('pickup')。

### ctx.shrines(shrines.js)

```js
ctx.shrines = {
  list,             // [{pos:Vector3, name:'力の祠'等, completed:bool}] ×4 (ミニマップ用)
  completedCount,
  active,           // 現在入っている祠 index | -1
}
```

フィールドの祠に近づくと ui.setPrompt('Eキー: 祠に入る')、E で内部へテレポート。
内部は (3000, 0, 3000+i*300) 付近に事前構築した部屋。入場中は getGroundHeight を差し替え、
playerBounds を設定、sky.setOverride('shrine')。パズル(4種類: 踏みスイッチと岩運び / 松明点火 /
光の珠を台座へ / 消える足場の時間制御)クリアで宝箱 → 気の珠 + 全回復、E で退場(元の位置へ復帰・差し替え復元)。

### ctx.boss(boss.js)

```js
ctx.boss = {
  active, defeated,
  hp, maxHp,
}
```

魔城の門に結界。spiritOrbs >= 3 で門前 E → ボス戦開始(state='boss', cinematic('bossIntro'))。
魔獣ヴァルモス: 2段階(通常 → 怒り)。攻撃: 突進 / 衝撃波(ジャンプ回避) / 火球(ガード可)。
撃破 → cinematic('ending') → state='ending' → ui がエンディング表示。

### ctx.ui(ui.js)

```js
ctx.ui = {
  showMessage(text, {duration=3, sub}={}),  // 中央上に上品なメッセージ
  showDialog(lines /*string[]*/, onDone),   // 下部ダイアログ。E/クリックで送り
  setPrompt(text|null),                     // 画面下中央の操作プロンプト
  toast(text),                              // 右上小通知(アイテム取得等)
  setBossBar(visible, name),                // ボスHPバー(値は ctx.boss から毎フレーム反映)
  flash(color, opacity),                    // 画面フラッシュ(被弾=赤 等)
}
```

UIは: ロード画面 / タイトル(ロゴ・「はじめる」「操作方法」「設定」)/ HUD(ハート列・スタミナ円・
気の珠・緑石・ミニマップ)/ ポーズ(再開・設定・タイトルへ)/ 設定(画質3段階・音量2種)/
死亡画面(「ふたたび挑む」)/ エンディング。全て日本語・明朝系の気品ある書体(システムフォントスタック)。

### ctx.audio(audio.js)

```js
ctx.audio = {
  unlock(),            // 初回ユーザー操作で main が呼ぶ(AudioContext.resume)
  play(name, opts={}), // SFX: 'sword1','sword2','sword3','hit','kill','damage','step','jump','roll',
                       // 'pickup','heart','orb','chest','switch','torch','ui','uiBack','block','burn' 等
  setMusic(name),      // 'title'|'field'|'night'|'shrine'|'boss'|'ending'|null クロスフェード
}
```

BGMは全て WebAudio 合成(オシレータ+フィルタ+ディレイ/リバーブ)。main は state と dayPhase を見て
setMusic を呼ばない — **audio.update が自律的に選曲する**(state と time.isNight から)。

### ctx.effects(effects.js)

```js
ctx.effects = {
  render(dt),                 // 毎フレームの描画(composer or renderer)。main が呼ぶ
  burst(pos, preset, opts={}),// パーティクル: 'hit','spark','death','grass','dust','heal','orb','fire',
                              // 'magic','leaf','firefly'(opts: count, color, scale)
  onResize(w, h),             // main が resize 時に呼ぶ
}
```

Bloom(UnrealBloomPass)+ ビネット/穏やかな色調整(カスタムShaderPass)。quality.postFX=false なら素通し。
常駐環境パーティクル: 蛍(夜)・舞う葉(森)・火の粉(火山)。

## ワールドマップ(座標は固定・全モジュール共通)

- ワールド有効域: x,z ∈ [-1000, 1000]。1unit=1m。Y-up。
- **平原**(中央〜南): プレイヤー開始 `(0, h, 250)` 北向き(-Z)
- **古城(魔城)**: `(0, h, -650)` 門は南面 `castleGatePos ≈ (0, h, -560)`
- **炎の山(火山)**: 中心 `(550, h, -450)` 赤茶の岩・溶岩光
- **静寂の湖**: 中心 `(-450, h, 350)` waterLevel は world が決定(周辺地形より低く)
- **深き森**: 中心 `(450, h, 150)` 高密度の木
- **祠×4**: 平原 `(180, h, 80)` / 湖畔 `(-360, h, 260)` / 森 `(430, h, 40)` / 火山麓 `(430, h, -300)`
  (world は祠の半径12m以内を平坦化すること。shrines が外観を建てる)

## 操作(player.js が実装 / ui が表示)

| 入力 | 動作 |
|---|---|
| WASD / 矢印 | 移動 |
| マウス / ドラッグ | カメラ(クリックでポインターロック) |
| Shift | ダッシュ(スタミナ消費) |
| Space | ジャンプ |
| 左クリック / J | 攻撃(3段コンボ) |
| 右クリック / K | 盾ガード |
| Q | ロックオン切替 |
| C | 回避ロール(スタミナ消費・無敵時間) |
| E | 調べる / 話す / 決定 |
| Esc / P | ポーズ |

## イベント一覧(emit / on)

`'state' {from,to}` `'game-start'` `'player-damaged' {hp,amount}` `'player-died'`
`'enemy-hit' {enemy,pos,damage,killed}` `'enemy-killed' {enemy,pos}` `'pickup' {kind,pos}`
`'shrine-enter' {index}` `'shrine-complete' {index}` `'shrine-exit' {index}`
`'boss-start'` `'boss-phase' {phase}` `'boss-defeated'` `'quality-changed'` `'lockon' {target}`
`'respawn-request'`(ui→main: 死亡画面から再開) `'title-request'`(ui→main: タイトルへ戻る)
※ 'game-start' は ui がタイトルの「はじめる」で emit し、main が state を 'playing' に遷移させる。
※ ポーズ(Esc/P)の状態遷移は main が処理済み。ui は 'state' イベントで表示を切り替えるだけでよい。

## ビジュアル規約(高級感の統一)

- トゥーン調: `util.toonMaterial(color, opts)` を必ず使う(共有グラデーションマップ)。
- パレット: 草原 #6fae5a系 / 森 #2f6b4f系 / 岩 #8a8577 / 火山 #6b3a2e+溶岩 #ff5a1f /
  水 #3f8fb0 / 空(昼) #7ec8e8 / 祠・魔法 #33e0c8(シアン発光) / 敵・魔 #b03060系 / UIゴールド #c9a227
- 発光には emissive を使い Bloom で輝かせる。彩度は上品に(ビビッド過ぎない)。
- ジオメトリは低ポリ+フラットな面構成。`flatShading` 推奨。テクスチャ画像は使わない
  (必要なら CanvasTexture をコードで描く)。

## パフォーマンス規約

- 植生・岩・雲は **InstancedMesh** 必須。草は頂点シェーダで揺らす(onBeforeCompile 可)。
- ジオメトリ/マテリアルは共有・使い回し。毎フレームの new/dispose 禁止(Vector3 の一時変数は再利用)。
- 影は sunLight 1灯のみ(プレイヤー追従の狭域シャドウカメラ)。
- 目標: 統合GPUのノートPCで high 設定 45-60fps。draw call < 200。

## 実装ルール

- 各担当は**自分のファイルのみ**編集(ui.js 担当のみ css/style.css も所有)。
- `import * as THREE from 'three'` / `import { ... } from './util.js'`。
- ctx の他モジュールAPIは **update 内では存在チェック不要**(init順が保証)。ただし init 内で後続モジュール
  (例: world の init で ctx.ui)には触れないこと。
- console.error を出さない。例外を投げない。null ガードを丁寧に。
