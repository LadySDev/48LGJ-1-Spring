import { GameScene } from './GameScene.js';
import { TradeScene } from './TradeScene.js';

export class ManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ManagerScene', actve: true});
		
	}

	preload(){
	
		console.log("ManagerScene preload");

		this.load.image('tilesImg', 'resources/Grounds.png');

		this.load.image('playerFaceDown', 'resources/PlayerFaceDown.png');

		this.load.image('tradeScene', 'resources/TradeScene.png');
		this.load.image('arrowChoice', 'resources/ArrowTradeChoice.png');
	
	}

	create(){
	
		console.log("ManagerScene create");
		
		this.scene.add('GameScene', GameScene, true);
		
	}
	
	update(){
		
	}

	showTradeScene(npc){

		console.log("show TradeScene");
		
		this.scene.add('TradeScene', TradeScene);
		this.scene.start('TradeScene', {character: npc});
		this.scene.pause('GameScene');
		
	}

	hideTradeScene(){

		this.scene.resume('GameScene');
		this.scene.remove('TradeScene');

	}

}