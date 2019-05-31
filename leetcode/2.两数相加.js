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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi7kuKTmlbDnm7jliqAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIu5Lik5pWw55u45YqgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7OztJQVlJO0FBQ0o7Ozs7OztHQU1HO0FBQ0gsbURBQTJDO0FBQzNDOzs7O0dBSUc7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLEVBQW9CLEVBQUUsRUFBb0I7SUFDcEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckQsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQzVCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDekMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUkscUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDaEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNoQixJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMxQixLQUFLLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUkscUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNsQztJQUNELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNYLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBR0QsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWHuuS4pOS4qiDpnZ7nqbog55qE6ZO+6KGo55So5p2l6KGo56S65Lik5Liq6Z2e6LSf55qE5pW05pWw44CC5YW25Lit77yM5a6D5Lus5ZCE6Ieq55qE5L2N5pWw5piv5oyJ54WnIOmAhuW6jyDnmoTmlrnlvI/lrZjlgqjnmoTvvIzlubbkuJTlroPku6znmoTmr4/kuKroioLngrnlj6rog73lrZjlgqgg5LiA5L2NIOaVsOWtl+OAglxuXG7lpoLmnpzvvIzmiJHku6zlsIbov5nkuKTkuKrmlbDnm7jliqDotbfmnaXvvIzliJnkvJrov5Tlm57kuIDkuKrmlrDnmoTpk77ooajmnaXooajnpLrlroPku6znmoTlkozjgIJcblxu5oKo5Y+v5Lul5YGH6K6+6Zmk5LqG5pWw5a2XIDAg5LmL5aSW77yM6L+Z5Lik5Liq5pWw6YO95LiN5Lya5LulIDAg5byA5aS044CCXG5cbuekuuS+i++8mlxuXG7ovpPlhaXvvJooMiAtPiA0IC0+IDMpICsgKDUgLT4gNiAtPiA0KVxu6L6T5Ye677yaNyAtPiAwIC0+IDhcbuWOn+WboO+8mjM0MiArIDQ2NSA9IDgwN1xuKiAqL1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG5pbXBvcnQge0xpc3ROb2RlfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCJcbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gbDFcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGwyXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xudmFyIGFkZFR3b051bWJlcnMgPSBmdW5jdGlvbiAobDE6IExpc3ROb2RlPG51bWJlcj4sIGwyOiBMaXN0Tm9kZTxudW1iZXI+KSB7XG4gICAgdmFyIGZpcnN0Tm9kZSA9IG5ldyBMaXN0Tm9kZSgobDEudmFsICsgbDIudmFsKSAlIDEwKTtcbiAgICB2YXIgY3VycmVudE5vZGUgPSBmaXJzdE5vZGU7XG4gICAgdmFyIGFkZGVkID0gbDEudmFsICsgbDIudmFsID49IDEwID8gMSA6IDA7XG5cbiAgICB3aGlsZSAobDEubmV4dCAhPT0gbnVsbCB8fCBsMi5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIGwxID0gbDEubmV4dCA/IGwxLm5leHQgOiBuZXcgTGlzdE5vZGUoMCk7XG4gICAgICAgIGwyID0gbDIubmV4dCA/IGwyLm5leHQgOiBuZXcgTGlzdE5vZGUoMCk7XG4gICAgICAgIHZhciB2MSA9IGwxLnZhbDtcbiAgICAgICAgdmFyIHYyID0gbDIudmFsO1xuICAgICAgICB2YXIgc3VtID0gdjEgKyB2MiArIGFkZGVkO1xuICAgICAgICBhZGRlZCA9IHN1bSA+PSAxMCA/IDEgOiAwO1xuICAgICAgICBzdW0gPSBzdW0gJSAxMDtcbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZShzdW0pO1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgfVxuICAgIGlmIChhZGRlZCA+IDApIHtcbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZSgxKTtcbiAgICB9XG5cblxuICAgIHJldHVybiBmaXJzdE5vZGU7XG59O1xuXG5leHBvcnQge307XG4iXX0=