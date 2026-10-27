// Print multiples
// Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

// My solution
function logMultiples(num) {
    let result = [];

    for (let index = 1; num * index <= 100; index++) {
        if ((num * index) % 2 === 1){
          result.push(num * index);
        }

    }
    while (result.length > 0) {
        console.log(result.pop())
    }
}

// LS solution
function logMultiples(num) {
    for (let candidate = 100; candidate >= num; candidate -= 1) {
        if (candidate % 2 === 1 && candidate % num === 0) {
            console.log(candidate);
        }
    }
}

logMultiples(17);
logMultiples(21);

// LS solution to only check multiple numbers

function logMultiples(number) {
    let multiple = Math.floor(100 / number) * number;

    while (multiple > 0) {
        if (multiple % 2 === 1) {
            console.log(multiple);
        }

        multiple -= number
    }
}