
// 1. Write a function indexOf that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or -1 if the value is not present.

function indexOf(arr, val) {
    for (ix = 0; ix < arr.length; ix++) {
        if (arr[ix] === val) {
            return ix;
        }
    }

    return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

// 2. Write a function lastIndexOf that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or -1 if the value is not present.

function lastIndexOf(arr, val) {
    for (ix = arr.length - 1; ix >= 0; ix--) {
        if (arr[ix] === val) {
            return ix;
        }
    }

    return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1