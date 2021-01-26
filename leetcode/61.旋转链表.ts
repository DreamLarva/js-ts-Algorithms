/*
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

import { ListNode, createLinkedList } from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head: ListNode, k: number) {
  if (head == null || head.next == null || k === 0) return head;
  // 遍历一遍拿到尾节点
  let currentNode: null | ListNode = head;
  let l = k;
  let tail!: ListNode;

  while (currentNode != null) {
    tail = currentNode;
    currentNode = currentNode.next;
    l--;
  }

  if (l == 0 || k % (k - l) == 0) {
    return head;
  }
  let newTail!: ListNode;
  // l > 0 需要重新遍历 再找到 newTail 的位置
  if (l > 0) {
    let n = k - l - (k % (k - l));

    // 还得再遍历一次
    currentNode = head;
    while (n !== 0) {
      newTail = currentNode!;
      currentNode = currentNode!.next;
      n--;
    }
  } else {
    let n = -l;

    // 还得再遍历一次
    currentNode = head;
    while (n !== 0) {
      newTail = currentNode!;
      currentNode = currentNode!.next;
      n--;
    }
  }

  tail.next = head;
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
};

import assert from "assert";

assert.deepStrictEqual(
  rotateRight(createLinkedList([1, 2, 3, 4, 5]), 2)!.toString(),
  [4, 5, 1, 2, 3]
);
assert.deepStrictEqual(
  rotateRight(createLinkedList([0, 1, 2]), 4)!.toString(),
  [2, 0, 1]
);
assert.deepStrictEqual(rotateRight(createLinkedList([1, 2]), 1)!.toString(), [
  2,
  1,
]);
