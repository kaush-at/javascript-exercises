// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// method 1
function reverse(str) {
  let arr = str.split("");
  let reverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    reverseArr.unshift(arr[i]);
  }
  return reverseArr.join("");
}

module.exports = reverse;

// method 2
// function reverse(str) {
//   let reverseArr = [];   => me array eka nathuwa string concat karala karanna puluwan
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseArr.push(str[i]);
//   }
//   return reverseArr.join("");
// }

// for loop eka es2015 syntax use karnna
// for(let charactor of str){
//reverse = charactor + reverse;
//}

//method 3
// function reverse(str) {
//   let reverseArr = str.split("");
//   return reverseArr.reverse().join("");
// }
// or
// return str.split("").reverse().join("")

//method4

//return str.split("").reduce((reversed, char)=>{
// return char + reversed;
//},'')
// interviwer wa impress karanna puluwan pahala widiyata liwwot
//return str.split("").reduce((reversed, char)=> char + reversed,'')
