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
    if (fastPointer) fastPointer = fastPointer.next;
  }
  // 此时 slowPointer 在中间位置 翻转之后的链表 参看
  let afterHalfPart = reverseLinkedList(slowPointer.next);
  let beforeHalfPart = head;
  while (afterHalfPart) {
    if (afterHalfPart.val !== beforeHalfPart.val) return false;
    beforeHalfPart = beforeHalfPart.next;
    afterHalfPart = afterHalfPart.next;
  }
  return true;
};
// 反转链表
function reverseLinkedList(head) {
  if (head === null || head.next === null) return head;
  const result = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null; // 保证原来头部 现在尾部的 next 值为null
  return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0LuWbnuaWh+mTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjM0LuWbnuaWh+mTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQTs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQXFCO0lBQ2hELElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNyQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsZ0JBQWdCO0lBQ2hCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqQyxPQUFPLFdBQVcsRUFBRTtRQUNsQixXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUssQ0FBQztRQUNoQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLFdBQVc7WUFBRSxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNqRDtJQUVELGtDQUFrQztJQUNsQyxJQUFJLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE9BQU8sYUFBYSxFQUFFO1FBQ3BCLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUMsR0FBRztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNELGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSyxDQUFDO1FBQ3RDLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQ3BDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixPQUFPO0FBQ1AsU0FBUyxpQkFBaUIsQ0FBQyxJQUFxQjtJQUM5QyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDckQsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUM3QyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuivt+WIpOaWreS4gOS4qumTvuihqOaYr+WQpuS4uuWbnuaWh+mTvuihqOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiAxLT4yXG7ovpPlh7o6IGZhbHNlXG7npLrkvosgMjpcblxu6L6T5YWlOiAxLT4yLT4yLT4xXG7ovpPlh7o6IHRydWVcbui/m+mYtu+8mlxu5L2g6IO95ZCm55SoIE8obikg5pe26Ze05aSN5p2C5bqm5ZKMIE8oMSkg56m66Ze05aSN5p2C5bqm6Kej5Yaz5q2k6aKY77yfXG4qICovXG5pbXBvcnQgeyBMaXN0Tm9kZSB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNQYWxpbmRyb21lID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xuICBpZiAoaGVhZCA9PSBudWxsIHx8IGhlYWQubmV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8g5b+r5oWi5oyH6ZKI6I635Y+WIOmTvuihqOS4reeCueS9jee9rlxuICBsZXQgc2xvd1BvaW50ZXIgPSBoZWFkO1xuICBsZXQgZmFzdFBvaW50ZXIgPSBoZWFkLm5leHQubmV4dDtcbiAgd2hpbGUgKGZhc3RQb2ludGVyKSB7XG4gICAgc2xvd1BvaW50ZXIgPSBzbG93UG9pbnRlci5uZXh0ITtcbiAgICBmYXN0UG9pbnRlciA9IGZhc3RQb2ludGVyLm5leHQ7XG4gICAgaWYgKGZhc3RQb2ludGVyKSBmYXN0UG9pbnRlciA9IGZhc3RQb2ludGVyLm5leHQ7XG4gIH1cblxuICAvLyDmraTml7Ygc2xvd1BvaW50ZXIg5Zyo5Lit6Ze05L2N572uIOe/u+i9rOS5i+WQjueahOmTvuihqCDlj4LnnItcbiAgbGV0IGFmdGVySGFsZlBhcnQgPSByZXZlcnNlTGlua2VkTGlzdChzbG93UG9pbnRlci5uZXh0KTtcbiAgbGV0IGJlZm9yZUhhbGZQYXJ0ID0gaGVhZDtcbiAgd2hpbGUgKGFmdGVySGFsZlBhcnQpIHtcbiAgICBpZiAoYWZ0ZXJIYWxmUGFydC52YWwgIT09IGJlZm9yZUhhbGZQYXJ0LnZhbCkgcmV0dXJuIGZhbHNlO1xuICAgIGJlZm9yZUhhbGZQYXJ0ID0gYmVmb3JlSGFsZlBhcnQubmV4dCE7XG4gICAgYWZ0ZXJIYWxmUGFydCA9IGFmdGVySGFsZlBhcnQubmV4dDtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIOWPjei9rOmTvuihqFxuZnVuY3Rpb24gcmV2ZXJzZUxpbmtlZExpc3QoaGVhZDogTGlzdE5vZGUgfCBudWxsKTogTGlzdE5vZGUgfCBudWxsIHtcbiAgaWYgKGhlYWQgPT09IG51bGwgfHwgaGVhZC5uZXh0ID09PSBudWxsKSByZXR1cm4gaGVhZDtcbiAgY29uc3QgcmVzdWx0ID0gcmV2ZXJzZUxpbmtlZExpc3QoaGVhZC5uZXh0KTtcbiAgaGVhZC5uZXh0Lm5leHQgPSBoZWFkO1xuICBoZWFkLm5leHQgPSBudWxsOyAvLyDkv53or4Hljp/mnaXlpLTpg6gg546w5Zyo5bC+6YOo55qEIG5leHQg5YC85Li6bnVsbFxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQge307XG4iXX0=
