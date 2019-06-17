"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。

 

示例 1：
 3 -> 2 -> 0 -> -4
     │          ┃
     ╰ ── ─ ╯

输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：
1 -> 2
│   ┃
╰  ╯
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：
1
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。


 

进阶：
你是否可以不用额外空间解决此题？



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 弗洛伊德算法
    // 先快慢指针 判断是否有环的同时获取第一次相遇的节点
    let slow = head;
    let fast = head;
    if (fast == null || fast.next == null)
        return null;
    while (fast && fast.next) {
        fast = fast.next.next;
        // 保证fast指针你能先判断
        if (fast == null || fast.next == null)
            return null;
        slow = slow.next;
        if (slow === fast)
            break;
    }
    // 第二次跑圈 将其中一个 指针指向head节点 并且 都每次只进一步
    // 相遇的节点 就是相较的节点
    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
/*
var detectCycle = function (head: ListNode | null) {
    // 朴实的操作 记录全部的节点
    if (head == null) return null;
    const set = new Set();
    let currentNode = head;
    while (currentNode != null) {
        set.add(currentNode);
        if (set.has(currentNode!.next)) {
            return currentNode.next;
        }

        if (currentNode!.next == null) {
            return null;
        }
        currentNode = currentNode!.next;
    }
};
*/
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(detectCycle(null), null);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([1], -1)), null);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([3, 2, 0, -4], 1)).val, 2);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([1, 2], 0)).val, 1);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([1], 0)).val, 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyLueOr+W9oumTvuihqElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNDIu546v5b2i6ZO+6KGoSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkNJO0FBQ0osbURBQThEO0FBRTlEOzs7R0FHRztBQUVILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBcUI7SUFFN0MsU0FBUztJQUNULDRCQUE0QjtJQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQztRQUN4QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5ELElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxNQUFNO0tBQzVCO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ1osT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2xCLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFHaEIsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQ2pCLElBQUksQ0FDUCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN0QyxJQUFJLENBQ1AsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQ3BELENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxFQUM3QyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxFQUMxQyxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4qumTvuihqO+8jOi/lOWbnumTvuihqOW8gOWni+WFpeeOr+eahOesrOS4gOS4quiKgueCueOAgsKg5aaC5p6c6ZO+6KGo5peg546v77yM5YiZ6L+U5ZuewqBudWxs44CCXHJcblxyXG7kuLrkuobooajnpLrnu5nlrprpk77ooajkuK3nmoTnjq/vvIzmiJHku6zkvb/nlKjmlbTmlbAgcG9zIOadpeihqOekuumTvuihqOWwvui/nuaOpeWIsOmTvuihqOS4reeahOS9jee9ru+8iOe0ouW8leS7jiAwIOW8gOWni++8ieOAgiDlpoLmnpwgcG9zIOaYryAtMe+8jOWImeWcqOivpemTvuihqOS4reayoeacieeOr+OAglxyXG5cclxu6K+05piO77ya5LiN5YWB6K645L+u5pS557uZ5a6a55qE6ZO+6KGo44CCXHJcblxyXG7CoFxyXG5cclxu56S65L6LIDHvvJpcclxuIDMgLT4gMiAtPiAwIC0+IC00XHJcbiAgICAg4pSCICAgICAgICAgIOKUg1xyXG4gICAgIOKVsCDilIDilIAg4pSAIOKVr1xyXG5cclxu6L6T5YWl77yaaGVhZCA9IFszLDIsMCwtNF0sIHBvcyA9IDFcclxu6L6T5Ye677yadGFpbCBjb25uZWN0cyB0byBub2RlIGluZGV4IDFcclxu6Kej6YeK77ya6ZO+6KGo5Lit5pyJ5LiA5Liq546v77yM5YW25bC+6YOo6L+e5o6l5Yiw56ys5LqM5Liq6IqC54K544CCXHJcblxyXG5cclxu56S65L6LwqAy77yaXHJcbjEgLT4gMlxyXG7ilIIgICDilINcclxu4pWwICDila9cclxu6L6T5YWl77yaaGVhZCA9IFsxLDJdLCBwb3MgPSAwXHJcbui+k+WHuu+8mnRhaWwgY29ubmVjdHMgdG8gbm9kZSBpbmRleCAwXHJcbuino+mHiu+8mumTvuihqOS4reacieS4gOS4queOr++8jOWFtuWwvumDqOi/nuaOpeWIsOesrOS4gOS4quiKgueCueOAglxyXG5cclxuXHJcbuekuuS+iyAz77yaXHJcbjFcclxu6L6T5YWl77yaaGVhZCA9IFsxXSwgcG9zID0gLTFcclxu6L6T5Ye677yabm8gY3ljbGVcclxu6Kej6YeK77ya6ZO+6KGo5Lit5rKh5pyJ546v44CCXHJcblxyXG5cclxuwqBcclxuXHJcbui/m+mYtu+8mlxyXG7kvaDmmK/lkKblj6/ku6XkuI3nlKjpop3lpJbnqbrpl7Top6PlhrPmraTpopjvvJ9cclxuXHJcblxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbGlua2VkLWxpc3QtY3ljbGUtaWlcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuaW1wb3J0IHtMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcclxuICogQHJldHVybiB7TGlzdE5vZGV9XHJcbiAqL1xyXG5cclxudmFyIGRldGVjdEN5Y2xlID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xyXG5cclxuICAgIC8vIOW8l+a0m+S8iuW+t+eul+azlVxyXG4gICAgLy8g5YWI5b+r5oWi5oyH6ZKIIOWIpOaWreaYr+WQpuacieeOr+eahOWQjOaXtuiOt+WPluesrOS4gOasoeebuOmBh+eahOiKgueCuVxyXG4gICAgbGV0IHNsb3cgPSBoZWFkO1xyXG4gICAgbGV0IGZhc3QgPSBoZWFkO1xyXG4gICAgaWYgKGZhc3QgPT0gbnVsbCB8fCBmYXN0Lm5leHQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICB3aGlsZSAoZmFzdCAmJiBmYXN0Lm5leHQpIHtcclxuICAgICAgICBmYXN0ID0gZmFzdC5uZXh0IS5uZXh0ITtcclxuICAgICAgICAvLyDkv53or4FmYXN05oyH6ZKI5L2g6IO95YWI5Yik5patXHJcbiAgICAgICAgaWYgKGZhc3QgPT0gbnVsbCB8fCBmYXN0Lm5leHQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHNsb3cgPSBzbG93IS5uZXh0ITtcclxuXHJcbiAgICAgICAgaWYgKHNsb3cgPT09IGZhc3QpIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOesrOS6jOasoei3keWciCDlsIblhbbkuK3kuIDkuKog5oyH6ZKI5oyH5ZCRaGVhZOiKgueCuSDlubbkuJQg6YO95q+P5qyh5Y+q6L+b5LiA5q2lXHJcbiAgICAvLyDnm7jpgYfnmoToioLngrkg5bCx5piv55u46L6D55qE6IqC54K5XHJcbiAgICBmYXN0ID0gaGVhZDtcclxuICAgIHdoaWxlIChmYXN0ICE9PSBzbG93KSB7XHJcbiAgICAgICAgZmFzdCA9IGZhc3QhLm5leHQhO1xyXG4gICAgICAgIHNsb3cgPSBzbG93IS5uZXh0ITtcclxuICAgIH1cclxuICAgIHJldHVybiBzbG93O1xyXG5cclxuXHJcbn07XHJcblxyXG4vKlxyXG52YXIgZGV0ZWN0Q3ljbGUgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUgfCBudWxsKSB7XHJcbiAgICAvLyDmnLTlrp7nmoTmk43kvZwg6K6w5b2V5YWo6YOo55qE6IqC54K5XHJcbiAgICBpZiAoaGVhZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcclxuICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHNldC5hZGQoY3VycmVudE5vZGUpO1xyXG4gICAgICAgIGlmIChzZXQuaGFzKGN1cnJlbnROb2RlIS5uZXh0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudE5vZGUubmV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSEubmV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlIS5uZXh0O1xyXG4gICAgfVxyXG59O1xyXG4qL1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBkZXRlY3RDeWNsZShudWxsKSxcclxuICAgIG51bGwsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzFdLCAtMSkpLFxyXG4gICAgbnVsbCxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMywgMiwgMCwgLTRdLCAxKSkhLnZhbCxcclxuICAgIDIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdLCAwKSkhLnZhbCxcclxuICAgIDEsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzFdLCAwKSkhLnZhbCxcclxuICAgIDEsXHJcbik7XHJcbiJdfQ==