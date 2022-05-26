/* A javaScript Boolean represents one ov two values: true or false

Evrything with a value is true
    100, 3.5, -23, "hello", "false"

Evrything Without a value is False
    0, flase

*/

const a = Boolean(100);       // true
const b = Boolean(3.5);       // true
const c = Boolean(-23);       // true
const d = Boolean("hi");      // true
const e = Boolean("false");   // true
const f = Boolean(7 + 8 -3);  // true
const g = Boolean(true);      // true

// console.log(a, b, c, d, e, f);

const p = false;            // false
const q = Boolean(0);       //  false
const r = Boolean(-0);       //  false
const s = Boolean("");     // false
let z;
const t = Boolean(z);     // undefined is false
const u = Boolean(null);     // false
const v = Boolean(NaN);     // false


console.log(p, q, r, s, t, u, v);



