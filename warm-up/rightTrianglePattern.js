function printRightTriangle(num) {
  for (let i = num; i > 0; i--) {
    let row = '';
    for (let j = 0; j < num; j++) {
      row += j + 1 < i ? ' ' : '*';
    }
    console.log(row);
  }
}

printRightTriangle(5);
