function printTriangleColumnNumberPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += ` ${j + 1} `;
    }
    console.log(row.trim());
  }
}

printTriangleColumnNumberPattern(5);

function printTriangleRowNumberPattern(num) {
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += ` ${i + 1} `;
    }
    console.log(row.trim());
  }
}

printTriangleRowNumberPattern(5);
