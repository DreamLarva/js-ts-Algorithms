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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKLG1EQUE4RDtBQUU5RDs7OztHQUlHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3REOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0IsZ0JBQWdCO0lBQ2hCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNwQjtJQUVELE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7UUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDcEI7SUFDRCwwQkFBMEI7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUksQ0FBQztJQUU1QixPQUFPLElBQUksQ0FBQztJQUVaLFNBQVMsTUFBTSxDQUFDLFFBQWtCLEVBQUUsQ0FBUztRQUN6QyxPQUFPLENBQUMsRUFBRTtZQUNOLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDO1NBQ1A7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUM3RCxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUNaLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQyxJQUFJLENBQ1AsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDekQsQ0FBQyxDQUFDLENBQUMsQ0FDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumTvuihqO+8jOWIoOmZpOmTvuihqOeahOWAkuaVsOesrCBuIOS4quiKgueCue+8jOW5tuS4lOi/lOWbnumTvuihqOeahOWktOe7k+eCueOAglxuXG7npLrkvovvvJpcblxu57uZ5a6a5LiA5Liq6ZO+6KGoOiAxLT4yLT4zLT40LT41LCDlkowgbiA9IDIuXG5cbuW9k+WIoOmZpOS6huWAkuaVsOesrOS6jOS4quiKgueCueWQju+8jOmTvuihqOWPmOS4uiAxLT4yLT4zLT41Llxu6K+05piO77yaXG5cbue7meWumueahCBuIOS/neivgeaYr+acieaViOeahOOAglxuXG7ov5vpmLbvvJpcblxu5L2g6IO95bCd6K+V5L2/55So5LiA6Laf5omr5o+P5a6e546w5ZCX77yfXG4qICovXG5pbXBvcnQge0xpc3ROb2RlLCBjcmVhdGVMaW5rZWRMaXN0fSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG52YXIgcmVtb3ZlTnRoRnJvbUVuZCA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZSwgbjogbnVtYmVyKTogTGlzdE5vZGUgfCBudWxsIHtcbiAgICAvKipcbiAgICAgKiDogIHmoLflrZAg5b+r5oWi5oyH6ZKIXG4gICAgICogKi9cbiAgICBsZXQgc2xvdyA9IGhlYWQ7XG4gICAgbGV0IGZhc3QgPSBuZXh0X24oaGVhZCwgbik7XG5cbiAgICAvLyDliKDpmaTnmoTmmK8gaGVhZCDnu5Pngrl7XG4gICAgaWYgKGZhc3QgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGhlYWQubmV4dDtcbiAgICB9XG5cbiAgICB3aGlsZSAoZmFzdCAmJiBmYXN0Lm5leHQpIHtcbiAgICAgICAgc2xvdyA9IHNsb3cubmV4dCE7XG4gICAgICAgIGZhc3QgPSBmYXN0Lm5leHQ7XG4gICAgfVxuICAgIC8vIOi/memHjOeahCBzbG93IOaYr+imgeWIoOmZpOeahOiKgueCueeahCDliY3kuIDkuKroioLngrlcbiAgICBzbG93Lm5leHQgPSBzbG93Lm5leHQhLm5leHQ7XG5cbiAgICByZXR1cm4gaGVhZDtcblxuICAgIGZ1bmN0aW9uIG5leHRfbihsaXN0Tm9kZTogTGlzdE5vZGUsIG46IG51bWJlcikge1xuICAgICAgICB3aGlsZSAobikge1xuICAgICAgICAgICAgbGlzdE5vZGUgPSBsaXN0Tm9kZS5uZXh0ITtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdE5vZGU7XG4gICAgfVxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxLDIsMyw0LDVdKSwyKSEudG9TdHJpbmcoKSxcbiAgICBbMSwyLDMsNV1cbik7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxXSksIDEpLFxuICAgIG51bGwsXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHJlbW92ZU50aEZyb21FbmQoY3JlYXRlTGlua2VkTGlzdChbMSwgMl0pLCAxKSEudG9TdHJpbmcoKSxcbiAgICBbMV0sXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICByZW1vdmVOdGhGcm9tRW5kKGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdKSwgMikhLnRvU3RyaW5nKCksXG4gICAgWzJdLFxuKTtcblxuXG5cbiJdfQ==