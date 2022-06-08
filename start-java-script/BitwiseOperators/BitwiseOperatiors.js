/* 
javascript BitWise Operatiors


Operator  |   	Name           |	Description
__________________________________________________________________________________________________________
   & 	   |    AND  	       |     Sets each bit to 1 if both bits are 1
   |       |	OR 	           |     Sets each bit to 1 if one of two bits is 1
   ^       |    XOR 	       |     Sets each bit to 1 if only one of two bits is 1
   ~ 	   |    NOT 	       |     Inverts all the bits
   << 	   |    Zero fill  	   |     Shifts left by pushing zeros in from the 
           |    left shift     |     right and let the leftmost bits fall off.
           |                   | 
   >> 	   |      Signed  	   |     Shifts right by pushing copies of the leftmost 
           |    right shift    |     bit in from the left, and let the rightmost bits fall off
           |                   |  
   >>> 	   |    Zero fill      |     Shifts right by pushing zeros in from the left, 
           |    right shift    |     and let the rightmost bits fall off
____________________________________________________________________________________________________________




Operation |	Result  |	Same as     |  Result
  5 & 1   |   1     |  0101 & 0001  |  0001
  5 | 1   |   5 	|  0101 | 0001 	|  0101
  ~ 5 	  |   10 	|     ~0101 	|  1010
  5 << 1  |	  10 	|   0101 << 1   |  1010
  5 ^ 1   |   4 	|  0101 ^ 0001  |  0100
  5 >> 1  |	  2 	|   0101 >> 1   |  0010
  5 >>> 1 |	  2 	|   0101 >>> 1 	|  0010


*/



        // Bitwise AND (&)
let x = 5 & 1;     // returns 1
// console.log(x);

    // 5 = 0101
    // 1 = 0001
    // ___________
    // 1 = 0001  


        // Bitwise OR (|)
let y = 5 | 1;    // return 5
// console.log(y);

    // 5 = 0101
    // 1 = 0001
    // ___________
    // 5 = 0101  

    // Bitwise XOR (^)
let z = 5 ^ 1;     // return 4
// console.log(z);

    // 5 = 0101
    // 1 = 0001
    // ___________
    // 4 = 0100 


    // Bitwise NOT (~)
let a = ~5;
// console.log(a);

    //  5 = 00000000000000000000000000000101
    // ~5 = 11111111111111111111111111111010 
    // _________________________________________
    // -6
     



    // (Zero Fill) Bitwise Left Shift (<<)
//      5 = 000000000000000000000000000000101
// 5 << 1 = 000000000000000000000000000001010

let b = 5 << 1;   // 10
// console.log(b);


    // (Sign Preserving) Bitwise Right Shift (>>)
//      -5 = 11111111111111111111111111111011
// -5 >> 1 = 11111111111111111111111111111101

let c = -5 >> 1;    // returns -3
// console.log(c);


    // (Zero Fill) Right Shift (>>>)

//          5 = 00000000000000000000000000000101
//    5 >>> 1 = 00000000000000000000000000000010

let d = 5 >>> 1;   // returns 2
// console.log(d);



    // Binary Numbers

// 00000000000000000000000000000101	5 (4 + 1)

// This means that a negative number is the bitwise NOT of the number plus 1
    //  5 = 00000000000000000000000000000101

    // ~5 = 11111111111111111111111111111010
    //                                     1
    // __________________________________________
    // -5 = 11111111111111111111111111111011


