// 題目
// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const arrJ = Array.from(J);
  const arrS = Array.from(S);
  return arrS.filter(stone => arrJ.includes(stone)).length;
};

var another = (J, S) => {
  let originSLength = S.length;
  for (let i = 0; i < J.length; i++) {
    let c = J[i];
    S = S.replace(/c/g, '');
  }
  return originSLength - S.length
}
