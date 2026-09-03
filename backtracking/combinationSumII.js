/**
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 */

function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  const backtrack = (remainingSum, path, start) => {
    if (remainingSum < 0) {
      return;
    } else if (remainingSum === 0) {
      result.push([...path]);
    } else {
      for (let index = start; index < candidates.length && candidates[index] <= remainingSum; index++) {
        if (index > start && candidates[index] === candidates[index - 1]) {
          continue;
        }
        const element = candidates[index];
        path.push(element);
        backtrack(remainingSum - element, path, index + 1);
        path.pop();
      }
    }
  };
  backtrack(target, [], 0);
  return result;
}

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8)); // [ [1, 1, 6], [1, 2, 5], [1, 7], [2, 6] ]
console.log(combinationSum([2, 5, 2, 1, 2], 5)); // [ [1,2,2], [5] ]
