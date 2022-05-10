// A JavaScript string is zero or more characters written inside quotes. You can use single or double quotes

let hobby = '';
let firstName = 'Ashik';
let lastName = "Mahmud";

// You can use quotes inside a string
let ans1 = "It's ok";
let ans2 = 'He is a "Teacher"';


// length property
let text = 'uioioyuiojklfhkjfsdffds';
let length = text.length;
// console.log(length);


// Escape Character
/*
Because strings must be written within quotes, JavaScript will misunderstand this string:
The solution to avoid this problem, is to use the backslash escape character(\).
*/

let note = "Do't forget to bring \"laptop\".";
console.log(note);


// Strings as Objects
let a = new String('Dhaka');
console.log(a);
console.log(typeof a);
 /*
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:
*/

let x = "John";
let y = new String("John");
console.log(x == y);    // true
console.log(x === y);   // false



let z = new String("John");
let m = new String("John");
console.log(z === m);   // false
// Comparing two JavaScript objects always returns false.

