"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。



示例 1：
 3 -> 2 -> 0 -> -4
     │          ┃
     ╰ ── ─ ╯

输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：
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
assert_1.default.strictEqual(detectCycle((0, LinkedList_1.createLinkedList)([1], -1)), null);
assert_1.default.strictEqual(detectCycle((0, LinkedList_1.createLinkedList)([3, 2, 0, -4], 1)).val, 2);
assert_1.default.strictEqual(detectCycle((0, LinkedList_1.createLinkedList)([1, 2], 0)).val, 1);
assert_1.default.strictEqual(detectCycle((0, LinkedList_1.createLinkedList)([1], 0)).val, 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyLueOr+W9oumTvuihqElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNDIu546v5b2i6ZO+6KGoSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkNJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUVILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBcUI7SUFDL0MsU0FBUztJQUNULDRCQUE0QjtJQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQztRQUN4QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5ELElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxNQUFNO0tBQzFCO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ1osT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3BCLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBQSw2QkFBZ0IsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBQSw2QkFBZ0IsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpk77ooajvvIzov5Tlm57pk77ooajlvIDlp4vlhaXnjq/nmoTnrKzkuIDkuKroioLngrnjgIIg5aaC5p6c6ZO+6KGo5peg546v77yM5YiZ6L+U5ZueIG51bGzjgIJcblxu5Li65LqG6KGo56S657uZ5a6a6ZO+6KGo5Lit55qE546v77yM5oiR5Lus5L2/55So5pW05pWwIHBvcyDmnaXooajnpLrpk77ooajlsL7ov57mjqXliLDpk77ooajkuK3nmoTkvY3nva7vvIjntKLlvJXku44gMCDlvIDlp4vvvInjgIIg5aaC5p6cIHBvcyDmmK8gLTHvvIzliJnlnKjor6Xpk77ooajkuK3msqHmnInnjq/jgIJcblxu6K+05piO77ya5LiN5YWB6K645L+u5pS557uZ5a6a55qE6ZO+6KGo44CCXG5cblxuXG7npLrkvosgMe+8mlxuIDMgLT4gMiAtPiAwIC0+IC00XG4gICAgIOKUgiAgICAgICAgICDilINcbiAgICAg4pWwIOKUgOKUgCDilIAg4pWvXG5cbui+k+WFpe+8mmhlYWQgPSBbMywyLDAsLTRdLCBwb3MgPSAxXG7ovpPlh7rvvJp0YWlsIGNvbm5lY3RzIHRvIG5vZGUgaW5kZXggMVxu6Kej6YeK77ya6ZO+6KGo5Lit5pyJ5LiA5Liq546v77yM5YW25bC+6YOo6L+e5o6l5Yiw56ys5LqM5Liq6IqC54K544CCXG5cblxu56S65L6LIDLvvJpcbjEgLT4gMlxu4pSCICAg4pSDXG7ilbAgIOKVr1xu6L6T5YWl77yaaGVhZCA9IFsxLDJdLCBwb3MgPSAwXG7ovpPlh7rvvJp0YWlsIGNvbm5lY3RzIHRvIG5vZGUgaW5kZXggMFxu6Kej6YeK77ya6ZO+6KGo5Lit5pyJ5LiA5Liq546v77yM5YW25bC+6YOo6L+e5o6l5Yiw56ys5LiA5Liq6IqC54K544CCXG5cblxu56S65L6LIDPvvJpcbjFcbui+k+WFpe+8mmhlYWQgPSBbMV0sIHBvcyA9IC0xXG7ovpPlh7rvvJpubyBjeWNsZVxu6Kej6YeK77ya6ZO+6KGo5Lit5rKh5pyJ546v44CCXG5cblxuXG5cbui/m+mYtu+8mlxu5L2g5piv5ZCm5Y+v5Lul5LiN55So6aKd5aSW56m66Ze06Kej5Yaz5q2k6aKY77yfXG5cblxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbGlua2VkLWxpc3QtY3ljbGUtaWlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IHsgTGlzdE5vZGUsIGNyZWF0ZUxpbmtlZExpc3QgfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxuICogQHJldHVybiB7TGlzdE5vZGV9XG4gKi9cblxudmFyIGRldGVjdEN5Y2xlID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xuICAvLyDlvJfmtJvkvIrlvrfnrpfms5VcbiAgLy8g5YWI5b+r5oWi5oyH6ZKIIOWIpOaWreaYr+WQpuacieeOr+eahOWQjOaXtuiOt+WPluesrOS4gOasoeebuOmBh+eahOiKgueCuVxuICBsZXQgc2xvdyA9IGhlYWQ7XG4gIGxldCBmYXN0ID0gaGVhZDtcbiAgaWYgKGZhc3QgPT0gbnVsbCB8fCBmYXN0Lm5leHQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gIHdoaWxlIChmYXN0ICYmIGZhc3QubmV4dCkge1xuICAgIGZhc3QgPSBmYXN0Lm5leHQhLm5leHQhO1xuICAgIC8vIOS/neivgWZhc3TmjIfpkojkvaDog73lhYjliKTmlq1cbiAgICBpZiAoZmFzdCA9PSBudWxsIHx8IGZhc3QubmV4dCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIHNsb3cgPSBzbG93IS5uZXh0ITtcblxuICAgIGlmIChzbG93ID09PSBmYXN0KSBicmVhaztcbiAgfVxuXG4gIC8vIOesrOS6jOasoei3keWciCDlsIblhbbkuK3kuIDkuKog5oyH6ZKI5oyH5ZCRaGVhZOiKgueCuSDlubbkuJQg6YO95q+P5qyh5Y+q6L+b5LiA5q2lXG4gIC8vIOebuOmBh+eahOiKgueCuSDlsLHmmK/nm7jovoPnmoToioLngrlcbiAgZmFzdCA9IGhlYWQ7XG4gIHdoaWxlIChmYXN0ICE9PSBzbG93KSB7XG4gICAgZmFzdCA9IGZhc3QhLm5leHQhO1xuICAgIHNsb3cgPSBzbG93IS5uZXh0ITtcbiAgfVxuICByZXR1cm4gc2xvdztcbn07XG5cbi8qXG52YXIgZGV0ZWN0Q3ljbGUgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUgfCBudWxsKSB7XG4gICAgLy8g5py05a6e55qE5pON5L2cIOiusOW9leWFqOmDqOeahOiKgueCuVxuICAgIGlmIChoZWFkID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHNldC5hZGQoY3VycmVudE5vZGUpO1xuICAgICAgICBpZiAoc2V0LmhhcyhjdXJyZW50Tm9kZSEubmV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlIS5uZXh0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUhLm5leHQ7XG4gICAgfVxufTtcbiovXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUobnVsbCksIG51bGwpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzFdLCAtMSkpLCBudWxsKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkZXRlY3RDeWNsZShjcmVhdGVMaW5rZWRMaXN0KFszLCAyLCAwLCAtNF0sIDEpKSEudmFsLCAyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkZXRlY3RDeWNsZShjcmVhdGVMaW5rZWRMaXN0KFsxLCAyXSwgMCkpIS52YWwsIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzFdLCAwKSkhLnZhbCwgMSk7XG4iXX0=