/**
 * Given an integer array bills where bills[i] is the bill the ith customer pays,
 * return true if you can provide every customer with the correct change, or false otherwise.
 */

function lemonadeChange(bills) {
  const wallet = [0, 0];

  for (let index = 0; index < bills.length; index++) {
    const bill = bills[index];
    if (bill === 5) {
      ++wallet[0];
    } else if (bill === 10) {
      ++wallet[1];
      --wallet[0];
    } else {
      if (wallet[1]) {
        --wallet[1];
        --wallet[0];
      } else {
        wallet[0] -= 3;
      }
    }

    if (wallet[0] < 0) {
      return false;
    }
  }
  return true;
}