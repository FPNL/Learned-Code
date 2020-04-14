// 參考： https://youtu.be/KqU4fgU-Y-E?t=348
// https://zh.wikipedia.org/wiki/%E5%B9%BB%E6%96%B9
function makeMagicSquare(squareLength) {
  const matrix = makeInitMagicSquare(squareLength);

  // Index start from 0.
  // e.g: squareLength is 3, so middle of array is 1,
  // but index start from 0, so it should minus 1.
  const limitIndex = squareLength - 1;
  let nowX = (limitIndex) / 2;
  let nowY = 0;

  // init matrix
  const beginNumber = 1;
  matrix[nowY][nowX] = beginNumber;

  for (let number = beginNumber; number < Math.pow(squareLength, 2); number++) {
    [nowX, nowY] = searchNextPoint(nowX, nowY, squareLength, number);

    const nextNumber = number + 1;
    matrix[nowY][nowX] = nextNumber;
  }
  return matrix;
}

function searchNextPoint(nowX, nowY, squareLength, number) {
  let nextX, nextY;
  if (number % squareLength === 0) {
    nextY = nowY + 1;
    nextX = nowX;
  } else {
    nextX = nowX - 1;
    nextY = nowY - 1;
  }

  const limitIndex = squareLength - 1;
  if (nextY < 0) {
    nextY = limitIndex;
  }
  if (nextX < 0) {
    nextX = limitIndex;
  }

  return [nextX, nextY];
}

function makeInitMagicSquare(slide) {
  // const eachArrInInitArr = Array.from({ length: slide }, () => 0);
  const eachArrInInitArr = new Array(slide).fill(0);

  const initArr = Array.from({ length: slide }, () => eachArrInInitArr.slice());

  return initArr;
}

console.log( makeMagicSquare(3) );
