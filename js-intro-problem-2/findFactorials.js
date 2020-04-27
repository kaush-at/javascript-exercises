// factorial -> 5!=5*4*3*2*1

//Iterative function using for loop
function findFactorialIteratively1(number) {
  let answer = 1;
  if (number <= 0) {
    return 0;
  }

  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

//Iterative function using while loop
function findFactorialIteratively2(number) {
  if (number <= 2) {
    return number;
  }
  let answer = number;
  while (number !== 1) {
    answer = answer * (number - 1);
    number--;
  }
  return answer;
}

//recursive function added
function findFactorialRecursively(number) {
  let answer = number;
  if (number - 1 <= 0) {
    return answer;
  }
  answer = number * findFactorialRecursively(number - 1);
  return answer;
}

//with some changes
function factorialsRecursively(number) {
  if (number <= 2) {
    return number;
  }
  return number * findFactorialRecursively(number - 1);
}

console.log(findFactorialIteratively1(5));
console.log(findFactorialIteratively2(5));
console.log(findFactorialRecursively(5));
console.log(factorialsRecursively(5));
