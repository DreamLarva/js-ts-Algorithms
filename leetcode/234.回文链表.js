"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head == null || head.next == null) {
        return true;
    }
    // 快慢指针获取 链表中点位置
    let slowPointer = head;
    let fastPointer = head.next.next;
    while (fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
        if (fastPointer)
            fastPointer = fastPointer.next;
    }
    // 此时 slowPointer 在中间位置 翻转之后的链表 参看
    let afterHalfPart = reverseLinkedList(slowPointer.next);
    let beforeHalfPart = head;
    while (afterHalfPart) {
        if (afterHalfPart.val !== beforeHalfPart.val)
            return false;
        beforeHalfPart = beforeHalfPart.next;
        afterHalfPart = afterHalfPart.next;
    }
    return true;
};
// 反转链表
function reverseLinkedList(head) {
    if (head === null || head.next === null)
        return head;
    const result = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null; // 保证原来头部 现在尾部的 next 值为null
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LuWbnuaWh+mTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjM0LuWbnuaWh+mTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQTs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQXFCO0lBQzlDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsZ0JBQWdCO0lBQ2hCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqQyxPQUFPLFdBQVcsRUFBRTtRQUNoQixXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUssQ0FBQztRQUNoQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLFdBQVc7WUFBRSxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNuRDtJQUVELGtDQUFrQztJQUNsQyxJQUFJLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE9BQU8sYUFBYSxFQUFFO1FBQ2xCLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUMsR0FBRztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNELGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSyxDQUFDO1FBQ3RDLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBR0YsT0FBTztBQUNQLFNBQVMsaUJBQWlCLENBQUMsSUFBcUI7SUFDNUMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQywyQkFBMkI7SUFDN0MsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuivt+WIpOaWreS4gOS4qumTvuihqOaYr+WQpuS4uuWbnuaWh+mTvuihqOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IDEtPjJcclxu6L6T5Ye6OiBmYWxzZVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogMS0+Mi0+Mi0+MVxyXG7ovpPlh7o6IHRydWVcclxu6L+b6Zi277yaXHJcbuS9oOiDveWQpueUqCBPKG4pIOaXtumXtOWkjeadguW6puWSjCBPKDEpIOepuumXtOWkjeadguW6puino+WGs+atpOmimO+8n1xyXG4qICovXHJcbmltcG9ydCB7TGlzdE5vZGV9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQYWxpbmRyb21lID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xyXG4gICAgaWYgKGhlYWQgPT0gbnVsbCB8fCBoZWFkLm5leHQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8g5b+r5oWi5oyH6ZKI6I635Y+WIOmTvuihqOS4reeCueS9jee9rlxyXG4gICAgbGV0IHNsb3dQb2ludGVyID0gaGVhZDtcclxuICAgIGxldCBmYXN0UG9pbnRlciA9IGhlYWQubmV4dC5uZXh0O1xyXG4gICAgd2hpbGUgKGZhc3RQb2ludGVyKSB7XHJcbiAgICAgICAgc2xvd1BvaW50ZXIgPSBzbG93UG9pbnRlci5uZXh0ITtcclxuICAgICAgICBmYXN0UG9pbnRlciA9IGZhc3RQb2ludGVyLm5leHQ7XHJcbiAgICAgICAgaWYgKGZhc3RQb2ludGVyKSBmYXN0UG9pbnRlciA9IGZhc3RQb2ludGVyLm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5q2k5pe2IHNsb3dQb2ludGVyIOWcqOS4remXtOS9jee9riDnv7vovazkuYvlkI7nmoTpk77ooagg5Y+C55yLXHJcbiAgICBsZXQgYWZ0ZXJIYWxmUGFydCA9IHJldmVyc2VMaW5rZWRMaXN0KHNsb3dQb2ludGVyLm5leHQpO1xyXG4gICAgbGV0IGJlZm9yZUhhbGZQYXJ0ID0gaGVhZDtcclxuICAgIHdoaWxlIChhZnRlckhhbGZQYXJ0KSB7XHJcbiAgICAgICAgaWYgKGFmdGVySGFsZlBhcnQudmFsICE9PSBiZWZvcmVIYWxmUGFydC52YWwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBiZWZvcmVIYWxmUGFydCA9IGJlZm9yZUhhbGZQYXJ0Lm5leHQhO1xyXG4gICAgICAgIGFmdGVySGFsZlBhcnQgPSBhZnRlckhhbGZQYXJ0Lm5leHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcblxyXG4vLyDlj43ovazpk77ooahcclxuZnVuY3Rpb24gcmV2ZXJzZUxpbmtlZExpc3QoaGVhZDogTGlzdE5vZGUgfCBudWxsKTogTGlzdE5vZGUgfCBudWxsIHtcclxuICAgIGlmIChoZWFkID09PSBudWxsIHx8IGhlYWQubmV4dCA9PT0gbnVsbCkgcmV0dXJuIGhlYWQ7XHJcbiAgICBjb25zdCByZXN1bHQgPSByZXZlcnNlTGlua2VkTGlzdChoZWFkLm5leHQpO1xyXG4gICAgaGVhZC5uZXh0Lm5leHQgPSBoZWFkO1xyXG4gICAgaGVhZC5uZXh0ID0gbnVsbDsgLy8g5L+d6K+B5Y6f5p2l5aS06YOoIOeOsOWcqOWwvumDqOeahCBuZXh0IOWAvOS4um51bGxcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19