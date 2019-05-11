import { Player } from '../Player.js';
import { NonPlayerCharacter } from '../NonPlayerCharacter.js';

export class GameScene extends Phaser.Scene{

	constructor() {

		super({ key: 'GameScene'});
		
	}

	init(data){

		this.managerScene = this.scene.get('ManagerScene');

	}

	preload(){
	
		console.log("GameScene preload");

	}

	create(){
	
		console.log("GameScene create");
		
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


		this.playerSprite = new Player(this, 40+20, 120, 'playerFaceDown');

		this.physics.add.collider(this.playerSprite, layer);

		// add a npc			
		this.zone = this.add.zone((40/2) + (40 * 16), 40 * 8).setCircleDropZone(100);				
		this.physics.world.enable(this.zone);			
		this.zone.body.setCircle(100);
		this.zone.body.setOffset(-100);
		
		this.npc1 = new NonPlayerCharacter(this, (40/2) + (40 * 16), 40 * 8, 'playerFaceDown');
				

		this.physics.add.collider(this.npc1, layer);
		this.physics.add.collider(this.playerSprite, this.npc1);


		this.physics.add.overlap(this.playerSprite, this.zone, this.overlapInNPCAction.bind(this, this.npc1));
				

		this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

		this.npc1Text = this.add.text(0, 0, 'Phaser', { fontFamily: 'Arial', fontSize: 12, color: '#000000' });
		this.npc1Text.text = "                    Z"+"\n"+"Move with: Q D"+"\n"+"                    S"+"\n"+"Action with: F";
		this.npc1Text.setPosition(this.npc1.x - this.npc1Text.width/2, this.npc1.y - 90);
		
	}
	
	overlapInNPCAction(scene, npc){
  ﻿				
		if (Phaser.Input.Keyboard.JustDown(this.keyF))
		{			
			this.managerScene.showTradeScene(npc)
		}
		
	}
	
	update(){
		
	}

}