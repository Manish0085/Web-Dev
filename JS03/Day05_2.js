// Math library

console.log("Math.PI: ", Math.PI);
console.log("Math.LN10: ", Math.LN10);
console.log("Math.SQRT2: ", Math.SQRT2);
console.log("Math.SQRT1_2: ", Math.SQRT1_2);
console.log("Math.abs(-12): ", Math.abs(-12));
console.log("Math.ceil(2.03): ", Math.ceil(2.03));
console.log("Math.floor(2.03): ", Math.floor(2.03));

console.log("Math.log10(10): ", Math.log10(10));
console.log("Math.max(20, 75, 12, 3, 59, 0): ", Math.max(20, 75, 12, 3, 59, 0));
console.log("Math.min(20, 75, 12, 3, 59, 0): ", Math.min(20, 75, 12, 3, 59, 0));




// Random
console.log(Math.random());
// Math.random(): it will generate value between 0 and 1 where 1 is excluded

console.log(Math.floor(Math.random()*10));
// 15 - 25
console.log(Math.floor(Math.random()*11) + 15);

// Math.floor(Math.random()*(max - min + 1)) + min

// Genearte OTP
console.log(Math.floor(Math.random() * (9999-1000+1) + 1000))




