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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYIDAxLjA2LiDlrZfnrKbkuLLljovnvKkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+mdouivlemimCAwMS4wNi4g5a2X56ym5Liy5Y6L57ypLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCSTtBQUNKOzs7R0FHRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBUztJQUN0QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxPQUFPLENBQ2hDLFlBQVksRUFDWixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQzdCLENBQUM7SUFDRixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWtl+espuS4suWOi+e8qeOAguWIqeeUqOWtl+espumHjeWkjeWHuueOsOeahOasoeaVsO+8jOe8luWGmeS4gOenjeaWueazle+8jOWunueOsOWfuuacrOeahOWtl+espuS4suWOi+e8qeWKn+iDveOAguavlOWmgu+8jOWtl+espuS4smFhYmNjY2NjYWFh5Lya5Y+Y5Li6YTJiMWM1YTPjgILoi6XigJzljovnvKnigJ3lkI7nmoTlrZfnrKbkuLLmsqHmnInlj5jnn63vvIzliJnov5Tlm57ljp/lhYjnmoTlrZfnrKbkuLLjgILkvaDlj6/ku6XlgYforr7lrZfnrKbkuLLkuK3lj6rljIXlkKvlpKflsI/lhpnoi7HmloflrZfmr43vvIhh6Iezeu+8ieOAglxuXG7npLrkvosxOlxuXG4g6L6T5YWl77yaXCJhYWJjY2NjY2FhYVwiXG4g6L6T5Ye677yaXCJhMmIxYzVhM1wiXG7npLrkvosyOlxuXG4g6L6T5YWl77yaXCJhYmJjY2RcIlxuIOi+k+WHuu+8mlwiYWJiY2NkXCJcbiDop6Pph4rvvJpcImFiYmNjZFwi5Y6L57yp5ZCO5Li6XCJhMWIyYzJkMVwi77yM5q+U5Y6f5a2X56ym5Liy6ZW/5bqm5pu06ZW/44CCXG7mj5DnpLrvvJpcbiAgICAxLuWtl+espuS4sumVv+W6puWcqFswLCA1MDAwMF3ojIPlm7TlhoXjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2NvbXByZXNzLXN0cmluZy1sY2NpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGNvbXByZXNzU3RyaW5nID0gZnVuY3Rpb24gKFM6IHN0cmluZykge1xuICBjb25zdCBzdHJBZnRlckNvbXByZXNzID0gUy5yZXBsYWNlKFxuICAgIC8oXFx3KShcXDEqKS9nLFxuICAgIChzdHIpID0+IHN0clswXSArIHN0ci5sZW5ndGhcbiAgKTtcbiAgcmV0dXJuIFMubGVuZ3RoIDw9IHN0ckFmdGVyQ29tcHJlc3MubGVuZ3RoID8gUyA6IHN0ckFmdGVyQ29tcHJlc3M7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChjb21wcmVzc1N0cmluZyhcImFhYmNjY2NjYWFcIiksIFwiYTJiMWM1YTJcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoY29tcHJlc3NTdHJpbmcoXCJiYlwiKSwgXCJiYlwiKTtcbiJdfQ==
