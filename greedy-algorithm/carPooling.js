/**
 * There is a car with capacity empty seats.
 * The vehicle only drives east (i.e., it cannot turn around and drive west).
 * You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi]
 * indicates that the ith trip has numPassengersi passengers and the locations to pick them up and
 * drop them off are fromi and toi respectively. The locations are given as the number of kilometers
 * due east from the car's initial location.
 * 
 * Return true if it is possible to pick up and drop off all passengers for all the given trips,
 * or false otherwise.
 */

function carPooling(trips, capacity) {
  const locations = new Array(1001).fill(0);
  let usedCapacity = 0;

  for (let index = 0; index < trips.length; index++) {
    const [passengers, from, to] = trips[index];
    locations[from] += passengers;
    locations[to] -= passengers;
  }

  for (let index = 0; index < locations.length; index++) {
    usedCapacity += locations[index];
    if (usedCapacity > capacity) {
      return false;
    }
  }
  return true;
}

console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4)); // false
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5)); // true
