"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
* */
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    /**
     * 老样子 快慢指针
     * */
    let slow = head;
    let fast = next_n(head, n);
    // 删除的是 head 结点{
    if (fast === null) {
        return head.next;
    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    // 这里的 slow 是要删除的节点的 前一个节点
    slow.next = slow.next.next;
    return head;
    function next_n(listNode, n) {
        while (n) {
            listNode = listNode.next;
            n--;
        }
        return listNode;
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(removeNthFromEnd(LinkedList_1.createLinkedList([1, 2, 3, 4, 5]), 2).toString(), [1, 2, 3, 5]);
assert_1.default.deepStrictEqual(removeNthFromEnd(LinkedList_1.createLinkedList([1]), 1), null);
assert_1.default.deepStrictEqual(removeNthFromEnd(LinkedList_1.createLinkedList([1, 2]), 1).toString(), [1]);
assert_1.default.deepStrictEqual(removeNthFromEnd(LinkedList_1.createLinkedList([1, 2]), 2).toString(), [2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKLG1EQUFnRTtBQUVoRTs7OztHQUlHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3hEOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0IsZ0JBQWdCO0lBQ2hCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7SUFFRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDO1FBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsMEJBQTBCO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUM7SUFFNUIsT0FBTyxJQUFJLENBQUM7SUFFWixTQUFTLE1BQU0sQ0FBQyxRQUFrQixFQUFFLENBQVM7UUFDM0MsT0FBTyxDQUFDLEVBQUU7WUFDUixRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUssQ0FBQztZQUMxQixDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDbEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDYixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXpFLGdCQUFNLENBQUMsZUFBZSxDQUNwQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDekQsQ0FBQyxDQUFDLENBQUMsQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumTvuihqO+8jOWIoOmZpOmTvuihqOeahOWAkuaVsOesrCBuIOS4quiKgueCue+8jOW5tuS4lOi/lOWbnumTvuihqOeahOWktOe7k+eCueOAglxuXG7npLrkvovvvJpcblxu57uZ5a6a5LiA5Liq6ZO+6KGoOiAxLT4yLT4zLT40LT41LCDlkowgbiA9IDIuXG5cbuW9k+WIoOmZpOS6huWAkuaVsOesrOS6jOS4quiKgueCueWQju+8jOmTvuihqOWPmOS4uiAxLT4yLT4zLT41Llxu6K+05piO77yaXG5cbue7meWumueahCBuIOS/neivgeaYr+acieaViOeahOOAglxuXG7ov5vpmLbvvJpcblxu5L2g6IO95bCd6K+V5L2/55So5LiA6Laf5omr5o+P5a6e546w5ZCX77yfXG4qICovXG5pbXBvcnQgeyBMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7TGlzdE5vZGV9XG4gKi9cbnZhciByZW1vdmVOdGhGcm9tRW5kID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlLCBuOiBudW1iZXIpOiBMaXN0Tm9kZSB8IG51bGwge1xuICAvKipcbiAgICog6ICB5qC35a2QIOW/q+aFouaMh+mSiFxuICAgKiAqL1xuICBsZXQgc2xvdyA9IGhlYWQ7XG4gIGxldCBmYXN0ID0gbmV4dF9uKGhlYWQsIG4pO1xuXG4gIC8vIOWIoOmZpOeahOaYryBoZWFkIOe7k+eCuXtcbiAgaWYgKGZhc3QgPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGVhZC5uZXh0O1xuICB9XG5cbiAgd2hpbGUgKGZhc3QgJiYgZmFzdC5uZXh0KSB7XG4gICAgc2xvdyA9IHNsb3cubmV4dCE7XG4gICAgZmFzdCA9IGZhc3QubmV4dDtcbiAgfVxuICAvLyDov5nph4znmoQgc2xvdyDmmK/opoHliKDpmaTnmoToioLngrnnmoQg5YmN5LiA5Liq6IqC54K5XG4gIHNsb3cubmV4dCA9IHNsb3cubmV4dCEubmV4dDtcblxuICByZXR1cm4gaGVhZDtcblxuICBmdW5jdGlvbiBuZXh0X24obGlzdE5vZGU6IExpc3ROb2RlLCBuOiBudW1iZXIpIHtcbiAgICB3aGlsZSAobikge1xuICAgICAgbGlzdE5vZGUgPSBsaXN0Tm9kZS5uZXh0ITtcbiAgICAgIG4tLTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3ROb2RlO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCAzLCA0LCA1XSksIDIpIS50b1N0cmluZygpLFxuICBbMSwgMiwgMywgNV1cbik7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxXSksIDEpLCBudWxsKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyXSksIDEpIS50b1N0cmluZygpLFxuICBbMV1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByZW1vdmVOdGhGcm9tRW5kKGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdKSwgMikhLnRvU3RyaW5nKCksXG4gIFsyXVxuKTtcbiJdfQ==