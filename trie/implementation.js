/**
 * Implement Trie (Prefix Tree).
 */


var Trie = function () {
  this.root = {
    children: {},
    isEndOfWord: false
  };
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children[char]) {
      current.children[char] = {
        children: {},
        isEndOfWord: false
      };
    }
    current = current.children[char];
  }
  current.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
  }
  return current.isEndOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const char of prefix) {
    if (!current.children[char]) {
      return false;
    }
    current = current.children[char];
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
