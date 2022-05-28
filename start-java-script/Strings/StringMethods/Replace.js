/*
The replace() method replaces only the first match.
By default, the replace() method is case sensitive. 
*/

const text = 'Hello Everyone. I am a student. My sister is also student. I love Student life.';


const newText = text.replace("student", "Teacher");
// console.log(`Line${10}: `, newText);


// To replace case insensitive, use a regular expression with an /i flag (insensitive).

const newText2 = text.replace(/STUDENT/i, "Teacher");
// console.log(`Line${16}: `, newText2);


// To replace all matches, use a regular expression with a /g flag (global match)

const newText3 = text.replace(/student/g, "teacher");
console.log(`Line${22}: `, newText3);



