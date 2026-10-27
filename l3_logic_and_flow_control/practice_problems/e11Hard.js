// Pattern Generation
// Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. For example, if nStars is 7, log the following pattern:

function generatePattern(num) {
  for (let lineNumber = 1; lineNumber <= num; lineNumber++){
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit++) {
      string += String(digit);
    }

    for (let count = lineNumber + 1; count <= num; count++) {
      string += '*';
    }

    console.log(string);
  }
}

generatePattern(7);