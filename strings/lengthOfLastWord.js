/**
 * Given a string s consisting of words and spaces,
 * return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */

function lengthOfLastWord(s) {
  let counter = 0;
  for (let index = s.length - 1; index >= 0; index--) {
    const element = s[index];

    if (counter > 0 && element === " ") {
      break;
    }
    if (element !== " ") {
      counter++;
    }
  }
  return counter;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord(" ")); // 0
console.log(lengthOfLastWord("a")); // 1
