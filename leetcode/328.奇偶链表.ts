/*
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:

输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
示例 2:

输入: 2->1->3->5->6->4->7->NULL
输出: 2->3->6->7->1->5->4->NULL
说明:

应当保持奇数节点和偶数节点的相对顺序。
链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/odd-even-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import { ListNode, createLinkedList } from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head: ListNode | null) {
  if (head == null || head.next == null || head.next.next == null) return head;
  // 根据题意
  // 空间复杂度 O(1) 说明空间复杂度 不会应为 n 的大小而改变
  // 时间复杂度应为 O(nodes)，nodes 为节点总数。 那么每个节点只能遍历一次
  let odd_last_node = head;
  const even_head_node = head.next;
  let even_last_node = even_head_node;

  while (true) {
    if (even_last_node!.next == null) {
      odd_last_node.next = even_head_node;
      break;
    }
    odd_last_node.next = even_last_node!.next;
    odd_last_node = odd_last_node.next!;

    if (odd_last_node.next == null) {
      odd_last_node.next = even_head_node;
      /**
       * 注意 由于单数的链表的最后一个节点一定连的是 偶数链表所有没问题
       * 但是偶数的节点的 最后一个节点 可能还连着 一个奇数的节点 所以要 加以处理
       * */
      even_last_node.next = null;
      break;
    }
    even_last_node!.next = odd_last_node.next;
    even_last_node = even_last_node!.next;
  }

  return head;
};

import assert from "assert";

assert.deepStrictEqual(oddEvenList(null), null);
assert.deepStrictEqual(
  oddEvenList(createLinkedList([1, 2, 3, 4]))!.toString(),
  [1, 3, 2, 4]
);
assert.deepStrictEqual(oddEvenList(createLinkedList([1]))!.toString(), [1]);
assert.deepStrictEqual(oddEvenList(createLinkedList([1, 2]))!.toString(), [
  1,
  2,
]);
assert.deepStrictEqual(oddEvenList(createLinkedList([1, 2, 3]))!.toString(), [
  1,
  3,
  2,
]);
assert.deepStrictEqual(
  oddEvenList(createLinkedList([1, 2, 3, 4]))!.toString(),
  [1, 3, 2, 4]
);
assert.deepStrictEqual(
  oddEvenList(createLinkedList([1, 2, 3, 4, 5]))!.toString(),
  [1, 3, 5, 2, 4]
);
