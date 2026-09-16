/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * Find and return the maximum profit you can achieve.
 */

function maxProfit(prices) {
  let result = 0;
  for (let index = 1; index < prices.length; index++) {
    const todaysPrice = prices[index];
    const yesterdaysPrice = prices[index - 1];
    if (yesterdaysPrice < todaysPrice) {
      result += todaysPrice - yesterdaysPrice;
    }
  }
  return result;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
