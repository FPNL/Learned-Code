// 題目
// https://leetcode.com/problems/implement-trie-prefix-tree/

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.next = {};
  this.end = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let nowNode = this;
  for (const letter of word) {
    if (!nowNode.next.hasOwnProperty(letter)) {
      nowNode.next[letter] = new Trie();
    }
    nowNode = nowNode.next[letter];
  }
  nowNode.end = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let nowNode = this;
  for (const letter of word) {
    if (nowNode.next.hasOwnProperty(letter)) {
      nowNode = nowNode.next[letter];
    } else {
      return false;
    }
  }
  return nowNode.end === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let nowNode = this;
  for (const letter of prefix) {
    if (!nowNode.next.hasOwnProperty(letter)) {
      return false;
    }
    nowNode = nowNode.next[letter];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
