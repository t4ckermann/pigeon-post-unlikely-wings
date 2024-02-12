import Phaser from 'phaser';

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super({ key: 'hello-world' });
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  }

  create() {
    this.input.enabled = true;

    let touchStartX = 0;
    let touchEndX = 0;

    initialiseListeners(this.input);
    drawBackground(this);

    const logo = this.physics.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    function drawBackground(scene: Phaser.Scene) {
      scene.add.image(scene.cameras.main.centerX, scene.cameras.main.centerY, 'sky');
    }

    function handleSwipe() {
      const SWIPE_DISTANCE = 10; // Minimum distance for a swipe
      if (touchEndX - touchStartX > SWIPE_DISTANCE) {
        // Swipe right
        logo.setVelocity(200, 0);
      } else if (touchStartX - touchEndX > SWIPE_DISTANCE) {
        // Swipe left
        logo.setVelocity(-200, 0);
      }
    }

    function initialiseListeners(input: Phaser.Input.InputPlugin) {
      // Listen for swipe input
      input.on('pointerdown', function (pointer: PointerEvent) {
        touchStartX = pointer.x;
      });
      input.on('touchstart', function (pointer: PointerEvent) {
        touchStartX = pointer.x;
      });

      input.on('pointerup', function (pointer: PointerEvent) {
        touchEndX = pointer.x;
        handleSwipe();
      });
      input.on('touchend', function (pointer: PointerEvent) {
        touchEndX = pointer.x;
        handleSwipe();
      });
    }
  }
}
