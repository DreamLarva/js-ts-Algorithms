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
    if (l2.next == null) {
        return l1;
    }
    else if (l1.next == null) {
        return l2;
    }
    const arr = [];
    while (!(l1 === null && l2 === null)) {
        if (l1 === null) {
            arr.push(l2.val);
            l2 = l2.next;
        }
        else if (l2 === null) {
            arr.push(l1.val); // 这里的 l1 不需要 !是因为 上面条件
            l1 = l1.next;
        }
        else if (l1.val < l2.val) {
            arr.push(l1.val);
            l1 = l1.next;
        }
        else {
            arr.push(l2.val);
            l2 = l2.next;
        }
    }
    return create_Linked_list(arr);
};
function create_Linked_list(arr) {
    const root = new LinkedList_1.ListNode(arr.shift());
    let cur = root;
    let temp;
    for (const v of arr) {
        temp = new LinkedList_1.ListNode(v);
        cur.next = temp;
        cur = temp;
    }
    return root;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(mergeTwoLists(create_Linked_list([1, 2, 4]), create_Linked_list([1, 3, 4])).toArray(), [1, 1, 2, 3, 4, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEu5ZCI5bm25pyJ5bqP6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMS7lkIjlubbmnInluo/pk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0g7Ozs7OztHQU1HO0FBQ0gsbURBQTJDO0FBRTNDOzs7O0dBSUc7QUFHSCxJQUFJLGFBQWEsR0FBRyxVQUFhLEVBQXNCLEVBQUUsRUFBc0I7SUFDM0UsSUFBSSxFQUFHLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLEVBQUUsQ0FBQztLQUNiO1NBQU0sSUFBSSxFQUFHLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUN6QixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBRUQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDbEMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsRUFBRSxHQUFHLEVBQUcsQ0FBQyxJQUFLLENBQUM7U0FDbEI7YUFBTSxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7WUFDekMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDaEI7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztTQUNoQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDaEI7S0FDSjtJQUVELE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBR0YsU0FBUyxrQkFBa0IsQ0FBSSxHQUFRO0lBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUkscUJBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDZixJQUFJLElBQUksQ0FBQztJQUNULEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO1FBQ2pCLElBQUksR0FBRyxJQUFJLHFCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsR0FBRyxHQUFHLElBQUksQ0FBQztLQUNkO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUNULGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM3QixrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQyxPQUFPLEVBQUUsRUFFWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxjIGFwcD1sZWV0Y29kZS5jbiBpZD0yMSBsYW5nPWphdmFzY3JpcHRcbiAqXG4gKiBbMjFdIOWQiOW5tuS4pOS4quacieW6j+mTvuihqFxuICpcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21lcmdlLXR3by1zb3J0ZWQtbGlzdHMvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoNTIuMzglKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQzLjZLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogODMuM0tcbiAqIFRlc3RjYXNlIEV4YW1wbGU6ICAnWzEsMiw0XVxcblsxLDMsNF0nXG4gKlxuICog5bCG5Lik5Liq5pyJ5bqP6ZO+6KGo5ZCI5bm25Li65LiA5Liq5paw55qE5pyJ5bqP6ZO+6KGo5bm26L+U5Zue44CC5paw6ZO+6KGo5piv6YCa6L+H5ou85o6l57uZ5a6a55qE5Lik5Liq6ZO+6KGo55qE5omA5pyJ6IqC54K557uE5oiQ55qE44CCwqBcbiAqXG4gKiDnpLrkvovvvJpcbiAqXG4gKiDovpPlhaXvvJoxLT4yLT40LCAxLT4zLT40XG4gKiDovpPlh7rvvJoxLT4xLT4yLT4zLT40LT40XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG5pbXBvcnQge0xpc3ROb2RlfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCJcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMVxuICogQHBhcmFtIHtMaXN0Tm9kZX0gbDJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG5cblxudmFyIG1lcmdlVHdvTGlzdHMgPSBmdW5jdGlvbiA8VD4obDE6IExpc3ROb2RlPFQ+IHwgbnVsbCwgbDI6IExpc3ROb2RlPFQ+IHwgbnVsbCkge1xuICAgIGlmIChsMiEubmV4dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsMTtcbiAgICB9IGVsc2UgaWYgKGwxIS5uZXh0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGwyO1xuICAgIH1cblxuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIHdoaWxlICghKGwxID09PSBudWxsICYmIGwyID09PSBudWxsKSkge1xuICAgICAgICBpZiAobDEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGwyIS52YWwpO1xuICAgICAgICAgICAgbDIgPSBsMiEubmV4dCE7XG4gICAgICAgIH0gZWxzZSBpZiAobDIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGwxLnZhbCk7IC8vIOi/memHjOeahCBsMSDkuI3pnIDopoEgIeaYr+WboOS4uiDkuIrpnaLmnaHku7ZcbiAgICAgICAgICAgIGwxID0gbDEubmV4dDtcbiAgICAgICAgfSBlbHNlIGlmIChsMS52YWwgPCBsMi52YWwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGwxLnZhbCk7XG4gICAgICAgICAgICBsMSA9IGwxLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnIucHVzaChsMi52YWwpO1xuICAgICAgICAgICAgbDIgPSBsMi5uZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZV9MaW5rZWRfbGlzdChhcnIpO1xufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVfTGlua2VkX2xpc3Q8VD4oYXJyOiBUW10pIHtcbiAgICBjb25zdCByb290ID0gbmV3IExpc3ROb2RlKGFyci5zaGlmdCgpKTtcbiAgICBsZXQgY3VyID0gcm9vdDtcbiAgICBsZXQgdGVtcDtcbiAgICBmb3IgKGNvbnN0IHYgb2YgYXJyKSB7XG4gICAgICAgIHRlbXAgPSBuZXcgTGlzdE5vZGUodik7XG4gICAgICAgIGN1ci5uZXh0ID0gdGVtcDtcbiAgICAgICAgY3VyID0gdGVtcDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIG1lcmdlVHdvTGlzdHMoXG4gICAgICAgIGNyZWF0ZV9MaW5rZWRfbGlzdChbMSwgMiwgNF0pLFxuICAgICAgICBjcmVhdGVfTGlua2VkX2xpc3QoWzEsIDMsIDRdKSxcbiAgICApIS50b0FycmF5KCksXG5cbiAgICBbMSwgMSwgMiwgMywgNCwgNF0sXG4pO1xuXG5cblxuXG5cblxuXG5cbiJdfQ==