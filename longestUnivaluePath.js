/**
 * Definition for a binary tree node. 
 * 
 * Q 687. Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.
 * */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(5);
// [5,4,5,1,1,5]

/**
 * @param {TreeNode} root
 * @return {number}
 */

function longestUnivaluePath() {
    let res = 0;
    const postorder = function (root) {
        console.log("root is: ", root);
        if (root == null) return 0;
        let l = postorder(root.left);
        let r = postorder(root.right);
        console.log("l is: ", l);
        console.log("r is: ", r);
        if (root.left != null) l = (root.val == root.left.val ? l + 1 : 0);
        if (root.right != null) r = (root.val == root.right.val ? r + 1 : 0);
        res = Math.max(res, l + r);
        return Math.max(l, r);
    }
    postorder(root);
    return res;
};

console.log(longestUnivaluePath(root));