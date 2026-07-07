function printNumberBackward(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  // num--;
  // num -= 1;
  printNumberBackward(--num);
}

printNumberBackward(5);

function printNumberForward(num, limit) {
  if (num > limit) {
    return;
  }
  console.log(num);
  printNumberForward(++num, limit);
}

printNumberForward(1, 5);
