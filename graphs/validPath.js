/**
 * Given edges and the integers n, source, and destination,
 * return true if there is a valid path from source to destination, or false otherwise.
 */

function validPath(n, edges, source, destination) {
  const neighborsMap = {};
  for (const [start, end] of edges) {
    if (!neighborsMap[start]) neighborsMap[start] = [];
    if (!neighborsMap[end]) neighborsMap[end] = [];
    neighborsMap[start].push(end);
    neighborsMap[end].push(start);
  }
  const visited = new Set();
  visited.add(source);
  const stack = [source];

  while (stack.length) {
    const node = stack.pop();
    if (node === destination) return true;
    for (const neighboringVertex of neighborsMap[node]) {
      if (!visited.has(neighboringVertex)) {
        stack.push(neighboringVertex);
        visited.add(neighboringVertex);
      }
    }
  }
  return false;
}

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)); // true
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)); // false
