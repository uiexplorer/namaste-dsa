/**
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
 * find all possible paths from node 0 to node n - 1 and return them in any order.
 */

function allPathsSourceTarget(graph) {
  const paths = [];
  const target = graph.length - 1;

  const backtrack = (path, curr) => {
    if (curr === target) {
      paths.push([...path]);
    } else {
      for (const neighbor of graph[curr]) {
        path.push(neighbor);
        backtrack(path, neighbor);
        path.pop();
      }
    }
  };

  backtrack([0], 0);
  return paths;
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // [[0, 1, 3], [0, 2, 3]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])); // [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]]
