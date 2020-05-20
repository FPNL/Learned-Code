// 題目
// https://leetcode.com/problems/cousins-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let nodes = mapStructure(root, x, y);
  if (!nodes.has(x) || !nodes.has(y)) { // means x and y are not in same depth
    return false;
  }

  const xData = nodes.get(x), yData = nodes.get(y);
  return xData.depth === yData.depth && xData.parent !== yData.parent;
};

function mapStructure(root, x, y) {
  const q = [];
  const nodes = new Map();

  root.depth = 0;
  root.parent = null;
  q.push(root);

  while (q.length > 0) {
    let current = q.shift();

    nodes.set(current.val, {
      depth: current.depth,
      parent: current.parent
    });

    if (current.val == x || current.val == y) {
      continue;
    }
    if (current.left) {
      current.left.depth = current.depth + 1;
      current.left.parent = current.val;
      q.push(current.left);
    }
    if (current.right) {
      current.right.depth = current.depth + 1;
      current.right.parent = current.val;
      q.push(current.right);
    }
  }
  return nodes;
}
