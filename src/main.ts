import './scss/app.scss';

import GameScene from './scenes/Game';
import Phaser from 'phaser';
import PreloaderScene from './scenes/Preloader';
import { ResultScene } from './scenes/Result';
import TitleScene from './scenes/TitleScene';
import { WebAppModal } from './utils/webAppModal';

new WebAppModal();

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
  scene: [PreloaderScene, TitleScene, GameScene, ResultScene],
};
const game = new Phaser.Game(config);

export default game;
