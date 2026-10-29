// Converting Strings to Lower Case
// Write a function that returns a string converted to lowercase.

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = ''
  let char = ''

  for (let index = 0; index < string.length; index++) {
    if (string[index])
    asciiNumeric = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z') {
      asciiNumeric += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(asciiNumeric);
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"