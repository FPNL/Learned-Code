// leetcode 題目
// https://leetcode.com/problems/majority-element/
// 第二種方法好

/**
 * @param {number[]} nums
 * @return {number}
 */
// my method
function majorityElement(nums) {
  const halfTime = Math.floor(nums.length / 2);
  const count = new Map();
  for (const n of nums) {
    if (count.has(n)) {
      const c = count.get(n) + 1;
      count.set(n, c);
    } else {
      count.set(n, 1);
    }
    if (count.get(n) > halfTime) {
      return n;
    }
  }
};

// discuss method

// var majorityElement = function(nums) {
// return nums.sort()[Math.floor(nums.length /2)]
// }

// var majorityElement = function(nums) {
//     let major;
//     let count = 0;

//     for (const num of nums) {
//         if (count === 0) {
//             major = num;
//         }
//         count += major === num ? 1 : -1;
//     }
//     return major;
// }
