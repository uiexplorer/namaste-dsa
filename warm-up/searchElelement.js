const arr = [4, 2, 0, 8, 10, 30];

function searchElement(arr, num) {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;
      }
    }
  }

  return -1;
}

console.log(searchElement(arr, 8));
