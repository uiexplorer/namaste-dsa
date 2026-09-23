/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 */

function maxProductSubArray(nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let totalMax = nums[0];
  for (let index = 1; index < nums.length; index++) {
    const currentNum = nums[index];
    // const lastMaxProduct = maxProduct;
    const calculations = [currentNum, maxProduct * currentNum, minProduct * currentNum];
    maxProduct = Math.max(...calculations);
    minProduct = Math.min(...calculations);
    totalMax = Math.max(totalMax, maxProduct, minProduct);
  }
  return totalMax;
}

function maxProductSubArrayApproach2(nums) {
  let ltrProduct = 1;
  let rtlProduct = 1;
  let calculatedMaxProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    ltrProduct = ltrProduct * nums[i];
    rtlProduct = rtlProduct * nums[nums.length - i - 1];
    calculatedMaxProduct = Math.max(ltrProduct, rtlProduct, calculatedMaxProduct);
    if (ltrProduct === 0) ltrProduct = 1;
    if (rtlProduct === 0) rtlProduct = 1;
  }
  return calculatedMaxProduct;
}

console.log(maxProductSubArray([2, 3, -2, 4])); // 6
console.log(maxProductSubArray([-2, 0, -1])); // 0
console.log(maxProductSubArrayApproach2([-2, 3, -4])); // 24
console.log(maxProductSubArrayApproach2([-4, -3, -2])); // 12
