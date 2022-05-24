
var backBtn;




export default class Options extends Phaser.Scene {
  constructor() {
    super({
      key: "Options",
    });
  }


  create(){
      this.add.image(0, 0, "instrucoes").setOrigin(0, 0)
      backBtn = this.add.image(30, 32, "backBtn")
      backBtn.setInteractive({cursor: 'pointer', color: "white"})
      backBtn.on("pointerdown", () => {
          this.sound.play('click')
          this.scene.start("HomeGame");
      })
  }
}
