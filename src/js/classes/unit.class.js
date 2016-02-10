/**
 * Models a single unit
 */
export default class Unit {
	/**
	 * @param {object} model
	 */
	constructor(model){
		this.id        = model.id;
		this.unit      = model.unit;
		this.folder    = model.folder;
		this.name      = model.name;
		this.cost      = model.cost;
		this.lvls      = model.lvls;
		this.lvl       = model.lvl;
		this.time      = model.time;
		this.space     = model.space;
		this.amount    = model.amount;
	}
	
	/**
	 * Gets the actual costof a single unit
	 * 
	 * @return {int} cost
	 */
	actualCost(){
		return this.cost[this.lvl]
	}
	
	/**
	 * Gets the total cost
	 * 
	 * @return {int} cost
	 */
	totalCost(){
		return this.actualCost() * this.amount
	}
	
	/**
	 * Space used by the units
	 * 
	 */
	spaceUsed(){
		return this.space * this.amount
	}
	
	/**
	 * Time to produce all the units
	 */
	totalTime(){
		return this.time * this.amount
	}
	
	/**
	 * Set lvl of the unit
	 * 
	 * @param {int} lvl
	 */
	setLvl(lvl){
		if ( lvl >= this.lvls[0] && lvl <= this.lvls.last() )
			this.lvl = lvl;
	}
}