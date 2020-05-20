// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = "";
  // loop through the string and create an object
  //   for (let char of str) {
  //     if (!chars[char]) {
  //       chars[char] = 1;
  //     } else {
  //       chars[char]++;
  //     }
  //   }

  // using truthy and falsy value
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));