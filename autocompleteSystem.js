/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
class AutocompleteSystem {
    constructor() {
        this.trie = {};
        this.inputString = "";
    }

    insert(sentences, freq) {
        for (let i = 0; i < sentences.length; i++) {
            this.insertSentence(sentences[i], freq[i])
        }
    }

    insertSentence(sentence, freq) {
        let node = this.trie;
        for (let char of sentence) {
            if (node[char] == null) node[char] = {};
            node = node[char];
        }
        node.isEnd = true;
        node.freq = node.freq + 1 || freq;
    }

    input(c) {
        if (c == '#') {
            this.insert(this.inputString, 1);
            this.inputString = ""; // reset the input string once its inserted into the trie
            return [];
        }

        this.inputString += c;
        let node = this.trie;
        let result = {};
        // initial traverse 
        for (let char of this.inputString) {
            if (node[char]) node = node[char];
            else return [];
        }

        let dfs = function (root, char) {
            for (let key in root) {
                if (key == 'isEnd') { // found a complete sentence
                    if (!result[root.freq]) result[root.freq] = []; // housekeeping initialize
                    result[root.freq].push(char);
                    result[root.freq].sort();
                }
                dfs(root[key], char + key);
            }
        }

        // dfs on rest of the nodes
        dfs(node, this.inputString);

        // sort and filter
        let sorted = [];
        let sortedKeys = [...Object.keys(result)].sort((a, b) => b - a);
        for (let key of sortedKeys) sorted.push(...result[key]);

        return sorted.slice(0, 3); // sort and return the hottest 3
    };
};


const autoComplete = new AutocompleteSystem();
const res1 = autoComplete.insert(["i love you", "island", "ironman", "i love leetcode"], [5, 3, 2, 2]);

const searchAWord = autoComplete.input("i")

console.log(searchAWord);