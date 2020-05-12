"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIu5pW05pWw6L2s572X6ams5pWw5a2XLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMi7mlbTmlbDovaznvZfpqazmlbDlrZcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThDSTtBQUNKOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsR0FBVztJQUVsQyxNQUFNLEdBQUcsR0FBeUI7UUFDOUIsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsSUFBSSxFQUFFLEdBQUc7S0FDWixDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBRyxRQUFRLEtBQUssQ0FBQyxFQUFDO1lBQ2QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUE7U0FDbEM7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQ2hCLFdBQVcsQ0FDZCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUNiLEtBQUssQ0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue9l+mprOaVsOWtl+WMheWQq+S7peS4i+S4g+enjeWtl+espu+8msKgSe+8jMKgVu+8jMKgWO+8jMKgTO+8jEPvvIxEwqDlkozCoE3jgIJcblxu5a2X56ymICAgICAgICAgIOaVsOWAvFxuSSAgICAgICAgICAgICAxXG5WICAgICAgICAgICAgIDVcblggICAgICAgICAgICAgMTBcbkwgICAgICAgICAgICAgNTBcbkMgICAgICAgICAgICAgMTAwXG5EICAgICAgICAgICAgIDUwMFxuTSAgICAgICAgICAgICAxMDAwXG7kvovlpoLvvIwg572X6ams5pWw5a2XIDIg5YaZ5YGawqBJScKg77yM5Y2z5Li65Lik5Liq5bm25YiX55qEIDHjgIIxMiDlhpnlgZrCoFhJScKg77yM5Y2z5Li6wqBYwqArwqBJScKg44CCIDI3IOWGmeWBmsKgwqBYWFZJSSwg5Y2z5Li6wqBYWMKgK8KgVsKgK8KgSUnCoOOAglxuXG7pgJrluLjmg4XlhrXkuIvvvIznvZfpqazmlbDlrZfkuK3lsI/nmoTmlbDlrZflnKjlpKfnmoTmlbDlrZfnmoTlj7PovrnjgILkvYbkuZ/lrZjlnKjnibnkvovvvIzkvovlpoIgNCDkuI3lhpnlgZrCoElJSUnvvIzogIzmmK/CoElW44CC5pWw5a2XIDEg5Zyo5pWw5a2XIDUg55qE5bem6L6577yM5omA6KGo56S655qE5pWw562J5LqO5aSn5pWwIDUg5YeP5bCP5pWwIDEg5b6X5Yiw55qE5pWw5YC8IDQg44CC5ZCM5qC35Zyw77yM5pWw5a2XIDkg6KGo56S65Li6wqBJWOOAgui/meS4queJueauiueahOinhOWImeWPqumAgueUqOS6juS7peS4i+WFreenjeaDheWGte+8mlxuXG5JwqDlj6/ku6XmlL7lnKjCoFbCoCg1KSDlkozCoFjCoCgxMCkg55qE5bem6L6577yM5p2l6KGo56S6IDQg5ZKMIDnjgIJcbljCoOWPr+S7peaUvuWcqMKgTMKgKDUwKSDlkozCoEPCoCgxMDApIOeahOW3pui+ue+8jOadpeihqOekuiA0MCDlkozCoDkw44CCwqBcbkPCoOWPr+S7peaUvuWcqMKgRMKgKDUwMCkg5ZKMwqBNwqAoMTAwMCkg55qE5bem6L6577yM5p2l6KGo56S6wqA0MDAg5ZKMwqA5MDDjgIJcbue7meWumuS4gOS4quaVtOaVsO+8jOWwhuWFtui9rOS4uue9l+mprOaVsOWtl+OAgui+k+WFpeehruS/neWcqCAxwqDliLAgMzk5OSDnmoTojIPlm7TlhoXjgIJcblxu56S65L6LwqAxOlxuXG7ovpPlhaU6wqAzXG7ovpPlh7o6IFwiSUlJXCJcbuekuuS+i8KgMjpcblxu6L6T5YWlOsKgNFxu6L6T5Ye6OiBcIklWXCJcbuekuuS+i8KgMzpcblxu6L6T5YWlOsKgOVxu6L6T5Ye6OiBcIklYXCJcbuekuuS+i8KgNDpcblxu6L6T5YWlOsKgNThcbui+k+WHujogXCJMVklJSVwiXG7op6Pph4o6IEwgPSA1MCwgViA9IDUsIElJSSA9IDMuXG7npLrkvovCoDU6XG5cbui+k+WFpTrCoDE5OTRcbui+k+WHujogXCJNQ01YQ0lWXCJcbuino+mHijogTSA9IDEwMDAsIENNID0gOTAwLCBYQyA9IDkwLCBJViA9IDQuXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9pbnRlZ2VyLXRvLXJvbWFuXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgaW50VG9Sb21hbiA9IGZ1bmN0aW9uIChudW06IG51bWJlcik6IHN0cmluZyB7XG5cbiAgICBjb25zdCBtYXA6e1trZXk6bnVtYmVyXTpzdHJpbmd9ID0ge1xuICAgICAgICAxOiBcIklcIixcbiAgICAgICAgNDogXCJJVlwiLFxuICAgICAgICA1OiBcIlZcIixcbiAgICAgICAgOTogXCJJWFwiLFxuICAgICAgICAxMDogXCJYXCIsXG4gICAgICAgIDQwOiBcIlhMXCIsXG4gICAgICAgIDUwOiBcIkxcIixcbiAgICAgICAgOTA6IFwiWENcIixcbiAgICAgICAgMTAwOiBcIkNcIixcbiAgICAgICAgNDAwOiBcIkNEXCIsXG4gICAgICAgIDUwMDogXCJEXCIsXG4gICAgICAgIDkwMDogXCJDTVwiLFxuICAgICAgICAxMDAwOiBcIk1cIixcbiAgICB9O1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5rZXlzKG1hcCkucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBjb25zdCBxdW90aWVudCA9IE1hdGguZmxvb3IobnVtIC8gTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIGlmKHF1b3RpZW50ICE9PSAwKXtcbiAgICAgICAgICAgIHJlc3VsdCArPSBtYXBbTnVtYmVyKHZhbHVlKV0ucmVwZWF0KHF1b3RpZW50KTtcbiAgICAgICAgICAgIG51bSAtPSBOdW1iZXIodmFsdWUpICogcXVvdGllbnRcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgaW50VG9Sb21hbigzOTk5KSxcbiAgICBcIk1NTUNNWENJWFwiXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGludFRvUm9tYW4oMyksXG4gICAgXCJJSUlcIlxuKTtcbiJdfQ==
