/**
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
 * 
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 * A valid parentheses string s is primitive if it is nonempty,
 * and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
 * Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
 * Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
 */

function removeOuterParentheses(s) {
  const stack = [];
  let result = "";
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element === '(') {
      stack.push(element);
      result = stack.length > 1 ? (result + element) : result;
    } else {
      stack.pop();
      result = stack.length === 0 ? result : (result + element);
    }
  }
  return result;
}

console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParentheses("()()")); // ""


function removeOuterParenthesesWOStack(s) {
  let level = 0;
  let result = "";
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element === "(") {
      ++level;
      result = level > 1 ? (result + element) : result;
    } else {
      result = level > 1 ? (result + element) : result;
      --level;
    }
  }
  return result;
}

console.log(removeOuterParenthesesWOStack("(()())(())")); // "()()()"
console.log(removeOuterParenthesesWOStack("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParenthesesWOStack("()()")); // ""