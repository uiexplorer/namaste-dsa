/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
const store = {};
function climbStairs(n) {
  if (n <= 2) return n;
  if (!store[n]) store[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return store[n];
}


function climbStairsIteratively(n) {
  const dp = [0, 1, 2];
  for (let index = 3; index <= n; index++) {
    dp.push(dp[index - 1] + dp[index - 2]);
  }
  return dp[n];
}

console.log(climbStairsIteratively(2));
console.log(climbStairsIteratively(3));
console.log(climbStairsIteratively(5));
