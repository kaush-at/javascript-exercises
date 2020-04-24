//Given 2 arrays, create a function that let user knows (true/false) whether these two arrays contains any common items

//ex
// const array1 = ["a", "b", "c", "d"];
// const array2 = ["p", "a", "x"];
// should return true

// const array1 = ["a", "b", "c", "d"];
// const array2 = ["p", "q", "x"];
// should return false

function findMathingItem(arr1, arr2) {
  arr1.forEach((element) => {
    if (!(arr2.indexOf(element) === -1)) {
      return true;
    }
  });
  return false;
}

function findMathingItem1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.indexOf(arr1[i]) === -1)) {
      return true;
    }
  }
  return false;
}
console.log(findMathingItem1(array1, array2));

// --- naive approach----------
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

//-------another good approach-----

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

//----------- shortes way ----------------

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
