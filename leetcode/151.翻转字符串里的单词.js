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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
assert_1.default.strictEqual(
  reverseWords("the sky is blue"),
  "blue is sky the"
);
assert_1.default.strictEqual(reverseWords("  hello world!  "), "world! hello");
assert_1.default.strictEqual(
  reverseWords("a good   example"),
  "example good a"
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUxLue/u+i9rOWtl+espuS4sumHjOeahOWNleivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBUztJQUNsQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sS0FBSyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFDckIsRUFBRSxDQUNMLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFDL0IsaUJBQWlCLENBQ3BCLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFDaEMsY0FBYyxDQUNqQixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQ2hDLGdCQUFnQixDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5a2X56ym5Liy77yM6YCQ5Liq57+76L2s5a2X56ym5Liy5Lit55qE5q+P5Liq5Y2V6K+N44CCXHJcblxyXG7CoFxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpTogXCJ0aGUgc2t5IGlzIGJsdWVcIlxyXG7ovpPlh7o6wqBcImJsdWUgaXMgc2t5IHRoZVwiXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaU6IFwiIMKgaGVsbG8gd29ybGQhIMKgXCJcclxu6L6T5Ye6OsKgXCJ3b3JsZCEgaGVsbG9cIlxyXG7op6Pph4o6IOi+k+WFpeWtl+espuS4suWPr+S7peWcqOWJjemdouaIluiAheWQjumdouWMheWQq+WkmuS9meeahOepuuagvO+8jOS9huaYr+WPjei9rOWQjueahOWtl+espuS4jeiDveWMheaLrOOAglxyXG7npLrkvosgM++8mlxyXG5cclxu6L6T5YWlOiBcImEgZ29vZCDCoCBleGFtcGxlXCJcclxu6L6T5Ye6OsKgXCJleGFtcGxlIGdvb2QgYVwiXHJcbuino+mHijog5aaC5p6c5Lik5Liq5Y2V6K+N6Ze05pyJ5aSa5L2Z55qE56m65qC877yM5bCG5Y+N6L2s5ZCO5Y2V6K+N6Ze055qE56m65qC85YeP5bCR5Yiw5Y+q5ZCr5LiA5Liq44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZXZlcnNlLXdvcmRzLWluLWEtc3RyaW5nXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIHJldmVyc2VXb3JkcyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHdvcmRzID0gcy5tYXRjaCgvXFxTKy9nKTtcclxuICAgIHJldHVybiB3b3Jkcz8gd29yZHMucmV2ZXJzZSgpLmpvaW4oXCIgXCIpIDogXCJcIjtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgcmV2ZXJzZVdvcmRzKFwiICAgICBcIiksXHJcbiAgICBcIlwiLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICByZXZlcnNlV29yZHMoXCJ0aGUgc2t5IGlzIGJsdWVcIiksXHJcbiAgICBcImJsdWUgaXMgc2t5IHRoZVwiLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICByZXZlcnNlV29yZHMoXCIgwqBoZWxsbyB3b3JsZCEgwqBcIiksXHJcbiAgICBcIndvcmxkISBoZWxsb1wiLFxyXG4pO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgcmV2ZXJzZVdvcmRzKFwiYSBnb29kIMKgIGV4YW1wbGVcIiksXHJcbiAgICBcImV4YW1wbGUgZ29vZCBhXCIsXHJcbik7XHJcblxyXG5cclxuXHJcbiJdfQ==
