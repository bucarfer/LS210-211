// Substring (1)
// Write a function that returns a substring of a string based on a starting index and length.

function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let substring = '';

  for (let index = start; length > 0; length--) {

      if (string[index] === undefined) {
        break;
      }

      substring += string[index];
      index += 1;
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""

// LS solution to not change arguments values
function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let newString = '';
  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}