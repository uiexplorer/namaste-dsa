/**
 * Given a positive integer n, return the nth element of the count-and-say sequence.
 */

function countAndSay(n) {
  let curr = "1";
  for (let i = 2; i <= n; i++) {
    let rle = "";
    let count = 1;
    for (let j = 1; j <= curr.length; j++) {
      if (curr[j] === curr[j - 1]) {
        ++count;
      } else {
        rle = rle + count + curr[j - 1];
        count = 1;
      }
    }
    curr = rle;
  }
  return curr;
}

console.log(countAndSay(4)); // "1211"
console.log(countAndSay(1)); // "1"
