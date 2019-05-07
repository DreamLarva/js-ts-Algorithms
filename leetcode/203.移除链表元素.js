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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAzLuenu+mZpOmTvuihqOWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAzLuenu+mZpOmTvuihqOWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0lBT0k7QUFDSixtREFBOEQ7QUFDOUQsb0RBQTRCO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLElBQXNCLEVBQUUsR0FBVztJQUM5RCxJQUFJLElBQXNCLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQTRCLElBQUksQ0FBQztJQUM1QyxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDckIsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNyQixTQUFTO1lBQ1QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNsQixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7YUFDL0I7WUFDRCxTQUFTO2lCQUNKLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLElBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixNQUFNO2FBQ1Q7WUFDRCxTQUFTO2lCQUNKO2dCQUNELElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUI7U0FFSjthQUFNO1lBQ0gsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNmLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzFCO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsY0FBYyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNwRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5Yig6Zmk6ZO+6KGo5Lit562J5LqO57uZ5a6a5YC8IHZhbCDnmoTmiYDmnInoioLngrnjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IDEtPjItPjYtPjMtPjQtPjUtPjYsIHZhbCA9IDZcbui+k+WHujogMS0+Mi0+My0+NC0+NVxuKiAqL1xuaW1wb3J0IHtjcmVhdGVMaW5rZWRMaXN0LCBMaXN0Tm9kZX0gZnJvbSBcIi4uL3V0aWwvTGlua2VkTGlzdFwiO1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICogQHJldHVybiB7TGlzdE5vZGV9XG4gKi9cbnZhciByZW1vdmVFbGVtZW50cyA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZTxudW1iZXI+LCB2YWw6IG51bWJlcikge1xuICAgIGxldCBsYXN0OiBMaXN0Tm9kZTxudW1iZXI+O1xuICAgIGxldCBjdXJyZW50OiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCA9IGhlYWQ7XG4gICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQudmFsID09PSB2YWwpIHtcbiAgICAgICAgICAgIC8vIOWcqOWktOmDqCDnm7jnrYlcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBoZWFkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGhlYWQgPSBoZWFkLm5leHQhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Zyo5bC+6YOoIOebuOetiVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudC5uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGFzdCEubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlnKjkuK3pl7Qg55u4562JXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYXN0IS5uZXh0ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3QgPSBjdXJyZW50O1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoZWFkO1xufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICByZW1vdmVFbGVtZW50cyhjcmVhdGVMaW5rZWRMaXN0KFs3LCA3LCAxLCAyLCAzLCA3LCA3LCA0LCA1LCA2LCA3LCA3XSksIDcpLnRvU3RyaW5nKCksXG4gICAgWzEsIDIsIDMsIDQsIDUsIDZdLFxuKTtcbiJdfQ==