export default class Scene1 extends Phaser.Scene{
    constructor(){
        super({
            key: "Scene1"
        })
    }

    create(){
    
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        this.add.image(0, 0, 'backgroundScene1').setOrigin(0, 0)

        var platforms = this.physics.add.staticGroup();
        platforms.create(400, 575, "ground");
        platforms.create(700, 400, "wood");
        platforms.create(100, 300, "wood");
        platforms.create(750, 200, "wood");

    }
}