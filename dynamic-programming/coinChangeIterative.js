/**
 * You are given an integer array coins representing coins of different denominations and
 * an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 */

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let remAmount = 1; remAmount <= amount; remAmount++) {
    for (let j = 0; j < coins.length; j++) {
      const remainingAmount = remAmount - coins[j];
      if (remainingAmount >= 0) {
        dp[remAmount] = Math.min(dp[remAmount], 1 + dp[remainingAmount])
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0

