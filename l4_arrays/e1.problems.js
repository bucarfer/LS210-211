// 2. Create a function named rollCall that takes an array of first names as an argument and logs all the names to the console, one name per line. You should log the names in the same sequence that they appear in the array. Use a for loop to process the array.

function rollCall(arr) {
    for (ix = 0; ix < arr.length; ix++) {
        console.log(arr[ix]);
    }
}

rollCall([1, 2, 3]);

// 3. Create a function that returns the contents of the array it receives as an argument, but with the values in reversed order. Your function should use a for loop that iterates over the elements in the array from the end of the array to the beginning, and pushes each element's value to a new result array. Be sure to start your loop with the element whose index is one less than the input array's length.

function rollCall(arr) {
    let revArr = []
    for (ix = arr.length - 1; ix >= 0; ix--) {
        revArr.push(arr[ix]);
    }

    return revArr;
}

rollCall([1, 2, 3]);

// 4. Write a function that returns a string of all the values in an array with no intervening content. For example, your function should return '1a4' if the argument is [1, 'a', 4]. Use a for loop to process the array elements in sequence, and coerce each value in the array to a String before concatenating it to the result string.

function rollCall(arr) {
    let string = ''
    for (ix = 0; ix < arr.length; ix++) {
        string += arr[ix];
    }

    return string;
}

console.log(rollCall([1, 'a', 3]));