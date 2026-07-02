const arr = [4, 9, 0, 2, 8, 7, 1];

function getSecondLargest(arr) {
  /**
   * Handling corner case
   * 1. Empty Array
   * 2. Less than 2 elements in array
   */
  if (arr.length < 2) {
    return 'Invalid Input!';
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > largest) {
      secondLargest = largest;
      largest = element;
      /**
       * Handling corner case
       * 1. Duplicate array elements
       */
    } else if (element > secondLargest && element !== largest) {
      secondLargest = element;
    }
  }
  return secondLargest;
}

console.log(getSecondLargest(arr));
