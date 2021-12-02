"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/integer-to-roman
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let result = "";
  const values = Object.keys(map).reverse();
  for (let value of values) {
    const quotient = Math.floor(num / Number(value));
    if (quotient !== 0) {
      result += map[Number(value)].repeat(quotient);
      num -= Number(value) * quotient;
    }
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(intToRoman(3999), "MMMCMXCIX");
assert_1.default.strictEqual(intToRoman(3), "III");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIu5pW05pWw6L2s572X6ams5pWw5a2XLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMi7mlbTmlbDovaznvZfpqazmlbDlrZcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0RJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxHQUFXO0lBQ3BDLE1BQU0sR0FBRyxHQUE4QjtRQUNyQyxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxJQUFJLEVBQUUsR0FBRztLQUNWLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtRQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDakM7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue9l+mprOaVsOWtl+WMheWQq+S7peS4i+S4g+enjeWtl+espu+8miBJ77yMIFbvvIwgWO+8jCBM77yMQ++8jEQg5ZKMIE3jgIJcblxu5a2X56ymICAgICAgICAgIOaVsOWAvFxuSSAgICAgICAgICAgICAxXG5WICAgICAgICAgICAgIDVcblggICAgICAgICAgICAgMTBcbkwgICAgICAgICAgICAgNTBcbkMgICAgICAgICAgICAgMTAwXG5EICAgICAgICAgICAgIDUwMFxuTSAgICAgICAgICAgICAxMDAwXG7kvovlpoLvvIwg572X6ams5pWw5a2XIDIg5YaZ5YGaIElJIO+8jOWNs+S4uuS4pOS4quW5tuWIl+eahCAx44CCMTIg5YaZ5YGaIFhJSSDvvIzljbPkuLogWCArIElJIOOAgiAyNyDlhpnlgZogIFhYVklJLCDljbPkuLogWFggKyBWICsgSUkg44CCXG5cbumAmuW4uOaDheWGteS4i++8jOe9l+mprOaVsOWtl+S4reWwj+eahOaVsOWtl+WcqOWkp+eahOaVsOWtl+eahOWPs+i+ueOAguS9huS5n+WtmOWcqOeJueS+i++8jOS+i+WmgiA0IOS4jeWGmeWBmiBJSUlJ77yM6ICM5pivIElW44CCXG7mlbDlrZcgMSDlnKjmlbDlrZcgNSDnmoTlt6bovrnvvIzmiYDooajnpLrnmoTmlbDnrYnkuo7lpKfmlbAgNSDlh4/lsI/mlbAgMSDlvpfliLDnmoTmlbDlgLwgNCDjgIJcbuWQjOagt+WcsO+8jOaVsOWtlyA5IOihqOekuuS4uiBJWOOAgui/meS4queJueauiueahOinhOWImeWPqumAgueUqOS6juS7peS4i+WFreenjeaDheWGte+8mlxuXG5JIOWPr+S7peaUvuWcqCBWICg1KSDlkowgWCAoMTApIOeahOW3pui+ue+8jOadpeihqOekuiA0IOWSjCA544CCXG5YIOWPr+S7peaUvuWcqCBMICg1MCkg5ZKMIEMgKDEwMCkg55qE5bem6L6577yM5p2l6KGo56S6IDQwIOWSjCA5MOOAglxuQyDlj6/ku6XmlL7lnKggRCAoNTAwKSDlkowgTSAoMTAwMCkg55qE5bem6L6577yM5p2l6KGo56S6IDQwMCDlkowgOTAw44CCXG7nu5nlrprkuIDkuKrmlbTmlbDvvIzlsIblhbbovazkuLrnvZfpqazmlbDlrZfjgILovpPlhaXnoa7kv53lnKggMSDliLAgMzk5OSDnmoTojIPlm7TlhoXjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogM1xu6L6T5Ye6OiBcIklJSVwiXG7npLrkvosgMjpcblxu6L6T5YWlOiA0XG7ovpPlh7o6IFwiSVZcIlxu56S65L6LIDM6XG5cbui+k+WFpTogOVxu6L6T5Ye6OiBcIklYXCJcbuekuuS+iyA0OlxuXG7ovpPlhaU6IDU4XG7ovpPlh7o6IFwiTFZJSUlcIlxu6Kej6YeKOiBMID0gNTAsIFYgPSA1LCBJSUkgPSAzLlxu56S65L6LIDU6XG5cbui+k+WFpTogMTk5NFxu6L6T5Ye6OiBcIk1DTVhDSVZcIlxu6Kej6YeKOiBNID0gMTAwMCwgQ00gPSA5MDAsIFhDID0gOTAsIElWID0gNC5cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ludGVnZXItdG8tcm9tYW5cbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBpbnRUb1JvbWFuID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgbWFwOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAgIDE6IFwiSVwiLFxuICAgIDQ6IFwiSVZcIixcbiAgICA1OiBcIlZcIixcbiAgICA5OiBcIklYXCIsXG4gICAgMTA6IFwiWFwiLFxuICAgIDQwOiBcIlhMXCIsXG4gICAgNTA6IFwiTFwiLFxuICAgIDkwOiBcIlhDXCIsXG4gICAgMTAwOiBcIkNcIixcbiAgICA0MDA6IFwiQ0RcIixcbiAgICA1MDA6IFwiRFwiLFxuICAgIDkwMDogXCJDTVwiLFxuICAgIDEwMDA6IFwiTVwiLFxuICB9O1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmtleXMobWFwKS5yZXZlcnNlKCk7XG4gIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgIGNvbnN0IHF1b3RpZW50ID0gTWF0aC5mbG9vcihudW0gLyBOdW1iZXIodmFsdWUpKTtcbiAgICBpZiAocXVvdGllbnQgIT09IDApIHtcbiAgICAgIHJlc3VsdCArPSBtYXBbTnVtYmVyKHZhbHVlKV0ucmVwZWF0KHF1b3RpZW50KTtcbiAgICAgIG51bSAtPSBOdW1iZXIodmFsdWUpICogcXVvdGllbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChpbnRUb1JvbWFuKDM5OTkpLCBcIk1NTUNNWENJWFwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpbnRUb1JvbWFuKDMpLCBcIklJSVwiKTtcbiJdfQ==
