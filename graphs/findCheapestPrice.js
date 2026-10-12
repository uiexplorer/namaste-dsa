/**
 * There are n cities connected by some number of flights.
 * You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that
 * there is a flight from city fromi to city toi with cost pricei.
 * You are also given three integers src, dst, and k,
 * return the cheapest price from src to dst with at most k stops.
 * If there is no such route, return -1.
 */

function findCheapestPrice(n, flights, src, dst, k) {
  const graph = Array.from({ length: n }, () => []);
  let cheapestPrice = new Array(n).fill(Infinity);
  cheapestPrice[src] = 0;
  const queue = [[src, 0, 0]]

  for (const [u, v, w] of flights) {
    graph[u].push([v, w]);
  }

  while (queue.length) {
    const [city, cost, stops] = queue.shift();
    if (stops > k) continue;
    for (const [to, price] of graph[city]) {
      if (cost + price < cheapestPrice[to]) {
        cheapestPrice[to] = cost + price;
        queue.push([to, cheapestPrice[to], stops + 1]);
      }
    }
  }
  return cheapestPrice[dst] === Infinity ? -1 : cheapestPrice[dst];
}

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)); // 700
