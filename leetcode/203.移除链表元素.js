"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
    } else {
      last = current;
      current = current.next;
    }
  }
  return head;
};
assert_1.default.deepStrictEqual(
  removeElements(
    LinkedList_1.createLinkedList([7, 7, 1, 2, 3, 7, 7, 4, 5, 6, 7, 7]),
    7
  ).toString(),
  [1, 2, 3, 4, 5, 6]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAzLuenu+mZpOmTvuihqOWFg+e0oC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAzLuenu+mZpOmTvuihqOWFg+e0oC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0lBT0k7QUFDSixtREFBOEQ7QUFDOUQsb0RBQTRCO0FBRTVCOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLElBQXNCLEVBQUUsR0FBVztJQUM5RCxJQUFJLElBQXNCLENBQUM7SUFDM0IsSUFBSSxPQUFPLEdBQTRCLElBQUksQ0FBQztJQUM1QyxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDckIsSUFBSSxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNyQixTQUFTO1lBQ1QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNsQixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7YUFDL0I7WUFDRCxTQUFTO2lCQUNKLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLElBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixNQUFNO2FBQ1Q7WUFDRCxTQUFTO2lCQUNKO2dCQUNELElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUI7U0FFSjthQUFNO1lBQ0gsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUNmLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQzFCO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsY0FBYyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNwRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7liKDpmaTpk77ooajkuK3nrYnkuo7nu5nlrprlgLwgdmFsIOeahOaJgOacieiKgueCueOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiAxLT4yLT42LT4zLT40LT41LT42LCB2YWwgPSA2XHJcbui+k+WHujogMS0+Mi0+My0+NC0+NVxyXG4qICovXHJcbmltcG9ydCB7Y3JlYXRlTGlua2VkTGlzdCwgTGlzdE5vZGV9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtMaXN0Tm9kZX0gaGVhZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxyXG4gKi9cclxudmFyIHJlbW92ZUVsZW1lbnRzID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlPG51bWJlcj4sIHZhbDogbnVtYmVyKSB7XHJcbiAgICBsZXQgbGFzdDogTGlzdE5vZGU8bnVtYmVyPjtcclxuICAgIGxldCBjdXJyZW50OiBMaXN0Tm9kZTxudW1iZXI+IHwgbnVsbCA9IGhlYWQ7XHJcbiAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50LnZhbCA9PT0gdmFsKSB7XHJcbiAgICAgICAgICAgIC8vIOWcqOWktOmDqCDnm7jnrYlcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IGhlYWQpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBoZWFkID0gaGVhZC5uZXh0ITtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlnKjlsL7pg6gg55u4562JXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnQubmV4dCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdCEubmV4dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlnKjkuK3pl7Qg55u4562JXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFzdCEubmV4dCA9IGN1cnJlbnQubmV4dDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFzdCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoZWFkO1xyXG59O1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJlbW92ZUVsZW1lbnRzKGNyZWF0ZUxpbmtlZExpc3QoWzcsIDcsIDEsIDIsIDMsIDcsIDcsIDQsIDUsIDYsIDcsIDddKSwgNykudG9TdHJpbmcoKSxcclxuICAgIFsxLCAyLCAzLCA0LCA1LCA2XSxcclxuKTtcclxuIl19
