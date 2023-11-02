function findNb(m) {
	// m - Number (integer), total volume
	if(m < 1) return -1;

	let blocks = 0;
	let volume = 0;
	while(volume < m) {
		blocks++;
		volume += Math.pow(blocks, 3);
	}
	return volume === m ? blocks : -1;
}

const testCases = [-2, 1, 9, 1071225, 91716553919377];
testCases.forEach( (num) => {
	console.log(`findNb(${num}) = ${findNb(num)}`);
});