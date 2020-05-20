// 題目
// https://leetcode.com/problems/maximum-sum-circular-subarray/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  let total = 0, maxSum = -30000, curMax = 0, minSum = 30000, curMin = 0;
  for (let i = 0; i < A.length; i++) {
    const element = A[i]
    curMax = Math.max(curMax + element, element);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + element, element);
    minSum = Math.min(minSum, curMin);
    total += element;
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};

console.log(123, "<??", maxSubarraySumCircular([1, -2, 3, -3, 3, 4]));
