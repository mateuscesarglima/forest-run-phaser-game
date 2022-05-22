import Phaser from 'phaser';
import HomeGame from "./homeGame"
import LoadingScene from "./loadingScene"

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
    scene: [LoadingScene, HomeGame]
};

new Phaser.Game(config);
