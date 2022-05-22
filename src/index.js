import Phaser from 'phaser';
import HomeGame from "./homeGame"

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scale: {
        width: 800,
        height: 600,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: [HomeGame]
};

const game = new Phaser.Game(config);