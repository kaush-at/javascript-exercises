// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    let fib = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(fib);
  }
  return fibArr[n];
}

// recursive method 
function fibonacciRecursive(n) {
  // exponential time (2^n) - every additional element in the fibbonaci sequence we get an increase in function  calls
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(3));
console.log(fibonacciIterative(3));
