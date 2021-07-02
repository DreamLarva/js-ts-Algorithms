"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:

输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    /**
     * 根据题意
     * 出现偶数次的 直接加入长度
     * 出现奇数次 则 - 1 加到 长度
     * 如果有 奇数次的 则 再 + 1
     * */
    const map = {};
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    let hasOddCount = false;
    Object.values(map).forEach((num) => {
        // 偶数
        if ((num & 1) === 0) {
            result += num;
        }
        // 奇数
        else {
            result += num - 1;
            hasOddCount = true;
        }
    });
    return hasOddCount ? result + 1 : result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(longestPalindrome("abccccdd"), 7);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA5LuacgOmVv+WbnuaWh+S4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA5LuacgOmVv+WbnuaWh+S4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVM7SUFDekM7Ozs7O1NBS0s7SUFDTCxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQzFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFDRCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNqQyxLQUFLO1FBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsQ0FBQztTQUNmO1FBQ0QsS0FBSzthQUNBO1lBQ0gsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEIsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5YyF5ZCr5aSn5YaZ5a2X5q+N5ZKM5bCP5YaZ5a2X5q+N55qE5a2X56ym5Liy77yM5om+5Yiw6YCa6L+H6L+Z5Lqb5a2X5q+N5p6E6YCg5oiQ55qE5pyA6ZW/55qE5Zue5paH5Liy44CCXG5cbuWcqOaehOmAoOi/h+eoi+S4re+8jOivt+azqOaEj+WMuuWIhuWkp+Wwj+WGmeOAguavlOWmgiBcIkFhXCIg5LiN6IO95b2T5YGa5LiA5Liq5Zue5paH5a2X56ym5Liy44CCXG5cbuazqOaEjzpcbuWBh+iuvuWtl+espuS4sueahOmVv+W6puS4jeS8mui2hei/hyAxMDEw44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6XG5cImFiY2NjY2RkXCJcblxu6L6T5Ye6OlxuN1xuXG7op6Pph4o6XG7miJHku6zlj6/ku6XmnoTpgKDnmoTmnIDplb/nmoTlm57mlofkuLLmmK9cImRjY2FjY2RcIiwg5a6D55qE6ZW/5bqm5pivIDfjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xvbmdlc3QtcGFsaW5kcm9tZVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBsb25nZXN0UGFsaW5kcm9tZSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgLyoqXG4gICAqIOagueaNrumimOaEj1xuICAgKiDlh7rnjrDlgbbmlbDmrKHnmoQg55u05o6l5Yqg5YWl6ZW/5bqmXG4gICAqIOWHuueOsOWlh+aVsOasoSDliJkgLSAxIOWKoOWIsCDplb/luqZcbiAgICog5aaC5p6c5pyJIOWlh+aVsOasoeeahCDliJkg5YaNICsgMVxuICAgKiAqL1xuICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIG1hcFtzW2ldXSA9IChtYXBbc1tpXV0gfHwgMCkgKyAxO1xuICB9XG4gIGxldCBoYXNPZGRDb3VudCA9IGZhbHNlO1xuICBPYmplY3QudmFsdWVzKG1hcCkuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgLy8g5YG25pWwXG4gICAgaWYgKChudW0gJiAxKSA9PT0gMCkge1xuICAgICAgcmVzdWx0ICs9IG51bTtcbiAgICB9XG4gICAgLy8g5aWH5pWwXG4gICAgZWxzZSB7XG4gICAgICByZXN1bHQgKz0gbnVtIC0gMTtcbiAgICAgIGhhc09kZENvdW50ID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoYXNPZGRDb3VudCA/IHJlc3VsdCArIDEgOiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGxvbmdlc3RQYWxpbmRyb21lKFwiYWJjY2NjZGRcIiksIDcpO1xuIl19