export class TradeScene extends Phaser.Scene{

	constructor() {

		super({ key: 'TradeScene'});
		
	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');

	}

	preload(){
	
		console.log("TradeScene preload");

	}

	create(){
	
		console.log("TradeScene create");
		
		var graphics = this.add.graphics();
		graphics.fillStyle(0x000000, 0.9);

		var rect = this.add.rectangle(0, 0, 800, 600);
		graphics.fillRectShape(rect);

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
	}
	
	update(){
		
	}

}