/* Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.


   Method   	  |      Description
__________________________________________________________
setDate() 	      | Set the day as a number (1-31)
setFullYear() 	  | Set the year (optionally month and day)
setHours() 	      | Set the hour (0-23)
setMilliseconds() | Set the milliseconds (0-999)
setMinutes()      | Set the minutes (0-59)
setMonth() 	      | Set the month (0-11)
setSeconds()      | Set the seconds (0-59)
setTime() 	      | Set the time (milliseconds since January 1, 1970)

*/


const date = new Date();
const res = date.setFullYear(2020, 11, 3);
// console.log(res);   // 1607005421523


const month = date.setMonth(11);
console.log(month);
