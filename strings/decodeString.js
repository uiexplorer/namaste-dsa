/**
 * Leetcode 394 --> Given an encoded string, return its decoded string.
 */

function decodeString(s) {
  let i = 0;
  let decode = () => {
    let res = "";
    let num = 0;
    while (i < s.length) {
      let char = s[i];

      if (char >= '0' && char <= '9') {
        num = num * 10 + parseInt(char);
        i++;
      }
      else if (char === "[") {
        i++;
        let str = decode();
        res += str.repeat(num);
        num = 0;
      }
      else if (char === "]") {
        i++;
        return res;
      }
      else {
        res += char;
        i++;
      }
    }
    return res;
  };

  return decode();
}

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
