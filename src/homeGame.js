export default class CenaIntro extends Phaser.Scene {
    constructor(){
        super("HomeGame")
    }

    preload(){
        this.load.image("backgroundHomeImage", backgroundHomeImage)
    }

    create(){
        this.add.image(0, 0, "backgroundHomeImage").setOrigin(0, 0)
    }
}