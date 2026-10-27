// XOR
// For boolean values, the || operator returns true if either or both of its operands are true, false if both operands are false. The && operator, on the other hand, returns true if both of its operands are true, and false if either operand is false. This works great until you need only one of two conditions to be true, the so-called "exclusive or", or XOR.

// Write a function named isXor that takes two arguments, and returns true if exactly one argument is truthy, false otherwise. Your function should work with the boolean values of true and false, but also any JavaScript values based on their "truthiness".

function isXor(arg1, arg2) {
  if (arg1) {
    if (!arg2) {
    return true;
    }
  } else if (arg2) {
    return true;
  }

  return false;
}

console.log(isXor(false, true))
     // true
console.log(isXor(true, false))
     // true
console.log(isXor(false, false))
    // false
console.log(isXor(true, true))
    // false

console.log(isXor(false, 3))
     // true
console.log(isXor('a', undefined))
  // true
console.log(isXor(null, ''))
    // false
console.log(isXor('2', 23))
    // false

// LS solution
function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }

  if (!value1 && value2) {
    return true;
  }

  return false;
}

// Further exploration, more concise solution:
function isXor(value1, value2) {
    return !!(value1 && !value2 || !value1 && value2);
}

// return !!((value1 && !value2) || (value2 && !value1)); parentheses not needed
// && has higher operator presedence than or

// !!) coerce the return value to a boolean value (true or false). By default, logical operators return the value of the values of the operands, not a boolean value.