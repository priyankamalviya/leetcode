/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(null);

var reverseList = function (head) {
    let prev = null;
    while (head) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};

console.log(reverseList(head));