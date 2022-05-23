export default class SceneUI extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneUI",
      active: true
    });
  }

  preload() {}

  create() {
    let hp = 4;
    let scoreMap = 0;
    this.hp = hp;
    this.scoreMap = scoreMap;
    this.scenes = [this.scene.get("Scene1"), this.scene.get("Scene2")];
 

    let HP = this.add.text(16, 16, "HP: " + this.hp ,{
      font: "25px Arial",
      fill: "#FFF",
      backgroundColor: "#000",
    });
    let SCORE = this.add.text(16, 50, "Maps Colected: 0", {
      font: "25px Arial",
      fill: "#FFF",
      backgroundColor: "#000",
    });

    this.scenes.map((scene, index) => {
      scene.events.on(
        "increaseHP",
        () => {
          hp = hp == 4 ? hp : hp + 1;
          this.hp = hp;
          HP.setText("HP: " + hp);
        },
        this
      );

      scene.events.on(
        "decreaseHP",
        () => {
          hp = hp == 0 ? hp : hp - 1;
          this.hp = hp;
          HP.setText("HP: " + hp);
        },
        this
      );

      scene.events.on(
        "increaseScoreMap",
        () => {
          this.scoreMap += 1;
          SCORE.setText("Maps Colected: " + this.scoreMap);
        },
        this
      );
    });
  }

  update() {}
}
