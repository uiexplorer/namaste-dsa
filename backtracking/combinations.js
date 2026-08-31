/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 */

function combinations(n, k) {
  const result = [];
  const nums = [];
  for (let index = 1; index <= n; index++) {
    nums.push(index);
  }

  const backtracking = (path, start) => {
    if (path.length === k) {
      result.push([...path]);
    }
    for (let index = start; index < nums.length; index++) {
      path.push(nums[index]);
      backtracking(path, index + 1);
      path.pop();
    }
  };
  backtracking([], 0);
  return result;
}

console.log(combinations(4, 2));  // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combinations(1, 1));  // [[1]]
