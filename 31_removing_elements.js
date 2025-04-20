// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

console.log(
  removeEveryOther([
    "q",
    "q",
    "w",
    "a",
    "j",
    "t",
    "y",
    "x",
    "z",
    "7",
    "n",
    "m",
    "l",
    "y",
    "i",
    "a",
    "i",
    "w",
    "3",
    "n",
    "o",
    "u",
    "v",
    "5",
    "s",
    "6",
    "d",
    "k",
    "p",
    "w",
    "a",
    "4",
    "6",
  ])
);
