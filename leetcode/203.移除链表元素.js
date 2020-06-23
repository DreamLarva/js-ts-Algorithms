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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAzLuenu+mZpOmTvuihqOWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAzLuenu+mZpOmTvuihqOWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0lBT0k7QUFDSixtREFBZ0U7QUFDaEUsb0RBQTRCO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLElBQXNCLEVBQUUsR0FBVztJQUNoRSxJQUFJLElBQXNCLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQTRCLElBQUksQ0FBQztJQUM1QyxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDdkIsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN2QixTQUFTO1lBQ1QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNwQixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7YUFDN0I7WUFDRCxTQUFTO2lCQUNKLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLElBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixNQUFNO2FBQ1A7WUFDRCxTQUFTO2lCQUNKO2dCQUNILElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDeEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNmLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixjQUFjLENBQ1osNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3RELENBQUMsQ0FDRixDQUFDLFFBQVEsRUFBRSxFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7liKDpmaTpk77ooajkuK3nrYnkuo7nu5nlrprlgLwgdmFsIOeahOaJgOacieiKgueCueOAglxuXG7npLrkvos6XG5cbui+k+WFpTogMS0+Mi0+Ni0+My0+NC0+NS0+NiwgdmFsID0gNlxu6L6T5Ye6OiAxLT4yLT4zLT40LT41XG4qICovXG5pbXBvcnQgeyBjcmVhdGVMaW5rZWRMaXN0LCBMaXN0Tm9kZSB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7TGlzdE5vZGV9IGhlYWRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxuICovXG52YXIgcmVtb3ZlRWxlbWVudHMgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGU8bnVtYmVyPiwgdmFsOiBudW1iZXIpIHtcbiAgbGV0IGxhc3Q6IExpc3ROb2RlPG51bWJlcj47XG4gIGxldCBjdXJyZW50OiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCA9IGhlYWQ7XG4gIHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKGN1cnJlbnQudmFsID09PSB2YWwpIHtcbiAgICAgIC8vIOWcqOWktOmDqCDnm7jnrYlcbiAgICAgIGlmIChjdXJyZW50ID09PSBoZWFkKSB7XG4gICAgICAgIGN1cnJlbnQgPSBoZWFkID0gaGVhZC5uZXh0ITtcbiAgICAgIH1cbiAgICAgIC8vIOWcqOWwvumDqCDnm7jnrYlcbiAgICAgIGVsc2UgaWYgKGN1cnJlbnQubmV4dCA9PT0gbnVsbCkge1xuICAgICAgICBsYXN0IS5uZXh0ID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyDlnKjkuK3pl7Qg55u4562JXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdCEubmV4dCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IGN1cnJlbnQ7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoZWFkO1xufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVtb3ZlRWxlbWVudHMoXG4gICAgY3JlYXRlTGlua2VkTGlzdChbNywgNywgMSwgMiwgMywgNywgNywgNCwgNSwgNiwgNywgN10pLFxuICAgIDdcbiAgKS50b1N0cmluZygpLFxuICBbMSwgMiwgMywgNCwgNSwgNl1cbik7XG4iXX0=