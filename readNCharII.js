/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
// let tempPtr = 0;
// let tempCount = 0;
// let temp = new Array(4);
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    let tempPtr = 0;
    let tempCount = 0;
    let temp = new Array(4);
    return function (buf, n) {
        let total = 0;
        while (total < n) {
            if (tempPtr === 0) {
                tempCount = read4(temp);
            }

            if (tempCount === 0) break;

            while (total < n && tempPtr < tempCount) {
                buf[total++] = temp[tempPtr++];
            }

            if (tempPtr === tempCount) tempPtr = 0;

            if (tempCount < 4) break;
        }
        return total;
    };
};