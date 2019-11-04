"use strict";
/*
[83] 删除排序链表中的重复元素

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/

Tags: algorithms linked-list

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (44.31%)
* Total Accepted: 19.5K
* Total Submissions: 43.9K
* Testcase Example: '[1,1,2]'

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2


示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var deleteDuplicates = function (head) {
    if (head === null)
        return null;
    // 新链表的尾节点
    let tail = head;
    // 正在准备插入的原节点
    let currentNode = head.next;
    while (currentNode !== null) {
        if (currentNode.val !== tail.val) {
            tail.next = currentNode;
            tail = tail.next;
        }
        currentNode = currentNode.next;
    }
    // 保证最后一个 后没有多余的节点
    tail.next = null;
    return head;
};
const { createLinkedList } = require("./util/linked_list");
const linkedList = createLinkedList([1, 1, 2, 3, 3]);
const uniqueLinkedList = deleteDuplicates(linkedList);
console.log(uniqueLinkedList.toString());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMu5Yig6Zmk5o6S5bqP6ZO+6KGo5Lit55qE6YeN5aSN5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84My7liKDpmaTmjpLluo/pk77ooajkuK3nmoTph43lpI3lhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFOztBQUVGOzs7Ozs7R0FNRztBQUNIOzs7R0FHRztBQUNILE1BQU0sUUFBUTtJQUlWLFlBQVksR0FBTTtRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQXNCO0lBQ25ELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQixVQUFVO0lBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLGFBQWE7SUFDYixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLE9BQU8sV0FBVyxLQUFLLElBQUksRUFBRTtRQUN6QixJQUFJLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUNELFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ2xDO0lBQ0Qsa0JBQWtCO0lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUMvQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLE1BQU0sZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFFLENBQUM7QUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuWzgzXSDliKDpmaTmjpLluo/pk77ooajkuK3nmoTph43lpI3lhYPntKBcclxuXHJcbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JlbW92ZS1kdXBsaWNhdGVzLWZyb20tc29ydGVkLWxpc3QvZGVzY3JpcHRpb24vXHJcblxyXG5UYWdzOiBhbGdvcml0aG1zIGxpbmtlZC1saXN0XHJcblxyXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcclxuXHJcbiogYWxnb3JpdGhtc1xyXG4qIEVhc3kgKDQ0LjMxJSlcclxuKiBUb3RhbCBBY2NlcHRlZDogMTkuNUtcclxuKiBUb3RhbCBTdWJtaXNzaW9uczogNDMuOUtcclxuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnWzEsMSwyXSdcclxuXHJcbue7meWumuS4gOS4quaOkuW6j+mTvuihqO+8jOWIoOmZpOaJgOaciemHjeWkjeeahOWFg+e0oO+8jOS9v+W+l+avj+S4quWFg+e0oOWPquWHuueOsOS4gOasoeOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IDEtPjEtPjJcclxu6L6T5Ye6OiAxLT4yXHJcblxyXG5cclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IDEtPjEtPjItPjMtPjNcclxu6L6T5Ye6OiAxLT4yLT4zXHJcblxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIERlZmluaXRpb24gZm9yIHNpbmdseS1saW5rZWQgbGlzdC5cclxuICogZnVuY3Rpb24gTGlzdE5vZGUodmFsKSB7XHJcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICogICAgIHRoaXMubmV4dCA9IG51bGw7XHJcbiAqIH1cclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXHJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxyXG4gKi9cclxuY2xhc3MgTGlzdE5vZGU8VD4ge1xyXG4gICAgdmFsOiBUO1xyXG4gICAgbmV4dDogbnVsbCB8IExpc3ROb2RlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBkZWxldGVEdXBsaWNhdGVzID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlPG51bWJlcj4pIHtcclxuICAgIGlmIChoZWFkID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIC8vIOaWsOmTvuihqOeahOWwvuiKgueCuVxyXG4gICAgbGV0IHRhaWwgPSBoZWFkO1xyXG4gICAgLy8g5q2j5Zyo5YeG5aSH5o+S5YWl55qE5Y6f6IqC54K5XHJcbiAgICBsZXQgY3VycmVudE5vZGUgPSBoZWFkLm5leHQ7XHJcbiAgICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAoY3VycmVudE5vZGUudmFsICE9PSB0YWlsLnZhbCkge1xyXG4gICAgICAgICAgICB0YWlsLm5leHQgPSBjdXJyZW50Tm9kZTtcclxuICAgICAgICAgICAgdGFpbCA9IHRhaWwubmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xyXG4gICAgfVxyXG4gICAgLy8g5L+d6K+B5pyA5ZCO5LiA5LiqIOWQjuayoeacieWkmuS9meeahOiKgueCuVxyXG4gICAgdGFpbC5uZXh0ID0gbnVsbDtcclxuICAgIHJldHVybiBoZWFkO1xyXG59O1xyXG5cclxuY29uc3Qge2NyZWF0ZUxpbmtlZExpc3R9ID0gcmVxdWlyZShcIi4vdXRpbC9saW5rZWRfbGlzdFwiKTtcclxuY29uc3QgbGlua2VkTGlzdCA9IGNyZWF0ZUxpbmtlZExpc3QoXHJcbiAgICBbMSwgMSwgMiwgMywgM10pO1xyXG5jb25zdCB1bmlxdWVMaW5rZWRMaXN0ID0gZGVsZXRlRHVwbGljYXRlcyhsaW5rZWRMaXN0KSE7XHJcbmNvbnNvbGUubG9nKHVuaXF1ZUxpbmtlZExpc3QudG9TdHJpbmcoKSk7XHJcblxyXG5leHBvcnQge31cclxuIl19