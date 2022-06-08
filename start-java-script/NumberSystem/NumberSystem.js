// decimal to binary
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
const res = dec2bin(10);   //  returns 1010
console.log(res);


// binary to decimal
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}
const res2 = bin2dec(1010);   // returns 10
console.log(res2);