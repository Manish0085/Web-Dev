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















