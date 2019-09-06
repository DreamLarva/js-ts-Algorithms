"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。


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
    3. str1[i] 和 str2[i] 为大写英文字母

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3MS7lrZfnrKbkuLLnmoTmnIDlpKflhazlm6DlrZAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwNzEu5a2X56ym5Liy55qE5pyA5aSn5YWs5Zug5a2QLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFZLEVBQUUsSUFBWTtJQUNuRDs7O1NBR0s7SUFDTDs7U0FFSztJQUNMLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVztJQUN2RCxRQUFRO0lBQ1IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRXpELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWvueS6juWtl+espuS4ssKgUyDlkozCoFTvvIzlj6rmnInlnKggUyA9IFQgKyAuLi4gKyBU77yIVMKg5LiO6Ieq6Lqr6L+e5o6lIDEg5qyh5oiW5aSa5qyh77yJ5pe277yM5oiR5Lus5omN6K6k5a6awqDigJxUIOiDvemZpOWwvSBT4oCd44CCXHJcblxyXG7ov5Tlm57lrZfnrKbkuLLCoFjvvIzopoHmsYLmu6HotrPCoFgg6IO96Zmk5bC9IHN0cjEg5LiUwqBYIOiDvemZpOWwvSBzdHIy44CCXHJcblxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpe+8mnN0cjEgPSBcIkFCQ0FCQ1wiLCBzdHIyID0gXCJBQkNcIlxyXG7ovpPlh7rvvJpcIkFCQ1wiXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJpzdHIxID0gXCJBQkFCQUJcIiwgc3RyMiA9IFwiQUJBQlwiXHJcbui+k+WHuu+8mlwiQUJcIlxyXG7npLrkvosgM++8mlxyXG5cclxu6L6T5YWl77yac3RyMSA9IFwiTEVFVFwiLCBzdHIyID0gXCJDT0RFXCJcclxu6L6T5Ye677yaXCJcIlxyXG7CoFxyXG5cclxu5o+Q56S677yaXHJcbiAgICAxLiAxIDw9IHN0cjEubGVuZ3RoIDw9IDEwMDBcclxuICAgIDIuIDEgPD0gc3RyMi5sZW5ndGggPD0gMTAwMFxyXG4gICAgMy4gc3RyMVtpXSDlkozCoHN0cjJbaV0g5Li65aSn5YaZ6Iux5paH5a2X5q+NXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9ncmVhdGVzdC1jb21tb24tZGl2aXNvci1vZi1zdHJpbmdzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyMlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgZ2NkT2ZTdHJpbmdzID0gZnVuY3Rpb24gKHN0cjE6IHN0cmluZywgc3RyMjogc3RyaW5nKSB7XHJcbiAgICAvKipcclxuICAgICAqIOaXoueEtuaYr+aJvuacgOWkp+WFrOe6puaVsFxyXG4gICAgICog6YKj5LmI5bCx5piv55SoIOi+l+i9rOebuOmZpOazlSDmiJbogIXlj6sg5qyn5Yeg6YeM5b6X566X5rOVXHJcbiAgICAgKiAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhYjliKTmlq3mmK/kuI3mmK8g5pyJ5YWs57qm5pWwXHJcbiAgICAgKiAqL1xyXG4gICAgaWYgKHN0cjEgKyBzdHIyICE9PSBzdHIyICsgc3RyMSkgcmV0dXJuIFwiXCI7IC8vIOi/meS4quaYryDlhYXopoHmnaHku7ZcclxuICAgIC8vIOi+l+i9rOebuOmZpOazlVxyXG4gICAgY29uc3QgZ2NkID0gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IChiID09PSAwID8gYSA6IGdjZChiLCBhICUgYikpO1xyXG4gICAgIHJldHVybiBzdHIxLnN1YnN0cigwLCBnY2Qoc3RyMS5sZW5ndGgsIHN0cjIubGVuZ3RoKSk7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChnY2RPZlN0cmluZ3MoXCJBQkNBQkNcIiwgXCJBQkNcIiksIFwiQUJDXCIpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGdjZE9mU3RyaW5ncyhcIkFCQUJBQlwiLCBcIkFCQUJcIiksIFwiQUJcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChnY2RPZlN0cmluZ3MoXCJMRUVUXCIsIFwiQ09ERVwiKSwgXCJcIik7XHJcbiJdfQ==