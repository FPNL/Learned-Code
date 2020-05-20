/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length < 2) {
    return true;
  }
  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];
  const a = (y1 - y2) / (x1 - x2)
  const b = y1 - a * x1;
  for (const coordinate of coordinates) {
    const x = coordinate[0];
    const y = coordinate[1];
    if (a * x + b !== y) {
      return false;
    }
  }
  return true;
};
