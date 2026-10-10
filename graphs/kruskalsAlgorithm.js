/**
 * Find MST & MSTC for undirected, connected & weighted graph.
 */

function findMSTC(n, graph) {
  const spanningTree = [];
  let mstCost = 0;
  const unionFind = new UnionFind(n);

  graph.sort((u, v) => u[2] - v[2]);

  for (const [u, v, w] of graph) {
    if (unionFind.union(u, v)) {
      mstCost += w;
      spanningTree.push([u, v, w]);
    }
  }

  return { spanningTree, mstCost };
}

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]);
    }
    return this.parent[u];
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);

    if (rootU === rootV) return false;

    if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    }
    else if (this.rank[rootV] > this.rank[rootU]) {
      this.parent[rootU] = rootV;
    }
    else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
    }

    return true;
  }
}

const edges = [
  [0, 1, 4], [0, 2, 4], [1, 2, 2],
  [2, 3, 3], [2, 5, 2], [2, 4, 4],
  [3, 4, 3], [5, 4, 3]
];

console.log(findMSTC(6, edges));
