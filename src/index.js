import Phaser from "phaser";
import EndGame from "./endGame";
import HomeGame from "./homeGame";
import LoadingScene from "./loadingScene";
import Options from "./options";
import InfoScene from "./infoScene";
import Scene1 from "./scene1";
import Scene2 from "./scene2";
import Scene3 from "./scene3";
import Scene4 from "./scene4";
import SceneFinal from "./sceneFinal"
import SceneUI from "./sceneUI";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  scale: {
    width: 800,
    height: 600,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
  scene: [
    LoadingScene,
    Options,
    InfoScene,
    HomeGame,
    Scene1,
    Scene2,
    Scene3,
    Scene4,
    SceneFinal,
    SceneUI,
    EndGame,
  ],
};

new Phaser.Game(config);
