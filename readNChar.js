/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        let temp = new Array(4);
        let index = 0;
        let count = 0;

        while (n > 0) {
            count = read4(temp);

            let len = Math.min(count, n);

            for (let i = 0; i < len; i++) {
                buf[index] = temp[i];
                index++;
            }

            n = n - len;
            if (count < 4) {
                break;
            }
        }
        return index + 1;
    };
};