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
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root ===q) return root;
    let left = lowestCommonAncestor(root.left, p,q);
    let right = lowestCommonAncestor(root.right, p, q);
    if(left === null && right ===null) return null;
    else if(left !==null && right !== null) return root;
    else if(left !==null && right === null) {
        return left;
    } else {
        return right;
    }
};

console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4],5,1));