// sort() // asending order

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();  // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// console.log(fruits);

/*
reversing array and descending order

*/

fruits.reverse();
// console.log(fruits);


/*
Numeric sort
if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
*/

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b});
// console.log(points);

// descending order
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a, b){ return b - a});
// console.log(points2);



/*
Sorting an Array in Random order

*/

const points3 = [40, 100, 1, 5, 25, 10];
points3.sort(function(a, b){ return 0.5 - Math.random()});
// console.log(points3);


/*
The Fisher Yates Method
The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!
*/

const points4 = [40, 100, 1, 5, 25, 10];

for (let i = points4.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points4[i]
    points4[i] = points4[j]
    points4[j] = k
  }

// console.log(points4);



// hight and lowest number in an array

const points5 = [40, 100, 1, 5, 25, 10];
let maxNumber = Math.max.apply(null, points5); // 100
// console.log(maxNumber);

let minNumber = Math.min.apply(null, points5); // 1
// console.log(minNumber);

// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).



// Sorting Object Arrays
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

cars.sort(function(a, b){return a.year - b.year});
// console.log(cars);

// [
//     { type: 'Saab', year: 2001 },
//     { type: 'BMW', year: 2010 },
//     { type: 'Volvo', year: 2016 }
//   ]








