/*
Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
Math.random() always returns a number lower than 1.
*/

const randNumber = Math.random();
// console.log(randNumber);

// Random Integers

// Returns a random integer from 0.xxx to 9.xxx
const number = Math.random() * 10;
// console.log(number);

// Returns a random integer from 0 to 9
const number2 = Math.floor(Math.random() * 10);
// console.log(number2);

// Returns a random integer from 0 to 100:
const number3 = Math.floor(Math.random() * 101);
// console.log(number3);


// Returns a random integer from 1 to 10.
const number4 = Math.floor(Math.random() * 10) + 1;
// console.log(number4);


/*
A Proper Random Function

*/

// This JavaScript function always returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const number5 = getRndInteger(5, 10);
// console.log(number5);


// This JavaScript function always returns a random number between min and max (both included).
function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const number6 = getRndInteger2(5, 10);
console.log(number6);


