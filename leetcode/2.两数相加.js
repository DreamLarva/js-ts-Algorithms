"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
* */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var firstNode = new LinkedList_1.ListNode((l1.val + l2.val) % 10);
    var currentNode = firstNode;
    var added = l1.val + l2.val >= 10 ? 1 : 0;
    while (l1.next !== null || l2.next !== null) {
        l1 = l1.next ? l1.next : new LinkedList_1.ListNode(0);
        l2 = l2.next ? l2.next : new LinkedList_1.ListNode(0);
        var v1 = l1.val;
        var v2 = l2.val;
        var sum = v1 + v2 + added;
        added = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        currentNode.next = new LinkedList_1.ListNode(sum);
        currentNode = currentNode.next;
    }
    if (added > 0) {
        currentNode.next = new LinkedList_1.ListNode(1);
    }
    return firstNode;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi7kuKTmlbDnm7jliqAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIu5Lik5pWw55u45YqgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7OztJQVlJO0FBQ0o7Ozs7OztHQU1HO0FBQ0gsbURBQTJDO0FBQzNDOzs7O0dBSUc7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLEVBQW9CLEVBQUUsRUFBb0I7SUFDcEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckQsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQzVCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDekMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUkscUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDaEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNoQixJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMxQixLQUFLLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUkscUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNsQztJQUNELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNYLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBR0QsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5Ye65Lik5LiqIOmdnuepuiDnmoTpk77ooajnlKjmnaXooajnpLrkuKTkuKrpnZ7otJ/nmoTmlbTmlbDjgILlhbbkuK3vvIzlroPku6zlkIToh6rnmoTkvY3mlbDmmK/mjInnhacg6YCG5bqPIOeahOaWueW8j+WtmOWCqOeahO+8jOW5tuS4lOWug+S7rOeahOavj+S4quiKgueCueWPquiDveWtmOWCqCDkuIDkvY0g5pWw5a2X44CCXHJcblxyXG7lpoLmnpzvvIzmiJHku6zlsIbov5nkuKTkuKrmlbDnm7jliqDotbfmnaXvvIzliJnkvJrov5Tlm57kuIDkuKrmlrDnmoTpk77ooajmnaXooajnpLrlroPku6znmoTlkozjgIJcclxuXHJcbuaCqOWPr+S7peWBh+iuvumZpOS6huaVsOWtlyAwIOS5i+Wklu+8jOi/meS4pOS4quaVsOmDveS4jeS8muS7pSAwIOW8gOWktOOAglxyXG5cclxu56S65L6L77yaXHJcblxyXG7ovpPlhaXvvJooMiAtPiA0IC0+IDMpICsgKDUgLT4gNiAtPiA0KVxyXG7ovpPlh7rvvJo3IC0+IDAgLT4gOFxyXG7ljp/lm6DvvJozNDIgKyA0NjUgPSA4MDdcclxuKiAqL1xyXG4vKipcclxuICogRGVmaW5pdGlvbiBmb3Igc2luZ2x5LWxpbmtlZCBsaXN0LlxyXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcclxuICogICAgIHRoaXMudmFsID0gdmFsO1xyXG4gKiAgICAgdGhpcy5uZXh0ID0gbnVsbDtcclxuICogfVxyXG4gKi9cclxuaW1wb3J0IHtMaXN0Tm9kZX0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMVxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMlxyXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cclxuICovXHJcbnZhciBhZGRUd29OdW1iZXJzID0gZnVuY3Rpb24gKGwxOiBMaXN0Tm9kZTxudW1iZXI+LCBsMjogTGlzdE5vZGU8bnVtYmVyPikge1xyXG4gICAgdmFyIGZpcnN0Tm9kZSA9IG5ldyBMaXN0Tm9kZSgobDEudmFsICsgbDIudmFsKSAlIDEwKTtcclxuICAgIHZhciBjdXJyZW50Tm9kZSA9IGZpcnN0Tm9kZTtcclxuICAgIHZhciBhZGRlZCA9IGwxLnZhbCArIGwyLnZhbCA+PSAxMCA/IDEgOiAwO1xyXG5cclxuICAgIHdoaWxlIChsMS5uZXh0ICE9PSBudWxsIHx8IGwyLm5leHQgIT09IG51bGwpIHtcclxuICAgICAgICBsMSA9IGwxLm5leHQgPyBsMS5uZXh0IDogbmV3IExpc3ROb2RlKDApO1xyXG4gICAgICAgIGwyID0gbDIubmV4dCA/IGwyLm5leHQgOiBuZXcgTGlzdE5vZGUoMCk7XHJcbiAgICAgICAgdmFyIHYxID0gbDEudmFsO1xyXG4gICAgICAgIHZhciB2MiA9IGwyLnZhbDtcclxuICAgICAgICB2YXIgc3VtID0gdjEgKyB2MiArIGFkZGVkO1xyXG4gICAgICAgIGFkZGVkID0gc3VtID49IDEwID8gMSA6IDA7XHJcbiAgICAgICAgc3VtID0gc3VtICUgMTA7XHJcbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZShzdW0pO1xyXG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcclxuICAgIH1cclxuICAgIGlmIChhZGRlZCA+IDApIHtcclxuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gbmV3IExpc3ROb2RlKDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZmlyc3ROb2RlO1xyXG59O1xyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=