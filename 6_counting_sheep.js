// Consider an array/list of sheep where some sheep may be missing from their place.
//  We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
  var counter = 0;
  for (i = 0; i <= sheep.length; i++) {
    if (sheep[i] === true) {
      counter += 1;
    }
  }
  return counter;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
