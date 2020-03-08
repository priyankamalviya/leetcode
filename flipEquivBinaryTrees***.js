/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(8);

const root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.left.right = new TreeNode(6);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(5);
root2.right.right.left = new TreeNode(8);
root2.right.right.right = new TreeNode(7);


var flipEquiv = function (t1, t2) {
    // if (root1 === null && root2 === null) return true;
    // if (root1 === null || root2 === null || root1.val !== root2.val) return false;
    // return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right) || flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
    const stack = [
        [t1, t2]
    ];
    while (stack.length) {
        const [node1, node2] = stack.pop();
        if (node1 || node2) {
            if (!node1 || !node2 || node1.val !== node2.val) return false;

            if ((!node1.left && !node2.left) ||
                (node1.left && node2.left && node1.left.val === node2.left.val))
                stack.push([node1.left, node2.left], [node1.right, node2.right]);
            else if ((!node1.left && !node2.right) ||
                (node1.left && node2.right && node1.left.val === node2.right.val)) stack.push([node1.left, node2.right], [node1.right, node2.left]);
            else return false;
        }
    }
    return true;
};

// console.log(flipEquiv(root1, root2));