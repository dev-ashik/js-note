// ==> this in a Method

const person = {
    firstName: "Md",
    midName: "Ashik",
    lastName: "Mahmud",
    id: 3434,
    fullName: function() {
        return this.firstName + " " + this.midName + " " + this.lastName;
    }
}

// console.log(person.fullName);     // [Function: fullName]
// console.log(person.fullName());   // Md Ashik Mahmud


// ==> this Alone
let x = this;
// console.log(x);



// ==> this in a Function (Default)
const myFunction = () => {
    return this
}


const y = myFunction();
// console.log(y);

// ==> this in Event Handlers



// ==> Object Method Binding

