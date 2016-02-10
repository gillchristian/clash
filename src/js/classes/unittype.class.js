import Unit from './unit.class';
import Trainer from './trainer.class';

export default class UnitType {
	/**
	 * @param {object} unit model
	 * @param {string} unit name
	 * @param {object} trainers models
	 * @param {string} trainers name
	 */
	constructor(unitsModel, unitsName, trainersModel, trainersName){
		this.names = {
			units: unitsName,
			trainers: trainersName
		}
		this.initUnits(unitsModel);
		this.initTrainers(trainersModel);
	}
	
	/**
	 * Initializes the units
	 */
	initUnits(unitsModel){
		this.units = [];
		for (let unitModel of unitsModel)
			this.units.push( new Unit(unitModel) )
	}
	
	/**
	 * Initializes the trainers
	 */
	initTrainers(trainersModel){
		this.trainers = [];
		for (let trainerModel of trainersModel)
			this.trainers.push( new Trainer(trainerModel) );
		for (let trainer of this.trainers){
			trainer.unitSpaces = this.units.map( unit => unit.space );
			trainer.unitsTime = this.units.map( unit => unit.time );			
		}
	}
	
	/**
	 * Space taken by units
	 * 
	 * @return {int} space
	 */
	spaceUsed(){
		return this.units
							.map( unit => unit.spaceUsed() )
							.reduce( (a, b) => a + b )
	}
	
	/**
	 * Total cost of units
	 * 
	 * @return {int} cost
	 */
	cost(){
		return this.units
							.map( unit => unit.totalCost() )
							.reduce( (a, b) => a + b )
	}
	
	/**
	 * Total time to produce units
	 * 
	 * @return {int} units
	 */
	time(){
		return this.units
							.map( unit => unit.totalTime() )
							.reduce( (a, b) => a + b )
	}
	
	/**
	 * Troop assingment
	 * loops through all the units and assings them to the barracks
	 */
	assingmentLoop(){
		this.resetTrainersQueue();
		this.sortUnitsByTime();
		// --- loop through each unit --- 
		for (let unit of this.units)
			if (unit.lvl > 0 && unit.amount > 0)
				// --- assing each unit ---
				for (let i = 0; i < unit.amount; i++){
					this.assingUnit(unit);
				}
		this.sortUnitsById();
	}
	
	/**
	 * Assings a unit to a trainer
	 * 
	 * @param {Unit} unit to add
	 */
	assingUnit(unit){
		let availableTrainers = this.findAvailableTrainers(unit);
		if (availableTrainers.length) {
			let bestTrainer = this.findBestTrainer(unit, availableTrainers);
			bestTrainer.addUnit(unit.id);
		}
	}
	
	/**
	 * Find the best building to assing a unit
	 * 
	 * @param {Unit} unit to add
	 * @param {array[int]} available trainers indexes
	 * @retunr {Trainer} best trainer
	 */
	findBestTrainer(unit, trainers){
		// --- find the trainer with lower time queue ---
		let bestTrainers = trainers.map( i => { return {time: this.trainers[i].time() + unit.time, i: i } } );
		bestTrainers.sort((a, b)=>{
			if (a.time > b.time) return 1
			if (a.time < b.time) return -1
			else 0;
		});
		return this.trainers[ bestTrainers[0].i ];
	}
	
	/**
	 * Find the trainers that can produce a unit
	 * 
	 * @param {Unit} unit to add
	 * @retunr {array[Trainer]} trainers
	 */
	findAvailableTrainers(unit){
		let availableTrainers = [];
		this.trainers.map(
			(trainer, i) => {
				if ( trainer.hasSpaceFor(unit.id) && trainer.canTrain(unit.id) )
					availableTrainers.push(i)
			}
		);
		return availableTrainers;
	}
	
	/**
	 * Resets the buildings queues and amounts
	 */
	resetTrainersQueue(){
		for(let trainer of this.trainers)
			trainer.resetAmount();
	}
	
	/**
	 * Sort (DESC) units by time
	 */
	sortUnitsByTime(){
		this.units.sort( (a,b) => {
			if (a.time < b.time)
				return 1;
			if (a.time > b.time)
				return -1;
		});
	}

	/**
	 * Sort (ASC) units by id
	 */
	sortUnitsById(){
		this.units.sort( (a,b) => {
			if (a.id < b.id)
				return -1;
			if (a.id > b.id)
				return 1;
		});
	}
}