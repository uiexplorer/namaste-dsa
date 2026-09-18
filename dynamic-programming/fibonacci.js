/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * Given n, calculate F(n).
 */

const store = {};
function fib(n) {
  if (n <= 1) return n;
  if (!store[n]) store[n] = fib(n - 1) + fib(n - 2);
  return store[n];
}

function fibIterative(n) {
  const series = [0, 1];
  for (let index = 2; index <= n; index++) {
    series.push(series[index - 1] + series[index - 2]);
  }
  return series[n];
}
