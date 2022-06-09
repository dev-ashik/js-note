/*

Syntax

/patern/modifiers;


=> Regular Expression Modifiers

   Modifier |  Description
_____________________________________________________
    i       |  Perform case-ensensitive matching
    g       |  Perform a global match (find all matches rather then stopping after the first match)
    m       |  Perform multiline matching


*/







/*
=>Regular Expression Patterns

 expression |  Description
_____________________________________________________
  [abc]       |  Find any of the characters between the breakets
  [0-9]      |  Find any of the digits between the breakets
  (x|y)      |  Find any of the alternatives separated with |


*/

const text = 'Do a global search for the character "h" in a string.';
const res = text.match(/[h]/g);
// console.log(res);

const numbers = "1346899";
const res2 = numbers.match(/[1-4]/g);   // [ '1', '3', '4' ]
// console.log(res2);


const colors = "re, green, red, green, gren, gr, blue, yellow";
const color = colors.match(/(red|green)/g); // [ 'green', 'red', 'green' ]
// console.log(color);




/*
Metacharacters

  MetaCharacter  |   Description
_________________________________________________
       \d        |   Find a digit
       \s        |   Find a whitespace character
       \b        |   Find a match at the beginning of a word like this: /bWORD, or at the end of a word like this: WORD/b
       \uxxxx    |   Find the Unicode character specified by the hexadecimal number xxxx

*/

const text2 = "Give 100%! ";
const result = text2.match(/\d/g);   // [ '1', '0', '0' ]
// console.log(result);


const result2 = text2.match(/\s/g);    // [ ' ', ' ' ]
// console.log(result2);

const text3 = "HELLO World, LOOK AT YOU!";
const result3 = text3.search(/\bLO/);   // returns 13
// console.log(result3);

const result4 = text3.search(/LO\b/);   // returns 3
// console.log(result4);

const result5 = text3.match(/\u0057/g);   // returns [ 'W' ]
// console.log(result5);




/*
Quantifiers

  MetaCharacter  |   Description
_________________________________________________
       n+        |   Matches any string that contains at least one n
       n*        |   Matches any string that contains Zero or more occurrences of n
       n?        |   Natches any string that contains zero or more occurrences of n


*/


const text4 = "Hellooo World! Hello W3Schools!";
const result6 = text4.match(/o+/g);    // [ 'ooo', 'o', 'o', 'oo' ]
// console.log(result6);



const result7 = text4.match(/lo*/g);   //  [ 'l', 'looo', 'l', 'l', 'lo', 'l' ]
// console.log(result7);


const text5 = "1, 100 or 1000?";
const result8 = text5.match(/10?/g);    //  [ '1', '10', '10' ]
// console.log(result8);



