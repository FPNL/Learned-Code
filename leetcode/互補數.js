// 題目
// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const ourTarget = target - num;
    if (map.has(ourTarget)) {
      return [map.get(ourTarget), index]
    }
    map.set(num, index);
  }
};
