// 題目
// https://leetcode.com/problems/ransom-note/

var canConstruct = function (ransomNote, magazine) {
  const ransomNoteArr = Array.from(ransomNote);
  const oldMagazineLength = magazine.length;
  ransomNoteArr.forEach(item => {
    magazine = magazine.replace(item, '');
  })

  return oldMagazineLength === magazine.length + ransomNoteArr.length;

};
