/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  // 0      0     0
  // 1      1     1
  // 2     10     1
  // 3     11     2
  // 4    100     1
  // 5    101     2
  // 6    110     2
  // 7    111     3
  // 8   1000     1
  // 9   1001.    2
  // 10. 1010.    2
  // 11. 1011.    3
  // 12. 1100.    2
  // 13. 1101.    3
  // 14. 1110.    3
  // 15. 1111.    4
  // 16 10000.    1
  let standard = 0, i = 1;
  let answer = [0];
  while (i <= num) {
    if ((i & (i - 1)) === 0) { //代表2的倍數
      standard = i;
    }
    answer.push(1 + answer[i % standard]);
    i++;
  }
  return answer;
};
