// 物件採參考值。
// 需在有初始化的 state 賦值，才會觸發 setter, getter。

const state = () => {
  res: {
    all: {
      c: 'd',
    }
  }
 }

 const mutation = () => {
  change(state, _payload) {

    state.res.all.a = 'b'; // 並不是給 all 賦值的方式，所以没觸發。

    const changedValue = {typeA: 'b'}
    changedValue.typeB = 'c';
    state.res.all = changedValue; // 給 all 賦值的了（就是那個等號），所以觸發了 setter, getter。

    state.res.all.c = 'e'; // 也是行的。
  }
 }
