// Objects are variables too. But objects can contain many values.

const car = {type: "fiat", model: "500", color: "white"};
console.log(car);


// accessing object properties
// way_1 => objectName.propertyName
    let result = car.color;
    console.log(result);

// way_2 => objectName["propertyName"]
    result = car["model"];
    console.log(result);


// Object Methods
/*
Methods are actions that can be performed on objects.
*/

// own create method
const person = {
    firstName: "Ashik",
    lastName: "Mahmud",
    id: 67786,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// accessing method

let personFullName = person.fullName();
console.log(personFullName);



// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
// Strings as Objects
let a = new String('Dhaka');
console.log(a);
console.log(typeof a);

// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results: