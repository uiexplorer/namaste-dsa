/**
 * You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition.
 * All the scores are guaranteed to be unique.
 * The athletes are placed based on their scores, where the 1st place athlete has the highest score,
 * the 2nd place athlete has the 2nd highest score, and so on.
 * The placement of each athlete determines their rank:
 * The 1st place athlete's rank is "Gold Medal".
 * The 2nd place athlete's rank is "Silver Medal".
 * The 3rd place athlete's rank is "Bronze Medal".
 * For the 4th place to the nth place athlete,
 * their rank is their placement number (i.e., the xth place athlete's rank is "x").
 * Return an array answer of size n where answer[i] is the rank of the ith athlete.
 */

function findRelativeRanks(score) {
  const scoreMaxHeap = new MaxPriorityQueue();

  for (let index = 0; index < score.length; index++) {
    scoreMaxHeap.enqueue(score[index]);
  }

  while (scoreMaxHeap.size()) {
    const rank = score.indexOf(scoreMaxHeap.dequeue());
    const diff = score.length - scoreMaxHeap.size();
    if (diff === 1) {
      score[rank] = "Gold Medal";
    } else if (diff === 2) {
      score[rank] = "Silver Medal";
    } else if (diff === 3) {
      score[rank] = "Bronze Medal";
    } else {
      score[rank] = diff + "";
    }
  }

  return score;
}