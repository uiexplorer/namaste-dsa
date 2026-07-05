/**
 * Write a function that reverses a string.
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */
function reverseString(s) {
  for (let index = 0; index < s.length / 2; index++) {
    const element = s[index];
    s[index] = s[s.length - 1 - index];
    // s[index] = s[s.length - (1 + index)]; // Can also be written like this
    s[s.length - 1 - index] = element;
  }
  return s;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
