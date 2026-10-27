// Multiples of 3 and 5
// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

function multipleOfThreeAndFive() {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log(String(num) + '!'); // alternative with interpolation `${num}!`
        } else if (num % 3 === 1 || num % 5 === 0) {
            console.log(num);
        }
    }
}

multipleOfThreeAndFive()