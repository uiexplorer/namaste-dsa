function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  const numCopy = x;
  let reverseNumber = 0;

  while (x > 0) {
    reverseNumber = reverseNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return numCopy === reverseNumber;
}

console.log(isPalindrome(121));
console.log(isPalindrome(2552));
console.log(isPalindrome(1234));
console.log(isPalindrome(-121));
