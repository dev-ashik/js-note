// The toString() method return a number as a string

let a = 124;
let b = a.toString();
// console.log(typeof b);

// toExponential() returns a string, with a number rounded and written using exponential notation.A parameter defines the number of characters behind the decimal point.

let c = 7.876;
let d = c.toExponential(2);
// console.log(d)
let e = c.toExponential(4);
// console.log(e)


// toFixed() returns a string, with the number written with a specified number of decimals. toFixed(2) is perfect for working with money.
let f = 5.3434;
let g = f.toFixed(2);  // 5.34
let h = f.toFixed(3);  // 5.343
// console.log(g);
// console.log(h);
// console.log(typeof g);  // string


// toPrecision() returns a string, with a number written with a specified length
let i = 6.8765;
let j = i.toPrecision();  // 6.8765
let k = i.toPrecision(3);  // 6.88
// console.log(j)
// console.log(k)
// console.log(typeof k)  // string



// valueOf() returns a number as a number. There is no reason to use it in your code.
let l = 234;
let m = l.valueOf(); // 234
// console.log(m); 
let n = (300+50).valueOf();  // 350
// console.log(n);


// N.B: All JavaScript data types have a valueOf() and a toString() method.


// Converting Variables to Numbers
// If the number cannot be converted, NaN (Not a Number) is returned.

let o = Number(true);  // 1
let p = Number(false);  //0
let q = Number("10"); // 10
let r = Number("  10");  // 10
let s = Number("10  "); // 10
let t = Number(" 10  "); // 10
let u = Number("10.33"); // 10.33
let v = Number("10,33"); //Nan
let w = Number("10 33"); //Nan
let x = Number("John"); //Nan

// console.log(o, typeof o);
// console.log(p, typeof p);
// console.log(q, typeof q);
// console.log(r, typeof r);
// console.log(s, typeof s);
// console.log(t, typeof t);
// console.log(u, typeof u);
// console.log(v, typeof v);
// console.log(w, typeof w);
// console.log(x, typeof x);


// The Number() Method Used on Dates
// The Number() method returns the number of milliseconds since 1.1.1970. 

let y = Number(new Date("1970-01-01"));
let z = Number(new Date("1970-01-02"));
// console.log(y);
// console.log(z);


// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
 
let aa = parseInt("-10"); // -10
let ab = parseInt("-10.33"); // -10
let ac = parseInt("10"); // 10
let ad = parseInt("10.33"); // 10
let ae = parseInt("10 20 30"); // 10
let af = parseInt("10 years"); // 10
let ag = parseInt("years 10"); // Nan

// console.log(aa, typeof aa);
// console.log(ab, typeof ab);
// console.log(ac, typeof ac);
// console.log(ad, typeof ad);
// console.log(ae, typeof ae);
// console.log(af, typeof af);
// console.log(ag, typeof ag);  


// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned

let ba = parseFloat("10"); // 10
let bb = parseFloat("10.33"); // 10.33
let bc = parseFloat("10 20 30"); // 10
let bd = parseFloat("10 years"); // 10
let be = parseFloat("years 10"); // Nan

// console.log(ba, typeof ba);
// console.log(bb, typeof bb);
// console.log(bc, typeof bc);
// console.log(bd, typeof bd);
// console.log(be, typeof be);



// Number Properties

let maxValue = Number.MAX_VALUE; // 1.7976931348623157e+308
// console.log("maxValue", maxValue);

let minValue = Number.MIN_VALUE; // 5e-324
// console.log("minValue", minValue);

let positiveInfinity = Number.POSITIVE_INFINITY; // Infinity
// console.log("positiveInfinity", positiveInfinity);

let negativeInfinity = Number.NEGATIVE_INFINITY; // -Infinity
// console.log("negativeInfinity", negativeInfinity);



// https://www.w3schools.com/jsref/jsref_obj_number.asp