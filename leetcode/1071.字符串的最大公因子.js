"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  if (str1 + str2 !== str2 + str1) return ""; // 这个是 充要条件
  // 辗转相除法
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return str1.substr(0, gcd(str1.length, str2.length));
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(gcdOfStrings("ABCABC", "ABC"), "ABC");
assert_1.default.strictEqual(gcdOfStrings("ABABAB", "ABAB"), "AB");
assert_1.default.strictEqual(gcdOfStrings("LEET", "CODE"), "");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3MS7lrZfnrKbkuLLnmoTmnIDlpKflhazlm6DlrZAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwNzEu5a2X56ym5Liy55qE5pyA5aSn5YWs5Zug5a2QLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxJQUFZLEVBQUUsSUFBWTtJQUNuRDs7O1NBR0s7SUFDTDs7U0FFSztJQUNMLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsV0FBVztJQUN2RCxRQUFRO0lBQ1IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRXpELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7lr7nkuo7lrZfnrKbkuLLCoFMg5ZKMwqBU77yM5Y+q5pyJ5ZyoIFMgPSBUICsgLi4uICsgVO+8iFTCoOS4juiHqui6q+i/nuaOpSAxIOasoeaIluWkmuasoe+8ieaXtu+8jOaIkeS7rOaJjeiupOWumsKg4oCcVCDog73pmaTlsL0gU+KAneOAglxuXG7ov5Tlm57lrZfnrKbkuLLCoFjvvIzopoHmsYLmu6HotrPCoFgg6IO96Zmk5bC9IHN0cjEg5LiUwqBYIOiDvemZpOWwvSBzdHIy44CCXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yac3RyMSA9IFwiQUJDQUJDXCIsIHN0cjIgPSBcIkFCQ1wiXG7ovpPlh7rvvJpcIkFCQ1wiXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpzdHIxID0gXCJBQkFCQUJcIiwgc3RyMiA9IFwiQUJBQlwiXG7ovpPlh7rvvJpcIkFCXCJcbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mnN0cjEgPSBcIkxFRVRcIiwgc3RyMiA9IFwiQ09ERVwiXG7ovpPlh7rvvJpcIlwiXG7CoFxuXG7mj5DnpLrvvJpcbiAgICAxLiAxIDw9IHN0cjEubGVuZ3RoIDw9IDEwMDBcbiAgICAyLiAxIDw9IHN0cjIubGVuZ3RoIDw9IDEwMDBcbiAgICAzLiBzdHIxW2ldIOWSjMKgc3RyMltpXSDkuLrlpKflhpnoi7HmloflrZfmr41cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2dyZWF0ZXN0LWNvbW1vbi1kaXZpc29yLW9mLXN0cmluZ3NcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyMVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cjJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGdjZE9mU3RyaW5ncyA9IGZ1bmN0aW9uIChzdHIxOiBzdHJpbmcsIHN0cjI6IHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIOaXoueEtuaYr+aJvuacgOWkp+WFrOe6puaVsFxuICAgICAqIOmCo+S5iOWwseaYr+eUqCDovpfovaznm7jpmaTms5Ug5oiW6ICF5Y+rIOasp+WHoOmHjOW+l+eul+azlVxuICAgICAqICovXG4gICAgLyoqXG4gICAgICog5YWI5Yik5pat5piv5LiN5pivIOacieWFrOe6puaVsFxuICAgICAqICovXG4gICAgaWYgKHN0cjEgKyBzdHIyICE9PSBzdHIyICsgc3RyMSkgcmV0dXJuIFwiXCI7IC8vIOi/meS4quaYryDlhYXopoHmnaHku7ZcbiAgICAvLyDovpfovaznm7jpmaTms5VcbiAgICBjb25zdCBnY2QgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIgPT4gKGIgPT09IDAgPyBhIDogZ2NkKGIsIGEgJSBiKSk7XG4gICAgIHJldHVybiBzdHIxLnN1YnN0cigwLCBnY2Qoc3RyMS5sZW5ndGgsIHN0cjIubGVuZ3RoKSk7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGdjZE9mU3RyaW5ncyhcIkFCQ0FCQ1wiLCBcIkFCQ1wiKSwgXCJBQkNcIik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChnY2RPZlN0cmluZ3MoXCJBQkFCQUJcIiwgXCJBQkFCXCIpLCBcIkFCXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGdjZE9mU3RyaW5ncyhcIkxFRVRcIiwgXCJDT0RFXCIpLCBcIlwiKTtcbiJdfQ==
