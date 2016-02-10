/**
 * Camp class tests
 */

const armyCampModel= {
	"name": "Army Camp",
	"building": "army-camp",
	"folder": "army-camps",
	"capacity": [0,20,30,35,40,45,50,55,60],
	"lvl": 0, 
	"lvls": [0,1,2,3,4,5,6,7,8]
};

function campClassTests(tests, Camp){
	
	let testCamp = new Camp(armyCampModel);
	testCamp.lvl = 5;
	
	tests
		.when('camp.actualCapacity() == camp.capacity[lvl]')
		.should(testCamp.actualCapacity())
		.equal(testCamp.capacity[5]);
}

export { armyCampModel, campClassTests };