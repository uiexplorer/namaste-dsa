/**
 * Given an integer array nums where the elements are sorted in ascending order,
 * convert it to a height-balanced binary search tree
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function sortedArrayToBST(nums) {
  const length = nums.length;
  if (length === 0) return null;
  if (length === 1) return new TreeNode(nums[0]);
  const rootIndex = Math.floor(length / 2);
  return new TreeNode(
    nums[rootIndex],
    sortedArrayToBST(nums.slice(0, rootIndex)),
    sortedArrayToBST(nums.slice(rootIndex + 1))
  );
}

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([10, 20, 25, 30, 40, 50, 60, 70]));