// 題目：
// https://leetcode.com/problems/median-of-two-sorted-arrays/

// 部分參考： https://youtu.be/do7ibYtv5nk

// 首先要了解這題目其實是問 nums1.concat(nums2).sort((a, b) => a - b); 的中位數。

// 接著中位數的切分，重點在分：分開後會變成左右兩半，
// 然後，以左半來說，左半的數字相當於 nums1 與 nums2 的聯集
// 且，這聯集條件會是小於中位數的數字。
// 所以到後面會發現： 左半邊的最大數 會 小於 右半邊的最小數，利用此特性來安排這個演算法
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const N1 = nums1.length;
  const N2 = nums2.length;
  // 先規定 num1 要是比較短的那方
  if (N1 > N2) {
    return findMedianSortedArrays(nums2, nums1);
  }

  // hi 是總體的量, lo 是偏差值， hi * 2 是因為需要從最右邊開始，而不是中間
  let lo = 0, hi = N1 * 2;
  const { MIN_SAFE_INTEGER, MAX_SAFE_INTEGER } = Number;
  while (lo <= hi) {
    // 切割點
    const mid1 = Math.floor((lo + hi) / 2);
    const mid2 = N1 + N2 - mid1;
    // mid1 or mid 2 === 0  代表 切割點 跑到最左邊了
    const L1 = (mid1 === 0) ? MIN_SAFE_INTEGER : nums1[Math.floor((mid1 - 1) / 2)];
    const L2 = (mid2 === 0) ? MIN_SAFE_INTEGER : nums2[Math.floor((mid2 - 1) / 2)];
    // mid1 === N1 * 2 代表 偏差值 (lo) 已經移到最右邊了，也剛好等於 N1
    // mid2 === N2 * 2 只有一種情況， mid2 已經來到最右邊了，且 N1 == N2
    const R1 = (mid1 === N1 * 2) ? MAX_SAFE_INTEGER : nums1[Math.floor(mid1 / 2)];
    const R2 = (mid2 === N2 * 2) ? MAX_SAFE_INTEGER : nums2[Math.floor(mid2 / 2)];
    if (L2 > R1) {
      lo = mid1 + 1;
    } else if (L1 > R2) {
      hi = mid1 - 1;
    } else {
      return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
    }
  }
  // 相當於錯誤回覆
  return -1;
};
