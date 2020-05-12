"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:

输入: J = "z", S = "ZZ"
输出: 0

注意:
S 和 J 最多含有50个字母。
J 中的字符不重复。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jewels-and-stones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let result = 0;
  const map = {};
  for (const gem of J) {
    map[gem] = true;
  }
  for (const stone of S) {
    if (map[stone]) {
      result++;
    }
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(numJewelsInStones("aA", "aAAbbbb"), 3);
assert_1.default.strictEqual(numJewelsInStones("z", "ZZ"), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcxLuWuneefs+S4juefs+WktC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzcxLuWuneefs+S4juefs+WktC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ2xELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE1BQU0sR0FBRyxHQUE0QixFQUFFLENBQUM7SUFDeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNuQjtJQUVELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ25CLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osTUFBTSxFQUFFLENBQUM7U0FDWjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFDbEMsQ0FBQyxDQUNKLENBQUM7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQzVCLENBQUMsQ0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuWtl+espuS4skrCoOS7o+ihqOefs+WktOS4reWuneefs+eahOexu+Wei++8jOWSjOWtl+espuS4ssKgU+S7o+ihqOS9oOaLpeacieeahOefs+WktOOAgsKgU8Kg5Lit5q+P5Liq5a2X56ym5Luj6KGo5LqG5LiA56eN5L2g5oul5pyJ55qE55+z5aS055qE57G75Z6L77yM5L2g5oOz55+l6YGT5L2g5oul5pyJ55qE55+z5aS05Lit5pyJ5aSa5bCR5piv5a6d55+z44CCXG5cbkrCoOS4reeahOWtl+avjeS4jemHjeWkje+8jErCoOWSjMKgU+S4reeahOaJgOacieWtl+espumDveaYr+Wtl+avjeOAguWtl+avjeWMuuWIhuWkp+Wwj+WGme+8jOWboOatpFwiYVwi5ZKMXCJBXCLmmK/kuI3lkIznsbvlnovnmoTnn7PlpLTjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogSiA9IFwiYUFcIiwgUyA9IFwiYUFBYmJiYlwiXG7ovpPlh7o6IDNcbuekuuS+iyAyOlxuXG7ovpPlhaU6IEogPSBcInpcIiwgUyA9IFwiWlpcIlxu6L6T5Ye6OiAwXG5cbuazqOaEjzpcblPCoOWSjMKgSsKg5pyA5aSa5ZCr5pyJNTDkuKrlrZfmr43jgIJcbkrCoOS4reeahOWtl+espuS4jemHjeWkjeOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvamV3ZWxzLWFuZC1zdG9uZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gSlxuICogQHBhcmFtIHtzdHJpbmd9IFNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG51bUpld2Vsc0luU3RvbmVzID0gZnVuY3Rpb24gKEo6IHN0cmluZywgUzogc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IHRydWUgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgZ2VtIG9mIEopIHtcbiAgICAgICAgbWFwW2dlbV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc3RvbmUgb2YgUykge1xuICAgICAgICBpZiAobWFwW3N0b25lXSkge1xuICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBudW1KZXdlbHNJblN0b25lcygnYUEnLCAnYUFBYmJiYicpLFxuICAgIDMsXG4pO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgbnVtSmV3ZWxzSW5TdG9uZXMoJ3onLCAnWlonKSxcbiAgICAwLFxuKTtcbiJdfQ==
