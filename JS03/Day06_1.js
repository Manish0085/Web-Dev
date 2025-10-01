// String Creation
const str1 = "Manish";
const str2 = 'Kumar';

// Modern way to craete a string
const str3 = `Strike 
is coming soon
`;

const day = 18;
const str4 = `Strike is coming on ${day}`;

console.log("str1: ", str1, "\nstr2: ", str2, "\nstr3: ", str3);
console.log("str4: ", str4)

const str5 = `Hello Coder Army`;
console.log(str5.length);

console.log(str5[1]);

str5[2] = "s";
console.log(str5);


// Upper case
console.log(str5.toUpperCase());  // always returns a new string
const upper = str5.toUpperCase();
console.log(upper);
console.log(str5);


// lower case
console.log(str5.toLocaleLowerCase());  // always returns a new string
const lower = str5.toLocaleLowerCase();
console.log(lower)
console.log(str5);
















