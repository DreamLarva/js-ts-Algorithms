"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 双向链表
 * */
class DoubleLinkedListNode {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.child = null;
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
        currentNode.next = arr[i + 1] == null ? null : new DoubleLinkedListNode(arr[i + 1]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG91YmxlTGlua2VkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9Eb3VibGVMaW5rZWRMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0tBRUs7QUFDTCxNQUFNLG9CQUFvQjtJQU10QixZQUFZLEdBQU07UUFKbEIsU0FBSSxHQUFtQyxJQUFJLENBQUM7UUFDNUMsU0FBSSxHQUFtQyxJQUFJLENBQUM7UUFDNUMsVUFBSyxHQUFtQyxJQUFJLENBQUM7UUFHekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLEdBQW1DLElBQUksQ0FBQztRQUNoRCxPQUFPLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQXFCK0Isb0RBQW9CO0FBbkJwRDs7S0FFSztBQUNMLFNBQVMsc0JBQXNCLENBQUksR0FBUTtJQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsV0FBVyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE1BQU07UUFFcEMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN2QixXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNsQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFTyx3REFBc0I7QUFFOUIsb0RBQTRCO0FBRTVCO0lBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNqRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5Y+M5ZCR6ZO+6KGoXG4gKiAqL1xuY2xhc3MgRG91YmxlTGlua2VkTGlzdE5vZGU8VCA9IGFueT4ge1xuICAgIHZhbDogVDtcbiAgICBwcmV2OiBudWxsIHwgRG91YmxlTGlua2VkTGlzdE5vZGU8VD4gPSBudWxsO1xuICAgIG5leHQ6IG51bGwgfCBEb3VibGVMaW5rZWRMaXN0Tm9kZTxUPiA9IG51bGw7XG4gICAgY2hpbGQ6IG51bGwgfCBEb3VibGVMaW5rZWRMaXN0Tm9kZTxUPiA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgbm9kZTogRG91YmxlTGlua2VkTGlzdE5vZGU8VD4gfCBudWxsID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIGFyciDpk77ooajlhoXlrrlcbiAqICovXG5mdW5jdGlvbiBjcmVhdGVEb3VibGVMaW5rZWRMaXN0PFQ+KGFycjogVFtdKSB7XG4gICAgY29uc3QgaGVhZCA9IG5ldyBEb3VibGVMaW5rZWRMaXN0Tm9kZShhcnJbMF0pO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IGhlYWQ7XG4gICAgbGV0IGxhc3ROb2RlID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gYXJyW2kgKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ldyBEb3VibGVMaW5rZWRMaXN0Tm9kZShhcnJbaSArIDFdKTtcbiAgICAgICAgY3VycmVudE5vZGUucHJldiA9IGxhc3ROb2RlO1xuICAgICAgICBpZiAoY3VycmVudE5vZGUubmV4dCA9PSBudWxsKSBicmVhaztcblxuICAgICAgICBsYXN0Tm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWQ7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRG91YmxlTGlua2VkTGlzdCwgRG91YmxlTGlua2VkTGlzdE5vZGV9O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxue1xuICAgIGNvbnN0IHNhbXBsZSA9IFsxLCAyLCAzXTtcbiAgICBjb25zdCBkb3VibGVMaW5rZWRMaXN0ID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChzYW1wbGUpO1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGVMaW5rZWRMaXN0LnZhbCwgMSk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QucHJldiwgbnVsbCk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QubmV4dCEudmFsLCAyKTtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS5wcmV2IS52YWwsIDEpO1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGVMaW5rZWRMaXN0Lm5leHQhLm5leHQhLnZhbCwgMyk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QubmV4dCEubmV4dCEubmV4dCwgbnVsbCk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QubmV4dCEubmV4dCEucHJldiEudmFsLCAyKTtcbn1cbiJdfQ==