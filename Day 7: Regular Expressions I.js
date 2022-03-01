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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    // ^ => ensures that the match begins from the first character of the input
    // () => captures/groups the match of the expression inside it
    // [] => represents a characterset consists of the vowels 
    // . => a wild that matches any character
    // + => ensures that the character before it occurrences one or more times
    // \1 => backreference to the first captured group ()
    //$ => ensures that the backreference before it found in the end of the string
    const re = /^([aeiou]).+\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}