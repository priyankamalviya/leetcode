const count = (A, B, target) => {
    let n = A.length,
        countTop = 0,
        countBot = 0;

    for (let i = 0; i < n; i++) {
        if (A[i] !== target && B[i] !== target) {
            return -1;
        } else if (A[i] !== target) {
            countTop++;
        } else if (B[i] !== target) {
            countBot++;
        }
    }
    return Math.min(countTop, countBot);
}
var minDominoRotations = function (A, B) {
    if (A[0] === B[0]) {
        return count(A, B, A[0]);
    }
    return Math.max(count(A, B, A[0]), count(A, B, B[0]));
};

console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));