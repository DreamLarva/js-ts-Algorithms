class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    toString() {
        const result = [];
        let node = this;
        while(node !== null){
            result.push(node.val);
            node = node.next
        }

        return result
    }
}

function createLinkedList(arr) {
    const head = new ListNode(arr[0]);
    let currentNode = head;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next
    }
    return head
}

module.exports = {
    createLinkedList
};
