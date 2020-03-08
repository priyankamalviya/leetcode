// input: S = "baaabbabbb"
// output = 7, length of "aabbabb'" -> longest semi alternating substring


// input: S = "babba"
// output = 5, "babba" is semi alternating


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(str) {
    // write your code in JavaScript (Node.js 8.9.4)

    // substring - semi alternating - should not have more than 2 repititions
    // hmm so temo shuld be 2 and we should have a system to keep resetting it?
    // we need a result and a temp to keep count and need to update them as we find // consecutive characters

    let len = str.length;
    // corner condition
    if (len < 3) return len;

    let temp = 2,
        result = 2;

    for (let i = 2; i < len; i++) {
        if (str.charAt(i) !== str.charAt(i - 1) ||
            str.charAt(i) !== str.charAt(i - 2)) {
            temp++; // looking for consecutive characters
        } else {
            result = Math.max(result, temp);
            // reset temp
            temp = 2;
        }
    }
    result = Math.max(result, temp);
    return result;
}