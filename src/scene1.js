import Player from "./player.js";
import Item from "./item.js";
import SceneUI from "./sceneUI.js";
var map;
var rocks;
var heart;
var hpText;
var scoreMapText;

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene1",
    });
  }

  preload() {}

  create() {
    this.UI = this.scene.get("SceneUI");
    this.UI.scene.setVisible(true, 'SceneUI')
    
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.image(0, 0, "backgroundScene1").setOrigin(0, 0);

    this.physics.world.on("worldbounds", this.sceneOut);

    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 575, "ground");
    platforms.create(700, 500, "wood");
    platforms.create(750, 450, "wood");
    platforms.create(800, 400, "wood");
    platforms.create(850, 350, "wood");
    platforms.create(250, 350, "wood");
    platforms.create(100, 300, "wood");
    platforms.create(750, 200, "wood");

    //ROCKS
    rocks = this.physics.add.group({
      key: "rock",
      quantity: 4,
      collideWorldBounds: true,
      setXY: { x: 30, y: -100, stepX: 130 },
    });

    rocks.children.iterate(this.configSon);

    this.player = new Player({
      scene: this,
      x: 10,
      y: 500,
      texture: "player",
      hp: this.UI.hp,
      scoreMap: this.UI.score,
    });

    var map = new Item({scene: this, x: 30, y: 100, texture: 'map'})

    this.keyboard = this.input.keyboard.addKeys("W, A, D");

    //COLLIDERS
    this.physics.world.addCollider(this.player, platforms);
    this.physics.add.collider(map, platforms);
    this.physics.add.overlap(this.player, map, this.collectMap, null, this);
    this.physics.add.overlap(this.player, rocks, this.hitRock, null, this);
    this.physics.add.overlap(this.player, heart, this.getHeart, null, this);
    this.physics.add.collider(platforms, heart);
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

  hitRock(player, rock) {
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
    map.destroy()
    this.player.getMap();
    // scoreMapText.setText("Maps colected: " + this.player.scoreMap);
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
      () => {
        this.scene.start("Scene2");
      }
    )
  }

  getHeart(player, heart) {
    heart.destroy()
    this.player.heal();
    // hpText.setText("HP: " + this.player.hp);
  }
}
