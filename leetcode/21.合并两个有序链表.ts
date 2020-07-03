/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.38%)
 * Total Accepted:    43.6K
 * Total Submissions: 83.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
import { ListNode, createLinkedList } from "../util/LinkedList";

/**
 * 递归
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function <T>(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  // 如果 某一个链表到底了 就返回 另一个
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val <= l2.val) {
    // 递归 下一个值
    l1.next = mergeTwoLists1(l1.next, l2);
    // 返回本轮较小的值
    return l1;
  } else {
    l2.next = mergeTwoLists1(l1, l2.next);
    return l2;
  }
};

var mergeTwoLists2 = function <T>(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  const head: ListNode<number> = new ListNode(0);
  let current = head;
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 == null ? l2 : l1;

  return head.next;
};

import assert from "assert";

assert.deepStrictEqual(
  mergeTwoLists1(
    createLinkedList([1, 2, 4]),
    createLinkedList([1, 3, 4])
  )!.toString(),

  [1, 1, 2, 3, 4, 4]
);
assert.deepStrictEqual(
  mergeTwoLists2(
    createLinkedList([1, 2, 4]),
    createLinkedList([1, 3, 4])
  )!.toString(),

  [1, 1, 2, 3, 4, 4]
);
