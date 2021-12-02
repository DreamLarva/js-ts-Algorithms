"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkyLuWIpOaWreWtkOW6j+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzkyLuWIpOaWreWtkOW6j+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUNqRDs7U0FFSztJQUNMLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUMvQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLE9BQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUVGLElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDakQ7O1NBRUs7SUFDTCxPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuWtl+espuS4siBzIOWSjCB0IO+8jOWIpOaWrSBzIOaYr+WQpuS4uiB0IOeahOWtkOW6j+WIl+OAglxuXG7kvaDlj6/ku6XorqTkuLogcyDlkowgdCDkuK3ku4XljIXlkKvoi7HmloflsI/lhpnlrZfmr43jgILlrZfnrKbkuLIgdCDlj6/og73kvJrlvojplb/vvIjplb/luqYgfj0gNTAwLDAwMO+8ie+8jOiAjCBzIOaYr+S4quefreWtl+espuS4su+8iOmVv+W6piA8PTEwMO+8ieOAglxuXG7lrZfnrKbkuLLnmoTkuIDkuKrlrZDluo/liJfmmK/ljp/lp4vlrZfnrKbkuLLliKDpmaTkuIDkupvvvIjkuZ/lj6/ku6XkuI3liKDpmaTvvInlrZfnrKbogIzkuI3mlLnlj5jliankvZnlrZfnrKbnm7jlr7nkvY3nva7lvaLmiJDnmoTmlrDlrZfnrKbkuLLjgILvvIjkvovlpoLvvIxcImFjZVwi5pivXCJhYmNkZVwi55qE5LiA5Liq5a2Q5bqP5YiX77yM6ICMXCJhZWNcIuS4jeaYr++8ieOAglxuXG7npLrkvosgMTpcbnMgPSBcImFiY1wiLCB0ID0gXCJhaGJnZGNcIlxuXG7ov5Tlm54gdHJ1ZS5cblxu56S65L6LIDI6XG5zID0gXCJheGNcIiwgdCA9IFwiYWhiZ2RjXCJcblxu6L+U5ZueIGZhbHNlLlxuXG7lkI7nu63mjJHmiJggOlxuXG7lpoLmnpzmnInlpKfph4/ovpPlhaXnmoQgU++8jOensOS9nFMxLCBTMiwgLi4uICwgU2sg5YW25LitIGsgPj0gMTDkur/vvIzkvaDpnIDopoHkvp3mrKHmo4Dmn6XlroPku6zmmK/lkKbkuLogVCDnmoTlrZDluo/liJfjgILlnKjov5nnp43mg4XlhrXkuIvvvIzkvaDkvJrmgI7moLfmlLnlj5jku6PnoIHvvJ9cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2lzLXN1YnNlcXVlbmNlXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHMg5a2Q5bqP5YiXXG4gKiBAcGFyYW0ge3N0cmluZ30gdCDmo4Dmn6XnmoTluo/liJdcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBpc1N1YnNlcXVlbmNlMSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xuICAvKipcbiAgICog5Y+M5oyH6ZKIXG4gICAqICovXG4gIGxldCBzX2luZGV4ID0gMDtcbiAgbGV0IHRfaW5kZXggPSAwO1xuICB3aGlsZSAoc19pbmRleCA8IHMubGVuZ3RoICYmIHRfaW5kZXggPCB0Lmxlbmd0aCkge1xuICAgIGlmICh0W3RfaW5kZXhdID09PSBzW3NfaW5kZXhdKSB7XG4gICAgICBzX2luZGV4Kys7XG4gICAgfVxuICAgIHRfaW5kZXgrKztcbiAgfVxuXG4gIHJldHVybiBzX2luZGV4ID09PSBzLmxlbmd0aDtcbn07XG5cbnZhciBpc1N1YnNlcXVlbmNlMiA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xuICAvKipcbiAgICog55u05o6l5pW05LiqIOato+WImVxuICAgKiAqL1xuICByZXR1cm4gbmV3IFJlZ0V4cChzLnNwbGl0KFwiXCIpLmpvaW4oXCIuKlwiKSkudGVzdCh0KTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNTdWJzZXF1ZW5jZTEoXCJhYmNcIiwgXCJhaGJnZGNcIiksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGlzU3Vic2VxdWVuY2UxKFwiYXhjXCIsIFwiYWhiZ2RjXCIpLCBmYWxzZSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChpc1N1YnNlcXVlbmNlMihcImFiY1wiLCBcImFoYmdkY1wiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNTdWJzZXF1ZW5jZTIoXCJheGNcIiwgXCJhaGJnZGNcIiksIGZhbHNlKTtcbiJdfQ==
