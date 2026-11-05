function repeatedCharacters(string) {
  let count = {};
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (count[string[i]] !== undefined) {
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
    }
  }

  let count2 = {};

  for (let key in count) {
    if (count[key] >= 2) {
      count2[key] = count[key];
    }
  }

  return count2;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

// IMPORTANT!!; USE BRACKET NOTATION WHILE LOOPING, JS DOES CANNOT ACCESS VARIABLE VALUE WITH DOT NOTATION

count[variable] // use the value stored in variable as the key, BRACKET NOTATION
count.variable  // use the literal property name "variable", DOT NOTATION

// LS solution

function repeatedCharacters(string) {
  let result = {};
  let lowerCaseString = string.toLowerCase();

  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (result[lowerCaseString[index]] !== undefined) {
      result[lowerCaseString[index]] += 1;
    } else {
      result[lowerCaseString[index]] = 1;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}