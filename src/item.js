export default class Item extends Phaser.Physics.Arcade.Sprite {
  constructor(data) {
    let { scene, x, y, texture } = data;
    super(scene, x, y, texture);

    this.scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.setCollideWorldBounds();
  }
}
