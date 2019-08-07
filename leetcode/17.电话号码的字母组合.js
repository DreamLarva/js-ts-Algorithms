"use strict";
/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

"2"  对应  "abc"
"3"  对应  "def"
"4"  对应  "ghi"
"5"  对应  "jkl"
"6"  对应  "mno"
"7"  对应  "pqrs"
"8"  对应  "tuv"
"9"  对应  "wxyz"

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0)
        return [];
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };
    const result = [];
    backTrack("", digits);
    return result;
    function backTrack(curStr, restStr) {
        if (restStr.length === 0) {
            result.push(curStr);
            return;
        }
        const mappingData = map[restStr[0]];
        for (let i = 0; i < mappingData.length; i++) {
            backTrack(curStr + mappingData[i], restStr.slice(1));
        }
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(letterCombinations("").sort(), [].sort());
assert_1.default.deepStrictEqual(letterCombinations("23").sort(), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort());
assert_1.default.deepStrictEqual(letterCombinations("295").sort(), ["awj", "awk", "awl", "axj", "axk", "axl", "ayj", "ayk", "ayl", "azj", "azk", "azl", "bwj", "bwk", "bwl", "bxj", "bxk", "bxl", "byj", "byk", "byl", "bzj", "bzk", "bzl", "cwj", "cwk", "cwl", "cxj", "cxk", "cxl", "cyj", "cyk", "cyl", "czj", "czk", "czl"].sort());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcu55S16K+d5Y+356CB55qE5a2X5q+N57uE5ZCILmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNy7nlLXor53lj7fnoIHnmoTlrZfmr43nu4TlkIgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLE1BQWM7SUFDN0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUluQyxNQUFNLEdBQUcsR0FBbUM7UUFDeEMsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxLQUFLO1FBQ1YsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsTUFBTTtLQUNkLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlO1FBQzlDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFDRCxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxDQUFDLENBQUM7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztBQUVMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQzdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FDWixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUMvQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ2hFLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ2hDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDdFEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quS7heWMheWQq+aVsOWtl8KgMi05wqDnmoTlrZfnrKbkuLLvvIzov5Tlm57miYDmnInlroPog73ooajnpLrnmoTlrZfmr43nu4TlkIjjgIJcclxuXHJcbue7meWHuuaVsOWtl+WIsOWtl+avjeeahOaYoOWwhOWmguS4i++8iOS4jueUteivneaMiemUruebuOWQjO+8ieOAguazqOaEjyAxIOS4jeWvueW6lOS7u+S9leWtl+avjeOAglxyXG5cclxuXCIyXCIgIOWvueW6lCAgXCJhYmNcIlxyXG5cIjNcIiAg5a+55bqUICBcImRlZlwiXHJcblwiNFwiICDlr7nlupQgIFwiZ2hpXCJcclxuXCI1XCIgIOWvueW6lCAgXCJqa2xcIlxyXG5cIjZcIiAg5a+55bqUICBcIm1ub1wiXHJcblwiN1wiICDlr7nlupQgIFwicHFyc1wiXHJcblwiOFwiICDlr7nlupQgIFwidHV2XCJcclxuXCI5XCIgIOWvueW6lCAgXCJ3eHl6XCJcclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpe+8mlwiMjNcIlxyXG7ovpPlh7rvvJpbXCJhZFwiLCBcImFlXCIsIFwiYWZcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIl0uXHJcbuivtOaYjjpcclxu5bC9566h5LiK6Z2i55qE562U5qGI5piv5oyJ5a2X5YW45bqP5o6S5YiX55qE77yM5L2G5piv5L2g5Y+v5Lul5Lu75oSP6YCJ5oup562U5qGI6L6T5Ye655qE6aG65bqP44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9sZXR0ZXItY29tYmluYXRpb25zLW9mLWEtcGhvbmUtbnVtYmVyXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IGRpZ2l0c1xyXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cclxuICovXHJcbnZhciBsZXR0ZXJDb21iaW5hdGlvbnMgPSBmdW5jdGlvbiAoZGlnaXRzOiBzdHJpbmcpIHtcclxuICAgIGlmIChkaWdpdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XHJcbiAgICAvLyDlub/luqbkvJjlhYgg5rex5bqm5LyY5YWIIOeahuWPr1xyXG4gICAgLy8g5L2G5pivIOi/mOaYr+Wbnua6r+azleabtOS9s1xyXG4gICAgdHlwZSBkaWdpdEtleXMgPSBcIjJcIiB8IFwiM1wiIHwgXCI0XCIgfCBcIjVcIiB8IFwiNlwiIHwgXCI3XCIgfCBcIjhcIiB8IFwiOVwiO1xyXG4gICAgY29uc3QgbWFwOiB7IFtrZXkgaW4gZGlnaXRLZXlzXTogc3RyaW5nIH0gPSB7XHJcbiAgICAgICAgXCIyXCI6IFwiYWJjXCIsXHJcbiAgICAgICAgXCIzXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCI0XCI6IFwiZ2hpXCIsXHJcbiAgICAgICAgXCI1XCI6IFwiamtsXCIsXHJcbiAgICAgICAgXCI2XCI6IFwibW5vXCIsXHJcbiAgICAgICAgXCI3XCI6IFwicHFyc1wiLFxyXG4gICAgICAgIFwiOFwiOiBcInR1dlwiLFxyXG4gICAgICAgIFwiOVwiOiBcInd4eXpcIixcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBiYWNrVHJhY2soXCJcIiwgZGlnaXRzKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYmFja1RyYWNrKGN1clN0cjogc3RyaW5nLCByZXN0U3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAocmVzdFN0ci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VyU3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXBwaW5nRGF0YSA9IG1hcFtyZXN0U3RyWzBdIGFzIGRpZ2l0S2V5c107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBwaW5nRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBiYWNrVHJhY2soY3VyU3RyICsgbWFwcGluZ0RhdGFbaV0sIHJlc3RTdHIuc2xpY2UoMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIGxldHRlckNvbWJpbmF0aW9ucyhcIlwiKS5zb3J0KCksXHJcbiAgICBbXS5zb3J0KCksXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBsZXR0ZXJDb21iaW5hdGlvbnMoXCIyM1wiKS5zb3J0KCksXHJcbiAgICBbXCJhZFwiLCBcImFlXCIsIFwiYWZcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIl0uc29ydCgpLFxyXG4pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgbGV0dGVyQ29tYmluYXRpb25zKFwiMjk1XCIpLnNvcnQoKSxcclxuICAgIFtcImF3alwiLCBcImF3a1wiLCBcImF3bFwiLCBcImF4alwiLCBcImF4a1wiLCBcImF4bFwiLCBcImF5alwiLCBcImF5a1wiLCBcImF5bFwiLCBcImF6alwiLCBcImF6a1wiLCBcImF6bFwiLCBcImJ3alwiLCBcImJ3a1wiLCBcImJ3bFwiLCBcImJ4alwiLCBcImJ4a1wiLCBcImJ4bFwiLCBcImJ5alwiLCBcImJ5a1wiLCBcImJ5bFwiLCBcImJ6alwiLCBcImJ6a1wiLCBcImJ6bFwiLCBcImN3alwiLCBcImN3a1wiLCBcImN3bFwiLCBcImN4alwiLCBcImN4a1wiLCBcImN4bFwiLCBcImN5alwiLCBcImN5a1wiLCBcImN5bFwiLCBcImN6alwiLCBcImN6a1wiLCBcImN6bFwiXS5zb3J0KCksXHJcbik7XHJcbiJdfQ==