// Greatest Common Divisor
// Create a function that computes the Greatest Common Divisor of two positive integers.

function gcd(num1, num2) {
  let start_div = num1

  if (num2 < num1) {
    start_div = num2
  }

  for (start_div; start_div > 0; start_div--) {
    if (num1 % start_div === 0 && num2 % start_div === 0) {
      return start_div
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));   // 1

// cleaner version
let startDiv = Math.min(num1, num2);

// LS solution:
function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

// same for arrays

function gcd2(num1, num2) {
  let startDiv = Math.min(num1, num2);

  for (startDiv; startDiv > 0; startDiv--) {
    if (num1 % startDiv === 0 && num2 % startDiv === 0) {
      return startDiv;
    }
  }
}

function gcd(params) {
    while (params.length > 1) {
      params = [gcd2(params[0], params[1])].concat(params.slice(2));
    }

    return params[0]
  }

console.log(gcd([12, 4, 8])); // 4