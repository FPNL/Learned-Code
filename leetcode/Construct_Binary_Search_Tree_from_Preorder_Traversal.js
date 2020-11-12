// 題目
// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// var bstFromPreorder = function (preorder) {
//   const root = new TreeNode(preorder.shift());
//   let nowNode = root;
//   let direction = 'left';
//   while (preorder.length) {
//     let n = preorder[0];
//     direction = n < nowNode.val ? 'left' : 'right';
//     if (nowNode[direction]) {
//       nowNode = nowNode[direction];
//     } else {
//       nowNode[direction] = new TreeNode(preorder.shift());
//       nowNode = root;
//     }
//   }
//   return root;
// };

// 李哥之解
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
  let i = 0;
  function Recursive(A, bound) {
    if (i === A.length || A[i] > bound) {
      return null;
    }
    let root = new TreeNode(A[i++]);
    root.left = Recursive(A, root.val);
    root.right = Recursive(A, bound);
    return root;
  }
  return Recursive(preorder, Number.MAX_SAFE_INTEGER);
}
