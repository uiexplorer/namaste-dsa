/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

function findMedianSortedArrays(nums1, nums2) {
  let left = 0;
  let right = 0
  const maxLength = nums1.length + nums2.length;
  const newArr = [];

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      newArr.push(nums1[left]);
      left++;
    } else {
      newArr.push(nums2[right]);
      right++;
    }
  }

  if (left < nums1.length) {
    newArr.push(...nums1.slice(left));
  }

  if (right < nums2.length) {
    newArr.push(...nums2.slice(right));
  }

  const medianIndex = Math.floor(maxLength / 2);
  if (newArr.length === 1) {
    return newArr[0];
  }
  if (maxLength % 2 === 0) {
    return (newArr[medianIndex] + newArr[medianIndex - 1]) / 2;
  } else {
    return newArr[medianIndex];
  }
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.500000
