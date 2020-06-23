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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg5LuaJvuS4jeWQjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg5LuaJvuS4jeWQjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDckQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IscUJBQXFCO0lBQ3JCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDcEIsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUI7SUFFRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ3JELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLHFCQUFxQjtJQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QjtJQUVELEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELGdCQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFckQsMERBQWtDO0FBRWxDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxLQUFLO0tBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNSLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ1Isa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFzQjtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ2Qsb0VBQW9FO0FBQ3RFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuKTkuKrlrZfnrKbkuLIgcyDlkowgdO+8jOWug+S7rOWPquWMheWQq+Wwj+WGmeWtl+avjeOAglxuXG7lrZfnrKbkuLIgdCDnlLHlrZfnrKbkuLIgcyDpmo/mnLrph43mjpLvvIznhLblkI7lnKjpmo/mnLrkvY3nva7mt7vliqDkuIDkuKrlrZfmr43jgIJcblxu6K+35om+5Ye65ZyoIHQg5Lit6KKr5re75Yqg55qE5a2X5q+N44CCXG5cblxuXG7npLrkvos6XG5cbui+k+WFpe+8mlxucyA9IFwiYWJjZFwiXG50ID0gXCJhYmNkZVwiXG5cbui+k+WHuu+8mlxuZVxuXG7op6Pph4rvvJpcbidlJyDmmK/pgqPkuKrooqvmt7vliqDnmoTlrZfmr43jgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0XG4gKiBAcmV0dXJuIHtjaGFyYWN0ZXJ9XG4gKi9cbnZhciBmaW5kVGhlRGlmZmVyZW5jZTEgPSBmdW5jdGlvbiAoczogc3RyaW5nLCB0OiBzdHJpbmcpIHtcbiAgbGV0IHRlbXAgPSAwO1xuICAvLyDlsIYg5a2X56ym5Lit5Liy55qE5Li6IOi9rOWMluaIkCDmlbDlrZfnmoTpl67pophcbiAgZm9yIChjb25zdCBjaGFyIG9mIHQpIHtcbiAgICB0ZW1wICs9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hhciBvZiBzKSB7XG4gICAgdGVtcCAtPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0ZW1wKTtcbn07XG5cbnZhciBmaW5kVGhlRGlmZmVyZW5jZTIgPSBmdW5jdGlvbiAoczogc3RyaW5nLCB0OiBzdHJpbmcpIHtcbiAgbGV0IHRlbXAgPSAwO1xuICAvLyDlsIYg5a2X56ym5Lit5Liy55qE5Li6IOi9rOWMluaIkCDmlbDlrZfnmoTpl67pophcbiAgZm9yIChjb25zdCBjaGFyIG9mIHQpIHtcbiAgICB0ZW1wIF49IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2hhciBvZiBzKSB7XG4gICAgdGVtcCBePSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0ZW1wKTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZFRoZURpZmZlcmVuY2UxKFwiYWJjZFwiLCBcImFiY2RlXCIpLCBcImVcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZFRoZURpZmZlcmVuY2UxKFwiXCIsIFwiYVwiKSwgXCJhXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRUaGVEaWZmZXJlbmNlMihcImFiY2RcIiwgXCJhYmNkZVwiKSwgXCJlXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRUaGVEaWZmZXJlbmNlMihcIlwiLCBcImFcIiksIFwiYVwiKTtcblxuaW1wb3J0IEJlbmNobWFyayBmcm9tIFwiYmVuY2htYXJrXCI7XG5cbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xuc3VpdGVcbiAgLmFkZChcIitcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRUaGVEaWZmZXJlbmNlMShcImFiY2RcIiwgXCJhYmNkZVwiKTtcbiAgfSlcbiAgLmFkZChcIl5cIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRUaGVEaWZmZXJlbmNlMihcImFiY2RcIiwgXCJhYmNkZVwiKTtcbiAgfSlcbiAgLm9uKFwiY3ljbGVcIiwgZnVuY3Rpb24gKGV2ZW50OiBCZW5jaG1hcmsuRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XG4gIH0pXG4gIC5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uICh0aGlzOiBCZW5jaG1hcmsuU3VpdGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnRmFzdGVzdCBpcyAnICsgdGhpcy5maWx0ZXIoJ2Zhc3Rlc3QnKS5tYXAoICduYW1lJykpO1xuICB9KVxuICAvLyBydW4gYXN5bmNcbiAgLnJ1bih7IGFzeW5jOiBmYWxzZSB9KTtcbiJdfQ==