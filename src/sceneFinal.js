export default class SceneFinal extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneFinal",
    });
  }

  preload(){

  }

  create(){
    this.UI = this.scene.get("SceneUI")
    this.sound.play("lastSceneAudio")
    var image = this.add.image(0, 0, "backgroundSceneFinal").setOrigin(0, 0)
    this.add.text(230, 100, "Você conseguiu fugir da floresta!", {
        font: "25px Arial",
        fill: "#FFF",
        backgroundColor: "#000",
      
    })

    this.add.text(330, 150, "Fim do jogo...", {
        font: "25px Arial",
        fill: "#FFF",
        backgroundColor: "#000",
        
    })

    let menu = this.add.text(330, 500, "MENU", {
        font: "50px Arial",
        fill: "#FFF",
       backgroundColor: "#000",
    })


    menu.setInteractive({cursor: 'pointer'})
    menu.on('pointerdown', () => {
        this.sound.play('click')
        this.scene.start("HomeGame")
        location.reload()
    })
  }

  update(){

  }
}
