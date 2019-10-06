function ListNode(val) {
    this.val = val;
    this.next = null;
}

let root = new ListNode(1);
root.next = new ListNode(2);

const removeNodeLL = (head, val) => {
    let fakeHead = new ListNode();
    fakeHead.next = head;
    let curr = fakeHead; // just appending a new node at the front of head
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return fakeHead.next;
}

console.log(removeNodeLL(root, 1));