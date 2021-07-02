"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。



示例 1：

输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：["cool","lock","cook"]
输出：["c","o"]


提示：

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string[]} A
 * @return {string[]}
 */
const lodash_1 = __importDefault(require("lodash"));
var commonChars = function (A) {
    const map = {};
    for (const character of A[0]) {
        map[character] = map[character] == null ? 1 : map[character] + 1;
    }
    if (A.length !== 1) {
        for (let i = 1; i < A.length; i++) {
            const _map = {};
            for (const character of A[i]) {
                _map[character] = _map[character] == null ? 1 : _map[character] + 1;
            }
            for (const [key, value] of Object.entries(map)) {
                map[key] = Math.min(value, _map[key] || 0);
            }
        }
    }
    const result = [];
    for (const [key, value] of Object.entries(map)) {
        lodash_1.default.times(value, () => result.push(key));
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(commonChars(["bella", "label", "roller"]), [
    "e",
    "l",
    "l",
]);
assert_1.default.deepStrictEqual(commonChars(["cool", "lock", "cook"]), ["c", "o"]);
assert_1.default.deepStrictEqual(commonChars([
    "bcaddcdd",
    "cbcdccdd",
    "ddccbdda",
    "dacbbdad",
    "dababdcb",
    "bccbdaad",
    "dbccbabd",
    "accdddda",
]), ["c", "d", "d"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwMi7mn6Xmib7luLjnlKjlrZfnrKYuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMDIu5p+l5om+5bi455So5a2X56ymLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0o7OztHQUdHO0FBQ0gsb0RBQXVCO0FBRXZCLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBVztJQUNyQyxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBRTFDLEtBQUssTUFBTSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEU7SUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxHQUE4QixFQUFFLENBQUM7WUFDM0MsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckU7WUFFRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM1QztTQUNGO0tBQ0Y7SUFFRCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDOUMsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN4QztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7SUFDaEUsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUUsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLFdBQVcsQ0FBQztJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0NBQ1gsQ0FBQyxFQUNGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprku4XmnInlsI/lhpnlrZfmr43nu4TmiJDnmoTlrZfnrKbkuLLmlbDnu4QgQe+8jOi/lOWbnuWIl+ihqOS4reeahOavj+S4quWtl+espuS4suS4remDveaYvuekuueahOWFqOmDqOWtl+espu+8iOWMheaLrOmHjeWkjeWtl+espu+8iee7hOaIkOeahOWIl+ihqOOAguS+i+Wmgu+8jOWmguaenOS4gOS4quWtl+espuWcqOavj+S4quWtl+espuS4suS4reWHuueOsCAzIOasoe+8jOS9huS4jeaYryA0IOasoe+8jOWImemcgOimgeWcqOacgOe7iOetlOahiOS4reWMheWQq+ivpeWtl+espiAzIOasoeOAglxuXG7kvaDlj6/ku6XmjInku7vmhI/pobrluo/ov5Tlm57nrZTmoYjjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mltcImJlbGxhXCIsXCJsYWJlbFwiLFwicm9sbGVyXCJdXG7ovpPlh7rvvJpbXCJlXCIsXCJsXCIsXCJsXCJdXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpbXCJjb29sXCIsXCJsb2NrXCIsXCJjb29rXCJdXG7ovpPlh7rvvJpbXCJjXCIsXCJvXCJdXG5cblxu5o+Q56S677yaXG5cbjEgPD0gQS5sZW5ndGggPD0gMTAwXG4xIDw9IEFbaV0ubGVuZ3RoIDw9IDEwMFxuQVtpXVtqXSDmmK/lsI/lhpnlrZfmr41cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ZpbmQtY29tbW9uLWNoYXJhY3RlcnNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBBXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG52YXIgY29tbW9uQ2hhcnMgPSBmdW5jdGlvbiAoQTogc3RyaW5nW10pIHtcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2YgQVswXSkge1xuICAgIG1hcFtjaGFyYWN0ZXJdID0gbWFwW2NoYXJhY3Rlcl0gPT0gbnVsbCA/IDEgOiBtYXBbY2hhcmFjdGVyXSArIDE7XG4gIH1cbiAgaWYgKEEubGVuZ3RoICE9PSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBBLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBfbWFwOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBBW2ldKSB7XG4gICAgICAgIF9tYXBbY2hhcmFjdGVyXSA9IF9tYXBbY2hhcmFjdGVyXSA9PSBudWxsID8gMSA6IF9tYXBbY2hhcmFjdGVyXSArIDE7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1hcCkpIHtcbiAgICAgICAgbWFwW2tleV0gPSBNYXRoLm1pbih2YWx1ZSwgX21hcFtrZXldIHx8IDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWFwKSkge1xuICAgIF8udGltZXModmFsdWUsICgpID0+IHJlc3VsdC5wdXNoKGtleSkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbW1vbkNoYXJzKFtcImJlbGxhXCIsIFwibGFiZWxcIiwgXCJyb2xsZXJcIl0pLCBbXG4gIFwiZVwiLFxuICBcImxcIixcbiAgXCJsXCIsXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoY29tbW9uQ2hhcnMoW1wiY29vbFwiLCBcImxvY2tcIiwgXCJjb29rXCJdKSwgW1wiY1wiLCBcIm9cIl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgY29tbW9uQ2hhcnMoW1xuICAgIFwiYmNhZGRjZGRcIixcbiAgICBcImNiY2RjY2RkXCIsXG4gICAgXCJkZGNjYmRkYVwiLFxuICAgIFwiZGFjYmJkYWRcIixcbiAgICBcImRhYmFiZGNiXCIsXG4gICAgXCJiY2NiZGFhZFwiLFxuICAgIFwiZGJjY2JhYmRcIixcbiAgICBcImFjY2RkZGRhXCIsXG4gIF0pLFxuICBbXCJjXCIsIFwiZFwiLCBcImRcIl1cbik7XG4iXX0=