/* 
    Loops can execute a block of code a number of times.

=> for loop syntax

    for (statement 1; statement 2; statement 3) {
    // code block to be executed
    }


*/

for (let i=0; i<5; i++){
    // console.log(i);
}


                // ==>> statment 1

// You can initiate many values in statement 1 (separated by comma).
for (let i=0, j=1, k=2; i<5; i++){
    // console.log(j);
    j++;
}

// And you can omit statement 1 (like when your values are set before the loop starts).
let k = 1;
for (; k<=5; k++){
    // console.log(k);
}


                // ==>> statment 2
/*
 Often statement 2 is used to evaluate the condition of the initial variable. This is not always the case, JavaScript doesn't care. Statement 2 is also optional.

N.B: If you omit statement 2, you must provide a break inside the loop.

*/

for (let l=0; ; l++){
    // console.log(l);
    if (l===5) break;
}


                // ==>> statment 3
/*
This is not always the case, JavaScript doesn't care, and statement 3 is optional.
Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
*/
for (let m=5; m>=1; m--){
    // console.log(m);
}


// Statement 3 can also be omitted (like when you increment your values inside the loop)

for (let n=0; n<=5; ){
    // console.log(n);
    n++;
}



            //   ==>>  Loop scope  (ver, let)

var x = 5;
for (var x=0; x < 8; x++) {

}
// console.log(x);  // result 8



let y = 10;
for (let y=0; y < 15; y++) {

}
// console.log(y);  // result 10


