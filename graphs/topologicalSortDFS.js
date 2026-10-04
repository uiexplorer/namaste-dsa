/**
 * Sort the directed acyclic graph(DAG) topologically.
 */

function sort(n, graph) {
  const ans = [];
  const visitedSet = new Set();

  const dfs = (node) => {
    visitedSet.add(node);
    for (const neighbor of graph[node]) {
      if (!visitedSet.has(neighbor)) {
        dfs(neighbor);
      }
    }
    ans.push(node);
  };

  for (let index = 0; index < n; index++) {
    if (!visitedSet.has(i)) {
      dfs(i);
    }
  }

  return ans.reverse();
}