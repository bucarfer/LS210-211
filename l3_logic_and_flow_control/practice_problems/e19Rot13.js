// Rot13 Cipher
// If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. Thus, o becomes b.
// Letter transformations preserve case. A becomes N while a becomes n.
// Don't modify characters that are not letters.

// 'a' to 'z' // char codes 97 to 122 // LOWERCASE
// 'A' to 'Z' // char codes 65 to 90 // UPPERCASE

function rot13(string) {
  const LOWERCASE_A = 'a'.charCodeAt(0);;
  const LOWERCASE_Z = 'z'.charCodeAt(0);
  const UPPERCASE_A = 'A'.charCodeAt(0);
  const UPPERCASE_Z = 'Z'.charCodeAt(0);
  const ROTATE13 = 13;
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    let newCharCode = string.charCodeAt(index);

    //LOWERCASE rotation
    if (newCharCode >= LOWERCASE_A && newCharCode <= LOWERCASE_Z){
        newCharCode += ROTATE13;
        if (newCharCode > LOWERCASE_Z) { // above lower chars
            newCharCode = newCharCode - LOWERCASE_Z + LOWERCASE_A - 1;
        }
    }

    //UPPERCASE rotation
    else if (newCharCode >= UPPERCASE_A && newCharCode <= UPPERCASE_Z) {
        newCharCode += ROTATE13;
        if (newCharCode > UPPERCASE_Z) { // above upper chars
            newCharCode = newCharCode - UPPERCASE_Z + UPPERCASE_A - 1;
        }
    }

    let newChar = String.fromCharCode(newCharCode);
    newString += newChar;
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
