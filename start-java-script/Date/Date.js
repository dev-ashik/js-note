/*
Note: JavaScript counts months from 0 to 11:

*/

const d = new Date();  //2022-05-15T03:05:58.779Z
/*
if run with brower 
Sun May 15 2022 11:09:07 GMT+0800 (China Standard Time)
*/
console.log(d); 

/*
Creating Date Objects
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

*/


let findDay = new Date(2022, 5, 15, 10, 0, 0) // Wed Jun 15 2022 10:00:00 GMT+0800 (China Standard Time)
// console.log(findDay);

// Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:
const d2 = new Date(2018, 11, 24, 10, 33, 30);
// 5 numbers specify year, month, day, hour, and minute.
const d3 = new Date(2018, 11, 24, 10, 33);

// 4 numbers specify year, month, day, and hour
const d4 = new Date(2018, 11, 24, 10);

// 3 numbers specify year, month, and day.
const d5 = new Date(2018, 11, 24);

// 2 numbers specify year and month.
const d6 = new Date(2018, 11);


// Previous Century
// One and two digit years will be interpreted as 19xx:
const d7 = new Date(99, 11, 24);
const d8 = new Date(9, 11, 24);


// new Date(dateString)
// new Date(dateString) creates a new date object from a date string:

const d9 = new Date("October 13, 2014 11:13:00");
// Mon Oct 13 2014 11:13:00 GMT+0800 (China Standard Time)

// new Date(milliseconds)
new Date(0);
// Thu Jan 01 1970 08:00:00 GMT+0800 (China Standard Time)


new Date(-100000000000)
// on Oct 31 1966 22:13:20 GMT+0800 (China Standard Time)

// One day (24 hours) is 86 400 000 milliseconds.