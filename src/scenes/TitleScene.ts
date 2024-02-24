import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  create() {
    this.input.enabled = true;
    drawBackground(this);
    const button = addStartButton(this);
    // Add a bounce effect to the restart button
    this.tweens.add({
      targets: button,
      y: '+=4',
      duration: 800,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    function drawBackground(scene: Phaser.Scene) {
      scene.add.image(scene.cameras.main.centerX, scene.cameras.main.centerY, 'title');
    }

    function addStartButton(scene: Phaser.Scene) {
      const width = scene.cameras.main.width;
      const button = scene.add.sprite(0, 0, 'startButton').setInteractive();
      const text = scene.add.text(-90, -35, 'Start', {
        fontSize: '64px',
        color: '#2B243E',
      });
      button.on('pointerdown', () => {
        scene.scene.start('Game');
      });
      button.on('pointerover', () => {
        button.setFrame(1);
      });

      button.on('pointerout', () => {
        button.setFrame(0);
      });

      const container = scene.add.container(width / 2, 1100, [button, text]);

      return container;
    }
  }
}
