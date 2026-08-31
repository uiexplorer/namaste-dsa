/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

function subsets(nums) {
  const result = [];

  const backtracking = (path, start) => {
    result.push([...path]);
    for (let index = start; index < nums.length; index++) {
      const element = nums[index];
      path.push(element);
      backtracking(path, index + 1);
      path.pop();
    }
  };
  backtracking([], 0);

  return result;
}

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[], [0]]
