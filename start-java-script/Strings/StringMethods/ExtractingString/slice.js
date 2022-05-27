/*
slice(start_index, end_index);

N.B: slice() returns a new string. he method takes 2 parameters: the start position, and the end position (end not included).

*/

const text = "hello everyone. How are you?";
const res = text.slice(0, 15);
console.log(`Line${10}: `, res);


//           **************
// ==> If you omit the second parameter, the method will slice out the rest of the string

const res_oneParameter = text.slice(15);
console.log(`Line${17}: `, res_oneParameter); 


   
//           *************
// ==> If a parameter is negative, the position is counted from the end of the string.

const res_negative = text.slice(-12, -1);   // last one is not included
console.log(`Line${25}: `, res_negative);

const res_negative_oneP = text.slice(-12);
console.log(`Line${28}: `, res_negative_oneP);