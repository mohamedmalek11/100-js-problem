import fs from "fs";
import path from "path";

const number = "32";
const name = "Transportation On Vacation";

// convert challenge name to file name for automate naming
function convertNameToFileName(num, text) {
  return num + "_" + text.toLowerCase().split(" ").join("_") + ".js";
}

const outputPath = path.join(convertNameToFileName(number, name));
fs.writeFileSync(outputPath, "");

console.log("✅ New problem created & saved to:", outputPath);
