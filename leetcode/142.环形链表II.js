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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyLueOr+W9oumTvuihqElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNDIu546v5b2i6ZO+6KGoSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkNJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUVILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBcUI7SUFDL0MsU0FBUztJQUNULDRCQUE0QjtJQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQztRQUN4QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5ELElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxNQUFNO0tBQzFCO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ1osT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3BCLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq6ZO+6KGo77yM6L+U5Zue6ZO+6KGo5byA5aeL5YWl546v55qE56ys5LiA5Liq6IqC54K544CCwqDlpoLmnpzpk77ooajml6Dnjq/vvIzliJnov5Tlm57CoG51bGzjgIJcblxu5Li65LqG6KGo56S657uZ5a6a6ZO+6KGo5Lit55qE546v77yM5oiR5Lus5L2/55So5pW05pWwIHBvcyDmnaXooajnpLrpk77ooajlsL7ov57mjqXliLDpk77ooajkuK3nmoTkvY3nva7vvIjntKLlvJXku44gMCDlvIDlp4vvvInjgIIg5aaC5p6cIHBvcyDmmK8gLTHvvIzliJnlnKjor6Xpk77ooajkuK3msqHmnInnjq/jgIJcblxu6K+05piO77ya5LiN5YWB6K645L+u5pS557uZ5a6a55qE6ZO+6KGo44CCXG5cbsKgXG5cbuekuuS+iyAx77yaXG4gMyAtPiAyIC0+IDAgLT4gLTRcbiAgICAg4pSCICAgICAgICAgIOKUg1xuICAgICDilbAg4pSA4pSAIOKUgCDila9cblxu6L6T5YWl77yaaGVhZCA9IFszLDIsMCwtNF0sIHBvcyA9IDFcbui+k+WHuu+8mnRhaWwgY29ubmVjdHMgdG8gbm9kZSBpbmRleCAxXG7op6Pph4rvvJrpk77ooajkuK3mnInkuIDkuKrnjq/vvIzlhbblsL7pg6jov57mjqXliLDnrKzkuozkuKroioLngrnjgIJcblxuXG7npLrkvovCoDLvvJpcbjEgLT4gMlxu4pSCICAg4pSDXG7ilbAgIOKVr1xu6L6T5YWl77yaaGVhZCA9IFsxLDJdLCBwb3MgPSAwXG7ovpPlh7rvvJp0YWlsIGNvbm5lY3RzIHRvIG5vZGUgaW5kZXggMFxu6Kej6YeK77ya6ZO+6KGo5Lit5pyJ5LiA5Liq546v77yM5YW25bC+6YOo6L+e5o6l5Yiw56ys5LiA5Liq6IqC54K544CCXG5cblxu56S65L6LIDPvvJpcbjFcbui+k+WFpe+8mmhlYWQgPSBbMV0sIHBvcyA9IC0xXG7ovpPlh7rvvJpubyBjeWNsZVxu6Kej6YeK77ya6ZO+6KGo5Lit5rKh5pyJ546v44CCXG5cblxuwqBcblxu6L+b6Zi277yaXG7kvaDmmK/lkKblj6/ku6XkuI3nlKjpop3lpJbnqbrpl7Top6PlhrPmraTpopjvvJ9cblxuXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9saW5rZWQtbGlzdC1jeWNsZS1paVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQgeyBMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xuXG52YXIgZGV0ZWN0Q3ljbGUgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUgfCBudWxsKSB7XG4gIC8vIOW8l+a0m+S8iuW+t+eul+azlVxuICAvLyDlhYjlv6vmhaLmjIfpkogg5Yik5pat5piv5ZCm5pyJ546v55qE5ZCM5pe26I635Y+W56ys5LiA5qyh55u46YGH55qE6IqC54K5XG4gIGxldCBzbG93ID0gaGVhZDtcbiAgbGV0IGZhc3QgPSBoZWFkO1xuICBpZiAoZmFzdCA9PSBudWxsIHx8IGZhc3QubmV4dCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgd2hpbGUgKGZhc3QgJiYgZmFzdC5uZXh0KSB7XG4gICAgZmFzdCA9IGZhc3QubmV4dCEubmV4dCE7XG4gICAgLy8g5L+d6K+BZmFzdOaMh+mSiOS9oOiDveWFiOWIpOaWrVxuICAgIGlmIChmYXN0ID09IG51bGwgfHwgZmFzdC5uZXh0ID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgc2xvdyA9IHNsb3chLm5leHQhO1xuXG4gICAgaWYgKHNsb3cgPT09IGZhc3QpIGJyZWFrO1xuICB9XG5cbiAgLy8g56ys5LqM5qyh6LeR5ZyIIOWwhuWFtuS4reS4gOS4qiDmjIfpkojmjIflkJFoZWFk6IqC54K5IOW5tuS4lCDpg73mr4/mrKHlj6rov5vkuIDmraVcbiAgLy8g55u46YGH55qE6IqC54K5IOWwseaYr+ebuOi+g+eahOiKgueCuVxuICBmYXN0ID0gaGVhZDtcbiAgd2hpbGUgKGZhc3QgIT09IHNsb3cpIHtcbiAgICBmYXN0ID0gZmFzdCEubmV4dCE7XG4gICAgc2xvdyA9IHNsb3chLm5leHQhO1xuICB9XG4gIHJldHVybiBzbG93O1xufTtcblxuLypcbnZhciBkZXRlY3RDeWNsZSA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZSB8IG51bGwpIHtcbiAgICAvLyDmnLTlrp7nmoTmk43kvZwg6K6w5b2V5YWo6YOo55qE6IqC54K5XG4gICAgaWYgKGhlYWQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWQ7XG4gICAgd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgc2V0LmFkZChjdXJyZW50Tm9kZSk7XG4gICAgICAgIGlmIChzZXQuaGFzKGN1cnJlbnROb2RlIS5uZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE5vZGUhLm5leHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZSEubmV4dDtcbiAgICB9XG59O1xuKi9cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChkZXRlY3RDeWNsZShudWxsKSwgbnVsbCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMV0sIC0xKSksIG51bGwpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzMsIDIsIDAsIC00XSwgMSkpIS52YWwsIDIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRldGVjdEN5Y2xlKGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdLCAwKSkhLnZhbCwgMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMV0sIDApKSEudmFsLCAxKTtcbiJdfQ==