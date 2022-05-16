// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard. 

let x = 5.3; // A number with decimals
let y = 3;   // A number without decimals



// Extra large or extra small numbers can be written with scientific (exponent) notation.
let m = 123e5;
// console.log(m);

let n = 123e-5;
// console.log(n);


// Integer Precision
let num1 = 999999999999999;
let num2 = 9999999999999999;
// console.log(num2);


// Adding numbers and strings
let num3 = 10;
let num4 = 20;
let total = num3 + num4;
// console.log(total);

let num5 = "10";
let num6 = "20";
let total2 = num5 + num6;
// console.log(total2);

// If you add a string and a number, the result will be a string concatenation
let num7 = 10;
let num8 = "20";
let total3 = num7 + num8;
// console.log(total3);



// A common mistake is to expect this result to be 30
let result = "The Result is: " + num3 + num4;
// console.log(result);


// Numeric Strings
let num9 = "100" * "10";
// console.log(num9);


// NaN - Not a Number
let result2 = 100 / "Apple";
// console.log(result2);   // Nan
let result3 = isNaN(result2);  // true
// console.log(result);

let result4 = 10 + NaN; // NaN
// console.log(result4);


let result5 = typeof NaN;  // Number
// console.log(result5);


// Infinity
let num10 = 2;
while (num10 != Infinity) {
    num10 = num10 * num10;
    // console.log(num10);
}


// console.log(typeof Infinity);


// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
let num11 = 0xff;
// console.log(num11);


// you can use the toString() method to output numbers from base 2 to base 36.

let num12 = 32;
// console.log(num12.toString(32));  // 10
// console.log(num12.toString(16));  // 20
// console.log(num12.toString(12));  // 28
// console.log(num12.toString(10));  // 32
// console.log(num12.toString(8));  // 40
// console.log(num12.toString(2));  // 100000



// number as Objects
let num13 = new Number(123);
console.log(num13);


// When using the == operator, num12 and num13 are equal:
// When using the === operator, num12 and num13 are not equal.



