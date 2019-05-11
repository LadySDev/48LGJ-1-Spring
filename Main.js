import { ManagerScene } from './scenes/ManagerScene.js';

var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	antialias: false,
	pixelArt: true,
	roundPixels: true,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
	scene: [ManagerScene]
};

var game = new Phaser.Game(config);