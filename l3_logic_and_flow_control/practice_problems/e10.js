// Goldbach Numbers
// Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.

// Your checkGoldbach function may call the isPrime function you wrote for a previous practice problem

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let div = 2; div < number; div++) {
        if (number % div === 0) {
            return false;
        }
    }

    return true;
};

function checkGoldbach(expectedSum) {
    if (expectedSum < 4 || expectedSum % 2 === 1) {
        console.log(null);
        return;
    }

    for (let num1 = 2; num1 <= expectedSum / 2; num1 += 1) {
      let num2 = expectedSum - num1;

      if (isPrime(num1) && isPrime(num2)) {
          console.log(num1, num2)
      }
    }
};

// Examples

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53