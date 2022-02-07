'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let cons = [], vow = [];
    
    const vowels = ['a', 'u', 'o', 'i', 'e'];
    for(let i of s){
        if(vowels.includes(i)){
            vow.push(i);
        }else{
            cons.push(i);
        }
    }
    for(let i of vow)
        console.log(i);
    for(let i of cons)
        console.log(i);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}