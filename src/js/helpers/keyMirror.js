/**
 * Key mirror
 * 
 * @param { array[string] }
 * @return { object } an object with values mirroring the keys
 */
function keyMirror(array) {
	let obj = {};
	array.map(value => { obj[value] = value; });
	return obj;
}

export default keyMirror;