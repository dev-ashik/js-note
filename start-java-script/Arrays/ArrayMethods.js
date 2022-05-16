const cars = ["Saab", "Volvo", "BMW"];

// The length property of an array returns the length of an array (the number of array elements).
let len = cars.length; // 3
// console.log(len);

const numbers = [34, 45, 34, 12, 35, 7];
const afterSort = numbers.sort();
// console.log(afterSort);



// Accessing the first array Element.
const first = cars[0];
// console.log(first);

// Accessing The last element.
const lastElement = cars[cars.length - 1];
// console.log(lastElement);


// looping Array element
for ( let i = 0; i < cars.length; i++) {
    // console.log(i+1, ":", cars[i]);
}


// forEach()

// let values = cars.forEach();
// console.log(values);


// Adding array Elements
cars.push("NewAdd");
// console.log(cars);

// Adding elements with high indexes can create undefined "holes" in an array.
cars[cars.length] = "usingLength";
// console.log(cars);

//_____________________________________


// The JavaScript method toString() converts an array to a string of (comma separated) array values.
let result1 = cars.toString();  // Saab,Volvo,BMW,NewAdd,usingLength
// console.log(cars); // [ 'Saab', 'Volvo', 'BMW', 'NewAdd', 'usingLength' ]
// console.log(result1);


// join()
// join() behaves just like toString(), but in addition you can specify the separator.
let result2 = cars.join(" * ");  // Saab * Volvo * BMW * NewAdd * usingLength
// console.log(result2);

//____________________________________
/*
remove and last element. pop remove item from main array.
*/

// console.log(cars);
cars.pop()
// console.log(cars);

/*
=> Shifting Elements
    Shifting is equivalent to popping, but working on the first element instead of the last.
*/

// console.log(cars);
cars.shift();
// console.log(cars);




/*
The push() method adds a new element to an array (at the end)
*/

// console.log(cars);
cars.push("Haik");
// console.log(cars); // [ 'Saab', 'Volvo', 'BMW', 'NewAdd', 'Haik' ]

/*
=> unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
*/

// console.log(cars); // [ 'Volvo', 'BMW', 'NewAdd', 'Haik' ]
cars.unshift("Toyota");
// console.log(cars); // [ 'Toyota', 'Volvo', 'BMW', 'NewAdd', 'Haik' ]

// delete array
// console.log(cars);  // [ 'Toyota', 'Volvo', 'BMW', 'NewAdd', 'Haik' ]
delete cars[0];
// console.log(cars); // [ <1 empty item>, 'Volvo', 'BMW', 'NewAdd', 'Haik' ]

//_______________________________________
/*
Merging (Concatenating) Arrays. The concat() method creates a new array by merging (concatenating) existing arrays. 
N.B: The concat() method does not change the existing arrays. It always returns a new array.
*/

const boys = ["Anik", "Siam", "Najmul"];
const girls = ["Nipa", "Ripa", "Tiya"];
const boys2 = ["Suza", "Robin", "Rabby", "Zidny"];
const newArray = boys.concat(girls);
// console.log(boys); // [ 'Anik', 'Siam', 'Najmul' ]
// console.log(girls); // [ 'Nipa', 'Ripa', 'Tiya' ]
// console.log(newArray);  // [ 'Anik', 'Siam', 'Najmul', 'Nipa', 'Ripa', 'Tiya' ]



// The concat() method can take any number of array arguments:
const AllName = boys.concat(girls, boys2);
// console.log(AllName);

// The concat() method can also take strings as arguments. Insert into array as last element.

const AlsoMe = boys.concat("Ashik");
// console.log(AlsoMe);


//____________________________________
// Splicing and Slicing

const fruits = ["Banana", "Orange", "Apple"];

fruits.splice(1, 0, "Lemon", "Kiwi");
/*
fruits.splice(position, number_of_element-remove, "Lemon", "Kiwi");
The first parameter (1) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
*/
// console.log(fruits);


/*
slice()
The slice() method slices out a piece of an array into a new array.
The slice() method creates a new array.
The slice() method can take two arguments like slice(1, 3).
*/

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango", "PineApple"];
const citrus = fruits2.slice(3); // [ 'Apple', 'Mango' ] start from index 3
console.log(citrus);

const citrus2 = fruits2.slice(3, 4);
// const citrus2 = fruits2.slice(fistIndex, LastIndex); (but last index not included)
console.log(citrus2);

/*

Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array.

*/


// https://www.w3schools.com/jsref/jsref_obj_array.asp