            // Iterating Over a String

const name = "china";
for(const x of name) {
    // console.log(x);
}


            // Iterating Over an Array
const numbers = [3, 4, 5, 6, 7];
for (const x of numbers) {
    // console.log(x);
}


            // Iterating Over a Set
const latters = new Set(['a', 'b', 'c']);
for(const x of latters){
    // console.log(x);
}


            // Iterating Over a Map
const frouits = new Map([
    ['apples', 500],
    ["bananas", 300],
    ["oranges", 200]
])

for (const x of frouits) {
    console.log(x);
}