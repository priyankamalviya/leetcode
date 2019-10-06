function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);
root.right = new TreeNode(6);

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

const preorder = (root) => {

    const result = [];
    const traverse = (root) => {
        result.push(root.val);
        if (root.left) {
            traverse(root.left);
        }
        if (root.right) {
            traverse(root.right);
        }
    }
    traverse(root);

    return result;
}

console.log(preorder(root));