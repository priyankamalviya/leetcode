function ListNode(val) {
    this.val = val;
    this.next = null;
}

let root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);
root.next.next.next.next = new ListNode(5);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverse = (root) => {
    let prev = null;
    while (root) {
        let temp = root.next;
        root.next = prev;
        prev = root;
        root = temp;
    }
    return prev;
}

console.log(reverse(root))