"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。


示例 1：

输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
示例 2：

输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
示例 3：

输入：str1 = "LEET", str2 = "CODE"
输出：""


提示：
    1. 1 <= str1.length <= 1000
    2. 1 <= str2.length <= 1000
    3. str1[i] 和 str2[i] 为大写英文字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    /**
     * 既然是找最大公约数
     * 那么就是用 辗转相除法 或者叫 欧几里得算法
     * */
    /**
     * 先判断是不是 有公约数
     * */
    if (str1 + str2 !== str2 + str1)
        return ""; // 这个是 充要条件
    // 辗转相除法
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return str1.substr(0, gcd(str1.length, str2.length));
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(gcdOfStrings("ABCABC", "ABC"), "ABC");
assert_1.default.strictEqual(gcdOfStrings("ABABAB", "ABAB"), "AB");
assert_1.default.strictEqual(gcdOfStrings("LEET", "CODE"), "");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3MS7lrZfnrKbkuLLnmoTmnIDlpKflhazlm6DlrZAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwNzEu5a2X56ym5Liy55qE5pyA5aSn5YWs5Zug5a2QLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFZLEVBQUUsSUFBWTtJQUNyRDs7O1NBR0s7SUFDTDs7U0FFSztJQUNMLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVztJQUN2RCxRQUFRO0lBQ1IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRXpELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lr7nkuo7lrZfnrKbkuLIgUyDlkowgVO+8jOWPquacieWcqCBTID0gVCArIC4uLiArIFTvvIhUIOS4juiHqui6q+i/nuaOpSAxIOasoeaIluWkmuasoe+8ieaXtu+8jOaIkeS7rOaJjeiupOWumiDigJxUIOiDvemZpOWwvSBT4oCd44CCXG5cbui/lOWbnuWtl+espuS4siBY77yM6KaB5rGC5ruh6LazIFgg6IO96Zmk5bC9IHN0cjEg5LiUIFgg6IO96Zmk5bC9IHN0cjLjgIJcblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpzdHIxID0gXCJBQkNBQkNcIiwgc3RyMiA9IFwiQUJDXCJcbui+k+WHuu+8mlwiQUJDXCJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mnN0cjEgPSBcIkFCQUJBQlwiLCBzdHIyID0gXCJBQkFCXCJcbui+k+WHuu+8mlwiQUJcIlxu56S65L6LIDPvvJpcblxu6L6T5YWl77yac3RyMSA9IFwiTEVFVFwiLCBzdHIyID0gXCJDT0RFXCJcbui+k+WHuu+8mlwiXCJcblxuXG7mj5DnpLrvvJpcbiAgICAxLiAxIDw9IHN0cjEubGVuZ3RoIDw9IDEwMDBcbiAgICAyLiAxIDw9IHN0cjIubGVuZ3RoIDw9IDEwMDBcbiAgICAzLiBzdHIxW2ldIOWSjCBzdHIyW2ldIOS4uuWkp+WGmeiLseaWh+Wtl+avjVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZ3JlYXRlc3QtY29tbW9uLWRpdmlzb3Itb2Ytc3RyaW5nc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIxXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyMlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZ2NkT2ZTdHJpbmdzID0gZnVuY3Rpb24gKHN0cjE6IHN0cmluZywgc3RyMjogc3RyaW5nKSB7XG4gIC8qKlxuICAgKiDml6LnhLbmmK/mib7mnIDlpKflhaznuqbmlbBcbiAgICog6YKj5LmI5bCx5piv55SoIOi+l+i9rOebuOmZpOazlSDmiJbogIXlj6sg5qyn5Yeg6YeM5b6X566X5rOVXG4gICAqICovXG4gIC8qKlxuICAgKiDlhYjliKTmlq3mmK/kuI3mmK8g5pyJ5YWs57qm5pWwXG4gICAqICovXG4gIGlmIChzdHIxICsgc3RyMiAhPT0gc3RyMiArIHN0cjEpIHJldHVybiBcIlwiOyAvLyDov5nkuKrmmK8g5YWF6KaB5p2h5Lu2XG4gIC8vIOi+l+i9rOebuOmZpOazlVxuICBjb25zdCBnY2QgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIgPT4gKGIgPT09IDAgPyBhIDogZ2NkKGIsIGEgJSBiKSk7XG4gIHJldHVybiBzdHIxLnN1YnN0cigwLCBnY2Qoc3RyMS5sZW5ndGgsIHN0cjIubGVuZ3RoKSk7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGdjZE9mU3RyaW5ncyhcIkFCQ0FCQ1wiLCBcIkFCQ1wiKSwgXCJBQkNcIik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChnY2RPZlN0cmluZ3MoXCJBQkFCQUJcIiwgXCJBQkFCXCIpLCBcIkFCXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGdjZE9mU3RyaW5ncyhcIkxFRVRcIiwgXCJDT0RFXCIpLCBcIlwiKTtcbiJdfQ==