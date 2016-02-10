/**
 * Testing for Units
 * 
 * using unitMock
 */
function unitClassTests(tests, unitMock){
	tests
		.when('Unit.actualCost() should return the actual cost')
		.should( unitMock.actualCost() )
		.equal(1500) // cost at lvl 2, set after creation
	
	
	tests
		.when('Unit.totalCost() should return the total cost')
		.should( unitMock.totalCost() )
		.equal( 10 * 1500);
		
	tests
		.when('Unit.spaceUsed() should return the space used')
		.should( unitMock.spaceUsed() )
		.equal( 10 * 2 );
		
	tests
		.when('Unit.totalTime() should return the total time to finish the units')
		.should( unitMock.totalTime() )
		.equal( 10 * 120 );
	
	
	unitMock.setLvl(11); // this should not work, lvl should still be 2 (set previously)
	
	tests
		.when('Unit.setLvl() should not change the lvl for one out of range' )
		.should(unitMock.lvl)
		.not(11);
		
	tests
		.when('Unit.setLvl() should not change the lvl for one out of range' )
		.should(unitMock.lvl)
		.equal(2);
}

export default unitClassTests;