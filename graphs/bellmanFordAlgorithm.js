/**
 * Find Single Source Shortest Path(SSSP) in a DAG with -ve weights.
 */

function findShortestPath(edges, v, src) {
  const dist = new Array(v).fill(Infinity);
  dist[src] = 0;

  for (let index = 0; index < v - 1; index++) {
    let updated = false;
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }
    if (!updated) break;
  }

  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return null;
    }
  }

  return dist;
}

const negativeGraph = [
  [0, 3, 5],
  [3, 2, -2],
  [2, 1, -2],
  [0, 1, 6],
  [0, 2, 5],
  [3, 5, -1],
  [1, 4, -1],
  [5, 6, 3],
  [4, 6, 3],
  [2, 4, 1]
];

const positiveGraph = [
  [0, 1, 2],
  [0, 2, 4],
  [1, 3, 7],
  [1, 2, 1],
  [2, 4, 3],
  [2, 5, 1],
  [3, 6, 1],
  [4, 3, 2],
  [4, 6, 5],
  [5, 3, 3],
  [5, 6, 8]
];

const negativeCyclicGraph = [
  [0, 1, 4],
  [1, 2, -1],
  [2, 3, -2],
  [3, 1, 0]
];

console.log(findShortestPath(negativeGraph, 7, 0));
console.log(findShortestPath(positiveGraph, 7, 0));
console.log(findShortestPath(negativeCyclicGraph, 4, 0));
