"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。



示例 1：

输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：["cool","lock","cook"]
输出：["c","o"]


提示：

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string[]} A
 * @return {string[]}
 */
const lodash_1 = __importDefault(require("lodash"));
var commonChars = function (A) {
  const map = {};
  for (const character of A[0]) {
    map[character] = map[character] == null ? 1 : map[character] + 1;
  }
  if (A.length !== 1) {
    for (let i = 1; i < A.length; i++) {
      const _map = {};
      for (const character of A[i]) {
        _map[character] = _map[character] == null ? 1 : _map[character] + 1;
      }
      for (const [key, value] of Object.entries(map)) {
        map[key] = Math.min(value, _map[key] || 0);
      }
    }
  }
  const result = [];
  for (const [key, value] of Object.entries(map)) {
    lodash_1.default.times(value, () => result.push(key));
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(commonChars(["bella", "label", "roller"]), [
  "e",
  "l",
  "l",
]);
assert_1.default.deepStrictEqual(commonChars(["cool", "lock", "cook"]), [
  "c",
  "o",
]);
assert_1.default.deepStrictEqual(
  commonChars([
    "bcaddcdd",
    "cbcdccdd",
    "ddccbdda",
    "dacbbdad",
    "dababdcb",
    "bccbdaad",
    "dbccbabd",
    "accdddda",
  ]),
  ["c", "d", "d"]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwMi7mn6Xmib7luLjnlKjlrZfnrKYuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMDIu5p+l5om+5bi455So5a2X56ymLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0o7OztHQUdHO0FBQ0gsb0RBQXVCO0FBRXZCLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBVztJQUNuQyxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBRTFDLEtBQUssTUFBTSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzFCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEU7SUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxHQUE4QixFQUFFLENBQUM7WUFDM0MsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkU7WUFFRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM5QztTQUVKO0tBQ0o7SUFFRCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDNUMsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUUxQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUN2QyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQ2hCLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQyxFQUNuQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FDWixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFdBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxFQUN0RyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LuF5pyJ5bCP5YaZ5a2X5q+N57uE5oiQ55qE5a2X56ym5Liy5pWw57uEIEHvvIzov5Tlm57liJfooajkuK3nmoTmr4/kuKrlrZfnrKbkuLLkuK3pg73mmL7npLrnmoTlhajpg6jlrZfnrKbvvIjljIXmi6zph43lpI3lrZfnrKbvvInnu4TmiJDnmoTliJfooajjgILkvovlpoLvvIzlpoLmnpzkuIDkuKrlrZfnrKblnKjmr4/kuKrlrZfnrKbkuLLkuK3lh7rnjrAgMyDmrKHvvIzkvYbkuI3mmK8gNCDmrKHvvIzliJnpnIDopoHlnKjmnIDnu4jnrZTmoYjkuK3ljIXlkKvor6XlrZfnrKYgMyDmrKHjgIJcblxu5L2g5Y+v5Lul5oyJ5Lu75oSP6aG65bqP6L+U5Zue562U5qGI44CCXG5cbsKgXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mltcImJlbGxhXCIsXCJsYWJlbFwiLFwicm9sbGVyXCJdXG7ovpPlh7rvvJpbXCJlXCIsXCJsXCIsXCJsXCJdXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpbXCJjb29sXCIsXCJsb2NrXCIsXCJjb29rXCJdXG7ovpPlh7rvvJpbXCJjXCIsXCJvXCJdXG7CoFxuXG7mj5DnpLrvvJpcblxuMSA8PSBBLmxlbmd0aCA8PSAxMDBcbjEgPD0gQVtpXS5sZW5ndGggPD0gMTAwXG5BW2ldW2pdIOaYr+Wwj+WGmeWtl+avjVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZmluZC1jb21tb24tY2hhcmFjdGVyc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IEFcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbnZhciBjb21tb25DaGFycyA9IGZ1bmN0aW9uIChBOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2YgQVswXSkge1xuICAgICAgICBtYXBbY2hhcmFjdGVyXSA9IG1hcFtjaGFyYWN0ZXJdID09IG51bGwgPyAxIDogbWFwW2NoYXJhY3Rlcl0gKyAxO1xuICAgIH1cbiAgICBpZiAoQS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBfbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBBW2ldKSB7XG4gICAgICAgICAgICAgICAgX21hcFtjaGFyYWN0ZXJdID0gX21hcFtjaGFyYWN0ZXJdID09IG51bGwgPyAxIDogX21hcFtjaGFyYWN0ZXJdICsgMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWFwKSkge1xuICAgICAgICAgICAgICAgIG1hcFtrZXldID0gTWF0aC5taW4odmFsdWUsIF9tYXBba2V5XSB8fCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1hcCkpIHtcbiAgICAgICAgXy50aW1lcyh2YWx1ZSwgKCkgPT4gcmVzdWx0LnB1c2goa2V5KSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgY29tbW9uQ2hhcnMoW1wiYmVsbGFcIixcImxhYmVsXCIsXCJyb2xsZXJcIl0pLFxuICAgIFtcImVcIixcImxcIixcImxcIl1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGNvbW1vbkNoYXJzKFtcImNvb2xcIixcImxvY2tcIixcImNvb2tcIl0pLFxuICAgIFtcImNcIixcIm9cIl1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGNvbW1vbkNoYXJzKFtcImJjYWRkY2RkXCIsXCJjYmNkY2NkZFwiLFwiZGRjY2JkZGFcIixcImRhY2JiZGFkXCIsXCJkYWJhYmRjYlwiLFwiYmNjYmRhYWRcIixcImRiY2NiYWJkXCIsXCJhY2NkZGRkYVwiXSksXG4gICAgW1wiY1wiLFwiZFwiLFwiZFwiXVxuKTtcbiJdfQ==
