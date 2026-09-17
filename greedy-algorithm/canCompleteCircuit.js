/**
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * Given two integer arrays gas and cost,
 * return the starting gas station's index if you can travel around the circuit once in the clockwise direction,
 * otherwise return -1.
 * If there exists a solution, it is guaranteed to be unique.
 */

function canCompleteCircuit(gas, cost) {
  let currGain = 0;
  let totalGain = 0;
  let ans = 0;
  for (let i = 0; i < gas.length; i++) {
    let gain = gas[i] - cost[i];
    currGain += gain;
    totalGain += gain;

    if (currGain < 0) {
      ans = i + 1;
      currGain = 0;
    }
  }
  return totalGain < 0 ? -1 : ans;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])); // 3
