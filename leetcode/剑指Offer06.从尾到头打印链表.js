"use strict";
/*
剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。



示例 1：

输入：head = [1,3,2]
输出：[2,3,1]


限制：

0 <= 链表长度 <= 10000


* */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function reversePrint(head) {
    if (head == null)
        return [];
    const result = [];
    while (head != null) {
        result.unshift(head.val);
        head = head.next;
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5YmR5oyHT2ZmZXIwNi7ku47lsL7liLDlpLTmiZPljbDpk77ooaguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+WJkeaMh09mZmVyMDYu5LuO5bC+5Yiw5aS05omT5Y2w6ZO+6KGoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQkk7QUFDSjs7Ozs7Ozs7OztHQVVHO0FBRUgsTUFBTSxRQUFRO0lBQ1osR0FBRyxDQUFTO0lBQ1osSUFBSSxDQUFrQjtJQUN0QixZQUFZLEdBQVksRUFBRSxJQUFzQjtRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBRUQsU0FBUyxZQUFZLENBQUMsSUFBcUI7SUFDekMsSUFBSSxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRTVCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixPQUFPLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWJkeaMhyBPZmZlciAwNi4g5LuO5bC+5Yiw5aS05omT5Y2w6ZO+6KGoXG7ovpPlhaXkuIDkuKrpk77ooajnmoTlpLToioLngrnvvIzku47lsL7liLDlpLTlj43ov4fmnaXov5Tlm57mr4/kuKroioLngrnnmoTlgLzvvIjnlKjmlbDnu4Tov5Tlm57vvInjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mmhlYWQgPSBbMSwzLDJdXG7ovpPlh7rvvJpbMiwzLDFdXG5cblxu6ZmQ5Yi277yaXG5cbjAgPD0g6ZO+6KGo6ZW/5bqmIDw9IDEwMDAwXG5cblxuKiAqL1xuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBzaW5nbHktbGlua2VkIGxpc3QuXG4gKiBjbGFzcyBMaXN0Tm9kZSB7XG4gKiAgICAgdmFsOiBudW1iZXJcbiAqICAgICBuZXh0OiBMaXN0Tm9kZSB8IG51bGxcbiAqICAgICBjb25zdHJ1Y3Rvcih2YWw/OiBudW1iZXIsIG5leHQ/OiBMaXN0Tm9kZSB8IG51bGwpIHtcbiAqICAgICAgICAgdGhpcy52YWwgPSAodmFsPT09dW5kZWZpbmVkID8gMCA6IHZhbClcbiAqICAgICAgICAgdGhpcy5uZXh0ID0gKG5leHQ9PT11bmRlZmluZWQgPyBudWxsIDogbmV4dClcbiAqICAgICB9XG4gKiB9XG4gKi9cblxuY2xhc3MgTGlzdE5vZGUge1xuICB2YWw6IG51bWJlcjtcbiAgbmV4dDogTGlzdE5vZGUgfCBudWxsO1xuICBjb25zdHJ1Y3Rvcih2YWw/OiBudW1iZXIsIG5leHQ/OiBMaXN0Tm9kZSB8IG51bGwpIHtcbiAgICB0aGlzLnZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gMCA6IHZhbDtcbiAgICB0aGlzLm5leHQgPSBuZXh0ID09PSB1bmRlZmluZWQgPyBudWxsIDogbmV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXZlcnNlUHJpbnQoaGVhZDogTGlzdE5vZGUgfCBudWxsKTogbnVtYmVyW10ge1xuICBpZiAoaGVhZCA9PSBudWxsKSByZXR1cm4gW107XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHdoaWxlIChoZWFkICE9IG51bGwpIHtcbiAgICByZXN1bHQudW5zaGlmdChoZWFkLnZhbCk7XG5cbiAgICBoZWFkID0gaGVhZC5uZXh0O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==