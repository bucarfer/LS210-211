// Prime Check
// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.
// You may assume that the input is always a non-negative integer.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let divisor = num - 1; divisor > 1; divisor--) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1))  // false
console.log(isPrime(2))  // true
console.log(isPrime(3))  // true
console.log(isPrime(43))  // true
console.log(isPrime(55))  // false
console.log(isPrime(0))  // false

// LS solution

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}