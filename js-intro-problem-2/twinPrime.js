function twinPrime(min, max) {
  const twinArr = [];
  for (let i = min; i < max; i++) {
    if (isPrime(i) && isPrime(i + 2) && i + 2 <= max) {
      console.log("i " + i + " i +2 " + (i + 2));
      twinArr.push([i, i + 2]);
    }
  }
  return twinArr;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(twinPrime(0, 30));
