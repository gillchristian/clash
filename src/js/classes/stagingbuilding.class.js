import Camp from './camp.class';

/**
 * Handles all the staging buildings of a specific kind
 */
export default class StagingBuilding {
	/**
	 * @param {array} array of Camp models
	 * @param {string} buildings name
	 */
	constructor(model, name){
		this.name = name;
		this.differentBuildings = model.length;
		this.showTroops = false;
		
		this.buildings = [];
		
		for (let value of model)
			this.buildings.push( new Camp(value) );		
	}
	
	/**
	 * Units that can fit in
	 * 
	 * @return {int} amount
	 */
	maxAmount(){
		return this.buildings
							.map( (building, i) => building.capacity[i].lvl )
							.reduce( (a, b) => a + b );
	}
	
	/**
	 * Checks if capacity is exeeded
	 * 
	 * @param {array[Unit]}
	 */
	limitExeeded(units){
		let total = this.units.map( unit => unit.spaceUsed() ).reduce( (a, b) => a + b );
		return this.maxAmount() < total;
	}
}