/*
    getFulYear()
    getMonth()
    getDate()
    getHours()
    getMinutes()
    getSeconds()
    getMilliseconds()
    getTime()
    getDay()
    date.now()
*/


const date = new Date();
// console.log(date);


// getTime()
const get_time = date.getTime();   // 1653141805261
// console.log(get_time);


// getFullYear()
const year = date.getFullYear();  // 2022
// console.log(year);  


// getMonth() The getMonth() method returns the month of a date as a number (0-11):
const month = date.getMonth();
// console.log(month);  // 4 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const selectedMonth = months[month];
// console.log(selectedMonth);  // May 


// getDate()
const onlyDate = date.getDate();
// console.log(onlyDate); // 21


// getHours()
const hour = date.getHours();
// console.log(hour);  // 22



// getMunites()
const minutes = date.getMinutes();
// console.log(minutes);  // 12


// getSecond()
const seconds = date.getSeconds();
// console.log(seconds); // 46


// getMilliseconds()  The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
const milliseconds = date.getMilliseconds();
// console.log(milliseconds);  // 513



// getDay()  The getDay() method returns the weekday of a date as a number (0-6):

const day = date.getDay();
// console.log(day);  // 6
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = days[day];
// console.log(today);  // Saturday




