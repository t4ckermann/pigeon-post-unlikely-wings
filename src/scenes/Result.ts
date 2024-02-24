import Phaser from 'phaser';

export class ResultScene extends Phaser.Scene {
  private score: number;

  constructor() {
    super({ key: 'Result' });
  }

  init(data: { score: number }) {
    this.score = data.score;
  }

  create() {
    const { width, height } = this.sys.game.config;

    // Display the score in the center of the screen
    const scoreText = this.add.text(0, 0, `Your score: ${this.score}`, { fontSize: '48px', color: '#fff' });
    Phaser.Display.Align.In.Center(scoreText, this.add.zone(width / 2, height / 2 - 100, width, height));

    // Add a button to restart the game
    const restartButton = this.add.text(0, 0, 'Restart', { fontSize: '32px', color: '#fff' });
    Phaser.Display.Align.In.Center(restartButton, this.add.zone(width / 2, height / 2, width, height));

    restartButton.setInteractive();
    restartButton.on('pointerdown', () => {
      this.scene.start('Game');
    });

    // Add a bounce effect to the restart button
    this.tweens.add({
      targets: restartButton,
      y: '+=4',
      duration: 800,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }
}
