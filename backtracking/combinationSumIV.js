/**
 * Given an array of distinct integers nums and a target integer target,
 * return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 */

function combinationSum(nums, target) {
  const memo = new Array(target + 1).fill(-1);
  const backtrack = (remainingSum) => {
    if (remainingSum === 0) {
      return 1;
    }
    if (remainingSum < 0) {
      return 0;
    }
    if (memo[remainingSum] !== -1) {
      return memo[remainingSum];
    }
    let result = 0;
    for (const num of nums) {
      result += backtrack(remainingSum - num);
    }
    memo[remainingSum] = result;
    return result;
  };
  return backtrack(target);
}

// console.log(combinationSum([1, 2, 3], 4)); // 7
// console.log(combinationSum([9], 3)); // []
// console.log(combinationSum([3, 1, 2, 4], 4)); // [[ 3, 1 ], [ 1, 3 ], [ 1, 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ], [ 2, 2 ]]
// console.log(combinationSum([4, 2, 1], 32)); // []
console.log(combinationSum([1, 2, 3], 32)); // []
