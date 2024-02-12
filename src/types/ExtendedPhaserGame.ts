import { Game } from 'phaser';
import { LocalStorage } from '../utils/localStorage';

export class ExtendedPhaserGame extends Game {
  globalStorage: LocalStorage = new LocalStorage();
}
