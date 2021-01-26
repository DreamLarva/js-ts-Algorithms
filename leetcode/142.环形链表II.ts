/*
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。



示例 1：
 3 -> 2 -> 0 -> -4
     │          ┃
     ╰ ── ─ ╯

输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：
1 -> 2
│   ┃
╰  ╯
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：
1
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。




进阶：
你是否可以不用额外空间解决此题？



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import { ListNode, createLinkedList } from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head: ListNode | null) {
  // 弗洛伊德算法
  // 先快慢指针 判断是否有环的同时获取第一次相遇的节点
  let slow = head;
  let fast = head;
  if (fast == null || fast.next == null) return null;
  while (fast && fast.next) {
    fast = fast.next!.next!;
    // 保证fast指针你能先判断
    if (fast == null || fast.next == null) return null;

    slow = slow!.next!;

    if (slow === fast) break;
  }

  // 第二次跑圈 将其中一个 指针指向head节点 并且 都每次只进一步
  // 相遇的节点 就是相较的节点
  fast = head;
  while (fast !== slow) {
    fast = fast!.next!;
    slow = slow!.next!;
  }
  return slow;
};

/*
var detectCycle = function (head: ListNode | null) {
    // 朴实的操作 记录全部的节点
    if (head == null) return null;
    const set = new Set();
    let currentNode = head;
    while (currentNode != null) {
        set.add(currentNode);
        if (set.has(currentNode!.next)) {
            return currentNode.next;
        }

        if (currentNode!.next == null) {
            return null;
        }
        currentNode = currentNode!.next;
    }
};
*/

import assert from "assert";

assert.strictEqual(detectCycle(null), null);
assert.strictEqual(detectCycle(createLinkedList([1], -1)), null);
assert.strictEqual(detectCycle(createLinkedList([3, 2, 0, -4], 1))!.val, 2);
assert.strictEqual(detectCycle(createLinkedList([1, 2], 0))!.val, 1);
assert.strictEqual(detectCycle(createLinkedList([1], 0))!.val, 1);
