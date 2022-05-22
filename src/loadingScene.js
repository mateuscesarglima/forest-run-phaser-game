

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
    this.load.audio("florest", "src/assets/audios/florest.mp3")
    

    //HOME
    this.load.image("backgroundHomeImage", "src/assets/backgrounds/backgroundHome.png");
    this.load.image("btnPlay", "src/assets/buttons/playButton.png");
    this.load.image("btnOptions", "src/assets/buttons/optionsButton.png");
    this.load.image("instrucoes", "src/assets/buttons/instrucoes.png");
    this.load.image("info", "src/assets/buttons/info.png");

    //ITEMS
    this.load.image("heartIcon", "src/assets/items/heart.png");

    //DAMAGETAKEN
    this.load.image("iceSpike", "src/assets/damageTaken/iceSpike.png");

    //GROUNDS
    this.load.image("ground", "src/assets/grounds/ground.png");

    
  }

  create() {}

  update() {}
}
