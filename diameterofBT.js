/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);

var diameterOfBinaryTree = function (root) {
    let count = 0;

    const dfs = (root) => {

        if (root === null) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        count = Math.max(count, left + right + 1);
        return Math.max(left, right) + 1;
    }
    dfs(root);

    return count - 1;
}


console.log(diameterOfBinaryTree(root));