const price = 30;
console.log(price);

// Variables defined with const cannot be Redeclared.
// const price = 90; // error

//Variables defined with const cannot be Reassigned.
// price = 50;  // error

// _________________________________________
// Variables defined with const have Block Scope.
{
    const name = 'akash';
    console.log('Name from inside: ',name);
    
    // const name = 'batas'; // Not allowed
}
 // error can't access name outside

    const name = 'batas'; // allowed
    console.log('Name from outside: ', name);





// _________________________________________
// Must be Assigned

    // correct
const height = 180;

    // incorrect
/*
 const weight; // error
 weight = 76;
*/


// ________________________________________
/*
=> when use Const?
     As a general rule, always declare a variable with const unless you know that the value will change.

     Use const when you declare:
         1. A new Array
         2. A new Object
         3. A new Function
         4. A new RegExp
*/

// _________________________________________
/*
Constant Objects and Arrays

Because of this you can NOT:
    1. Reassign a constant value
    2. Reassign a constant array
    3. Reassign a constant object
But you CAN:
    1. Change the elements of constant array
    2. Change the properties of constant object



*** array ***
corrent:
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");

incorrect:
    const cars = ["Saab", "Volvo", "BMW"];
    cars = ["Toyota", "Volvo", "Audi"];    // ERROR


*** object ***
correct:
    const car = {type:"Fiat", model:"500", color:"white"};
    car.color = "red";
    car.owner = "Johnson";

incorrect: 
    const car = {type:"Fiat", model:"500", color:"white"};
    car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
*/