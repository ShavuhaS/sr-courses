function groupAnagrams(arr) {
	// arr - Array of strings
	const strToObj = (str) => {
		// return value - object that has letters as a key and their amount in the string as a value
		let obj = {};
		for(let i = 0; i < str.length; i++) {
			if(str[i] in obj) obj[str[i]]++;
			else obj[str[i]] = 0;
		}
		return obj;
	}
	const areAnagrams = (str1, str2) => {
		let obj1 = strToObj(str1), obj2 = strToObj(str2);
		if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

		for(let key in obj1) {
			if(obj1[key] !== obj2[key]) return false;
		}

		return true;
	};

	let resultArray = [];
	for(let str of arr) {
		let isNewGroup = true;

		for(let group of resultArray) {
			if(areAnagrams(group[0], str)) {
				group.push(str);
				isNewGroup = false;
				break;
			}
		}

		if(isNewGroup) resultArray.push([str]);
	}

	return resultArray;
}

const testCases = [
	["tsar", "rat", "tar", "star", "tars", "cheese"],
	["bruh", "hubr", "lorry", "rylor", "hero"]
];
testCases.forEach( (arr) => {
	console.log(`groupAnagrams([${arr}]) = `);
	console.log(groupAnagrams(arr));
	console.log(" ");
});