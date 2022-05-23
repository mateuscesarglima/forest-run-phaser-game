import Player from "./player.js";
import Item from "./item.js";

export default class Scene3 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene3",
    });
  }

  preload() {}

  create() {
    this.UI = this.scene.get("SceneUI");
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.image(0, 0, "backgroundScene3").setOrigin(0, 0);
    this.physics.world.on("worldbounds", this.sceneOut);
    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 600, "iceGround");
    let i = 0;

    while (i < 800) {
      platforms.create(i, 600, "iceGround");
      i = i + 150;
    }
    let j = 0
    while (j <= 800) {
      platforms.create(j, 5, "iceSpike");
      j = j + 40
    }
    platforms.create(700, 350, "iceGround");
    platforms.create(100, 300, "iceGround");
    platforms.create(750, 200, "iceGround");
    platforms.create(400, 500, "iceGround");
    platforms.create(480, 400, "iceGround");


    var iceSpike = this.physics.add.group({
      key: "iceSpike",
      quantity: 5,
      collideWorldBounds: true,
      setXY: { x: 30, y: -100, stepX: 130 },
    });

    iceSpike.children.iterate(this.configSon);

    var map = new Item({ scene: this, x: 30, y: 100, texture: "map" });

    this.keyboard = this.input.keyboard.addKeys("W, A, D");

    this.player = new Player({
      scene: this,
      x: 10,
      y: 500,
      texture: "player",
      hp: this.UI.hp,
      scoreMap: this.UI.scoreMap,
    });

    this.physics.world.addCollider(this.player, platforms);
    this.physics.add.collider(map, platforms);
    this.physics.add.overlap(this.player, map, this.collectMap, null, this);
    this.physics.add.overlap(
      this.player,
      iceSpike,
      this.hitIceSpike,
      null,
      this
    );
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

  configSon(element) {
    element.body.onWorldBounds = true;
    element.x = Phaser.Math.Between(0, 800);
  }

  sceneOut(element) {
    element.x = Phaser.Math.Between(0, 800);
    element.y = Phaser.Math.Between(0, 30);
  }

  hitIceSpike(player, rock) {
    rock.disableBody(true, true);
    if (this.UI.hp > 0) {
      this.player.takeDamage();
      // hpText.setText("HP: " + this.player.hp);
    } else {
      this.physics.pause();

      this.player.setTint(0xff0000);

      this.player.anims.play("turn");

      this.cameras.main.fadeOut(500, 0, 0, 0);

      this.cameras.main.once(
        Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
        () => {
          this.scene.start("EndGame");
        }
      );
    }
  }

  collectMap(player, map) {
    map.destroy();
    this.player.getMap();
    // scoreMapText.setText("Maps colected: " + this.player.scoreMap);
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
      () => {
        this.scene.start("Scene4");
      }
    );
  }
}
