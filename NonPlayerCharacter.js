import { Bag } from './Bag.js';

export class NonPlayerCharacter extends Phaser.Physics.Arcade.Sprite{

	constructor (scene, x, y, texture)
    {
        super(scene, x, y, texture);
		        
        scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setCollideWorldBounds(true);
		this.body.setImmovable(true);

		this.bag = new Bag();

    }
		
}