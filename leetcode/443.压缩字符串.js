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
assert_1.default.deepStrictEqual(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "c", "c"]), 6);
assert_1.default.deepStrictEqual(compress(["a", "a", "a", "b", "b", "a", "a"]), 6);
assert_1.default.deepStrictEqual(compress(["a", "a", "a", "b", "b", "a", "a"]), 6);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQzLuWOi+e8qeWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDQzLuWOi+e8qeWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1REk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxLQUFlO0lBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNDOzs7OztTQUtLO0lBQ0wsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2QsSUFBSSxFQUFFLENBQUM7U0FDVjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1lBQ0QsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNaLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNaO0tBQ0o7SUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztLQUNKO0lBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIscUJBQXFCO0lBQ3JCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDN0MsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFDM0UsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUNuRixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDnu4TlrZfnrKbvvIzkvb/nlKjljp/lnLDnrpfms5XlsIblhbbljovnvKnjgIJcblxu5Y6L57yp5ZCO55qE6ZW/5bqm5b+F6aG75aeL57uI5bCP5LqO5oiW562J5LqO5Y6f5pWw57uE6ZW/5bqm44CCXG5cbuaVsOe7hOeahOavj+S4quWFg+e0oOW6lOivpeaYr+mVv+W6puS4ujHCoOeahOWtl+espu+8iOS4jeaYryBpbnQg5pW05pWw57G75Z6L77yJ44CCXG5cbuWcqOWujOaIkOWOn+WcsOS/ruaUuei+k+WFpeaVsOe7hOWQju+8jOi/lOWbnuaVsOe7hOeahOaWsOmVv+W6puOAglxuXG7CoFxuXG7ov5vpmLbvvJpcbuS9oOiDveWQpuS7heS9v+eUqE8oMSkg56m66Ze06Kej5Yaz6Zeu6aKY77yfXG5cbsKgXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mlxuW1wiYVwiLFwiYVwiLFwiYlwiLFwiYlwiLFwiY1wiLFwiY1wiLFwiY1wiXVxuXG7ovpPlh7rvvJpcbui/lOWbnjbvvIzovpPlhaXmlbDnu4TnmoTliY025Liq5a2X56ym5bqU6K+l5piv77yaW1wiYVwiLFwiMlwiLFwiYlwiLFwiMlwiLFwiY1wiLFwiM1wiXVxuXG7or7TmmI7vvJpcblwiYWFcIuiiq1wiYTJcIuabv+S7o+OAglwiYmJcIuiiq1wiYjJcIuabv+S7o+OAglwiY2NjXCLooqtcImMzXCLmm7/ku6PjgIJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mlxuW1wiYVwiXVxuXG7ovpPlh7rvvJpcbui/lOWbnjHvvIzovpPlhaXmlbDnu4TnmoTliY0x5Liq5a2X56ym5bqU6K+l5piv77yaW1wiYVwiXVxuXG7or7TmmI7vvJpcbuayoeacieS7u+S9leWtl+espuS4suiiq+abv+S7o+OAglxu56S65L6LIDPvvJpcblxu6L6T5YWl77yaXG5bXCJhXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCIsXCJiXCJdXG5cbui+k+WHuu+8mlxu6L+U5ZueNO+8jOi+k+WFpeaVsOe7hOeahOWJjTTkuKrlrZfnrKblupTor6XmmK/vvJpbXCJhXCIsXCJiXCIsXCIxXCIsXCIyXCJd44CCXG5cbuivtOaYju+8mlxu55Sx5LqO5a2X56ymXCJhXCLkuI3ph43lpI3vvIzmiYDku6XkuI3kvJrooqvljovnvKnjgIJcImJiYmJiYmJiYmJiYlwi6KKr4oCcYjEy4oCd5pu/5Luj44CCXG7ms6jmhI/mr4/kuKrmlbDlrZflnKjmlbDnu4TkuK3pg73mnInlroPoh6rlt7HnmoTkvY3nva7jgIJcbuazqOaEj++8mlxuXG7miYDmnInlrZfnrKbpg73mnInkuIDkuKpBU0NJSeWAvOWcqFszNSwgMTI2XeWMuumXtOWGheOAglxuMSA8PSBsZW4oY2hhcnMpIDw9IDEwMDDjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3N0cmluZy1jb21wcmVzc2lvblxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtjaGFyYWN0ZXJbXX0gY2hhcnNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNvbXByZXNzID0gZnVuY3Rpb24gKGNoYXJzOiBzdHJpbmdbXSkge1xuICAgIGlmIChjaGFycy5sZW5ndGggPD0gMSkgcmV0dXJuIGNoYXJzLmxlbmd0aDtcbiAgICAvKipcbiAgICAgKiDkuInkuKrmjIfpkohcbiAgICAgKiDlvZPliY3nmoTlkIznsbvlrZfnrKbnmoTlvIDlp4vkvY3nva5cbiAgICAgKiDlvZPliY3lkIznsbvlrZfnrKbnmoTnu5PmnZ/kvY3nva5cbiAgICAgKiDkuIvkuIDkuKrmlbDmja7lj6/lhpnlhaXnmoTkvY3nva5cbiAgICAgKiAqL1xuICAgIGxldCBoZWFkID0gMDtcbiAgICBsZXQgdGFpbCA9IDA7XG4gICAgbGV0IHdyaXRlID0gMTtcbiAgICBsZXQgcmVzdWx0ID0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1ciA9IGNoYXJzW2ldO1xuICAgICAgICBjb25zdCBwcmV2ID0gY2hhcnNbaSAtIDFdO1xuICAgICAgICBpZiAoY3VyID09PSBwcmV2KSB7XG4gICAgICAgICAgICB0YWlsKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFpbCAtIGhlYWQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudF9zdHIgPSBTdHJpbmcodGFpbCAtIGhlYWQgKyAxKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY291bnRfc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50X3N0ci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc1t3cml0ZSsrXSA9IGNvdW50X3N0cltqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gMTtcbiAgICAgICAgICAgIGNoYXJzW3dyaXRlKytdID0gY3VyO1xuICAgICAgICAgICAgaGVhZCA9IGk7XG4gICAgICAgICAgICB0YWlsID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0YWlsIC0gaGVhZCAhPT0gMCkge1xuICAgICAgICBjb25zdCBjb3VudF9zdHIgPSBTdHJpbmcodGFpbCAtIGhlYWQgKyAxKTtcbiAgICAgICAgcmVzdWx0ICs9IGNvdW50X3N0ci5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnRfc3RyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjaGFyc1t3cml0ZSsrXSA9IGNvdW50X3N0cltqXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFycy5sZW5ndGggPSByZXN1bHQ7XG4gICAgLy8gY29uc29sZS5sb2coY2hhcnMpXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgY29tcHJlc3MoW1wiYVwiLCBcImFcIiwgXCJiXCIsIFwiYlwiLCBcImNcIiwgXCJjXCIsIFwiY1wiXSksXG4gICAgNixcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGNvbXByZXNzKFtcImFcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIl0pLFxuICAgIDQsXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBjb21wcmVzcyhbXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsIFwiYlwiLCBcImJcIiwgXCJiXCIsXCJjXCIsXCJjXCJdKSxcbiAgICA2LFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgY29tcHJlc3MoW1wiYVwiLCBcImFcIiwgXCJhXCIsIFwiYlwiLCBcImJcIiwgXCJhXCIsIFwiYVwiXSksXG4gICAgNixcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGNvbXByZXNzKFtcImFcIiwgXCJhXCIsIFwiYVwiLCBcImJcIiwgXCJiXCIsIFwiYVwiLCBcImFcIl0pLFxuICAgIDYsXG4pO1xuIl19