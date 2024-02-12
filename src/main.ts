import './scss/app.scss';

import { ExtendedPhaserGame } from './types/ExtendedPhaserGame';
import GameScene from './scenes/Game';
import { LocalStorage } from './utils/localStorage';
import Phaser from 'phaser';
import PreloaderScene from './scenes/Preloader';
import TitleScene from './scenes/TitleScene';

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
  scene: [PreloaderScene, TitleScene, GameScene],
};
const game = new Phaser.Game(config);
(game as ExtendedPhaserGame).globalStorage = new LocalStorage();

export default game;
