/*
Search Methods

    indexOf()
    lastIndexOf() 
        Both indexOf(), and lastIndexOf() return -1 if the text is not found:

    startsWith()
    endsWith()
*/

let text = "amar sonar bangla ami tomai valobashi, amar bangladesh";
let result = text.indexOf("bangla"); // 11
// console.log(result);
// console.log(text.indexOf("Done")); // -1

/*
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
*/
let result2 = text.lastIndexOf("amar"); //39
// console.log(result2);
// console.log(text.lastIndexOf("done")); // -1


// Both methods accept a second parameter as the starting position for the search:
text.indexOf("amar", 7);
text.lastIndexOf("amar", 7);


/*
*** search ***

*/
let result3 = text.search("bangla"); // 11
// console.log(result3); 

/*
The two methods, indexOf() and search(), are equal?

The two methods are NOT equal. These are the differences:
    1. The search() method cannot take a second start position argument.
    2. The indexOf() method cannot take powerful search values (regular expressions).
*/


/*
    *** match() ***
    If a regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.
*/
let result4 = text.match(/ban/g);
// console.log(result4);


/*
    includes()

*/

let result5 = text.includes("sonar"); // true
let result6 = text.includes("rupar"); // false
// console.log(result5);
// console.log(result6);


let result7 = text.includes("amar", 6); // true
let result8 = text.includes("amar", 43); // false
console.log(result7);
console.log(result8); 



// startsWith()
// endsWith()