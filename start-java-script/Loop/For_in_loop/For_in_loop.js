/*
 The JavaScript for in statement loops through the properties of an Object

==> Syntax
for (key in object) {
  // code block to be executed
}

*/


const product = {name: "Table", price: "20$", color: "black"}

for (let i in product){
    // console.log(i, ": ", product[i]);  
                // name :  Table
                // price :  20$
                // color :  black
}


    // ==> for in over Array

const friends = ["Anik", "Najmul", "Siam", "Rabby"];

for (let i in friends) {
    // console.log(friends[i]);
}
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.



