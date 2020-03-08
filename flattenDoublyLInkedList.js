/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};

let root = new Node(1, null, 2, null);
root.next = new Node(2, 1, 3, null);
root.next.next = new Node(3, 2, 4, 7)
root.next.next.next = new Node(4, 3, 5, null);
root.next.next.next.next = new Node(5, 4, 6, null);
root.next.next.next.next.next = new Node(6, 5, null, null);
root.next.next.child = new Node(7, 3, 8, null);
root.next.next.child.next = new Node(8, 7, 9, 11);
root.next.next.child.next.next = new Node(9, 8, 10, null);
root.next.next.child.next.next.next = new Node(10, 9, null, null);
root.next.next.child.next.child = new Node(11, 8, 12, null);
root.next.next.child.next.child.next = new Node(12, 11, null, null);


/*
Iterative
Use a stack to keep track of different levels of child nodes
For each node, link back to the prev node. This way it's easier to link the end of a child list to the parent list.
*/
var flatten = function (head) {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);

    let stack = [head];
    let current = dummyHead;
    let prev = null;

    while (stack.length != 0) {
        current = stack.pop();

        if (prev) {
            current.prev = prev;
            prev.next = current;
        }

        if (current.next != null) stack.push(current.next);
        if (current.child != null) { // has a child
            stack.push(current.child);
            current.child = null; // remove child reference
        }

        prev = current;
    }

    return dummyHead.next;
};

// console.log(flatten(root));

const util = require('util')
console.log(util.inspect(flatten(root), {
    maxArrayLength: null,
    depth: null
}))

// console.log(util.inspect(root, {
//     maxArrayLength: null,
//     depth: null
// }))