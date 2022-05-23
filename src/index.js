import Phaser from 'phaser';
import EndGame from './endGame';
import HomeGame from "./homeGame"
import LoadingScene from "./loadingScene"
import Options from './options';
import Scene1 from './scene1';
import Scene2 from './scene2';
import SceneUI from './sceneUI'


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
            debug: true
        }
    },
    scene: [LoadingScene, Options, HomeGame, Scene1, Scene2, SceneUI, EndGame]
};

new Phaser.Game(config);
