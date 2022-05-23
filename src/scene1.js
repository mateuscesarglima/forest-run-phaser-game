import Player from "./player.js";
var map;
var hpText;
var scoreMapText;
var rocks;

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene1",
    });
  }

  preload() {}

  create() {


    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.add.image(0, 0, "backgroundScene1").setOrigin(0, 0);

    this.physics.world.on("worldbounds", this.sceneOut);

    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 575, "ground");
    platforms.create(700, 400, "wood");
    platforms.create(100, 300, "wood");
    platforms.create(750, 200, "wood");

    //ROCKS
    rocks = this.physics.add.group({
        key: "rock",
        quantity: 10,
        collideWorldBounds: true,
        setXY: {x: 30, y: -100, stepX: 130}
    })

    rocks.children.iterate(this.configSon)


    this.player = new Player({
      scene: this,
      x: 100,
      y: 400,
      texture: "player",
      hp: 1,
      scoreMap: 0,
    });

    hpText = this.add.text(16, 16, "Life: " + this.player.hp, {
      fontSize: "25px",
      fill: "#FFF",
      backgroundColor: "black",
    });

    scoreMapText = this.add.text(
      16,
      50,
      "Colected Maps: " + this.player.scoreMap,
      {
        fontSize: "25px",
        fill: "#FFF",
        backgroundColor: "black",
      }
    );

    map = this.physics.add.image(50, 220, "map");

    this.keyboard = this.input.keyboard.addKeys("W, A, D");

    //COLLIDERS
    this.physics.world.addCollider(this.player, platforms);
    this.physics.add.collider(map, platforms);
    this.physics.add.overlap(this.player, map, this.collectMap, null, this);
    this.physics.add.overlap(this.player, rocks, this.hitRock, null, this)
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

  configSon(element){
    element.body.onWorldBounds = true;
    element.x = Phaser.Math.Between(0, 800)
  }

  sceneOut(element){
    element.x = Phaser.Math.Between(0, 800)
    element.y = Phaser.Math.Between(0, 30)
  }

  hitRock(player, rock){
    this.sound.play("getDamage")
    if(this.player.hp > 0){
        rock.disableBody(true, true);
        this.player.hp -= 1;
        hpText.setText("Life: " + this.player.hp)
    }else{
        this.physics.pause()

        this.player.setTint(0xff0000)
        this.player.anims.play("turn")
        this.cameras.main.fadeOut(500, 0, 0, 0)
        this.cameras.main.once(
          Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
          () => {
            this.scene.start("EndGame");
          }
        );
    }
}

  collectMap(player, map) {
    map.disableBody(true, true);
    this.player.scoreMap += 1;
    scoreMapText.setText("Maps colected: " + this.player.scoreMap);
    this.sound.play("getMap");
    this.cameras.main.fadeOut(500, 0, 0, 0);
    this.cameras.main.once(
        Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
        () =>{
            this.scene.start("Scene2");
        }
    )
  }
}


