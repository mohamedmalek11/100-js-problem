// Sum all the numbers of a given arrayay ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// 1 - first solution
function sumWithOutHighest(array) {
  if (array == null) return 0;
  return array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((acc, current) => acc + current,0);
}

// 2 - second solution
// function sumWithOutHighest(array) {
//   if (array == null) return 0;
//   total = 0;
//   newArray = array.sort((a, b) => a - b).slice(1, array.length - 1);
//   for (i = 1; i <= newArray.length; i++) {
//     total += array[i];
//   }
//   return total;
// }

console.log(sumWithOutHighest([2, 1, 7, 2, 9]));
