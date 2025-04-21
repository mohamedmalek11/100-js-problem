// convert challenge name to file name for automate naming

function convertNameToFileName(num, text) {
  return num + "_" + text.toLowerCase().split(" ").join("_") + ".js";
}
console.log(convertNameToFileName("101", "my own problem"));
