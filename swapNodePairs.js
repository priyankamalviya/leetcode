/*
ex input: 1-> 2-> 3 -> 4
output: 2-> 1 -> 4-> 3
*/

function LinkedListNode(val) {
    this.val = val;
    this.next = null;
}

const root = new LinkedListNode(1);
root.next = new LinkedListNode(2);
root.next.next = new LinkedListNode(3);
root.next.next.next = new LinkedListNode(4);

const swapPairs = (root) => {
    if (root && root.next) {
        let first = root.next;
        let second = root;
        let rest = root.next.next;
        first.next = second;
        second.next = swapPairs(rest);
        return first;
    } else {
        return root;
    }
}

console.log(swapPairs(root));