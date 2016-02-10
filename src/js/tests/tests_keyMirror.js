function keyMirrorTests(tests, keyMirror){
	
	/**
	* Key mirror tests
	*/
	var mirrored = keyMirror(['SOME_ACTION', 'ANOTHER_ACTION']);
	var actionsObject = {
		SOME_ACTION: 'SOME_ACTION',
		ANOTHER_ACTION: 'ANOTHER_ACTION'
	};
	tests
		.when('key mirror')
		.should(mirrored)
		.equal(actionsObject);
}

export default keyMirrorTests;