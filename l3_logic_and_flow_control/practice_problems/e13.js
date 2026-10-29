// Splitting a String
// Write a function that takes two arguments:

// a string to be split
// a delimiter character
// The function logs the split strings to the console, as shown below:

// You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

function splitString(string, delimiter) {
    let substring = '';

    if (delimiter === undefined) {
        console.log('ERROR: No delimiter');
        return;
    }

    else if (delimiter === '') {
        for (let index = 0; index < string.length; index++) {
            console.log(string[index]);
        }

        return;
    }

    else {
        for (let index = 0; index < string.length; index++) {
            if (string[index] === delimiter) {
                console.log(substring);
                substring = '';
            } else {
                substring += string[index]
            }
        }
    }

    if (substring) {
        console.log(substring);
    }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello