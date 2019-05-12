import { GameScene } from './GameScene.js';
import { TradeScene } from './TradeScene.js';
import { TradeConfirmationScene } from './TradeConfirmationScene.js';

export class ManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ManagerScene', actve: true});
		
	}

	preload(){
	
		this.load.image('tilesImg', 'resources/Grounds.png');

		this.load.image('playerFaceDown', 'resources/PlayerFaceDown.png');

		this.load.image('tradeScene', 'resources/TradeScene.png');
		this.load.image('arrowChoice', 'resources/ArrowTradeChoice.png');

		this.load.image('tradeConfirmationScene', 'resources/TradeConfirmationScene.png');
	
	}

	create(){
	
		this.scene.add('GameScene', GameScene, true);
		
	}
	
	update(){
		
	}

	showTradeScene(npc, side){

		this.scene.add('TradeScene', TradeScene);
		this.scene.start('TradeScene', {character: npc, side: side});
		this.scene.pause('GameScene');
		
	}

	hideTradeScene(){

		this.scene.resume('GameScene');
		this.scene.remove('TradeScene');

	}

	showTradeConfirmationScene(npc, action, obj){

		this.scene.add('TradeConfirmationScene', TradeConfirmationScene);
		this.scene.start('TradeConfirmationScene', {character: npc, event: action, object: obj});
		this.scene.pause('TradeScene');
		
	}

	hideTradeConfirmationScene(npc, side){
			
		this.scene.start('TradeScene', {character: npc, side: side});
		this.scene.remove('TradeConfirmationScene');

	}

}