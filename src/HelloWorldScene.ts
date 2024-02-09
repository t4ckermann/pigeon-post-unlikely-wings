import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super({ key: 'hello-world' })
    }

    preload() {
        this.load.setBaseURL('https://labs.phaser.io')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'sky')

        const logo = this.physics.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)
    }
}