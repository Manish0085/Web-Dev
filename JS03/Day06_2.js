// Date

const now = new Date();

console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())

console.log("Date: ", now.getDate());
console.log("Day: ",now.getDay());

console.log("Year: ", now.getFullYear());
console.log("Month: ", now.getMonth()); // Month starts from 0
console.log("Hours: ", now.getHours());
console.log("Minutes: ", now.getMinutes());
console.log("Seconds: ", now.getSeconds());



// Days: Mon-Tue(1-based)
// Month: 0 1 (0-based)
// Another wayt of creating Date

// const date = new Date(year, month, date, hour, minute, second, millisecond);
const date = new Date(2025, 9, 20, 8, 25, 16, 125);
console.log(date);
console.log(date.toString());


const time = Date.now();  // return date in millisecond
console.log(time);
const times = new Date(1759376767489);
console.log(times.toString());

const dates = new Date(0);
console.log(dates);
console.log(dates.toString());


// India is 5:30 hrs ahead form UTC(Universal Time Coordinate)






