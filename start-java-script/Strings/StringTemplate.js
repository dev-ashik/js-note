// Template 

// Back-Tics Syntax
let text = `Hello world`;



// interpolation
// Automatic replacing of variables with real values is called string interpolation.
let name = "Md Ashik Mahmud";
let age = "23";

let about = `My name is ${name}. I am ${age} years old.`;
// console.log(about);


let price = 10;
let vat = 0.25;

let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);


