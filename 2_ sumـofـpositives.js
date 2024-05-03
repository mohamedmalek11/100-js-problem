// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  total = 0;
  arr.sort();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      total += arr[i];
    }
  }
  return total;
}

console.log(positiveSum([1, -3, 5, 9]));
