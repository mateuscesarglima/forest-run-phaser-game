var backBtn;
export default class InfoScene extends Phaser.Scene {
  constructor() {
    super({
      key: "InfoScene",
    });
  }
  preload() {}

  create() {
    this.add.image(0, 0, "infoBackground").setOrigin(0, 0);
    this.sound.add('musicInfo').play()
    backBtn = this.add.image(30, 32, "backBtn");
    backBtn.setInteractive({ cursor: "pointer", color: "white" });
    backBtn.on("pointerdown", () => {
      this.sound.play("click");
      this.scene.start("HomeGame");
      this.sound.pauseAll()
    });
  }

  update() {}
}
