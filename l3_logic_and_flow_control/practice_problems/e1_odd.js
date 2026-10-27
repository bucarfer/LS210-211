
// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

function logOddNumbers(maxNum){
  for (let num = 1; num <= maxNum; num++) {
    if (num % 2 === 1) {
      console.log(num);
    }
  }
}

logOddNumbers(19);