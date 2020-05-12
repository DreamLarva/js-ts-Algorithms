"use strict";
/*
给定一组字符，使用原地算法将其压缩。

压缩后的长度必须始终小于或等于原数组长度。

数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

在完成原地修改输入数组后，返回数组的新长度。

 

进阶：
你能否仅使用O(1) 空间解决问题？

 

示例 1：

输入：
["a","a","b","b","c","c","c"]

输出：
返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

说明：
"aa"被"a2"替代。"bb"被"b2"替代。"ccc"被"c3"替代。
示例 2：

输入：
["a"]

输出：
返回1，输入数组的前1个字符应该是：["a"]

说明：
没有任何字符串被替代。
示例 3：

输入：
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

输出：
返回4，输入数组的前4个字符应该是：["a","b","1","2"]。

说明：
由于字符"a"不重复，所以不会被压缩。"bbbbbbbbbbbb"被“b12”替代。
注意每个数字在数组中都有它自己的位置。
注意：

所有字符都有一个ASCII值在[35, 126]区间内。
1 <= len(chars) <= 1000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/string-compression
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length <= 1) return chars.length;
  /**
   * 三个指针
   * 当前的同类字符的开始位置
   * 当前同类字符的结束位置
   * 下一个数据可写入的位置
   * */
  let head = 0;
  let tail = 0;
  let write = 1;
  let result = 1;
  for (let i = 1; i < chars.length; i++) {
    const cur = chars[i];
    const prev = chars[i - 1];
    if (cur === prev) {
      tail++;
    } else {
      if (tail - head !== 0) {
        const count_str = String(tail - head + 1);
        result += count_str.length;
        for (let j = 0; j < count_str.length; j++) {
          chars[write++] = count_str[j];
        }
      }
      result += 1;
      chars[write++] = cur;
      head = i;
      tail = i;
    }
  }
  if (tail - head !== 0) {
    const count_str = String(tail - head + 1);
    result += count_str.length;
    for (let j = 0; j < count_str.length; j++) {
      chars[write++] = count_str[j];
    }
  }
  chars.length = result;
  // console.log(chars)
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  compress(["a", "a", "b", "b", "c", "c", "c"]),
  6
);
assert_1.default.deepStrictEqual(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
  4
);
assert_1.default.deepStrictEqual(
  compress([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "c",
    "c",
  ]),
  6
);
assert_1.default.deepStrictEqual(
  compress(["a", "a", "a", "b", "b", "a", "a"]),
  6
);
assert_1.default.deepStrictEqual(
  compress(["a", "a", "a", "b", "b", "a", "a"]),
  6
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQzLuWOi+e8qeWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDQzLuWOi+e8qeWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1REk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxLQUFlO0lBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNDOzs7OztTQUtLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUM7U0FDVjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1lBQ0QsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNaLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNaO0tBQ0o7SUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztLQUNKO0lBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIscUJBQXFCO0lBQ3JCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUNuRixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOe7hOWtl+espu+8jOS9v+eUqOWOn+WcsOeul+azleWwhuWFtuWOi+e8qeOAglxyXG5cclxu5Y6L57yp5ZCO55qE6ZW/5bqm5b+F6aG75aeL57uI5bCP5LqO5oiW562J5LqO5Y6f5pWw57uE6ZW/5bqm44CCXHJcblxyXG7mlbDnu4TnmoTmr4/kuKrlhYPntKDlupTor6XmmK/plb/luqbkuLoxwqDnmoTlrZfnrKbvvIjkuI3mmK8gaW50IOaVtOaVsOexu+Wei++8ieOAglxyXG5cclxu5Zyo5a6M5oiQ5Y6f5Zyw5L+u5pS56L6T5YWl5pWw57uE5ZCO77yM6L+U5Zue5pWw57uE55qE5paw6ZW/5bqm44CCXHJcblxyXG7CoFxyXG5cclxu6L+b6Zi277yaXHJcbuS9oOiDveWQpuS7heS9v+eUqE8oMSkg56m66Ze06Kej5Yaz6Zeu6aKY77yfXHJcblxyXG7CoFxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpe+8mlxyXG5bXCJhXCIsXCJhXCIsXCJiXCIsXCJiXCIsXCJjXCIsXCJjXCIsXCJjXCJdXHJcblxyXG7ovpPlh7rvvJpcclxu6L+U5ZueNu+8jOi+k+WFpeaVsOe7hOeahOWJjTbkuKrlrZfnrKblupTor6XmmK/vvJpbXCJhXCIsXCIyXCIsXCJiXCIsXCIyXCIsXCJjXCIsXCIzXCJdXHJcblxyXG7or7TmmI7vvJpcclxuXCJhYVwi6KKrXCJhMlwi5pu/5Luj44CCXCJiYlwi6KKrXCJiMlwi5pu/5Luj44CCXCJjY2NcIuiiq1wiYzNcIuabv+S7o+OAglxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWl77yaXHJcbltcImFcIl1cclxuXHJcbui+k+WHuu+8mlxyXG7ov5Tlm54x77yM6L6T5YWl5pWw57uE55qE5YmNMeS4quWtl+espuW6lOivpeaYr++8mltcImFcIl1cclxuXHJcbuivtOaYju+8mlxyXG7msqHmnInku7vkvZXlrZfnrKbkuLLooqvmm7/ku6PjgIJcclxu56S65L6LIDPvvJpcclxuXHJcbui+k+WFpe+8mlxyXG5bXCJhXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCJdXHJcblxyXG7ovpPlh7rvvJpcclxu6L+U5ZueNO+8jOi+k+WFpeaVsOe7hOeahOWJjTTkuKrlrZfnrKblupTor6XmmK/vvJpbXCJhXCIsXCJiXCIsXCIxXCIsXCIyXCJd44CCXHJcblxyXG7or7TmmI7vvJpcclxu55Sx5LqO5a2X56ymXCJhXCLkuI3ph43lpI3vvIzmiYDku6XkuI3kvJrooqvljovnvKnjgIJcImJiYmJiYmJiYmJiYlwi6KKr4oCcYjEy4oCd5pu/5Luj44CCXHJcbuazqOaEj+avj+S4quaVsOWtl+WcqOaVsOe7hOS4remDveacieWug+iHquW3seeahOS9jee9ruOAglxyXG7ms6jmhI/vvJpcclxuXHJcbuaJgOacieWtl+espumDveacieS4gOS4qkFTQ0lJ5YC85ZyoWzM1LCAxMjZd5Yy66Ze05YaF44CCXHJcbjEgPD0gbGVuKGNoYXJzKSA8PSAxMDAw44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zdHJpbmctY29tcHJlc3Npb25cclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2NoYXJhY3RlcltdfSBjaGFyc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgY29tcHJlc3MgPSBmdW5jdGlvbiAoY2hhcnM6IHN0cmluZ1tdKSB7XHJcbiAgICBpZiAoY2hhcnMubGVuZ3RoIDw9IDEpIHJldHVybiBjaGFycy5sZW5ndGg7XHJcbiAgICAvKipcclxuICAgICAqIOS4ieS4quaMh+mSiFxyXG4gICAgICog5b2T5YmN55qE5ZCM57G75a2X56ym55qE5byA5aeL5L2N572uXHJcbiAgICAgKiDlvZPliY3lkIznsbvlrZfnrKbnmoTnu5PmnZ/kvY3nva5cclxuICAgICAqIOS4i+S4gOS4quaVsOaNruWPr+WGmeWFpeeahOS9jee9rlxyXG4gICAgICogKi9cclxuICAgIGxldCBoZWFkID0gMDtcclxuICAgIGxldCB0YWlsID0gMDtcclxuICAgIGxldCB3cml0ZSA9IDE7XHJcbiAgICBsZXQgcmVzdWx0ID0gMTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjdXIgPSBjaGFyc1tpXTtcclxuICAgICAgICBjb25zdCBwcmV2ID0gY2hhcnNbaSAtIDFdO1xyXG4gICAgICAgIGlmIChjdXIgPT09IHByZXYpIHtcclxuICAgICAgICAgICAgdGFpbCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0YWlsIC0gaGVhZCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRfc3RyID0gU3RyaW5nKHRhaWwgLSBoZWFkICsgMSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY291bnRfc3RyLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRfc3RyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNbd3JpdGUrK10gPSBjb3VudF9zdHJbal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ICs9IDE7XHJcbiAgICAgICAgICAgIGNoYXJzW3dyaXRlKytdID0gY3VyO1xyXG4gICAgICAgICAgICBoZWFkID0gaTtcclxuICAgICAgICAgICAgdGFpbCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YWlsIC0gaGVhZCAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50X3N0ciA9IFN0cmluZyh0YWlsIC0gaGVhZCArIDEpO1xyXG4gICAgICAgIHJlc3VsdCArPSBjb3VudF9zdHIubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRfc3RyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNoYXJzW3dyaXRlKytdID0gY291bnRfc3RyW2pdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYXJzLmxlbmd0aCA9IHJlc3VsdDtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNoYXJzKVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBjb21wcmVzcyhbXCJhXCIsIFwiYVwiLCBcImJcIiwgXCJiXCIsIFwiY1wiLCBcImNcIiwgXCJjXCJdKSxcclxuICAgIDYsXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBjb21wcmVzcyhbXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCJdKSxcclxuICAgIDQsXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBjb21wcmVzcyhbXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsXCJjXCIsXCJjXCJdKSxcclxuICAgIDYsXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBjb21wcmVzcyhbXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImFcIiwgXCJhXCJdKSxcclxuICAgIDYsXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBjb21wcmVzcyhbXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImFcIiwgXCJhXCJdKSxcclxuICAgIDYsXHJcbik7XHJcbiJdfQ==
