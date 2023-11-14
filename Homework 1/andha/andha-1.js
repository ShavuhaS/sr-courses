function fancySum(n) {
	// n - Number (integer)
	// returns the sum of all numbers that are either multiples of 3 or 5 below the given number n
	let sum = 0;

	for(let i = 1; i < n; i++) {
		if(i % 3 === 0 || i % 5 === 0) sum += i;
	}

	return sum;
}

const testCases = [-234, 0, 10, 97, 123];
testCases.forEach( (num) => {
	console.log(`fancySum(${num}) = ${fancySum(num)}`);
});