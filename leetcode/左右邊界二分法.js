// 題目
// https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1, end = n;
    while (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      if (!isBadVersion(mid)) start = mid + 1;
      else end = mid;
    }
    return start;
  };
};
