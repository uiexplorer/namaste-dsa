/**
 * Sort array of numbers using bucket sort.
 */

function sort(arr) {
  let n = arr.length;

  // create n buckets
  let buckets = Array.from({ length: n }, () => []);

  // add each item to respective bucket
  for (let x of arr) {
    let index = Math.floor(x * n)
    buckets[index].push(x);
  }

  // sort buckets internally
  for (let bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  // merge all buckets to get final sorted result
  let i = 0;
  for (let bucket of buckets) {
    for (let num of bucket) {
      arr[i++] = num;
    }
  }
  return arr;
}

console.log(sort([0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]));