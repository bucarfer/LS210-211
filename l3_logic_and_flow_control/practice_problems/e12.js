// Trimming Spaces
// Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

function trimLeft(string) {
    let newString = '';
    let copyMode = false;

    for (let index = 0; index < string.length; index++) {
        if (string[index] !== ' ') {
            copyMode = true;
        }

        if (copyMode) {
            newString += string[index];
        }
    }

    return newString;
}

function trimRight(string) {
  let newString = '';
  let copyMode = false;

  for (let index = string.length - 1; index >= 0; index--) {
    if (string[index] !== ' ') {
        copyMode = true;
    }

    if (copyMode) {
        newString = string[index] + newString;
    }
  }

  return newString;
}

function trim(string) {
    let trimmed = trimLeft(string);
    trimmed = trimRight(trimmed);

    return trimmed;
}

// Example:
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""