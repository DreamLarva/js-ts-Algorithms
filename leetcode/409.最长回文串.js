"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA5LuacgOmVv+WbnuaWh+S4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA5LuacgOmVv+WbnuaWh+S4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVM7SUFDdkM7Ozs7O1NBS0s7SUFDTCxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQzFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEM7SUFDRCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDN0IsS0FBSztRQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxHQUFHLENBQUM7U0FDakI7UUFDRCxLQUFLO2FBQ0E7WUFDRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsQixXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFDN0IsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrljIXlkKvlpKflhpnlrZfmr43lkozlsI/lhpnlrZfmr43nmoTlrZfnrKbkuLLvvIzmib7liLDpgJrov4fov5nkupvlrZfmr43mnoTpgKDmiJDnmoTmnIDplb/nmoTlm57mlofkuLLjgIJcclxuXHJcbuWcqOaehOmAoOi/h+eoi+S4re+8jOivt+azqOaEj+WMuuWIhuWkp+Wwj+WGmeOAguavlOWmgsKgXCJBYVwiwqDkuI3og73lvZPlgZrkuIDkuKrlm57mloflrZfnrKbkuLLjgIJcclxuXHJcbuazqOaEjzpcclxu5YGH6K6+5a2X56ym5Liy55qE6ZW/5bqm5LiN5Lya6LaF6L+HIDEwMTDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOlxyXG5cImFiY2NjY2RkXCJcclxuXHJcbui+k+WHujpcclxuN1xyXG5cclxu6Kej6YeKOlxyXG7miJHku6zlj6/ku6XmnoTpgKDnmoTmnIDplb/nmoTlm57mlofkuLLmmK9cImRjY2FjY2RcIiwg5a6D55qE6ZW/5bqm5pivIDfjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xvbmdlc3QtcGFsaW5kcm9tZVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGxvbmdlc3RQYWxpbmRyb21lID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7popjmhI9cclxuICAgICAqIOWHuueOsOWBtuaVsOasoeeahCDnm7TmjqXliqDlhaXplb/luqZcclxuICAgICAqIOWHuueOsOWlh+aVsOasoSDliJkgLSAxIOWKoOWIsCDplb/luqZcclxuICAgICAqIOWmguaenOaciSDlpYfmlbDmrKHnmoQg5YiZIOWGjSArIDFcclxuICAgICAqICovXHJcbiAgICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbWFwW3NbaV1dID0gKG1hcFtzW2ldXSB8fCAwKSArIDE7XHJcbiAgICB9XHJcbiAgICBsZXQgaGFzT2RkQ291bnQgPSBmYWxzZTtcclxuICAgIE9iamVjdC52YWx1ZXMobWFwKS5mb3JFYWNoKG51bSA9PiB7XHJcbiAgICAgICAgLy8g5YG25pWwXHJcbiAgICAgICAgaWYgKChudW0gJiAxKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gbnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpYfmlbBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IG51bSAtIDE7XHJcbiAgICAgICAgICAgIGhhc09kZENvdW50ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaGFzT2RkQ291bnQgPyByZXN1bHQgKyAxIDogcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBsb25nZXN0UGFsaW5kcm9tZShcImFiY2NjY2RkXCIpLFxyXG4gICAgNyxcclxuKTtcclxuIl19
