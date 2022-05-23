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
    this.load.audio("getDamage", "src/assets/audios/getDamage.wav")
    this.load.image("map", "src/assets/items/map.png");

    //HOME
    this.load.image(
      "backgroundHomeImage",
      "src/assets/backgrounds/backgroundHome.png"
    );
    this.load.image("btnPlay", "src/assets/buttons/playButton.png");
    this.load.image("btnOptions", "src/assets/buttons/optionsButton.png");
    this.load.image("info", "src/assets/buttons/info.png");

    //OPTIONS
    this.load.image("instrucoes", "src/assets/buttons/instrucoes.png");
    this.load.image("backBtn", "src/assets/buttons/arrow.png");

    //ITEMS
    this.load.image("heartIcon", "src/assets/items/heart.png");

    //DAMAGETAKEN
    this.load.image("iceSpike", "src/assets/damageTaken/iceSpike.png");
    this.load.image("rock", "src/assets/damageTaken/rocks.png")
    

    //GROUNDS
    this.load.image("ground", "src/assets/grounds/ground.png");
    this.load.image("wood", "src/assets/grounds/wood.png");

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
  }

  create() {}

  update() {}
}
