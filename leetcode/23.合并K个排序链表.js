"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const LinkedList_1 = require("../util/LinkedList");
var mergeTwoLists = function (l1, l2) {
    // 如果 某一个链表到底了 就返回 另一个
    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;
    if (l1.val <= l2.val) {
        // 递归 下一个值
        l1.next = mergeTwoLists(l1.next, l2);
        // 返回本轮较小的值
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let interval = 1;
    while (interval < lists.length) {
        for (let i = 0; lists.length - interval * i > 0;) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
            i = interval * ++i * 2;
        }
        interval *= 2;
    }
    return lists.length === 0 ? lists : lists[0];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
].map((v) => LinkedList_1.createLinkedList(v))), LinkedList_1.createLinkedList([1, 1, 2, 3, 4, 4, 5, 6]));
assert_1.default.deepStrictEqual(mergeKLists([]), []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMu5ZCI5bm2S+S4quaOkuW6j+mTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMu5ZCI5bm2S+S4quaOkuW6j+mTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0osbURBQWdFO0FBQ2hFLElBQUksYUFBYSxHQUFHLFVBQ2xCLEVBQXNCLEVBQ3RCLEVBQXNCO0lBRXRCLHNCQUFzQjtJQUN0QixJQUFJLEVBQUUsSUFBSSxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDMUIsSUFBSSxFQUFFLElBQUksSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRTFCLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQ3BCLFVBQVU7UUFDVixFQUFFLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFdBQVc7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNYO1NBQU07UUFDTCxFQUFFLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUM7QUFDRjs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLEtBQTBCO0lBQ3BELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUk7WUFDakQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsUUFBUSxJQUFJLENBQUMsQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNwQixXQUFXLENBQ1Q7SUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNsQyxFQUNELDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzNDLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5ZCI5bm2IGsg5Liq5o6S5bqP6ZO+6KGo77yM6L+U5Zue5ZCI5bm25ZCO55qE5o6S5bqP6ZO+6KGo44CC6K+35YiG5p6Q5ZKM5o+P6L+w566X5rOV55qE5aSN5p2C5bqm44CCXG5cbuekuuS+izpcblxu6L6T5YWlOlxuW1xuICAxLT40LT41LFxuICAxLT4zLT40LFxuICAyLT42XG5dXG7ovpPlh7o6IDEtPjEtPjItPjMtPjQtPjQtPjUtPjZcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21lcmdlLWstc29ydGVkLWxpc3RzXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCB7IExpc3ROb2RlLCBjcmVhdGVMaW5rZWRMaXN0IH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xudmFyIG1lcmdlVHdvTGlzdHMgPSBmdW5jdGlvbiA8VD4oXG4gIGwxOiBMaXN0Tm9kZTxUPiB8IG51bGwsXG4gIGwyOiBMaXN0Tm9kZTxUPiB8IG51bGxcbik6IExpc3ROb2RlIHwgbnVsbCB7XG4gIC8vIOWmguaenCDmn5DkuIDkuKrpk77ooajliLDlupXkuoYg5bCx6L+U5ZueIOWPpuS4gOS4qlxuICBpZiAobDEgPT0gbnVsbCkgcmV0dXJuIGwyO1xuICBpZiAobDIgPT0gbnVsbCkgcmV0dXJuIGwxO1xuXG4gIGlmIChsMS52YWwgPD0gbDIudmFsKSB7XG4gICAgLy8g6YCS5b2SIOS4i+S4gOS4quWAvFxuICAgIGwxLm5leHQgPSBtZXJnZVR3b0xpc3RzKGwxLm5leHQsIGwyKTtcbiAgICAvLyDov5Tlm57mnKzova7ovoPlsI/nmoTlgLxcbiAgICByZXR1cm4gbDE7XG4gIH0gZWxzZSB7XG4gICAgbDIubmV4dCA9IG1lcmdlVHdvTGlzdHMobDEsIGwyLm5leHQpO1xuICAgIHJldHVybiBsMjtcbiAgfVxufTtcbi8qKlxuICogRGVmaW5pdGlvbiBmb3Igc2luZ2x5LWxpbmtlZCBsaXN0LlxuICogZnVuY3Rpb24gTGlzdE5vZGUodmFsKSB7XG4gKiAgICAgdGhpcy52YWwgPSB2YWw7XG4gKiAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAqIH1cbiAqL1xuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlW119IGxpc3RzXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xudmFyIG1lcmdlS0xpc3RzID0gZnVuY3Rpb24gKGxpc3RzOiAoTGlzdE5vZGUgfCBudWxsKVtdKSB7XG4gIGxldCBpbnRlcnZhbCA9IDE7XG4gIHdoaWxlIChpbnRlcnZhbCA8IGxpc3RzLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBsaXN0cy5sZW5ndGggLSBpbnRlcnZhbCAqIGkgPiAwOyApIHtcbiAgICAgIGxpc3RzW2ldID0gbWVyZ2VUd29MaXN0cyhsaXN0c1tpXSwgbGlzdHNbaSArIGludGVydmFsXSk7XG4gICAgICBpID0gaW50ZXJ2YWwgKiArK2kgKiAyO1xuICAgIH1cbiAgICBpbnRlcnZhbCAqPSAyO1xuICB9XG4gIHJldHVybiBsaXN0cy5sZW5ndGggPT09IDAgPyBsaXN0cyA6IGxpc3RzWzBdO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIG1lcmdlS0xpc3RzKFxuICAgIFtcbiAgICAgIFsxLCA0LCA1XSxcbiAgICAgIFsxLCAzLCA0XSxcbiAgICAgIFsyLCA2XSxcbiAgICBdLm1hcCgodikgPT4gY3JlYXRlTGlua2VkTGlzdCh2KSlcbiAgKSxcbiAgY3JlYXRlTGlua2VkTGlzdChbMSwgMSwgMiwgMywgNCwgNCwgNSwgNl0pXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChtZXJnZUtMaXN0cyhbXSksIFtdKTtcbiJdfQ==