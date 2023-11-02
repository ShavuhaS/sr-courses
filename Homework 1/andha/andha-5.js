function highAndLow(s) {
	// s - String, string of numbers separated by spaces
	const arr = s.split(' ').map((numStr) => +numStr)
	let max = arr[0];
	let min = arr[0];

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > max) max = arr[i];
		if(arr[i] < min) min = arr[i];
	}

	return max + ' ' + min; // "max min"
}

const testCases = ["1 2 3 4 5", "1 2 -3 4 5", "1 9 3 4 -5"];;
testCases.forEach( (str) => {
	console.log(`highAndLow(${str}) = "${highAndLow(str)}"`);
});