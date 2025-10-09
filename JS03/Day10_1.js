
console.log(a); // undefined  

// Memory Allocation
// a = undefined
// b = undefined
// addNumber = funCode
// sumResult1 = undefined
// sumResult2 = undefined

// Execution 
// a = 10
// b = 20
// addNumber = new execution context is created
// sumResult1 = value returned
// sumResult2 = value returned

var a = 10;
var b = 20;

function addNumber(num1, num2){
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a, b);
var sumResult2 = addNumber(4, 5);
console.log(sumResult1, sumResult2);



// Whenever we run javascript code, an execution context is generated which means the code will execute in two phases:
    // -> Memory Allocation Phase
    // -> Execution Phase

// When the code executes very first time, that thime the ecexution context created is called Global Execution Context (GEC).



// let, const
// Memory Allocation
// a = <uninitialized> (Temporal dead zone)
// b = <uninitialized> (Temporal dead zone)
// add = <uninitialized> (Temporal dead zone)
// result = <uninitialized> (Temporal dead zone)


// Execution 
// c = 10
// d = 50
// add = funCode
// result = value returned


// console.log(c);
let c = 10
const d = 50


function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}

var result = addNumber(a, b);
console.log(result);
console.log(c);










