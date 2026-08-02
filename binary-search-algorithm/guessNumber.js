/**
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked
 * (the number I picked stays the same throughout the game).
 * Every time you guess wrong,
 * I will tell you whether the number I picked is higher or lower than your guess.
 * You call a pre-defined API int guess(int num), which returns three possible results:
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 * Return the number that I picked.
 */

function guessNumber(n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const response = guess(middle);
    if (response === 0) {
      return middle;
    } else if (response === -1) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
}

console.log(guessNumber(10)); // 6
console.log(guessNumber(1)); // 1
console.log(guessNumber(2)); // 1
