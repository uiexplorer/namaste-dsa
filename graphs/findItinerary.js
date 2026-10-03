/**
 * You are given a list of airline tickets where tickets[i] = [fromi, toi] represent
 * the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.
 * All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK".
 * If there are multiple valid itineraries,
 * you should return the itinerary that has the smallest lexical order when read as a single string.
 * For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
 * You may assume all tickets form at least one valid itinerary.
 * You must use all the tickets once and only once.
 */

function findItinerary(tickets) {
  const result = [];
  const connectionMap = {};

  for (const [from, to] of tickets) {
    if (!connectionMap[from]) connectionMap[from] = [];
    connectionMap[from].push(to);
  }

  for (const key in connectionMap) {
    const toStations = connectionMap[key];
    connectionMap[key] = toStations.sort();
  }

  const dfs = (currentStation) => {
    const destination = connectionMap[currentStation] || [];
    while (destination.length) {
      dfs(connectionMap[currentStation].shift());
    }
    result.push(currentStation);
  };
  dfs("JFK");

  return result.reverse();
}

console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "JFK"], ["ATL", "AAA"], ["AAA", "ATL"], ["ATL", "BBB"], ["BBB", "ATL"], ["ATL", "CCC"], ["CCC", "ATL"], ["ATL", "DDD"], ["DDD", "ATL"], ["ATL", "EEE"], ["EEE", "ATL"], ["ATL", "FFF"], ["FFF", "ATL"], ["ATL", "GGG"], ["GGG", "ATL"], ["ATL", "HHH"], ["HHH", "ATL"], ["ATL", "III"], ["III", "ATL"], ["ATL", "JJJ"], ["JJJ", "ATL"], ["ATL", "KKK"], ["KKK", "ATL"], ["ATL", "LLL"], ["LLL", "ATL"], ["ATL", "MMM"], ["MMM", "ATL"], ["ATL", "NNN"], ["NNN", "ATL"]])); // ["JFK", "SFO", "JFK", "ATL", "AAA", "ATL", "BBB", "ATL", "CCC", "ATL", "DDD", "ATL", "EEE", "ATL", "FFF", "ATL", "GGG", "ATL", "HHH", "ATL", "III", "ATL", "JJJ", "ATL", "KKK", "ATL", "LLL", "ATL", "MMM", "ATL", "NNN", "ATL"]
console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])); // ["JFK", "MUC", "LHR", "SFO", "SJC"]
console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]])); // ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
