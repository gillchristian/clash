	let mockUnitsModel = [
		{"id":0,"unit":"barbarian","name":"Barbarian","folder":"troops/light/barbarian","cost":[0,25,40,60,100,150,200,250],"lvls":[0,1,2,3,4,5,6,7],"lvl": 0,"time": 20,"space": 1,"amount":0},
		{"id":1,"unit":"archer","name":"Archer","folder":"troops/light/archer","cost":[0,50,80,120,160,300,400,500],"lvls":[0,1,2,3,4,5,6,7],"lvl":0,"time":25,"space":1,"amount":0},
		{"id":2,"unit":"goblin","name":"Goblin","folder":"troops/light/goblin","cost":[0,25,40,60,80,100,150],"lvls":[0,1,2,3,4,5,6],"lvl":0,"time":30,"space":1,"amount":0},
		{"id":3,"unit":"giant","name":"Giant","folder":"troops/light/giant","cost":[0,250,750,1250,1750,2250,3000,3500],"lvls":[0,1,2,3,4,5,6,7],"lvl":0,"time":120,"space":5,"amount":0},
		{"id":4,"unit":"wallbreaker","name":"Wall Breaker","folder":"troops/light/wallbreaker","cost":[0,1000,1500,2000,2500,3000,3500],"lvls":[0,1,2,3,4,5,6],"lvl":0,"time":120,"space":2,"amount":0},
		{"id":5,"unit":"balloon","name":"Balloon","folder":"troops/light/balloon","cost":[0,2000,2500,3000,3500,4000,4500],"lvls":[0,1,2,3,4,5,6],"lvl":0,"time":480,"space":5,"amount":0},
		{"id":6,"unit":"wizard","name":"Wizard","folder":"troops/light/wizard","cost":[0,1500,2000,2500,3000,3500,4000],"lvls":[0,1,2,3,4,5,6],"lvl":0,"time":480,"space":4,"amount":0},
		{"id":7,"unit":"healer","name":"Healer","folder":"troops/light/healer","cost":[0,5000,6000,8000,10000],"lvls":[0,1,2,3,4],"lvl":0,"time":900,"space": 14,"amount":0},
		{"id":8,"unit":"dragon","name":"Dragon","folder":"troops/light/dragon","cost":[0,25000,29000,33000,37000, 42000],"lvls":[0,1,2,3,4,5],"lvl":0,"time":1800,"space": 20,"amount":0},
		{"id":9,"unit":"pekka","name":"P.E.K.K.A.","folder":"troops/light/pekka","cost":[0,28000,32000,36000,40000,45000],"lvls":[0,1,2,3,4,5],"lvl":0,"time":2700,"space": 25,"amount":0}
	];

	let mockBarrack =   {
		"name": "Barrack",
		"building": "barrack",
		"folder": "barracks",
		"capacity": [0,20,25,30,35,40,45,50,55,60,75],
		"lvls": [0,1,2,3,4,5,6,7,8,9,10],
		"lvl": 0,
		"amount" : [0,0,0,0,0,0,0,0,0,0]
	};

/**
 * Tests for UnitType 
 */
function unitTypeTests(tests, UnitType){
	
	let mockTrainersModel = [mockBarrack, mockBarrack, mockBarrack, mockBarrack];
	
	let unitTypeMock = new UnitType(mockUnitsModel, 'Ligth troops', mockTrainersModel, 'Barracks');
	
	tests
		.when('testing constructor creating trainers')
		.should(mockTrainersModel.length)
		.equal(unitTypeMock.trainers.length);
		
	tests
		.when('testing constructor creating units')
		.should(mockUnitsModel.length)
		.equal(unitTypeMock.units.length);
		
	tests
		.when('constructor creating trainers (testing by checking the names of the created trainers)')
		.should(['Barrack','Barrack','Barrack','Barrack'])
		.equal( unitTypeMock.trainers.map(trainer => trainer.name) );
	
	
	let unitNames = mockUnitsModel.map( unit => unit.name ); // array with unit names
	tests
		.when('constructor creating units (testing by checking the names of the created units)')
		.should(unitNames)
		.equal( unitTypeMock.units.map(unit => unit.name) );
	
	let unitSpaces = mockUnitsModel.map( unit => unit.space ); // array with unit spaces
	tests
		.when('constructor generated trainers arrays of unit spaces')
		.should( unitSpaces )
		.equal( unitTypeMock.trainers[0].unitSpaces );
	
	for (let unit of unitTypeMock.units){
		unit.amount = 1;
		unit.setLvl(1);
	}
	
	tests
		.when('UnitType.UspaceUsed() should return the space used by all the queued units')
		.should( unitTypeMock.spaceUsed() )
		.equal( unitSpaces.reduce( (a, b) => a + b ) );
	
	// array with unit costs at lvl 1 (set to all units)
	let unitsCost = mockUnitsModel.map( unit => unit.cost[1] );
	tests
		.when('UnitType.cost() should return the cost of all queued units')
		.should( unitTypeMock.cost() )
		.equal( unitsCost.reduce( (a, b) => a + b ) );		
	
	// array with units training time
	let unitsTime = mockUnitsModel.map( unit => unit.time );
	tests
		.when('UnitType.cost() should return the time to produce all queued units')
		.should( unitTypeMock.time() )
		.equal( unitsTime.reduce( (a, b) => a + b ) );
	
	// adding a barbarian, a pekka, a dragon and a baloon to the trainer 1
	unitTypeMock.trainers[1].addUnit(0);
	unitTypeMock.trainers[1].addUnit(9);
	unitTypeMock.trainers[1].addUnit(8);
	unitTypeMock.trainers[1].addUnit(5);
		
	tests
		.when('trainer queue (amount) should reflect the added units')
		.should( unitTypeMock.trainers[1].amount )
		.equal( [1,0,0,0,0,1,0,0,1,1] );
		
	unitTypeMock.resetTrainersQueue();
	tests
		.when('UnitType.resetTrainersQueue() should reset the trainers queue to [...0]')
		.should( unitTypeMock.trainers[1].amount )
		.equal( [0,0,0,0,0,0,0,0,0,0] );
	
	// --- Setting the lvls of trainers ---
	unitTypeMock.trainers[0].setLvl(2);
	unitTypeMock.trainers[1].setLvl(5);
	unitTypeMock.trainers[2].setLvl(9);
	unitTypeMock.trainers[3].setLvl(10);
	
	unitTypeMock.trainers[0].amount = [5,5,0,0,0,0,0,0,0,0]; // 15 spaces left, only barbarians & archers
	unitTypeMock.trainers[1].amount = [0,0,0,7,2,0,0,0,0,0]; // one space left
	unitTypeMock.trainers[2].amount = [0,0,0,0,0,0,0,0,2,0]; // 20 spaces left, no pekkas
	unitTypeMock.trainers[3].amount = [0,0,0,0,0,0,0,0,0,3]; // full, can produce all
	
	tests
		.when('available trainer for pekka')
		.should( unitTypeMock.findAvailableTrainers(unitTypeMock.units[9]) )
		.equal([]);
		
	tests
		.when('available trainer for archer')
		.should( unitTypeMock.findAvailableTrainers(unitTypeMock.units[1]) )
		.equal([0,1,2]);
	
	tests
		.when('available trainer for dragon')
		.should( unitTypeMock.findAvailableTrainers(unitTypeMock.units[7]) )
		.equal([2]);
		
	tests
		.when('available trainer for wall-braker')
		.should( unitTypeMock.findAvailableTrainers(unitTypeMock.units[4]) )
		.equal([2]);
		
	tests
		.when('available trainer for healer')
		.should( unitTypeMock.findAvailableTrainers(unitTypeMock.units[6]) )
		.equal([2]);
	
	unitTypeMock.trainers[0].amount = [5,5,0,0,0,0,0,0,0,0]; // 15 spaces left, only barbarians & archers
	unitTypeMock.trainers[1].amount = [0,0,0,7,2,0,0,0,0,0]; // one space left
	unitTypeMock.trainers[2].amount = [0,0,0,0,0,0,0,0,2,0]; // 20 spaces left, no pekkas
	unitTypeMock.trainers[3].amount = [0,0,0,0,0,0,0,0,0,2]; // 25 spaces left, can produce all
	
	let availableTrainers = unitTypeMock.findAvailableTrainers(unitTypeMock.units[8])
	tests
		.when('available trainer for dragon')
		.should( availableTrainers )
		.equal([2, 3]);
	
	let bestTrainer = unitTypeMock.findBestTrainer( unitTypeMock.units[8], availableTrainers );
		
	tests
		.when('best trainer --- lvl')
		.should( bestTrainer.lvl )
		.equal(unitTypeMock.trainers[2].lvl);
	tests
		.when('best trainer --- amount')
		.should( bestTrainer.amount )
		.equal(unitTypeMock.trainers[2].amount);
	
	unitTypeMock.assingUnit(unitTypeMock.units[8]);
	tests
		.when('assing dragon, should be added to the 3rd trainer')
		.should(unitTypeMock.trainers[2].amount)
		.equal([0,0,0,0,0,0,0,0,3,0]);
		
	unitTypeMock.assingUnit(unitTypeMock.units[8]);
	tests
		.when('assing another dragon, should be added to the 4th trainer')
		.should(unitTypeMock.trainers[3].amount)
		.equal([0,0,0,0,0,0,0,0,1,2]);
	/**
	* More find available trainers / best trainers tests
	*/
	unitTypeMock.trainers[0].amount = [0,0,0,0,0,0,0,0,0,1]; // 15 spaces left, only barbarians & archers
	unitTypeMock.trainers[1].amount = [0,0,0,0,0,0,0,0,1,0]; // one space left
	unitTypeMock.trainers[2].amount = [0,0,0,0,0,0,0,1,0,0]; // 20 spaces left, no pekkas
	unitTypeMock.trainers[3].amount = [0,0,0,0,0,0,0,0,0,0]; // 25 spaces left, can produce all
	
	// --- Setting the lvls of trainers ---
	for (let trainer of unitTypeMock.trainers)
		trainer.setLvl(10);
	
	availableTrainers = unitTypeMock.findAvailableTrainers( unitTypeMock.units[6] );
	tests
		.when('available trainer for wizard, after adding pekka, drag and healer')
		.should( availableTrainers )
		.equal([0,1,2,3]);
		
	bestTrainer = unitTypeMock.findBestTrainer(unitTypeMock.units[6],[0,1,2,3]);
	tests
		.when('best trainer for wizard, after adding pekka, drag and healer')
		.should( bestTrainer.amount )
		.equal([0,0,0,0,0,0,0,0,0,0]);
	tests
		.when('best trainer for wizard, after adding pekka, drag and healer')
		.should( bestTrainer.amount )
		.not([0,0,0,0,0,0,0,0,0,1]);
	tests
		.when('best trainer for wizard, after adding pekka, drag and healer')
		.should( bestTrainer.amount )
		.not([0,0,0,0,0,0,0,0,1,0]);
	tests
		.when('best trainer for wizard, after adding pekka, drag and healer')
		.should( bestTrainer.amount )
		.not([0,0,0,0,0,0,0,1,0,0]);
	
	unitTypeMock.sortUnitsByTime();
	tests
		.when('sorting by time --- DESC')
		.should( unitTypeMock.units.map(unit => unit.time) )
		.equal( [2700,1800,900,480,480,120,120,30,25,20] )
	
	unitTypeMock.sortUnitsById();
	tests
		.when('sorting by id --- ASC')
		.should( unitTypeMock.units.map(unit => unit.id) )
		.equal( [0,1,2,3,4,5,6,7,8,9] )
	
	/**
	* Creating a new UnitType mock and testing the loop from scratch
	*/
	let unitTypeLoopTest = new UnitType( mockUnitsModel, 'Ligth troops', mockTrainersModel, 'Barracks' );
	
	/**
	* Setting all trainers to lvl 10
	*/
	for (let trainer of unitTypeLoopTest.trainers)
		trainer.setLvl(10);
		
	/**
	* Setting all units to lvl 1 and amount 1
	*/
	for (let unit of unitTypeLoopTest.units) {
		unit.setLvl(1);
		unit.amount = 1;
	}
	
	tests
		.when('checking units lvls')
		.should(unitTypeLoopTest.units.map(unit => unit.lvl))
		.equal([1,1,1,1,1,1,1,1,1,1]);
		
	tests
		.when('checking units amount')
		.should(unitTypeLoopTest.units.map(unit => unit.amount))
		.equal([1,1,1,1,1,1,1,1,1,1]);
		
	tests
		.when('checking trainers lvl')
		.should(unitTypeLoopTest.trainers.map(trainer => trainer.lvl))
		.equal([10,10,10,10]);
	
	// --- run the assigment loop ---
	unitTypeLoopTest.assingmentLoop();
	
	tests
		.when('units to be sorted by id after the loop')
		.should( unitTypeLoopTest.units.map(unit => unit.id) )
		.equal( [0,1,2,3,4,5,6,7,8,9] )
	
	tests
		.when('same amount of units and assigned units in trainers')
		.should( unitTypeLoopTest.units.map(unit => unit.amount * unit.space ).reduce( (a,b)=> a + b ) )
		.equal( unitTypeLoopTest.trainers.map(trainer => trainer.queuedUnits() ).reduce( (a,b)=> a + b ) )
		
	/**
	* Testing the trainers amount of units after the loop
	*/
	
	/*
	*	--- Should be ----------------
	*	| #0   | #1   | #2   | #3   |
	*	------------------------------
	*	0|      |   20 |      |      |
	*	1|      |   25 |      |      |
	*	2|      |   30 |      |      |
	*	3|      |  120 |      |      |
	*	4|  120 |      |      |      |
	*	5|  480 |      |      |      |
	*	6|  480 |      |      |      |
	*	7|      |  900 |      |      |
	*	8|      |      | 1800 |      |
	*	9|      |      |      | 2700 |
	*	Total ------------------------
	*	 | 1080 | 1095 | 1800 | 2700 | 
	*/	
	tests
		.when('assingment loop --- resulting amounts #0')
		.should(unitTypeLoopTest.trainers[0].amount)
		.equal([0,0,0,0,0,0,0,0,0,1]);
	tests
		.when('assingment loop --- resulting amounts #1')
		.should(unitTypeLoopTest.trainers[1].amount)
		.equal([0,0,0,0,0,0,0,0,1,0]);
	tests
		.when('assingment loop --- resulting amounts #2')
		.should(unitTypeLoopTest.trainers[2].amount)
		.equal([1,1,1,1,0,0,0,1,0,0]);
	tests
		.when('assingment loop --- resulting amounts #3')
		.should(unitTypeLoopTest.trainers[3].amount)
		.equal([0,0,0,0,1,1,1,0,0,0]);
	
	/**
	* Testing queue time after the loop
	*/	
	tests
		.when('assingment loop --- resulting time #0')
		.should( unitTypeLoopTest.trainers[0].time() )
		.equal(2700);
	tests
		.when('assingment loop --- resulting time #1')
		.should( unitTypeLoopTest.trainers[1].time() )
		.equal(1800);
	tests
		.when('assingment loop --- resulting time #2')
		.should( unitTypeLoopTest.trainers[2].time() )
		.equal(1095);
	tests
		.when('assingment loop --- resulting time #3')
		.should(unitTypeLoopTest.trainers[3].time() )
		.equal(1080);
}

export default unitTypeTests;