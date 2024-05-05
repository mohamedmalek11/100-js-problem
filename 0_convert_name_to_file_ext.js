// convert challenge name to file name

function convertNameToFileName(num,text) {
  return num + "_" + text.toLowerCase().split(" ").join("_") + ".js"
}
console.log(
  convertNameToFileName(7 , "Opposite number")
);
