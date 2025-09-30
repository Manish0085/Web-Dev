// Number
let a = 10;
let b = 345.6821;
console.log(b)
let c = b.toFixed(2);
console.log(b)
console.log(b.toFixed(2));

// toFixed(num) always returns a string and doesn't change the existing variable
console.log(b.toPrecision(6));

let num1 = new Number(5);
let num2 = new Number(5);
console.log(num1);
console.log(typeof num1);
console.log(num1 == num2);
console.log("Boolean({}): ",Boolean({}))
console.log("Boolean([]): ",Boolean([]))
console.log("Boolean(new Number(0)): ",Boolean(new Number(10)));
console.log("Boolean(new Number(10)): ",Boolean(new Number(10)))
console.log("Boolean(null): ",Boolean(null))

// Non Primitive: compares on the bases of Reference
// Primitive: copy by value 

let x = 10;
let y = 2;
console.log(x == y)