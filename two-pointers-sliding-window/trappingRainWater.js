/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 */

function getTrappedWaterCount(height) {
  let result = 0;
  const length = height.length;
  const maxLeft = [height[0]];
  const maxRight = [];
  maxRight[length - 1] = height[length - 1];

  for (let index = 1; index < length; index++) {
    maxLeft[index] = Math.max(maxLeft[index - 1], height[index]);
    maxRight[length - 1 - index] = Math.max(height[length - 1 - index], maxRight[length - index])
  }

  for (let index = 0; index < length; index++) {
    const waterTrapped = Math.min(maxLeft[index], maxRight[index]) - height[index];
    result = result + Math.max(waterTrapped, 0);
  }

  return result;
}

console.log(getTrappedWaterCount([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(getTrappedWaterCount([4, 2, 0, 3, 2, 5])); // 9

