/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const numBinaryLength = num.toString(2).length;
  const allOneBinary = (1 << numBinaryLength) - 1;
  const NOTnum = ~num;
  return NOTnum & allOneBinary
};
