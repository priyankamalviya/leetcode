/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const l1 = new ListNode(4);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

var addTwoNumbers = function (l1, l2) {
    let carrier = 0;
    var stack1 = new Array();
    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    var stack2 = new Array();
    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let result = new Array();
    let carry = 0;
    let sum = 0;
    let list = new ListNode(0);
    while (stack1.length > 0 || stack2.length > 0) {
        if (stack1.length > 0) sum += stack1.pop();
        if (stack2.length > 0) sum += stack2.pop();
        list.val = sum % 10;
        var head = new ListNode((sum / 10) >> 0);
        head.next = list;
        list = head;
        sum = (sum / 10) >> 0;
    }
    return list.val === 0 ? list.next : list;
};

console.log(addTwoNumbers(l1, l2));