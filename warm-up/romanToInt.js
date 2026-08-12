/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 */

function romanToInt(s) {
  const romanValueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let result = 0;
  let index = 0;
  while (index < s.length) {
    const charWindow = s.slice(index, index + 2);
    if (romanValueMap[charWindow]) {
      result += romanValueMap[charWindow];
      index += 2
    } else {
      result += romanValueMap[s[index]];
      ++index;
    }
  }
  return result;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
