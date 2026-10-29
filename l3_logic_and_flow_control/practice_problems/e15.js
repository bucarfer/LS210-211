// String StartsWith
// Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

function startsWith(string, searchString) {
    for (let index = 0; index < searchString.length; index++) {
        if (string[index] !== searchString[index]) {
            return false;
        }
    }

    return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));           // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));           // true
console.log(startsWith(str, 'put'));           // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));