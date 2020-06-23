/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
import { createLinkedList, ListNode } from "../util/LinkedList";
import assert from "assert";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function (l1: ListNode<number>, l2: ListNode<number>) {
  const firstNode = new ListNode((l1.val + l2.val) % 10);
  let currentNode = firstNode;
  let added = l1.val + l2.val >= 10 ? 1 : 0;

  while (l1.next !== null || l2.next !== null) {
    l1 = l1.next ? l1.next : new ListNode(0);
    l2 = l2.next ? l2.next : new ListNode(0);
    let sum = l1.val + l2.val + added;
    added = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
  }
  if (added > 0) {
    currentNode.next = new ListNode(1);
  }

  return firstNode;
};

var addTwoNumbers2 = function (
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
) {
  const firstNode = new ListNode((l1!.val + l2!.val) % 10);
  let currentNode = firstNode;
  let added = 0;
  l1 = l1 ? l1.next : null;
  l2 = l2 ? l2.next : null;

  while (l1 != null || l2 != null) {
    const v1 = l1 == null ? 0 : l1.val;
    const v2 = l2 == null ? 0 : l2.val;

    let sum = v1 + v2 + added;
    added = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (added > 0) {
    currentNode.next = new ListNode(1);
  }

  return firstNode;
};

var addTwoNumbers3 = function (
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
) {
  let firstNode!: ListNode<number>;
  let currentNode: ListNode<number> | null = null;
  let added = 0;
  do {
    const v1 = l1 == null ? 0 : l1.val;
    const v2 = l2 == null ? 0 : l2.val;

    let sum = v1 + v2 + added;
    added = sum >= 10 ? 1 : 0;
    sum = sum % 10;

    if (currentNode == null) {
      currentNode = firstNode = new ListNode(sum);
    } else {
      currentNode.next = new ListNode(sum);
      currentNode = currentNode.next;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  } while (l1 != null || l2 != null);
  if (added > 0) {
    currentNode.next = new ListNode(1);
  }

  return firstNode;
};

assert.deepStrictEqual(
  addTwoNumbers1(createLinkedList([2, 4, 3]), createLinkedList([5, 6, 4])),
  createLinkedList([7, 0, 8])
);

assert.deepStrictEqual(
  addTwoNumbers2(createLinkedList([2, 4, 3]), createLinkedList([5, 6, 4])),
  createLinkedList([7, 0, 8])
);
