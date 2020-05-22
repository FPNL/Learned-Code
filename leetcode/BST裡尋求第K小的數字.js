// 題目
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let st = [];
  while (root != null) {
    st.push(root);
    root = root.left;
  }
  while (k != 0) {
    let n = st.pop();
    k--;
    if (k == 0) {
      return n.val;
    }
    let right = n.right;
    while (right != null) {
      st.push(right);
      right = right.left;
    }
  }
  return -1; // never hit if k is valid
};
