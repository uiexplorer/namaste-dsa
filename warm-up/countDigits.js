function countDigits(num) {
  num = Math.abs(num);
  if (num === 0) {
    return 1;
  }
  let counter = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    counter++;
  }
  return counter;
}

console.log(countDigits(259));
console.log(countDigits(83475638476));
console.log(countDigits(-1000));
console.log(countDigits(0010));
