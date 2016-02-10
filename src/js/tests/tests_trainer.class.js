/**
 * Trainer building test
 */
function trainerClassTests(tests, unitsMockArray, Trainer){
	
	let trainerTest = new Trainer({
		"name": "Dark Barrack",
		"building": "dark-barrack",
		"folder": "dark-barracks",
		"capacity": [0,40,50,60,70,80,90],
		"lvls": [0,1,2,3,4,5,6],
		"lvl": 0,
		"amount" : [0,0,0,0,0,0]
	});
	
	trainerTest.unitSpaces = [2, 2]; // setting spaces manualy from the unitMockArray units
	trainerTest.amount = [10,10]; // setting amount of queue manualy
	trainerTest.setLvl(5);
	
	tests
		.when('has space for a unit, when amount queued is less than capacity')
		.should(trainerTest.hasSpaceFor(1))
		.beTrue();
	
	trainerTest.amount = [20,20]; // setting amount of queue manualy
	
	tests
		.when('has space for a unit, when amount queued is the same than capacity')
		.should(trainerTest.hasSpaceFor(1))
		.beFalse();
	
	// --- actual lvl set to 5, should produce units lower than that
	tests
		.when('Trainer.canTrain(), actual lvl set to 5, should produce units lower than that')
		.should( trainerTest.canTrain(5) )
		.beFalse();
		
	tests
		.when('Trainer.canTrain(), actual lvl set to 5, should produce units lower than that')
		.should( trainerTest.canTrain(4) )
		.beTrue();
		
	tests
		.when('Trainer.actualCapacity()')
		.should( trainerTest.actualCapacity() )
		.equal(80); // capacity for this lvl
		
	tests
		.when('Trainer.queuedUnits(), amount of the queued units')
		.should( trainerTest.queuedUnits() )
		.equal(80) // 40 * 2
		
	tests
		.when('Trainer.unitsCost(), cost of the queued units')
		.should( trainerTest.unitsCost(unitsMockArray) )
		.equal(40 * 1500) // 40 x 1500 (wallbracker at lvl 2, the mocked unit)
	
	trainerTest.setLvl(11); // this should not work, lvl should still be five (set previously)
	
	tests
		.when('Trainer.setLvl() should not change the lvl for one out of range' )
		.should(trainerTest.lvl)
		.not(11);
		
	tests
		.when('Trainer.setLvl() should not change the lvl for one out of range' )
		.should(trainerTest.lvl)
		.equal(5);
		
	// --- reseting amount for the test --
	trainerTest.resetAmount();
	
	tests
		.when('Trinaer.resetAmount() should reset the amount to 0 for each unit')
		.should(trainerTest.amount)
		.equal([0,0]);
		
		
	// --- adding a unit should increase the amount --- 
	trainerTest.addUnit(1);
	
	tests
		.when('Trinaer.resetAmount() should reset the amount to 0 for each unit')
		.should(trainerTest.amount)
		.equal([0,1]);
		
	trainerTest.addUnit(0);
	trainerTest.addUnit(1);
	
	tests
		.when('Trinaer.resetAmount() should reset the amount to 0 for each unit')
		.should(trainerTest.amount)
		.equal([1,2]);
}

export default trainerClassTests;