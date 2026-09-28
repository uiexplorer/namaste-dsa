/**
 * There is a robot on an m x n grid.
 * The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
 * The robot can only move either down or right at any point in time.
 * Given the two integers m and n,
 * return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 */

function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  const recursion = (x, y) => {
    if (x === 0 && y === 0) return 1;
    if (x < 0 || y < 0) return 0;
    if (dp[x][y]) return dp[x][y];
    return dp[x][y] = recursion(x - 1, y) + recursion(x, y - 1);
  };
  return recursion(m - 1, n - 1);
}

function uniquePathsIterative(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3

console.log(uniquePathsIterative(3, 7)); // 28
console.log(uniquePathsIterative(3, 2)); // 3
