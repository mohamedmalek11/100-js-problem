// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let sum = array.reduce((accumulator, num, index) => {
    return accumulator + num;
  });
  return sum / array.length;
}

console.log(findAverage([1, 2, 3, 5, 6, 7, 8]));
