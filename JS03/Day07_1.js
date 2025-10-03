// Array

// let marks1 = 100;
// let marks2 = 20;
// let marks3 = 60;
// let marks4 = 90;
// let marks5 = 80;
// let marks6 = 60;
// let marks7 = 30;


let marks = [100, 20, 60, 90, 80, 60, 30];
console.log(marks);
console.log("Length of marks array: ", marks.length)


let arr = [100, 30, "Manish", true];
console.log(arr);

// Accessing array elements
for(let i=0; i<arr.length; i++){
    console.log("arr[", i , "]: ",arr[i]);
}

// type of array in JS
console.log("Type of arr: ", typeof arr);

arr[1] = 33;
console.log(arr);
for(let i=0; i<arr.length; i++){
    console.log("arr[", i , "]: ",arr[i]);
}

// adding new element in array: push() operation
arr.push(43);   // add the element at the last of array
arr.push("Strike");
console.log(arr);

// Deleting element from array: pop() operation
console.log("Delete last element from array: ", arr.pop()); // delete and returns last elememt from the array
console.log(arr); 


// add and deleting first element from the array
arr.unshift(53);
console.log(arr);
console.log("Deleting first element: ", arr.shift());
console.log(arr);

// We can use the shift and unshift operation on the array but it is nnot recommended as they slow down the performance of the system


// accessing the array element
let a = [10, 30, 50, 90, 11];
for(let i=0; i<a.length; i++){
    console.log("a[", i , "]: ", a[i]);
}


// Acceessing array element using for-of loop
console.log("Acceessing array element using for-of loop: ")
let i = 0;
for(let num of a){
    console.log("a[", i++ , "]: ", num);
}


let arr1 = [10, 90, 45, 32, 13, 5];
let arr2 = arr1;
console.log("Before updating arr2: ")
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);
arr2.push(39);
console.log("After updating arr2: ")
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);



// we cannot change the add of const array
const arr3 = [10, 4, 25, 26, 63];
// arr3 = [42, 85, 38]; // it will change the arr3 address
// but we can do the following
arr3.push(53);  // it won't change the array address instaed it will make the changes at the address
console.log(arr3);
// Object (non primitive): Copy by reference 
// Primitive: Copy by value 



// Slicing in the array
// syntax: array.slice(startIndex, endIndex);
const arr4 = [10, 4, 25, 26, 63];
console.log("Slice array: ", arr4.slice(2, 4)); // this slice operation returns a new array of slice
console.log("No change in Original array after slice operation: ", arr4);


// splice operation
console.log("Before splice operation, Original array: ", arr4); 
// syntax: array.splice(startIndex, noOfElementsToBeTrimedOut)
console.log("arr4.splice(1, 4):", arr4.splice(1, 3));
console.log("After splive operation, Original arr4: ", arr4);
arr4.push(51);
arr4.push(11);
arr4.push(85);
console.log(arr4)
console.log("arr4.splice(1, 4, \"Rohit\", 333):", arr4.splice(1, 3, "Rohit", 333));
console.log(arr4);

 
// spread operator

const a1 = [74, 78, 6, 3, 31, 63, 96];
const a2 = ["Rohan", "Amit", "Manthan"];
const a3 = [75, "Nakul", 45, 3, "Mohan"];
// a1.push(a2);
// console.log("a1.push(a2): ", a1); 

const a4 = a1.concat(a2, a3);
console.log(a4);
// spread operation
const an = [a1, a2, a3];  // returns a nested array
console.log(an);
const a5 = [...a1, ...a2, ...a3];
console.log(a5);

// converting array to string
const names = ["Alice", "Bob", "Charlie", "Bob"];
console.log("names.toString(): ", names.toString());
console.log("type of \"names.toString()\": ", typeof names.toString());
// join()

console.log("names.join(\" \"): ", names.join(" "));
console.log("names.join(\"-\"): ", names.join("-"));
console.log("names.join(\"\"): ", names.join(""));

console.log("names.indexOf(\"Bob\"): ", names.indexOf("Bob"));
console.log("names.lsatIndexOf(\"Bob\"): ", names.lastIndexOf("Bob"));
console.log("names.includes(\"Bob\"): ", names.includes("Bob"));

const name = ["Alice", "Rohit", "Bob", "Mohit", "Charlie", "bob", "alice"];
console.log("Before applying sorting function: ", name);
name.sort();
console.log("After applying sorting function: ", name);
name.reverse();
console.log("After applying \"name.reverse()\": ", name);
// desecding order
console.log("After applying \"name.sort().reverse()\": ", name.sort().reverse());


const b1 = [51, 62, 2, 101, 8, 65, 32];
b1.sort(); // [101, 2, 32. 51, 62, 65, 8];
// because by default the js interpreter sort the element based on the ascii value of character irrespective weather the element is number or character or string it treates all the element and character and based on their ascii the sorting os applied 
console.log("b1.sor(): ", b1);

b1.sort((a, b) => a-b); // custom sorting
console.log("ascending order: ", b1);
// ascending ordering
// if a-b is -ve: a will be first and b will be second
// if a-b is +ve: b will be first and a will be second
b1.sort((a, b) => b-a);
console.log("descending order: ", b1);



// flattening the array
const srr = [10, 30, 50, [40, 35, 11], 8];
console.log("srr: ", srr);
console.log("srr[3]: ", srr[3]);
console.log("srr[3][2]: ", srr[3][2]);

const srr1 = [10, 30, 50, [40, 35, [41, 52, 9, 5], 11], 8];
console.log("srr1: ", srr1);
console.log("srr1[3]: ", srr1[3]);
console.log("srr1[3][2]: ", srr1[3][2]);
console.log("srr1[3][2][2]: ", srr1[3][2][2]);

const s1 = srr.flat();
const s2 = srr1.flat(2);
// const s2 = srr1.flat(Infinity);
// const s2 = srr1.flat(levelToBeFlatten);

// we can specify the level of flatening the array as the arrray can be mutli dimensional
// const s3 = s2.flat();
console.log(s1);
console.log(s2);
// console.log(s3);


