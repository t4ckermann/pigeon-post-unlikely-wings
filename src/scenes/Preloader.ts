import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Preloader' });
  }

  preload() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 1);
    progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    this.load.on('progress', (value: number) => {
      progressBar.clear();
      progressBar.fillStyle(0xff0000, 1);
      progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
    });

    // this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('title', 'assets/title.webp');
    this.load.spritesheet('startButton', 'assets/startButton.png', { frameWidth: 512, frameHeight: 128 });
    this.load.spritesheet('pigeon', 'assets/pigeon.png', { frameWidth: 256, frameHeight: 256 });
  }

  create() {
    this.scene.start('Title');
  }
}
