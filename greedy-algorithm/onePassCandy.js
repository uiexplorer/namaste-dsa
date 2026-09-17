/**
 * There are n children standing in a line.
 * Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 */

function onePassCandy(ratings) {
  let candies = ratings.length;
  let index = 1;
  while (index < ratings.length) {
    if (ratings[index] === ratings[index - 1]) {
      ++index;
      continue;
    }

    let up = 0;
    while (index < ratings.length && ratings[index] > ratings[index - 1]) {
      ++up;
      candies += up;
      ++index;
    }

    let down = 0;
    while (index < ratings.length && ratings[index] < ratings[index - 1]) {
      ++down;
      candies += down;
      ++index;
    }

    candies -= Math.min(up, down);
  }
  return candies;
}

console.log(onePassCandy([1, 0, 2])); // 5
console.log(onePassCandy([1, 2, 2])); // 4
console.log(onePassCandy([1, 3, 2, 2, 1])); // 7
console.log(onePassCandy([1, 2, 87, 87, 87, 2, 1])); // 13
