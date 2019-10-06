var longestPalindrome = function (s) {
    if (!s || s.length < 2) return s;

    let T = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));

    let left = 0;
    let right = 0;

    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            let isInnerPalin = T[i + 1][j - 1] || j - i <= 2;

            if (s.charAt(i) === s.charAt(j) && isInnerPalin) {
                T[i][j] = true;
            }

            if (j - i > right - left) {
                right = j;
                left = i;
            }
        }
    }

    return s.substring(left, right + 1)
};

console.log(longestPalindrome("ammajdbw"));

function newFunction(right, j) {
    right = j;
    return right;
}