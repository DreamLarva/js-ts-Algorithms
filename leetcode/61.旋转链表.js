"use strict";
/*
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || head.next == null || k === 0)
        return head;
    // 遍历一遍拿到尾节点
    let currentNode = head;
    let l = k;
    let tail;
    let newTail;
    while (currentNode != null) {
        if (l === 0) {
            newTail = currentNode;
        }
        tail = currentNode;
        currentNode = currentNode.next;
        l--;
    }
    if (l == 0 || k % (k - l) == 0) {
        return head;
    }
    // l > 0 需要重新遍历 再找到 newTail 的位置
    if (l > 0) {
        let n = (k - l) - (k % (k - l));
        // 还得再遍历一次
        currentNode = head;
        while (n !== 0) {
            newTail = currentNode;
            currentNode = currentNode.next;
            n--;
        }
    }
    else {
        let n = -l;
        // 还得再遍历一次
        currentNode = head;
        while (n !== 0) {
            newTail = currentNode;
            currentNode = currentNode.next;
            n--;
        }
    }
    tail.next = head;
    const newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([1, 2, 3, 4, 5]), 2).toString(), [4, 5, 1, 2, 3]);
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([0, 1, 2]), 4).toString(), [2, 0, 1]);
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([1, 2]), 1).toString(), [2, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEu5peL6L2s6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82MS7ml4vovazpk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTs7Ozs7QUFFSixtREFBOEQ7QUFFOUQ7Ozs7R0FJRztBQUNILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBYyxFQUFFLENBQVM7SUFDakQsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDOUQsWUFBWTtJQUNaLElBQUksV0FBVyxHQUFvQixJQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxJQUFjLENBQUM7SUFDbkIsSUFBSSxPQUFpQixDQUFDO0lBQ3RCLE9BQU8sV0FBVyxJQUFJLElBQUksRUFBRTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVCxPQUFPLEdBQUcsV0FBVyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUNuQixXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMvQixDQUFDLEVBQUUsQ0FBQztLQUNQO0lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELCtCQUErQjtJQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLFVBQVU7UUFDVixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNaLE9BQU8sR0FBRyxXQUFZLENBQUM7WUFDdkIsV0FBVyxHQUFHLFdBQVksQ0FBQyxJQUFJLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDUDtLQUNKO1NBQUk7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVYLFVBQVU7UUFDVixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNaLE9BQU8sR0FBRyxXQUFZLENBQUM7WUFDdkIsV0FBVyxHQUFHLFdBQVksQ0FBQyxJQUFJLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDUDtLQUNKO0lBRUQsSUFBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsTUFBTSxPQUFPLEdBQUcsT0FBUSxDQUFDLElBQUksQ0FBQztJQUM5QixPQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixPQUFPLE9BQU8sQ0FBQztBQUVuQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUM3RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEIsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDWixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUNwRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumTvuihqO+8jOaXi+i9rOmTvuihqO+8jOWwhumTvuihqOavj+S4quiKgueCueWQkeWPs+enu+WKqMKga8Kg5Liq5L2N572u77yM5YW25LitwqBrwqDmmK/pnZ7otJ/mlbDjgIJcblxu56S65L6LwqAxOlxuXG7ovpPlhaU6IDEtPjItPjMtPjQtPjUtPk5VTEwsIGsgPSAyXG7ovpPlh7o6IDQtPjUtPjEtPjItPjMtPk5VTExcbuino+mHijpcbuWQkeWPs+aXi+i9rCAxIOatpTogNS0+MS0+Mi0+My0+NC0+TlVMTFxu5ZCR5Y+z5peL6L2sIDIg5q2lOiA0LT41LT4xLT4yLT4zLT5OVUxMXG7npLrkvovCoDI6XG5cbui+k+WFpTogMC0+MS0+Mi0+TlVMTCwgayA9IDRcbui+k+WHujogMi0+MC0+MS0+TlVMTFxu6Kej6YeKOlxu5ZCR5Y+z5peL6L2sIDEg5q2lOiAyLT4wLT4xLT5OVUxMXG7lkJHlj7Pml4vovawgMiDmraU6IDEtPjItPjAtPk5VTExcbuWQkeWPs+aXi+i9rCAzIOatpTrCoDAtPjEtPjItPk5VTExcbuWQkeWPs+aXi+i9rCA0IOatpTrCoDItPjAtPjEtPk5VTExcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JvdGF0ZS1saXN0XG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuaW1wb3J0IHtMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xudmFyIHJvdGF0ZVJpZ2h0ID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlLCBrOiBudW1iZXIpIHtcbiAgICBpZiAoaGVhZCA9PSBudWxsIHx8IGhlYWQubmV4dCA9PSBudWxsIHx8IGsgPT09IDApIHJldHVybiBoZWFkO1xuICAgIC8vIOmBjeWOhuS4gOmBjeaLv+WIsOWwvuiKgueCuVxuICAgIGxldCBjdXJyZW50Tm9kZTogbnVsbCB8IExpc3ROb2RlID0gaGVhZDtcbiAgICBsZXQgbCA9IGs7XG4gICAgbGV0IHRhaWw6IExpc3ROb2RlO1xuICAgIGxldCBuZXdUYWlsOiBMaXN0Tm9kZTtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobCA9PT0gMCkge1xuICAgICAgICAgICAgbmV3VGFpbCA9IGN1cnJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRhaWwgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICBsLS07XG4gICAgfVxuXG4gICAgaWYgKGwgPT0gMCB8fCBrICUgKGsgLSBsKSA9PSAwKSB7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgIH1cblxuICAgIC8vIGwgPiAwIOmcgOimgemHjeaWsOmBjeWOhiDlho3mib7liLAgbmV3VGFpbCDnmoTkvY3nva5cbiAgICBpZiAobCA+IDApIHtcbiAgICAgICAgbGV0IG4gPSAoayAtIGwpIC0gKGsgJSAoayAtIGwpKTtcblxuICAgICAgICAvLyDov5jlvpflho3pgY3ljobkuIDmrKFcbiAgICAgICAgY3VycmVudE5vZGUgPSBoZWFkO1xuICAgICAgICB3aGlsZSAobiAhPT0gMCkge1xuICAgICAgICAgICAgbmV3VGFpbCA9IGN1cnJlbnROb2RlITtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUhLm5leHQ7XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgbGV0IG4gPSAtbDtcblxuICAgICAgICAvLyDov5jlvpflho3pgY3ljobkuIDmrKFcbiAgICAgICAgY3VycmVudE5vZGUgPSBoZWFkO1xuICAgICAgICB3aGlsZSAobiAhPT0gMCkge1xuICAgICAgICAgICAgbmV3VGFpbCA9IGN1cnJlbnROb2RlITtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUhLm5leHQ7XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWlsIS5uZXh0ID0gaGVhZDtcbiAgICBjb25zdCBuZXdIZWFkID0gbmV3VGFpbCEubmV4dDtcbiAgICBuZXdUYWlsIS5uZXh0ID0gbnVsbDtcbiAgICByZXR1cm4gbmV3SGVhZDtcblxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcm90YXRlUmlnaHQoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNCwgNV0pLCAyKSEudG9TdHJpbmcoKSxcbiAgICBbNCwgNSwgMSwgMiwgM10sXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICByb3RhdGVSaWdodChjcmVhdGVMaW5rZWRMaXN0KFswLCAxLCAyXSksIDQpIS50b1N0cmluZygpLFxuICAgIFsyLCAwLCAxXSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHJvdGF0ZVJpZ2h0KGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdKSwgMSkhLnRvU3RyaW5nKCksXG4gICAgWzIsIDFdLFxuKTtcbiJdfQ==