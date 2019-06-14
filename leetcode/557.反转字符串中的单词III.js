"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.match(/\S+/g);
    return words ? words.map(s => s.split("").reverse().join("")).join(" ") : "";
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU3LuWPjei9rOWtl+espuS4suS4reeahOWNleivjUlJSS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTU3LuWPjei9rOWtl+espuS4suS4reeahOWNleivjUlJSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFZSTtBQUNKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBUztJQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNqRixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLDZCQUE2QixDQUFDLEVBQzNDLDZCQUE2QixDQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM5L2g6ZyA6KaB5Y+N6L2s5a2X56ym5Liy5Lit5q+P5Liq5Y2V6K+N55qE5a2X56ym6aG65bqP77yM5ZCM5pe25LuN5L+d55WZ56m65qC85ZKM5Y2V6K+N55qE5Yid5aeL6aG65bqP44CCXHJcblxyXG7npLrkvovCoDE6XHJcblxyXG7ovpPlhaU6IFwiTGV0J3MgdGFrZSBMZWV0Q29kZSBjb250ZXN0XCJcclxu6L6T5Ye6OiBcInMndGVMIGVrYXQgZWRvQ3RlZUwgdHNldG5vY1wiwqBcclxu5rOo5oSP77ya5Zyo5a2X56ym5Liy5Lit77yM5q+P5Liq5Y2V6K+N55Sx5Y2V5Liq56m65qC85YiG6ZqU77yM5bm25LiU5a2X56ym5Liy5Lit5LiN5Lya5pyJ5Lu75L2V6aKd5aSW55qE56m65qC844CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZXZlcnNlLXdvcmRzLWluLWEtc3RyaW5nLWlpaVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIHJldmVyc2VXb3JkcyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHdvcmRzID0gcy5tYXRjaCgvXFxTKy9nKTtcclxuICAgIHJldHVybiB3b3JkcyA/IHdvcmRzLm1hcChzID0+IHMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpLmpvaW4oXCIgXCIpIDogXCJcIjtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgcmV2ZXJzZVdvcmRzKFwiTGV0J3MgdGFrZSBMZWV0Q29kZSBjb250ZXN0XCIpLFxyXG4gICAgXCJzJ3RlTCBla2F0IGVkb0N0ZWVMIHRzZXRub2NcIixcclxuKTtcclxuXHJcbiJdfQ==