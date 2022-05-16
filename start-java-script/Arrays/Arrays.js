// An array is a special variable, which can hold more than one value.

// Using an array literal is the easiest way to create a JavaScript Array.
const cars = ["Saab", "Volvo", "BMW"];



// You can also create an array, and then provide the elements.
const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";
// console.log(cars2);


// The following example also creates an Array, and assigns values to it.
const cars3 = new Array("Saab", "Volvo", "BMW");
// console.log(cars3);

// There is no need to use new Array(). For simplicity, readability and execution speed, use the array literal method.


// Accessing Array Elements

let car1 = cars3[0]; // Saab
// console.log(car1);


// Changing an Array Element

cars3[0] = "Opel";
// console.log(cars3[0]); // Opel


// Access the Full Array. With JavaScript, the full array can be accessed by referring to the array name.
// console.log(cars3); 


// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

let type = typeof cars3; // object
// console.log("type: ", type);



// Array Elements Can Be Objects

const myArray = [];
myArray[0] = Date.now();
myArray[1] = cars;
// console.log(myArray);