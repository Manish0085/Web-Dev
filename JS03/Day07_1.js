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














