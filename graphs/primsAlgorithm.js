import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Find minimum cost of spanning tree from given graph with n vertices.
 */

function findMinCostSpanningTree(n, graph) {
  let mstCost = 0;
  const spanningTree = [];
  const spanningTreePath = [];
  const visited = new Array(n).fill(false);
  const minPriorityQueue = new MinPriorityQueue((x) => x[1]);
  minPriorityQueue.enqueue([0, 0]);

  while (spanningTree.length < n && minPriorityQueue.size()) {
    const [current, weight] = minPriorityQueue.dequeue();
    if (visited[current]) continue;
    visited[current] = true;
    spanningTree.push([current, weight]);

    mstCost += weight;

    for (const [v, w] of graph[current]) {
      if (!visited[v]) {
        minPriorityQueue.enqueue([v, w]);
      }
    }
  }

  for (let index = 0; index < spanningTree.length - 1; index++) {
    const [u] = spanningTree[index];
    spanningTreePath.push([u, spanningTree[index + 1][0]]);
  }

  return { mstCost, spanningTreePath };
}

const graphInput1 = [
  [[1, 4], [2, 2], [3, 5]],
  [[0, 4], [3, 1]],
  [[0, 2], [3, 3]],
  [[0, 5], [1, 1], [2, 3]]
];

console.log(findMinCostSpanningTree(4, graphInput1)); // 6
