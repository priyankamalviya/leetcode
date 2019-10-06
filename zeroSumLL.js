/**
 * Definition for singly-linked list. */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// [1, 2, -3, 3, 1]
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(-3);
head.next.next.next.next = new ListNode(4);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
    let prev = {},
        sum = 0,
        cur = head
    while (cur) {
        sum += cur.val
        if (sum === 0) {
            head = cur.next
        } else if (sum in prev) {
            prev[sum].next = cur.next
        } else {
            prev[sum] = cur
        }
        cur = cur.next
    }
    return head;
};

console.log(removeZeroSumSublists(head))