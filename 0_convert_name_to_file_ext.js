// convert challenge name to file name

function convertNameToFileName(num,text) {
  return num + "_" + text.toLowerCase().split(" ").join("_") + ".js"
}
console.log(
  convertNameToFileName(5 , "Convert number to reversed array of digits")
);
