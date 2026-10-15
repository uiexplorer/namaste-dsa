/**
 * The beauty of a string is the difference in frequencies between the most frequent and
 * least frequent characters.
 * Given a string s, return the sum of beauty of all of its substrings.
 */

function beautySum(s) {
  let beautySum = 0;
  for (let i = 0; i < s.length; i++) {
    let freq = new Array(26).fill(0);
    for (let j = i; j < s.length; j++) {
      let index = s.charCodeAt(j) - "a".charCodeAt(0);
      freq[index]++;
      let max = 0;
      let min = Infinity;
      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          max = Math.max(max, freq[k]);
          min = Math.min(min, freq[k]);
        }
      }
      beautySum += (max - min);
    }
  }
  return beautySum;
}

console.log(beautySum("aabcb")); // 5
console.log(beautySum("aabcbaa")); // 17
