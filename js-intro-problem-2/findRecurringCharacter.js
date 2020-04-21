// Find the first recurring character

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  //console.log(map);
  return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
