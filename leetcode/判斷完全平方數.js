// 題目
// https://leetcode.com/problems/valid-perfect-square/

// 另有牛頓法
// 牛頓法解說
// https://www.youtube.com/watch?v=FQN0-KHAgRw

// Binary Search
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let lo = 0, hi = num;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let midSquare = Math.pow(mid, 2);
    if (midSquare === num) {
      return true;
    } else if (midSquare > num) {
      hi = mid - 1;
    } else if (midSquare < num) {
      lo = mid + 1;
    }
  }
  return false;
};
// 牛頓解法
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let r = num;
  while (r * r > num) {
    r = ((r + num / r) / 2) | 0;
  }
  return r * r === num;
};
/*
時間測試
https://leetcode.com/problems/valid-perfect-square/discuss/130010/Python-4-Methods-with-time-testing
I test these five methods with for i in range(100000): function(i), and get results as below.

Time for Bitwise's Method : 0.45249104499816895
Time for Newton's Method : 0.3492701053619385
Time for Math's Method : 2.641957998275757
Time for Binary Search's Method : 1.5031492710113525
Time for Linear's Method : 17.613927125930786
*/
