import Phaser from 'phaser';

function drawBackground(scene: Phaser.Scene) {
  scene.add.image(scene.cameras.main.centerX, scene.cameras.main.centerY, 'title');
}

function createButton(scene: Phaser.Scene) {
  const button = scene.add.sprite(0, 0, 'startButton').setInteractive();
  button.on('pointerdown', () => scene.scene.start('Game'));
  button.on('pointerover', () => button.setFrame(1));
  button.on('pointerout', () => button.setFrame(0));
  return button;
}

function createButtonText(scene: Phaser.Scene) {
  return scene.add.text(-90, -35, 'Start', {
    fontSize: '64px',
    color: '#2B243E',
  });
}

function createStartButton(scene: Phaser.Scene) {
  const width = scene.cameras.main.width;
  const button = createButton(scene);
  const text = createButtonText(scene);
  return scene.add.container(width / 2, 1100, [button, text]);
}

function addTween(scene: Phaser.Scene, target: Phaser.GameObjects.Container) {
  scene.tweens.add({
    targets: target,
    y: '+=4',
    duration: 800,
    ease: 'Sine.inOut',
    yoyo: true,
    repeat: -1,
  });
}

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  create() {
    this.input.enabled = true;
    drawBackground(this);
    const button = createStartButton(this);
    addTween(this, button);
  }
}
