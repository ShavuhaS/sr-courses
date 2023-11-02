function VigenèreCipher(key, abc) {
  	this.key = key;
  	this.alphabet = abc;
  
  	this.encode = function (str) {
    	let result = "";
    
    	for(let i = 0; i < str.length; i++) {
      	let abcInd = this.alphabet.indexOf(str[i]);
      	if(abcInd === -1) {
        		result += str[i];
        		continue;
      	}
      	let shift = this.alphabet.indexOf(this.key[i % this.key.length]);
      	result += this.alphabet[(abcInd + shift) % this.alphabet.length];
    	}
    
    	return result;
  	};
  	this.decode = function (str) {
      let result = "";
    
    	for(let i = 0; i < str.length; i++) {
      	let abcInd = this.alphabet.indexOf(str[i]);
      	if(abcInd === -1) {
        		result += str[i];
        		continue;
      	}
      	let shift = this.alphabet.indexOf(this.key[i % this.key.length]);
      	let newAbcInd = abcInd - shift < 0 ? abcInd - shift + this.alphabet.length : abcInd - shift;
      	result += this.alphabet[newAbcInd];
    	}
    
    	return result;
  	};
}


const obj = new VigenèreCipher("password", "abcdefghijklmnopqrstuvwxyz");
const testCases = [
	["codewars", 'e'],
	["rovwsoiv", 'd'],
	["waffles", 'e'],
	["laxxhsj", 'd'],
	["CODEWARS", 'e'],
	["CODEWARS", 'd'],
];
testCases.forEach( (pair) => {
	let [str, mode] = pair;
	if(mode === 'e') {
		console.log(`obj.encode(${str}) = ${obj.encode(str)}`);
	} else {
		console.log(`obj.decode(${str}) = ${obj.decode(str)}`);
	}
});