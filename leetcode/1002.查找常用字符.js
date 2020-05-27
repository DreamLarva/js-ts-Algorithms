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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwMi7mn6Xmib7luLjnlKjlrZfnrKYuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMDIu5p+l5om+5bi455So5a2X56ymLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJO0FBQ0o7OztHQUdHO0FBQ0gsb0RBQXVCO0FBRXZCLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBVztJQUNyQyxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0lBRTFDLEtBQUssTUFBTSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEU7SUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxHQUE4QixFQUFFLENBQUM7WUFDM0MsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckU7WUFFRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM1QztTQUNGO0tBQ0Y7SUFFRCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDOUMsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN4QztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7SUFDaEUsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxDQUFDO0FBQ0gsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUUsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLFdBQVcsQ0FBQztJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0NBQ1gsQ0FBQyxFQUNGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprku4XmnInlsI/lhpnlrZfmr43nu4TmiJDnmoTlrZfnrKbkuLLmlbDnu4QgQe+8jOi/lOWbnuWIl+ihqOS4reeahOavj+S4quWtl+espuS4suS4remDveaYvuekuueahOWFqOmDqOWtl+espu+8iOWMheaLrOmHjeWkjeWtl+espu+8iee7hOaIkOeahOWIl+ihqOOAguS+i+Wmgu+8jOWmguaenOS4gOS4quWtl+espuWcqOavj+S4quWtl+espuS4suS4reWHuueOsCAzIOasoe+8jOS9huS4jeaYryA0IOasoe+8jOWImemcgOimgeWcqOacgOe7iOetlOahiOS4reWMheWQq+ivpeWtl+espiAzIOasoeOAglxuXG7kvaDlj6/ku6XmjInku7vmhI/pobrluo/ov5Tlm57nrZTmoYjjgIJcblxuwqBcblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaW1wiYmVsbGFcIixcImxhYmVsXCIsXCJyb2xsZXJcIl1cbui+k+WHuu+8mltcImVcIixcImxcIixcImxcIl1cbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mltcImNvb2xcIixcImxvY2tcIixcImNvb2tcIl1cbui+k+WHuu+8mltcImNcIixcIm9cIl1cbsKgXG5cbuaPkOekuu+8mlxuXG4xIDw9IEEubGVuZ3RoIDw9IDEwMFxuMSA8PSBBW2ldLmxlbmd0aCA8PSAxMDBcbkFbaV1bal0g5piv5bCP5YaZ5a2X5q+NXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9maW5kLWNvbW1vbi1jaGFyYWN0ZXJzXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gQVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxudmFyIGNvbW1vbkNoYXJzID0gZnVuY3Rpb24gKEE6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gIGZvciAoY29uc3QgY2hhcmFjdGVyIG9mIEFbMF0pIHtcbiAgICBtYXBbY2hhcmFjdGVyXSA9IG1hcFtjaGFyYWN0ZXJdID09IG51bGwgPyAxIDogbWFwW2NoYXJhY3Rlcl0gKyAxO1xuICB9XG4gIGlmIChBLmxlbmd0aCAhPT0gMSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgQS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgX21hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2YgQVtpXSkge1xuICAgICAgICBfbWFwW2NoYXJhY3Rlcl0gPSBfbWFwW2NoYXJhY3Rlcl0gPT0gbnVsbCA/IDEgOiBfbWFwW2NoYXJhY3Rlcl0gKyAxO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtYXApKSB7XG4gICAgICAgIG1hcFtrZXldID0gTWF0aC5taW4odmFsdWUsIF9tYXBba2V5XSB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1hcCkpIHtcbiAgICBfLnRpbWVzKHZhbHVlLCAoKSA9PiByZXN1bHQucHVzaChrZXkpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChjb21tb25DaGFycyhbXCJiZWxsYVwiLCBcImxhYmVsXCIsIFwicm9sbGVyXCJdKSwgW1xuICBcImVcIixcbiAgXCJsXCIsXG4gIFwibFwiLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGNvbW1vbkNoYXJzKFtcImNvb2xcIiwgXCJsb2NrXCIsIFwiY29va1wiXSksIFtcImNcIiwgXCJvXCJdKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGNvbW1vbkNoYXJzKFtcbiAgICBcImJjYWRkY2RkXCIsXG4gICAgXCJjYmNkY2NkZFwiLFxuICAgIFwiZGRjY2JkZGFcIixcbiAgICBcImRhY2JiZGFkXCIsXG4gICAgXCJkYWJhYmRjYlwiLFxuICAgIFwiYmNjYmRhYWRcIixcbiAgICBcImRiY2NiYWJkXCIsXG4gICAgXCJhY2NkZGRkYVwiLFxuICBdKSxcbiAgW1wiY1wiLCBcImRcIiwgXCJkXCJdXG4pO1xuIl19