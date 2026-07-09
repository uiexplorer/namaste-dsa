function search(arr, num) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === num) {
      return index;
    }
  }
  return -1;
}

console.log(search([4, 9, 1, 0, 2], 0)); // 3
console.log(search([4, 9, 1, 0, 2], 10)); // -1
