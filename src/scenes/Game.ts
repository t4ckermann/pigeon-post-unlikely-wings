import { ExtendedPhaserGame } from '../types/ExtendedPhaserGame';
import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    const game = this.game as ExtendedPhaserGame;
    console.log(game.globalStorage.getFascismLevel());
  }
}
