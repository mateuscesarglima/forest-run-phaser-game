export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: "LoadingScene",
    });
  }

  preload() {
    this.load.on("complete", () => {
      this.scene.start("HomeGame");
    });

    //GENERAL
    this.load.audio("click", "src/assets/audios/click.wav");
    this.load.audio("florest", "src/assets/audios/florest.mp3");
    this.load.audio("jump", "src/assets/audios/jump.wav");
    this.load.audio("getMap", "src/assets/audios/getMap.wav");
    this.load.audio("getHeart", "src/assets/audios/getHeart.wav");
    this.load.audio("getDamage", "src/assets/audios/getDamage.wav");
    this.load.audio("endGameAudio", "src/assets/audios/endGame.wav");
    this.load.audio("lastSceneAudio", "src/assets/audios/lastSceneSound.wav")
    this.load.image("map", "src/assets/items/map.png");
    this.load.image("cursor", "src/assets/cursor/cursor.png")

    //HOME
    this.load.image(
      "backgroundHomeImage",
      "src/assets/backgrounds/backgroundHome.png"
    );
    this.load.image("btnPlay", "src/assets/buttons/playButton.png");
    this.load.image("btnOptions", "src/assets/buttons/optionsButton.png");
    this.load.image("info", "src/assets/buttons/info.png");

    //OPTIONS
    this.load.image("instrucoes", "src/assets/backgrounds/instructions.png");
    this.load.image("backBtn", "src/assets/buttons/arrow.png");

    //ITEMS
    this.load.image("heartIcon", "src/assets/items/heart.png");

    //DAMAGETAKEN
    this.load.image("iceSpike", "src/assets/damageTaken/iceSpike.png");
    this.load.image("rock", "src/assets/damageTaken/rocks.png");
    this.load.image("asteroid", "src/assets/damageTaken/asteroid.png");
    this.load.image("cactus", "src/assets/damageTaken/cactus.png")
    this.load.image("rockLastScene", "src/assets/damageTaken/rockLastScene.png")

    //GROUNDS
    this.load.image("ground", "src/assets/grounds/ground.png");
    this.load.image("wood", "src/assets/grounds/wood.png");
    this.load.image("iceGround", "src/assets/grounds/iceGround.png");
    this.load.image("desertGround", "src/assets/grounds/terrain.png");
    this.load.image("desertGroundSmall", "src/assets/grounds/terrainSmall.png");

    //SPRITE
    this.load.spritesheet("player", "src/assets/sprite/anna.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    //SCENE1
    this.load.image(
      "backgroundScene1",
      "src/assets/backgrounds/florestBackgroundScene1.jpg"
    );

    //SCENE2
    this.load.image(
      "backgroundScene2",
      "src/assets/backgrounds/backgroundMap2.png"
    );

    //SCENE3
    this.load.image("backgroundScene3", "src/assets/backgrounds/iceForest.png");

    //SCENE4
    this.load.image("backgroundScene4", "src/assets/backgrounds/desert.png");

    //SCENEFINAL
    this.load.image("backgroundSceneFinal", "src/assets/backgrounds/finalBackground.png")

    //ENDGAME
    this.load.image("endGameBackground", "src/assets/backgrounds/endGame.png");
  }

  create() {
    
  }
  update() {}
}
