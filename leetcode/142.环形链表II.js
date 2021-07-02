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
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([1], -1)), null);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([3, 2, 0, -4], 1)).val, 2);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([1, 2], 0)).val, 1);
assert_1.default.strictEqual(detectCycle(LinkedList_1.createLinkedList([1], 0)).val, 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQyLueOr+W9oumTvuihqElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNDIu546v5b2i6ZO+6KGoSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkNJO0FBQ0osbURBQWdFO0FBRWhFOzs7R0FHRztBQUVILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBcUI7SUFDL0MsU0FBUztJQUNULDRCQUE0QjtJQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuRCxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQztRQUN4QixnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5ELElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBRW5CLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxNQUFNO0tBQzFCO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ1osT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3BCLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO1FBQ25CLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq6ZO+6KGo77yM6L+U5Zue6ZO+6KGo5byA5aeL5YWl546v55qE56ys5LiA5Liq6IqC54K544CCIOWmguaenOmTvuihqOaXoOeOr++8jOWImei/lOWbniBudWxs44CCXG5cbuS4uuS6huihqOekuue7meWumumTvuihqOS4reeahOeOr++8jOaIkeS7rOS9v+eUqOaVtOaVsCBwb3Mg5p2l6KGo56S66ZO+6KGo5bC+6L+e5o6l5Yiw6ZO+6KGo5Lit55qE5L2N572u77yI57Si5byV5LuOIDAg5byA5aeL77yJ44CCIOWmguaenCBwb3Mg5pivIC0x77yM5YiZ5Zyo6K+l6ZO+6KGo5Lit5rKh5pyJ546v44CCXG5cbuivtOaYju+8muS4jeWFgeiuuOS/ruaUuee7meWumueahOmTvuihqOOAglxuXG5cblxu56S65L6LIDHvvJpcbiAzIC0+IDIgLT4gMCAtPiAtNFxuICAgICDilIIgICAgICAgICAg4pSDXG4gICAgIOKVsCDilIDilIAg4pSAIOKVr1xuXG7ovpPlhaXvvJpoZWFkID0gWzMsMiwwLC00XSwgcG9zID0gMVxu6L6T5Ye677yadGFpbCBjb25uZWN0cyB0byBub2RlIGluZGV4IDFcbuino+mHiu+8mumTvuihqOS4reacieS4gOS4queOr++8jOWFtuWwvumDqOi/nuaOpeWIsOesrOS6jOS4quiKgueCueOAglxuXG5cbuekuuS+iyAy77yaXG4xIC0+IDJcbuKUgiAgIOKUg1xu4pWwICDila9cbui+k+WFpe+8mmhlYWQgPSBbMSwyXSwgcG9zID0gMFxu6L6T5Ye677yadGFpbCBjb25uZWN0cyB0byBub2RlIGluZGV4IDBcbuino+mHiu+8mumTvuihqOS4reacieS4gOS4queOr++8jOWFtuWwvumDqOi/nuaOpeWIsOesrOS4gOS4quiKgueCueOAglxuXG5cbuekuuS+iyAz77yaXG4xXG7ovpPlhaXvvJpoZWFkID0gWzFdLCBwb3MgPSAtMVxu6L6T5Ye677yabm8gY3ljbGVcbuino+mHiu+8mumTvuihqOS4reayoeacieeOr+OAglxuXG5cblxuXG7ov5vpmLbvvJpcbuS9oOaYr+WQpuWPr+S7peS4jeeUqOmineWkluepuumXtOino+WGs+atpOmimO+8n1xuXG5cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xpbmtlZC1saXN0LWN5Y2xlLWlpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCB7IExpc3ROb2RlLCBjcmVhdGVMaW5rZWRMaXN0IH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG5cbnZhciBkZXRlY3RDeWNsZSA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZSB8IG51bGwpIHtcbiAgLy8g5byX5rSb5LyK5b63566X5rOVXG4gIC8vIOWFiOW/q+aFouaMh+mSiCDliKTmlq3mmK/lkKbmnInnjq/nmoTlkIzml7bojrflj5bnrKzkuIDmrKHnm7jpgYfnmoToioLngrlcbiAgbGV0IHNsb3cgPSBoZWFkO1xuICBsZXQgZmFzdCA9IGhlYWQ7XG4gIGlmIChmYXN0ID09IG51bGwgfHwgZmFzdC5uZXh0ID09IG51bGwpIHJldHVybiBudWxsO1xuICB3aGlsZSAoZmFzdCAmJiBmYXN0Lm5leHQpIHtcbiAgICBmYXN0ID0gZmFzdC5uZXh0IS5uZXh0ITtcbiAgICAvLyDkv53or4FmYXN05oyH6ZKI5L2g6IO95YWI5Yik5patXG4gICAgaWYgKGZhc3QgPT0gbnVsbCB8fCBmYXN0Lm5leHQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICBzbG93ID0gc2xvdyEubmV4dCE7XG5cbiAgICBpZiAoc2xvdyA9PT0gZmFzdCkgYnJlYWs7XG4gIH1cblxuICAvLyDnrKzkuozmrKHot5HlnIgg5bCG5YW25Lit5LiA5LiqIOaMh+mSiOaMh+WQkWhlYWToioLngrkg5bm25LiUIOmDveavj+asoeWPqui/m+S4gOatpVxuICAvLyDnm7jpgYfnmoToioLngrkg5bCx5piv55u46L6D55qE6IqC54K5XG4gIGZhc3QgPSBoZWFkO1xuICB3aGlsZSAoZmFzdCAhPT0gc2xvdykge1xuICAgIGZhc3QgPSBmYXN0IS5uZXh0ITtcbiAgICBzbG93ID0gc2xvdyEubmV4dCE7XG4gIH1cbiAgcmV0dXJuIHNsb3c7XG59O1xuXG4vKlxudmFyIGRldGVjdEN5Y2xlID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xuICAgIC8vIOactOWunueahOaTjeS9nCDorrDlvZXlhajpg6jnmoToioLngrlcbiAgICBpZiAoaGVhZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZDtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBzZXQuYWRkKGN1cnJlbnROb2RlKTtcbiAgICAgICAgaWYgKHNldC5oYXMoY3VycmVudE5vZGUhLm5leHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSEubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlIS5uZXh0O1xuICAgIH1cbn07XG4qL1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGRldGVjdEN5Y2xlKG51bGwpLCBudWxsKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkZXRlY3RDeWNsZShjcmVhdGVMaW5rZWRMaXN0KFsxXSwgLTEpKSwgbnVsbCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMywgMiwgMCwgLTRdLCAxKSkhLnZhbCwgMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGV0ZWN0Q3ljbGUoY3JlYXRlTGlua2VkTGlzdChbMSwgMl0sIDApKSEudmFsLCAxKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkZXRlY3RDeWNsZShjcmVhdGVMaW5rZWRMaXN0KFsxXSwgMCkpIS52YWwsIDEpO1xuIl19