/*
The switch statement is used to perform different actions based on different conditions.

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 

The default case does not have to be the last case in a switch block:

*/
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

// console.log(day);



let text;
switch (new Date().getDay()) {
    case 6: 
        text = "today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
// console.log(text);


// Sometimes you will want different switch cases to use the same code.

let value = 0;
let mess;
switch (value) {
    case 4:
    case 5:
        mess = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        mess = "It is Weekend";
        break;
    default:
        mess = "Looking forwad to the Weekend";
}
// console.log(mess);


// Switch cases use strict comparison (===).
let x = "0";
let res;        // No value found
switch (x) {
    case 0:
        res = "Off";
        break;
    case 1:
        res = "On";
        break;
    default:
        res = "No value found"
}

console.log(res);
