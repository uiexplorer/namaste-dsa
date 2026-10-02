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

  const stack = [node];
  const clonedNode = new Node(node.val);
  const visited = new Map();
  visited.set(node, clonedNode);

  while (stack.length) {
    const currentNode = stack.pop();
    for (const entity of currentNode.neighbors) {
      if (!visited.has(entity)) {
        stack.push(entity);
        visited.set(entity, new Node(entity.val));
      }
      visited.get(currentNode).neighbors.push(visited.get(entity));
    }
  }

  return clonedNode;
}
