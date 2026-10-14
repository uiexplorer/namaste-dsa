/**
 * Minimum Cost to Cut a Stick.
 */

function minCost(n, cuts) {
  let dp = new Map();

  let dfs = (start, end) => {
    if (start >= end) return 0;

    let key = start + "_" + end;
    if (dp.has(key)) return dp.get(key);

    let minCost = Infinity;
    for (let c of cuts) {
      if (c > start && c < end) {
        let currCost = (end - start) +
          dfs(start, c) + dfs(c, end);
        minCost = Math.min(minCost, currCost)
      }
    }

    minCost = minCost == Infinity ? 0 : minCost;

    dp.set(key, minCost);
    return minCost;
  }
  return dfs(0, n);
}

console.log(minCost(7, [1, 3, 4, 5])); // 16
console.log(minCost(9, [5, 6, 1, 4, 2])); // 22