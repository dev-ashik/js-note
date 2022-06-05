/*
1. In JavaScript there are 5 different data types that can contain values:
    i.   string
    ii.  number
    iii. boolean
    iv.  object
    v.   function

2. There are 6 types of objects:
    i.   Object
    ii.  Date
    iii. Array
    iv.  String
    v.   Number
    vi.  Boolean

3. And 2 data types that cannot contain values:
    i.  null
    ii. undefined


*/



typeof "Ashik";                 // string
typeof 8.34;                    // number
typeof NaN                      // number
typeof false                    // foolean
typeof [3, 4, 5, 5]             // object
typeof {name: 'ashik', age: 24} // object
typeof new Date()               // object
typeof function () {}           // funciton
typeof myCar                    // undefined
typeof null                     // object



            
/*
    ==> Primitive Data
A primitive data value is a single simple data value with no additional properties and methods
    1. string
    2. number
    3. boolean
    4. undefined


    ==> Complex Data
The typeof operator can return one of two complex types.
    1. function
    2. object 
    




*/




// in javaScript variable data type can be changed
let x;                // now x is undefined
x = 5;              // now x is a Number
x = 'John';         // now x is a String
let y = "Java Script";

let z = true  // z is boolean

// Array

const citys = ["kunming", "Chandu"];

// Object
const persion = {name: "Ashik", age: 34, country: "Bangladesh"}



// typeof

console.log(typeof "name");
console.log(typeof 10);


// undefined

let car;
console.log(car);  // undefined
let value = undefined;
console.log(value);
