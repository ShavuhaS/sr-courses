function solveHanoi(disks) {
	// disks - Number, number of disks involved in the puzzle
	// According to the recursive analysis of the problem, it takes a minimum of 2^n - 1 steps to solve 
	return Math.pow(2, disks) - 1;
}

const testCases = [1, 3, 7];
testCases.forEach( (num) => {
	console.log(`solveHanoi(${num}) = ${solveHanoi(num)}`);
});