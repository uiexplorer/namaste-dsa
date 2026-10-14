/**
 * You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.
 * Return the minimum number of moves that you need to determine with certainty what the value of f is.
 */

function superEggDrop(k, n) {
  let moves = 0;
  const dp = new Array(k + 1).fill(0);
  while (dp[k] < n) {
    ++moves;
    for (let index = k; index >= 1; index--) {
      dp[index] = 1 + dp[index] + dp[index - 1];
    }
  }
  return moves;
}

console.log(superEggDrop(1, 2)); // 2
console.log(superEggDrop(2, 6)); // 3
console.log(superEggDrop(3, 14)); // 4
