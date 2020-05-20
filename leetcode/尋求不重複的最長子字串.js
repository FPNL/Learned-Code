// 題目
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   const set = new Set();
//   const arrLength = s.length;
//   const arr = Array.from(s);
//   let ans = 0, i= 0, j = 0;
//   while(i < arrLength && j < arrLength) {
//     if(!set.has(arr[j])) {
//       set.add(arr[j++]); // after set will add arr[j], then j+1.
//       ans= Math.max(ans, j - i);
//     } else {
//       set.delete(arr[i++]); // after set will delete arr[i], then i+1.
//     }
//   }
//   return ans;
// };

function lengthOfLongestSubstring(s) {
  let arr = Array.from(s),
    ans = 0,
    map = new Map();
  for (let j = 0, i = 0; j < arr.length; j++) {
    if (map.has(arr[j])) {
      i = Math.max(map.get(arr[j]), i); // i 目前 head 定位點
    }
    ans = Math.max(ans, j - i + 1); // j is 定位點尾巴 (rear) , 1 是基本値.
    // 因為是 lenth 第一個元素也要包含進去
    // 2~10 多少個數字？ 10 - 2 + 1 ， 1 就是 基本值
    map.set(arr[j], j + 1);
  }
  return ans;
}
