// frontend

// In JavaScript, function is created using function keyword...
// And it is craeted to preform a specific task and we don't have to write the code again and again
function greeting(){
    console.log("I am learnig JavaScript to upgrade my skills");
}


function addNumber(num1, num2, num3=0, num4=0){
    const sum = num1 + num2 + num3 + num4;
    console.log(`sum is ${sum}`);
}

greeting();
addNumber(4, 9);
addNumber(56, 53);
addNumber(4, 885, 8);
addNumber(4, 78, 999, 4);
addNumber(1, 89, 52, 3, 78, 5, 74, 23, 30);


// rest operator: it will create an array of the element you pass as argument
function add(...num){
    console.log(num);
    let sum = 0.;
    for (const n of num) {
        sum += n;
    }
    console.log(sum);
}

add(56, 53);
add(4, 885, 8);
add(4, 78, 999, 4);
add(1, 89, 52, 3, 78, 5, 74, 23, 30);


const arr1 = [10, 23, 30, 50, 75, 95];
const arr2 = [90, 85, 45, 62, 63, 7];

// rest operator
const [first, second] = arr1;
console.log("first: ", first, "\nSecond: ", second);

console.log("Use of rest operator")
const [n1, n2, ...n3] = arr1;
console.log("n1: ", n1, "\nn2: ", n2, "\nn3: ", n3);

// sprad operator
console.log("Use of sprad operator")
console.log(...arr1,...arr2);



// function as an expression
console.log("\nCreating function as an expression and storing it in a variable: ");
const sum = function(num1, num2){
    return num1+num2;
}

//when we create a function as an expression then we cannot call it just before declearing it,
// we can only call it just after its defination and decleration 
console.log(sum);
console.log(sum(4, 5));



// arrow funstion

console.log("\narror function: ")
const substraction = (num1, num2) => {
    return Math.abs(num1 - num2);
}


// if we have single parameter, no need of ().
const square = num => num*num; 
console.log(square(substraction(5, 9)));

const fun1 = () => {
    user = {
        name: "Manish",
        age: 20,
        emailId: "kumar@gmail.com"
    }

    return user;
}

console.log(fun1);
console.log(fun1());

const fun2 = () => {
    return {
        name: "Manish",
        age: 20,
        emailId: "kumar@gmail.com"
    }

}

console.log(fun2);
console.log(fun2());

const fun3 = () => ( {
        name: "Manish",
        age: 20,
        emailId: "kumar@gmail.com"
    }
)

console.log(fun3);
console.log(fun3());



// IIFE
console.log("\nImmediately invoked function: ");
(function fun4(){
    console.log("This function is invoked immediately");
})();

(() => {
    console.log("this is also immediately invoked");
})();


