/**
 * Find shortest distance between source & all other nodes.
 */

function shortestDistance(graph, src) {
  const distance = new Array(graph.length).fill(Infinity);
  distance[src] = 0;
  const queue = [src];

  while (queue.length) {
    const currentNode = queue.shift();
    for (const neighbor of graph[currentNode]) {
      if (distance[neighbor] === Infinity) {
        distance[neighbor] = distance[currentNode] + 1;
        queue.push(neighbor);
      }
    }
  }
  return distance;
}

console.log(shortestDistance([[1, 2], [3], [4], [5], [3], []], 0)); // [0, 1, 1, 2, 2, 3]
