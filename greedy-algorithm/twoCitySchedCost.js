/**
 * A company is planning to interview 2n people.
 * Given the array costs where costs[i] = [aCosti, bCosti],
 * the cost of flying the ith person to city a is aCosti, and
 * the cost of flying the ith person to city b is bCosti.
 * Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
 */

function twoCitySchedCost(costs) {
  let totalCost = 0;
  const halfPersonCount = costs.length / 2;
  const costDiff = costs.map(([a, b]) => ({
    a,
    b,
    diff: a - b
  })).sort((item1, item2) => item1.diff - item2.diff);
  for (let index = 0; index < costDiff.length / 2; index++) {
    totalCost += costDiff[index].a;
    totalCost += costDiff[index + halfPersonCount].b;
  }
  return totalCost;
}

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])); // 110
console.log(twoCitySchedCost([[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]])); // 1859
console.log(twoCitySchedCost([[515, 563], [451, 713], [537, 709], [343, 819], [855, 779], [457, 60], [650, 359], [631, 42]])); // 3086
