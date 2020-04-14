// 返還一個帶有英文字母的陣列
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomLetters() {
  // 控制大致上的數量，越大數量越少
  const multiple = 10;
  const q = getRandomInt(1, 57 / multiple);
  return Array.from({length: q}, (value, index) => String.fromCharCode(index * multiple + 65));
}

console.log(randomLetters());
