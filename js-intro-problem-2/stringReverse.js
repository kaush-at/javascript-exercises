// Create a function that reverse a string:
// ex/ "Hi my name is Jhon" should be
// "nohJ si eman ym iH"

// method 1
function reverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

// method 2
function reverse2(str) {
  const newArr = str.split("");
  const revArr = [];
  for (let i = newArr.length - 1; i >= 0; i--) {
    revArr.push(newArr[i]);
  }
  return revArr.join("");
}

// method3
function reverse3(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "That is not a good string ";
  }
  return str.split("").reverse().join("");
}

// method4 - using arrow function
const reverse4 = (str) => str.split("").reverse().join("");

console.log(reverse("Hi my name is Jhon"));
console.log(reverse2("Hi my name is Jhon"));
console.log(reverse3("Hi my name is Jhon"));
console.log(reverse3());
console.log(reverse4("Hi my name is Jhon"));
//console.log(reverse4()); -cannot validate we have to create a function for that
