function islandPerimeter(arr) {
	// arr - 2D Array representing the map, on which X means 1x1 piece (ONE PIECE IS REAL!!!) of land and O means 1x1 peace of water
	let perimeter = 0;
	let m = arr.length, n = arr[0].length;
	for(let i = 0; i < m; i++) {
		for(let j = 0; j < n; j++) {
			if(arr[i][j] === 'X') {
				const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
				for(let dir of dirs) {
					let row = i + dir[0], col = j + dir[1];
					if(row < 0 || col < 0 || row >= m || col >= n || arr[row][col] == 'O') perimeter++;
				}
			}
		}
	}
	return perimeter;
}

const testCases = [
	[
		'XOOXO',
		'XOOXO',
		'OOOXO',
		'XXOXO',
		'OXOOO'
	],
	[
		'XOOO',
		'XOXO',
		'XOXO',
		'OOXX',
		'OOOO'
	]
];
testCases.forEach( (arr, ind) => {
	console.log(`islandPerimeter(testCase#${ind+1}) = ${islandPerimeter(arr)}`);
});