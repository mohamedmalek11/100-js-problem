// convert challenge name to file name

function convertNameToFileName(num,text) {
  return num + "_" + text.toLowerCase().split(" ").join("_") + ".js"
}
console.log(
  convertNameToFileName(14 , "To square(root) or not to square(root)")
);
