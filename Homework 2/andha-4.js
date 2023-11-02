function unpackSausages(boxes) {
	// boxes - 2D array of Strings
	let sausagePackages = [];
	let packageCount = 0;
	for(let box of boxes) {
		for(let package of box) {
			if(package[0] == '[' && package.at(-1) == ']') {
				const sausageType = package[1];
				let isSpoiled = package.length !== 6;
				let sausages = [];
				for(let i = 1; i < package.length - 1; i++) {
					if(package[i] !== sausageType) {
						isSpoiled = true;
						break;
					}
					sausages.push(package[i]);
				}
				if(!isSpoiled) {
					packageCount++;
					if(packageCount % 5) sausagePackages.push(sausages.join(' '));
				}
			}
		}
	}
	return sausagePackages.join(' ');
}

const testCases = [
	[ 
		[ "(-)", "[IIII]", "[))))]" ],
	 	[ "IuI", "[llll]" ],
	 	[ "[@@@@]", "UwU", "[IlII]" ],
	 	[ "IuI", "[))))]", "x" ],
	 	[],
	]
];
testCases.forEach( (boxes, ind) => {
	console.log(`unpackSausages(testCase#${ind+1}) = "${unpackSausages(boxes)}"`);
});