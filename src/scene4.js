import Player from "./player.js";
import Item from "./item.js";

export default class Scene4 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene4",
    });
  }

  preload() {}

  create() {
    this.UI = this.scene.get("SceneUI");
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.image(0, 0, "backgroundScene4").setOrigin(0, 0);
    this.physics.world.on("worldbounds", this.sceneOut);

    var platforms = this.physics.add.staticGroup();

    //GROUND
    platforms.create(400, 600, "desertGround");
    platforms.create(150, 580, "desertGroundSmall")
    platforms.create(100, 580, "desertGroundSmall")
    platforms.create(600, 580, "desertGroundSmall")
    platforms.create(500, 580, "desertGroundSmall")
    platforms.create(400, 580, "desertGroundSmall")
    platforms.create(300, 580, "desertGroundSmall")
    platforms.create(700, 580, "desertGroundSmall")


    //PLATFORMS
    platforms.create(100, 200, "desertGroundSmall")
    platforms.create(200, 500, "desertGroundSmall")
    platforms.create(350, 450, "desertGroundSmall")
    platforms.create(450, 350, "desertGroundSmall")
    platforms.create(650, 250, "desertGroundSmall")
    platforms.create(500, 150, "desertGroundSmall")
    platforms.create(750, 100, "desertGroundSmall")
    platforms.create(200, 300, "desertGroundSmall")


    var lastSceneRock = this.physics.add.group({
      key: "rockLastScene",
      quantity: 5,
      collideWorldBounds: true,
      setXY: { x: 30, y: -100, stepX: 130 },
    });

    lastSceneRock.children.iterate(this.configSon);

    let map = new Item({ scene: this, x: 30, y: 100, texture: "map" });
    let heart = new Item({scene: this, x: 800, y: 50, texture: 'heartIcon'})

    this.keyboard = this.input.keyboard.addKeys("W, A, D");

    this.player = new Player({
      scene: this,
      x: 20,
      y: 500,
      texture: "player",
      hp: this.UI.hp,
      scoreMap: this.UI.score,
    });

    this.physics.world.addCollider(this.player, platforms);
    this.physics.add.collider(map, platforms);
    this.physics.add.overlap(this.player, map, this.collectMap, null, this);
    this.physics.add.overlap(
      this.player,
      lastSceneRock,
      this.hitLastSceneRock,
      null,
      this
    );
    this.physics.add.collider(heart, platforms)
    this.physics.add.overlap(this.player, heart, this.getHeart, null, this);
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

  hitLastSceneRock(player, rock) {
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
        this.scene.start("SceneFinal");
      }
    );
  }

  getHeart(player, heart) {
    heart.disableBody(true, true);
    this.player.heal();
    this.player.setScale(1)
    // hpText.setText("HP: " + this.player.hp);
  }
}
