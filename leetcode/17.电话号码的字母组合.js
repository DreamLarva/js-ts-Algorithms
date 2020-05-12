"use strict";
/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

"2"  对应  "abc"
"3"  对应  "def"
"4"  对应  "ghi"
"5"  对应  "jkl"
"6"  对应  "mno"
"7"  对应  "pqrs"
"8"  对应  "tuv"
"9"  对应  "wxyz"

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const result = [];
  backTrack("", digits);
  return result;
  function backTrack(curStr, restStr) {
    if (restStr.length === 0) {
      result.push(curStr);
      return;
    }
    const mappingData = map[restStr[0]];
    for (let i = 0; i < mappingData.length; i++) {
      backTrack(curStr + mappingData[i], restStr.slice(1));
    }
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(letterCombinations("").sort(), [].sort());
assert_1.default.deepStrictEqual(
  letterCombinations("23").sort(),
  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort()
);
assert_1.default.deepStrictEqual(
  letterCombinations("295").sort(),
  [
    "awj",
    "awk",
    "awl",
    "axj",
    "axk",
    "axl",
    "ayj",
    "ayk",
    "ayl",
    "azj",
    "azk",
    "azl",
    "bwj",
    "bwk",
    "bwl",
    "bxj",
    "bxk",
    "bxl",
    "byj",
    "byk",
    "byl",
    "bzj",
    "bzk",
    "bzl",
    "cwj",
    "cwk",
    "cwl",
    "cxj",
    "cxk",
    "cxl",
    "cyj",
    "cyk",
    "cyl",
    "czj",
    "czk",
    "czl",
  ].sort()
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcu55S16K+d5Y+356CB55qE5a2X5q+N57uE5ZCILmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNy7nlLXor53lj7fnoIHnmoTlrZfmr43nu4TlkIgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLE1BQWM7SUFDN0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUluQyxNQUFNLEdBQUcsR0FBbUM7UUFDeEMsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxLQUFLO1FBQ1YsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsTUFBTTtLQUNkLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlO1FBQzlDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFDRCxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxDQUFDLENBQUM7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQzdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FDWixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUMvQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ2hFLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ2hDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDdFEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrku4XljIXlkKvmlbDlrZfCoDItOcKg55qE5a2X56ym5Liy77yM6L+U5Zue5omA5pyJ5a6D6IO96KGo56S655qE5a2X5q+N57uE5ZCI44CCXG5cbue7meWHuuaVsOWtl+WIsOWtl+avjeeahOaYoOWwhOWmguS4i++8iOS4jueUteivneaMiemUruebuOWQjO+8ieOAguazqOaEjyAxIOS4jeWvueW6lOS7u+S9leWtl+avjeOAglxuXG5cIjJcIiAg5a+55bqUICBcImFiY1wiXG5cIjNcIiAg5a+55bqUICBcImRlZlwiXG5cIjRcIiAg5a+55bqUICBcImdoaVwiXG5cIjVcIiAg5a+55bqUICBcImprbFwiXG5cIjZcIiAg5a+55bqUICBcIm1ub1wiXG5cIjdcIiAg5a+55bqUICBcInBxcnNcIlxuXCI4XCIgIOWvueW6lCAgXCJ0dXZcIlxuXCI5XCIgIOWvueW6lCAgXCJ3eHl6XCJcblxu56S65L6LOlxuXG7ovpPlhaXvvJpcIjIzXCJcbui+k+WHuu+8mltcImFkXCIsIFwiYWVcIiwgXCJhZlwiLCBcImJkXCIsIFwiYmVcIiwgXCJiZlwiLCBcImNkXCIsIFwiY2VcIiwgXCJjZlwiXS5cbuivtOaYjjpcbuWwveeuoeS4iumdoueahOetlOahiOaYr+aMieWtl+WFuOW6j+aOkuWIl+eahO+8jOS9huaYr+S9oOWPr+S7peS7u+aEj+mAieaLqeetlOahiOi+k+WHuueahOmhuuW6j+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbGV0dGVyLWNvbWJpbmF0aW9ucy1vZi1hLXBob25lLW51bWJlclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRpZ2l0c1xuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBsZXR0ZXJDb21iaW5hdGlvbnMgPSBmdW5jdGlvbiAoZGlnaXRzOiBzdHJpbmcpIHtcbiAgICBpZiAoZGlnaXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgIC8vIOW5v+W6puS8mOWFiCDmt7HluqbkvJjlhYgg55qG5Y+vXG4gICAgLy8g5L2G5pivIOi/mOaYr+Wbnua6r+azleabtOS9s1xuICAgIHR5cGUgZGlnaXRLZXlzID0gXCIyXCIgfCBcIjNcIiB8IFwiNFwiIHwgXCI1XCIgfCBcIjZcIiB8IFwiN1wiIHwgXCI4XCIgfCBcIjlcIjtcbiAgICBjb25zdCBtYXA6IHsgW2tleSBpbiBkaWdpdEtleXNdOiBzdHJpbmcgfSA9IHtcbiAgICAgICAgXCIyXCI6IFwiYWJjXCIsXG4gICAgICAgIFwiM1wiOiBcImRlZlwiLFxuICAgICAgICBcIjRcIjogXCJnaGlcIixcbiAgICAgICAgXCI1XCI6IFwiamtsXCIsXG4gICAgICAgIFwiNlwiOiBcIm1ub1wiLFxuICAgICAgICBcIjdcIjogXCJwcXJzXCIsXG4gICAgICAgIFwiOFwiOiBcInR1dlwiLFxuICAgICAgICBcIjlcIjogXCJ3eHl6XCIsXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgYmFja1RyYWNrKFwiXCIsIGRpZ2l0cyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGZ1bmN0aW9uIGJhY2tUcmFjayhjdXJTdHI6IHN0cmluZywgcmVzdFN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChyZXN0U3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VyU3RyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXBwaW5nRGF0YSA9IG1hcFtyZXN0U3RyWzBdIGFzIGRpZ2l0S2V5c107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwcGluZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJhY2tUcmFjayhjdXJTdHIgKyBtYXBwaW5nRGF0YVtpXSwgcmVzdFN0ci5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBsZXR0ZXJDb21iaW5hdGlvbnMoXCJcIikuc29ydCgpLFxuICAgIFtdLnNvcnQoKSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGxldHRlckNvbWJpbmF0aW9ucyhcIjIzXCIpLnNvcnQoKSxcbiAgICBbXCJhZFwiLCBcImFlXCIsIFwiYWZcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIl0uc29ydCgpLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgbGV0dGVyQ29tYmluYXRpb25zKFwiMjk1XCIpLnNvcnQoKSxcbiAgICBbXCJhd2pcIiwgXCJhd2tcIiwgXCJhd2xcIiwgXCJheGpcIiwgXCJheGtcIiwgXCJheGxcIiwgXCJheWpcIiwgXCJheWtcIiwgXCJheWxcIiwgXCJhempcIiwgXCJhemtcIiwgXCJhemxcIiwgXCJid2pcIiwgXCJid2tcIiwgXCJid2xcIiwgXCJieGpcIiwgXCJieGtcIiwgXCJieGxcIiwgXCJieWpcIiwgXCJieWtcIiwgXCJieWxcIiwgXCJiempcIiwgXCJiemtcIiwgXCJiemxcIiwgXCJjd2pcIiwgXCJjd2tcIiwgXCJjd2xcIiwgXCJjeGpcIiwgXCJjeGtcIiwgXCJjeGxcIiwgXCJjeWpcIiwgXCJjeWtcIiwgXCJjeWxcIiwgXCJjempcIiwgXCJjemtcIiwgXCJjemxcIl0uc29ydCgpLFxuKTtcbiJdfQ==
