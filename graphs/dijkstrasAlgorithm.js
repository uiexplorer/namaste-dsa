/**
 * Find shortest path in a weighted (Directed Acyclic Graph)DAG.
 */

function shortestDistance(graph, src) {
  let distance = 0;
  let nextNode = src;
  let weight = 0;
  let path = [src];
  while (graph[nextNode].length) {
    const edges = graph[nextNode];
    edges.length > 1 && edges.sort(([nodeA, a], [nodeB, b]) => a - b);
    [nextNode, weight] = edges[0];
    distance += weight;
    path.push(nextNode);
  }
  return { distance, path };
}

console.log(shortestDistance([
  // [node, weight]
  [[1, 2], [2, 4]], // 0
  [[2, 1], [3, 7]], // 1
  [[4, 3], [5, 1]], // 2
  [[6, 1]], // 3
  [[3, 2], [6, 5]], // 4
  [[3, 3], [6, 8]], // 5
  [] // 6
], 0));
