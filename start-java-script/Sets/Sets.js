/*
 A javascript set is a collection of unique values each value can only occur once in a Set.


 ==> Essential Set Methods
    Method  |	  Description
    ______________________________________________________
    new Set()	| Creates a new Set
    add()	    | Adds a new element to the Set
    delete()	| Removes an element from a Set
    has()	    | Returns true if a value exists in the Set
    forEach()	| Invokes a callback for each element in the Set
    values()	| Returns an iterator with all the values in a Set
    Property	| Description
    size	    | Returns the number of elements in a Set


*/


// Create a Set

const numbers = new Set([1, 4, 5, 6]);
numbers.add(10);

const a = 100;
numbers.add(a);

// If you add equal elements, only the first will be saved.
numbers.add(7);
numbers.add(7);

// console.log(numbers);


            // values()
// The values() method returns a new iterator object containing all the values in a Set.
const res = numbers.values();
// console.log(res);

for (const x of res){
    // console.log(x);
}

