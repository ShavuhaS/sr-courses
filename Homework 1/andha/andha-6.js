function reverseNum(num) {
	// num - Number (non-negative integer)

	let digits = [] // array of digits of num
	while(num > 0) {
		digits.push(num % 10);
		num = Math.floor(num / 10);
	}

	// Hoare's Quicksort
	const quickSort = (arr) => {
		if(arr.length < 2) return arr;

		let left = [], right = [];
		let pivot = arr[0];
		for(let i = 1; i < arr.length; i++) {
			if(arr[i] >= pivot) left.push(arr[i]);
			else right.push(arr[i]);
		}

		return quickSort(left).concat(pivot, quickSort(right));
	};

	let ans = 0;
	quickSort(digits).forEach((digit) => { // sort the digits
		// add the digit to the end of the answer
		ans *= 10;
		ans += digit;
	});

	return ans;
}

const testCases = [42145, 145263, 123456789];;
testCases.forEach( (num) => {
	console.log(`reverseNum(${num}) = ${reverseNum(num)}`);
});