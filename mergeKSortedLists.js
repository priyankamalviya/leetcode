/*Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6 

TIME COMPLEXITY: O(n*k), where k is the average number of nodes per list.
If we use a heap, complexity becomes O(n log k)

*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);
list1.next.next.next = new ListNode(null);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
list2.next.next.next = new ListNode(null);

let list3 = new ListNode(2);
list2.next = new ListNode(3);
list2.next.next = new ListNode(null);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let temp = new ListNode(0);
    let list1 = temp;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if (l1) temp.next = l1;
    if (l2) temp.next = l2;

    return list1.next;
}
var mergeKLists = function (lists) {
    let result = lists[0] || null;
    for (let i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
};


console.log(mergeKLists([
    list1,
    list2,
    list3
]));