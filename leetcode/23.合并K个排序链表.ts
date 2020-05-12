/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import { ListNode, createLinkedList } from "../util/LinkedList";
var mergeTwoLists = function <T>(
  l1: ListNode<T> | null,
  l2: ListNode<T> | null
): ListNode | null {
  // 如果 某一个链表到底了 就返回 另一个
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val <= l2.val) {
    // 递归 下一个值
    l1.next = mergeTwoLists(l1.next, l2);
    // 返回本轮较小的值
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
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
var mergeKLists = function (lists: (ListNode | null)[]) {
  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; lists.length - interval * i > 0; ) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
      i = interval * ++i * 2;
    }
    interval *= 2;
  }
  return lists.length === 0 ? lists : lists[0];
};

import assert from "assert";

assert.deepStrictEqual(
  mergeKLists(
    [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ].map((v) => createLinkedList(v))
  ),
  createLinkedList([1, 1, 2, 3, 4, 4, 5, 6])
);
assert.deepStrictEqual(mergeKLists([]), []);
