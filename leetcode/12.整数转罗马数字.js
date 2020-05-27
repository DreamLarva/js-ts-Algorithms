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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIu5pW05pWw6L2s572X6ams5pWw5a2XLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMi7mlbTmlbDovaznvZfpqazmlbDlrZcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThDSTtBQUNKOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsR0FBVztJQUNwQyxNQUFNLEdBQUcsR0FBOEI7UUFDckMsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsSUFBSSxFQUFFLEdBQUc7S0FDVixDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ2pDO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nvZfpqazmlbDlrZfljIXlkKvku6XkuIvkuIPnp43lrZfnrKbvvJrCoEnvvIzCoFbvvIzCoFjvvIzCoEzvvIxD77yMRMKg5ZKMwqBN44CCXG5cbuWtl+espiAgICAgICAgICDmlbDlgLxcbkkgICAgICAgICAgICAgMVxuViAgICAgICAgICAgICA1XG5YICAgICAgICAgICAgIDEwXG5MICAgICAgICAgICAgIDUwXG5DICAgICAgICAgICAgIDEwMFxuRCAgICAgICAgICAgICA1MDBcbk0gICAgICAgICAgICAgMTAwMFxu5L6L5aaC77yMIOe9l+mprOaVsOWtlyAyIOWGmeWBmsKgSUnCoO+8jOWNs+S4uuS4pOS4quW5tuWIl+eahCAx44CCMTIg5YaZ5YGawqBYSUnCoO+8jOWNs+S4usKgWMKgK8KgSUnCoOOAgiAyNyDlhpnlgZrCoMKgWFhWSUksIOWNs+S4usKgWFjCoCvCoFbCoCvCoElJwqDjgIJcblxu6YCa5bi45oOF5Ya15LiL77yM572X6ams5pWw5a2X5Lit5bCP55qE5pWw5a2X5Zyo5aSn55qE5pWw5a2X55qE5Y+z6L6544CC5L2G5Lmf5a2Y5Zyo54m55L6L77yM5L6L5aaCIDQg5LiN5YaZ5YGawqBJSUlJ77yM6ICM5pivwqBJVuOAguaVsOWtlyAxIOWcqOaVsOWtlyA1IOeahOW3pui+ue+8jOaJgOihqOekuueahOaVsOetieS6juWkp+aVsCA1IOWHj+Wwj+aVsCAxIOW+l+WIsOeahOaVsOWAvCA0IOOAguWQjOagt+WcsO+8jOaVsOWtlyA5IOihqOekuuS4usKgSVjjgILov5nkuKrnibnmrornmoTop4TliJnlj6rpgILnlKjkuo7ku6XkuIvlha3np43mg4XlhrXvvJpcblxuScKg5Y+v5Lul5pS+5ZyowqBWwqAoNSkg5ZKMwqBYwqAoMTApIOeahOW3pui+ue+8jOadpeihqOekuiA0IOWSjCA544CCXG5YwqDlj6/ku6XmlL7lnKjCoEzCoCg1MCkg5ZKMwqBDwqAoMTAwKSDnmoTlt6bovrnvvIzmnaXooajnpLogNDAg5ZKMwqA5MOOAgsKgXG5DwqDlj6/ku6XmlL7lnKjCoETCoCg1MDApIOWSjMKgTcKgKDEwMDApIOeahOW3pui+ue+8jOadpeihqOekusKgNDAwIOWSjMKgOTAw44CCXG7nu5nlrprkuIDkuKrmlbTmlbDvvIzlsIblhbbovazkuLrnvZfpqazmlbDlrZfjgILovpPlhaXnoa7kv53lnKggMcKg5YiwIDM5OTkg55qE6IyD5Zu05YaF44CCXG5cbuekuuS+i8KgMTpcblxu6L6T5YWlOsKgM1xu6L6T5Ye6OiBcIklJSVwiXG7npLrkvovCoDI6XG5cbui+k+WFpTrCoDRcbui+k+WHujogXCJJVlwiXG7npLrkvovCoDM6XG5cbui+k+WFpTrCoDlcbui+k+WHujogXCJJWFwiXG7npLrkvovCoDQ6XG5cbui+k+WFpTrCoDU4XG7ovpPlh7o6IFwiTFZJSUlcIlxu6Kej6YeKOiBMID0gNTAsIFYgPSA1LCBJSUkgPSAzLlxu56S65L6LwqA1OlxuXG7ovpPlhaU6wqAxOTk0XG7ovpPlh7o6IFwiTUNNWENJVlwiXG7op6Pph4o6IE0gPSAxMDAwLCBDTSA9IDkwMCwgWEMgPSA5MCwgSVYgPSA0LlxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvaW50ZWdlci10by1yb21hblxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGludFRvUm9tYW4gPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBtYXA6IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gICAgMTogXCJJXCIsXG4gICAgNDogXCJJVlwiLFxuICAgIDU6IFwiVlwiLFxuICAgIDk6IFwiSVhcIixcbiAgICAxMDogXCJYXCIsXG4gICAgNDA6IFwiWExcIixcbiAgICA1MDogXCJMXCIsXG4gICAgOTA6IFwiWENcIixcbiAgICAxMDA6IFwiQ1wiLFxuICAgIDQwMDogXCJDRFwiLFxuICAgIDUwMDogXCJEXCIsXG4gICAgOTAwOiBcIkNNXCIsXG4gICAgMTAwMDogXCJNXCIsXG4gIH07XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBjb25zdCB2YWx1ZXMgPSBPYmplY3Qua2V5cyhtYXApLnJldmVyc2UoKTtcbiAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgY29uc3QgcXVvdGllbnQgPSBNYXRoLmZsb29yKG51bSAvIE51bWJlcih2YWx1ZSkpO1xuICAgIGlmIChxdW90aWVudCAhPT0gMCkge1xuICAgICAgcmVzdWx0ICs9IG1hcFtOdW1iZXIodmFsdWUpXS5yZXBlYXQocXVvdGllbnQpO1xuICAgICAgbnVtIC09IE51bWJlcih2YWx1ZSkgKiBxdW90aWVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGludFRvUm9tYW4oMzk5OSksIFwiTU1NQ01YQ0lYXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGludFRvUm9tYW4oMyksIFwiSUlJXCIpO1xuIl19