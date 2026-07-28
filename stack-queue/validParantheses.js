/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

function isValid(s) {
  if (s.length % 2 > 0) return false;
  const stack = [];
  const closingHash = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const openingSymbols = ['{', '[', '('];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (openingSymbols.includes(element)) {
      stack.push(element);
    } else {
      const top = stack.pop();
      if(!top || top !== closingHash[element]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
