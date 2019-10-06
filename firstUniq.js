var firstUniqChar = function(s) {
    let map = {};

    for(let i = 0; i < s.length; i++) {
    if (map[s[i]] || map[s[i]] === 0) {
        map[s[i]] = -1
    } else {
        map[s[i]]= i
    }
}

 let result = Object.values(map).filter(val => val >= 0)
    if (result.length === 0) {
        return -1
    } else {
        return result[0]
    }
};

console.log(firstUniqChar("leetcode"));