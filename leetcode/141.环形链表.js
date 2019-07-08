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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxLueOr+W9oumTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTQxLueOr+W9oumTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSTs7QUFJSjs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFVLElBQWM7SUFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2hDLElBQUksWUFBWSxHQUFtQixJQUFJLENBQUM7SUFDeEMsSUFBSSxZQUFZLEdBQWEsSUFBSSxDQUFDO0lBQ2xDLEdBQUc7UUFDQyxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5RCxZQUFZLEdBQUcsWUFBWSxDQUFDLElBQUssQ0FBQyxDQUFDLFdBQVc7S0FFakQsUUFBUSxZQUFZLEtBQUssWUFBWSxFQUFFO0lBQ3hDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7Ozs7S0FNSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpoZWFkID0gWzMsMiwwLC00XSwgcG9zID0gMVxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77ya6ZO+6KGo5Lit5pyJ5LiA5Liq546v77yM5YW25bC+6YOo6L+e5o6l5Yiw56ys5LqM5Liq6IqC54K544CCXG5cblxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaaGVhZCA9IFsxLDJdLCBwb3MgPSAwXG7ovpPlh7rvvJp0cnVlXG7op6Pph4rvvJrpk77ooajkuK3mnInkuIDkuKrnjq/vvIzlhbblsL7pg6jov57mjqXliLDnrKzkuIDkuKroioLngrnjgIJcblxuXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpoZWFkID0gWzFdLCBwb3MgPSAtMVxu6L6T5Ye677yaZmFsc2Vcbuino+mHiu+8mumTvuihqOS4reayoeacieeOr+OAglxuXG5cblxuXG7ov5vpmLbvvJpcblxu5L2g6IO955SoIE8oMSnvvIjljbPvvIzluLjph4/vvInlhoXlrZjop6PlhrPmraTpl67popjlkJfvvJ9cbiogKi9cblxuaW1wb3J0IHtMaXN0Tm9kZX0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBoYXNDeWNsZSA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZSkge1xuICAgIGlmIChoZWFkID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGZhc3RfcG9pbnRlcjpMaXN0Tm9kZSB8IG51bGwgPSBoZWFkO1xuICAgIGxldCBzbG93X3BvaW50ZXI6TGlzdE5vZGUgID0gaGVhZDtcbiAgICBkbyB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+eOryDlv6vmjIfmraPkuIDlrpog5YWI5YiwIHRhaWxcbiAgICAgICAgaWYgKChmYXN0X3BvaW50ZXIgPSBmYXN0X3BvaW50ZXIubmV4dCkgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKChmYXN0X3BvaW50ZXIgPSBmYXN0X3BvaW50ZXIubmV4dCkgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2xvd19wb2ludGVyID0gc2xvd19wb2ludGVyLm5leHQhOyAvLyDmhaLmjIfpkogg5b+F5a6a5pyJ5YC8XG5cbiAgICB9IHdoaWxlIChzbG93X3BvaW50ZXIgIT09IGZhc3RfcG9pbnRlcik7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIOW/q+aFouaMh+mSiFxuICog6LW354K555u45ZCMIOW/q+aMh+mSiCDmraXov5vnmoTpgJ/luqbmmK8g5oWi5oyH6ZKI55qEbuWAjVxuICog5L2/55So5Zy65pmvIOWkmuS4uumTvuihqFxuICog6ZO+6KGo5piv5ZCm5pyJ546vXG4gKiDpk77ooajnmoQg5Lit6Ze055qE5L2N572uXG4gKiAqL1xuIl19