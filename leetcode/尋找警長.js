// 題目
// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let currentWinner = N,
    a = 0,
    b = 0;
  const map = { [currentWinner]: 0 };

  for (let i = 0; i < trust.length; i++) {
    a = trust[i][0];
    b = trust[i][1];
    map[b] = map[b] ? map[b] + 1 : 1;
    map[a] = map[a] ? map[a] - 1 : -1;
    if (map[b] > map[currentWinner]) {
      currentWinner = b;
    }
  }

  if (map[currentWinner] === (N - 1)) {
    return currentWinner;
  }
  return -1;
};
