"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:

输入: J = "z", S = "ZZ"
输出: 0

注意:
S 和 J 最多含有50个字母。
J 中的字符不重复。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcxLuWuneefs+S4juefs+WktC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzcxLuWuneefs+S4juefs+WktC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQ3BELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE1BQU0sR0FBRyxHQUE0QixFQUFFLENBQUM7SUFDeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNqQjtJQUVELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3JCLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2QsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUxRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5a2X56ym5LiySiDku6Pooajnn7PlpLTkuK3lrp3nn7PnmoTnsbvlnovvvIzlkozlrZfnrKbkuLIgU+S7o+ihqOS9oOaLpeacieeahOefs+WktOOAgiBTIOS4reavj+S4quWtl+espuS7o+ihqOS6huS4gOenjeS9oOaLpeacieeahOefs+WktOeahOexu+Wei++8jOS9oOaDs+efpemBk+S9oOaLpeacieeahOefs+WktOS4reacieWkmuWwkeaYr+Wuneefs+OAglxuXG5KIOS4reeahOWtl+avjeS4jemHjeWkje+8jEog5ZKMIFPkuK3nmoTmiYDmnInlrZfnrKbpg73mmK/lrZfmr43jgILlrZfmr43ljLrliIblpKflsI/lhpnvvIzlm6DmraRcImFcIuWSjFwiQVwi5piv5LiN5ZCM57G75Z6L55qE55+z5aS044CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IEogPSBcImFBXCIsIFMgPSBcImFBQWJiYmJcIlxu6L6T5Ye6OiAzXG7npLrkvosgMjpcblxu6L6T5YWlOiBKID0gXCJ6XCIsIFMgPSBcIlpaXCJcbui+k+WHujogMFxuXG7ms6jmhI86XG5TIOWSjCBKIOacgOWkmuWQq+aciTUw5Liq5a2X5q+N44CCXG5KIOS4reeahOWtl+espuS4jemHjeWkjeOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvamV3ZWxzLWFuZC1zdG9uZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gSlxuICogQHBhcmFtIHtzdHJpbmd9IFNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG51bUpld2Vsc0luU3RvbmVzID0gZnVuY3Rpb24gKEo6IHN0cmluZywgUzogc3RyaW5nKSB7XG4gIGxldCByZXN1bHQgPSAwO1xuICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogdHJ1ZSB9ID0ge307XG4gIGZvciAoY29uc3QgZ2VtIG9mIEopIHtcbiAgICBtYXBbZ2VtXSA9IHRydWU7XG4gIH1cblxuICBmb3IgKGNvbnN0IHN0b25lIG9mIFMpIHtcbiAgICBpZiAobWFwW3N0b25lXSkge1xuICAgICAgcmVzdWx0Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobnVtSmV3ZWxzSW5TdG9uZXMoXCJhQVwiLCBcImFBQWJiYmJcIiksIDMpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobnVtSmV3ZWxzSW5TdG9uZXMoXCJ6XCIsIFwiWlpcIiksIDApO1xuIl19