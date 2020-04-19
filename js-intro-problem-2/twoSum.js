// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     Example:

// Given nums = [2, 7, 11, 15], target = 9,

//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// naive approach
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

// Good approach
const twoSum2 = function (nums, target) {
  let mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      return true;
    }
    mySet.add(target - nums[i]);
  }

  return false;
};

console.log(twoSum2([6, 4, 3, 2, 1, 7], 9));
