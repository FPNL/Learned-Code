// 題目是連續的小於等於
// https://leetcode.com/problems/online-stock-span/

// 此法為可不連續小於等於

class StockSpanner2 {
  history = [];

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let mid = 0, lo = 0, hi = this.history.length;
    while (lo <= hi) {
      mid = Math.floor((lo + hi) / 2);
      if (price >= this.history[mid]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    if (price >= this.history[mid]) {
      mid += 1;
    }
    this.history.splice(mid, 0, price);
    return mid + 1;
  };
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var obj = new StockSpanner2()
console.log(
  obj.next(100),
  obj.next(80),
  obj.next(60),
  obj.next(70),
  obj.next(60),
  obj.next(75),
  obj.next(85),
);
