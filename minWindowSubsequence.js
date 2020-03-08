var minWindow = function (S, T) {
    result = '';
    let minLength = S.length + 1;
    let j = 0;
    let end = -1;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === T[j]) {
            j++; // check
            if (j === T.length) {
                end = i + 1;
                j--;
                while (j > -1) {
                    if (S[i] === T[j]) {
                        j--; // optimize
                    }
                    i--;
                }
                i++;
                j++;
                if (minLength > end - i) {
                    minLength = end - i;
                    result = S.substring(i, end);
                }
            }
        }
    }

    return result;
};

console.log(minWindow("abcdefg", "bde"))