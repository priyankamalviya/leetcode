function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(null);
root.left.left.left = new TreeNode(5);
root.left.right = new TreeNode(4);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);

function helper(root, level, arr) {
    if (root === null) {
        return;
    }
    if (arr[level]) {
        arr[level].push(root.val);
    } else {
        arr.push([root.val]);
    }
    helper(root.left, level + 1, arr);
    helper(root.right, level + 1, arr);
}


var rightSideView = function (root) {
    const arr = [];
    helper(root, 0, arr);
    let result = [];
    for (const a of arr) {
        result.push(a.pop());
    }
    return result;
};


console.log(rightSideView(root));