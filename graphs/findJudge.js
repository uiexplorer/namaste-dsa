/**
 * Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 */

function findJudge(n, trust) {
  if (!trust.length) return n === 1 ? 1 : -1;
  const graph = Array.from({ length: n }, () => [0, 0]);
  let judge = -1;

  for (let index = 0; index < trust.length; index++) {
    const [from, to] = trust[index];
    ++graph[from - 1][1];
    ++graph[to - 1][0];
  }
  judge = graph.findIndex(([outDegree, inDegree]) => outDegree === n - 1 && inDegree === 0);
  return judge >= 0 ? ++judge : -1;
}

console.log(findJudge(1, [])); // 1
console.log(findJudge(2, [[2, 1]])); // 1
console.log(findJudge(2, [[1, 2]])); // 2
console.log(findJudge(3, [[1, 3], [2, 3]])); // 3
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]])); // -1
console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])); // 3
