/**
 * Detect cycle in directed graphs.
 */

function detectCycle(edges) {
  const graph = {};
  const visitedSet = new Set();

  for (const [from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (node, parent) => {
    visitedSet.add(node);
    for (const neighbor of graph[node]) {
      if (!visitedSet.has(neighbor)) {
        return dfs(neighbor, node);
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };
  return dfs(0, -1);
}

console.log(detectCycle([[0, 1], [1, 2], [2, 0]])); // true
console.log(detectCycle([[0, 1], [1, 2], [2, 3]])); // false
console.log(detectCycle([[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]])); // true
