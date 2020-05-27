"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
* */
const LinkedList_1 = require("../util/LinkedList");
const assert_1 = __importDefault(require("assert"));
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let last;
    let current = head;
    while (current !== null) {
        if (current.val === val) {
            // 在头部 相等
            if (current === head) {
                current = head = head.next;
            }
            // 在尾部 相等
            else if (current.next === null) {
                last.next = null;
                break;
            }
            // 在中间 相等
            else {
                last.next = current.next;
                current = current.next;
            }
        }
        else {
            last = current;
            current = current.next;
        }
    }
    return head;
};
assert_1.default.deepStrictEqual(removeElements(LinkedList_1.createLinkedList([7, 7, 1, 2, 3, 7, 7, 4, 5, 6, 7, 7]), 7).toString(), [1, 2, 3, 4, 5, 6]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAzLuenu+mZpOmTvuihqOWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAzLuenu+mZpOmTvuihqOWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0lBT0k7QUFDSixtREFBZ0U7QUFDaEUsb0RBQTRCO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLElBQXNCLEVBQUUsR0FBVztJQUNoRSxJQUFJLElBQXNCLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQTRCLElBQUksQ0FBQztJQUM1QyxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDdkIsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN2QixTQUFTO1lBQ1QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNwQixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7YUFDN0I7WUFDRCxTQUFTO2lCQUNKLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLElBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixNQUFNO2FBQ1A7WUFDRCxTQUFTO2lCQUNKO2dCQUNILElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDeEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNmLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixjQUFjLENBQ1osNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3RELENBQUMsQ0FDRixDQUFDLFFBQVEsRUFBRSxFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWIoOmZpOmTvuihqOS4reetieS6jue7meWumuWAvCB2YWwg55qE5omA5pyJ6IqC54K544CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IDEtPjItPjYtPjMtPjQtPjUtPjYsIHZhbCA9IDZcclxu6L6T5Ye6OiAxLT4yLT4zLT40LT41XHJcbiogKi9cclxuaW1wb3J0IHsgY3JlYXRlTGlua2VkTGlzdCwgTGlzdE5vZGUgfSBmcm9tIFwiLi4vdXRpbC9MaW5rZWRMaXN0XCI7XHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxyXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cclxuICovXHJcbnZhciByZW1vdmVFbGVtZW50cyA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZTxudW1iZXI+LCB2YWw6IG51bWJlcikge1xyXG4gIGxldCBsYXN0OiBMaXN0Tm9kZTxudW1iZXI+O1xyXG4gIGxldCBjdXJyZW50OiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCA9IGhlYWQ7XHJcbiAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgIGlmIChjdXJyZW50LnZhbCA9PT0gdmFsKSB7XHJcbiAgICAgIC8vIOWcqOWktOmDqCDnm7jnrYlcclxuICAgICAgaWYgKGN1cnJlbnQgPT09IGhlYWQpIHtcclxuICAgICAgICBjdXJyZW50ID0gaGVhZCA9IGhlYWQubmV4dCE7XHJcbiAgICAgIH1cclxuICAgICAgLy8g5Zyo5bC+6YOoIOebuOetiVxyXG4gICAgICBlbHNlIGlmIChjdXJyZW50Lm5leHQgPT09IG51bGwpIHtcclxuICAgICAgICBsYXN0IS5uZXh0ID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvLyDlnKjkuK3pl7Qg55u4562JXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxhc3QhLm5leHQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFzdCA9IGN1cnJlbnQ7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGVhZDtcclxufTtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgcmVtb3ZlRWxlbWVudHMoXHJcbiAgICBjcmVhdGVMaW5rZWRMaXN0KFs3LCA3LCAxLCAyLCAzLCA3LCA3LCA0LCA1LCA2LCA3LCA3XSksXHJcbiAgICA3XHJcbiAgKS50b1N0cmluZygpLFxyXG4gIFsxLCAyLCAzLCA0LCA1LCA2XVxyXG4pO1xyXG4iXX0=