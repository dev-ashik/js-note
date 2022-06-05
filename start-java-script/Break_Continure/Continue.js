// The continue statement "jumps over" one iteration in the loop.

for(let i=1; i<=5; i++) {
    if(i===3){
        continue;
    }
    console.log(i);
}



// The continue statement (with or without a label reference) can only be used to skip one loop iteration.

// read later about "label"