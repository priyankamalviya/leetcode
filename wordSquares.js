/**
 * @param {string[]} words
 * @return {string[][]}
 */

/*
var wordSquares = function(words) {
    let result = []
    let trie = new Trie()
    for (let word of words) {
      trie.add(word)
    }
    
    findWordSquare(result, [], trie)
    return result;
  };
  
  
  var findWordSquare = function (result, temp, trie) {
    if (temp.length > 0 && temp.length === temp[0].length) {
      result.push(temp)
      return
    }
    
    let prefix = ''
    let col = temp.length; // swap row and column
    for (let row = 0; row < temp.length; row++) {
      prefix += temp[row][col];
    }
    
    let startWith = trie.startWith(prefix)
    for (let word of startWith) {
      findWordSquare(result, temp.concat([word]), trie)
    }
  }
  
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

*/


let Trie= class {
    constructor(){
        this.child=[];
        this.starts=[];
    }
};
var wordSquares = function(words) {
    let m = words[0].length;
    let n = words.length;
    let start = new Trie();
    let res = [];
     //if(words.length<n)return res;
    //build trie
    for(let i=0; i< n;++i){
        let word = words[i];
        let cur = start;
        //store words in trie
        for(let j=0; j< m;++j){
            let idx = word.charCodeAt(j)-"a".charCodeAt(0);
            if(cur.child[idx]==null){
                cur.child[idx]= new Trie();
            }
            cur.starts.push(word);
            cur=cur.child[idx];
        }
    }
    let current = [];
    generate(res,current,start,0,m, words);
    return res;
};

var generate = function(res,cur, trie, row, m,words){
    if(row>=m){
        res.push(cur.slice());
        return ;
    }
    //make sure theres a word that exists in the trie comparing each row's index return if there isn't
    let current = trie;
    let str = "";
    for(let j=0; j<row;++j){
        let idx = cur[j].charCodeAt(row)-"a".charCodeAt(0);
        if(current.child[idx]==null ){
            return;
        }
        current=current.child[idx];
    }
    for(let i=0; i < current.starts.length;++i){
        let next = current.starts[i];
        cur.push(next);
        generate(res,cur,trie,row+1,m,words);
        cur.pop();
    }
};



console.log(wordSquares(["abat","baba","atan","atal"]));