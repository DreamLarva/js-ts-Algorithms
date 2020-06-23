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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA5LuacgOmVv+WbnuaWh+S4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDA5LuacgOmVv+WbnuaWh+S4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVM7SUFDekM7Ozs7O1NBS0s7SUFDTCxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBQzFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7SUFDRCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNqQyxLQUFLO1FBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsQ0FBQztTQUNmO1FBQ0QsS0FBSzthQUNBO1lBQ0gsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEIsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5YyF5ZCr5aSn5YaZ5a2X5q+N5ZKM5bCP5YaZ5a2X5q+N55qE5a2X56ym5Liy77yM5om+5Yiw6YCa6L+H6L+Z5Lqb5a2X5q+N5p6E6YCg5oiQ55qE5pyA6ZW/55qE5Zue5paH5Liy44CCXG5cbuWcqOaehOmAoOi/h+eoi+S4re+8jOivt+azqOaEj+WMuuWIhuWkp+Wwj+WGmeOAguavlOWmgsKgXCJBYVwiwqDkuI3og73lvZPlgZrkuIDkuKrlm57mloflrZfnrKbkuLLjgIJcblxu5rOo5oSPOlxu5YGH6K6+5a2X56ym5Liy55qE6ZW/5bqm5LiN5Lya6LaF6L+HIDEwMTDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcblwiYWJjY2NjZGRcIlxuXG7ovpPlh7o6XG43XG5cbuino+mHijpcbuaIkeS7rOWPr+S7peaehOmAoOeahOacgOmVv+eahOWbnuaWh+S4suaYr1wiZGNjYWNjZFwiLCDlroPnmoTplb/luqbmmK8gN+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbG9uZ2VzdC1wYWxpbmRyb21lXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGxvbmdlc3RQYWxpbmRyb21lID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICAvKipcbiAgICog5qC55o2u6aKY5oSPXG4gICAqIOWHuueOsOWBtuaVsOasoeeahCDnm7TmjqXliqDlhaXplb/luqZcbiAgICog5Ye6546w5aWH5pWw5qyhIOWImSAtIDEg5Yqg5YiwIOmVv+W6plxuICAgKiDlpoLmnpzmnIkg5aWH5pWw5qyh55qEIOWImSDlho0gKyAxXG4gICAqICovXG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICBsZXQgcmVzdWx0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW3NbaV1dID0gKG1hcFtzW2ldXSB8fCAwKSArIDE7XG4gIH1cbiAgbGV0IGhhc09kZENvdW50ID0gZmFsc2U7XG4gIE9iamVjdC52YWx1ZXMobWFwKS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAvLyDlgbbmlbBcbiAgICBpZiAoKG51bSAmIDEpID09PSAwKSB7XG4gICAgICByZXN1bHQgKz0gbnVtO1xuICAgIH1cbiAgICAvLyDlpYfmlbBcbiAgICBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBudW0gLSAxO1xuICAgICAgaGFzT2RkQ291bnQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhhc09kZENvdW50ID8gcmVzdWx0ICsgMSA6IHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobG9uZ2VzdFBhbGluZHJvbWUoXCJhYmNjY2NkZFwiKSwgNyk7XG4iXX0=