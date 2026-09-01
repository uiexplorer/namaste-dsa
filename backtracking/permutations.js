/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 */

function permutations(nums) {
  const result = [];
  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push([...path]);
    } else {
      for (let index = 0; index < nums.length; index++) {
        if (!path.includes(nums[index])) {
          path.push(nums[index]);
          backtrack(path);
          path.pop();
        }
      }
    }
  };
  backtrack([]);
  return result;
}

console.log(permutations([4, 8, 10])); // [[4, 8, 10], [4, 10, 8], [8, 4, 10], [8, 10, 4], [10, 4, 8], [10, 8, 4]]
console.log(permutations([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permutations([0, 1])); // [[0, 1], [1, 0]]
console.log(permutations([1])); // [[1]]
