"use strict";
/*
给定一个字符串，逐个翻转字符串中的每个单词。



示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.match(/\S+/g);
    return words ? words.reverse().join(" ") : "";
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseWords("     "), "");
assert_1.default.strictEqual(reverseWords("the sky is blue"), "blue is sky the");
assert_1.default.strictEqual(reverseWords("  hello world!  "), "world! hello");
assert_1.default.strictEqual(reverseWords("a good   example"), "example good a");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBUztJQUNwQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXJFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6YCQ5Liq57+76L2s5a2X56ym5Liy5Lit55qE5q+P5Liq5Y2V6K+N44CCXG5cblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaU6IFwidGhlIHNreSBpcyBibHVlXCJcbui+k+WHujogXCJibHVlIGlzIHNreSB0aGVcIlxu56S65L6LIDLvvJpcblxu6L6T5YWlOiBcIiAgaGVsbG8gd29ybGQhICBcIlxu6L6T5Ye6OiBcIndvcmxkISBoZWxsb1wiXG7op6Pph4o6IOi+k+WFpeWtl+espuS4suWPr+S7peWcqOWJjemdouaIluiAheWQjumdouWMheWQq+WkmuS9meeahOepuuagvO+8jOS9huaYr+WPjei9rOWQjueahOWtl+espuS4jeiDveWMheaLrOOAglxu56S65L6LIDPvvJpcblxu6L6T5YWlOiBcImEgZ29vZCAgIGV4YW1wbGVcIlxu6L6T5Ye6OiBcImV4YW1wbGUgZ29vZCBhXCJcbuino+mHijog5aaC5p6c5Lik5Liq5Y2V6K+N6Ze05pyJ5aSa5L2Z55qE56m65qC877yM5bCG5Y+N6L2s5ZCO5Y2V6K+N6Ze055qE56m65qC85YeP5bCR5Yiw5Y+q5ZCr5LiA5Liq44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZXZlcnNlLXdvcmRzLWluLWEtc3RyaW5nXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgcmV2ZXJzZVdvcmRzID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICBjb25zdCB3b3JkcyA9IHMubWF0Y2goL1xcUysvZyk7XG4gIHJldHVybiB3b3JkcyA/IHdvcmRzLnJldmVyc2UoKS5qb2luKFwiIFwiKSA6IFwiXCI7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChyZXZlcnNlV29yZHMoXCIgICAgIFwiKSwgXCJcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwocmV2ZXJzZVdvcmRzKFwidGhlIHNreSBpcyBibHVlXCIpLCBcImJsdWUgaXMgc2t5IHRoZVwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChyZXZlcnNlV29yZHMoXCIgIGhlbGxvIHdvcmxkISAgXCIpLCBcIndvcmxkISBoZWxsb1wiKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VXb3JkcyhcImEgZ29vZCAgIGV4YW1wbGVcIiksIFwiZXhhbXBsZSBnb29kIGFcIik7XG4iXX0=