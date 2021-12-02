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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTEu5qC55o2u5a2X56ym5Ye6546w6aKR546H5o6S5bqPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81MS7moLnmja7lrZfnrKblh7rnjrDpopHnjofmjpLluo8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdDSTtBQUNKLG9EQUF1QjtBQUV2Qjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDckMsYUFBYTtJQUNiLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFFMUMsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDekIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7SUFDRCxNQUFNLFdBQVcsR0FBRyxnQkFBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsT0FBTyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDekQsT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUM7QUFFRixvREFBNkM7QUFFN0MsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN0RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6K+35bCG5a2X56ym5Liy6YeM55qE5a2X56ym5oyJ54Wn5Ye6546w55qE6aKR546H6ZmN5bqP5o6S5YiX44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6XG5cInRyZWVcIlxuXG7ovpPlh7o6XG5cImVlcnRcIlxuXG7op6Pph4o6XG4nZSflh7rnjrDkuKTmrKHvvIwnciflkowndCfpg73lj6rlh7rnjrDkuIDmrKHjgIJcbuWboOatpCdlJ+W/hemhu+WHuueOsOWcqCdyJ+WSjCd0J+S5i+WJjeOAguatpOWklu+8jFwiZWV0clwi5Lmf5piv5LiA5Liq5pyJ5pWI55qE562U5qGI44CCXG7npLrkvosgMjpcblxu6L6T5YWlOlxuXCJjY2NhYWFcIlxuXG7ovpPlh7o6XG5cImNjY2FhYVwiXG5cbuino+mHijpcbidjJ+WSjCdhJ+mDveWHuueOsOS4ieasoeOAguatpOWklu+8jFwiYWFhY2NjXCLkuZ/mmK/mnInmlYjnmoTnrZTmoYjjgIJcbuazqOaEj1wiY2FjYWNhXCLmmK/kuI3mraPnoa7nmoTvvIzlm6DkuLrnm7jlkIznmoTlrZfmr43lv4XpobvmlL7lnKjkuIDotbfjgIJcbuekuuS+iyAzOlxuXG7ovpPlhaU6XG5cIkFhYmJcIlxuXG7ovpPlh7o6XG5cImJiQWFcIlxuXG7op6Pph4o6XG7mraTlpJbvvIxcImJiYUFcIuS5n+aYr+S4gOS4quacieaViOeahOetlOahiO+8jOS9hlwiQWFiYlwi5piv5LiN5q2j56Gu55qE44CCXG7ms6jmhI8nQSflkownYSfooqvorqTkuLrmmK/kuKTnp43kuI3lkIznmoTlrZfnrKbjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NvcnQtY2hhcmFjdGVycy1ieS1mcmVxdWVuY3lcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBmcmVxdWVuY3lTb3J0ID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICAvLyDlhbblrp7ov5nlsLHmmK8g5qG25o6S5bqP5ZWmXG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gIGZvciAoY29uc3QgY2hhcmFjdGVyIG9mIHMpIHtcbiAgICBpZiAobWFwW2NoYXJhY3Rlcl0gPT0gbnVsbCkge1xuICAgICAgbWFwW2NoYXJhY3Rlcl0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXBbY2hhcmFjdGVyXSsrO1xuICAgIH1cbiAgfVxuICBjb25zdCBzb3J0ZWRQYWlycyA9IF8uc29ydEJ5KF8udG9QYWlycyhtYXApLCBcIlsxXVwiLCBcIlwiKTtcbiAgcmV0dXJuIHNvcnRlZFBhaXJzLnJlZHVjZVJpZ2h0KChwcmUsIFtjaGFyYWN0ZXIsIGNvdW50XSkgPT4ge1xuICAgIHJldHVybiBwcmUgKyBjaGFyYWN0ZXIucmVwZWF0KGNvdW50KTtcbiAgfSwgXCJcIik7XG59O1xuXG5pbXBvcnQgYXNzZXJ0LCB7IHN0cmljdEVxdWFsIH0gZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZnJlcXVlbmN5U29ydChcInRyZWVcIiksIFwiZWVydFwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChmcmVxdWVuY3lTb3J0KFwiYWFhY2NjXCIpLCBcImNjY2FhYVwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChmcmVxdWVuY3lTb3J0KFwiQWFiYlwiKSwgXCJiYmFBXCIpO1xuIl19
