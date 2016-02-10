/**
 * Staging building tests
 */
function stagingBuildingTests(tests, model, StagingBuilding ,Unit){
  let unitModel = {
      "id": 4,
      "unit": "wallbreaker",
      "name": "Wall Breaker",
      "folder": "troops/light/wallbreaker",
      "cost": [0,1000,1500,2000,2500,3000,3500],
      "lvls": [0,1,2,3,4,5,6],
      "lvl": 0,
      "time": 120,
      "space": 2,
      "amount": 0
  };
  
  let unitMock = new Unit(unitModel);
  let unitMock2 = new Unit(unitModel);
    
  const stagingModel = [model, model, model];
  const stagingName = 'stagin buildings';
  
  let stagingTest = new StagingBuilding(stagingModel, stagingName);
  
  tests
    .when('staging constructor creates new camps')
    .should(stagingTest.buildings.length)
    .equal(3);
  
  stagingTest.buildings[0].lvl = 1; // capacity 20
  stagingTest.buildings[1].lvl = 2; // capacity 30
  stagingTest.buildings[2].lvl = 8  // capacity 60 --- total 110
  
  tests
    .when('StagingBuilding.maxAmount() should equal capacity of its camps')
    .should( stagingTest.maxAmount() )
    .equal(110) // <-- manualy set capacity by chaging the camps lvls
  
  unitMock.setLvl(2);
  unitMock.amount = 10; // takes 20 capacity spaces
  
  unitMock2.setLvl(2);
  unitMock2.amount = 10; // takes 20 capacity spaces
  
  tests
    .when('limitExeeded should be false when trying to alocate less units than the capacity')
    .should( stagingTest.limitExeeded([unitMock, unitMock2]) ) // 40 spaces
    .beFalse();
    
  let unitsMockArray = [unitMock, unitMock2];
  tests
    .when('limitExeeded should be false when trying to alocate less units than the capacity')
    .should( stagingTest.limitExeeded([...unitsMockArray, ...unitsMockArray, ...unitsMockArray]) ) // 40 x 3 = 120 spaces
  	.beTrue();

    return { unitsMockArray, unitMock, unitMock2 }
}

export default stagingBuildingTests;