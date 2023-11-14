function councilHonor(arr, d) {
	// arr - Array of chairmen's honor
	// d - Number (integer, 1 <= d <= 31), day of the month, number of leaders
	const groups = arr.length / d;
	let maxSum = 0;
	for(let start = 0; start < groups; start++) {
		let sum = -Infinity;
		for(let i = start; i < arr.length; i += groups) {
			sum += arr[i];
		}
		maxSum = Math.max(maxSum, sum);
	}

	return maxSum;
}

const testCases = [
	[[1, 2, 3, 4], 2],
	[[1, 5, 6, 3, 4, 2], 3],
	[[1, 1, 0], 1]
];
testCases.forEach( (pair) => {
	let [arr, d] = pair;
	console.log(`councilHonor([${arr}], ${d}) = ${councilHonor(arr, d)}`);
});