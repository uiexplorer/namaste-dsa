/**
 * Assume you are an awesome parent and want to give your children some cookies.
 * But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i],
 * which is the minimum size of a cookie that the child will be content with;
 * and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i,
 * and the child i will be content.
 * Your goal is to maximize the number of your content children and output the maximum number.
 */

function findContentChildren(g, s) {
  let count = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gPointer = 0;
  let sPointer = 0;
  while (gPointer < s.length && sPointer < s.length) {
    if (g[gPointer] <= s[sPointer]) {
      ++gPointer;
      ++count;
    }
    ++sPointer;
  }
  return count;
}

console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
