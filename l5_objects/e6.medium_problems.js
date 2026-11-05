// not solved correctly: 1, 5 (counter with hoisting), 10

//4, my solution

// for each col:
//   create innerArr
//   for each row:
//     push value from that column
//   push innerArr into result

function getSelectedColumns(numbers, cols) {
  let result = [];

  for (let i = 0; i < cols.length; i += 1) {
    let innerArr = [];
    for (let j = 0; j < numbers.length; j += 1) {
      innerArr.push(numbers[j][cols[i]]);
    }

    result.push(innerArr);
  }

  return result;
}

//4, LS solution changes less lines
// Possible Solution

// for each row:
//   for each selected column:
//     if this result column doesn't exist yet, create it
//     place value into result column at row index

function getSelectedColumns(numbers, cols) {
  const result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}