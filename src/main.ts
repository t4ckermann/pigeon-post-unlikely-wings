import './scss/app.scss' // Add this line

import HelloWorldScene from './HelloWorldScene'
import Phaser from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 900,
	height: 1600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scale: {
		mode: Phaser.Scale.FIT,
	},
	scene: [HelloWorldScene],
}

export default new Phaser.Game(config)