import './scss/app.scss';

import MainScene from './scenes/MainScene';
import Phaser from 'phaser';
import PreloaderScene from './scenes/Preloader';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 900,
  height: 1600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
  },
  scene: [PreloaderScene, MainScene],
};

export default new Phaser.Game(config);
