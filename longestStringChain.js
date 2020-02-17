var longestStrChain = function (words) {
    let DP = {};
    words.sort((a, b) => a.length - b.length);
    for (let word of words) {
        let longest = 0;
        for (let i = 0; i < words.length; i++) {
            let prefix = word.slice(0, i) + word.slice(i + 1); // .slice(i+1) takes last char, for ex: bca will give 3 prefixes, bc, ba and ca
            longest = Math.max(longest, (DP[prefix] || 0) + 1);
        }
        DP[word] = longest;
    }
    return Math.max(...Object.values(DP));
};


// console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));

console.log(longestStrChain(["ksqvsyq", "ks", "kss", "czvh", "zczpzvdhx", "zczpzvh", "zczpzvhx", "zcpzvh", "zczvh", "gr", "grukmj", "ksqvsq", "gruj", "kssq", "ksqsq", "grukkmj", "grukj", "zczpzfvdhx", "gru"]));