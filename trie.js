var Trie = function () {
    this.isWord = false
    this.children = new Map()
  }
  
  Trie.prototype.add = function (word) {
    let cur = this
    for (let i = 0; i < word.length; i++) {
      if (!cur.children.has(word[i])) {
        cur.children.set(word[i], new Trie())
      }
      cur = cur.children.get(word[i])
    }
    cur.isWord = true
  }
  
  Trie.prototype.startWith = function (prefix) {
    let cur = this
    for (let i = 0; i < prefix.length; i++) {
      if (cur.children.has(prefix[i])) {
        cur = cur.children.get(prefix[i])
      } else {
        return []
      }
    }
    let res = []
    var findWords = function (res, cur, str) {
      if (!cur.isWord) {
        for (let [key, val] of cur.children) {
          findWords(res, val, str + key)
        }
      } else {
        res.push(str)
      }
    }
    
    findWords(res, cur, prefix)
    return res
}