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
class ListNode<T> {
    val: T;
    next: null | ListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }

    toArray() {
        const result = [];
        let tmp: ListNode<T> | null = this;
        while (tmp !== null) {
            result.push(tmp.val);
            tmp = tmp.next
        }
        return result;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function <T>(l1: ListNode<T> | null, l2: ListNode<T> | null) {
    if (l2!.next == null) {
        return l1
    } else if (l1!.next == null) {
        return l2
    }

    const arr = [];
    while (!(l1 === null && l2 === null)) {
        if (l1 === null) {
            arr.push(l2!.val);
            l2 = l2!.next!;
        } else if (l2 === null) {
            arr.push(l1.val); // 这里的 l1 不需要 !是因为 上面条件
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            arr.push(l1.val);
            l1 = l1.next;
        } else {
            arr.push(l2.val);
            l2 = l2.next;
        }
    }

    return create_Linked_list(arr);
};


function create_Linked_list<T>(arr: T[]) {
    const root = new ListNode(arr.shift());
    let cur = root;
    let temp;
    for (const v of arr) {
        temp = new ListNode(v);
        cur.next = temp;
        cur = temp;
    }
    return root
}

import assert from "assert";
assert.deepStrictEqual(
    mergeTwoLists(
        create_Linked_list([1, 2, 4]),
        create_Linked_list([1, 3, 4])
    )!.toArray(),

    [1, 1, 2, 3, 4, 4]
);








