/** DECODE WAYS DP SOLUTION WITHOUT MEMO */

let result = 0;
var numDecodings = function (s) {
    let result = 0;
    return decodeHelper(s, s.length);
};

var decodeHelper = function (s, k) {
    if (k === 0) return 1;

    let start = s.length - k;

    if (s[start] === '0') return 0;

    result = decodeHelper(s, k - 1);

    if (k >= 2 && parseInt(s.substring(start, start + 2)) < 27) {
        result += decodeHelper(s, k - 2);
    }
    return result;
}

console.log(numDecodings("227"));

// var numDecodings = function(s) {

//     let oneDigit = 1;
//     let twoDigit = 0;

//     for (let i = 1; i <= s.length; i++) {
//       let curDigit = 0;
//       /** Check one digit. */
//       if (s[i - 1] !== '0')
//         curDigit += oneDigit;

//       /** Check two digit. */
//       const num = Number(s.substring(i - 2, i));
//       if (num >= 10 && num <= 26)
//         curDigit += twoDigit;
//        /** Rolling. */
//       twoDigit = oneDigit;
//       oneDigit = curDigit;
//       }
//      return oneDigit;
//   };

//   console.log(numDecodings("12"));