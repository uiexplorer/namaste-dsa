/**
 * You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n.
 * Each CPU interval can be idle or allow the completion of one task.
 * Tasks can be completed in any order, but there's a constraint:
 * there has to be a gap of at least n intervals between two tasks with the same label.
 * 
 * Return the minimum number of CPU intervals required to complete all tasks.
 */

function leastInterval(tasks, n) {
  const taskMap = {};
  let mostFreqTaskCounter = 0;
  let mostFreqTask = tasks[0];
  for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
    taskMap[task] = !taskMap[task] ? 1 : ++taskMap[task];
    if (taskMap[task] > taskMap[mostFreqTask]) {
      mostFreqTask = task;
    }
  }
  for (const value of Object.values(taskMap)) {
    if (taskMap[mostFreqTask] === value) {
      ++mostFreqTaskCounter;
    }
  }
  return Math.max((((n + 1) * (taskMap[mostFreqTask] - 1)) + mostFreqTaskCounter), tasks.length);
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B", "B"], 2)); // 10
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8
console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1)); // 6
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3)); // 10
