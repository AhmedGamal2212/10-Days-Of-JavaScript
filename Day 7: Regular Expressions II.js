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
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    // ^ => ensures that the match begins from the first character of the input
    // [] => represents a characterset consists of the letters [M, D, E]
    // r* => ensures that the character from the characterset is followed by
    //      zero or more 'r' letters
    // s* => ensures that the character from the characterset and the 'r' 
    //     character (if found) are followed by one or more 's' characters
    // \. => ensures that the previous characters are followed by a period
    // [] => represents a characterset consists of two classes (lowercase and
    //       uppercase letters)
    // + => ensures that exist one or more characters after the title
    // $ => ensures that the previous character/s found in the last of the string
    
    const re = /^[MDE]r*s*\.[a-zA-Z]+$/
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}