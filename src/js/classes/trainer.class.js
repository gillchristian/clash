/**
 * Models a troop training building
 */
export default class Trainer {
	
	/**
	 * @param {object} model
	 */
	constructor(model){
		this.folder       = model.folder;
		this.building     = model.building;
		this.name         = model.name;
		this.capacity     = model.capacity;
		this.lvls         = model.lvls;
		this.lvl          = model.lvl;
		this.amount       = model.amount;
		this.unitSpaces   = [ ]; // populated with the space the units take
		this.unitsTime   = [ ]; // populated with the time the units take
	
		this.showTroops = true;
	}
	/**
	 * Checks if there is space left to produce units
	 * 
	 * @param {int} unit index
	 * @return {bool}
	 */
	hasSpaceFor(index){
		return this.queuedUnits() + this.unitSpaces[index] <= this.actualCapacity();
	}
	
	/**
	 * Checks if a unit is available for production
	 * 
	 * the first lvl correspons to the id of the unit
	 * because each lvl the trainer can produce a new unit
	 * and units are ordered by its id
	 * 
	 * @param {int} first lvl the unit is produced at
	 * @return {bool}
	 */
	canTrain(firstLvl){
		return this.lvl > firstLvl
	}
	
	/**
	 * Gets the actual capacity
	 * 
	 * @return {int} capacity
	 */
	actualCapacity(){
		return this.capacity[this.lvl]
	}
	
	/**
	 * Get amount of queued units
	 * 
	 * @return {int} amount
	 */
	queuedUnits(){
		return this.amount
							.map( (val, i) => this.amount[i] * this.unitSpaces[i] )
							.reduce( (a, b) => a + b );
	}
	
	/**
	 * Time to produce all queued units
	 */
	time(){
		return this.amount
							.map( (amount, i) => amount * this.unitsTime[i] )
							.reduce( (a,b) => a + b )
	}
	
	/**
	 * Get the cost of the queued units
	 * 
	 * @param {array[Unit]} units
	 * @return {int} cost
	 */
	unitsCost(units){
		return this.amount
							.map( (val, i) => this.amount[i] * units[i].actualCost() )
							.reduce( (a, b) => a + b );
	}
	
	/**
	 * Set the level
	 * 
	 * @param {int} lvl
	 */
	setLvl(lvl){
		if ( lvl >= this.lvls[0] && lvl <= this.lvls.last() )
			this.lvl = lvl;
	}
	
	/**
	 * Reset Amount
	 */
	resetAmount(){
		this.amount = this.amount.map(() => 0);
	}
	
	/**
	 * Add one unit to the queue units
	 * 
	 * @param {int} unit index
	 */
	addUnit(id){
		this.amount[id]++
	}
}