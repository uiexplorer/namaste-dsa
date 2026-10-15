/**
 * Given two strings a and b, return the minimum number of times you should repeat string a
 * so that string b is a substring of it.
 * If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.
 */

function repeatedStringMatch(a, b) {
  const lengthSum = a.length + b.length;
  let repeatedA = "";
  let counter = 0;

  while (repeatedA.length < lengthSum - 1) {
    repeatedA += a;
    ++counter;
    if (repeatedA.includes(b)) return counter;
  }

  return -1;
}

console.log(repeatedStringMatch("abcd", "cdabcdab")); // 3
console.log(repeatedStringMatch("a", "aa")); // 2
console.log(repeatedStringMatch("abab", "aba")); // 1
