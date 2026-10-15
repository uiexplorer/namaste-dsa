/**
 * You are given a parentheses string s.
 * In one move, you can insert a parenthesis at any position of the string.
 * Return the minimum number of moves required to make s valid.
 */

function minAddToMakeValid(s) {
  let openingBrackets = 0;
  let moves = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(") {
      ++openingBrackets;
    } else if (s[index] === ")" && openingBrackets === 0) {
      ++moves;
    } else {
      --openingBrackets;
    }
  }
  return Math.abs(moves + openingBrackets);
}

console.log(minAddToMakeValid("()))((")); // 4
console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3
