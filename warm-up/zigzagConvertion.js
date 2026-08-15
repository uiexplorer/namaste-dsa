/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 */

function convert(s, numRows) {
  if (numRows === 1) return s;
  const resultArr = new Array(numRows);
  for (let index = 0; index < numRows; index++) {
    resultArr[index] = new Array();
  }
  let direction = true; // true is down, false is up
  let currentRow = 0;
  let tracker = 0;
  let resultStr = "";

  while (tracker < s.length) {
    resultArr[currentRow].push(s[tracker]);
    if (tracker > 0 && (currentRow === 0 || currentRow === numRows - 1)) {
      direction = !direction;
    }
    ++tracker;
    direction ? ++currentRow : --currentRow;
  }

  for (let index = 0; index < resultArr.length; index++) {
    resultStr += resultArr[index].join("");
  }

  return resultStr;
}

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"
console.log(convert("AB", 1)); // "AB"
