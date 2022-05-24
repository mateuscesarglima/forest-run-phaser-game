var btnPlay;
var btnOptions;
var infoImg;
var audioHome;
export default class HomeGame extends Phaser.Scene {
  constructor() {
    super("HomeGame");
  }

  preload() {
   
  }

  create() {

    this.UI = this.scene.get("SceneUI")


    this.scene.setVisible(false, 'SceneUI')

    this.add.image(0, 0, "backgroundHomeImage").setOrigin(0, 0);
    var audioHome = this.sound.add('florest')


    audioHome.play()

    this.add.text(245, 200, "FOREST RUN", {
      fontFamily: "Times New Roman",
      resolution: "50",
      font: "50px",
      color: "#FFF",
    });

    btnPlay = this.add.text(320, 350, "< Play >", {
      font: "40px Arial",
      fill: "#FFF",
      resolution: 10
    });
    btnPlay.setInteractive({ cursor: "pointer" });
    btnPlay.on("pointerdown", () => {
      this.cameras.main.fadeOut(1000, 0, 0, 1000)
      this.sound.play("click");
      audioHome.pause()
      this.scene.start("Scene1")
      // this.scene.start("SceneFinal")
    });

    btnOptions = this.add.text(260, 450, "< Instructions >", {
      font: "40px Arial",
      fill: "#FFF",
      resolution: 10
    });
    btnOptions.setInteractive({ cursor: "pointer" });
    btnOptions.on("pointerdown", () => {
      this.sound.play("click");
      this.scene.start("Options")
      audioHome.pause()
    });

    infoImg = this.add.image(750, 550, "info");
    infoImg.setInteractive({ cursor: "pointer" });
    infoImg.on("pointerdown", () => {
      this.sound.play("click");
    });
  }
}
