/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.left.left = new TreeNode(null);
root.left.left.right = new TreeNode(null);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) return root;
    var resL = lowestCommonAncestor(root.left, p, q);
    var resR = lowestCommonAncestor(root.right, p, q);
    return (resL && resR) ? root : (resL || resR);
    // if (!root || root === p || root === q) return root;
    // let left = lowestCommonAncestor(root.left, p, q);
    // let right = lowestCommonAncestor(root.right, p, q);
    // if (left === null && right === null) return null;
    // else if (left !== null && right !== null) return root;
    // else if (left !== null && right === null) {
    //     return left;
    // } else {
    //     return right;
    // }
};

console.log(lowestCommonAncestor(root, 5, 1));