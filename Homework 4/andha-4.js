class PaginationHelper {
  	arr;
  	pageLimit;
  
	constructor(collection, itemsPerPage) {
    	this.arr = collection;
    	this.pageLimit = itemsPerPage;
	}
	itemCount() {
    	return this.arr.length;    
	}
	pageCount() {
    	return Math.ceil(this.arr.length / this.pageLimit);
	}
	pageItemCount(pageIndex) {
    	let maxPage = this.pageCount() - 1;
    	if(pageIndex < 0 || pageIndex > maxPage) return -1;
    
    	if(pageIndex < maxPage) return this.pageLimit;
    	return (this.arr.length % this.pageLimit) || this.pageLimit;
	}
	pageIndex(itemIndex) {
    	if(itemIndex < 0 || itemIndex >= this.arr.length) return -1;
    
    	return Math.floor(itemIndex / this.pageLimit);
	}
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
const testCases = [
	["pageCount"],
	["itemCount"],
	["pageItemCount", 0],
	["pageItemCount", 1],
	["pageItemCount", 2],
	["pageIndex", 5],
	["pageIndex", 2],
	["pageIndex", 20],
	["pageIndex", -10],
];

testCases.forEach( (test) => {
  let [name, ...args] = test;
  let result = helper[name](...args);
  
  console.log(`helper.${name}(${args.join(', ')}) = ${result}`);
});