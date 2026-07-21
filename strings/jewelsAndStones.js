/**
 * You're given strings jewels representing the types of stones that are jewels,
 * and stones representing the stones you have.
 * Each character in stones is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */

function numJewelsInStones(jewels, stones) {
  let numOfJewels = 0;

  // for (let i = 0; i < stones.length; i++) {
  //   const stone = stones[i];
  //   for (let j = 0; j < jewels.length; j++) {
  //     const jewel = jewels[j];
  //     if (jewel === stone) {
  //       numOfJewels++;
  //     }
  //   }
  // }

  const jewelsSet = new Set();

  for (let index = 0; index < jewels.length; index++) {
    jewelsSet.add(jewels[index]);
  }

  for (let index = 0; index < stones.length; index++) {
    const stone = stones[index];
    if(jewelsSet.has(stone)) {
      numOfJewels++;
    }
  }

  return numOfJewels;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
