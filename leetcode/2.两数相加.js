"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
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
const assert_1 = __importDefault(require("assert"));
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function (l1, l2) {
  const firstNode = new LinkedList_1.ListNode((l1.val + l2.val) % 10);
  let currentNode = firstNode;
  let added = l1.val + l2.val >= 10 ? 1 : 0;
  while (l1.next !== null || l2.next !== null) {
    l1 = l1.next ? l1.next : new LinkedList_1.ListNode(0);
    l2 = l2.next ? l2.next : new LinkedList_1.ListNode(0);
    let sum = l1.val + l2.val + added;
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
var addTwoNumbers2 = function (l1, l2) {
  const firstNode = new LinkedList_1.ListNode((l1.val + l2.val) % 10);
  let currentNode = firstNode;
  let added = 0;
  l1 = l1 ? l1.next : null;
  l2 = l2 ? l2.next : null;
  while (l1 != null || l2 != null) {
    const v1 = l1 == null ? 0 : l1.val;
    const v2 = l2 == null ? 0 : l2.val;
    let sum = v1 + v2 + added;
    added = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    currentNode.next = new LinkedList_1.ListNode(sum);
    currentNode = currentNode.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (added > 0) {
    currentNode.next = new LinkedList_1.ListNode(1);
  }
  return firstNode;
};
var addTwoNumbers3 = function (l1, l2) {
  let firstNode;
  let currentNode = null;
  let added = 0;
  do {
    const v1 = l1 == null ? 0 : l1.val;
    const v2 = l2 == null ? 0 : l2.val;
    let sum = v1 + v2 + added;
    added = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    if (currentNode == null) {
      currentNode = firstNode = new LinkedList_1.ListNode(sum);
    } else {
      currentNode.next = new LinkedList_1.ListNode(sum);
      currentNode = currentNode.next;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  } while (l1 != null || l2 != null);
  if (added > 0) {
    currentNode.next = new LinkedList_1.ListNode(1);
  }
  return firstNode;
};
assert_1.default.deepStrictEqual(
  addTwoNumbers1(
    LinkedList_1.createLinkedList([2, 4, 3]),
    LinkedList_1.createLinkedList([5, 6, 4])
  ),
  LinkedList_1.createLinkedList([7, 0, 8])
);
assert_1.default.deepStrictEqual(
  addTwoNumbers2(
    LinkedList_1.createLinkedList([2, 4, 3]),
    LinkedList_1.createLinkedList([5, 6, 4])
  ),
  LinkedList_1.createLinkedList([7, 0, 8])
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi7kuKTmlbDnm7jliqAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIu5Lik5pWw55u45YqgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQVlJO0FBQ0o7Ozs7OztHQU1HO0FBQ0gsbURBQThEO0FBQzlELG9EQUE0QjtBQUU1Qjs7OztHQUlHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxFQUFvQixFQUFFLEVBQW9CO0lBQ3JFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM1QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3pDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLHFCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUkscUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLEtBQUssR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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LEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNCLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM5QixFQUNELDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5Ye65Lik5LiqIOmdnuepuiDnmoTpk77ooajnlKjmnaXooajnpLrkuKTkuKrpnZ7otJ/nmoTmlbTmlbDjgILlhbbkuK3vvIzlroPku6zlkIToh6rnmoTkvY3mlbDmmK/mjInnhacg6YCG5bqPIOeahOaWueW8j+WtmOWCqOeahO+8jOW5tuS4lOWug+S7rOeahOavj+S4quiKgueCueWPquiDveWtmOWCqCDkuIDkvY0g5pWw5a2X44CCXHJcblxyXG7lpoLmnpzvvIzmiJHku6zlsIbov5nkuKTkuKrmlbDnm7jliqDotbfmnaXvvIzliJnkvJrov5Tlm57kuIDkuKrmlrDnmoTpk77ooajmnaXooajnpLrlroPku6znmoTlkozjgIJcclxuXHJcbuaCqOWPr+S7peWBh+iuvumZpOS6huaVsOWtlyAwIOS5i+Wklu+8jOi/meS4pOS4quaVsOmDveS4jeS8muS7pSAwIOW8gOWktOOAglxyXG5cclxu56S65L6L77yaXHJcblxyXG7ovpPlhaXvvJooMiAtPiA0IC0+IDMpICsgKDUgLT4gNiAtPiA0KVxyXG7ovpPlh7rvvJo3IC0+IDAgLT4gOFxyXG7ljp/lm6DvvJozNDIgKyA0NjUgPSA4MDdcclxuKiAqL1xyXG4vKipcclxuICogRGVmaW5pdGlvbiBmb3Igc2luZ2x5LWxpbmtlZCBsaXN0LlxyXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcclxuICogICAgIHRoaXMudmFsID0gdmFsO1xyXG4gKiAgICAgdGhpcy5uZXh0ID0gbnVsbDtcclxuICogfVxyXG4gKi9cclxuaW1wb3J0IHtjcmVhdGVMaW5rZWRMaXN0LCBMaXN0Tm9kZX0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMVxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBsMlxyXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cclxuICovXHJcbnZhciBhZGRUd29OdW1iZXJzMSA9IGZ1bmN0aW9uIChsMTogTGlzdE5vZGU8bnVtYmVyPiwgbDI6IExpc3ROb2RlPG51bWJlcj4pIHtcclxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IG5ldyBMaXN0Tm9kZSgobDEudmFsICsgbDIudmFsKSAlIDEwKTtcclxuICAgIGxldCBjdXJyZW50Tm9kZSA9IGZpcnN0Tm9kZTtcclxuICAgIGxldCBhZGRlZCA9IGwxLnZhbCArIGwyLnZhbCA+PSAxMCA/IDEgOiAwO1xyXG5cclxuICAgIHdoaWxlIChsMS5uZXh0ICE9PSBudWxsIHx8IGwyLm5leHQgIT09IG51bGwpIHtcclxuICAgICAgICBsMSA9IGwxLm5leHQgPyBsMS5uZXh0IDogbmV3IExpc3ROb2RlKDApO1xyXG4gICAgICAgIGwyID0gbDIubmV4dCA/IGwyLm5leHQgOiBuZXcgTGlzdE5vZGUoMCk7XHJcbiAgICAgICAgbGV0IHN1bSA9IGwxLnZhbCArIGwyLnZhbCArIGFkZGVkO1xyXG4gICAgICAgIGFkZGVkID0gc3VtID49IDEwID8gMSA6IDA7XHJcbiAgICAgICAgc3VtID0gc3VtICUgMTA7XHJcbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZShzdW0pO1xyXG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcclxuICAgIH1cclxuICAgIGlmIChhZGRlZCA+IDApIHtcclxuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gbmV3IExpc3ROb2RlKDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZmlyc3ROb2RlO1xyXG59O1xyXG5cclxuXHJcbnZhciBhZGRUd29OdW1iZXJzMiA9IGZ1bmN0aW9uIChsMTogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGwsIGwyOiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCkge1xyXG4gICAgY29uc3QgZmlyc3ROb2RlID0gbmV3IExpc3ROb2RlKChsMSEudmFsICsgbDIhLnZhbCkgJSAxMCk7XHJcbiAgICBsZXQgY3VycmVudE5vZGUgPSBmaXJzdE5vZGU7XHJcbiAgICBsZXQgYWRkZWQgPSAwO1xyXG4gICAgbDEgPSBsMSA/IGwxLm5leHQgOiBudWxsO1xyXG4gICAgbDIgPSBsMiA/IGwyLm5leHQgOiBudWxsO1xyXG5cclxuICAgIHdoaWxlIChsMSAhPSBudWxsIHx8IGwyICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdjEgPSBsMSA9PSBudWxsID8gMCA6IGwxLnZhbDtcclxuICAgICAgICBjb25zdCB2MiA9IGwyID09IG51bGwgPyAwIDogbDIudmFsO1xyXG5cclxuICAgICAgICBsZXQgc3VtID0gdjEgKyB2MiArIGFkZGVkO1xyXG4gICAgICAgIGFkZGVkID0gc3VtID49IDEwID8gMSA6IDA7XHJcbiAgICAgICAgc3VtID0gc3VtICUgMTA7XHJcbiAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZShzdW0pO1xyXG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcclxuICAgICAgICBsMSA9IGwxID8gbDEubmV4dCA6IG51bGw7XHJcbiAgICAgICAgbDIgPSBsMiA/IGwyLm5leHQgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGFkZGVkID4gMCkge1xyXG4gICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXcgTGlzdE5vZGUoMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBmaXJzdE5vZGU7XHJcbn07XHJcblxyXG52YXIgYWRkVHdvTnVtYmVyczMgPSBmdW5jdGlvbiAobDE6IExpc3ROb2RlPG51bWJlcj4gfCBudWxsLCBsMjogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGwpIHtcclxuICAgIGxldCBmaXJzdE5vZGUhOiBMaXN0Tm9kZTxudW1iZXI+O1xyXG4gICAgbGV0IGN1cnJlbnROb2RlOiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCA9IG51bGw7XHJcbiAgICBsZXQgYWRkZWQgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIGNvbnN0IHYxID0gbDEgPT0gbnVsbCA/IDAgOiBsMS52YWw7XHJcbiAgICAgICAgY29uc3QgdjIgPSBsMiA9PSBudWxsID8gMCA6IGwyLnZhbDtcclxuXHJcbiAgICAgICAgbGV0IHN1bSA9IHYxICsgdjIgKyBhZGRlZDtcclxuICAgICAgICBhZGRlZCA9IHN1bSA+PSAxMCA/IDEgOiAwO1xyXG4gICAgICAgIHN1bSA9IHN1bSAlIDEwO1xyXG5cclxuICAgICAgICBpZihjdXJyZW50Tm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSAgZmlyc3ROb2RlID0gbmV3IExpc3ROb2RlKHN1bSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZShzdW0pO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGwxID0gbDEgPyBsMS5uZXh0IDogbnVsbDtcclxuICAgICAgICBsMiA9IGwyID8gbDIubmV4dCA6IG51bGw7XHJcblxyXG4gICAgfSB3aGlsZSAobDEgIT0gbnVsbCB8fCBsMiAhPSBudWxsKTtcclxuICAgIGlmIChhZGRlZCA+IDApIHtcclxuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gbmV3IExpc3ROb2RlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaXJzdE5vZGU7XHJcbn07XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgYWRkVHdvTnVtYmVyczEoXHJcbiAgICAgICAgY3JlYXRlTGlua2VkTGlzdChbMiwgNCwgM10pLFxyXG4gICAgICAgIGNyZWF0ZUxpbmtlZExpc3QoWzUsIDYsIDRdKSxcclxuICAgICksXHJcbiAgICBjcmVhdGVMaW5rZWRMaXN0KFs3LCAwLCA4XSksXHJcbik7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgYWRkVHdvTnVtYmVyczIoXHJcbiAgICAgICAgY3JlYXRlTGlua2VkTGlzdChbMiwgNCwgM10pLFxyXG4gICAgICAgIGNyZWF0ZUxpbmtlZExpc3QoWzUsIDYsIDRdKSxcclxuICAgICksXHJcbiAgICBjcmVhdGVMaW5rZWRMaXN0KFs3LCAwLCA4XSksXHJcbik7XHJcblxyXG4iXX0=
