/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if(head === null)return false;
    let fast_pointer = head;
    let slow_pointer = head;
    do {
        // 如果不是环 快指正一定 先到 tail
        if ((fast_pointer = fast_pointer.next) === null) return false;
        if ((fast_pointer = fast_pointer.next) === null) return false;
        slow_pointer = slow_pointer.next;

    } while (slow_pointer !== fast_pointer);
    return true
};

/**
 * 快慢指针
 * 起点相同 快指针 步进的速度是 慢指针的n倍
 * 使用场景 多为链表
 * 链表是否有环
 * 链表的 中间的位置
 * */
