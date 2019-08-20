/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
* */
import {ListNode} from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function (head: ListNode) {
    // 在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。
    // 在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！
    if (head == null || head.next === null) return head;
    type Node = ListNode | null;
    let
        last: Node = head,
        current: Node = head.next;
    last.next = null;
    while (current !== null) {
        const next: any = current.next;
        current.next = last;
        last = current;
        current = next;
    }
    return last;
};

// 递归
var solution2 = function (head: ListNode) {
    if (head == null || head.next === null) return head;
    const result = byStep(head, head.next);
    head.next = null;
    return result;
};

function byStep(lastNode: ListNode, curNode: ListNode | null): ListNode {
    if (curNode === null) {
        return lastNode;
    } else {
        const next: ListNode | null = curNode.next;
        curNode.next = lastNode;
        return byStep(curNode, next);
    }
}

// 递归2 精彩的递归
var solution3 = function (head: ListNode): ListNode | null {
    if (head === null || head.next === null) return head;
    const result = solution3(head.next); // 拿到的是 原尾节点 现在的head节点
    // 递归后再执行操作
    head.next.next = head;
    head.next = null; // 保证原来头部 现在尾部的 next 值为null
    return result;
};


export {}
