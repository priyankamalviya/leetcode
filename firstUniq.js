/* Q 387. EASY
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

var firstUniqChar = function (s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] || map[s[i]] === 0) {
            map[s[i]] = -1
        } else {
            map[s[i]] = i
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