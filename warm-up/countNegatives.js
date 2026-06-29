const arr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives(arr));
