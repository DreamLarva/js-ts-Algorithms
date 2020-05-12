/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
* */
import { ListNode, createLinkedList } from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head: ListNode, n: number): ListNode | null {
  /**
   * 老样子 快慢指针
   * */
  let slow = head;
  let fast = next_n(head, n);

  // 删除的是 head 结点{
  if (fast === null) {
    return head.next;
  }

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next;
  }
  // 这里的 slow 是要删除的节点的 前一个节点
  slow.next = slow.next!.next;

  return head;

  function next_n(listNode: ListNode, n: number) {
    while (n) {
      listNode = listNode.next!;
      n--;
    }
    return listNode;
  }
};

import assert from "assert";

assert.deepStrictEqual(
  removeNthFromEnd(createLinkedList([1, 2, 3, 4, 5]), 2)!.toString(),
  [1, 2, 3, 5]
);

assert.deepStrictEqual(removeNthFromEnd(createLinkedList([1]), 1), null);

assert.deepStrictEqual(
  removeNthFromEnd(createLinkedList([1, 2]), 1)!.toString(),
  [1]
);
assert.deepStrictEqual(
  removeNthFromEnd(createLinkedList([1, 2]), 2)!.toString(),
  [2]
);
