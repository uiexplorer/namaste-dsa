/**
 * There are n children standing in a line.
 * Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 */

function twoPassCandy(ratings) {
  const candiesltr = new Array(ratings.length).fill(1);
  const candiesrtl = new Array(ratings.length).fill(1);
  for (let index = 1; index < ratings.length; index++) {
    const previousRating = ratings[index - 1];
    const currentRating = ratings[index];
    if (currentRating > previousRating) {
      candiesltr[index] = candiesltr[index - 1] + 1;
    }
  }
  for (let index = ratings.length - 1; index >= 0; index--) {
    const currentRating = ratings[index];
    const previousRating = ratings[index + 1];
    if (currentRating > previousRating) {
      candiesrtl[index] = candiesrtl[index + 1] + 1;
    }
  }
  const accumulator = ratings.map((_, index) => Math.max(candiesltr[index], candiesrtl[index]));
  return accumulator.reduce((acc, curr) => acc += curr, 0);
}

console.log(twoPassCandy([1, 0, 2])); // 5
console.log(twoPassCandy([1, 2, 2])); // 4
console.log(twoPassCandy([1, 3, 2, 2, 1])); // 7
console.log(twoPassCandy([1, 2, 87, 87, 87, 2, 1])); // 13
