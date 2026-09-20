/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the staircase,
 * which is the position just past the last step (index cost.length).
 */

function minCostClimbingStairs(cost) {
  let dp = [0, 0];
  for (let index = 2; index <= cost.length; index++) {
    dp[index] = Math.min((dp[index - 1] + cost[index - 1]), (dp[index - 2] + cost[index - 2]));
  }
  return dp[cost.length];
}

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6

function minCostClimbingStairsRecursive(cost) {
  const store = {};
  const calculateCostAtStep = (index) => {
    if (index >= cost.length) return 0;
    if (!store[index]) {
      store[index] = cost[index] + Math.min(calculateCostAtStep(index + 1), calculateCostAtStep(index + 2));
    }
    return store[index];
  };
  return Math.min(calculateCostAtStep(0), calculateCostAtStep(1))
}

console.log(minCostClimbingStairsRecursive([10, 15, 20])); // 15
console.log(minCostClimbingStairsRecursive([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6