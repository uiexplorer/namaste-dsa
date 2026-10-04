/**
 * Sort the directed acyclic graph(DAG) topologically.
 */

function sort(n, graph) {
  const ans = [];
  const indegree = new Array(n).fill(0);

  for (let index = 0; index < n; index++) {
    for (const node of graph[i]) {
      ++indegree[node];
    }
  }

  const queue = indegree.filter((val) => val === 0);

  while (queue.length) {
    const currentNode = queue.shift();
    ans.push(currentNode);
    for (const neighbor of graph[currentNode]) {
      --indegree[neighbor];
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return ans;
}