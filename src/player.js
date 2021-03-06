export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(data) {
    let { scene, x, y, texture, hp, scoreMap } = data;
    super(scene, x, y, texture);
    scene.sys.updateList.add(this);
    scene.sys.displayList.add(this);
    this.setScale(0.8);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds();
    this.scoreMap = scoreMap;
    this.hp = hp;
  }

  getAnimation() {
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 17,
        end: 9,
      }),
      frameRate: 25,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "player", frame: 19 }],
      frameRate: 25,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 28,
        end: 36,
      }),
      frameRate: 25,
    });
  }

  heal() {
    this.scene.sound.play("getHeart");
    this.scene.events.emit('increaseHP')
  }

  takeDamage() {
    this.scene.sound.play("getDamage");
    this.scene.events.emit('decreaseHP')
  }

  getMap() {
    this.scene.sound.play("getMap");
    this.scene.events.emit('increaseScoreMap')
  }

  update() {}
}
