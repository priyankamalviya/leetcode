// Leetcode problem 870

function advantageCount(A, B) {
    const idxs = B.map((v, i) => i).sort((a, b) => B[b] - B[a]);
    A.sort((a, b) => b - a);
    console.log(idxs);
    const res = [];
    for (let i = 0; i < B.length; i++) {
        res[idxs[i]] = A[0] > B[idxs[i]] ? A.shift() : A.pop();
    }
    return res;
}

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));