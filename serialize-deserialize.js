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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = [];
    const traverse = (root) => {
        if (!root) return;
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
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data || data.length === 0) {
        return null;
    }
    let root = new TreeNode(data[0]);

    for (let i = 1; i < data.length; i++) {
        let val = data[i];
        let node = new TreeNode(val);
        let next = root;
        while (next) {
            if (val < next.val) {
                if (next.left) {
                    next = next.left;
                } else {
                    next.left = node;
                    break;
                }
            }
            if (val >= next.val) {
                if (next.right) {
                    next = next.right;
                } else {
                    next.right = node;
                    break;
                }
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(deserialize(serialize(root)));