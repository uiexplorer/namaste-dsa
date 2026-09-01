/**
 * 
 */

function containsNearbyDuplicate(nums, k) {
  if (!k) return false;
  let start = 0;
  let end = Math.min(nums.length - 1, k);
  const slidingWindow = new Set(nums.slice(start, end));

  if (slidingWindow.size < end) return true;

  while (end < nums.length) {
    if (slidingWindow.has(nums[end])) {
      return true;
    } else {
      slidingWindow.delete(nums[start]);
      slidingWindow.add(nums[end]);
      ++start;
      ++end;
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 1, 1, 2, 3, 4], 3)); // true
console.log(containsNearbyDuplicate([99, 99], 2)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
