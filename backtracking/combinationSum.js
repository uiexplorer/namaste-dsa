/**
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
 */

function combinationSum(candidates, target) {
  const result = [];
  const backtrack = (remainingSum, path, start) => {
    if (remainingSum === 0) {
      result.push([...path]);
    } else if (remainingSum < 0) {
      return;
    } else {
      for (let index = start; index < candidates.length; index++) {
        const element = candidates[index];
        path.push(element);
        backtrack(remainingSum - element, path, index);
        path.pop();
      }
    }
  };
  backtrack(target, [], 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
