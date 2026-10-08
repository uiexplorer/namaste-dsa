/**
 * Find shortest path from all nodes to all other nodes.
 */

function findShortestPath(n, edges) {
  const dist = Array.from({ length: n }, (_, x) => Array.from({ length: n }, (_, y) => x === y ? 0 : Infinity));

  for (const [u, v, w] of edges) {
    dist[u][v] = w;
  }

  for (let k = 0; k < n; k++) {
    for (let u = 0; u < n; u++) {
      for (let v = 0; v < n; v++) {
        dist[u][v] = Math.min(dist[u][k] + dist[k][v], dist[u][v])
      }
    }
  }

  return dist;
}

const edges = [
  [0, 1, 2],
  [1, 0, 7],
  [1, 2, 3],
  [2, 1, 8],
  [2, 3, 2],
  [3, 0, 1],
  [3, 1, 5]
];

console.log(findShortestPath(4, edges));
