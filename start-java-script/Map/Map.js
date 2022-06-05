/*

A Map holds key-value pairs where the keys can be any datatype.

 ==> Essential Set Methods
    Method  |	  Description
    ____________________________________________________
    new Map()	| Creates a new Map
    set()	    | Sets the value for a key in a Map
    get()	    | Gets the value for a key in a Map
    delete()    | Removes a Map element specified by the key
    has()	    | Returns true if a key exists in a Map
    forEach()	| Calls a function for each key/value pair in a Map
    entries()	| Returns an iterator with the [key, value] pairs in a Map
    size	    | Returns the number of elements in a Map



*/

// Create a Map
    // Passing an Array to new Map()
    // Create a Map and use Map.set()


const fruits = new Map([
    ["apples", 500],
    ["banana", 300],
    ["oranges", 200]
]);


fruits.set("Pineapple", 100);

// console.log(fruits);


// The set() method can also be used to change existing Map values.

fruits.set("apples", 700);
// console.log(fruits);

            // get() Method
// The get() method gets the value of a key in a Map.

const res = fruits.get("apples");
// console.log(res);


const resSize = fruits.size;
// console.log(resSize);


            // delete() Method
// The delete() method removes a Map element
fruits.delete("apples");
// console.log(fruits);


            // has() Method
// The has() method returns true if a key exists in a Map.

const res2 = fruits.has("bananas");
// console.log(res2);