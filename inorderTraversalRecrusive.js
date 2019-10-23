/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(null);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

var inorderTraversal = function (root) {
    let result = [];

    const dfs = (root) => {
        if (root != null) {
            dfs(root.left);
            result.push(root.val);
            dfs(root.right);
        }
    }
    dfs(root);
    return result;
};

console.log(inorderTraversal(root));