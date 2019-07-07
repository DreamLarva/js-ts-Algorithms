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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxLueOr+W9oumTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQxLueOr+W9oumTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSTs7QUFJSjs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLElBQWM7SUFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2hDLElBQUksWUFBWSxHQUFtQixJQUFJLENBQUM7SUFDeEMsSUFBSSxZQUFZLEdBQWEsSUFBSSxDQUFDO0lBQ2xDLEdBQUc7UUFDQyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5RCxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUssQ0FBQyxDQUFDLFdBQVc7S0FFakQsUUFBUSxZQUFZLEtBQUssWUFBWSxFQUFFO0lBQ3hDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7Ozs7S0FNSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuekuuS+iyAx77yaXHJcblxyXG7ovpPlhaXvvJpoZWFkID0gWzMsMiwwLC00XSwgcG9zID0gMVxyXG7ovpPlh7rvvJp0cnVlXHJcbuino+mHiu+8mumTvuihqOS4reacieS4gOS4queOr++8jOWFtuWwvumDqOi/nuaOpeWIsOesrOS6jOS4quiKgueCueOAglxyXG5cclxuXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJpoZWFkID0gWzEsMl0sIHBvcyA9IDBcclxu6L6T5Ye677yadHJ1ZVxyXG7op6Pph4rvvJrpk77ooajkuK3mnInkuIDkuKrnjq/vvIzlhbblsL7pg6jov57mjqXliLDnrKzkuIDkuKroioLngrnjgIJcclxuXHJcblxyXG7npLrkvosgM++8mlxyXG5cclxu6L6T5YWl77yaaGVhZCA9IFsxXSwgcG9zID0gLTFcclxu6L6T5Ye677yaZmFsc2Vcclxu6Kej6YeK77ya6ZO+6KGo5Lit5rKh5pyJ546v44CCXHJcblxyXG5cclxuXHJcblxyXG7ov5vpmLbvvJpcclxuXHJcbuS9oOiDveeUqCBPKDEp77yI5Y2z77yM5bi46YeP77yJ5YaF5a2Y6Kej5Yaz5q2k6Zeu6aKY5ZCX77yfXHJcbiogKi9cclxuXHJcbmltcG9ydCB7TGlzdE5vZGV9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaGFzQ3ljbGUgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUpIHtcclxuICAgIGlmIChoZWFkID09PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICBsZXQgZmFzdF9wb2ludGVyOkxpc3ROb2RlIHwgbnVsbCA9IGhlYWQ7XHJcbiAgICBsZXQgc2xvd19wb2ludGVyOkxpc3ROb2RlICA9IGhlYWQ7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgLy8g5aaC5p6c5LiN5piv546vIOW/q+aMh+ato+S4gOWumiDlhYjliLAgdGFpbFxyXG4gICAgICAgIGlmICgoZmFzdF9wb2ludGVyID0gZmFzdF9wb2ludGVyLm5leHQpID09PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKChmYXN0X3BvaW50ZXIgPSBmYXN0X3BvaW50ZXIubmV4dCkgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzbG93X3BvaW50ZXIgPSBzbG93X3BvaW50ZXIubmV4dCE7IC8vIOaFouaMh+mSiCDlv4XlrprmnInlgLxcclxuXHJcbiAgICB9IHdoaWxlIChzbG93X3BvaW50ZXIgIT09IGZhc3RfcG9pbnRlcik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDlv6vmhaLmjIfpkohcclxuICog6LW354K555u45ZCMIOW/q+aMh+mSiCDmraXov5vnmoTpgJ/luqbmmK8g5oWi5oyH6ZKI55qEbuWAjVxyXG4gKiDkvb/nlKjlnLrmma8g5aSa5Li66ZO+6KGoXHJcbiAqIOmTvuihqOaYr+WQpuacieeOr1xyXG4gKiDpk77ooajnmoQg5Lit6Ze055qE5L2N572uXHJcbiAqICovXHJcbiJdfQ==