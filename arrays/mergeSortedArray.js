/**
 * You are given two integer arrays nums1 and nums2,sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored.
 * nums2 has a length of n.
 */

function mergeSortedArray(nums1, m, nums2, n) {
  /**
   * 1. Copy nums1 to nums1Copy
   * 2. Run two pointers point p1 to nums1 & p2 to nums2.
   * 3. Update nums1 with the minimum value out of nums1Copy[p1] & nums2[p2].
   * 4. When the value is added to nums1 increments the pointer from where the value is picked.
   */
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let index = 0; index < m + n; index++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[index] = nums1Copy[p1];
      p1++;
    } else {
      nums1[index] = nums2[p2];
      p2++;
    }
  }
  console.log(nums1);
}

function mergeSortedArray2(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let index = nums1.length - 1; index >= 0; index--) {
    if (p2 < 0 || nums1[p1] > nums2[p2]) {
      nums1[index] = nums1[p1];
      p1--;
    } else {
      nums1[index] = nums2[p2];
      p2--;
    }
  }
  console.log(nums1);
}

mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]
mergeSortedArray([1], 1, [], 0); // [1]
mergeSortedArray([0], 0, [1], 1); // [1]
mergeSortedArray([2, 0], 1, [1], 1); // [1, 2]
console.log(`<================================>`);
mergeSortedArray2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]
mergeSortedArray2([1], 1, [], 0); // [1]
mergeSortedArray2([0], 0, [1], 1); // [1]
mergeSortedArray2([2, 0], 1, [1], 1); // [1, 2]
