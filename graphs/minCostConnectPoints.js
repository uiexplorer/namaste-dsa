import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
 */

function minCostConnectPoints(points) {
  const n = points.length;
  const pq = new MinPriorityQueue((x) => x[0]);
  let minCost = 0;
  const visited = new Array(n).fill(false);
  pq.push([0, 0]);
  let edgesUsed = 0;

  while (edgesUsed < n) {
    let [nodeDist, node] = pq.pop();
    if (visited[node]) continue;
    visited[node] = true;
    minCost = minCost + nodeDist;
    edgesUsed++;

    for (let nextNode = 0; nextNode < n; ++nextNode) {
      if (!visited[nextNode]) {
        let nextDist =
          Math.abs(points[node][0] - points[nextNode][0]) +
          Math.abs(points[node][1] - points[nextNode][1]);

        pq.push([nextDist, nextNode]);
      }
    }
  }
  return minCost;
}

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])); // 20
console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]])); // 18
