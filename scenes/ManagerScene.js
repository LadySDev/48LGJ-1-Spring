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
		
		var groundValues = [
			
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		
		];

		var map = this.make.tilemap({ data: groundValues, tileWidth: 40, tileHeight: 40 });
		var tiles = map.addTilesetImage('tilesImg');
		var layer = map.createDynamicLayer(0, tiles, 0, 0);
				
		map.setCollision(1);

		this.playerSprite = this.physics.add.sprite(40+20, 120, 'playerFaceDown');
		//this.playerSprite.setOrigin(0.5, 0.5); //by default
		this.playerSprite.setOrigin(0.5, 1.0);

		this.physics.add.collider(this.playerSprite, layer);

		this.playerMove = 80;

		this.input.keyboard.on('keydown_Z', function (event) {
					
			this.playerSprite.setVelocityX(0);
			this.playerSprite.setVelocityY(- this.playerMove);

		}, this);

		this.input.keyboard.on('keyup_Z', function (event) {
							
			this.playerSprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keydown_Q', function (event) {

			this.playerSprite.setVelocityX(- this.playerMove);
			this.playerSprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keyup_Q', function (event) {
							
			this.playerSprite.setVelocityX(0);

		}, this);

		this.input.keyboard.on('keydown_S', function (event) {

			this.playerSprite.setVelocityX(0);
			this.playerSprite.setVelocityY(this.playerMove);

		}, this);

		this.input.keyboard.on('keyup_S', function (event) {
							
			this.playerSprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keydown_D', function (event) {

			this.playerSprite.setVelocityX(this.playerMove);
			this.playerSprite.setVelocityY(0);

		}, this);

		this.input.keyboard.on('keyup_D', function (event) {
							
			this.playerSprite.setVelocityX(0);

		}, this);

	}

	update(){
	
	
	
	}

}