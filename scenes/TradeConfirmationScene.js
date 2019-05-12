export class TradeConfirmationScene extends Phaser.Scene{

	constructor() {

		super({ key: 'TradeConfirmationScene'});
		
	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');
		this.gameScene = this.scene.get('GameScene');
		this.npc = data.character;
		this.player = this.gameScene.playerSprite;
		this.action = data.event;
		this.object = data.object;
		
	}

	preload(){
	
	}

	create(){
	
		//	FADE
		var graphics = this.add.graphics();
		graphics.fillStyle(0x000000, 0.9);

		var rect = this.add.rectangle(0, 0, 800, 600);
		graphics.fillRectShape(rect);

		//	BACKGROUND
		this.bg = this.add.image(0, 0, 'tradeConfirmationScene');
		this.bg.setOrigin(0.0, 0.0);

		//	QUESTION
		this.question = this.add.text(0, 0, 'Are you sure to ' + this.action + " one " + this.object.name + " for " + this.object.price + " ?", { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.question.setPosition(165 + (474/2) - (this.question.width/2), 260);

		//	BUTTON VALID
		this.validBtn = this.add.text(0, 0, 'VALID', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.validBtn.setPosition(308 + (84/2) - (this.validBtn.width/2), 326);
		this.validBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.validBtn.width, this.validBtn.height), Phaser.Geom.Rectangle.Contains);

		this.validBtn.on('pointerover', function(pointer){
			this.validBtn.setAlpha(0.5);			
		}, this);
		
		this.validBtn.on('pointerout', function(pointer){
			this.validBtn.setAlpha(1.0);
		}, this);

		this.validBtn.on('pointerdown', function(pointer){
			if(this.action === "buy"){
				this.buy();
			}
			else if(this.action === "sell"){
				this.sell();
			}
			this.managerScene.hideTradeConfirmationScene(this.npc, this.action);
		}, this);
		
		//	BUTTON CANCEL
		this.cancelBtn = this.add.text(0, 0, 'CANCEL', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.cancelBtn.setPosition(408 + (84/2) - (this.cancelBtn.width/2), 326);
		this.cancelBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.cancelBtn.width, this.cancelBtn.height), Phaser.Geom.Rectangle.Contains);

		this.cancelBtn.on('pointerover', function(pointer){
			this.cancelBtn.setAlpha(0.5);			
		}, this);
		
		this.cancelBtn.on('pointerout', function(pointer){
			this.cancelBtn.setAlpha(1.0);
		}, this);

		this.cancelBtn.on('pointerdown', function(pointer){	
			this.managerScene.hideTradeConfirmationScene(this.npc, this.action);
		}, this);
	}

	buy(){
		
		var name = this.object.name;
		var price = this.object.price;

		var obj = undefined;
		for(var i=0;i<this.npc.bag.objectList.length;i++){		
			if(this.npc.bag.objectList[i] !== undefined && this.npc.bag.objectList[i].getName() === name){	
				obj = this.npc.bag.objectList[i];
			}
		}
		
		this.npc.bag.removeObject(obj);
		this.player.bag.addObject(obj);
		this.player.money = this.player.money - price;
	}

	sell(){

		var name = this.object.name;
		var price = this.object.price;

		var obj = undefined;
		for(var i=0;i<this.player.bag.objectList.length;i++){		
			if(this.player.bag.objectList[i] !== undefined && this.player.bag.objectList[i].getName() === name){	
				obj = this.player.bag.objectList[i];
			}
		}

		this.player.bag.removeObject(obj);
		this.npc.bag.addObject(obj);
		this.player.money = this.player.money + price;
	}

	upload(){
	
		

	}

}