
/*
JavaScript will actually create an Error object with two properties: name and message.
*/

try {
    adddlert('welcome Guest!');
}
catch(err) {
    let res = err.message;
    // console.log(res);
}


// The throw Statement
/*
 Technically you can throw an exception (throw an error).
If you use throw together with try and catch, you can control program flow and generate custom error messages.
*/


const value = "ldlf";

try {
    if (value === "") {
        throw "empty";
    }
    else if (isNaN(value)){
        throw "Not a number";
    }
    else if(value < 5) {
        throw "too low";
    }
    else if (value > 10) {
        throw "too high";
    }
    else{
        // console.log("everying is ok");
    }
}
catch(err) {
    let res = "Input is "+ err;
    // console.log(res);
}



// The finally Statement
/*
 The finally statement lets you execute code, after try and catch, regardless of the result.


Syntax
    try {
    Block of code to try
    }
    catch(err) {
    Block of code to handle errors
    }
    finally {
    Block of code to be executed regardless of the try / catch result
    } 

*/


var value2 = 2;

try {
    if (value2 === "") {
        throw "empty";
    }
    else if (isNaN(value2)){
        throw "Not a number";
    }
    else if(value2 < 5) {
        throw "too low";
    }
    else if (value2 > 10) {
        throw "too high";
    }
    else{
        console.log("everying is ok");
    }
}
catch(err) {
    let res = "Input is "+ err;
    console.log(res);
}
finally {
    value2 = "Thank you.";
}
console.log(value2);





/*
The Error Object
The error object provides two useful properties: name and message.
    Property  |	  Description
______________________________________________________
    name      |   Sets or returns an error name
    message	  |   Sets or returns an error message (a string)



    => Error Name Values
    Error Name	 |  Description
_________________________________________________________
    EvalError	   | An error has occurred in the eval() function
    RangeError	   | A number "out of range" has occurred
    ReferenceError | An illegal reference has occurred
    SyntaxError	   | A syntax error has occurred
    TypeError	   | A type error has occurred
    URIError	   | An error in encodeURI() has occurred




read later:
    https://www.w3schools.com/jsref/jsref_obj_error.asp

*/