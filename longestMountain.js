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