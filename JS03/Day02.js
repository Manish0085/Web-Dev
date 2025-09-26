// // Defining Variable


// let name = "Manish";
// let age = 21;

// age = 30;
// console.log("Name is :", name, "\nAge is:", age);

// const account = 1234

// // account = 2135;

// console.log("account: ", account);



var a = 10;
a = 20;

console.log("a: ", a);

// old ways

var b = 50;
if(true){
    var a = 90;
}

console.log("b: ", b);

function fun(){
    var c = 20;
}

// console.log("c: ", c);

// datatypes

// primitive datatypes

// number, string, boolean, underlying, null, bigint, symbol

// number:

let num = 10;
let float = 2.6;

console.log("Integer: ", a, "\nFloating point: ", b)


// string

// let str = "Strike is coming";
let name = 'Amit';
// console.log("String: ", str, "\nName: ", name);

let islogin = true;
let f = false;

console.log("islogin: ", islogin, "\nf: ", f);

// undefined

let user;
// const p;

console.log(user);
console.log(typeof(user))


// bigint

let bigNum = 5124585423369514458552;

console.log(bigNum);
console.log(typeof(bigNum))

// null

let weather = null;

console.log(weather);
console.log(typeof(weather))

// symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log("id1: ", id1);
console.log("id2: ", id2); 
console.log(typeof(id1));
console.log("id1 == id2: ", id1 == id2);





// non-primitive;
let arr = [10, 20, 11, "Rohit", true]
console.log(arr)
console.log(typeof arr);

let object = {
    name: "Manish",
    account: 12321,
    age: 18,
    category: 'gen'
}
 

console.log(object);
console.log(typeof(object))


let s = function add(){
    console.log("Hello");
    return "Manish";
}


// console.log(add());
console.log(s);
console.log(s())
console.log(typeof(s))




// Primitive datatypes are immutables

let num1 = 10;
num1 = 20;

console.log(num1);

let str = "Rohit"
for(i=0; i<str.length; i++){
    console.log(str[i])
}
str = "Mohan"
str[0] = "R"
str = "Ramneet"
console.log(str)




// Non-Primitive datatypes are immutable

let array = [10, 20, 75, 92];
console.log("Before making changes: ", array)
array.push(33);
array[0] = 99
console.log("Before making changes: ", array)

let user1 = {
    name: "Mohan",
    age: 41,
}
console.log(user1);
console.log(user1.age)
user1.age = 20;
console.log(user1)

let user2 = user1;

user2.name = "Raju";
console.log("user1: ", user1);
console.log("user2: ", user2);


let e = 10;
let h = e;
h = 50;
console.log(e, h);