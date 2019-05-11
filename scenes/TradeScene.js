export class TradeScene extends Phaser.Scene{

	constructor() {

		super({ key: 'TradeScene'});
		
		this.currentBag = "npc";

	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');
		this.gameScene = this.scene.get('GameScene');
		this.npc = data.character;
		
	}

	preload(){
	
		console.log("TradeScene preload");

	}

	cleanBag(bag){

		var obj = {};
		var newBag = [];



		return newBag;
		
	}

	showBag(character){

		var itemNameStartY = 112;

		var itemNameStartX = 163;
		var itemPriceStartX = 442;		
		var itemNumberStartX = 562;
				
		for(var i=0;i<character.bag.objectList.length;i++){
			
			if(character.bag.objectList[i] !== undefined){				
				this.add.text(itemNameStartX, itemNameStartY + (20 * i), character.bag.objectList[i].getName(), { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
			}			
		}

	}

	create(){
	
		console.log("TradeScene create");
		
		//	FADE
		var graphics = this.add.graphics();
		graphics.fillStyle(0x000000, 0.9);

		var rect = this.add.rectangle(0, 0, 800, 600);
		graphics.fillRectShape(rect);

		//	BACKGROUND
		this.bg = this.add.image(0, 0, 'tradeScene');
		this.bg.setOrigin(0.0, 0.0);

		//	BUTTON RETURN GAME
		this.gameBtn = this.add.text(800 - 25, 10, 'X', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.gameBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.gameBtn.width, this.gameBtn.height), Phaser.Geom.Rectangle.Contains);

		this.gameBtn.on('pointerover', function(pointer){
			this.gameBtn.setAlpha(0.5);			
		}, this);
		
		this.gameBtn.on('pointerout', function(pointer){
			this.gameBtn.setAlpha(1.0);
		}, this);

		this.gameBtn.on('pointerdown', function(pointer){		
			this.managerScene.hideTradeScene();
		}, this);
				
		//	BUTTON BUY
		this.buyBtn = this.add.text(0, 0, 'BUY', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.buyBtn.setPosition(163 + (275/3) - (this.buyBtn.width/2), 86);
		this.buyBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.buyBtn.width, this.buyBtn.height), Phaser.Geom.Rectangle.Contains);

		this.buyBtn.on('pointerover', function(pointer){
			this.buyBtn.setAlpha(0.5);			
		}, this);
		
		this.buyBtn.on('pointerout', function(pointer){
			this.buyBtn.setAlpha(1.0);
		}, this);

		this.buyBtn.on('pointerdown', function(pointer){
			if(this.arrowChoice.x !== this.arrowChoicePosX1){
				this.arrowChoice.setPosition(this.arrowChoicePosX1, this.arrowChoice.y);
			}
			///////////////////////////////////////////
		}, this);
		

		this.arrowChoicePosX1 = this.buyBtn.x - 25;

		this.arrowChoice = this.add.image(this.arrowChoicePosX1, 86, 'arrowChoice');
		this.arrowChoice.setOrigin(0.0, 0.0);
		

		//	BUTTON SELL
		this.sellBtn = this.add.text(0, 0, 'SELL', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.sellBtn.setPosition(163 + (275/3)*2 - (this.sellBtn.width/2), 86);
		this.sellBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.sellBtn.width, this.sellBtn.height), Phaser.Geom.Rectangle.Contains);

		this.sellBtn.on('pointerover', function(pointer){
			this.sellBtn.setAlpha(0.5);			
		}, this);
		
		this.sellBtn.on('pointerout', function(pointer){
			this.sellBtn.setAlpha(1.0);
		}, this);

		this.sellBtn.on('pointerdown', function(pointer){	
			if(this.arrowChoice.x !== this.arrowChoicePosX2){
				this.arrowChoice.setPosition(this.arrowChoicePosX2, this.arrowChoice.y);
			}
			///////////////////////////////////////////
		}, this);


		this.arrowChoicePosX2 = this.sellBtn.x - 25;


		// TEXT PRICE
		this.priceText = this.add.text(0, 0, 'PRICE', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.priceText.setPosition(442 +(116/2) - this.priceText.width/2, 86);

		// TEXT BAG
		this.bagText = this.add.text(0, 0, 'BAG', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.bagText.setPosition(562 + (75/2) - this.bagText.width/2, 86);

		this.showBag(this.npc);

		//	TEXT MONEY
		this.moneyText = this.add.text(0, 0, 'MONEY:', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.moneyText.setPosition(442 + (116/2) - this.moneyText.width/2, 494);

		this.money = this.add.text(0, 0, this.gameScene.playerSprite.money, { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.money.setPosition(562 + (75/2) - this.money.width/2, 494);

	}
	
	update(){
		
		this.money.text = this.gameScene.playerSprite.money;
		this.money.setPosition(562 + (75/2) - this.money.width/2, 494);

	}

}