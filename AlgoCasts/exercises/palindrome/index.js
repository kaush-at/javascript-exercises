// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // this is not the best solution say it to him and comeup with other solutions
  return str.split("").every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

//method 1
// function palindrome(str) {
//   let revStr = "";
//   for (char of str) {
//     revStr = char + revStr;
//   }
//   if (revStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

//2nd method
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// }
