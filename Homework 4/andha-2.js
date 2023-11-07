function Vector(components) {
  this.arr = components;
  
  this.add = function(other) {
    if(this.arr.length !== other.arr.length) throw new Error("Le bruh momento de la add");
    
    let sum = [];
    for(let i = 0; i < this.arr.length; i++) {
      sum.push(this.arr[i] + other.arr[i]);
    }
    
    return new Vector(sum);
  }
  
  this.subtract = function(other) {
    if(this.arr.length !== other.arr.length) throw new Error("Le bruh momento de la subtract");
    
    let subtracted = [];
    for(let i = 0; i < this.arr.length; i++) {
      subtracted.push(this.arr[i] - other.arr[i]);
    }
    
    return new Vector(subtracted);
  }
  
  this.dot = function(other) {
    if(this.arr.length !== other.arr.length) throw new Error("Le bruh momento de la dot");
    
    let product = 0;
    for(let i = 0; i < this.arr.length; i++) {
      product += this.arr[i] * other.arr[i];
    }
    
    return product;
  }
  
  this.norm = function() {
    let res = 0;
    for(let num of this.arr) {
      res += num * num;
    }
    return Math.sqrt(res);
  }
  
  this.toString = function() {
    return '(' + this.arr.join(',') + ')';
  }
  
  this.equals = function(other) {
    if(this.arr.length !== other.arr.length) return false;
    
    for(let i = 0; i < this.arr.length; i++) {
      if(this.arr[i] !== other.arr[i]) return false;
    }
    
    return true;
  }
};

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);

const testCases = [
  ["add", a, b],
  ["subtract", a, b],
  ["dot", a, b],
  ["norm", a],
  ["add", a, c],
];

testCases.forEach( (args) => {
  let [name, op1, op2] = args;
  let result = op1[name](op2);
  
  console.log(`${name}(${op1}${op2 ? `, ${op2}` : ''}) = ${result}`);
});

