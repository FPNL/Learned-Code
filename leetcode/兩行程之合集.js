// 題目
// https://leetcode.com/problems/interval-list-intersections/
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let pointerA = 0;
  let pointerB = 0;
  let answer = []
  while (pointerA < A.length && pointerB < B.length) {
    let left = Math.max(A[pointerA][0], B[pointerB][0]);
    let right = Math.min(A[pointerA][1], B[pointerB][1]);
    if (left <= right) {
      answer.push([left, right]);
    }
    if (right === A[pointerA][1]) {
      pointerA++;
    } else { // B[pointerB][1]
      pointerB++;
    }
  }
  return answer;
};
