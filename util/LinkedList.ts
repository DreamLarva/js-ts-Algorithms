/**
 * 链表
 * */
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

/**
 * @param arr 链表内容
 * @param cyclePosition 链表尾部连接的节点(索引从0开始)(成环)
 * */
function createLinkedList<T>(arr: T[], cyclePosition = -1) {
    const head = new ListNode(arr[0]);
    let currentNode = head;
    let cycleNode = cyclePosition === 0 ? head : null;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
        if (i === cyclePosition) cycleNode = currentNode;
    }
    if (!(cyclePosition === -1 || cycleNode == null)) {
        currentNode.next = cycleNode;
    }
    return head;
}

export {
    createLinkedList,
    ListNode,
};

import assert from "assert";

{
    const sample = [1, 2];
    const linkedList = createLinkedList(sample);
    assert.strictEqual(linkedList.val, 1);
    assert.strictEqual(linkedList.next!.val, 2);
    assert.strictEqual(linkedList.next!.next, null);
}
{
    const sample = [1];
    const linkedList = createLinkedList(sample, 0);
    assert.strictEqual(linkedList.val, 1);
    assert.strictEqual(linkedList.next!.val, 1);
}
{
    const sample = [1, 2];
    const linkedList = createLinkedList(sample, 0);
    assert.strictEqual(linkedList.val, 1);
    assert.strictEqual(linkedList.next!.val, 2);
    assert.strictEqual(linkedList.next!.next!.val, 1);
    assert.strictEqual(linkedList.next!.next!.next!.val, 2);
}
{
    const sample = [1, 2, 3];
    const linkedList = createLinkedList(sample, 1);
    assert.strictEqual(linkedList.val, 1);
    assert.strictEqual(linkedList.next!.val, 2);
    assert.strictEqual(linkedList.next!.next!.val, 3);
    assert.strictEqual(linkedList.next!.next!.next!.val, 2);
}
