// Strings are immutable: Strings cannot be changed, only replaced.

// *** length ***
let text = 'Hello Everyone. I am a student. My sister is also student. I love Student life.';
let textLength = text.length;

// console.log(textLength);

//_______________________________________________
/*
 *** Extracting String Parts ***

There are 3 methods for extracting a part of a string:
    1. slice(start, end) // end not included
    2. substring(start, end)
    3. substr(start, length)

*/

let slicePart = text.slice(16, 30)
// console.log(slicePart);

/*
If a parameter is negative, the position is counted from the end of the string.
*/
let slicePart2 = text.slice(-10, -4);
// console.log(slicePart2);

/*
If you omit the second parameter, the method will slice out the rest of the string
*/
let slicePart3 = text.slice(20);
// console.log(slicePart3);

/*
 *** substring ***
The difference is that start and end values less than 0 are treated as 0 in substring().
*/
let sub = text.substring(8, 26);
// console.log(sub);

/*
If you omit the second parameter, substring() will slice out the rest of the string.
*/

/*
 => substr()
substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
*/
let sub2 = text.substr(7, 3);
// console.log(sub2);

/*
If you omit the second parameter, substr() will slice out the rest of the string.
//_______________________________________________
*/


/*
   *** replacing ***
// The replace() method replaces a specified value with another value in a string. The replace() method replaces only the first match
*/

let newText = text.replace("student", "teacher");
// console.log("After replace: ", newText);

/*
// If you want to replace all matches, use a regular expression with the /g flag set
// Regular expressions are written without quotes.
*/
let newText2 = text.replace(/student/g, "teacher")
// console.log(newText2);

/*
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
*/

let newText3 = text.replace(/Student/ig, "Teacher")
// console.log(newText3);


// Converting to Upper and Lower case
let upper = text.toUpperCase();
// console.log(upper);
let lower = text.toLowerCase();
// console.log(lower);


/*
 **** Concat ****
*/
let newString = text.concat(" ", "Now I live in china.");
// console.log(newString);


/*
 *** String trim( ) ***
 The trim() method removes whitespace from both sides of a string:
*/

let text2 = "       hello World         ";
let trimText = text2.trim();
// console.log(text2);
// console.log(trimText);



/*
 *** String Padding ***
ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.
 */

let name = "Ashik";
let newName = name.padStart(7, "Md ");
// console.log(newName);

newName = name.padEnd(8, "don");
// console.log(newName);


/*
Extracting String Characters
There are 3 methods for extracting string characters
    charAt(position)
        The charAt() method returns the character at a specified index (position) in a string
    charCodeAt(position)
        The charCodeAt() method returns the unicode of the character at a specified index in a string:
        The method returns a UTF-16 code (an integer between 0 and 65535).
property access []
*/

let text3 = "amar sonar bangla";
let value = text3.charAt(0);
// console.log(value);

let value2 = text3.charCodeAt(0)
// console.log(value2);

let value3 = text3[0];
// console.log(value3);

/*
==> It is read only. str[0] = "A" gives no error (but does not work!)
*/

text3[0] = "A"; // Gives no error, but does not work
// console.log(text3);  

/*
Strint to Array
    split()

*/
let text4 = "Anik, Najmul, Siam, Milon, Suza, Sojib are my friends.";
let stringArray = text4.split(",");
console.log(stringArray); 
/*
[
    'Anik',
    ' Najmul',
    ' Siam',
    ' Milon',
    ' Suza',
    ' Sojib are my friends.'
  ]
*/
stringArray = text4.split(" ");
console.log(stringArray);


// https://www.w3schools.com/jsref/jsref_obj_string.asp