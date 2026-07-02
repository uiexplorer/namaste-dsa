function printReverseNumberTrianglePattern(num) {
  for (let i = num; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += ` ${j + 1} `;
    }
    console.log(row.trim());
  }
}

printReverseNumberTrianglePattern(10);
