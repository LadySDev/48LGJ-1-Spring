import { GameScene } from './GameScene.js';

export class ManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ManagerScene', actve: true});
		
	}

	preload(){
	
		console.log("ManagerScene preload");

		this.load.image('tilesImg', 'resources/Grounds.png');

		this.load.image('playerFaceDown', 'resources/PlayerFaceDown.png');
	
	}

	create(){
	
		console.log("ManagerScene create");
		
		this.scene.add('GameScene', GameScene, true);
		
	}
	
	update(){
		
	}

}