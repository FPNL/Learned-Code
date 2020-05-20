// 題目
// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map = {};
  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    map[letter] = map[letter] + 1 || 1;
  }
  let left = 0, right = 0, count = s1.length;
  while (right < s2.length) {
    map[s2[right]] = map[s2[right]] || 0;
    map[s2[left]] = map[s2[left]] || 0;

    if (map[s2[right++]]-- >= 1) {
      count--;
    }

    if (count === 0) {
      return true;
    }

    if ((right - left) === s1.length && map[s2[left++]]++ >= 0) {
      count++;
    }
  }
  return false;
};


checkInclusion(
  "ab",
  "eidbaooo")
