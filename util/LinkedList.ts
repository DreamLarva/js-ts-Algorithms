class ListNode<T = any> {
    val: T;
    next: null | ListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }

    toString() {
        const result = [];
        let node: ListNode<T> | null = this;
        while (node != null) {
            result.push(node.val);
            node = node.next;
        }

        return result;
    }
    toArray(){
        return this.toString()
    }
}

function createLinkedList<T>(arr: T[]) {
    const head = new ListNode(arr[0]);
    let currentNode = head;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
    }
    return head;
}

export {
    createLinkedList,
    ListNode,
};
