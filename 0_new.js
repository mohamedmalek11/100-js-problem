import fs from "fs";
import path from "path";

// convert challenge name to file name for automate naming
function convertNameToFileName(num, text) {
  return num + "_" + text.toLowerCase().split(" ").join("_") + ".js";
}

const outputPath = path.join(convertNameToFileName("2222", "my own problem"));
fs.writeFileSync(outputPath, "");

console.log("✅ New problem created & saved to:", outputPath);

