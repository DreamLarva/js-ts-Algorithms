/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import { ListNode, createLinkedList } from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head: ListNode | null) {
  if (head == null || head.next == null) return head;
  // 先交换 第一个节点和 第二个节点
  const current = head;
  const next = current.next;

  current.next = next!.next;
  next!.next = current;

  step(current);

  function step(lastNode: ListNode | null) {
    if (lastNode == null || lastNode.next == null || lastNode.next.next == null)
      return;
    const current = lastNode.next;
    const next = current.next;

    current.next = next!.next;
    next!.next = current;
    lastNode.next = next;

    step(current);
  }

  return next;
};

// 最佳的写法
// 递归 交换后 靠后的节点 后的next
var swapPairs_2 = function (head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;

  const current = head;
  const next = current.next!;

  current.next = swapPairs_2(next.next);
  next.next = current;

  return next;
};

import assert from "assert";

assert.deepStrictEqual(swapPairs(createLinkedList([1, 2, 3, 4]))!.toString(), [
  2,
  1,
  4,
  3,
]);
assert.deepStrictEqual(
  swapPairs(createLinkedList([1, 2, 3, 4, 5]))!.toString(),
  [2, 1, 4, 3, 5]
);
assert.deepStrictEqual(
  swapPairs_2(createLinkedList([1, 2, 3, 4, 5]))!.toString(),
  [2, 1, 4, 3, 5]
);
