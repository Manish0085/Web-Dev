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
console.log("str5: ", str5);


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
console.log("str5.indexOf('cod'): ", str5.indexOf('cod'));
console.log("str5.indexOf('Cod'): ", str5.indexOf('Cod'));

const str6 = str5 + ` Coder`;
console.log(str6);
console.log(str6.lastIndexOf("Cod"));

// slice
console.log(str6.slice(2, 5));
console.log(str6.slice(5));


console.log(str6.slice(-9));
console.log(str6.slice(-9, -3));

// subString()

console.log(str6.substring(2, 8)); // cannot give negative index

// String Concatination
const a = "Rohit";
const b = "Negi";
const c = a + " " + b;
console.log(c);

console.log(24 + "Rohit"); // 24Rohit
console.log(24 + "Rohit" + 10); // 24Rohit10
console.log(24 + 30 + "Rohit"); // 24Rohit10



// replace()

console.log(str6.replace("ode", "iam"))
console.log(str6.replaceAll("ode", "iam"))


// trim()
const user = "  Rohit  ";
console.log(user);
console.log(user.trim());

const names = "Rohit,Mohot,Suraj,Rohan,Anjali";
console.log(names);
console.log(names.split(","));













