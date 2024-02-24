import Phaser from 'phaser';
import { Pigeon } from '../lib/Pigeon';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    // Create pigeon animation
    this.anims.create({
      key: 'fly',
      frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });

    this.pigeon = new Pigeon(this, 400, 300);

    this.startTouchY = 0;

    this.input.on('pointerdown', (pointer) => {
      // Record the start y-position of the touch
      this.startTouchY = pointer.y;
    });

    this.input.on('pointerup', (pointer) => {
      // Calculate the distance moved
      const distanceMoved = pointer.y - this.startTouchY;
      // Determine if the movement was upwards or downwards
      if (distanceMoved < 0) {
        // Pointer moved upwards
        this.pigeon.moveUp();
      } else if (distanceMoved > 0) {
        // Pointer moved downwards
        this.pigeon.moveDown();
      }
      // Optionally, you can add a threshold to ignore minor movements
    });

    this.pigeon.on('dead', () => {
      this.scene.start('Result', { score: 0 });
    });
  }

  update() {
    // Update pigeon position based on touch
    this.pigeon.update();
  }
}
