function printTriangleStarPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += ' * ';
    }
    console.log(row.trim());
  }
}

printTriangleStarPattern(10);
