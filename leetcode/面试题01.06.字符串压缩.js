"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

示例1:

 输入："aabcccccaaa"
 输出："a2b1c5a3"
示例2:

 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
提示：
    1.字符串长度在[0, 50000]范围内。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/compress-string-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  const strAfterCompress = S.replace(
    /(\w)(\1*)/g,
    (str) => str[0] + str.length
  );
  return S.length <= strAfterCompress.length ? S : strAfterCompress;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(compressString("aabcccccaa"), "a2b1c5a2");
assert_1.default.strictEqual(compressString("bb"), "bb");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYMDEuMDYu5a2X56ym5Liy5Y6L57ypLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/pnaLor5XpopgwMS4wNi7lrZfnrKbkuLLljovnvKkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTO0lBQ3RDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FDaEMsWUFBWSxFQUNaLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FDN0IsQ0FBQztJQUNGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5a2X56ym5Liy5Y6L57yp44CC5Yip55So5a2X56ym6YeN5aSN5Ye6546w55qE5qyh5pWw77yM57yW5YaZ5LiA56eN5pa55rOV77yM5a6e546w5Z+65pys55qE5a2X56ym5Liy5Y6L57yp5Yqf6IO944CC5q+U5aaC77yM5a2X56ym5LiyYWFiY2NjY2NhYWHkvJrlj5jkuLphMmIxYzVhM+OAguiLpeKAnOWOi+e8qeKAneWQjueahOWtl+espuS4suayoeacieWPmOefre+8jOWImei/lOWbnuWOn+WFiOeahOWtl+espuS4suOAguS9oOWPr+S7peWBh+iuvuWtl+espuS4suS4reWPquWMheWQq+Wkp+Wwj+WGmeiLseaWh+Wtl+avje+8iGHoh7N677yJ44CCXG5cbuekuuS+izE6XG5cbiDovpPlhaXvvJpcImFhYmNjY2NjYWFhXCJcbiDovpPlh7rvvJpcImEyYjFjNWEzXCJcbuekuuS+izI6XG5cbiDovpPlhaXvvJpcImFiYmNjZFwiXG4g6L6T5Ye677yaXCJhYmJjY2RcIlxuIOino+mHiu+8mlwiYWJiY2NkXCLljovnvKnlkI7kuLpcImExYjJjMmQxXCLvvIzmr5Tljp/lrZfnrKbkuLLplb/luqbmm7Tplb/jgIJcbuaPkOekuu+8mlxuICAgIDEu5a2X56ym5Liy6ZW/5bqm5ZyoWzAsIDUwMDAwXeiMg+WbtOWGheOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY29tcHJlc3Mtc3RyaW5nLWxjY2lcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gU1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgY29tcHJlc3NTdHJpbmcgPSBmdW5jdGlvbiAoUzogc3RyaW5nKSB7XG4gIGNvbnN0IHN0ckFmdGVyQ29tcHJlc3MgPSBTLnJlcGxhY2UoXG4gICAgLyhcXHcpKFxcMSopL2csXG4gICAgKHN0cikgPT4gc3RyWzBdICsgc3RyLmxlbmd0aFxuICApO1xuICByZXR1cm4gUy5sZW5ndGggPD0gc3RyQWZ0ZXJDb21wcmVzcy5sZW5ndGggPyBTIDogc3RyQWZ0ZXJDb21wcmVzcztcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGNvbXByZXNzU3RyaW5nKFwiYWFiY2NjY2NhYVwiKSwgXCJhMmIxYzVhMlwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChjb21wcmVzc1N0cmluZyhcImJiXCIpLCBcImJiXCIpO1xuIl19
