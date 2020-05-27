"use strict";
/*
示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。




进阶：

你能用 O(1)（即，常量）内存解决此问题吗？
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null)
        return false;
    let fast_pointer = head;
    let slow_pointer = head;
    do {
        // 如果不是环 快指正一定 先到 tail
        if ((fast_pointer = fast_pointer.next) === null)
            return false;
        if ((fast_pointer = fast_pointer.next) === null)
            return false;
        slow_pointer = slow_pointer.next; // 慢指针 必定有值
    } while (slow_pointer !== fast_pointer);
    return true;
};
/**
 * 快慢指针
 * 起点相同 快指针 步进的速度是 慢指针的n倍
 * 使用场景 多为链表
 * 链表是否有环
 * 链表的 中间的位置
 * */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxLueOr+W9oumTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQxLueOr+W9oumTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSTs7QUFJSjs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLElBQWM7SUFDckMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2hDLElBQUksWUFBWSxHQUFvQixJQUFJLENBQUM7SUFDekMsSUFBSSxZQUFZLEdBQWEsSUFBSSxDQUFDO0lBQ2xDLEdBQUc7UUFDRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5RCxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUssQ0FBQyxDQUFDLFdBQVc7S0FDL0MsUUFBUSxZQUFZLEtBQUssWUFBWSxFQUFFO0lBQ3hDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUY7Ozs7OztLQU1LIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mmhlYWQgPSBbMywyLDAsLTRdLCBwb3MgPSAxXG7ovpPlh7rvvJp0cnVlXG7op6Pph4rvvJrpk77ooajkuK3mnInkuIDkuKrnjq/vvIzlhbblsL7pg6jov57mjqXliLDnrKzkuozkuKroioLngrnjgIJcblxuXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpoZWFkID0gWzEsMl0sIHBvcyA9IDBcbui+k+WHuu+8mnRydWVcbuino+mHiu+8mumTvuihqOS4reacieS4gOS4queOr++8jOWFtuWwvumDqOi/nuaOpeWIsOesrOS4gOS4quiKgueCueOAglxuXG5cbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mmhlYWQgPSBbMV0sIHBvcyA9IC0xXG7ovpPlh7rvvJpmYWxzZVxu6Kej6YeK77ya6ZO+6KGo5Lit5rKh5pyJ546v44CCXG5cblxuXG5cbui/m+mYtu+8mlxuXG7kvaDog73nlKggTygxKe+8iOWNs++8jOW4uOmHj++8ieWGheWtmOino+WGs+atpOmXrumimOWQl++8n1xuKiAqL1xuXG5pbXBvcnQgeyBMaXN0Tm9kZSB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaGFzQ3ljbGUgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUpIHtcbiAgaWYgKGhlYWQgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgbGV0IGZhc3RfcG9pbnRlcjogTGlzdE5vZGUgfCBudWxsID0gaGVhZDtcbiAgbGV0IHNsb3dfcG9pbnRlcjogTGlzdE5vZGUgPSBoZWFkO1xuICBkbyB7XG4gICAgLy8g5aaC5p6c5LiN5piv546vIOW/q+aMh+ato+S4gOWumiDlhYjliLAgdGFpbFxuICAgIGlmICgoZmFzdF9wb2ludGVyID0gZmFzdF9wb2ludGVyLm5leHQpID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKChmYXN0X3BvaW50ZXIgPSBmYXN0X3BvaW50ZXIubmV4dCkgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBzbG93X3BvaW50ZXIgPSBzbG93X3BvaW50ZXIubmV4dCE7IC8vIOaFouaMh+mSiCDlv4XlrprmnInlgLxcbiAgfSB3aGlsZSAoc2xvd19wb2ludGVyICE9PSBmYXN0X3BvaW50ZXIpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICog5b+r5oWi5oyH6ZKIXG4gKiDotbfngrnnm7jlkIwg5b+r5oyH6ZKIIOatpei/m+eahOmAn+W6puaYryDmhaLmjIfpkojnmoRu5YCNXG4gKiDkvb/nlKjlnLrmma8g5aSa5Li66ZO+6KGoXG4gKiDpk77ooajmmK/lkKbmnInnjq9cbiAqIOmTvuihqOeahCDkuK3pl7TnmoTkvY3nva5cbiAqICovXG4iXX0=