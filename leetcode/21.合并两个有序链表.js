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
 * 递归
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function (l1, l2) {
    // 如果 某一个链表到底了 就返回 另一个
    if (l1 === null)
        return l2;
    if (l2 === null)
        return l1;
    if (l1.val <= l2.val) {
        // 递归 下一个值
        l1.next = mergeTwoLists1(l1.next, l2);
        // 返回本轮较小的值
        return l1;
    }
    else {
        l2.next = mergeTwoLists1(l1, l2.next);
        return l2;
    }
};
var mergeTwoLists2 = function (l1, l2) {
    const head = new LinkedList_1.ListNode(0);
    let current = head;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        }
        else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 == null ? l2 : l1;
    return head.next;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(mergeTwoLists1((0, LinkedList_1.createLinkedList)([1, 2, 4]), (0, LinkedList_1.createLinkedList)([1, 3, 4])).toString(), [1, 1, 2, 3, 4, 4]);
assert_1.default.deepStrictEqual(mergeTwoLists2((0, LinkedList_1.createLinkedList)([1, 2, 4]), (0, LinkedList_1.createLinkedList)([1, 3, 4])).toString(), [1, 1, 2, 3, 4, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEu5ZCI5bm25Lik5Liq5pyJ5bqP6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMS7lkIjlubbkuKTkuKrmnInluo/pk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0g7Ozs7OztHQU1HO0FBQ0gsbURBQWdFO0FBRWhFOzs7OztHQUtHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFDbkIsRUFBMkIsRUFDM0IsRUFBMkI7SUFFM0Isc0JBQXNCO0lBQ3RCLElBQUksRUFBRSxLQUFLLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMzQixJQUFJLEVBQUUsS0FBSyxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDcEIsVUFBVTtRQUNWLEVBQUUsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsV0FBVztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ1g7U0FBTTtRQUNMLEVBQUUsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxFQUFFLENBQUM7S0FDWDtBQUNILENBQUMsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFHLFVBQ25CLEVBQTJCLEVBQzNCLEVBQTJCO0lBRTNCLE1BQU0sSUFBSSxHQUFxQixJQUFJLHFCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25CLE9BQU8sRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1FBQy9CLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztLQUN4QjtJQUVELE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsY0FBYyxDQUNaLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNCLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQUMsUUFBUSxFQUFFLEVBRWIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNuQixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGNBQWMsQ0FDWixJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMzQixJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUMzQixDQUFDLFFBQVEsRUFBRSxFQUViLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTIxIGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFsyMV0g5ZCI5bm25Lik5Liq5pyJ5bqP6ZO+6KGoXG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWVyZ2UtdHdvLXNvcnRlZC1saXN0cy9kZXNjcmlwdGlvbi9cbiAqXG4gKiBhbGdvcml0aG1zXG4gKiBFYXN5ICg1Mi4zOCUpXG4gKiBUb3RhbCBBY2NlcHRlZDogICAgNDMuNktcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiA4My4zS1xuICogVGVzdGNhc2UgRXhhbXBsZTogICdbMSwyLDRdXFxuWzEsMyw0XSdcbiAqXG4gKiDlsIbkuKTkuKrmnInluo/pk77ooajlkIjlubbkuLrkuIDkuKrmlrDnmoTmnInluo/pk77ooajlubbov5Tlm57jgILmlrDpk77ooajmmK/pgJrov4fmi7zmjqXnu5nlrprnmoTkuKTkuKrpk77ooajnmoTmiYDmnInoioLngrnnu4TmiJDnmoTjgIJcbiAqXG4gKiDnpLrkvovvvJpcbiAqXG4gKiDovpPlhaXvvJoxLT4yLT40LCAxLT4zLT40XG4gKiDovpPlh7rvvJoxLT4xLT4yLT4zLT40LT40XG4gKlxuICpcbiAqL1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG5pbXBvcnQgeyBMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiDpgJLlvZJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGwxXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMlxuICogQHJldHVybiB7TGlzdE5vZGV9XG4gKi9cbnZhciBtZXJnZVR3b0xpc3RzMSA9IGZ1bmN0aW9uIDxUPihcbiAgbDE6IExpc3ROb2RlPG51bWJlcj4gfCBudWxsLFxuICBsMjogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGxcbik6IExpc3ROb2RlPG51bWJlcj4gfCBudWxsIHtcbiAgLy8g5aaC5p6cIOafkOS4gOS4qumTvuihqOWIsOW6leS6hiDlsLHov5Tlm54g5Y+m5LiA5LiqXG4gIGlmIChsMSA9PT0gbnVsbCkgcmV0dXJuIGwyO1xuICBpZiAobDIgPT09IG51bGwpIHJldHVybiBsMTtcblxuICBpZiAobDEudmFsIDw9IGwyLnZhbCkge1xuICAgIC8vIOmAkuW9kiDkuIvkuIDkuKrlgLxcbiAgICBsMS5uZXh0ID0gbWVyZ2VUd29MaXN0czEobDEubmV4dCwgbDIpO1xuICAgIC8vIOi/lOWbnuacrOi9rui+g+Wwj+eahOWAvFxuICAgIHJldHVybiBsMTtcbiAgfSBlbHNlIHtcbiAgICBsMi5uZXh0ID0gbWVyZ2VUd29MaXN0czEobDEsIGwyLm5leHQpO1xuICAgIHJldHVybiBsMjtcbiAgfVxufTtcblxudmFyIG1lcmdlVHdvTGlzdHMyID0gZnVuY3Rpb24gPFQ+KFxuICBsMTogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGwsXG4gIGwyOiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbFxuKTogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGwge1xuICBjb25zdCBoZWFkOiBMaXN0Tm9kZTxudW1iZXI+ID0gbmV3IExpc3ROb2RlKDApO1xuICBsZXQgY3VycmVudCA9IGhlYWQ7XG4gIHdoaWxlIChsMSAhPSBudWxsICYmIGwyICE9IG51bGwpIHtcbiAgICBpZiAobDEudmFsIDwgbDIudmFsKSB7XG4gICAgICBjdXJyZW50Lm5leHQgPSBsMTtcbiAgICAgIGwxID0gbDEubmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5uZXh0ID0gbDI7XG4gICAgICBsMiA9IGwyLm5leHQ7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIH1cblxuICBjdXJyZW50Lm5leHQgPSBsMSA9PSBudWxsID8gbDIgOiBsMTtcblxuICByZXR1cm4gaGVhZC5uZXh0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIG1lcmdlVHdvTGlzdHMxKFxuICAgIGNyZWF0ZUxpbmtlZExpc3QoWzEsIDIsIDRdKSxcbiAgICBjcmVhdGVMaW5rZWRMaXN0KFsxLCAzLCA0XSlcbiAgKSEudG9TdHJpbmcoKSxcblxuICBbMSwgMSwgMiwgMywgNCwgNF1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBtZXJnZVR3b0xpc3RzMihcbiAgICBjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCA0XSksXG4gICAgY3JlYXRlTGlua2VkTGlzdChbMSwgMywgNF0pXG4gICkhLnRvU3RyaW5nKCksXG5cbiAgWzEsIDEsIDIsIDMsIDQsIDRdXG4pO1xuIl19