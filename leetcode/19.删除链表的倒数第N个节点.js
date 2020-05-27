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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTku5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysTuS4quiKgueCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKLG1EQUFnRTtBQUVoRTs7OztHQUlHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3hEOztTQUVLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0IsZ0JBQWdCO0lBQ2hCLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7SUFFRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDO1FBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsMEJBQTBCO0lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUM7SUFFNUIsT0FBTyxJQUFJLENBQUM7SUFFWixTQUFTLE1BQU0sQ0FBQyxRQUFrQixFQUFFLENBQVM7UUFDM0MsT0FBTyxDQUFDLEVBQUU7WUFDUixRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUssQ0FBQztZQUMxQixDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDbEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDYixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXpFLGdCQUFNLENBQUMsZUFBZSxDQUNwQixnQkFBZ0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsZ0JBQWdCLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDekQsQ0FBQyxDQUFDLENBQUMsQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq6ZO+6KGo77yM5Yig6Zmk6ZO+6KGo55qE5YCS5pWw56ysIG4g5Liq6IqC54K577yM5bm25LiU6L+U5Zue6ZO+6KGo55qE5aS057uT54K544CCXHJcblxyXG7npLrkvovvvJpcclxuXHJcbue7meWumuS4gOS4qumTvuihqDogMS0+Mi0+My0+NC0+NSwg5ZKMIG4gPSAyLlxyXG5cclxu5b2T5Yig6Zmk5LqG5YCS5pWw56ys5LqM5Liq6IqC54K55ZCO77yM6ZO+6KGo5Y+Y5Li6IDEtPjItPjMtPjUuXHJcbuivtOaYju+8mlxyXG5cclxu57uZ5a6a55qEIG4g5L+d6K+B5piv5pyJ5pWI55qE44CCXHJcblxyXG7ov5vpmLbvvJpcclxuXHJcbuS9oOiDveWwneivleS9v+eUqOS4gOi2n+aJq+aPj+WunueOsOWQl++8n1xyXG4qICovXHJcbmltcG9ydCB7IExpc3ROb2RlLCBjcmVhdGVMaW5rZWRMaXN0IH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcclxuICogQHBhcmFtIHtudW1iZXJ9IG5cclxuICogQHJldHVybiB7TGlzdE5vZGV9XHJcbiAqL1xyXG52YXIgcmVtb3ZlTnRoRnJvbUVuZCA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZSwgbjogbnVtYmVyKTogTGlzdE5vZGUgfCBudWxsIHtcclxuICAvKipcclxuICAgKiDogIHmoLflrZAg5b+r5oWi5oyH6ZKIXHJcbiAgICogKi9cclxuICBsZXQgc2xvdyA9IGhlYWQ7XHJcbiAgbGV0IGZhc3QgPSBuZXh0X24oaGVhZCwgbik7XHJcblxyXG4gIC8vIOWIoOmZpOeahOaYryBoZWFkIOe7k+eCuXtcclxuICBpZiAoZmFzdCA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGhlYWQubmV4dDtcclxuICB9XHJcblxyXG4gIHdoaWxlIChmYXN0ICYmIGZhc3QubmV4dCkge1xyXG4gICAgc2xvdyA9IHNsb3cubmV4dCE7XHJcbiAgICBmYXN0ID0gZmFzdC5uZXh0O1xyXG4gIH1cclxuICAvLyDov5nph4znmoQgc2xvdyDmmK/opoHliKDpmaTnmoToioLngrnnmoQg5YmN5LiA5Liq6IqC54K5XHJcbiAgc2xvdy5uZXh0ID0gc2xvdy5uZXh0IS5uZXh0O1xyXG5cclxuICByZXR1cm4gaGVhZDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dF9uKGxpc3ROb2RlOiBMaXN0Tm9kZSwgbjogbnVtYmVyKSB7XHJcbiAgICB3aGlsZSAobikge1xyXG4gICAgICBsaXN0Tm9kZSA9IGxpc3ROb2RlLm5leHQhO1xyXG4gICAgICBuLS07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdE5vZGU7XHJcbiAgfVxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gIHJlbW92ZU50aEZyb21FbmQoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNCwgNV0pLCAyKSEudG9TdHJpbmcoKSxcclxuICBbMSwgMiwgMywgNV1cclxuKTtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxXSksIDEpLCBudWxsKTtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgcmVtb3ZlTnRoRnJvbUVuZChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyXSksIDEpIS50b1N0cmluZygpLFxyXG4gIFsxXVxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gIHJlbW92ZU50aEZyb21FbmQoY3JlYXRlTGlua2VkTGlzdChbMSwgMl0pLCAyKSEudG9TdHJpbmcoKSxcclxuICBbMl1cclxuKTtcclxuIl19