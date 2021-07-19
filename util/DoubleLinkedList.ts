/**
 * 双向链表
 * */
class DoubleLinkedListNode<T = any> {
  val: T;
  prev: null | DoubleLinkedListNode<T> = null;
  next: null | DoubleLinkedListNode<T> = null;
  child: null | DoubleLinkedListNode<T> = null;

  constructor(val: T) {
    this.val = val;
  }

  toString() {
    const result: T[] = [];
    let node: DoubleLinkedListNode<T> | null = this;
    while (node != null) {
      result.push(node.val);
      node = node.next;
    }

    return result;
  }

  toArray() {
    return this.toString();
  }
}

/**
 * @param arr 链表内容
 * */
function createDoubleLinkedList<T>(arr: T[]) {
  const head = new DoubleLinkedListNode(arr[0]);
  let currentNode = head;
  let lastNode: DoubleLinkedListNode<T> | null = null;
  for (let i = 0; i < arr.length; i++) {
    currentNode.next =
      arr[i + 1] == null ? null : new DoubleLinkedListNode(arr[i + 1]);
    currentNode.prev = lastNode;
    if (currentNode.next == null) break;

    lastNode = currentNode;
    currentNode = currentNode.next;
  }

  return head;
}

export { createDoubleLinkedList, DoubleLinkedListNode };

import assert from "assert";

{
  const sample = [1, 2, 3];
  const doubleLinkedList = createDoubleLinkedList(sample);
  assert.strictEqual(doubleLinkedList.val, 1);
  assert.strictEqual(doubleLinkedList.prev, null);
  assert.strictEqual(doubleLinkedList.next!.val, 2);
  assert.strictEqual(doubleLinkedList.next!.prev!.val, 1);
  assert.strictEqual(doubleLinkedList.next!.next!.val, 3);
  assert.strictEqual(doubleLinkedList.next!.next!.next, null);
  assert.strictEqual(doubleLinkedList.next!.next!.prev!.val, 2);
}
