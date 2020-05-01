const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;

      for (let j = i; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return numbers;
}

insertionSort(numbers);
console.log(numbers);
// insertionSort2(numbers);
// console.log(numbers);
