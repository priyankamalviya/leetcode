/* Q.247 MEDIUM
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:

Input:  n = 2
Output: ["11","69","88","96"]
*/

var findStrobogrammatic = function (n) {
    if (n === 0) return [""]
    if (n === 1) return ["0", "1", "8"]
    let prevs = findStrobogrammatic(n - 2);
    const res = [],
        lefts = ["0", "1", "6", "8", "9"],
        rights = ["0", "1", "9", "8", "6"];
    for (let str of prevs) {
        for (let i = 0; i < lefts.length; i++)
            res.push(lefts[i] + str + rights[i])
    }
    return res;
}

console.log(findStrobogrammatic(3));