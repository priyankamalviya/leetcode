class Trie {
    constructor() {
        this.root = {}
    }

    insert(word) {
        let curr = this.root
        word.split('').forEach(ch => (curr = curr[ch] = curr[ch] || {}))
        console.log(curr)
        curr.isWord = true
        return curr
    }

    traverse(word) {
        let curr = this.root
        console.log(curr)
        for (let i = 0; i < word.length; i++) {
            if (!curr) return null
            curr = curr[word[i]]
        }
        return curr
    }

    search(word) {
        let node = this.traverse(word)
        return !!node && !!node.isWord
    }

    startsWith(word) {
        return !!this.traverse(word)
    }
}

const trie = new Trie();
console.log(trie.insert("apple"))
console.log(trie.search("apple")) // returns true
console.log(trie.search("app")) // returns false
console.log(trie.startsWith("app")) // returns true
console.log(trie.insert("app")) // returns true
// console.log(trie.search("app")) // returns true