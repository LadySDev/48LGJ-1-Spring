export class Bag{

	constructor() {

		this.objectList = new Array(30);
		
	}

	getObjectList(){

		return this.objectList;

	}

	addObject(object){
				
		var index = null;

		for(var i = this.objectList.length - 1; i > -1; i--){
			if(this.objectList[i] === undefined){				
				index = i;
			}
		}

		if(index !== null){

			this.objectList[index] = object;

		}
		
	}

	moveObject(object, position){

		var position1 = this.objectList.indexOf(object);
		var object2 = this.objectList[position];

		this.objectList[position] = object;
		this.objectList[position1] = object2;

	}

	removeObject(object){

		var position = this.objectList.indexOf(object);

		this.objectList[position] = undefined;

	}

	putObjectAt(object, position){

		this.objectList[position] = object;

	}

}