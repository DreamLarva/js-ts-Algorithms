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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length <= 1)
        return chars.length;
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
        }
        else {
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
assert_1.default.deepStrictEqual(compress(["a", "a", "b", "b", "c", "c", "c"]), 6);
assert_1.default.deepStrictEqual(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]), 4);
assert_1.default.deepStrictEqual(compress([
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
]), 6);
assert_1.default.deepStrictEqual(compress(["a", "a", "a", "b", "b", "a", "a"]), 6);
assert_1.default.deepStrictEqual(compress(["a", "a", "a", "b", "b", "a", "a"]), 6);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQzLuWOi+e8qeWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDQzLuWOi+e8qeWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1REk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxLQUFlO0lBQ3RDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNDOzs7OztTQUtLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLElBQUksRUFBRSxDQUFDO1NBQ1I7YUFBTTtZQUNMLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtZQUNELE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDWixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtLQUNGO0lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNyQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7S0FDRjtJQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLHFCQUFxQjtJQUNyQixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsQ0FBQyxDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsUUFBUSxDQUFDO0lBQ1AsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOe7hOWtl+espu+8jOS9v+eUqOWOn+WcsOeul+azleWwhuWFtuWOi+e8qeOAglxuXG7ljovnvKnlkI7nmoTplb/luqblv4Xpobvlp4vnu4jlsI/kuo7miJbnrYnkuo7ljp/mlbDnu4Tplb/luqbjgIJcblxu5pWw57uE55qE5q+P5Liq5YWD57Sg5bqU6K+l5piv6ZW/5bqm5Li6McKg55qE5a2X56ym77yI5LiN5pivIGludCDmlbTmlbDnsbvlnovvvInjgIJcblxu5Zyo5a6M5oiQ5Y6f5Zyw5L+u5pS56L6T5YWl5pWw57uE5ZCO77yM6L+U5Zue5pWw57uE55qE5paw6ZW/5bqm44CCXG5cbsKgXG5cbui/m+mYtu+8mlxu5L2g6IO95ZCm5LuF5L2/55SoTygxKSDnqbrpl7Top6PlhrPpl67popjvvJ9cblxuwqBcblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaXG5bXCJhXCIsXCJhXCIsXCJiXCIsXCJiXCIsXCJjXCIsXCJjXCIsXCJjXCJdXG5cbui+k+WHuu+8mlxu6L+U5ZueNu+8jOi+k+WFpeaVsOe7hOeahOWJjTbkuKrlrZfnrKblupTor6XmmK/vvJpbXCJhXCIsXCIyXCIsXCJiXCIsXCIyXCIsXCJjXCIsXCIzXCJdXG5cbuivtOaYju+8mlxuXCJhYVwi6KKrXCJhMlwi5pu/5Luj44CCXCJiYlwi6KKrXCJiMlwi5pu/5Luj44CCXCJjY2NcIuiiq1wiYzNcIuabv+S7o+OAglxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaXG5bXCJhXCJdXG5cbui+k+WHuu+8mlxu6L+U5ZueMe+8jOi+k+WFpeaVsOe7hOeahOWJjTHkuKrlrZfnrKblupTor6XmmK/vvJpbXCJhXCJdXG5cbuivtOaYju+8mlxu5rKh5pyJ5Lu75L2V5a2X56ym5Liy6KKr5pu/5Luj44CCXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpcbltcImFcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIl1cblxu6L6T5Ye677yaXG7ov5Tlm54077yM6L6T5YWl5pWw57uE55qE5YmNNOS4quWtl+espuW6lOivpeaYr++8mltcImFcIixcImJcIixcIjFcIixcIjJcIl3jgIJcblxu6K+05piO77yaXG7nlLHkuo7lrZfnrKZcImFcIuS4jemHjeWkje+8jOaJgOS7peS4jeS8muiiq+WOi+e8qeOAglwiYmJiYmJiYmJiYmJiXCLooqvigJxiMTLigJ3mm7/ku6PjgIJcbuazqOaEj+avj+S4quaVsOWtl+WcqOaVsOe7hOS4remDveacieWug+iHquW3seeahOS9jee9ruOAglxu5rOo5oSP77yaXG5cbuaJgOacieWtl+espumDveacieS4gOS4qkFTQ0lJ5YC85ZyoWzM1LCAxMjZd5Yy66Ze05YaF44CCXG4xIDw9IGxlbihjaGFycykgPD0gMTAwMOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3RyaW5nLWNvbXByZXNzaW9uXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge2NoYXJhY3RlcltdfSBjaGFyc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY29tcHJlc3MgPSBmdW5jdGlvbiAoY2hhcnM6IHN0cmluZ1tdKSB7XG4gIGlmIChjaGFycy5sZW5ndGggPD0gMSkgcmV0dXJuIGNoYXJzLmxlbmd0aDtcbiAgLyoqXG4gICAqIOS4ieS4quaMh+mSiFxuICAgKiDlvZPliY3nmoTlkIznsbvlrZfnrKbnmoTlvIDlp4vkvY3nva5cbiAgICog5b2T5YmN5ZCM57G75a2X56ym55qE57uT5p2f5L2N572uXG4gICAqIOS4i+S4gOS4quaVsOaNruWPr+WGmeWFpeeahOS9jee9rlxuICAgKiAqL1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IHdyaXRlID0gMTtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSBjaGFyc1tpXTtcbiAgICBjb25zdCBwcmV2ID0gY2hhcnNbaSAtIDFdO1xuICAgIGlmIChjdXIgPT09IHByZXYpIHtcbiAgICAgIHRhaWwrKztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRhaWwgLSBoZWFkICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGNvdW50X3N0ciA9IFN0cmluZyh0YWlsIC0gaGVhZCArIDEpO1xuICAgICAgICByZXN1bHQgKz0gY291bnRfc3RyLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudF9zdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjaGFyc1t3cml0ZSsrXSA9IGNvdW50X3N0cltqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0ICs9IDE7XG4gICAgICBjaGFyc1t3cml0ZSsrXSA9IGN1cjtcbiAgICAgIGhlYWQgPSBpO1xuICAgICAgdGFpbCA9IGk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRhaWwgLSBoZWFkICE9PSAwKSB7XG4gICAgY29uc3QgY291bnRfc3RyID0gU3RyaW5nKHRhaWwgLSBoZWFkICsgMSk7XG4gICAgcmVzdWx0ICs9IGNvdW50X3N0ci5sZW5ndGg7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudF9zdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNoYXJzW3dyaXRlKytdID0gY291bnRfc3RyW2pdO1xuICAgIH1cbiAgfVxuICBjaGFycy5sZW5ndGggPSByZXN1bHQ7XG4gIC8vIGNvbnNvbGUubG9nKGNoYXJzKVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY29tcHJlc3MoW1wiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImNcIiwgXCJjXCIsIFwiY1wiXSksIDYpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgY29tcHJlc3MoW1wiYVwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiXSksXG4gIDRcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBjb21wcmVzcyhbXG4gICAgXCJhXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiXCIsXG4gICAgXCJjXCIsXG4gICAgXCJjXCIsXG4gIF0pLFxuICA2XG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb21wcmVzcyhbXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImFcIiwgXCJhXCJdKSwgNik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbXByZXNzKFtcImFcIiwgXCJhXCIsIFwiYVwiLCBcImJcIiwgXCJiXCIsIFwiYVwiLCBcImFcIl0pLCA2KTtcbiJdfQ==