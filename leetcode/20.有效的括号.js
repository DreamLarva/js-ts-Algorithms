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
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
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
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAu5pyJ5pWI55qE5ous5Y+3LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMC7mnInmlYjnmoTmi6zlj7cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFERztBQUNIOzs7R0FHRzs7Ozs7QUFFSCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBSWxDLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBUztJQUMvQixNQUFNO0lBQ04sTUFBTSxLQUFLLEdBQWdDLEVBQUUsQ0FBQztJQUU5QyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixTQUFTO1FBQ1QsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLDBCQUEwQjtZQUMxQixJQUFJLE1BQU0sQ0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWEsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xELGNBQWM7Z0JBQ2QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2I7WUFDRCxVQUFVOztnQkFDTCxPQUFPLEtBQUssQ0FBQztTQUNuQjtRQUNELHFCQUFxQjthQUNoQjtZQUNILEtBQUssQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLENBQUM7U0FDNUI7S0FDRjtJQUVELG1CQUFtQjtJQUNuQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVGLFNBQVMsSUFBSSxDQUFJLEdBQVE7SUFDdkIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsSUFBYyxFQUFFLEtBQWdCO0lBQzlDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGMgYXBwPWxlZXRjb2RlLmNuIGlkPTIwIGxhbmc9amF2YXNjcmlwdFxuICpcbiAqIFsyMF0g5pyJ5pWI55qE5ous5Y+3XG4gKlxuICogaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvdmFsaWQtcGFyZW50aGVzZXMvZGVzY3JpcHRpb24vXG4gKlxuICogYWxnb3JpdGhtc1xuICogRWFzeSAoMzYuMzclKVxuICogVG90YWwgQWNjZXB0ZWQ6ICAgIDQ2LjFLXG4gKiBUb3RhbCBTdWJtaXNzaW9uczogMTI2LjhLXG4gKiBUZXN0Y2FzZSBFeGFtcGxlOiAgJ1wiKClcIidcbiAqXG4gKiDnu5nlrprkuIDkuKrlj6rljIXmi6wgJygn77yMJykn77yMJ3sn77yMJ30n77yMJ1sn77yMJ10nIOeahOWtl+espuS4su+8jOWIpOaWreWtl+espuS4suaYr+WQpuacieaViOOAglxuICpcbiAqIOacieaViOWtl+espuS4sumcgOa7oei2s++8mlxuICpcbiAqXG4gKiDlt6bmi6zlj7flv4XpobvnlKjnm7jlkIznsbvlnovnmoTlj7Pmi6zlj7fpl63lkIjjgIJcbiAqIOW3puaLrOWPt+W/hemhu+S7peato+ehrueahOmhuuW6j+mXreWQiOOAglxuICpcbiAqXG4gKiDms6jmhI/nqbrlrZfnrKbkuLLlj6/ooqvorqTkuLrmmK/mnInmlYjlrZfnrKbkuLLjgIJcbiAqXG4gKiDnpLrkvosgMTpcbiAqXG4gKiDovpPlhaU6IFwiKClcIlxuICog6L6T5Ye6OiB0cnVlXG4gKlxuICpcbiAqIOekuuS+iyAyOlxuICpcbiAqIOi+k+WFpTogXCIoKVtde31cIlxuICog6L6T5Ye6OiB0cnVlXG4gKlxuICpcbiAqIOekuuS+iyAzOlxuICpcbiAqIOi+k+WFpTogXCIoXVwiXG4gKiDovpPlh7o6IGZhbHNlXG4gKlxuICpcbiAqIOekuuS+iyA0OlxuICpcbiAqIOi+k+WFpTogXCIoWyldXCJcbiAqIOi+k+WHujogZmFsc2VcbiAqXG4gKlxuICog56S65L6LIDU6XG4gKlxuICog6L6T5YWlOiBcIntbXX1cIlxuICog6L6T5Ye6OiB0cnVlXG4gKlxuICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5cbmNvbnN0IGxlZnRQYXJ0ID0gW1wiKFwiLCBcIltcIiwgXCJ7XCJdO1xuY29uc3QgcmlnaHRQYXJ0ID0gW1wiKVwiLCBcIl1cIiwgXCJ9XCJdO1xudHlwZSBsZWZ0VHlwZSA9IFwiKFwiIHwgXCJbXCIgfCBcIntcIjtcbnR5cGUgcmlnaHRUeXBlID0gXCIpXCIgfCBcIl1cIiB8IFwifVwiO1xuXG52YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgLy8g5L2/55So5qCIXG4gIGNvbnN0IHN0YWNrOiBBcnJheTxsZWZ0VHlwZSB8IHJpZ2h0VHlwZT4gPSBbXTtcblxuICBmb3IgKGNvbnN0IGNoYXIgb2Ygcykge1xuICAgIC8vIOWmguaenOaYr+acieWPs+S+p1xuICAgIGlmIChyaWdodFBhcnQuaW5jbHVkZXMoY2hhcikpIHtcbiAgICAgIC8vIOajgOafpXN0YWNrIOmhtiDmmK/kuI3mmK8g5ZKM546w5Zyo6L+Z5Liq5piv5LiA57uE55qEXG4gICAgICBpZiAoaXNQYWlyKDxsZWZ0VHlwZT5sYXN0KHN0YWNrKSwgPHJpZ2h0VHlwZT5jaGFyKSkge1xuICAgICAgICAvLyDmmK/kuIDnu4TlsLHlvLnlh7rkuIDkuKrlt6bkvqfnmoRcbiAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICB9XG4gICAgICAvLyDlkKbliJnmmK/ltYzlpZfplJnor69cbiAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDlpoLmnpzmmK/lt6bkvqflsLEgcHVzaCDov5tzdGFja1xuICAgIGVsc2Uge1xuICAgICAgc3RhY2sucHVzaCg8bGVmdFR5cGU+Y2hhcik7XG4gICAgfVxuICB9XG5cbiAgLy8g5b6q546v5a6M5q+VIOayoeacieS7u+S9leWGheWuueeahOWwseeul+ato+ehrlxuICByZXR1cm4gc3RhY2subGVuZ3RoID09PSAwO1xufTtcblxuZnVuY3Rpb24gbGFzdDxUPihhcnI6IFRbXSk6IFQge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuZnVuY3Rpb24gaXNQYWlyKGxlZnQ6IGxlZnRUeXBlLCByaWdodDogcmlnaHRUeXBlKSB7XG4gIHJldHVybiBsZWZ0UGFydC5pbmRleE9mKGxlZnQpID09PSByaWdodFBhcnQuaW5kZXhPZihyaWdodCk7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigpXCIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc1ZhbGlkKFwiKCl7fSgpW11cIiksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVmFsaWQoXCIoKXt9KHsoKCkpfSlbXVwiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNWYWxpZChcIigoKXt9KHsoKCkpfSlbXSlcIiksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzVmFsaWQoXCIoKCl7fSh7KCgpKX0pW10pKFwiKSwgZmFsc2UpO1xuIl19
