/**
 * @param {string} s
 * @return {number}
 */


var numDecodings = function (s) {
    let memo = new Array(s.length + 1).fill(null);
    return decodeHelper(s, s.length, memo);
};

var decodeHelper = function (s, k, memo) {
    if (k === 0) return 1;

    let start = s.length - k;

    if (s[start] === '0') return 0;

    if (memo[k] !== null) {
        return memo[k];
    }

    result = decodeHelper(s, k - 1, memo);

    if (k >= 2 && parseInt(s.substring(start, start + 2)) < 27) {
        result += decodeHelper(s, k - 2, memo);
    }

    memo[k] = result;
    return result;
}

console.log(numDecodings("227"));