/**
 * You are given an initial computer network connections.
 * You can extract certain cables between two directly connected computers,
 * and place them between any pair of disconnected computers to make them directly connected.
 * Return the minimum number of times you need to do this in order to make all the computers connected.
 * If it is not possible, return -1.
 */

function makeConnected(n, connections) {
  if (n - 1 > connections.length) return -1;
  const graph = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);
  let noOfComponents = 0;

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let index = 0; index < n; index++) {
    if (!visited[index]) {
      ++noOfComponents;
      bfs(index, visited, graph);
    }
  }

  return noOfComponents - 1;
}

function bfs(src, visited, graph) {
  const queue = [src];
  visited[src] = true;

  while (queue.length) {
    let current = queue.shift();
    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

console.log(makeConnected(4, [[0, 1], [0, 2], [1, 2]])); // 1
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]])); // 2
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2]])); // -1

