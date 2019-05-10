var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	antialias: false,
	pixelArt: true,
	roundPixels: true,
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload(){

	console.log("preload");

}

function create(){

	console.log("create");

}

function update(){

	//console.log("update");

}