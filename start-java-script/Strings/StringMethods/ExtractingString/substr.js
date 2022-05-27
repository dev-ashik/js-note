/*
substr(start_index, length)

*/

const text = "Hello everyone. How are you?";

const res = text.substr(0, 15);
console.log(`Line${9}: `, res);


// If you omit the second parameter, substr() will slice out the rest of the string.
const res2 = text.substr(16);
console.log(`Line${14}: `, res2);


// If the first parameter is negative, the position counts from the end of the string.
const res3 = text.substr(-12);
console.log(`Line${19}: `, res3);

const line = trace();
console.error(line);