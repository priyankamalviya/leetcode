/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    let temp = [];
    // find height of tree
    var treeHeight = function (root) {
        if (!root) return 0;
        var leftHeight = treeHeight(root.left);
        var rightHeight = treeHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    let height = treeHeight(root);

    var levelTree = function (root, level) {
        if (!root) return;
        if (level === 1) {
            temp.push(root.val);
        } else if (level > 1) {
            levelTree(root.left, level - 1);
            levelTree(root.right, level - 1);
        }
        return temp;
    }

    // iterate from 1 to height of tree and call levelTree function on left and right child
    for (let i = 1; i <= height; i++) {
        levelTree(root, i);
        res.push(temp);
        temp = [];
    }

    return res;
};