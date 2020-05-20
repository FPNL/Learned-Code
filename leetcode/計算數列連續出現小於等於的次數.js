// 題目
// https://leetcode.com/problems/online-stock-span/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let i = 1, evenCurrNode;
  let evenNode = evenCurrNode = head.next;
  let oddNode = head;
  while (oddNode.next !== null && evenNode.next !== null) {
    if (i % 2 === 1) {
      oddNode.next = evenNode.next;
      oddNode = oddNode.next;
    } else {
      evenCurrNode.next = oddNode.next;
      evenCurrNode = evenCurrNode.next;
    }
    i++;
  }
  head.next = evenNode;
  return head;
};
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
