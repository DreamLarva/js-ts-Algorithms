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
assert_1.default.deepStrictEqual(removeElements((0, LinkedList_1.createLinkedList)([7, 7, 1, 2, 3, 7, 7, 4, 5, 6, 7, 7]), 7).toString(), [1, 2, 3, 4, 5, 6]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAzLuenu+mZpOmTvuihqOWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAzLuenu+mZpOmTvuihqOWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0lBT0k7QUFDSixtREFBZ0U7QUFDaEUsb0RBQTRCO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLElBQXNCLEVBQUUsR0FBVztJQUNoRSxJQUFJLElBQXNCLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQTRCLElBQUksQ0FBQztJQUM1QyxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDdkIsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN2QixTQUFTO1lBQ1QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNwQixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7YUFDN0I7WUFDRCxTQUFTO2lCQUNKLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLElBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixNQUFNO2FBQ1A7WUFDRCxTQUFTO2lCQUNKO2dCQUNILElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDeEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNmLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixjQUFjLENBQ1osSUFBQSw2QkFBZ0IsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDdEQsQ0FBQyxDQUNGLENBQUMsUUFBUSxFQUFFLEVBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWIoOmZpOmTvuihqOS4reetieS6jue7meWumuWAvCB2YWwg55qE5omA5pyJ6IqC54K544CCXG5cbuekuuS+izpcblxu6L6T5YWlOiAxLT4yLT42LT4zLT40LT41LT42LCB2YWwgPSA2XG7ovpPlh7o6IDEtPjItPjMtPjQtPjVcbiogKi9cbmltcG9ydCB7IGNyZWF0ZUxpbmtlZExpc3QsIExpc3ROb2RlIH0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICogQHJldHVybiB7TGlzdE5vZGV9XG4gKi9cbnZhciByZW1vdmVFbGVtZW50cyA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZTxudW1iZXI+LCB2YWw6IG51bWJlcikge1xuICBsZXQgbGFzdDogTGlzdE5vZGU8bnVtYmVyPjtcbiAgbGV0IGN1cnJlbnQ6IExpc3ROb2RlPG51bWJlcj4gfCBudWxsID0gaGVhZDtcbiAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICBpZiAoY3VycmVudC52YWwgPT09IHZhbCkge1xuICAgICAgLy8g5Zyo5aS06YOoIOebuOetiVxuICAgICAgaWYgKGN1cnJlbnQgPT09IGhlYWQpIHtcbiAgICAgICAgY3VycmVudCA9IGhlYWQgPSBoZWFkLm5leHQhO1xuICAgICAgfVxuICAgICAgLy8g5Zyo5bC+6YOoIOebuOetiVxuICAgICAgZWxzZSBpZiAoY3VycmVudC5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgIGxhc3QhLm5leHQgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIOWcqOS4remXtCDnm7jnrYlcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0IS5uZXh0ID0gY3VycmVudC5uZXh0O1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gY3VycmVudDtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhlYWQ7XG59O1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByZW1vdmVFbGVtZW50cyhcbiAgICBjcmVhdGVMaW5rZWRMaXN0KFs3LCA3LCAxLCAyLCAzLCA3LCA3LCA0LCA1LCA2LCA3LCA3XSksXG4gICAgN1xuICApLnRvU3RyaW5nKCksXG4gIFsxLCAyLCAzLCA0LCA1LCA2XVxuKTtcbiJdfQ==