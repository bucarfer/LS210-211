function missing(arr) {
    let newArr = [];
    for (x = 0; x < arr.length - 1; x++) {
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