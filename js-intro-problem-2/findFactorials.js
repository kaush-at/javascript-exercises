// factorial -> 5!=5*4*3*2*1

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
console.log(findFactorialIteratively1(5));
