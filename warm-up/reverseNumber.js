function reverseNumber(x) {
  const limit = Math.pow(2, 31);
  const numCopy = x;
  x = Math.abs(x);
  let reverseNumber = 0;

  while (x > 0) {
    reverseNumber = reverseNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverseNumber < -limit || reverseNumber > limit
    ? 0
    : numCopy < 0
      ? -reverseNumber
      : reverseNumber;
}

console.log(reverseNumber(1534236469));
console.log(reverseNumber(2552));
console.log(reverseNumber(1234));
console.log(reverseNumber(-1234));
