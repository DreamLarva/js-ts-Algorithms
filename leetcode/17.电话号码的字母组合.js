"use strict";
/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

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
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcu55S16K+d5Y+356CB55qE5a2X5q+N57uE5ZCILmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNy7nlLXor53lj7fnoIHnmoTlrZfmr43nu4TlkIgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLE1BQWM7SUFDL0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUluQyxNQUFNLEdBQUcsR0FBbUM7UUFDMUMsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxLQUFLO1FBQ1YsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsTUFBTTtLQUNaLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlO1FBQ2hELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxDQUFDLENBQUM7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRSxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQy9CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUQsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFDaEM7SUFDRSxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7Q0FDTixDQUFDLElBQUksRUFBRSxDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LuF5YyF5ZCr5pWw5a2XIDItOSDnmoTlrZfnrKbkuLLvvIzov5Tlm57miYDmnInlroPog73ooajnpLrnmoTlrZfmr43nu4TlkIjjgIJcblxu57uZ5Ye65pWw5a2X5Yiw5a2X5q+N55qE5pig5bCE5aaC5LiL77yI5LiO55S16K+d5oyJ6ZSu55u45ZCM77yJ44CC5rOo5oSPIDEg5LiN5a+55bqU5Lu75L2V5a2X5q+N44CCXG5cblwiMlwiICDlr7nlupQgIFwiYWJjXCJcblwiM1wiICDlr7nlupQgIFwiZGVmXCJcblwiNFwiICDlr7nlupQgIFwiZ2hpXCJcblwiNVwiICDlr7nlupQgIFwiamtsXCJcblwiNlwiICDlr7nlupQgIFwibW5vXCJcblwiN1wiICDlr7nlupQgIFwicHFyc1wiXG5cIjhcIiAg5a+55bqUICBcInR1dlwiXG5cIjlcIiAg5a+55bqUICBcInd4eXpcIlxuXG7npLrkvos6XG5cbui+k+WFpe+8mlwiMjNcIlxu6L6T5Ye677yaW1wiYWRcIiwgXCJhZVwiLCBcImFmXCIsIFwiYmRcIiwgXCJiZVwiLCBcImJmXCIsIFwiY2RcIiwgXCJjZVwiLCBcImNmXCJdLlxu6K+05piOOlxu5bC9566h5LiK6Z2i55qE562U5qGI5piv5oyJ5a2X5YW45bqP5o6S5YiX55qE77yM5L2G5piv5L2g5Y+v5Lul5Lu75oSP6YCJ5oup562U5qGI6L6T5Ye655qE6aG65bqP44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9sZXR0ZXItY29tYmluYXRpb25zLW9mLWEtcGhvbmUtbnVtYmVyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlnaXRzXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xudmFyIGxldHRlckNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uIChkaWdpdHM6IHN0cmluZykge1xuICBpZiAoZGlnaXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICAvLyDlub/luqbkvJjlhYgg5rex5bqm5LyY5YWIIOeahuWPr1xuICAvLyDkvYbmmK8g6L+Y5piv5Zue5rqv5rOV5pu05L2zXG4gIHR5cGUgZGlnaXRLZXlzID0gXCIyXCIgfCBcIjNcIiB8IFwiNFwiIHwgXCI1XCIgfCBcIjZcIiB8IFwiN1wiIHwgXCI4XCIgfCBcIjlcIjtcbiAgY29uc3QgbWFwOiB7IFtrZXkgaW4gZGlnaXRLZXlzXTogc3RyaW5nIH0gPSB7XG4gICAgXCIyXCI6IFwiYWJjXCIsXG4gICAgXCIzXCI6IFwiZGVmXCIsXG4gICAgXCI0XCI6IFwiZ2hpXCIsXG4gICAgXCI1XCI6IFwiamtsXCIsXG4gICAgXCI2XCI6IFwibW5vXCIsXG4gICAgXCI3XCI6IFwicHFyc1wiLFxuICAgIFwiOFwiOiBcInR1dlwiLFxuICAgIFwiOVwiOiBcInd4eXpcIixcbiAgfTtcbiAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBiYWNrVHJhY2soXCJcIiwgZGlnaXRzKTtcbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBiYWNrVHJhY2soY3VyU3RyOiBzdHJpbmcsIHJlc3RTdHI6IHN0cmluZykge1xuICAgIGlmIChyZXN0U3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goY3VyU3RyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWFwcGluZ0RhdGEgPSBtYXBbcmVzdFN0clswXSBhcyBkaWdpdEtleXNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwcGluZ0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJhY2tUcmFjayhjdXJTdHIgKyBtYXBwaW5nRGF0YVtpXSwgcmVzdFN0ci5zbGljZSgxKSk7XG4gICAgfVxuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwobGV0dGVyQ29tYmluYXRpb25zKFwiXCIpLnNvcnQoKSwgW10uc29ydCgpKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGxldHRlckNvbWJpbmF0aW9ucyhcIjIzXCIpLnNvcnQoKSxcbiAgW1wiYWRcIiwgXCJhZVwiLCBcImFmXCIsIFwiYmRcIiwgXCJiZVwiLCBcImJmXCIsIFwiY2RcIiwgXCJjZVwiLCBcImNmXCJdLnNvcnQoKVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGxldHRlckNvbWJpbmF0aW9ucyhcIjI5NVwiKS5zb3J0KCksXG4gIFtcbiAgICBcImF3alwiLFxuICAgIFwiYXdrXCIsXG4gICAgXCJhd2xcIixcbiAgICBcImF4alwiLFxuICAgIFwiYXhrXCIsXG4gICAgXCJheGxcIixcbiAgICBcImF5alwiLFxuICAgIFwiYXlrXCIsXG4gICAgXCJheWxcIixcbiAgICBcImF6alwiLFxuICAgIFwiYXprXCIsXG4gICAgXCJhemxcIixcbiAgICBcImJ3alwiLFxuICAgIFwiYndrXCIsXG4gICAgXCJid2xcIixcbiAgICBcImJ4alwiLFxuICAgIFwiYnhrXCIsXG4gICAgXCJieGxcIixcbiAgICBcImJ5alwiLFxuICAgIFwiYnlrXCIsXG4gICAgXCJieWxcIixcbiAgICBcImJ6alwiLFxuICAgIFwiYnprXCIsXG4gICAgXCJiemxcIixcbiAgICBcImN3alwiLFxuICAgIFwiY3drXCIsXG4gICAgXCJjd2xcIixcbiAgICBcImN4alwiLFxuICAgIFwiY3hrXCIsXG4gICAgXCJjeGxcIixcbiAgICBcImN5alwiLFxuICAgIFwiY3lrXCIsXG4gICAgXCJjeWxcIixcbiAgICBcImN6alwiLFxuICAgIFwiY3prXCIsXG4gICAgXCJjemxcIixcbiAgXS5zb3J0KClcbik7XG4iXX0=
