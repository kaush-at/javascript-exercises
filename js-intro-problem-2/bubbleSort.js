const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let sorted = true;
  while (sorted) {
    sorted = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i + 1];
        numbers[i + 1] = numbers[i];
        numbers[i] = temp;
        sorted = true;
      }
    }
  }
  return numbers;
}

// we can do this same thing using two for loops
function bubbleSort2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);
bubbleSort2(numbers);
console.log(numbers);
