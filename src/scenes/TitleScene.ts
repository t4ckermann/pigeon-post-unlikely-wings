import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  create() {
    this.input.enabled = true;

    drawBackground(this);

    const button = addButton(this);
    addButtonText(this);
    listenForButtonInteractions(this, button);

    function drawBackground(scene: Phaser.Scene) {
      scene.add.image(scene.cameras.main.centerX, scene.cameras.main.centerY, 'title');
    }

    function addButton(scene: Phaser.Scene) {
      const width = scene.cameras.main.width;
      return scene.add.sprite(width / 2, 1100, 'startButton').setInteractive();
    }

    function addButtonText(scene: Phaser.Scene) {
      const width = scene.cameras.main.width;
      scene.add.text(width / 2 - 90, 1065, 'Start', {
        fontSize: '64px',
        color: '#2B243E',
      });
    }

    function listenForButtonInteractions(scene: Phaser.Scene, button: Phaser.GameObjects.Sprite) {
      button.on('pointerover', function () {
        button.setFrame(1);
      });

      button.on('pointerout', function () {
        button.setFrame(0);
      });

      button.on('pointerdown', () => {
        scene.scene.start('Game');
      });
    }
  }
}
