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
const suite = new benchmark_1.default.Suite;
suite
    .add('+', function () {
    findTheDifference1("abcd", "abcde");
})
    .add('^', function () {
    findTheDifference2("abcd", "abcde");
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ 'async': false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg5LuaJvuS4jeWQjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzg5LuaJvuS4jeWQjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDbkQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IscUJBQXFCO0lBQ3JCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0lBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDbEIsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUI7SUFFRCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUYsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ25ELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLHFCQUFxQjtJQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5QjtJQUVELEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0lBRUQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQ25DLEdBQUcsQ0FDTixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2Qsa0JBQWtCLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUMzQixHQUFHLENBQ04sQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFDbkMsR0FBRyxDQUNOLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQzNCLEdBQUcsQ0FDTixDQUFDO0FBRUYsMERBQWtDO0FBRWxDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUM7QUFDbEMsS0FBSztLQUNBLEdBQUcsQ0FBQyxHQUFHLEVBQUU7SUFDTixrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNOLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBc0I7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNaLG9FQUFvRTtBQUN4RSxDQUFDLENBQUM7SUFDRixZQUFZO0tBQ1gsR0FBRyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5Lik5Liq5a2X56ym5LiyIHMg5ZKMIHTvvIzlroPku6zlj6rljIXlkKvlsI/lhpnlrZfmr43jgIJcblxu5a2X56ym5LiyIHQg55Sx5a2X56ym5LiyIHMg6ZqP5py66YeN5o6S77yM54S25ZCO5Zyo6ZqP5py65L2N572u5re75Yqg5LiA5Liq5a2X5q+N44CCXG5cbuivt+aJvuWHuuWcqCB0IOS4reiiq+a3u+WKoOeahOWtl+avjeOAglxuXG5cblxu56S65L6LOlxuXG7ovpPlhaXvvJpcbnMgPSBcImFiY2RcIlxudCA9IFwiYWJjZGVcIlxuXG7ovpPlh7rvvJpcbmVcblxu6Kej6YeK77yaXG4nZScg5piv6YKj5Liq6KKr5re75Yqg55qE5a2X5q+N44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcGFyYW0ge3N0cmluZ30gdFxuICogQHJldHVybiB7Y2hhcmFjdGVyfVxuICovXG52YXIgZmluZFRoZURpZmZlcmVuY2UxID0gZnVuY3Rpb24gKHM6IHN0cmluZywgdDogc3RyaW5nKSB7XG4gICAgbGV0IHRlbXAgPSAwO1xuICAgIC8vIOWwhiDlrZfnrKbkuK3kuLLnmoTkuLog6L2s5YyW5oiQIOaVsOWtl+eahOmXrumimFxuICAgIGZvciAoY29uc3QgY2hhciBvZiB0KSB7XG4gICAgICAgIHRlbXAgKz0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hhciBvZiBzKSB7XG4gICAgICAgIHRlbXAgLT0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHRlbXApO1xufTtcblxudmFyIGZpbmRUaGVEaWZmZXJlbmNlMiA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xuICAgIGxldCB0ZW1wID0gMDtcbiAgICAvLyDlsIYg5a2X56ym5Lit5Liy55qE5Li6IOi9rOWMluaIkCDmlbDlrZfnmoTpl67pophcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdCkge1xuICAgICAgICB0ZW1wIF49IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoYXIgb2Ygcykge1xuICAgICAgICB0ZW1wIF49IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0ZW1wKTtcbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBmaW5kVGhlRGlmZmVyZW5jZTEoXCJhYmNkXCIsIFwiYWJjZGVcIiksXG4gICAgXCJlXCIsXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGZpbmRUaGVEaWZmZXJlbmNlMShcIlwiLCBcImFcIiksXG4gICAgXCJhXCIsXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGZpbmRUaGVEaWZmZXJlbmNlMihcImFiY2RcIiwgXCJhYmNkZVwiKSxcbiAgICBcImVcIixcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZmluZFRoZURpZmZlcmVuY2UyKFwiXCIsIFwiYVwiKSxcbiAgICBcImFcIixcbik7XG5cbmltcG9ydCBCZW5jaG1hcmsgZnJvbSBcImJlbmNobWFya1wiO1xuXG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGU7XG5zdWl0ZVxuICAgIC5hZGQoJysnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZpbmRUaGVEaWZmZXJlbmNlMShcImFiY2RcIiwgXCJhYmNkZVwiKTtcbiAgICB9KVxuICAgIC5hZGQoJ14nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZpbmRUaGVEaWZmZXJlbmNlMihcImFiY2RcIiwgXCJhYmNkZVwiKTtcbiAgICB9KVxuICAgIC5vbignY3ljbGUnLCBmdW5jdGlvbiAoZXZlbnQ6IEJlbmNobWFyay5FdmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XG4gICAgfSlcbiAgICAub24oJ2NvbXBsZXRlJywgZnVuY3Rpb24gKHRoaXM6IEJlbmNobWFyay5TdWl0ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRmFzdGVzdCBpcyAnICsgdGhpcy5maWx0ZXIoJ2Zhc3Rlc3QnKS5tYXAoICduYW1lJykpO1xuICAgIH0pXG4gICAgLy8gcnVuIGFzeW5jXG4gICAgLnJ1bih7J2FzeW5jJzogZmFsc2V9KTtcbiJdfQ==