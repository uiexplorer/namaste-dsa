/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations.
 * The list must not contain the same combination twice, and the combinations may be returned in any order.
 */

function combinationSum(k, n) {
  const result = [];
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const backtrack = (remainingSum, path, start) => {
    if (remainingSum < 0 || path.length > k) {
      return;
    } else if (remainingSum === 0 && path.length === k) {
      result.push([...path]);
    } else {
      for (let index = start; index < candidates.length && candidates[index] <= remainingSum; index++) {
        const element = candidates[index];
        path.push(element);
        backtrack(remainingSum - element, path, index + 1);
        path.pop();
      }
    }
  };
  backtrack(n, [], 0);
  return result;
}

console.log(combinationSum(3, 7)); // [[1,2,4]]
console.log(combinationSum(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
