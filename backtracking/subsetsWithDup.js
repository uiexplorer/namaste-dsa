/**
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 */

function subsetsWithDup(nums) {
  const result = [];
  nums = nums.sort();
  const backtrack = (path, start) => {
    result.push([...path]);
    for (let index = start; index < nums.length; index++) {
      if (index > start && nums[index] === nums[index - 1]) {
        continue;
      }
      path.push(nums[index]);
      backtrack(path, index + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return result;
}

console.log(subsetsWithDup([1, 2, 3, 2])); // [[], [ 3 ], [ 3, 2 ], [ 3, 2, 2 ], [ 3, 2, 2, 1 ], [ 3, 2, 1 ], [ 3, 1 ], [ 2 ], [ 2, 2 ], [ 2, 2, 1 ], [ 2, 1 ], [ 1 ]]
console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[], [0]]
