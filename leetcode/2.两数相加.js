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
    (0, LinkedList_1.createLinkedList)([2, 4, 3]),
    (0, LinkedList_1.createLinkedList)([5, 6, 4])
  ),
  (0, LinkedList_1.createLinkedList)([7, 0, 8])
);
assert_1.default.deepStrictEqual(
  addTwoNumbers2(
    (0, LinkedList_1.createLinkedList)([2, 4, 3]),
    (0, LinkedList_1.createLinkedList)([5, 6, 4])
  ),
  (0, LinkedList_1.createLinkedList)([7, 0, 8])
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi7kuKTmlbDnm7jliqAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzIu5Lik5pWw55u45YqgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQVlJO0FBQ0o7Ozs7OztHQU1HO0FBQ0gsbURBQWdFO0FBQ2hFLG9EQUE0QjtBQUU1Qjs7OztHQUlHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxFQUFvQixFQUFFLEVBQW9CO0lBQ3ZFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM1QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQzNDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLHFCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUkscUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLEtBQUssR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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QSw2QkFBZ0IsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFBLDZCQUFnQixFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hFLElBQUEsNkJBQWdCLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5Ye65Lik5LiqIOmdnuepuiDnmoTpk77ooajnlKjmnaXooajnpLrkuKTkuKrpnZ7otJ/nmoTmlbTmlbDjgILlhbbkuK3vvIzlroPku6zlkIToh6rnmoTkvY3mlbDmmK/mjInnhacg6YCG5bqPIOeahOaWueW8j+WtmOWCqOeahO+8jOW5tuS4lOWug+S7rOeahOavj+S4quiKgueCueWPquiDveWtmOWCqCDkuIDkvY0g5pWw5a2X44CCXG5cbuWmguaenO+8jOaIkeS7rOWwhui/meS4pOS4quaVsOebuOWKoOi1t+adpe+8jOWImeS8mui/lOWbnuS4gOS4quaWsOeahOmTvuihqOadpeihqOekuuWug+S7rOeahOWSjOOAglxuXG7mgqjlj6/ku6XlgYforr7pmaTkuobmlbDlrZcgMCDkuYvlpJbvvIzov5nkuKTkuKrmlbDpg73kuI3kvJrku6UgMCDlvIDlpLTjgIJcblxu56S65L6L77yaXG5cbui+k+WFpe+8migyIC0+IDQgLT4gMykgKyAoNSAtPiA2IC0+IDQpXG7ovpPlh7rvvJo3IC0+IDAgLT4gOFxu5Y6f5Zug77yaMzQyICsgNDY1ID0gODA3XG4qICovXG4vKipcbiAqIERlZmluaXRpb24gZm9yIHNpbmdseS1saW5rZWQgbGlzdC5cbiAqIGZ1bmN0aW9uIExpc3ROb2RlKHZhbCkge1xuICogICAgIHRoaXMudmFsID0gdmFsO1xuICogICAgIHRoaXMubmV4dCA9IG51bGw7XG4gKiB9XG4gKi9cbmltcG9ydCB7IGNyZWF0ZUxpbmtlZExpc3QsIExpc3ROb2RlIH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gbDFcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGwyXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xudmFyIGFkZFR3b051bWJlcnMxID0gZnVuY3Rpb24gKGwxOiBMaXN0Tm9kZTxudW1iZXI+LCBsMjogTGlzdE5vZGU8bnVtYmVyPikge1xuICBjb25zdCBmaXJzdE5vZGUgPSBuZXcgTGlzdE5vZGUoKGwxLnZhbCArIGwyLnZhbCkgJSAxMCk7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGZpcnN0Tm9kZTtcbiAgbGV0IGFkZGVkID0gbDEudmFsICsgbDIudmFsID49IDEwID8gMSA6IDA7XG5cbiAgd2hpbGUgKGwxLm5leHQgIT09IG51bGwgfHwgbDIubmV4dCAhPT0gbnVsbCkge1xuICAgIGwxID0gbDEubmV4dCA/IGwxLm5leHQgOiBuZXcgTGlzdE5vZGUoMCk7XG4gICAgbDIgPSBsMi5uZXh0ID8gbDIubmV4dCA6IG5ldyBMaXN0Tm9kZSgwKTtcbiAgICBsZXQgc3VtID0gbDEudmFsICsgbDIudmFsICsgYWRkZWQ7XG4gICAgYWRkZWQgPSBzdW0gPj0gMTAgPyAxIDogMDtcbiAgICBzdW0gPSBzdW0gJSAxMDtcbiAgICBjdXJyZW50Tm9kZS5uZXh0ID0gbmV3IExpc3ROb2RlKHN1bSk7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICB9XG4gIGlmIChhZGRlZCA+IDApIHtcbiAgICBjdXJyZW50Tm9kZS5uZXh0ID0gbmV3IExpc3ROb2RlKDEpO1xuICB9XG5cbiAgcmV0dXJuIGZpcnN0Tm9kZTtcbn07XG5cbnZhciBhZGRUd29OdW1iZXJzMiA9IGZ1bmN0aW9uIChcbiAgbDE6IExpc3ROb2RlPG51bWJlcj4gfCBudWxsLFxuICBsMjogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGxcbikge1xuICBjb25zdCBmaXJzdE5vZGUgPSBuZXcgTGlzdE5vZGUoKGwxIS52YWwgKyBsMiEudmFsKSAlIDEwKTtcbiAgbGV0IGN1cnJlbnROb2RlID0gZmlyc3ROb2RlO1xuICBsZXQgYWRkZWQgPSAwO1xuICBsMSA9IGwxID8gbDEubmV4dCA6IG51bGw7XG4gIGwyID0gbDIgPyBsMi5uZXh0IDogbnVsbDtcblxuICB3aGlsZSAobDEgIT0gbnVsbCB8fCBsMiAhPSBudWxsKSB7XG4gICAgY29uc3QgdjEgPSBsMSA9PSBudWxsID8gMCA6IGwxLnZhbDtcbiAgICBjb25zdCB2MiA9IGwyID09IG51bGwgPyAwIDogbDIudmFsO1xuXG4gICAgbGV0IHN1bSA9IHYxICsgdjIgKyBhZGRlZDtcbiAgICBhZGRlZCA9IHN1bSA+PSAxMCA/IDEgOiAwO1xuICAgIHN1bSA9IHN1bSAlIDEwO1xuICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXcgTGlzdE5vZGUoc3VtKTtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgbDEgPSBsMSA/IGwxLm5leHQgOiBudWxsO1xuICAgIGwyID0gbDIgPyBsMi5uZXh0IDogbnVsbDtcbiAgfVxuICBpZiAoYWRkZWQgPiAwKSB7XG4gICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZSgxKTtcbiAgfVxuXG4gIHJldHVybiBmaXJzdE5vZGU7XG59O1xuXG52YXIgYWRkVHdvTnVtYmVyczMgPSBmdW5jdGlvbiAoXG4gIGwxOiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCxcbiAgbDI6IExpc3ROb2RlPG51bWJlcj4gfCBudWxsXG4pIHtcbiAgbGV0IGZpcnN0Tm9kZSE6IExpc3ROb2RlPG51bWJlcj47XG4gIGxldCBjdXJyZW50Tm9kZTogTGlzdE5vZGU8bnVtYmVyPiB8IG51bGwgPSBudWxsO1xuICBsZXQgYWRkZWQgPSAwO1xuICBkbyB7XG4gICAgY29uc3QgdjEgPSBsMSA9PSBudWxsID8gMCA6IGwxLnZhbDtcbiAgICBjb25zdCB2MiA9IGwyID09IG51bGwgPyAwIDogbDIudmFsO1xuXG4gICAgbGV0IHN1bSA9IHYxICsgdjIgKyBhZGRlZDtcbiAgICBhZGRlZCA9IHN1bSA+PSAxMCA/IDEgOiAwO1xuICAgIHN1bSA9IHN1bSAlIDEwO1xuXG4gICAgaWYgKGN1cnJlbnROb2RlID09IG51bGwpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gZmlyc3ROb2RlID0gbmV3IExpc3ROb2RlKHN1bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXcgTGlzdE5vZGUoc3VtKTtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICB9XG5cbiAgICBsMSA9IGwxID8gbDEubmV4dCA6IG51bGw7XG4gICAgbDIgPSBsMiA/IGwyLm5leHQgOiBudWxsO1xuICB9IHdoaWxlIChsMSAhPSBudWxsIHx8IGwyICE9IG51bGwpO1xuICBpZiAoYWRkZWQgPiAwKSB7XG4gICAgY3VycmVudE5vZGUubmV4dCA9IG5ldyBMaXN0Tm9kZSgxKTtcbiAgfVxuXG4gIHJldHVybiBmaXJzdE5vZGU7XG59O1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBhZGRUd29OdW1iZXJzMShjcmVhdGVMaW5rZWRMaXN0KFsyLCA0LCAzXSksIGNyZWF0ZUxpbmtlZExpc3QoWzUsIDYsIDRdKSksXG4gIGNyZWF0ZUxpbmtlZExpc3QoWzcsIDAsIDhdKVxuKTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgYWRkVHdvTnVtYmVyczIoY3JlYXRlTGlua2VkTGlzdChbMiwgNCwgM10pLCBjcmVhdGVMaW5rZWRMaXN0KFs1LCA2LCA0XSkpLFxuICBjcmVhdGVMaW5rZWRMaXN0KFs3LCAwLCA4XSlcbik7XG4iXX0=
