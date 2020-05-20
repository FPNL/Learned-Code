// 題目
// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let list = [];
  if (!s.length || !p) {
    return list;
  }
  let map = {};
  // 把 p 各字母出現次數紀錄
  for (let i = 0; i < p.length; i++) {
    map[p[i]] = map[p[i]] === undefined ? 1 : map[p[i]] + 1;
  }
  //two points, initialize count to p's length
  let left = 0, right = 0, count = p.length;
  while (right < s.length) {
    //move right everytime, if the character exists in p's hash, decrease the count
    //current hash value >= 1 means the character is existing in p
    map[s[right]] = map[s[right]] || 0;
    map[s[left]] = map[s[left]] || 0;
    if (map[s[right++]]-- >= 1) {
      count--;
    }

    //when the count is down to 0, means we found the right anagram
    //then add window's left to result list
    if (count === 0) {
      list.push(left);
    }

    //if we find the window's size equals to p, then we have to move left (narrow the window) to find the new match window
    //++ to reset the hash because we kicked out the left
    //only increase the count if the character is in p
    //the count >= 0 indicate it was original in the hash, cuz it won't go below 0
    if (right - left === p.length && map[s[left++]]++ >= 0) {
      count++;
    }
  }
  return list;
};
