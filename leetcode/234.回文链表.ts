/*
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
* */
import {ListNode} from "../util/LinkedList";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head: ListNode | null) {
    if (head == null || head.next == null) {
        return true;
    }
    // 快慢指针获取 链表中点位置
    let slowPointer = head;
    let fastPointer = head.next.next;
    while (fastPointer) {
        slowPointer = slowPointer.next!;
        fastPointer = fastPointer.next;
        if (fastPointer) fastPointer = fastPointer.next;
    }

    // 此时 slowPointer 在中间位置 翻转之后的链表 参看
    let afterHalfPart = reverseLinkedList(slowPointer.next);
    let beforeHalfPart = head;
    while (afterHalfPart) {
        if (afterHalfPart.val !== beforeHalfPart.val) return false;
        beforeHalfPart = beforeHalfPart.next!;
        afterHalfPart = afterHalfPart.next;
    }
    return true;
};


// 反转链表
function reverseLinkedList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
    const result = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null; // 保证原来头部 现在尾部的 next 值为null
    return result;
}

export {};
