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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
      else return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAu5pyJ5pWI55qE5ous5Y+3LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMC7mnInmlYjnmoTmi6zlj7cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFERztBQUNIOzs7R0FHRzs7Ozs7QUFHSCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBSWxDLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBUztJQUM3QixNQUFNO0lBQ04sTUFBTSxLQUFLLEdBQWdDLEVBQUUsQ0FBQztJQUU5QyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNsQixTQUFTO1FBQ1QsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLDBCQUEwQjtZQUMxQixJQUFJLE1BQU0sQ0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWEsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELGNBQWM7Z0JBQ2QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2Y7WUFDRCxVQUFVOztnQkFFTixPQUFPLEtBQUssQ0FBQztTQUVwQjtRQUNELHFCQUFxQjthQUNoQjtZQUNELEtBQUssQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLENBQUM7U0FDOUI7S0FDSjtJQUVELG1CQUFtQjtJQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBRTlCLENBQUMsQ0FBQztBQUVGLFNBQVMsSUFBSSxDQUFJLEdBQVE7SUFDckIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBR0QsU0FBUyxNQUFNLENBQUMsSUFBYyxFQUFFLEtBQWdCO0lBQzVDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTIwIGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFsyMF0g5pyJ5pWI55qE5ous5Y+3XG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvdmFsaWQtcGFyZW50aGVzZXMvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoMzYuMzclKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQ2LjFLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMTI2LjhLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1wiKClcIidcbiAqXG4gKiDnu5nlrprkuIDkuKrlj6rljIXmi6wgJygn77yMJykn77yMJ3sn77yMJ30n77yMJ1sn77yMJ10nwqDnmoTlrZfnrKbkuLLvvIzliKTmlq3lrZfnrKbkuLLmmK/lkKbmnInmlYjjgIJcbiAqXG4gKiDmnInmlYjlrZfnrKbkuLLpnIDmu6HotrPvvJpcbiAqXG4gKlxuICog5bem5ous5Y+35b+F6aG755So55u45ZCM57G75Z6L55qE5Y+z5ous5Y+36Zet5ZCI44CCXG4gKiDlt6bmi6zlj7flv4Xpobvku6XmraPnoa7nmoTpobrluo/pl63lkIjjgIJcbiAqXG4gKlxuICog5rOo5oSP56m65a2X56ym5Liy5Y+v6KKr6K6k5Li65piv5pyJ5pWI5a2X56ym5Liy44CCXG4gKlxuICog56S65L6LIDE6XG4gKlxuICog6L6T5YWlOiBcIigpXCJcbiAqIOi+k+WHujogdHJ1ZVxuICpcbiAqXG4gKiDnpLrkvovCoDI6XG4gKlxuICog6L6T5YWlOiBcIigpW117fVwiXG4gKiDovpPlh7o6IHRydWVcbiAqXG4gKlxuICog56S65L6LwqAzOlxuICpcbiAqIOi+k+WFpTogXCIoXVwiXG4gKiDovpPlh7o6IGZhbHNlXG4gKlxuICpcbiAqIOekuuS+i8KgNDpcbiAqXG4gKiDovpPlhaU6IFwiKFspXVwiXG4gKiDovpPlh7o6IGZhbHNlXG4gKlxuICpcbiAqIOekuuS+i8KgNTpcbiAqXG4gKiDovpPlhaU6IFwie1tdfVwiXG4gKiDovpPlh7o6IHRydWVcbiAqXG4gKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuXG5jb25zdCBsZWZ0UGFydCA9IFtcIihcIiwgXCJbXCIsIFwie1wiXTtcbmNvbnN0IHJpZ2h0UGFydCA9IFtcIilcIiwgXCJdXCIsIFwifVwiXTtcbnR5cGUgbGVmdFR5cGUgPSBcIihcIiB8IFwiW1wiIHwgXCJ7XCI7XG50eXBlIHJpZ2h0VHlwZSA9IFwiKVwiIHwgXCJdXCIgfCBcIn1cIjtcblxudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gICAgLy8g5L2/55So5qCIXG4gICAgY29uc3Qgc3RhY2s6IEFycmF5PGxlZnRUeXBlIHwgcmlnaHRUeXBlPiA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHMpIHtcbiAgICAgICAgLy8g5aaC5p6c5piv5pyJ5Y+z5L6nXG4gICAgICAgIGlmIChyaWdodFBhcnQuaW5jbHVkZXMoY2hhcikpIHtcbiAgICAgICAgICAgIC8vIOajgOafpXN0YWNrIOmhtiDmmK/kuI3mmK8g5ZKM546w5Zyo6L+Z5Liq5piv5LiA57uE55qEXG4gICAgICAgICAgICBpZiAoaXNQYWlyKDxsZWZ0VHlwZT5sYXN0KHN0YWNrKSwgPHJpZ2h0VHlwZT5jaGFyKSkge1xuICAgICAgICAgICAgICAgIC8vIOaYr+S4gOe7hOWwseW8ueWHuuS4gOS4quW3puS+p+eahFxuICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5ZCm5YiZ5piv5bWM5aWX6ZSZ6K+vXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5piv5bem5L6n5bCxIHB1c2gg6L+bc3RhY2tcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKDxsZWZ0VHlwZT5jaGFyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOW+queOr+WujOavlSDmsqHmnInku7vkvZXlhoXlrrnnmoTlsLHnrpfmraPnoa5cbiAgICByZXR1cm4gc3RhY2subGVuZ3RoID09PSAwO1xuXG59O1xuXG5mdW5jdGlvbiBsYXN0PFQ+KGFycjogVFtdKTogVCB7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cblxuZnVuY3Rpb24gaXNQYWlyKGxlZnQ6IGxlZnRUeXBlLCByaWdodDogcmlnaHRUeXBlKSB7XG4gICAgcmV0dXJuIGxlZnRQYXJ0LmluZGV4T2YobGVmdCkgPT09IHJpZ2h0UGFydC5pbmRleE9mKHJpZ2h0KTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChpc1ZhbGlkKFwiKClcIiksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVmFsaWQoXCIoKXt9KClbXVwiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigpe30oeygoKSl9KVtdXCIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc1ZhbGlkKFwiKCgpe30oeygoKSl9KVtdKVwiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigoKXt9KHsoKCkpfSlbXSkoXCIpLCBmYWxzZSk7XG4iXX0=
