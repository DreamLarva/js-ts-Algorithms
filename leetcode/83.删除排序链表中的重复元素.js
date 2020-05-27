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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMu5Yig6Zmk5o6S5bqP6ZO+6KGo5Lit55qE6YeN5aSN5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84My7liKDpmaTmjpLluo/pk77ooajkuK3nmoTph43lpI3lhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFOztBQUVGOzs7Ozs7R0FNRztBQUNIOzs7R0FHRztBQUNILE1BQU0sUUFBUTtJQUlaLFlBQVksR0FBTTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFzQjtJQUNyRCxJQUFJLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0IsVUFBVTtJQUNWLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQixhQUFhO0lBQ2IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QixPQUFPLFdBQVcsS0FBSyxJQUFJLEVBQUU7UUFDM0IsSUFBSSxXQUFXLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNoQztJQUNELGtCQUFrQjtJQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzNELE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUUsQ0FBQztBQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuWzgzXSDliKDpmaTmjpLluo/pk77ooajkuK3nmoTph43lpI3lhYPntKBcblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcmVtb3ZlLWR1cGxpY2F0ZXMtZnJvbS1zb3J0ZWQtbGlzdC9kZXNjcmlwdGlvbi9cblxuVGFnczogYWxnb3JpdGhtcyBsaW5rZWQtbGlzdFxuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDQ0LjMxJSlcbiogVG90YWwgQWNjZXB0ZWQ6IDE5LjVLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiA0My45S1xuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnWzEsMSwyXSdcblxu57uZ5a6a5LiA5Liq5o6S5bqP6ZO+6KGo77yM5Yig6Zmk5omA5pyJ6YeN5aSN55qE5YWD57Sg77yM5L2/5b6X5q+P5Liq5YWD57Sg5Y+q5Ye6546w5LiA5qyh44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDEtPjEtPjJcbui+k+WHujogMS0+MlxuXG5cbuekuuS+iyAyOlxuXG7ovpPlhaU6IDEtPjEtPjItPjMtPjNcbui+k+WHujogMS0+Mi0+M1xuXG4qL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIHNpbmdseS1saW5rZWQgbGlzdC5cbiAqIGZ1bmN0aW9uIExpc3ROb2RlKHZhbCkge1xuICogICAgIHRoaXMudmFsID0gdmFsO1xuICogICAgIHRoaXMubmV4dCA9IG51bGw7XG4gKiB9XG4gKi9cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxuICogQHJldHVybiB7TGlzdE5vZGV9XG4gKi9cbmNsYXNzIExpc3ROb2RlPFQ+IHtcbiAgdmFsOiBUO1xuICBuZXh0OiBudWxsIHwgTGlzdE5vZGU8VD47XG5cbiAgY29uc3RydWN0b3IodmFsOiBUKSB7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgfVxufVxuXG52YXIgZGVsZXRlRHVwbGljYXRlcyA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZTxudW1iZXI+KSB7XG4gIGlmIChoZWFkID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgLy8g5paw6ZO+6KGo55qE5bC+6IqC54K5XG4gIGxldCB0YWlsID0gaGVhZDtcbiAgLy8g5q2j5Zyo5YeG5aSH5o+S5YWl55qE5Y6f6IqC54K5XG4gIGxldCBjdXJyZW50Tm9kZSA9IGhlYWQubmV4dDtcbiAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgaWYgKGN1cnJlbnROb2RlLnZhbCAhPT0gdGFpbC52YWwpIHtcbiAgICAgIHRhaWwubmV4dCA9IGN1cnJlbnROb2RlO1xuICAgICAgdGFpbCA9IHRhaWwubmV4dDtcbiAgICB9XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICB9XG4gIC8vIOS/neivgeacgOWQjuS4gOS4qiDlkI7msqHmnInlpJrkvZnnmoToioLngrlcbiAgdGFpbC5uZXh0ID0gbnVsbDtcbiAgcmV0dXJuIGhlYWQ7XG59O1xuXG5jb25zdCB7IGNyZWF0ZUxpbmtlZExpc3QgfSA9IHJlcXVpcmUoXCIuL3V0aWwvbGlua2VkX2xpc3RcIik7XG5jb25zdCBsaW5rZWRMaXN0ID0gY3JlYXRlTGlua2VkTGlzdChbMSwgMSwgMiwgMywgM10pO1xuY29uc3QgdW5pcXVlTGlua2VkTGlzdCA9IGRlbGV0ZUR1cGxpY2F0ZXMobGlua2VkTGlzdCkhO1xuY29uc29sZS5sb2codW5pcXVlTGlua2VkTGlzdC50b1N0cmluZygpKTtcblxuZXhwb3J0IHt9O1xuIl19