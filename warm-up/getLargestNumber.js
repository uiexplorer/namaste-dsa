const arr = [5, 0, 7, 10, 8, 17, 1];

function findLargestNumber(arr) {
  let result = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > result) {
      result = arr[index];
    }
  }
  return result;
}

console.log(findLargestNumber(arr));
