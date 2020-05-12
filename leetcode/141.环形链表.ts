/*
示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。




进阶：

你能用 O(1)（即，常量）内存解决此问题吗？
* */

import { ListNode } from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head: ListNode) {
  if (head === null) return false;
  let fast_pointer: ListNode | null = head;
  let slow_pointer: ListNode = head;
  do {
    // 如果不是环 快指正一定 先到 tail
    if ((fast_pointer = fast_pointer.next) === null) return false;
    if ((fast_pointer = fast_pointer.next) === null) return false;
    slow_pointer = slow_pointer.next!; // 慢指针 必定有值
  } while (slow_pointer !== fast_pointer);
  return true;
};

/**
 * 快慢指针
 * 起点相同 快指针 步进的速度是 慢指针的n倍
 * 使用场景 多为链表
 * 链表是否有环
 * 链表的 中间的位置
 * */
