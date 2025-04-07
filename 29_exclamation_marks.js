// Remove an exclamation mark from the end of a string.
//  For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(string) {
  st = string.split("");

  st.at(-1) === "!" ? st.pop() : st;
  return st.join("");
}

console.log(remove("hee"));
