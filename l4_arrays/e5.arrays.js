// 3. Array Concat Part 1
// In this exercise, you will learn more about Arrays by implementing your own version of the Array.prototype.concat method. Write a function that returns a new array composed of all values from the first array argument and the second array or value argument. Take note of the following specifications when writing your concat function.

// The first argument will always be an array.
// The second argument can be either an array or another value.
// The function should return a new array.
// The elements in the new array should be in the same order as they appear in the arguments.
// The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
// The function should copy the values of primitives (e.g., strings, numbers, and booleans).

function concat(array1, secondArgument) {
  let newArr = array1.slice();

  if (Array.isArray(secondArgument)) {
    for (let x = 0; x < secondArgument.length; x++) {
        newArr.push(secondArgument[x]);
    }
  } else {
    newArr.push(secondArgument);
  }

  return newArr;
}

// 4. Array Concat Part 2
// The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.

function concat(array1, secondArgument, thirdArg) {
  let newArr = array1.slice();

  if (Array.isArray(secondArgument)) {
    for (let x = 0; x < secondArgument.length; x++) {
        newArr.push(secondArgument[x]);
    }
  } else {
    newArr.push(secondArgument);
  }

  if (Array.isArray(thirdArg)) {
    for (let x = 0; x < thirdArg.length; x++) {
        newArr.push(thirdArg[x]);
    }
  } else {
    newArr.push(thirdArg);
  }

  return newArr;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                     // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                // [2, 3, "four"]

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

// 5. Array Pop and Push
// In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push. The pop method removes the last element from an array and returns that element. If pop is called on an empty array, it returns undefined. The push method, on the other hand, adds one or more elements to the end of an array and returns the new length of the array.

function pop(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let lastVal = arr[arr.length - 1];
    arr.length = arr.length - 1;

    return lastVal;
}


const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

function push(arr, ...args) {
  const length = args.length;

  for (let ix = 0; ix < length; ix++) {
    arr[arr.length] = args[ix];
  }

  return arr.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0

// 6. Array and String Reverse
// In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(inputForReversal) {
  let string = '';
  let arr = [];

  if (Array.isArray(inputForReversal)) {
    for (x = inputForReversal.length - 1; x >= 0; x--) {
        arr.push(inputForReversal[x]);
    }

    return arr;
  } else {
    for (x = inputForReversal.length - 1; x >= 0; x--) {
        string += inputForReversal[x];
    }

    return string;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]

// 7. Array Shift and Unshift
// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

function shift(arr) {
    if (arr.length == 0) {
        return undefined
    }

    let firstVal = arr[0]

    for (i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr.length = arr.length - 1;

    return firstVal;
}

function unshift(arr, ...args) {
  for (i = 0; i < args.length; i++) {
    arr.splice(i, 0, args[i]);
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]

// *** HARDER 8. Array Slice and Splice
// In this exercise, you will implement your own versions of the Array.prototype.slice and Array.prototype.splice methods according to the following specifications.

// The slice function takes three arguments: an array, and two integers representing a begin and an end index. The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.

// The splice function changes the contents of an array by deleting existing elements and/or adding new elements. The function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. The function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.

// Additional specifications:

// slice:

// The values of begin and end will always be integers greater than or equal to 0.
// If the value of begin or end is greater than the length of the array, set it to equal the length.
// splice:

// The values of start and deleteCount will always be integers greater than or equal to 0.
// If the value of start is greater than the length of the array, set it to equal the length.
// If the value of deleteCount is greater than the number of elements from start up to the end of the array, set deleteCount to the difference between the array's length and start.
// Takes optional arguments for elements to add to the array; denoted by the rest parameter ...args. If no elements to add are provided, splice only removes elements from the array.

function slice(array, begin, end) {
  let newAr = [];
  if (begin > array.length) {
    begin = array.length
  }
  if (end > array.length) {
    end = array.length
  }

  for(let i = begin; i < end; i++) {
    newAr.push(array[i]);
  }

  return newAr;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

// HARD TO WRITE SPLICE!!
function splice(array, start, deleteCount, ...args) {
  let arrayCopy = array.slice();

  if (start > array.length) {
    start = array.length;
  }
  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  for (let i = 0; i < args.length; i++) {
    array[start + i] = args[i];
  }

  let copyEndCount = arrayCopy.length - (start + deleteCount);

  for (let i = 0; i < copyEndCount; i++) {
    array[start + args.length + i] = arrayCopy[start + deleteCount + i];
  }

  array.length = arrayCopy.length + args.length - deleteCount;

  return arrayCopy.slice(start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]

// exercise 10. create a function that returns true if both arrays have the same values even if the order is different.

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let sortedArray1 = array1.slice().sort();
  let sortedArray2 = array2.slice().sort();

  for (let i = 0; i < array1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
        return false;
    }
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
areArraysEqual([1, '1'], ['1', 1]);                    // true