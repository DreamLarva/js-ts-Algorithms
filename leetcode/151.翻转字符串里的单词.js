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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBUztJQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFDckIsRUFBRSxDQUNMLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFDL0IsaUJBQWlCLENBQ3BCLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFDaEMsY0FBYyxDQUNqQixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQ2hDLGdCQUFnQixDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWtl+espuS4su+8jOmAkOS4que/u+i9rOWtl+espuS4suS4reeahOavj+S4quWNleivjeOAglxuXG7CoFxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaU6IFwidGhlIHNreSBpcyBibHVlXCJcbui+k+WHujrCoFwiYmx1ZSBpcyBza3kgdGhlXCJcbuekuuS+iyAy77yaXG5cbui+k+WFpTogXCIgwqBoZWxsbyB3b3JsZCEgwqBcIlxu6L6T5Ye6OsKgXCJ3b3JsZCEgaGVsbG9cIlxu6Kej6YeKOiDovpPlhaXlrZfnrKbkuLLlj6/ku6XlnKjliY3pnaLmiJbogIXlkI7pnaLljIXlkKvlpJrkvZnnmoTnqbrmoLzvvIzkvYbmmK/lj43ovazlkI7nmoTlrZfnrKbkuI3og73ljIXmi6zjgIJcbuekuuS+iyAz77yaXG5cbui+k+WFpTogXCJhIGdvb2QgwqAgZXhhbXBsZVwiXG7ovpPlh7o6wqBcImV4YW1wbGUgZ29vZCBhXCJcbuino+mHijog5aaC5p6c5Lik5Liq5Y2V6K+N6Ze05pyJ5aSa5L2Z55qE56m65qC877yM5bCG5Y+N6L2s5ZCO5Y2V6K+N6Ze055qE56m65qC85YeP5bCR5Yiw5Y+q5ZCr5LiA5Liq44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZXZlcnNlLXdvcmRzLWluLWEtc3RyaW5nXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgcmV2ZXJzZVdvcmRzID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICAgIGNvbnN0IHdvcmRzID0gcy5tYXRjaCgvXFxTKy9nKTtcbiAgICByZXR1cm4gd29yZHM/IHdvcmRzLnJldmVyc2UoKS5qb2luKFwiIFwiKSA6IFwiXCI7XG59O1xuXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIHJldmVyc2VXb3JkcyhcIiAgICAgXCIpLFxuICAgIFwiXCIsXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIHJldmVyc2VXb3JkcyhcInRoZSBza3kgaXMgYmx1ZVwiKSxcbiAgICBcImJsdWUgaXMgc2t5IHRoZVwiLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICByZXZlcnNlV29yZHMoXCIgwqBoZWxsbyB3b3JsZCEgwqBcIiksXG4gICAgXCJ3b3JsZCEgaGVsbG9cIixcbik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICByZXZlcnNlV29yZHMoXCJhIGdvb2QgwqAgZXhhbXBsZVwiKSxcbiAgICBcImV4YW1wbGUgZ29vZCBhXCIsXG4pO1xuXG5cblxuIl19