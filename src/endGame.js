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

    menu = this.add.text(340, 400, "Menu", {
      fontFamily: "Georgia",
      fontSize: "40px",
      fill: "White",
      resolution: "10",
    });

    menu.setInteractive({ cursor: "pointer" });
    menu.on("pointerdown", () => {
      this.sound.play("click");
      this.scene.start("HomeGame");
      location.reload()
    });
  }
}
