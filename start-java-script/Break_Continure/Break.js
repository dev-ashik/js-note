// The break statement "jumps out" of a loop.

for(let i=0; i<5; i++) {
    if(i===3){
        break;
    }
    console.log(i);
}


/*
The break statement, without a label reference, can only be used to jump out of a loop or a switch.

With a label reference, the break statement can be used to jump out of any code block:
*/

// read later about "label"