import Player from "./player.js";

export default class Scene3 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene3",
    });
  }

  preload() {}

  create() {

    this.UI = this.scene.get('SceneUI')
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.image(0, 0, "backgroundScene3").setOrigin(0, 0);
    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 575, "ground");
    platforms.create(700, 400, "wood");
    platforms.create(100, 300, "wood");
    platforms.create(750, 200, "wood");

    this.keyboard = this.input.keyboard.addKeys("W, A, D");

    this.player = new Player({
      scene: this,
      x: 100,
      y: 400,
      texture: "player",
      hp: this.UI.hp,
      scoreMap: this.UI.scoreMap,
    });


    this.physics.world.addCollider(this.player, platforms);
  }

  update() {
    this.player.getAnimation();
    if (this.keyboard.A.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    } else if (this.keyboard.D.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }
    if (this.keyboard.W.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
      this.sound.play("jump");
    }
  }
}
