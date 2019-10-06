var wordBreak = function (s, wordDict) {
    let f = new Array(s.length + 1).fill(false);

    f[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (f[j] && wordDict.includes(s.substring(j, i))) {
                f[i] = true;
                break;
            }
        }
    }

    return f[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]))