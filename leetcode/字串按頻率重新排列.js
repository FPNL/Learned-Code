// 題目
// https://leetcode.com/problems/sort-characters-by-frequency/


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] + 1 || 1;
  }
  s = Array.from(s)
  s.sort((a, b) => map[b] - map[a] || a < b && 1 || -1);
  return s.join('');
};
