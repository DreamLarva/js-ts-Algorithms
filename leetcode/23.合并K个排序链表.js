"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMu5ZCI5bm2S+S4quaOkuW6j+mTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjMu5ZCI5bm2S+S4quaOkuW6j+mTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0osbURBQWdFO0FBQ2hFLElBQUksYUFBYSxHQUFHLFVBQ2xCLEVBQXNCLEVBQ3RCLEVBQXNCO0lBRXRCLHNCQUFzQjtJQUN0QixJQUFJLEVBQUUsSUFBSSxJQUFJO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDMUIsSUFBSSxFQUFFLElBQUksSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRTFCLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQ3BCLFVBQVU7UUFDVixFQUFFLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLFdBQVc7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNYO1NBQU07UUFDTCxFQUFFLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUM7QUFDRjs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLEtBQTBCO0lBQ3BELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUk7WUFDakQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsUUFBUSxJQUFJLENBQUMsQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNwQixXQUFXLENBQ1Q7SUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNsQyxFQUNELDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzNDLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5ZCI5bm2wqBrwqDkuKrmjpLluo/pk77ooajvvIzov5Tlm57lkIjlubblkI7nmoTmjpLluo/pk77ooajjgILor7fliIbmnpDlkozmj4/ov7Dnrpfms5XnmoTlpI3mnYLluqbjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6XG5bXG7CoCAxLT40LT41LFxuwqAgMS0+My0+NCxcbsKgIDItPjZcbl1cbui+k+WHujogMS0+MS0+Mi0+My0+NC0+NC0+NS0+NlxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWVyZ2Utay1zb3J0ZWQtbGlzdHNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IHsgTGlzdE5vZGUsIGNyZWF0ZUxpbmtlZExpc3QgfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XG52YXIgbWVyZ2VUd29MaXN0cyA9IGZ1bmN0aW9uIDxUPihcbiAgbDE6IExpc3ROb2RlPFQ+IHwgbnVsbCxcbiAgbDI6IExpc3ROb2RlPFQ+IHwgbnVsbFxuKTogTGlzdE5vZGUgfCBudWxsIHtcbiAgLy8g5aaC5p6cIOafkOS4gOS4qumTvuihqOWIsOW6leS6hiDlsLHov5Tlm54g5Y+m5LiA5LiqXG4gIGlmIChsMSA9PSBudWxsKSByZXR1cm4gbDI7XG4gIGlmIChsMiA9PSBudWxsKSByZXR1cm4gbDE7XG5cbiAgaWYgKGwxLnZhbCA8PSBsMi52YWwpIHtcbiAgICAvLyDpgJLlvZIg5LiL5LiA5Liq5YC8XG4gICAgbDEubmV4dCA9IG1lcmdlVHdvTGlzdHMobDEubmV4dCwgbDIpO1xuICAgIC8vIOi/lOWbnuacrOi9rui+g+Wwj+eahOWAvFxuICAgIHJldHVybiBsMTtcbiAgfSBlbHNlIHtcbiAgICBsMi5uZXh0ID0gbWVyZ2VUd29MaXN0cyhsMSwgbDIubmV4dCk7XG4gICAgcmV0dXJuIGwyO1xuICB9XG59O1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBmdW5jdGlvbiBMaXN0Tm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLm5leHQgPSBudWxsO1xuICogfVxuICovXG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGVbXX0gbGlzdHNcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG52YXIgbWVyZ2VLTGlzdHMgPSBmdW5jdGlvbiAobGlzdHM6IChMaXN0Tm9kZSB8IG51bGwpW10pIHtcbiAgbGV0IGludGVydmFsID0gMTtcbiAgd2hpbGUgKGludGVydmFsIDwgbGlzdHMubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGxpc3RzLmxlbmd0aCAtIGludGVydmFsICogaSA+IDA7ICkge1xuICAgICAgbGlzdHNbaV0gPSBtZXJnZVR3b0xpc3RzKGxpc3RzW2ldLCBsaXN0c1tpICsgaW50ZXJ2YWxdKTtcbiAgICAgIGkgPSBpbnRlcnZhbCAqICsraSAqIDI7XG4gICAgfVxuICAgIGludGVydmFsICo9IDI7XG4gIH1cbiAgcmV0dXJuIGxpc3RzLmxlbmd0aCA9PT0gMCA/IGxpc3RzIDogbGlzdHNbMF07XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgbWVyZ2VLTGlzdHMoXG4gICAgW1xuICAgICAgWzEsIDQsIDVdLFxuICAgICAgWzEsIDMsIDRdLFxuICAgICAgWzIsIDZdLFxuICAgIF0ubWFwKCh2KSA9PiBjcmVhdGVMaW5rZWRMaXN0KHYpKVxuICApLFxuICBjcmVhdGVMaW5rZWRMaXN0KFsxLCAxLCAyLCAzLCA0LCA0LCA1LCA2XSlcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKG1lcmdlS0xpc3RzKFtdKSwgW10pO1xuIl19