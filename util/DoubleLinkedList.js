"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLinkedListNode = exports.createDoubleLinkedList = void 0;
/**
 * 双向链表
 * */
class DoubleLinkedListNode {
    val;
    prev = null;
    next = null;
    child = null;
    constructor(val) {
        this.val = val;
    }
    toString() {
        const result = [];
        let node = this;
        while (node != null) {
            result.push(node.val);
            node = node.next;
        }
        return result;
    }
    toArray() {
        return this.toString();
    }
}
exports.DoubleLinkedListNode = DoubleLinkedListNode;
/**
 * @param arr 链表内容
 * */
function createDoubleLinkedList(arr) {
    const head = new DoubleLinkedListNode(arr[0]);
    let currentNode = head;
    let lastNode = null;
    for (let i = 0; i < arr.length; i++) {
        currentNode.next =
            arr[i + 1] == null ? null : new DoubleLinkedListNode(arr[i + 1]);
        currentNode.prev = lastNode;
        if (currentNode.next == null)
            break;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    return head;
}
exports.createDoubleLinkedList = createDoubleLinkedList;
const assert_1 = __importDefault(require("assert"));
{
    const sample = [1, 2, 3];
    const doubleLinkedList = createDoubleLinkedList(sample);
    assert_1.default.strictEqual(doubleLinkedList.val, 1);
    assert_1.default.strictEqual(doubleLinkedList.prev, null);
    assert_1.default.strictEqual(doubleLinkedList.next.val, 2);
    assert_1.default.strictEqual(doubleLinkedList.next.prev.val, 1);
    assert_1.default.strictEqual(doubleLinkedList.next.next.val, 3);
    assert_1.default.strictEqual(doubleLinkedList.next.next.next, null);
    assert_1.default.strictEqual(doubleLinkedList.next.next.prev.val, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG91YmxlTGlua2VkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9Eb3VibGVMaW5rZWRMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztLQUVLO0FBQ0wsTUFBTSxvQkFBb0I7SUFDeEIsR0FBRyxDQUFJO0lBQ1AsSUFBSSxHQUFtQyxJQUFJLENBQUM7SUFDNUMsSUFBSSxHQUFtQyxJQUFJLENBQUM7SUFDNUMsS0FBSyxHQUFtQyxJQUFJLENBQUM7SUFFN0MsWUFBWSxHQUFNO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFtQyxJQUFJLENBQUM7UUFDaEQsT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFzQmdDLG9EQUFvQjtBQXBCckQ7O0tBRUs7QUFDTCxTQUFTLHNCQUFzQixDQUFJLEdBQVE7SUFDekMsTUFBTSxJQUFJLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDdkIsSUFBSSxRQUFRLEdBQW1DLElBQUksQ0FBQztJQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxXQUFXLENBQUMsSUFBSTtZQUNkLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxJQUFJO1lBQUUsTUFBTTtRQUVwQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ2hDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRVEsd0RBQXNCO0FBRS9CLG9EQUE0QjtBQUU1QjtJQUNFLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixNQUFNLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDL0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWPjOWQkemTvuihqFxuICogKi9cbmNsYXNzIERvdWJsZUxpbmtlZExpc3ROb2RlPFQgPSBhbnk+IHtcbiAgdmFsOiBUO1xuICBwcmV2OiBudWxsIHwgRG91YmxlTGlua2VkTGlzdE5vZGU8VD4gPSBudWxsO1xuICBuZXh0OiBudWxsIHwgRG91YmxlTGlua2VkTGlzdE5vZGU8VD4gPSBudWxsO1xuICBjaGlsZDogbnVsbCB8IERvdWJsZUxpbmtlZExpc3ROb2RlPFQ+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XG4gICAgbGV0IG5vZGU6IERvdWJsZUxpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbCA9IHRoaXM7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIGFyciDpk77ooajlhoXlrrlcbiAqICovXG5mdW5jdGlvbiBjcmVhdGVEb3VibGVMaW5rZWRMaXN0PFQ+KGFycjogVFtdKSB7XG4gIGNvbnN0IGhlYWQgPSBuZXcgRG91YmxlTGlua2VkTGlzdE5vZGUoYXJyWzBdKTtcbiAgbGV0IGN1cnJlbnROb2RlID0gaGVhZDtcbiAgbGV0IGxhc3ROb2RlOiBEb3VibGVMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGwgPSBudWxsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGN1cnJlbnROb2RlLm5leHQgPVxuICAgICAgYXJyW2kgKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ldyBEb3VibGVMaW5rZWRMaXN0Tm9kZShhcnJbaSArIDFdKTtcbiAgICBjdXJyZW50Tm9kZS5wcmV2ID0gbGFzdE5vZGU7XG4gICAgaWYgKGN1cnJlbnROb2RlLm5leHQgPT0gbnVsbCkgYnJlYWs7XG5cbiAgICBsYXN0Tm9kZSA9IGN1cnJlbnROb2RlO1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgfVxuXG4gIHJldHVybiBoZWFkO1xufVxuXG5leHBvcnQgeyBjcmVhdGVEb3VibGVMaW5rZWRMaXN0LCBEb3VibGVMaW5rZWRMaXN0Tm9kZSB9O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxue1xuICBjb25zdCBzYW1wbGUgPSBbMSwgMiwgM107XG4gIGNvbnN0IGRvdWJsZUxpbmtlZExpc3QgPSBjcmVhdGVEb3VibGVMaW5rZWRMaXN0KHNhbXBsZSk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGVMaW5rZWRMaXN0LnZhbCwgMSk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGVMaW5rZWRMaXN0LnByZXYsIG51bGwpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS52YWwsIDIpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS5wcmV2IS52YWwsIDEpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS5uZXh0IS52YWwsIDMpO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS5uZXh0IS5uZXh0LCBudWxsKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QubmV4dCEubmV4dCEucHJldiEudmFsLCAyKTtcbn1cbiJdfQ==