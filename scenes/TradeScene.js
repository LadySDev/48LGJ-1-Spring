export class TradeScene extends Phaser.Scene{

	constructor() {

		super({ key: 'TradeScene'});
		
		this.currentBag = "npc";

	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');
		this.gameScene = this.scene.get('GameScene');
		this.npc = data.character;
		this.player = this.gameScene.playerSprite;
		
	}

	preload(){
	
		console.log("TradeScene preload");

	}

	cleanBag(bag){

		var obj = {};
		var newBag = [];



		return newBag;
		
	}

	createItemName(scene, posX, posY, value){

		var name = scene.add.text(posX, posY, value, { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		name.setInteractive();

		name.on('pointerover', function(pointer){
			name.setAlpha(0.5);			
		}, scene);
		
		name.on('pointerout', function(pointer){
			name.setAlpha(1.0);
		}, scene);

		name.on('pointerdown', function(pointer){		
			////////////////////////////////////
		}, scene);

		return name;

	}

	showBag(character){

		var itemNameStartY = 114;

		var itemNameStartX = 167;
		var itemPriceStartX = 444;		
		var itemNumberStartX = 564;
				
		var array = Array.from(new Set((character.bag.objectList).map(s => s.name)));
		var array2 = [];
		for(var i=0;i<array.length;i++){
			if(array[i] !== undefined){		
				
				var counter = 0;
				for(var j=0;j<this.player.bag.objectList.length;j++){
					if(this.player.bag.objectList[j] !== undefined && this.player.bag.objectList[j].getName() === array[i]){
						counter = counter + 1;
					}
				}
				array2[i] = {name: array[i], price: (character.bag.objectList).find(s=>s.name).price, number: counter};
			}
		}
				
		this.container.removeAll(true);

		for(var i=0;i<array2.length;i++){
									
			var name = this.createItemName(this, itemNameStartX, itemNameStartY + (20 * i), array2[i].name);
			
			this.container.add(name);

			var price = this.add.text(0, 0, array2[i].price, { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
			price.setPosition(itemPriceStartX + (116/2) - price.width/2, itemNameStartY + (20 * i));
			this.container.add(price);

			var number = this.add.text(0, 0, array2[i].number, { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
			number.setPosition(itemNumberStartX + (75/2) - number.width/2, itemNameStartY + (20 * i));
			this.container.add(number);

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
				this.showBag(this.npc);
			}			
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
				this.showBag(this.player);
			}			
		}, this);


		this.arrowChoicePosX2 = this.sellBtn.x - 25;


		// TEXT PRICE
		this.priceText = this.add.text(0, 0, 'PRICE', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.priceText.setPosition(442 +(116/2) - this.priceText.width/2, 86);

		// TEXT BAG
		this.bagText = this.add.text(0, 0, 'BAG', { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' });
		this.bagText.setPosition(562 + (75/2) - this.bagText.width/2, 86);

		this.container = this.add.container(0, 0);
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