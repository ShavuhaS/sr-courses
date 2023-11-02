function getRootProperty(obj, num) {
	// obj - Object of likely nested objects, where the final element is an array containing positive integers
	// num - Number (Integer)
	const hasEl = (obj, el) => {
		// function recursively checks if the *obj* has an array with an element *el*
		// return value - Boolean
		if(Array.isArray(obj) && obj.includes(el)) return true;

		for(let key in obj) {
			if(hasEl(obj[key], num)) return true;
		}

		return false;
	}

	for(let key in obj) {
		if(hasEl(obj[key], num)) return key;
	}

	return null;
}

const obj1 = {
	"one": {
		"nest1": {
			"val1": [9, 34, 92, 100]
		}
	},
	"2f7": {
		"n1": [10, 92, 53, 71],
		"n2": [82, 34, 6, 19]
	}
}
const obj2 = {
	"r1n": {
		"mkg": {
			"zma": [21, 45, 66, 111],
			"mii": {
				"ltf": [2, 5, 3, 9, 21]
			},
			"fv": [1, 3, 6, 9]
		},
		"rmk": {
			"amr": [50, 50, 100, 150, 250]
		}
	},
	"fik": {
		"er": [592, 92, 32, 13],
		"gp": [12, 34, 116, 29]
	}
}
const testCases = [
	[obj1, 9],
	[obj2, 250],
	[obj2, 116],
	[obj2, 111],
	[obj2, 999],
];
testCases.forEach( (pair, ind) => {
	let [obj, num] = pair;
	console.log(`getRootProperty(TestCase#${ind+1}) = ${getRootProperty(obj, num)}`);
});