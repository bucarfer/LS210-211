// 1. Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
};

// 2. Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

const pop = arr => {
    console.log(arr[arr.length - 1]);
    arr.length = arr.length - 1;
}

let count = [1, 2, 3];
pop(count);             // 3
console.log(count);                  // [ 1, 2 ]

// 3. Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array. You will need a for loop for this problem.

const unshift = (arr, val) => {
    let arrCopy = arr.slice();
    let originalLength = arr.length;

    for (ix = 0; ix < originalLength; ix++) {
        arr[ix + 1] = arrCopy[ix];
    }
    arr[0] = val;

    return arr.length
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// LS solution
let unshift = function(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
};

// 4. Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

function shift(arr) {
    let first = arr[0];

    if (arr.length === 0) {
        return undefined;
    }

    for (ix = 0; ix < arr.length - 1; ix++) {
        arr[ix] = arr[ix + 1];
    }

    arr.length = arr.length - 1;
    return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]