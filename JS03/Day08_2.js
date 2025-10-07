// In JavaScript, we can also create the function inside Objects

const user = {
    name: "Manish",
    age: 25,
    emailId: "kumar@gmail.com",
    amount: "3500",
    greeting: function(){
        // console.log(`I am lernnig JavaScript: ${user.name}`);
        console.log(`I am lernnig JavaScript: ${this.name}`);
    },
    getAge: function(){
        return this.age;
    }
}

// calling function of Object
user.greeting();
const age = user.age;
console.log("age: ", age);

const user2 = {
    name: "Neeraj",
    age: 26
}

console.log("\nuser2: ", user2);
user2.greeting = user.greeting;
console.log("user2: ", user2);
console.log(user2.greeting());


// Creating Nested Objects
const user3 = {
    name: "Raman",
    age: 20,
    emailId: "bahla@gmail.com",
    amount: 3900,
    address: {
        city: "Ghaziabad",
        state: "UttarPradesh"
    }
}

console.log("user3: ", user3)
console.log("Address: ", user["address"]);

// creating separate copy of objects
// 1. creating shallow copy
const user1 = {...user3};
console.log("\nBefore making changes in user1, user3: ", user3);
console.log("Before making changes in user1, user1: ", user1);
user1.name = "Manish";
user1.address.city = "Delhi";
console.log("\nAfter making changes in user1, user3: ", user3);
console.log("After making changes in user1, user1: ", user1);

// This creates shallow copy of objects and keep separate at level one
// if we want deep copy then we must use the below method

const user4 = structuredClone(user3);
console.log("\nBefore making changes in user4, user3: ", user3);
console.log("Before making changes in user4, user4: ", user4);
user4.name = "Lalit";
user4.address.city = "Mumbai";
console.log("\nAfter making changes in user4, user3: ", user3);
console.log("After making changes in user4, user4: ", user4);


// Keys can be String or Symbol
const symbol = Symbol("id");

const user5 = {
    name: "Naman",
    age: 41,
    0: 100,
    "2": 455,
    [symbol]: "Hello JS"
}

console.log(user5);







