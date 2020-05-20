// 題目
// https://leetcode.com/problems/flood-fill/
// 先假設 黑色是走過的顏色，白色是尚未走過的顏色。

// 在 dfs 方法裡，我們先確認座標存在與否，接著才確認是否有走過

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const whiteColor = image[sr][sc];
  const blackColor = newColor;
  return dfs(image, sr, sc, blackColor, whiteColor);
};

function dfs(image, sr, sc, blackColor, whiteColor) {
  if (!image[sr] || image[sr][sc] === undefined) {
    return image;
  }

  if (image[sr][sc] === whiteColor && image[sr][sc] !== blackColor) {
    image[sr][sc] = blackColor;
    dfs(image, sr, sc + 1, blackColor, whiteColor);
    dfs(image, sr, sc - 1, blackColor, whiteColor);
    dfs(image, sr + 1, sc, blackColor, whiteColor);
    dfs(image, sr - 1, sc, blackColor, whiteColor);
  }
  return image;
}
