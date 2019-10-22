/**

Let C(n) be the number of distinct binary trees with n nodes. This is equal to the number of trees that have a root, a left subtree with j nodes, and a right subtree of (n-1)-j nodes, for each j. That is,

    C(n) = C(0)C(n-1) + C(1)C(n-2) + ... + C(n-1)C(0)
which is

C0 = 1 & Cn = <integration of 0 to n-1> CiCn-1-i
 * @param {number} n
 * @return {number}
 */


const numTrees = (n) => {
    if (n <= 2) return n
    sol = [...Array(n + 1)].map(() => 0)
    sol[0] = 1
    sol[1] = 1
    for (let i = 2; i < n + 1; i++) {
        for (let left = 0; left < i; left++) {
            sol[i] += sol[left] * sol[i - 1 - left]
        }
    }
    return sol[n]

}

console.log(numTrees(3))