function is_prime(num) {
	// num - Number (integer)
	if(num <= 1) return false;
	for(let div = 2; div <= Math.sqrt(num); div++) {
		if(num % div === 0) return false;
	}
	return true;
}

const testCases = [-2, 1, 2, 9, 17];
testCases.forEach( (num) => {
	console.log(`is_prime(${num}) = ${is_prime(num)}`);
});