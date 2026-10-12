import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * You are in a city that consists of n intersections numbered from 0 to n - 1
 * with bi-directional roads between some intersections.
 * Return the number of ways you can arrive at your destination in the shortest amount of time. 
 */

function countPaths(n, roads) {
  const graph = Array.from({ length: n }, () => []);
  const minPriorityQueue = new MinPriorityQueue((x) => x[1]);
  const minWeight = new Array(n).fill(Infinity);
  const pathCount = new Array(n).fill(0);

  minPriorityQueue.push([0, 0]);
  minWeight[0] = 0;
  ++pathCount[0];

  for (const [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  while (minPriorityQueue.size()) {
    const [current, currentWeight] = minPriorityQueue.dequeue();
    for (const [neighbor, neighborWeight] of graph[current]) {
      const newWeight = currentWeight + neighborWeight;
      if (newWeight < minWeight[neighbor]) {
        minWeight[neighbor] = newWeight;
        minPriorityQueue.enqueue([neighbor, newWeight]);
        pathCount[neighbor] = pathCount[current];
      } else if (newWeight === minWeight[neighbor]) {
        pathCount[neighbor] = (pathCount[current] + pathCount[neighbor]) % (1e9 + 7);
      }
    }
  }
  return pathCount[(n - 1)];
}

console.log(countPaths(7, [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]])); // 4
