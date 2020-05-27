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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyLueOr+W9oumTvuihqElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNDIu546v5b2i6ZO+6KGoSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkNJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUVILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBcUI7SUFDL0MsU0FBUztJQUNULDRCQUE0QjtJQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQztRQUN4QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5ELElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxNQUFNO0tBQzFCO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ1osT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3BCLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrpk77ooajvvIzov5Tlm57pk77ooajlvIDlp4vlhaXnjq/nmoTnrKzkuIDkuKroioLngrnjgILCoOWmguaenOmTvuihqOaXoOeOr++8jOWImei/lOWbnsKgbnVsbOOAglxyXG5cclxu5Li65LqG6KGo56S657uZ5a6a6ZO+6KGo5Lit55qE546v77yM5oiR5Lus5L2/55So5pW05pWwIHBvcyDmnaXooajnpLrpk77ooajlsL7ov57mjqXliLDpk77ooajkuK3nmoTkvY3nva7vvIjntKLlvJXku44gMCDlvIDlp4vvvInjgIIg5aaC5p6cIHBvcyDmmK8gLTHvvIzliJnlnKjor6Xpk77ooajkuK3msqHmnInnjq/jgIJcclxuXHJcbuivtOaYju+8muS4jeWFgeiuuOS/ruaUuee7meWumueahOmTvuihqOOAglxyXG5cclxuwqBcclxuXHJcbuekuuS+iyAx77yaXHJcbiAzIC0+IDIgLT4gMCAtPiAtNFxyXG4gICAgIOKUgiAgICAgICAgICDilINcclxuICAgICDilbAg4pSA4pSAIOKUgCDila9cclxuXHJcbui+k+WFpe+8mmhlYWQgPSBbMywyLDAsLTRdLCBwb3MgPSAxXHJcbui+k+WHuu+8mnRhaWwgY29ubmVjdHMgdG8gbm9kZSBpbmRleCAxXHJcbuino+mHiu+8mumTvuihqOS4reacieS4gOS4queOr++8jOWFtuWwvumDqOi/nuaOpeWIsOesrOS6jOS4quiKgueCueOAglxyXG5cclxuXHJcbuekuuS+i8KgMu+8mlxyXG4xIC0+IDJcclxu4pSCICAg4pSDXHJcbuKVsCAg4pWvXHJcbui+k+WFpe+8mmhlYWQgPSBbMSwyXSwgcG9zID0gMFxyXG7ovpPlh7rvvJp0YWlsIGNvbm5lY3RzIHRvIG5vZGUgaW5kZXggMFxyXG7op6Pph4rvvJrpk77ooajkuK3mnInkuIDkuKrnjq/vvIzlhbblsL7pg6jov57mjqXliLDnrKzkuIDkuKroioLngrnjgIJcclxuXHJcblxyXG7npLrkvosgM++8mlxyXG4xXHJcbui+k+WFpe+8mmhlYWQgPSBbMV0sIHBvcyA9IC0xXHJcbui+k+WHuu+8mm5vIGN5Y2xlXHJcbuino+mHiu+8mumTvuihqOS4reayoeacieeOr+OAglxyXG5cclxuXHJcbsKgXHJcblxyXG7ov5vpmLbvvJpcclxu5L2g5piv5ZCm5Y+v5Lul5LiN55So6aKd5aSW56m66Ze06Kej5Yaz5q2k6aKY77yfXHJcblxyXG5cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xpbmtlZC1saXN0LWN5Y2xlLWlpXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbmltcG9ydCB7IExpc3ROb2RlLCBjcmVhdGVMaW5rZWRMaXN0IH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcclxuICogQHJldHVybiB7TGlzdE5vZGV9XHJcbiAqL1xyXG5cclxudmFyIGRldGVjdEN5Y2xlID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xyXG4gIC8vIOW8l+a0m+S8iuW+t+eul+azlVxyXG4gIC8vIOWFiOW/q+aFouaMh+mSiCDliKTmlq3mmK/lkKbmnInnjq/nmoTlkIzml7bojrflj5bnrKzkuIDmrKHnm7jpgYfnmoToioLngrlcclxuICBsZXQgc2xvdyA9IGhlYWQ7XHJcbiAgbGV0IGZhc3QgPSBoZWFkO1xyXG4gIGlmIChmYXN0ID09IG51bGwgfHwgZmFzdC5uZXh0ID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gIHdoaWxlIChmYXN0ICYmIGZhc3QubmV4dCkge1xyXG4gICAgZmFzdCA9IGZhc3QubmV4dCEubmV4dCE7XHJcbiAgICAvLyDkv53or4FmYXN05oyH6ZKI5L2g6IO95YWI5Yik5patXHJcbiAgICBpZiAoZmFzdCA9PSBudWxsIHx8IGZhc3QubmV4dCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBzbG93ID0gc2xvdyEubmV4dCE7XHJcblxyXG4gICAgaWYgKHNsb3cgPT09IGZhc3QpIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgLy8g56ys5LqM5qyh6LeR5ZyIIOWwhuWFtuS4reS4gOS4qiDmjIfpkojmjIflkJFoZWFk6IqC54K5IOW5tuS4lCDpg73mr4/mrKHlj6rov5vkuIDmraVcclxuICAvLyDnm7jpgYfnmoToioLngrkg5bCx5piv55u46L6D55qE6IqC54K5XHJcbiAgZmFzdCA9IGhlYWQ7XHJcbiAgd2hpbGUgKGZhc3QgIT09IHNsb3cpIHtcclxuICAgIGZhc3QgPSBmYXN0IS5uZXh0ITtcclxuICAgIHNsb3cgPSBzbG93IS5uZXh0ITtcclxuICB9XHJcbiAgcmV0dXJuIHNsb3c7XHJcbn07XHJcblxyXG4vKlxyXG52YXIgZGV0ZWN0Q3ljbGUgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUgfCBudWxsKSB7XHJcbiAgICAvLyDmnLTlrp7nmoTmk43kvZwg6K6w5b2V5YWo6YOo55qE6IqC54K5XHJcbiAgICBpZiAoaGVhZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcclxuICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHNldC5hZGQoY3VycmVudE5vZGUpO1xyXG4gICAgICAgIGlmIChzZXQuaGFzKGN1cnJlbnROb2RlIS5uZXh0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudE5vZGUubmV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSEubmV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlIS5uZXh0O1xyXG4gICAgfVxyXG59O1xyXG4qL1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUobnVsbCksIG51bGwpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMV0sIC0xKSksIG51bGwpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMywgMiwgMCwgLTRdLCAxKSkhLnZhbCwgMik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZXRlY3RDeWNsZShjcmVhdGVMaW5rZWRMaXN0KFsxLCAyXSwgMCkpIS52YWwsIDEpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMV0sIDApKSEudmFsLCAxKTtcclxuIl19