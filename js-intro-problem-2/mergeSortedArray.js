//given sorted two arrays needs to merge into one single sorted array
//mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
// result should be => [ 0, 3, 3, 4, 4, 6, 30, 31 ]

function mergeSortedArrays(arr1, arr2) {
  const mergedArry = [];
  let i = 0;
  let j = 0;
  let array1Item = arr1[i];
  let array2Item = arr2[j];

  while (array1Item || array2Item) {
    if (array1Item === undefined || array1Item > array2Item) {
      mergedArry.push(array2Item);
      j++;
      array2Item = arr2[j];
    } else {
      mergedArry.push(array1Item);
      i++;
      array1Item = arr1[i];
    }
  }
  return mergedArry;
} 
console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
