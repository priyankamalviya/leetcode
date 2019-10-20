/* Q 845 . LOngest Mountain in array
Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

B.length >= 3
There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
(Note that B could be any subarray of A, including the entire array A.)

Given an array A of integers, return the length of the longest mountain. 

Return 0 if there is no mountain.

*/

var longestMountain = function (A) {
    let len = A.length,
        count = 0,
        flag = 0;

    for (let i = 0; i < len; i++) {
        if (A[i] > A[i + 1]) {
            continue;
        }
    }

    for (let i = 0; i < len; i++) {
        if (A[i] < A[i + 1]) {
            count++;
            flag = i;
        }
    }

    if (flag === len) return count;

    // now start downward journey
    for (let i = flag + 1; i < len; i++) {
        if (A[i] > A[i + 1]) {
            count++;
        }
    }

    return count;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));