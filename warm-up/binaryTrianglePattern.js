function printBinaryTrianglePattern(num) {
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 1; j <= i + 1; j++) {
      row += ` ${j % 2} `;
    }
    console.log(row.trim());
  }
}

// printBinaryTrianglePattern(5);

function printAlternateBinaryTrianglePattern(num) {
  let toggle = 1;
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 1; j <= i + 1; j++) {
      row += ` ${toggle} `;
      toggle = toggle ? 0 : 1;
    }
    console.log(row.trim());
  }
}

printAlternateBinaryTrianglePattern(5);
