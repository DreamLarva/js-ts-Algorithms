"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 如果 某一个链表到底了 就返回 另一个
    if (l1 === null)
        return l2;
    if (l2 === null)
        return l1;
    if (l1.val <= l2.val) {
        // 递归 下一个值
        l1.next = mergeTwoLists(l1.next, l2);
        // 返回本轮较小的值
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(mergeTwoLists(LinkedList_1.createLinkedList([1, 2, 4]), LinkedList_1.createLinkedList([1, 3, 4])).toString(), [1, 1, 2, 3, 4, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEu5ZCI5bm25Lik5Liq5pyJ5bqP6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMS7lkIjlubbkuKTkuKrmnInluo/pk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0g7Ozs7OztHQU1HO0FBQ0gsbURBQWdFO0FBRWhFOzs7O0dBSUc7QUFFSCxJQUFJLGFBQWEsR0FBRyxVQUNsQixFQUFzQixFQUN0QixFQUFzQjtJQUV0QixzQkFBc0I7SUFDdEIsSUFBSSxFQUFFLEtBQUssSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzNCLElBQUksRUFBRSxLQUFLLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUUzQixJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRTtRQUNwQixVQUFVO1FBQ1YsRUFBRSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFXO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDWDtTQUFNO1FBQ0wsRUFBRSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNwQixhQUFhLENBQ1gsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNCLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUMzQixDQUFDLFFBQVEsRUFBRSxFQUViLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTIxIGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFsyMV0g5ZCI5bm25Lik5Liq5pyJ5bqP6ZO+6KGoXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWVyZ2UtdHdvLXNvcnRlZC1saXN0cy9kZXNjcmlwdGlvbi9cbiAqXG4gKiBhbGdvcml0aG1zXG4gKiBFYXN5ICg1Mi4zOCUpXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgNDMuNktcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA4My4zS1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMSwyLDRdXFxuWzEsMyw0XSdcbiAqXG4gKiDlsIbkuKTkuKrmnInluo/pk77ooajlkIjlubbkuLrkuIDkuKrmlrDnmoTmnInluo/pk77ooajlubbov5Tlm57jgILmlrDpk77ooajmmK/pgJrov4fmi7zmjqXnu5nlrprnmoTkuKTkuKrpk77ooajnmoTmiYDmnInoioLngrnnu4TmiJDnmoTjgIJcbiAqXG4gKiDnpLrkvovvvJpcbiAqXG4gKiDovpPlhaXvvJoxLT4yLT40LCAxLT4zLT40XG4gKiDovpPlh7rvvJoxLT4xLT4yLT4zLT40LT40XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG5pbXBvcnQgeyBMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMVxuICogQHBhcmFtIHtMaXN0Tm9kZX0gbDJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG5cbnZhciBtZXJnZVR3b0xpc3RzID0gZnVuY3Rpb24gPFQ+KFxuICBsMTogTGlzdE5vZGU8VD4gfCBudWxsLFxuICBsMjogTGlzdE5vZGU8VD4gfCBudWxsXG4pOiBMaXN0Tm9kZSB8IG51bGwge1xuICAvLyDlpoLmnpwg5p+Q5LiA5Liq6ZO+6KGo5Yiw5bqV5LqGIOWwsei/lOWbniDlj6bkuIDkuKpcbiAgaWYgKGwxID09PSBudWxsKSByZXR1cm4gbDI7XG4gIGlmIChsMiA9PT0gbnVsbCkgcmV0dXJuIGwxO1xuXG4gIGlmIChsMS52YWwgPD0gbDIudmFsKSB7XG4gICAgLy8g6YCS5b2SIOS4i+S4gOS4quWAvFxuICAgIGwxLm5leHQgPSBtZXJnZVR3b0xpc3RzKGwxLm5leHQsIGwyKTtcbiAgICAvLyDov5Tlm57mnKzova7ovoPlsI/nmoTlgLxcbiAgICByZXR1cm4gbDE7XG4gIH0gZWxzZSB7XG4gICAgbDIubmV4dCA9IG1lcmdlVHdvTGlzdHMobDEsIGwyLm5leHQpO1xuICAgIHJldHVybiBsMjtcbiAgfVxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIG1lcmdlVHdvTGlzdHMoXG4gICAgY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgNF0pLFxuICAgIGNyZWF0ZUxpbmtlZExpc3QoWzEsIDMsIDRdKVxuICApIS50b1N0cmluZygpLFxuXG4gIFsxLCAxLCAyLCAzLCA0LCA0XVxuKTtcbiJdfQ==