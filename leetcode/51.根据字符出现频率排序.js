"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例 1:

输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
示例 2:

输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
示例 3:

输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-characters-by-frequency
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // 其实这就是 桶排序啦
  const map = {};
  for (const character of s) {
    if (map[character] == null) {
      map[character] = 1;
    } else {
      map[character]++;
    }
  }
  const sortedPairs = lodash_1.default.sortBy(
    lodash_1.default.toPairs(map),
    "[1]",
    ""
  );
  return sortedPairs.reduceRight((pre, [character, count]) => {
    return pre + character.repeat(count);
  }, "");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(frequencySort("tree"), "eert");
assert_1.default.strictEqual(frequencySort("aaaccc"), "cccaaa");
assert_1.default.strictEqual(frequencySort("Aabb"), "bbaA");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTEu5qC55o2u5a2X56ym5Ye6546w6aKR546H5o6S5bqPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81MS7moLnmja7lrZfnrKblh7rnjrDpopHnjofmjpLluo8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdDSTtBQUNKLG9EQUF1QjtBQUV2Qjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDbkMsYUFBYTtJQUNiLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFFMUMsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNILEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7SUFDRCxNQUFNLFdBQVcsR0FBRyxnQkFBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDdkQsT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFHRixvREFBMkM7QUFFM0MsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUNyQixNQUFNLENBQ1QsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDdkIsUUFBUSxDQUNYLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQ3JCLE1BQU0sQ0FDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWtl+espuS4su+8jOivt+WwhuWtl+espuS4sumHjOeahOWtl+espuaMieeFp+WHuueOsOeahOmikeeOh+mZjeW6j+aOkuWIl+OAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOlxuXCJ0cmVlXCJcblxu6L6T5Ye6OlxuXCJlZXJ0XCJcblxu6Kej6YeKOlxuJ2Un5Ye6546w5Lik5qyh77yMJ3In5ZKMJ3Qn6YO95Y+q5Ye6546w5LiA5qyh44CCXG7lm6DmraQnZSflv4Xpobvlh7rnjrDlnKgnciflkowndCfkuYvliY3jgILmraTlpJbvvIxcImVldHJcIuS5n+aYr+S4gOS4quacieaViOeahOetlOahiOOAglxu56S65L6LIDI6XG5cbui+k+WFpTpcblwiY2NjYWFhXCJcblxu6L6T5Ye6OlxuXCJjY2NhYWFcIlxuXG7op6Pph4o6XG4nYyflkownYSfpg73lh7rnjrDkuInmrKHjgILmraTlpJbvvIxcImFhYWNjY1wi5Lmf5piv5pyJ5pWI55qE562U5qGI44CCXG7ms6jmhI9cImNhY2FjYVwi5piv5LiN5q2j56Gu55qE77yM5Zug5Li655u45ZCM55qE5a2X5q+N5b+F6aG75pS+5Zyo5LiA6LW344CCXG7npLrkvosgMzpcblxu6L6T5YWlOlxuXCJBYWJiXCJcblxu6L6T5Ye6OlxuXCJiYkFhXCJcblxu6Kej6YeKOlxu5q2k5aSW77yMXCJiYmFBXCLkuZ/mmK/kuIDkuKrmnInmlYjnmoTnrZTmoYjvvIzkvYZcIkFhYmJcIuaYr+S4jeato+ehrueahOOAglxu5rOo5oSPJ0En5ZKMJ2En6KKr6K6k5Li65piv5Lik56eN5LiN5ZCM55qE5a2X56ym44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zb3J0LWNoYXJhY3RlcnMtYnktZnJlcXVlbmN5XG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZnJlcXVlbmN5U29ydCA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgICAvLyDlhbblrp7ov5nlsLHmmK8g5qG25o6S5bqP5ZWmXG4gICAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBzKSB7XG4gICAgICAgIGlmIChtYXBbY2hhcmFjdGVyXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXBbY2hhcmFjdGVyXSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXBbY2hhcmFjdGVyXSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNvcnRlZFBhaXJzID0gXy5zb3J0QnkoXy50b1BhaXJzKG1hcCksIFwiWzFdXCIsXCJcIik7XG4gICAgcmV0dXJuIHNvcnRlZFBhaXJzLnJlZHVjZVJpZ2h0KChwcmUsIFtjaGFyYWN0ZXIsIGNvdW50XSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJlICsgY2hhcmFjdGVyLnJlcGVhdChjb3VudCk7XG4gICAgfSwgXCJcIik7XG59O1xuXG5cbmltcG9ydCBhc3NlcnQsIHtzdHJpY3RFcXVhbH0gZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZnJlcXVlbmN5U29ydChcInRyZWVcIiksXG4gICAgXCJlZXJ0XCJcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZnJlcXVlbmN5U29ydChcImFhYWNjY1wiKSxcbiAgICBcImNjY2FhYVwiXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGZyZXF1ZW5jeVNvcnQoXCJBYWJiXCIpLFxuICAgIFwiYmJhQVwiXG4pO1xuIl19
