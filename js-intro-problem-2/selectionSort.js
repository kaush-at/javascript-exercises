const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let selected;
    for (let j = i + 1; j < array.length; j++) {
      if (smallest > array[j]) {
        smallest = array[j];
        selected = j;
      }
    }

    array[selected] = array[i];
    array[i] = smallest;
  }
  return numbers;
}

console.log(selectionSort(numbers));
