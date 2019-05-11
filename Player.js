export class Player extends Phaser.Physics.Arcade.Sprite{

	constructor (scene, x, y, texture)
    {
        super(scene, x, y, texture);
		        
        scene.add.existing(this);
		scene.physics.add.existing(this);

		this.setOrigin(0.5, 1.0);
		this.playerMove = 80;

		scene.input.keyboard.on('keydown_Z', function (event) {
					
			this.setVelocityX(0);
			this.setVelocityY(- this.playerMove);

		}, this);

		scene.input.keyboard.on('keyup_Z', function (event) {
							
			this.setVelocityY(0);

		}, this);

		scene.input.keyboard.on('keydown_Q', function (event) {

			this.setVelocityX(- this.playerMove);
			this.setVelocityY(0);

		}, this);

		scene.input.keyboard.on('keyup_Q', function (event) {
							
			this.setVelocityX(0);

		}, this);

		scene.input.keyboard.on('keydown_S', function (event) {

			this.setVelocityX(0);
			this.setVelocityY(this.playerMove);

		}, this);

		scene.input.keyboard.on('keyup_S', function (event) {
							
			this.setVelocityY(0);

		}, this);

		scene.input.keyboard.on('keydown_D', function (event) {

			this.setVelocityX(this.playerMove);
			this.setVelocityY(0);

		}, this);

		scene.input.keyboard.on('keyup_D', function (event) {
							
			this.setVelocityX(0);

		}, this);

    }
	
}