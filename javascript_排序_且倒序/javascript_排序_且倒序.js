function sort排序要倒序或正序(data, sortBy) {
  let needReverse = true;
  //https://codepen.io/FPNL/pen/dQomga    JS-35
  return data.sort((a, b) => {
    let sortFlag = a[sortBy] - b[sortBy];
    return needReverse ? sortFlag * -1 : sortFlag;
    //直接參考物件裡面的鍵key，由於是每個逐一比對，如果為負，a會放前面
    //這是排序寫法 this.datas.sort(function(a, b){return a-b}); 但如果要倒排序，是乘上-1，也就是變成相反值
  });
}
