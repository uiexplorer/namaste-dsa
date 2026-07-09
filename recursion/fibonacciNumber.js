/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones,
 * starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 */

function findFibinacciNumber(n) {
  if (n <= 1) {
    return n;
  }
  return findFibinacciNumber(n - 1) + findFibinacciNumber(n - 2);
}

console.log(findFibinacciNumber(2)); // 1
console.log(findFibinacciNumber(3)); // 2
console.log(findFibinacciNumber(4)); // 3
console.log(findFibinacciNumber(5)); // 5
console.log(findFibinacciNumber(8)); // 21
console.log(findFibinacciNumber(10)); // 21
