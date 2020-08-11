"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s 子序列
 * @param {string} t 检查的序列
 * @return {boolean}
 */
var isSubsequence1 = function (s, t) {
    /**
     * 双指针
     * */
    let s_index = 0;
    let t_index = 0;
    while (s_index < s.length && t_index < t.length) {
        if (t[t_index] === s[s_index]) {
            s_index++;
        }
        t_index++;
    }
    return s_index === s.length;
};
var isSubsequence2 = function (s, t) {
    /**
     * 直接整个 正则
     * */
    return new RegExp(s.split("").join(".*")).test(t);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isSubsequence1("abc", "ahbgdc"), true);
assert_1.default.strictEqual(isSubsequence1("axc", "ahbgdc"), false);
assert_1.default.strictEqual(isSubsequence2("abc", "ahbgdc"), true);
assert_1.default.strictEqual(isSubsequence2("axc", "ahbgdc"), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkyLuWIpOaWreWtkOW6j+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzkyLuWIpOaWreWtkOW6j+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUNqRDs7U0FFSztJQUNMLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUMvQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLE9BQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDakQ7O1NBRUs7SUFDTCxPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuWtl+espuS4siBzIOWSjCB0IO+8jOWIpOaWrSBzIOaYr+WQpuS4uiB0IOeahOWtkOW6j+WIl+OAglxuXG7kvaDlj6/ku6XorqTkuLogcyDlkowgdCDkuK3ku4XljIXlkKvoi7HmloflsI/lhpnlrZfmr43jgILlrZfnrKbkuLIgdCDlj6/og73kvJrlvojplb/vvIjplb/luqYgfj0gNTAwLDAwMO+8ie+8jOiAjCBzIOaYr+S4quefreWtl+espuS4su+8iOmVv+W6piA8PTEwMO+8ieOAglxuXG7lrZfnrKbkuLLnmoTkuIDkuKrlrZDluo/liJfmmK/ljp/lp4vlrZfnrKbkuLLliKDpmaTkuIDkupvvvIjkuZ/lj6/ku6XkuI3liKDpmaTvvInlrZfnrKbogIzkuI3mlLnlj5jliankvZnlrZfnrKbnm7jlr7nkvY3nva7lvaLmiJDnmoTmlrDlrZfnrKbkuLLjgILvvIjkvovlpoLvvIxcImFjZVwi5pivXCJhYmNkZVwi55qE5LiA5Liq5a2Q5bqP5YiX77yM6ICMXCJhZWNcIuS4jeaYr++8ieOAglxuXG7npLrkvovCoDE6XG5zID0gXCJhYmNcIiwgdCA9IFwiYWhiZ2RjXCJcblxu6L+U5ZuewqB0cnVlLlxuXG7npLrkvovCoDI6XG5zID0gXCJheGNcIiwgdCA9IFwiYWhiZ2RjXCJcblxu6L+U5ZuewqBmYWxzZS5cblxu5ZCO57ut5oyR5oiYIDpcblxu5aaC5p6c5pyJ5aSn6YeP6L6T5YWl55qEIFPvvIznp7DkvZxTMSwgUzIsIC4uLiAsIFNrIOWFtuS4rSBrID49IDEw5Lq/77yM5L2g6ZyA6KaB5L6d5qyh5qOA5p+l5a6D5Lus5piv5ZCm5Li6IFQg55qE5a2Q5bqP5YiX44CC5Zyo6L+Z56eN5oOF5Ya15LiL77yM5L2g5Lya5oCO5qC35pS55Y+Y5Luj56CB77yfXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9pcy1zdWJzZXF1ZW5jZVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIOWtkOW6j+WIl1xuICogQHBhcmFtIHtzdHJpbmd9IHQg5qOA5p+l55qE5bqP5YiXXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG52YXIgaXNTdWJzZXF1ZW5jZTEgPSBmdW5jdGlvbiAoczogc3RyaW5nLCB0OiBzdHJpbmcpIHtcbiAgLyoqXG4gICAqIOWPjOaMh+mSiFxuICAgKiAqL1xuICBsZXQgc19pbmRleCA9IDA7XG4gIGxldCB0X2luZGV4ID0gMDtcbiAgd2hpbGUgKHNfaW5kZXggPCBzLmxlbmd0aCAmJiB0X2luZGV4IDwgdC5sZW5ndGgpIHtcbiAgICBpZiAodFt0X2luZGV4XSA9PT0gc1tzX2luZGV4XSkge1xuICAgICAgc19pbmRleCsrO1xuICAgIH1cbiAgICB0X2luZGV4Kys7XG4gIH1cblxuICByZXR1cm4gc19pbmRleCA9PT0gcy5sZW5ndGg7XG59O1xuXG52YXIgaXNTdWJzZXF1ZW5jZTIgPSBmdW5jdGlvbiAoczogc3RyaW5nLCB0OiBzdHJpbmcpIHtcbiAgLyoqXG4gICAqIOebtOaOpeaVtOS4qiDmraPliJlcbiAgICogKi9cbiAgcmV0dXJuIG5ldyBSZWdFeHAocy5zcGxpdChcIlwiKS5qb2luKFwiLipcIikpLnRlc3QodCk7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGlzU3Vic2VxdWVuY2UxKFwiYWJjXCIsIFwiYWhiZ2RjXCIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc1N1YnNlcXVlbmNlMShcImF4Y1wiLCBcImFoYmdkY1wiKSwgZmFsc2UpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNTdWJzZXF1ZW5jZTIoXCJhYmNcIiwgXCJhaGJnZGNcIiksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzU3Vic2VxdWVuY2UyKFwiYXhjXCIsIFwiYWhiZ2RjXCIpLCBmYWxzZSk7XG4iXX0=