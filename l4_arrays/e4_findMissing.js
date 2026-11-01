// Practice Problems: Find Missing Numbers
// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

function missing(arr) {
    let newArr = [];

    for (let x = 0; x < arr.length - 1; x++) {
        let current = arr[x];

        while (arr.indexOf(current + 1) != x + 1) {
            newArr.push(current + 1);
            current++;
        }
    }

    return newArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []

// LS solution (simpler just compare the values directly since they increase one by one)

function missing(array) {
  let result = [];
  let start = array[0] + 1;
  let end = array[array.length - 1];

  for (let integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) {
      result.push(integer);
    }
  }

  return result;
}