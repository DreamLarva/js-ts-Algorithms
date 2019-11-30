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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEu5ZCI5bm25Lik5Liq5pyJ5bqP6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMS7lkIjlubbkuKTkuKrmnInluo/pk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0g7Ozs7OztHQU1HO0FBQ0gsbURBQThEO0FBRTlEOzs7O0dBSUc7QUFHSCxJQUFJLGFBQWEsR0FBRyxVQUFhLEVBQXNCLEVBQUUsRUFBc0I7SUFDM0Usc0JBQXNCO0lBQ3RCLElBQUksRUFBRSxLQUFLLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMzQixJQUFJLEVBQUUsS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDbEIsVUFBVTtRQUNWLEVBQUUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsV0FBVztRQUNYLE9BQU8sRUFBRSxDQUFBO0tBQ1o7U0FBTTtRQUNILEVBQUUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxFQUFFLENBQUE7S0FDWjtBQUNMLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUNULDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMzQiw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDN0IsQ0FBQyxRQUFRLEVBQUUsRUFFYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0yMSBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMjFdIOWQiOW5tuS4pOS4quacieW6j+mTvuihqFxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21lcmdlLXR3by1zb3J0ZWQtbGlzdHMvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoNTIuMzglKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQzLjZLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogODMuM0tcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzEsMiw0XVxcblsxLDMsNF0nXG4gKlxuICog5bCG5Lik5Liq5pyJ5bqP6ZO+6KGo5ZCI5bm25Li65LiA5Liq5paw55qE5pyJ5bqP6ZO+6KGo5bm26L+U5Zue44CC5paw6ZO+6KGo5piv6YCa6L+H5ou85o6l57uZ5a6a55qE5Lik5Liq6ZO+6KGo55qE5omA5pyJ6IqC54K557uE5oiQ55qE44CCwqBcbiAqXG4gKiDnpLrkvovvvJpcbiAqXG4gKiDovpPlhaXvvJoxLT4yLT40LCAxLT4zLT40XG4gKiDovpPlh7rvvJoxLT4xLT4yLT4zLT40LT40XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG5pbXBvcnQge0xpc3ROb2RlLCBjcmVhdGVMaW5rZWRMaXN0fSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gbDFcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGwyXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xuXG5cbnZhciBtZXJnZVR3b0xpc3RzID0gZnVuY3Rpb24gPFQ+KGwxOiBMaXN0Tm9kZTxUPiB8IG51bGwsIGwyOiBMaXN0Tm9kZTxUPiB8IG51bGwpOiBMaXN0Tm9kZSB8IG51bGwge1xuICAgIC8vIOWmguaenCDmn5DkuIDkuKrpk77ooajliLDlupXkuoYg5bCx6L+U5ZueIOWPpuS4gOS4qlxuICAgIGlmIChsMSA9PT0gbnVsbCkgcmV0dXJuIGwyO1xuICAgIGlmIChsMiA9PT0gbnVsbCkgcmV0dXJuIGwxO1xuXG4gICAgaWYgKGwxLnZhbCA8PSBsMi52YWwpIHtcbiAgICAgICAgLy8g6YCS5b2SIOS4i+S4gOS4quWAvFxuICAgICAgICBsMS5uZXh0ID0gbWVyZ2VUd29MaXN0cyhsMS5uZXh0LCBsMik7XG4gICAgICAgIC8vIOi/lOWbnuacrOi9rui+g+Wwj+eahOWAvFxuICAgICAgICByZXR1cm4gbDFcbiAgICB9IGVsc2Uge1xuICAgICAgICBsMi5uZXh0ID0gbWVyZ2VUd29MaXN0cyhsMSwgbDIubmV4dCk7XG4gICAgICAgIHJldHVybiBsMlxuICAgIH1cbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgbWVyZ2VUd29MaXN0cyhcbiAgICAgICAgY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgNF0pLFxuICAgICAgICBjcmVhdGVMaW5rZWRMaXN0KFsxLCAzLCA0XSksXG4gICAgKSEudG9TdHJpbmcoKSxcblxuICAgIFsxLCAxLCAyLCAzLCA0LCA0XSxcbik7XG5cblxuXG5cblxuXG5cblxuIl19