/**
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 * Given a balanced string s, split it into some number of substrings such that:
 * Each substring is balanced.
 * Return the maximum number of balanced strings you can obtain.
 */

function balancedStringSplit(s) {
  let counter = 0;
  let balancedStringCount = 0;

  for (let index = 0; index < s.length; index++) {
    s[index] === "L" ? counter-- : counter++;
    balancedStringCount = counter === 0 ? ++balancedStringCount : balancedStringCount;
  }

  return balancedStringCount;
}

console.log(balancedStringSplit("RLRRLLRLRL")); // 4
console.log(balancedStringSplit("RLRRRLLRLL")); // 2
console.log(balancedStringSplit("LLLLRRRR")); // 1
