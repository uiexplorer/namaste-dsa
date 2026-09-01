/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 */

function combinations(n, k) {
  const result = [];
  const backtrack = (path, start) => {
    if (path.length === k) {
      result.push([...path]);
    } else {
      for (let num = start; num <= n; num++) {
        path.push(num);
        backtrack(path, num + 1);
        path.pop();
      }
    }
  };
  backtrack([], 1);
  return result;
}

console.log(combinations(4, 2));  // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combinations(1, 1));  // [[1]]
