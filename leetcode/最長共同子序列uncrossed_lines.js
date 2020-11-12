// 題目
// https://leetcode.com/problems/uncrossed-lines/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
  let m = A.length,
    n = B.length,
    dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (A[i - 1] == B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }

    }
  }
  return dp[m][n];
};
