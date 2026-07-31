/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */

function dailyTemperature(temperatures) {
  const length = temperatures.length
  const stack = [length - 1];
  const waitCounter = new Array(length).fill(0);

  for (let index = length - 2; index >= 0; index--) {
    const currentDayTemperature = temperatures[index];
    while (stack.length) {
      const nextDayIndex = stack[stack.length - 1];
      if (currentDayTemperature >= temperatures[nextDayIndex]) {
        stack.pop();
      } else {
        waitCounter[index] = nextDayIndex - index;
        break;
      }
    }
    stack.push(index);
  }

  return waitCounter;
}

console.log(dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperature([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperature([30, 60, 90])); // [1, 1, 0]
