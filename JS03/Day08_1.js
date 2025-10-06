// Objects in JavaScript



// creating object 
const user ={
    name: "Manish",
    age: 20,
    email: "kumar@gmail.com",
    amount: 3400
}

console.log(user);
console.log("typeof(user): ", typeof user);


// Objects are mutuable in Javascript
// accessing object values
console.log("Age of user: ", user.age);

user.aadhaar = 124532154569;
console.log(user);
user.amount = 5000;
console.log(user);

// deleting the property form object
delete user.email;
console.log(user);

// By default the keys are stored as string 
// console.log("user[name]: ", user["name"]);
console.log("user[\"name\"]: ", user["name"]);


// Objects are copied by reference
const user2 = user;
console.log("Before making changes user: ", user);
console.log("Before making changes user2: ", user2);
user2.age = 30;
console.log("After making changes in user2, user Object: ", user);
console.log("After making changes in user2, user2 Object: ", user);


// * Important
// accessing keys
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
// all above functions create an array and put the values into that array internally

// itearting over the objects
for(let keys in user){
    console.log(keys, ": ", user[keys]);
}




// Destructuring of object
// const name = user.name;
// const age = user.age;

console.log("\nDestructuring of object: ")
const {name, age} = user;
console.log("name: ", name, "\nage: ", age)


// Destructuring of array
console.log("\nDestructuring of Array: ")
const arr = [1, 45, 85, 65, 8, 0];
const [first, second] = arr;
console.log("first: ", first, "\nsecond: ", second);

// changing the name of varaible while destructuring the object
const {name: userName, age: userAge} = user;
console.log("\nChanging the name of variable while Destructing the Objects: ")
console.log("userName: ", userName, "\nuserAge: ", userAge);



// We can't directly apply for-of loop on object
console.log("\nIterating for-of loop on the object: ")
for (const keys of Object.keys(user)) {
    // console.log(keys);
    // console.log("user.keys:", user.keys)
    console.log("user[", keys, "]: ", user[keys]);
}
for (const value of Object.values(user)) {
    console.log(value);
}

for (const entry of Object.entries(user)) {
    console.log(entry);
}

for (const [key, value] of Object.entries(user)) {
    console.log("key: ", key, ", value: ", value);
}



