// 算物件廣度，條件：最後的值是陣列 #2

const obj = {
  a: {
    b: {
      c: []
    }
  },
  d: [],
  e: {
    f: []
  }
}
// 可以看到最後都是陣列

function checkValueIsEmpty(source) {
  const result = []; // 檢查結果
  const queue = JSON.parse(JSON.stringify(Object.values(source))); // 放入檢查列
  while (queue.length > 0) {
    const node = queue.shift(); // 把第一個檢查列的東西拿出來。
    if(typeof node === 'object' && Array.isArray(node)) { // 符合我們的條件就放到結果
      result.push(!node.length);
    }
    if(typeof node === 'object') { // 物件才會用到深度檢查
      const len = Object.values(node).length;
      const childrenNoe = Object.values(node); // 子節點
      for (let i = 0; i < len; i += 1) { // 若有子節點再放進 排隊列
        queue.push(childrenNoe[i]);
      }
    }
  }
  const everyResultIsEmpty = result.every(item => item)
  return everyResultIsEmpty;
}

// 就可以知道最後是不是空的
