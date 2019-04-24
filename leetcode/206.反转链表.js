/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function (head) {
    // 在遍历列表时，将当前节点的 next 指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。
    // 在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！
    if (head == null || head.next === null) return head;
    let last = head, current = head.next;
    last.next = null;
    while (current !== null) {
        const next = current.next;
        current.next = last;
        last = current;
        current = next;
    }
    return last
};

// 递归
var solution2 = function (head) {
    if (head == null || head.next === null) return head;
    const result = byStep(head, head.next);
    head.next = null;
    return result
};

function byStep(lastNode, curNode) {
    if (curNode === null) {
        return lastNode;
    } else {
        const next = curNode.next;
        curNode.next = lastNode;
        return byStep(curNode, next)

    }

}

// 递归2
var solution3 = function (head) {
    if (head === null || head.next === null) return head;
    const result = reverseList(head.next);
    head.next.next = head;
    head.next = null; // 保证原来头部 现在尾部的 next 值为null
    return result;
};

