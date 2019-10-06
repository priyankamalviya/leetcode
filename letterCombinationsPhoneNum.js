/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let pairs = [];
    const map = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    if (digits.length !== 0) {
        backTrack("", digits);
    }

    function backTrack(combination, next_digits) {

        if (next_digits.length === 0) {
            // return map[digits].split('');
            pairs.push(combination);
        } else {
            let digit = next_digits.substring(0, 1);
            let letters = map[digit];
            for (let i = 0; i < letters.length; i++) {
                let letter = map[digit].substring(i, i + 1);
                // append the current letter to the combination
                // and proceed to the next digits
                backTrack(combination + letter, next_digits.substring(1));
            }
        }
    }
    return pairs;
};


console.log(letterCombinations('23'));