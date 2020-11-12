// 題目
// https://leetcode.com/problems/contiguous-array/

// 0 -> -1, 1 -> 1;
// 畫成圖表，其折返點的高度 X 2;
//            /
//  \        /
//   \/\/\  /
//        \/
// -1, -2, -1, -2, -1, -2, -3, -2, -1, 0, 1
// 只要有達到0, 他前面都算
// 為何？ 因為一開始就是 0 ...， 0 這個高度有出現過。
// 同理，只要高度有"出現過"，就可以計算最長的子自串
//  \
//   \/\/\
//        \
//         \
// -1, -2, -1, -2, -1, -2, -3, -4
//  0,  1,  2,  3,  4,  5,  6,  7
// map = {- 1: 0, -2: 1 } 記錄最早出現的高度
// if (map[-2]) max(current index - map[-2])
// else map[-2] = current index

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let maxLength = 0, countTotal = 0;
  const map = new Map([[0, -1]]);
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // countTotal += element === 0 ? -1 : 1; 相等下行
    if (element === 0) { countTotal--; } else { countTotal++; }

    if (map.has(countTotal)) {
      maxLength = Math.max(i - map.get(countTotal), maxLength);
    } else {
      map.set(countTotal, i);
    }
  }
  return maxLength;
};
