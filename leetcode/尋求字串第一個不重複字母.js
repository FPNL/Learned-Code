// 題目
// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    map[c] = map[c] ? map[c] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c] === 1) { return i; }
  }

  return -1;
};
