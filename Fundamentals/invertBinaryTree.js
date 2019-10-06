/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.right = new TreeNode(9);
root.right.left = new TreeNode(6);

var invertTree = function (root) {
    if (!root) return null;
    let temp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;
    return root;
};

console.log(invertTree(root))