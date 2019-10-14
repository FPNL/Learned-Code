function filterRepeatArray(data) {
  return Array.from(new Set(data));
}
const data_zone = [1, 2, 5, 5, 5, 3, 5, 8, 9];
filterRepeatArray(data_zone); // [1,2,5,3,8,9]
