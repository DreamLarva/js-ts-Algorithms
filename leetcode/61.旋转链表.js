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
    while (currentNode != null) {
        tail = currentNode;
        currentNode = currentNode.next;
        l--;
    }
    if (l == 0 || k % (k - l) == 0) {
        return head;
    }
    let newTail;
    // l > 0 需要重新遍历 再找到 newTail 的位置
    if (l > 0) {
        let n = k - l - (k % (k - l));
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
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([1, 2]), 1).toString(), [
    2,
    1,
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEu5peL6L2s6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82MS7ml4vovazpk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTs7Ozs7QUFFSixtREFBZ0U7QUFFaEU7Ozs7R0FJRztBQUNILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBYyxFQUFFLENBQVM7SUFDbkQsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDOUQsWUFBWTtJQUNaLElBQUksV0FBVyxHQUFvQixJQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxJQUFlLENBQUM7SUFFcEIsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQzFCLElBQUksR0FBRyxXQUFXLENBQUM7UUFDbkIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUM7S0FDTDtJQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE9BQWtCLENBQUM7SUFDdkIsK0JBQStCO0lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixVQUFVO1FBQ1YsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFPLEdBQUcsV0FBWSxDQUFDO1lBQ3ZCLFdBQVcsR0FBRyxXQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDO1NBQ0w7S0FDRjtTQUFNO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFWCxVQUFVO1FBQ1YsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZCxPQUFPLEdBQUcsV0FBWSxDQUFDO1lBQ3ZCLFdBQVcsR0FBRyxXQUFZLENBQUMsSUFBSSxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDO1NBQ0w7S0FDRjtJQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDN0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDcEIsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNwQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDN0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2hCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1YsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQzNFLENBQUM7SUFDRCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumTvuihqO+8jOaXi+i9rOmTvuihqO+8jOWwhumTvuihqOavj+S4quiKgueCueWQkeWPs+enu+WKqMKga8Kg5Liq5L2N572u77yM5YW25LitwqBrwqDmmK/pnZ7otJ/mlbDjgIJcblxu56S65L6LwqAxOlxuXG7ovpPlhaU6IDEtPjItPjMtPjQtPjUtPk5VTEwsIGsgPSAyXG7ovpPlh7o6IDQtPjUtPjEtPjItPjMtPk5VTExcbuino+mHijpcbuWQkeWPs+aXi+i9rCAxIOatpTogNS0+MS0+Mi0+My0+NC0+TlVMTFxu5ZCR5Y+z5peL6L2sIDIg5q2lOiA0LT41LT4xLT4yLT4zLT5OVUxMXG7npLrkvovCoDI6XG5cbui+k+WFpTogMC0+MS0+Mi0+TlVMTCwgayA9IDRcbui+k+WHujogMi0+MC0+MS0+TlVMTFxu6Kej6YeKOlxu5ZCR5Y+z5peL6L2sIDEg5q2lOiAyLT4wLT4xLT5OVUxMXG7lkJHlj7Pml4vovawgMiDmraU6IDEtPjItPjAtPk5VTExcbuWQkeWPs+aXi+i9rCAzIOatpTrCoDAtPjEtPjItPk5VTExcbuWQkeWPs+aXi+i9rCA0IOatpTrCoDItPjAtPjEtPk5VTExcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JvdGF0ZS1saXN0XG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuaW1wb3J0IHsgTGlzdE5vZGUsIGNyZWF0ZUxpbmtlZExpc3QgfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxuICogQHBhcmFtIHtudW1iZXJ9IGtcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG52YXIgcm90YXRlUmlnaHQgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUsIGs6IG51bWJlcikge1xuICBpZiAoaGVhZCA9PSBudWxsIHx8IGhlYWQubmV4dCA9PSBudWxsIHx8IGsgPT09IDApIHJldHVybiBoZWFkO1xuICAvLyDpgY3ljobkuIDpgY3mi7/liLDlsL7oioLngrlcbiAgbGV0IGN1cnJlbnROb2RlOiBudWxsIHwgTGlzdE5vZGUgPSBoZWFkO1xuICBsZXQgbCA9IGs7XG4gIGxldCB0YWlsITogTGlzdE5vZGU7XG5cbiAgd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpIHtcbiAgICB0YWlsID0gY3VycmVudE5vZGU7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgIGwtLTtcbiAgfVxuXG4gIGlmIChsID09IDAgfHwgayAlIChrIC0gbCkgPT0gMCkge1xuICAgIHJldHVybiBoZWFkO1xuICB9XG4gIGxldCBuZXdUYWlsITogTGlzdE5vZGU7XG4gIC8vIGwgPiAwIOmcgOimgemHjeaWsOmBjeWOhiDlho3mib7liLAgbmV3VGFpbCDnmoTkvY3nva5cbiAgaWYgKGwgPiAwKSB7XG4gICAgbGV0IG4gPSBrIC0gbCAtIChrICUgKGsgLSBsKSk7XG5cbiAgICAvLyDov5jlvpflho3pgY3ljobkuIDmrKFcbiAgICBjdXJyZW50Tm9kZSA9IGhlYWQ7XG4gICAgd2hpbGUgKG4gIT09IDApIHtcbiAgICAgIG5ld1RhaWwgPSBjdXJyZW50Tm9kZSE7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlIS5uZXh0O1xuICAgICAgbi0tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgbiA9IC1sO1xuXG4gICAgLy8g6L+Y5b6X5YaN6YGN5Y6G5LiA5qyhXG4gICAgY3VycmVudE5vZGUgPSBoZWFkO1xuICAgIHdoaWxlIChuICE9PSAwKSB7XG4gICAgICBuZXdUYWlsID0gY3VycmVudE5vZGUhO1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZSEubmV4dDtcbiAgICAgIG4tLTtcbiAgICB9XG4gIH1cblxuICB0YWlsLm5leHQgPSBoZWFkO1xuICBjb25zdCBuZXdIZWFkID0gbmV3VGFpbC5uZXh0O1xuICBuZXdUYWlsLm5leHQgPSBudWxsO1xuICByZXR1cm4gbmV3SGVhZDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByb3RhdGVSaWdodChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCAzLCA0LCA1XSksIDIpIS50b1N0cmluZygpLFxuICBbNCwgNSwgMSwgMiwgM11cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByb3RhdGVSaWdodChjcmVhdGVMaW5rZWRMaXN0KFswLCAxLCAyXSksIDQpIS50b1N0cmluZygpLFxuICBbMiwgMCwgMV1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHJvdGF0ZVJpZ2h0KGNyZWF0ZUxpbmtlZExpc3QoWzEsIDJdKSwgMSkhLnRvU3RyaW5nKCksIFtcbiAgMixcbiAgMSxcbl0pO1xuIl19