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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKLG1EQUE4RDtBQUU5RDs7OztHQUlHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3REOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0IsZ0JBQWdCO0lBQ2hCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNwQjtJQUVELE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7UUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDcEI7SUFDRCwwQkFBMEI7SUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUksQ0FBQztJQUU1QixPQUFPLElBQUksQ0FBQztJQUVaLFNBQVMsTUFBTSxDQUFDLFFBQWtCLEVBQUUsQ0FBUztRQUN6QyxPQUFPLENBQUMsRUFBRTtZQUNOLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDO1NBQ1A7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUM3RCxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUNaLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQyxJQUFJLENBQ1AsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDekQsQ0FBQyxDQUFDLENBQUMsQ0FDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq6ZO+6KGo77yM5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysIG4g5Liq6IqC54K577yM5bm25LiU6L+U5Zue6ZO+6KGo55qE5aS057uT54K544CCXHJcblxyXG7npLrkvovvvJpcclxuXHJcbue7meWumuS4gOS4qumTvuihqDogMS0+Mi0+My0+NC0+NSwg5ZKMIG4gPSAyLlxyXG5cclxu5b2T5Yig6Zmk5LqG5YCS5pWw56ys5LqM5Liq6IqC54K55ZCO77yM6ZO+6KGo5Y+Y5Li6IDEtPjItPjMtPjUuXHJcbuivtOaYju+8mlxyXG5cclxu57uZ5a6a55qEIG4g5L+d6K+B5piv5pyJ5pWI55qE44CCXHJcblxyXG7ov5vpmLbvvJpcclxuXHJcbuS9oOiDveWwneivleS9v+eUqOS4gOi2n+aJq+aPj+WunueOsOWQl++8n1xyXG4qICovXHJcbmltcG9ydCB7TGlzdE5vZGUsIGNyZWF0ZUxpbmtlZExpc3R9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxyXG4gKi9cclxudmFyIHJlbW92ZU50aEZyb21FbmQgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUsIG46IG51bWJlcik6IExpc3ROb2RlIHwgbnVsbCB7XHJcbiAgICAvKipcclxuICAgICAqIOiAgeagt+WtkCDlv6vmhaLmjIfpkohcclxuICAgICAqICovXHJcbiAgICBsZXQgc2xvdyA9IGhlYWQ7XHJcbiAgICBsZXQgZmFzdCA9IG5leHRfbihoZWFkLCBuKTtcclxuXHJcbiAgICAvLyDliKDpmaTnmoTmmK8gaGVhZCDnu5Pngrl7XHJcbiAgICBpZiAoZmFzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBoZWFkLm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKGZhc3QgJiYgZmFzdC5uZXh0KSB7XHJcbiAgICAgICAgc2xvdyA9IHNsb3cubmV4dCE7XHJcbiAgICAgICAgZmFzdCA9IGZhc3QubmV4dDtcclxuICAgIH1cclxuICAgIC8vIOi/memHjOeahCBzbG93IOaYr+imgeWIoOmZpOeahOiKgueCueeahCDliY3kuIDkuKroioLngrlcclxuICAgIHNsb3cubmV4dCA9IHNsb3cubmV4dCEubmV4dDtcclxuXHJcbiAgICByZXR1cm4gaGVhZDtcclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0X24obGlzdE5vZGU6IExpc3ROb2RlLCBuOiBudW1iZXIpIHtcclxuICAgICAgICB3aGlsZSAobikge1xyXG4gICAgICAgICAgICBsaXN0Tm9kZSA9IGxpc3ROb2RlLm5leHQhO1xyXG4gICAgICAgICAgICBuLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0Tm9kZTtcclxuICAgIH1cclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJlbW92ZU50aEZyb21FbmQoY3JlYXRlTGlua2VkTGlzdChbMSwyLDMsNCw1XSksMikhLnRvU3RyaW5nKCksXHJcbiAgICBbMSwyLDMsNV1cclxuKTtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICByZW1vdmVOdGhGcm9tRW5kKGNyZWF0ZUxpbmtlZExpc3QoWzFdKSwgMSksXHJcbiAgICBudWxsLFxyXG4pO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJlbW92ZU50aEZyb21FbmQoY3JlYXRlTGlua2VkTGlzdChbMSwgMl0pLCAxKSEudG9TdHJpbmcoKSxcclxuICAgIFsxXSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJlbW92ZU50aEZyb21FbmQoY3JlYXRlTGlua2VkTGlzdChbMSwgMl0pLCAyKSEudG9TdHJpbmcoKSxcclxuICAgIFsyXSxcclxuKTtcclxuXHJcblxyXG5cclxuIl19