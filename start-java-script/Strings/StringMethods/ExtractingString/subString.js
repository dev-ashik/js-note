/*

substring(start_index, end_index) 
    N.B: end_index is not included.

*/

const text = "Hello everyone. How are you?";

const res = text.substring(0, 15);
console.log(`Line${11}: `, res);


// If you omit the second parameter, substring() will slice out the rest of the string.
const res2 = text.substring(16);
console.log(`Line${16}: `, res2);



//      **************
// substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

const res3 = text.substring(-10, 15);   // -10 treated as 0
console.log(`Line${24}: `, res3);
