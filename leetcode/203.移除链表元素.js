/*
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let last;
    let current = head;
    while (current !== null) {
        if (current.val === val) {
            // 在头部 相等
            if (current === head) {
                current = head = head.next
            }
            // 在尾部 相等
            else if (current.next === null) {
                last.next = null;
                break;
            }
            // 在中间 相等
            else {
                last.next = current.next;
                current = current.next;
            }

        } else {
            last = current;
            current = current.next;
        }
    }

    return head
};

const {createLinkedList} = require("./util/linked_list");
const l = createLinkedList([7, 7, 1, 2, 3, 7, 7, 4, 5, 6, 7, 7]);
console.log(removeElements(l, 7).toString());
