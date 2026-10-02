/**
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * 
 * class Node {
 *   public int val;
 *   public List<Node> neighbors;
 * }
 */

function cloneGraph(node) {
  if (!node) return null;
  const queue = [node];
  const visited = new Map();
  const clonedNode = new Node(node.val)
  visited.set(node, clonedNode);

  while (queue.length) {
    const currentNode = queue.shift();
    for (const entity of currentNode.neighbors) {
      if (!visited.has(entity)) {
        queue.push(entity);
        visited.set(entity, new Node(entity.val));
      }
      const cloneOfCurrent = visited.get(currentNode);
      cloneOfCurrent.neighbors.push(visited.get(entity));
    }
  }

  return clonedNode;
}