"use strict";
/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    /**
     * 直接 ^ 运算 再得到所有的1 就好了
     * */
    let after_exclusive_or = x ^ y;
    let result = 0;
    while (after_exclusive_or) {
        if (after_exclusive_or & 1)
            result++;
        after_exclusive_or >>= 1;
    }
    return result;
};
/*
var hammingDistance = function (x: number, y: number): number {
    if (x > y) return hammingDistance(y, x);
    let result = 0;
    while (y) {
        if ((y & 1) !== (x & 1)) result++;
        x >>= 1;
        y >>= 1;

    }
    return result;
};
*/
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(hammingDistance(1, 4), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYxLuaxieaYjui3neemuy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDYxLuaxieaYjui3neemuy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJOzs7OztBQUVKOzs7O0dBSUc7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ2xEOztTQUVLO0lBQ0wsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sa0JBQWtCLEVBQUU7UUFDekIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDO1lBQUUsTUFBTSxFQUFFLENBQUM7UUFDckMsa0JBQWtCLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBQ0Y7Ozs7Ozs7Ozs7OztFQVlFO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7kuKTkuKrmlbTmlbDkuYvpl7TnmoTmsYnmmI7ot53nprvmjIfnmoTmmK/ov5nkuKTkuKrmlbDlrZflr7nlupTkuozov5vliLbkvY3kuI3lkIznmoTkvY3nva7nmoTmlbDnm67jgIJcclxuXHJcbue7meWHuuS4pOS4quaVtOaVsCB4IOWSjCB577yM6K6h566X5a6D5Lus5LmL6Ze055qE5rGJ5piO6Led56a744CCXHJcblxyXG7ms6jmhI/vvJpcclxuMCDiiaQgeCwgeSA8IDIzMS5cclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTogeCA9IDEsIHkgPSA0XHJcblxyXG7ovpPlh7o6IDJcclxuXHJcbuino+mHijpcclxuMSAgICgwIDAgMCAxKVxyXG40ICAgKDAgMSAwIDApXHJcbiAgICAgICDihpEgICDihpFcclxuXHJcbuS4iumdoueahOeureWktOaMh+WHuuS6huWvueW6lOS6jOi/m+WItuS9jeS4jeWQjOeahOS9jee9ruOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHBhcmFtIHtudW1iZXJ9IHlcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGhhbW1pbmdEaXN0YW5jZSA9IGZ1bmN0aW9uICh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgLyoqXHJcbiAgICog55u05o6lIF4g6L+Q566XIOWGjeW+l+WIsOaJgOacieeahDEg5bCx5aW95LqGXHJcbiAgICogKi9cclxuICBsZXQgYWZ0ZXJfZXhjbHVzaXZlX29yID0geCBeIHk7XHJcbiAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgd2hpbGUgKGFmdGVyX2V4Y2x1c2l2ZV9vcikge1xyXG4gICAgaWYgKGFmdGVyX2V4Y2x1c2l2ZV9vciAmIDEpIHJlc3VsdCsrO1xyXG4gICAgYWZ0ZXJfZXhjbHVzaXZlX29yID4+PSAxO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4vKlxyXG52YXIgaGFtbWluZ0Rpc3RhbmNlID0gZnVuY3Rpb24gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh4ID4geSkgcmV0dXJuIGhhbW1pbmdEaXN0YW5jZSh5LCB4KTtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgd2hpbGUgKHkpIHtcclxuICAgICAgICBpZiAoKHkgJiAxKSAhPT0gKHggJiAxKSkgcmVzdWx0Kys7XHJcbiAgICAgICAgeCA+Pj0gMTtcclxuICAgICAgICB5ID4+PSAxO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiovXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChoYW1taW5nRGlzdGFuY2UoMSwgNCksIDIpO1xyXG4iXX0=