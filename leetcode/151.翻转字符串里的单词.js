"use strict";
/*
给定一个字符串，逐个翻转字符串中的每个单词。

 

示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
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
assert_1.default.strictEqual(reverseWords("  hello world!  "), "world! hello");
assert_1.default.strictEqual(reverseWords("a good   example"), "example good a");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBUztJQUNwQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRXJFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6YCQ5Liq57+76L2s5a2X56ym5Liy5Lit55qE5q+P5Liq5Y2V6K+N44CCXG5cbsKgXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpTogXCJ0aGUgc2t5IGlzIGJsdWVcIlxu6L6T5Ye6OsKgXCJibHVlIGlzIHNreSB0aGVcIlxu56S65L6LIDLvvJpcblxu6L6T5YWlOiBcIiDCoGhlbGxvIHdvcmxkISDCoFwiXG7ovpPlh7o6wqBcIndvcmxkISBoZWxsb1wiXG7op6Pph4o6IOi+k+WFpeWtl+espuS4suWPr+S7peWcqOWJjemdouaIluiAheWQjumdouWMheWQq+WkmuS9meeahOepuuagvO+8jOS9huaYr+WPjei9rOWQjueahOWtl+espuS4jeiDveWMheaLrOOAglxu56S65L6LIDPvvJpcblxu6L6T5YWlOiBcImEgZ29vZCDCoCBleGFtcGxlXCJcbui+k+WHujrCoFwiZXhhbXBsZSBnb29kIGFcIlxu6Kej6YeKOiDlpoLmnpzkuKTkuKrljZXor43pl7TmnInlpJrkvZnnmoTnqbrmoLzvvIzlsIblj43ovazlkI7ljZXor43pl7TnmoTnqbrmoLzlh4/lsJHliLDlj6rlkKvkuIDkuKrjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JldmVyc2Utd29yZHMtaW4tYS1zdHJpbmdcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciByZXZlcnNlV29yZHMgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIGNvbnN0IHdvcmRzID0gcy5tYXRjaCgvXFxTKy9nKTtcbiAgcmV0dXJuIHdvcmRzID8gd29yZHMucmV2ZXJzZSgpLmpvaW4oXCIgXCIpIDogXCJcIjtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VXb3JkcyhcIiAgICAgXCIpLCBcIlwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChyZXZlcnNlV29yZHMoXCJ0aGUgc2t5IGlzIGJsdWVcIiksIFwiYmx1ZSBpcyBza3kgdGhlXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VXb3JkcyhcIiDCoGhlbGxvIHdvcmxkISDCoFwiKSwgXCJ3b3JsZCEgaGVsbG9cIik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChyZXZlcnNlV29yZHMoXCJhIGdvb2QgwqAgZXhhbXBsZVwiKSwgXCJleGFtcGxlIGdvb2QgYVwiKTtcbiJdfQ==