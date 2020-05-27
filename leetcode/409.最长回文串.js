"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA5LuacgOmVv+WbnuaWh+S4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA5LuacgOmVv+WbnuaWh+S4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVM7SUFDekM7Ozs7O1NBS0s7SUFDTCxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQzFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFDRCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNqQyxLQUFLO1FBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsQ0FBQztTQUNmO1FBQ0QsS0FBSzthQUNBO1lBQ0gsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEIsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrljIXlkKvlpKflhpnlrZfmr43lkozlsI/lhpnlrZfmr43nmoTlrZfnrKbkuLLvvIzmib7liLDpgJrov4fov5nkupvlrZfmr43mnoTpgKDmiJDnmoTmnIDplb/nmoTlm57mlofkuLLjgIJcclxuXHJcbuWcqOaehOmAoOi/h+eoi+S4re+8jOivt+azqOaEj+WMuuWIhuWkp+Wwj+WGmeOAguavlOWmgsKgXCJBYVwiwqDkuI3og73lvZPlgZrkuIDkuKrlm57mloflrZfnrKbkuLLjgIJcclxuXHJcbuazqOaEjzpcclxu5YGH6K6+5a2X56ym5Liy55qE6ZW/5bqm5LiN5Lya6LaF6L+HIDEwMTDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOlxyXG5cImFiY2NjY2RkXCJcclxuXHJcbui+k+WHujpcclxuN1xyXG5cclxu6Kej6YeKOlxyXG7miJHku6zlj6/ku6XmnoTpgKDnmoTmnIDplb/nmoTlm57mlofkuLLmmK9cImRjY2FjY2RcIiwg5a6D55qE6ZW/5bqm5pivIDfjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xvbmdlc3QtcGFsaW5kcm9tZVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGxvbmdlc3RQYWxpbmRyb21lID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gIC8qKlxyXG4gICAqIOagueaNrumimOaEj1xyXG4gICAqIOWHuueOsOWBtuaVsOasoeeahCDnm7TmjqXliqDlhaXplb/luqZcclxuICAgKiDlh7rnjrDlpYfmlbDmrKEg5YiZIC0gMSDliqDliLAg6ZW/5bqmXHJcbiAgICog5aaC5p6c5pyJIOWlh+aVsOasoeeahCDliJkg5YaNICsgMVxyXG4gICAqICovXHJcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBtYXBbc1tpXV0gPSAobWFwW3NbaV1dIHx8IDApICsgMTtcclxuICB9XHJcbiAgbGV0IGhhc09kZENvdW50ID0gZmFsc2U7XHJcbiAgT2JqZWN0LnZhbHVlcyhtYXApLmZvckVhY2goKG51bSkgPT4ge1xyXG4gICAgLy8g5YG25pWwXHJcbiAgICBpZiAoKG51bSAmIDEpID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdCArPSBudW07XHJcbiAgICB9XHJcbiAgICAvLyDlpYfmlbBcclxuICAgIGVsc2Uge1xyXG4gICAgICByZXN1bHQgKz0gbnVtIC0gMTtcclxuICAgICAgaGFzT2RkQ291bnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaGFzT2RkQ291bnQgPyByZXN1bHQgKyAxIDogcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwobG9uZ2VzdFBhbGluZHJvbWUoXCJhYmNjY2NkZFwiKSwgNyk7XHJcbiJdfQ==