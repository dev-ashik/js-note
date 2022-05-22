/* The syntax for any Math property is : Math.property.
JavaScript provides 8 mathematical constants that can be accessed as Math properties:


Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 
*/

const pi = Math.PI;
// console.log(pi);


// Number to Integer
// round number
const roundNumber1 = Math.round(8.6);
const roundNumber2 = Math.round(8.5);
const roundNumber3 = Math.round(8.4);
// console.log(roundNumber1, roundNumber2, roundNumber3);  // 9, 9, 8

// ceil number
const ceilNumber1 = Math.ceil(9.9);
const ceilNumber2 = Math.ceil(9.7);
const ceilNumber3 = Math.ceil(9.4);
const ceilNumber4 = Math.ceil(9.2);
const ceilNumber5 = Math.ceil(-9.4);
// console.log(ceilNumber1, ceilNumber2, ceilNumber3, ceilNumber4);  // 10 10 10 10
// console.log(ceilNumber5);  // -9


// floor number
const floorNumber1 = Math.floor(9.9);
const floorNumber2 = Math.floor(9.7);
const floorNumber3 = Math.floor(9.4);
const floorNumber4 = Math.floor(9.2);
const floorNumber5 = Math.floor(-9.4);
// console.log(floorNumber1, floorNumber2, floorNumber3, floorNumber4);  // 9 9 9 9 
// console.log(floorNumber5);  // -10


/*
Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
trunc() Math.trunc(x) returns the integer part of x:
*/
const truncNumber1 = Math.trunc(9.9);
const truncNumber2 = Math.trunc(9.7);
const truncNumber3 = Math.trunc(9.4);
const truncNumber4 = Math.trunc(9.2);
const truncNumber5 = Math.trunc(-9.4);
// console.log(truncNumber1, truncNumber2, truncNumber3, truncNumber4, truncNumber5);  // 9 9 9 9 -9 


// sign()  Math.sign(x) returns if x is negative, null or positive
const signNumber1 = Math.sign(-10);  // -1
const signNumber2 = Math.sign(0);  // 0
const signNumber3 = Math.sign(10); // 1
// console.log(signNumber1, signNumber2, signNumber3); 



// pow()
const powReturn = Math.pow(2, 3);  // 8
// console.log(powReturn);   


// sqrt()
const sqrtReturn = Math.sqrt(9);  // 3
// console.log(sqrtReturn);


// abs()  returns the absolute (positive) value of x.
const absReturn1 = Math.abs(10.34);  // 10.34
const absReturn2 = Math.abs(-10.34);  // 10.34
// console.log(absReturn1, absReturn2);




