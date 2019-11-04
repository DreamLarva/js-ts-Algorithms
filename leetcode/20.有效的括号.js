"use strict";
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.37%)
 * Total Accepted:    46.1K
 * Total Submissions: 126.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const leftPart = ["(", "[", "{"];
const rightPart = [")", "]", "}"];
var isValid = function (s) {
    // 使用栈
    const stack = [];
    for (const char of s) {
        // 如果是有右侧
        if (rightPart.includes(char)) {
            // 检查stack 顶 是不是 和现在这个是一组的
            if (isPair(last(stack), char)) {
                // 是一组就弹出一个左侧的
                stack.pop();
            }
            // 否则是嵌套错误
            else
                return false;
        }
        // 如果是左侧就 push 进stack
        else {
            stack.push(char);
        }
    }
    // 循环完毕 没有任何内容的就算正确
    return stack.length === 0;
};
function last(arr) {
    return arr[arr.length - 1];
}
function isPair(left, right) {
    return leftPart.indexOf(left) === rightPart.indexOf(right);
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isValid("()"), true);
assert_1.default.strictEqual(isValid("(){}()[]"), true);
assert_1.default.strictEqual(isValid("(){}({(())})[]"), true);
assert_1.default.strictEqual(isValid("((){}({(())})[])"), true);
assert_1.default.strictEqual(isValid("((){}({(())})[])("), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAu5pyJ5pWI55qE5ous5Y+3LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMC7mnInmlYjnmoTmi6zlj7cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFERztBQUNIOzs7R0FHRzs7Ozs7QUFHSCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBSWxDLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBUztJQUM3QixNQUFNO0lBQ04sTUFBTSxLQUFLLEdBQWdDLEVBQUUsQ0FBQztJQUU5QyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNsQixTQUFTO1FBQ1QsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLDBCQUEwQjtZQUMxQixJQUFJLE1BQU0sQ0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWEsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELGNBQWM7Z0JBQ2QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2Y7WUFDRCxVQUFVOztnQkFFTixPQUFPLEtBQUssQ0FBQztTQUVwQjtRQUNELHFCQUFxQjthQUNoQjtZQUNELEtBQUssQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLENBQUM7U0FDOUI7S0FDSjtJQUVELG1CQUFtQjtJQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBRTlCLENBQUMsQ0FBQztBQUVGLFNBQVMsSUFBSSxDQUFJLEdBQVE7SUFDckIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBR0QsU0FBUyxNQUFNLENBQUMsSUFBYyxFQUFFLEtBQWdCO0lBQzVDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBsYyBhcHA9bGVldGNvZGUuY24gaWQ9MjAgbGFuZz1qYXZhc2NyaXB0XHJcbiAqXHJcbiAqIFsyMF0g5pyJ5pWI55qE5ous5Y+3XHJcbiAqXHJcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3ZhbGlkLXBhcmVudGhlc2VzL2Rlc2NyaXB0aW9uL1xyXG4gKlxyXG4gKiBhbGdvcml0aG1zXHJcbiAqIEVhc3kgKDM2LjM3JSlcclxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQ2LjFLXHJcbiAqIFRvdGFsIFN1Ym1pc3Npb25zOiAxMjYuOEtcclxuICogVGVzdGNhc2UgRXhhbXBsZTogICdcIigpXCInXHJcbiAqXHJcbiAqIOe7meWumuS4gOS4quWPquWMheaLrCAnKCfvvIwnKSfvvIwneyfvvIwnfSfvvIwnWyfvvIwnXSfCoOeahOWtl+espuS4su+8jOWIpOaWreWtl+espuS4suaYr+WQpuacieaViOOAglxyXG4gKlxyXG4gKiDmnInmlYjlrZfnrKbkuLLpnIDmu6HotrPvvJpcclxuICpcclxuICpcclxuICog5bem5ous5Y+35b+F6aG755So55u45ZCM57G75Z6L55qE5Y+z5ous5Y+36Zet5ZCI44CCXHJcbiAqIOW3puaLrOWPt+W/hemhu+S7peato+ehrueahOmhuuW6j+mXreWQiOOAglxyXG4gKlxyXG4gKlxyXG4gKiDms6jmhI/nqbrlrZfnrKbkuLLlj6/ooqvorqTkuLrmmK/mnInmlYjlrZfnrKbkuLLjgIJcclxuICpcclxuICog56S65L6LIDE6XHJcbiAqXHJcbiAqIOi+k+WFpTogXCIoKVwiXHJcbiAqIOi+k+WHujogdHJ1ZVxyXG4gKlxyXG4gKlxyXG4gKiDnpLrkvovCoDI6XHJcbiAqXHJcbiAqIOi+k+WFpTogXCIoKVtde31cIlxyXG4gKiDovpPlh7o6IHRydWVcclxuICpcclxuICpcclxuICog56S65L6LwqAzOlxyXG4gKlxyXG4gKiDovpPlhaU6IFwiKF1cIlxyXG4gKiDovpPlh7o6IGZhbHNlXHJcbiAqXHJcbiAqXHJcbiAqIOekuuS+i8KgNDpcclxuICpcclxuICog6L6T5YWlOiBcIihbKV1cIlxyXG4gKiDovpPlh7o6IGZhbHNlXHJcbiAqXHJcbiAqXHJcbiAqIOekuuS+i8KgNTpcclxuICpcclxuICog6L6T5YWlOiBcIntbXX1cIlxyXG4gKiDovpPlh7o6IHRydWVcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuXHJcblxyXG5jb25zdCBsZWZ0UGFydCA9IFtcIihcIiwgXCJbXCIsIFwie1wiXTtcclxuY29uc3QgcmlnaHRQYXJ0ID0gW1wiKVwiLCBcIl1cIiwgXCJ9XCJdO1xyXG50eXBlIGxlZnRUeXBlID0gXCIoXCIgfCBcIltcIiB8IFwie1wiO1xyXG50eXBlIHJpZ2h0VHlwZSA9IFwiKVwiIHwgXCJdXCIgfCBcIn1cIjtcclxuXHJcbnZhciBpc1ZhbGlkID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gICAgLy8g5L2/55So5qCIXHJcbiAgICBjb25zdCBzdGFjazogQXJyYXk8bGVmdFR5cGUgfCByaWdodFR5cGU+ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHMpIHtcclxuICAgICAgICAvLyDlpoLmnpzmmK/mnInlj7PkvqdcclxuICAgICAgICBpZiAocmlnaHRQYXJ0LmluY2x1ZGVzKGNoYXIpKSB7XHJcbiAgICAgICAgICAgIC8vIOajgOafpXN0YWNrIOmhtiDmmK/kuI3mmK8g5ZKM546w5Zyo6L+Z5Liq5piv5LiA57uE55qEXHJcbiAgICAgICAgICAgIGlmIChpc1BhaXIoPGxlZnRUeXBlPmxhc3Qoc3RhY2spLCA8cmlnaHRUeXBlPmNoYXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmmK/kuIDnu4TlsLHlvLnlh7rkuIDkuKrlt6bkvqfnmoRcclxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWQpuWImeaYr+W1jOWll+mUmeivr1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmmK/lt6bkvqflsLEgcHVzaCDov5tzdGFja1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKDxsZWZ0VHlwZT5jaGFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5b6q546v5a6M5q+VIOayoeacieS7u+S9leWGheWuueeahOWwseeul+ato+ehrlxyXG4gICAgcmV0dXJuIHN0YWNrLmxlbmd0aCA9PT0gMDtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB7XHJcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzUGFpcihsZWZ0OiBsZWZ0VHlwZSwgcmlnaHQ6IHJpZ2h0VHlwZSkge1xyXG4gICAgcmV0dXJuIGxlZnRQYXJ0LmluZGV4T2YobGVmdCkgPT09IHJpZ2h0UGFydC5pbmRleE9mKHJpZ2h0KTtcclxufVxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigpXCIpLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVmFsaWQoXCIoKXt9KClbXVwiKSwgdHJ1ZSk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChpc1ZhbGlkKFwiKCl7fSh7KCgpKX0pW11cIiksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigoKXt9KHsoKCkpfSlbXSlcIiksIHRydWUpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigoKXt9KHsoKCkpfSlbXSkoXCIpLCBmYWxzZSk7XHJcbiJdfQ==