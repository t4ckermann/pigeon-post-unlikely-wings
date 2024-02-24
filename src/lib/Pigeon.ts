export class Pigeon extends Phaser.GameObjects.Sprite {
  declare body: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'pigeon');
    scene.add.existing(this);
    scene.physics.world.enable(this);

    // Player properties
    this.setInteractive();
    this.body.setBounceY(0.8); // Set bounce factor
    this.body.setCollideWorldBounds(true); // Prevent pigeon from going out of the world bounds
  }

  update(): void {
    // If pigeon is moving upwards, play fly animation
    if (this.body.velocity.y < 0) {
      this.anims.play('fly', true);
    } else {
      const framesLength = this.anims.currentAnim ? this.anims.currentAnim.frames.length : 0;
      this.anims.stop();
      if (framesLength > 0) {
        this.setFrame(framesLength - 1);
      }
    }

    // If pigeon reaches the bottom of the screen, emit 'dead' and stop moving
    if (this.y >= (this.scene.sys.game.config.height as number) - this.displayHeight / 2) {
      this.emit('dead');
      this.body.setVelocity(0, 0); // Stop moving
      this.body.setAllowGravity(false); // Stop gravity
      this.body.setCollideWorldBounds(false); // Allow pigeon to go out of the world bounds
    }
  }

  moveUp(): void {
    this.body.setVelocityY(-100); // Move pigeon upwards
    this.body.setAllowGravity(true); // Allow gravity
    this.body.setCollideWorldBounds(true); // Prevent pigeon from going out of the world bounds
  }

  moveDown(): void {
    // drop flyer
  }
}
