/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return s === s.split("").reverse().join("");

  for (let index = 0; index < s.length; index++) {
    const character = s[index];
    const mirrorCharacter = s[s.length - index - 1];
    if (character.match(/[a-z0-9]/i) && mirrorCharacter.match(/[a-z0-9]/i)) {
      if (character !== s[s.length - index - 1]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("a")); // true
console.log(isPalindrome("a$")); // true
console.log(isPalindrome("")); // true
