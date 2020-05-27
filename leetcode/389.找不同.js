"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。



示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
* */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference1 = function (s, t) {
    let temp = 0;
    // 将 字符中串的为 转化成 数字的问题
    for (const char of t) {
        temp += char.charCodeAt(0);
    }
    for (const char of s) {
        temp -= char.charCodeAt(0);
    }
    return String.fromCharCode(temp);
};
var findTheDifference2 = function (s, t) {
    let temp = 0;
    // 将 字符中串的为 转化成 数字的问题
    for (const char of t) {
        temp ^= char.charCodeAt(0);
    }
    for (const char of s) {
        temp ^= char.charCodeAt(0);
    }
    return String.fromCharCode(temp);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findTheDifference1("abcd", "abcde"), "e");
assert_1.default.strictEqual(findTheDifference1("", "a"), "a");
assert_1.default.strictEqual(findTheDifference2("abcd", "abcde"), "e");
assert_1.default.strictEqual(findTheDifference2("", "a"), "a");
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite();
suite
    .add("+", function () {
    findTheDifference1("abcd", "abcde");
})
    .add("^", function () {
    findTheDifference2("abcd", "abcde");
})
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ async: false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg5LuaJvuS4jeWQjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg5LuaJvuS4jeWQjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDckQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IscUJBQXFCO0lBQ3JCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDcEIsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUI7SUFFRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ3JELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLHFCQUFxQjtJQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QjtJQUVELEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELGdCQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFckQsMERBQWtDO0FBRWxDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxLQUFLO0tBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNSLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ1Isa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFzQjtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ2Qsb0VBQW9FO0FBQ3RFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4pOS4quWtl+espuS4siBzIOWSjCB077yM5a6D5Lus5Y+q5YyF5ZCr5bCP5YaZ5a2X5q+N44CCXHJcblxyXG7lrZfnrKbkuLIgdCDnlLHlrZfnrKbkuLIgcyDpmo/mnLrph43mjpLvvIznhLblkI7lnKjpmo/mnLrkvY3nva7mt7vliqDkuIDkuKrlrZfmr43jgIJcclxuXHJcbuivt+aJvuWHuuWcqCB0IOS4reiiq+a3u+WKoOeahOWtl+avjeOAglxyXG5cclxuXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaXvvJpcclxucyA9IFwiYWJjZFwiXHJcbnQgPSBcImFiY2RlXCJcclxuXHJcbui+k+WHuu+8mlxyXG5lXHJcblxyXG7op6Pph4rvvJpcclxuJ2UnIOaYr+mCo+S4quiiq+a3u+WKoOeahOWtl+avjeOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gdFxyXG4gKiBAcmV0dXJuIHtjaGFyYWN0ZXJ9XHJcbiAqL1xyXG52YXIgZmluZFRoZURpZmZlcmVuY2UxID0gZnVuY3Rpb24gKHM6IHN0cmluZywgdDogc3RyaW5nKSB7XHJcbiAgbGV0IHRlbXAgPSAwO1xyXG4gIC8vIOWwhiDlrZfnrKbkuK3kuLLnmoTkuLog6L2s5YyW5oiQIOaVsOWtl+eahOmXrumimFxyXG4gIGZvciAoY29uc3QgY2hhciBvZiB0KSB7XHJcbiAgICB0ZW1wICs9IGNoYXIuY2hhckNvZGVBdCgwKTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgY2hhciBvZiBzKSB7XHJcbiAgICB0ZW1wIC09IGNoYXIuY2hhckNvZGVBdCgwKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHRlbXApO1xyXG59O1xyXG5cclxudmFyIGZpbmRUaGVEaWZmZXJlbmNlMiA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xyXG4gIGxldCB0ZW1wID0gMDtcclxuICAvLyDlsIYg5a2X56ym5Lit5Liy55qE5Li6IOi9rOWMluaIkCDmlbDlrZfnmoTpl67pophcclxuICBmb3IgKGNvbnN0IGNoYXIgb2YgdCkge1xyXG4gICAgdGVtcCBePSBjaGFyLmNoYXJDb2RlQXQoMCk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGNoYXIgb2Ygcykge1xyXG4gICAgdGVtcCBePSBjaGFyLmNoYXJDb2RlQXQoMCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0ZW1wKTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRUaGVEaWZmZXJlbmNlMShcImFiY2RcIiwgXCJhYmNkZVwiKSwgXCJlXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZFRoZURpZmZlcmVuY2UxKFwiXCIsIFwiYVwiKSwgXCJhXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZFRoZURpZmZlcmVuY2UyKFwiYWJjZFwiLCBcImFiY2RlXCIpLCBcImVcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kVGhlRGlmZmVyZW5jZTIoXCJcIiwgXCJhXCIpLCBcImFcIik7XHJcblxyXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcclxuXHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xyXG5zdWl0ZVxyXG4gIC5hZGQoXCIrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZpbmRUaGVEaWZmZXJlbmNlMShcImFiY2RcIiwgXCJhYmNkZVwiKTtcclxuICB9KVxyXG4gIC5hZGQoXCJeXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZpbmRUaGVEaWZmZXJlbmNlMihcImFiY2RcIiwgXCJhYmNkZVwiKTtcclxuICB9KVxyXG4gIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XHJcbiAgfSlcclxuICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnRmFzdGVzdCBpcyAnICsgdGhpcy5maWx0ZXIoJ2Zhc3Rlc3QnKS5tYXAoICduYW1lJykpO1xyXG4gIH0pXHJcbiAgLy8gcnVuIGFzeW5jXHJcbiAgLnJ1bih7IGFzeW5jOiBmYWxzZSB9KTtcclxuIl19