"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIu5pW05pWw6L2s572X6ams5pWw5a2XLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMi7mlbTmlbDovaznvZfpqazmlbDlrZcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThDSTtBQUNKOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsR0FBVztJQUVsQyxNQUFNLEdBQUcsR0FBeUI7UUFDOUIsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsSUFBSSxFQUFFLEdBQUc7S0FDWixDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBRyxRQUFRLEtBQUssQ0FBQyxFQUFDO1lBQ2QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUE7U0FDbEM7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQ2hCLFdBQVcsQ0FDZCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUNiLEtBQUssQ0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu572X6ams5pWw5a2X5YyF5ZCr5Lul5LiL5LiD56eN5a2X56ym77yawqBJ77yMwqBW77yMwqBY77yMwqBM77yMQ++8jETCoOWSjMKgTeOAglxyXG5cclxu5a2X56ymICAgICAgICAgIOaVsOWAvFxyXG5JICAgICAgICAgICAgIDFcclxuViAgICAgICAgICAgICA1XHJcblggICAgICAgICAgICAgMTBcclxuTCAgICAgICAgICAgICA1MFxyXG5DICAgICAgICAgICAgIDEwMFxyXG5EICAgICAgICAgICAgIDUwMFxyXG5NICAgICAgICAgICAgIDEwMDBcclxu5L6L5aaC77yMIOe9l+mprOaVsOWtlyAyIOWGmeWBmsKgSUnCoO+8jOWNs+S4uuS4pOS4quW5tuWIl+eahCAx44CCMTIg5YaZ5YGawqBYSUnCoO+8jOWNs+S4usKgWMKgK8KgSUnCoOOAgiAyNyDlhpnlgZrCoMKgWFhWSUksIOWNs+S4usKgWFjCoCvCoFbCoCvCoElJwqDjgIJcclxuXHJcbumAmuW4uOaDheWGteS4i++8jOe9l+mprOaVsOWtl+S4reWwj+eahOaVsOWtl+WcqOWkp+eahOaVsOWtl+eahOWPs+i+ueOAguS9huS5n+WtmOWcqOeJueS+i++8jOS+i+WmgiA0IOS4jeWGmeWBmsKgSUlJSe+8jOiAjOaYr8KgSVbjgILmlbDlrZcgMSDlnKjmlbDlrZcgNSDnmoTlt6bovrnvvIzmiYDooajnpLrnmoTmlbDnrYnkuo7lpKfmlbAgNSDlh4/lsI/mlbAgMSDlvpfliLDnmoTmlbDlgLwgNCDjgILlkIzmoLflnLDvvIzmlbDlrZcgOSDooajnpLrkuLrCoElY44CC6L+Z5Liq54m55q6K55qE6KeE5YiZ5Y+q6YCC55So5LqO5Lul5LiL5YWt56eN5oOF5Ya177yaXHJcblxyXG5JwqDlj6/ku6XmlL7lnKjCoFbCoCg1KSDlkozCoFjCoCgxMCkg55qE5bem6L6577yM5p2l6KGo56S6IDQg5ZKMIDnjgIJcclxuWMKg5Y+v5Lul5pS+5ZyowqBMwqAoNTApIOWSjMKgQ8KgKDEwMCkg55qE5bem6L6577yM5p2l6KGo56S6IDQwIOWSjMKgOTDjgILCoFxyXG5DwqDlj6/ku6XmlL7lnKjCoETCoCg1MDApIOWSjMKgTcKgKDEwMDApIOeahOW3pui+ue+8jOadpeihqOekusKgNDAwIOWSjMKgOTAw44CCXHJcbue7meWumuS4gOS4quaVtOaVsO+8jOWwhuWFtui9rOS4uue9l+mprOaVsOWtl+OAgui+k+WFpeehruS/neWcqCAxwqDliLAgMzk5OSDnmoTojIPlm7TlhoXjgIJcclxuXHJcbuekuuS+i8KgMTpcclxuXHJcbui+k+WFpTrCoDNcclxu6L6T5Ye6OiBcIklJSVwiXHJcbuekuuS+i8KgMjpcclxuXHJcbui+k+WFpTrCoDRcclxu6L6T5Ye6OiBcIklWXCJcclxu56S65L6LwqAzOlxyXG5cclxu6L6T5YWlOsKgOVxyXG7ovpPlh7o6IFwiSVhcIlxyXG7npLrkvovCoDQ6XHJcblxyXG7ovpPlhaU6wqA1OFxyXG7ovpPlh7o6IFwiTFZJSUlcIlxyXG7op6Pph4o6IEwgPSA1MCwgViA9IDUsIElJSSA9IDMuXHJcbuekuuS+i8KgNTpcclxuXHJcbui+k+WFpTrCoDE5OTRcclxu6L6T5Ye6OiBcIk1DTVhDSVZcIlxyXG7op6Pph4o6IE0gPSAxMDAwLCBDTSA9IDkwMCwgWEMgPSA5MCwgSVYgPSA0LlxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvaW50ZWdlci10by1yb21hblxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgaW50VG9Sb21hbiA9IGZ1bmN0aW9uIChudW06IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgY29uc3QgbWFwOntba2V5Om51bWJlcl06c3RyaW5nfSA9IHtcclxuICAgICAgICAxOiBcIklcIixcclxuICAgICAgICA0OiBcIklWXCIsXHJcbiAgICAgICAgNTogXCJWXCIsXHJcbiAgICAgICAgOTogXCJJWFwiLFxyXG4gICAgICAgIDEwOiBcIlhcIixcclxuICAgICAgICA0MDogXCJYTFwiLFxyXG4gICAgICAgIDUwOiBcIkxcIixcclxuICAgICAgICA5MDogXCJYQ1wiLFxyXG4gICAgICAgIDEwMDogXCJDXCIsXHJcbiAgICAgICAgNDAwOiBcIkNEXCIsXHJcbiAgICAgICAgNTAwOiBcIkRcIixcclxuICAgICAgICA5MDA6IFwiQ01cIixcclxuICAgICAgICAxMDAwOiBcIk1cIixcclxuICAgIH07XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5rZXlzKG1hcCkucmV2ZXJzZSgpO1xyXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBNYXRoLmZsb29yKG51bSAvIE51bWJlcih2YWx1ZSkpO1xyXG4gICAgICAgIGlmKHF1b3RpZW50ICE9PSAwKXtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IG1hcFtOdW1iZXIodmFsdWUpXS5yZXBlYXQocXVvdGllbnQpO1xyXG4gICAgICAgICAgICBudW0gLT0gTnVtYmVyKHZhbHVlKSAqIHF1b3RpZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpbnRUb1JvbWFuKDM5OTkpLFxyXG4gICAgXCJNTU1DTVhDSVhcIlxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpbnRUb1JvbWFuKDMpLFxyXG4gICAgXCJJSUlcIlxyXG4pO1xyXG4iXX0=