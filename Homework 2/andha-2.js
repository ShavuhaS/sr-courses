function findEqualSums(arr) {
	// arr - Array of integer numbers
	const sum = arr.reduce((s, el) => s + el, 0);
	let leftSum = 0;
	for(let i = 0; i < arr.length; i++) {
		if(leftSum == sum - leftSum - arr[i]) return i;
		leftSum += arr[i];
	}

	return -1;
}

const testCases = [
	[1, 2, 3, 4, 3, 2, 1],
	[1, 100, 50, -51, 1, 1],
	[20, 10, -80, 10, 10, 15, 35],
	[1, 2, 3]
];
testCases.forEach( (arr) => {
	console.log(`findEqualSums([${arr}]) = ${findEqualSums(arr)}`);
});