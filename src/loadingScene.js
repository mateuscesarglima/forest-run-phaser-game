import backgroundHomeImage from "./assets/HomeGame/backgroundHome.png";
import ground from "./assets/grounds/ground.png"
import heart from "./assets/items/heart.png"
import iceSpike from "./assets/damageTaken/iceSpike.png"

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: "LoadingScene",
    });
  }

  preload() {

    this.load.on('complete', () => {
        this.scene.start('HomeGame')
    })

    //HOME
    this.load.image("backgroundHomeImage", backgroundHomeImage);

    //ITEMS
    this.load.image("heartIcon", heart)
    
    //DAMAGETAKEN
    this.load.image("iceSpike", iceSpike)

    //GROUNDS
    this.load.image("ground", ground)
  }

  create() {}

  update() {}
}
