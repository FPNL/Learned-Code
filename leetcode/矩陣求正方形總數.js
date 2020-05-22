// 題目
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/

// 看程式碼應該就懂概念，不懂就看這
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/643429/Python-DP-Solution-%2B-Thinking-Process-Diagrams-(O(mn)-runtime-O(1)-space)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let res = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0 && row > 0 && col > 0) {
        matrix[row][col] = Math.min(matrix[row - 1][col - 1], Math.min(matrix[row - 1][col], matrix[row][col - 1])) + 1;
      }

      res += matrix[row][col]
    }
  }
  return res;
};
