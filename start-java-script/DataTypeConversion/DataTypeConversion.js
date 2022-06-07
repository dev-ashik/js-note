/*
1. converting String to Numbers
2. Converting Numbers to Strings
3. Converting Numbers to Dates
4. Converting Dates to Numbers
5. Converting Booleans to Numbers
6. Converting Numbers to Booleans


*/


            // Converting String to Numbers
// The global method Number() can convert strings to numbers.

const a = Number("45.64");
// console.log(a, typeof a);

const b = Number(" ");        // returns 0
const c = Number("");         // returns 0
const d = Number("hello");    // returns NaN
// console.log(b, c, d);


let e = "5";     // e is a string
let f = +e;      // f is a number
// console.log(f, typeof f);




            // Converting Numbers to Strings
const g = String(234);
// console.log(g, typeof g);

const h = String(10 + 50);
// console.log(h, typeof h);

// The Number method toString() does the same.
const i = (369).toString();
// console.log(i, typeof i);


            // Converting Dates to Numbers
const date = new Date();
const k = Number(date);      // 1654566266861
// console.log(k, typeof k);

// The date method getTime() does the same.
const l = date.getTime();   // 1654566266861
// console.log(l, typeof l);


            // Converting Dates to Strings
const m = String(date);     // Tue Jun 07 2022 09:48:09 GMT+0800 (China Standard Time)
// console.log(m, typeof m);

const n = date.toString();   // Tue Jun 07 2022 09:48:56 GMT+0800 (China Standard Time)
// console.log(n, typeof n);



            // Converting Booleans to Numbers
const o = true;
const p = false;

const q = Number(o);        // 1
// console.log(q, typeof q);

const r = Number(p);        // 0
// console.log(r, typeof r);


            // Converting Booleans to strings
const s = String(o);  //  true string
// console.log(s, typeof s);

const t = p.toString();    // false string
// console.log(t, typeof t);




                // Automatic Type Conversion