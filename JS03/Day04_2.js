// Looping
// for loop
console.log("Post Increament")
for(let i=0; i<10; i++){
    console.log(i);
}

console.log("Post decrement")
for(let i=10; i>=0; i--){
    console.log(i);
}


// while loop
console.log("while loop")
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}



// while loop
console.log("do-while loop")
let j = 0;
do {
    console.log(j);
    j++;
} while(j < 10);


// Conditional Statement

let age = 15;

if(age >= 18){
    console.log("Eligible for vote");
}
else {
    console.log("Not eligible for vote");
}


// kid, young and old

let age1 = 70;
if(age1 < 18){
    console.log("Kid");
}
else if(age1 > 60){
    console.log("old");
}
else {
    console.log("Young");
}


// &&, ||
console.log("Logical &&")
console.log("true && false: ", true && false);
console.log("true && true: ", true && true);
console.log("false && false: ", false && false);
console.log("fasle && true: ", false && true);


console.log("Logical ||")
console.log("true || false: ", true || false);
console.log("true || true: ", true || true);
console.log("false || false: ", false || false);
console.log("fasle || true: ", false || true);

let name1 = "Rohit";
let name2 = "Mohit";
// &&: If first value is true, it will return the first value itself
// If first value is false, it will return second 
let name = name1&&name2;
console.log(name);


let n = name1||name2;
console.log(n);

 
