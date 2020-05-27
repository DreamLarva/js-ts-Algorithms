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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQzLuWOi+e8qeWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDQzLuWOi+e8qeWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1REk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxLQUFlO0lBQ3RDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNDOzs7OztTQUtLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLElBQUksRUFBRSxDQUFDO1NBQ1I7YUFBTTtZQUNMLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtZQUNELE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDWixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtLQUNGO0lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNyQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7S0FDRjtJQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLHFCQUFxQjtJQUNyQixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsQ0FBQyxDQUNGLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsUUFBUSxDQUFDO0lBQ1AsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxFQUNGLENBQUMsQ0FDRixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA57uE5a2X56ym77yM5L2/55So5Y6f5Zyw566X5rOV5bCG5YW25Y6L57yp44CCXHJcblxyXG7ljovnvKnlkI7nmoTplb/luqblv4Xpobvlp4vnu4jlsI/kuo7miJbnrYnkuo7ljp/mlbDnu4Tplb/luqbjgIJcclxuXHJcbuaVsOe7hOeahOavj+S4quWFg+e0oOW6lOivpeaYr+mVv+W6puS4ujHCoOeahOWtl+espu+8iOS4jeaYryBpbnQg5pW05pWw57G75Z6L77yJ44CCXHJcblxyXG7lnKjlrozmiJDljp/lnLDkv67mlLnovpPlhaXmlbDnu4TlkI7vvIzov5Tlm57mlbDnu4TnmoTmlrDplb/luqbjgIJcclxuXHJcbsKgXHJcblxyXG7ov5vpmLbvvJpcclxu5L2g6IO95ZCm5LuF5L2/55SoTygxKSDnqbrpl7Top6PlhrPpl67popjvvJ9cclxuXHJcbsKgXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWl77yaXHJcbltcImFcIixcImFcIixcImJcIixcImJcIixcImNcIixcImNcIixcImNcIl1cclxuXHJcbui+k+WHuu+8mlxyXG7ov5Tlm54277yM6L6T5YWl5pWw57uE55qE5YmNNuS4quWtl+espuW6lOivpeaYr++8mltcImFcIixcIjJcIixcImJcIixcIjJcIixcImNcIixcIjNcIl1cclxuXHJcbuivtOaYju+8mlxyXG5cImFhXCLooqtcImEyXCLmm7/ku6PjgIJcImJiXCLooqtcImIyXCLmm7/ku6PjgIJcImNjY1wi6KKrXCJjM1wi5pu/5Luj44CCXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJpcclxuW1wiYVwiXVxyXG5cclxu6L6T5Ye677yaXHJcbui/lOWbnjHvvIzovpPlhaXmlbDnu4TnmoTliY0x5Liq5a2X56ym5bqU6K+l5piv77yaW1wiYVwiXVxyXG5cclxu6K+05piO77yaXHJcbuayoeacieS7u+S9leWtl+espuS4suiiq+abv+S7o+OAglxyXG7npLrkvosgM++8mlxyXG5cclxu6L6T5YWl77yaXHJcbltcImFcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIixcImJcIl1cclxuXHJcbui+k+WHuu+8mlxyXG7ov5Tlm54077yM6L6T5YWl5pWw57uE55qE5YmNNOS4quWtl+espuW6lOivpeaYr++8mltcImFcIixcImJcIixcIjFcIixcIjJcIl3jgIJcclxuXHJcbuivtOaYju+8mlxyXG7nlLHkuo7lrZfnrKZcImFcIuS4jemHjeWkje+8jOaJgOS7peS4jeS8muiiq+WOi+e8qeOAglwiYmJiYmJiYmJiYmJiXCLooqvigJxiMTLigJ3mm7/ku6PjgIJcclxu5rOo5oSP5q+P5Liq5pWw5a2X5Zyo5pWw57uE5Lit6YO95pyJ5a6D6Ieq5bex55qE5L2N572u44CCXHJcbuazqOaEj++8mlxyXG5cclxu5omA5pyJ5a2X56ym6YO95pyJ5LiA5LiqQVNDSUnlgLzlnKhbMzUsIDEyNl3ljLrpl7TlhoXjgIJcclxuMSA8PSBsZW4oY2hhcnMpIDw9IDEwMDDjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3N0cmluZy1jb21wcmVzc2lvblxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Y2hhcmFjdGVyW119IGNoYXJzXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBjb21wcmVzcyA9IGZ1bmN0aW9uIChjaGFyczogc3RyaW5nW10pIHtcclxuICBpZiAoY2hhcnMubGVuZ3RoIDw9IDEpIHJldHVybiBjaGFycy5sZW5ndGg7XHJcbiAgLyoqXHJcbiAgICog5LiJ5Liq5oyH6ZKIXHJcbiAgICog5b2T5YmN55qE5ZCM57G75a2X56ym55qE5byA5aeL5L2N572uXHJcbiAgICog5b2T5YmN5ZCM57G75a2X56ym55qE57uT5p2f5L2N572uXHJcbiAgICog5LiL5LiA5Liq5pWw5o2u5Y+v5YaZ5YWl55qE5L2N572uXHJcbiAgICogKi9cclxuICBsZXQgaGVhZCA9IDA7XHJcbiAgbGV0IHRhaWwgPSAwO1xyXG4gIGxldCB3cml0ZSA9IDE7XHJcbiAgbGV0IHJlc3VsdCA9IDE7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VyID0gY2hhcnNbaV07XHJcbiAgICBjb25zdCBwcmV2ID0gY2hhcnNbaSAtIDFdO1xyXG4gICAgaWYgKGN1ciA9PT0gcHJldikge1xyXG4gICAgICB0YWlsKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGFpbCAtIGhlYWQgIT09IDApIHtcclxuICAgICAgICBjb25zdCBjb3VudF9zdHIgPSBTdHJpbmcodGFpbCAtIGhlYWQgKyAxKTtcclxuICAgICAgICByZXN1bHQgKz0gY291bnRfc3RyLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50X3N0ci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY2hhcnNbd3JpdGUrK10gPSBjb3VudF9zdHJbal07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCArPSAxO1xyXG4gICAgICBjaGFyc1t3cml0ZSsrXSA9IGN1cjtcclxuICAgICAgaGVhZCA9IGk7XHJcbiAgICAgIHRhaWwgPSBpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRhaWwgLSBoZWFkICE9PSAwKSB7XHJcbiAgICBjb25zdCBjb3VudF9zdHIgPSBTdHJpbmcodGFpbCAtIGhlYWQgKyAxKTtcclxuICAgIHJlc3VsdCArPSBjb3VudF9zdHIubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudF9zdHIubGVuZ3RoOyBqKyspIHtcclxuICAgICAgY2hhcnNbd3JpdGUrK10gPSBjb3VudF9zdHJbal07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYXJzLmxlbmd0aCA9IHJlc3VsdDtcclxuICAvLyBjb25zb2xlLmxvZyhjaGFycylcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbXByZXNzKFtcImFcIiwgXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJjXCIsIFwiY1wiLCBcImNcIl0pLCA2KTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICBjb21wcmVzcyhbXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCJdKSxcclxuICA0XHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgY29tcHJlc3MoW1xyXG4gICAgXCJhXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImNcIixcclxuICAgIFwiY1wiLFxyXG4gIF0pLFxyXG4gIDZcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb21wcmVzcyhbXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImFcIiwgXCJhXCJdKSwgNik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY29tcHJlc3MoW1wiYVwiLCBcImFcIiwgXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJhXCIsIFwiYVwiXSksIDYpO1xyXG4iXX0=