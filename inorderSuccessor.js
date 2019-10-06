 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 // let root = new TreeNode(5);
 // root.left = new TreeNode(3);
 // root.left.left = new TreeNode(2);
 // root.left.left.left = new TreeNode(1);
 // root.left.right = new TreeNode(4);
 // root.right = new TreeNode(6);

 let root = new TreeNode(2);
 root.left = new TreeNode(1);

 /**
  * @param {TreeNode} root
  * @param {TreeNode} p
  * @return {TreeNode}
  */

 let p = 0;

 function getMin(p) {
     while (p.left !== null) {
         p = p.left;
     }
     return p;
 }

 var inorderSuccessor = function (root, p) {
     if (!root || !p) {
         return null;
     }
     if (p.right !== null) {
         return getMin(p.right);
     }
     var successor = null;
     while (root !== null) {
         if (root.val == p.val) {
             break;
         } else if (root.val > p.val) {
             successor = root;
             root = root.left;
         } else if (root.val < p.val) {
             root = root.right;
         }

     }
     return successor;
 };

 console.log(inorderSuccessor(root, 1));