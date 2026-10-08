/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi]
 * indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 */

function canFinish(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const graph = Array.from({ length: numCourses }, () => []);
  const queue = [];
  let completed = 0;

  for (const [from, to] of prerequisites) {
    if (from === to) return [];
    graph[to].push(from);
    ++indegree[from];
  }

  for (let index = 0; index < indegree.length; index++) {
    if (indegree[index] === 0) queue.push(index);
  }

  let queueIndex = 0;
  while (queueIndex < queue.length) {
    const current = queue[queueIndex++];
    ++completed;
    for (const neighbor of graph[current]) {
      --indegree[neighbor];

      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return completed === numCourses ? queue : [];
}

console.log(canFinish(4, [[0, 1], [1, 2], [2, 3], [3, 1]])); // false
console.log(canFinish(4, [[0, 1], [1, 2], [2, 3]])); // true
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(3, [[1, 0]])); // true
console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(20, [[0, 10], [3, 18], [5, 5], [6, 11], [11, 14], [13, 1], [15, 1], [17, 4]])); // false

