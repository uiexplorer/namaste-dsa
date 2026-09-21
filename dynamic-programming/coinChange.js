/**
 * You are given an integer array coins representing coins of different denominations and
 * an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 */

function coinChange(coins, amount) {
  const store = {};
  const backtrack = (remAmount) => {
    if (store[remAmount]) return store[remAmount];
    if (remAmount < 0) return -1;
    if (remAmount === 0) return 0;

    let minCoins = Infinity;
    for (let index = 0; index < coins.length; index++) {
      const result = backtrack(remAmount - coins[index]);
      if (result !== -1) {
        minCoins = Math.min(minCoins, 1 + result);
      }
    }
    store[remAmount] = minCoins === Infinity ? -1 : minCoins;
    return store[remAmount];
  };
  return backtrack(amount);
}

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0

