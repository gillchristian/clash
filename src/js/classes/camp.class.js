/**
 * Models the camps
 */
export default class Camp {
	
	/**
	 * @param {object} model
	 */
	constructor(model){
		this.capacity  = model.capacity;
		this.lvls      = model.lvls;
		this.lvl       = model.lvl;
		this.folder    = model.folder;
		this.building  = model.building;
		this.name      = model.name;
	}
	
	/**
	 * Actual capacity
	 * 
	 * @return {int}
	 */
	actualCapacity(){
		return this.capacity[this.lvl];
	}
}