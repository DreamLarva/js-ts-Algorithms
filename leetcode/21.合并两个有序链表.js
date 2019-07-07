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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEu5ZCI5bm25Lik5Liq5pyJ5bqP6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMS7lkIjlubbkuKTkuKrmnInluo/pk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0g7Ozs7OztHQU1HO0FBQ0gsbURBQThEO0FBRTlEOzs7O0dBSUc7QUFHSCxJQUFJLGFBQWEsR0FBRyxVQUFhLEVBQXNCLEVBQUUsRUFBc0I7SUFDM0Usc0JBQXNCO0lBQ3RCLElBQUksRUFBRSxLQUFLLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMzQixJQUFJLEVBQUUsS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDbEIsVUFBVTtRQUNWLEVBQUUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsV0FBVztRQUNYLE9BQU8sRUFBRSxDQUFBO0tBQ1o7U0FBTTtRQUNILEVBQUUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxFQUFFLENBQUE7S0FDWjtBQUNMLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUNULDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMzQiw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDN0IsQ0FBQyxRQUFRLEVBQUUsRUFFYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTIxIGxhbmc9amF2YXNjcmlwdFxyXG4gKlxyXG4gKiBbMjFdIOWQiOW5tuS4pOS4quacieW6j+mTvuihqFxyXG4gKlxyXG4gKiBodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9tZXJnZS10d28tc29ydGVkLWxpc3RzL2Rlc2NyaXB0aW9uL1xyXG4gKlxyXG4gKiBhbGdvcml0aG1zXHJcbiAqIEVhc3kgKDUyLjM4JSlcclxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQzLjZLXHJcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA4My4zS1xyXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1sxLDIsNF1cXG5bMSwzLDRdJ1xyXG4gKlxyXG4gKiDlsIbkuKTkuKrmnInluo/pk77ooajlkIjlubbkuLrkuIDkuKrmlrDnmoTmnInluo/pk77ooajlubbov5Tlm57jgILmlrDpk77ooajmmK/pgJrov4fmi7zmjqXnu5nlrprnmoTkuKTkuKrpk77ooajnmoTmiYDmnInoioLngrnnu4TmiJDnmoTjgILCoFxyXG4gKlxyXG4gKiDnpLrkvovvvJpcclxuICpcclxuICog6L6T5YWl77yaMS0+Mi0+NCwgMS0+My0+NFxyXG4gKiDovpPlh7rvvJoxLT4xLT4yLT4zLT40LT40XHJcbiAqXHJcbiAqXHJcbiAqL1xyXG4vKipcclxuICogRGVmaW5pdGlvbiBmb3Igc2luZ2x5LWxpbmtlZCBsaXN0LlxyXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcclxuICogICAgIHRoaXMudmFsID0gdmFsO1xyXG4gKiAgICAgdGhpcy5uZXh0ID0gbnVsbDtcclxuICogfVxyXG4gKi9cclxuaW1wb3J0IHtMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGwxXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGwyXHJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxyXG4gKi9cclxuXHJcblxyXG52YXIgbWVyZ2VUd29MaXN0cyA9IGZ1bmN0aW9uIDxUPihsMTogTGlzdE5vZGU8VD4gfCBudWxsLCBsMjogTGlzdE5vZGU8VD4gfCBudWxsKTogTGlzdE5vZGUgfCBudWxsIHtcclxuICAgIC8vIOWmguaenCDmn5DkuIDkuKrpk77ooajliLDlupXkuoYg5bCx6L+U5ZueIOWPpuS4gOS4qlxyXG4gICAgaWYgKGwxID09PSBudWxsKSByZXR1cm4gbDI7XHJcbiAgICBpZiAobDIgPT09IG51bGwpIHJldHVybiBsMTtcclxuXHJcbiAgICBpZiAobDEudmFsIDw9IGwyLnZhbCkge1xyXG4gICAgICAgIC8vIOmAkuW9kiDkuIvkuIDkuKrlgLxcclxuICAgICAgICBsMS5uZXh0ID0gbWVyZ2VUd29MaXN0cyhsMS5uZXh0LCBsMik7XHJcbiAgICAgICAgLy8g6L+U5Zue5pys6L2u6L6D5bCP55qE5YC8XHJcbiAgICAgICAgcmV0dXJuIGwxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGwyLm5leHQgPSBtZXJnZVR3b0xpc3RzKGwxLCBsMi5uZXh0KTtcclxuICAgICAgICByZXR1cm4gbDJcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBtZXJnZVR3b0xpc3RzKFxyXG4gICAgICAgIGNyZWF0ZUxpbmtlZExpc3QoWzEsIDIsIDRdKSxcclxuICAgICAgICBjcmVhdGVMaW5rZWRMaXN0KFsxLCAzLCA0XSksXHJcbiAgICApIS50b1N0cmluZygpLFxyXG5cclxuICAgIFsxLCAxLCAyLCAzLCA0LCA0XSxcclxuKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=