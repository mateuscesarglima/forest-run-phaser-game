var playAgainText;
var menu;

export default class EndGame extends Phaser.Scene {
  constructor() {
    super({
      key: "EndGame",
    });
  }

  create() {

    this.UI = this.scene.get('SceneUI')
      
    this.add.image(0, 0, "endGameBackground").setOrigin(0, 0);

    this.sound.play("endGameAudio");

    playAgainText = this.add.text(250, 400, "Play Again", {
      fontFamily: "Georgia",
      fontSize: "30px",
      fill: "White",
      resolution: "10",
    });

    menu = this.add.text(450, 400, "Menu", {
      fontFamily: "Georgia",
      fontSize: "30px",
      fill: "White",
      resolution: "10",
    });

    playAgainText.setInteractive({ cursor: "pointer" });
    playAgainText.on("pointerdown", () => {
      this.sound.play("click");
      this.scene.start("Scene1");
      this.UI.scene.restart()
      this.scene1 = this.scene.get('Scene1')
      this.scene1.scene.restart('Scene1')
    });

    menu.setInteractive({ cursor: "pointer" });
    menu.on("pointerdown", () => {
      this.sound.play("click");
      this.scene.start("HomeGame");
      this.UI.scene.restart()
    });
  }
}
