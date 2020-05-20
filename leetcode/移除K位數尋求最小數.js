// 題目
// https://leetcode.com/problems/remove-k-digits/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stackArr = [], len = num.length;
  if (k == len) {
    return "0";
  }
  let i = 0;
  while (i < num.length) {
    while (k > 0 && stackArr.length && stackArr[stackArr.length - 1] > num[i]) {
      stackArr.pop();
      k--;
    }
    stackArr.push(num[i]);
    i++;
  }
  // num="111", k=1，就變成多尾數
  while (k > 0) {
    stackArr.pop();
    k--;
  }
  // 移除前頭的字串 '0'
  while (stackArr[0] === '0' && stackArr.length > 1) {
    stackArr.shift()
  }

  return stackArr.join('')
};
