const arr = [5, 0, 7, 10, 8, 17, 1, -60];

function findSmallestNumber(arr) {
  let result = Infinity;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < result) {
      result = arr[index];
    }
  }
  return result;
}

console.log(findSmallestNumber(arr));
