/**
 * Return the number of combinations that make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return 0.
 */

function coinChangeII(amount, coins) {
  let totalWays = 0;
  const backtrack = (remainingSum, path, start) => {
    if (remainingSum === 0) {
      ++totalWays;
    } else if (remainingSum < 0) {
      return;
    } else {
      for (let index = start; index < coins.length; index++) {
        const element = coins[index];
        path.push(element);
        backtrack(remainingSum - element, path, index);
        path.pop();
      }
    }
  };
  backtrack(amount, [], 0);
  return totalWays;
}

console.log(coinChangeII(5, [1, 2, 5])); // 4
console.log(coinChangeII(3, [2])); // 0
console.log(coinChangeII(10, [10])); // 1
