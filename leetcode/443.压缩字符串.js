"use strict";
/*
给定一组字符，使用原地算法将其压缩。

压缩后的长度必须始终小于或等于原数组长度。

数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQzLuWOi+e8qeWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDQzLuWOi+e8qeWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1REk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxLQUFlO0lBQ3RDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNDOzs7OztTQUtLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLElBQUksRUFBRSxDQUFDO1NBQ1I7YUFBTTtZQUNMLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtZQUNELE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDWixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtLQUNGO0lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNyQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7S0FDRjtJQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLHFCQUFxQjtJQUNyQixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsQ0FBQyxDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsUUFBUSxDQUFDO0lBQ1AsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOe7hOWtl+espu+8jOS9v+eUqOWOn+WcsOeul+azleWwhuWFtuWOi+e8qeOAglxuXG7ljovnvKnlkI7nmoTplb/luqblv4Xpobvlp4vnu4jlsI/kuo7miJbnrYnkuo7ljp/mlbDnu4Tplb/luqbjgIJcblxu5pWw57uE55qE5q+P5Liq5YWD57Sg5bqU6K+l5piv6ZW/5bqm5Li6MSDnmoTlrZfnrKbvvIjkuI3mmK8gaW50IOaVtOaVsOexu+Wei++8ieOAglxuXG7lnKjlrozmiJDljp/lnLDkv67mlLnovpPlhaXmlbDnu4TlkI7vvIzov5Tlm57mlbDnu4TnmoTmlrDplb/luqbjgIJcblxuXG5cbui/m+mYtu+8mlxu5L2g6IO95ZCm5LuF5L2/55SoTygxKSDnqbrpl7Top6PlhrPpl67popjvvJ9cblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mlxuW1wiYVwiLFwiYVwiLFwiYlwiLFwiYlwiLFwiY1wiLFwiY1wiLFwiY1wiXVxuXG7ovpPlh7rvvJpcbui/lOWbnjbvvIzovpPlhaXmlbDnu4TnmoTliY025Liq5a2X56ym5bqU6K+l5piv77yaW1wiYVwiLFwiMlwiLFwiYlwiLFwiMlwiLFwiY1wiLFwiM1wiXVxuXG7or7TmmI7vvJpcblwiYWFcIuiiq1wiYTJcIuabv+S7o+OAglwiYmJcIuiiq1wiYjJcIuabv+S7o+OAglwiY2NjXCLooqtcImMzXCLmm7/ku6PjgIJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mlxuW1wiYVwiXVxuXG7ovpPlh7rvvJpcbui/lOWbnjHvvIzovpPlhaXmlbDnu4TnmoTliY0x5Liq5a2X56ym5bqU6K+l5piv77yaW1wiYVwiXVxuXG7or7TmmI7vvJpcbuayoeacieS7u+S9leWtl+espuS4suiiq+abv+S7o+OAglxu56S65L6LIDPvvJpcblxu6L6T5YWl77yaXG5bXCJhXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCJdXG5cbui+k+WHuu+8mlxu6L+U5ZueNO+8jOi+k+WFpeaVsOe7hOeahOWJjTTkuKrlrZfnrKblupTor6XmmK/vvJpbXCJhXCIsXCJiXCIsXCIxXCIsXCIyXCJd44CCXG5cbuivtOaYju+8mlxu55Sx5LqO5a2X56ymXCJhXCLkuI3ph43lpI3vvIzmiYDku6XkuI3kvJrooqvljovnvKnjgIJcImJiYmJiYmJiYmJiYlwi6KKr4oCcYjEy4oCd5pu/5Luj44CCXG7ms6jmhI/mr4/kuKrmlbDlrZflnKjmlbDnu4TkuK3pg73mnInlroPoh6rlt7HnmoTkvY3nva7jgIJcbuazqOaEj++8mlxuXG7miYDmnInlrZfnrKbpg73mnInkuIDkuKpBU0NJSeWAvOWcqFszNSwgMTI2XeWMuumXtOWGheOAglxuMSA8PSBsZW4oY2hhcnMpIDw9IDEwMDDjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3N0cmluZy1jb21wcmVzc2lvblxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtjaGFyYWN0ZXJbXX0gY2hhcnNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNvbXByZXNzID0gZnVuY3Rpb24gKGNoYXJzOiBzdHJpbmdbXSkge1xuICBpZiAoY2hhcnMubGVuZ3RoIDw9IDEpIHJldHVybiBjaGFycy5sZW5ndGg7XG4gIC8qKlxuICAgKiDkuInkuKrmjIfpkohcbiAgICog5b2T5YmN55qE5ZCM57G75a2X56ym55qE5byA5aeL5L2N572uXG4gICAqIOW9k+WJjeWQjOexu+Wtl+espueahOe7k+adn+S9jee9rlxuICAgKiDkuIvkuIDkuKrmlbDmja7lj6/lhpnlhaXnmoTkvY3nva5cbiAgICogKi9cbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IDA7XG4gIGxldCB3cml0ZSA9IDE7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gY2hhcnNbaV07XG4gICAgY29uc3QgcHJldiA9IGNoYXJzW2kgLSAxXTtcbiAgICBpZiAoY3VyID09PSBwcmV2KSB7XG4gICAgICB0YWlsKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0YWlsIC0gaGVhZCAhPT0gMCkge1xuICAgICAgICBjb25zdCBjb3VudF9zdHIgPSBTdHJpbmcodGFpbCAtIGhlYWQgKyAxKTtcbiAgICAgICAgcmVzdWx0ICs9IGNvdW50X3N0ci5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRfc3RyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2hhcnNbd3JpdGUrK10gPSBjb3VudF9zdHJbal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAxO1xuICAgICAgY2hhcnNbd3JpdGUrK10gPSBjdXI7XG4gICAgICBoZWFkID0gaTtcbiAgICAgIHRhaWwgPSBpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0YWlsIC0gaGVhZCAhPT0gMCkge1xuICAgIGNvbnN0IGNvdW50X3N0ciA9IFN0cmluZyh0YWlsIC0gaGVhZCArIDEpO1xuICAgIHJlc3VsdCArPSBjb3VudF9zdHIubGVuZ3RoO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRfc3RyLmxlbmd0aDsgaisrKSB7XG4gICAgICBjaGFyc1t3cml0ZSsrXSA9IGNvdW50X3N0cltqXTtcbiAgICB9XG4gIH1cbiAgY2hhcnMubGVuZ3RoID0gcmVzdWx0O1xuICAvLyBjb25zb2xlLmxvZyhjaGFycylcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbXByZXNzKFtcImFcIiwgXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJjXCIsIFwiY1wiLCBcImNcIl0pLCA2KTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGNvbXByZXNzKFtcImFcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIl0pLFxuICA0XG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgY29tcHJlc3MoW1xuICAgIFwiYVwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiYlwiLFxuICAgIFwiY1wiLFxuICAgIFwiY1wiLFxuICBdKSxcbiAgNlxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY29tcHJlc3MoW1wiYVwiLCBcImFcIiwgXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJhXCIsIFwiYVwiXSksIDYpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb21wcmVzcyhbXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImFcIiwgXCJhXCJdKSwgNik7XG4iXX0=
