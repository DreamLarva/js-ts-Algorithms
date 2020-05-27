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
assert_1.default.deepStrictEqual(letterCombinations("295").sort(), [
    "awj",
    "awk",
    "awl",
    "axj",
    "axk",
    "axl",
    "ayj",
    "ayk",
    "ayl",
    "azj",
    "azk",
    "azl",
    "bwj",
    "bwk",
    "bwl",
    "bxj",
    "bxk",
    "bxl",
    "byj",
    "byk",
    "byl",
    "bzj",
    "bzk",
    "bzl",
    "cwj",
    "cwk",
    "cwl",
    "cxj",
    "cxk",
    "cxl",
    "cyj",
    "cyk",
    "cyl",
    "czj",
    "czk",
    "czl",
].sort());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcu55S16K+d5Y+356CB55qE5a2X5q+N57uE5ZCILmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNy7nlLXor53lj7fnoIHnmoTlrZfmr43nu4TlkIgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLE1BQWM7SUFDL0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUluQyxNQUFNLEdBQUcsR0FBbUM7UUFDMUMsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxLQUFLO1FBQ1YsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsTUFBTTtLQUNaLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QixPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlO1FBQ2hELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFDRCxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBYyxDQUFDLENBQUM7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsU0FBUyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRSxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQy9CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUQsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFDaEM7SUFDRSxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7Q0FDTixDQUFDLElBQUksRUFBRSxDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5LuF5YyF5ZCr5pWw5a2XwqAyLTnCoOeahOWtl+espuS4su+8jOi/lOWbnuaJgOacieWug+iDveihqOekuueahOWtl+avjee7hOWQiOOAglxuXG7nu5nlh7rmlbDlrZfliLDlrZfmr43nmoTmmKDlsITlpoLkuIvvvIjkuI7nlLXor53mjInplK7nm7jlkIzvvInjgILms6jmhI8gMSDkuI3lr7nlupTku7vkvZXlrZfmr43jgIJcblxuXCIyXCIgIOWvueW6lCAgXCJhYmNcIlxuXCIzXCIgIOWvueW6lCAgXCJkZWZcIlxuXCI0XCIgIOWvueW6lCAgXCJnaGlcIlxuXCI1XCIgIOWvueW6lCAgXCJqa2xcIlxuXCI2XCIgIOWvueW6lCAgXCJtbm9cIlxuXCI3XCIgIOWvueW6lCAgXCJwcXJzXCJcblwiOFwiICDlr7nlupQgIFwidHV2XCJcblwiOVwiICDlr7nlupQgIFwid3h5elwiXG5cbuekuuS+izpcblxu6L6T5YWl77yaXCIyM1wiXG7ovpPlh7rvvJpbXCJhZFwiLCBcImFlXCIsIFwiYWZcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIl0uXG7or7TmmI46XG7lsL3nrqHkuIrpnaLnmoTnrZTmoYjmmK/mjInlrZflhbjluo/mjpLliJfnmoTvvIzkvYbmmK/kvaDlj6/ku6Xku7vmhI/pgInmi6nnrZTmoYjovpPlh7rnmoTpobrluo/jgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xldHRlci1jb21iaW5hdGlvbnMtb2YtYS1waG9uZS1udW1iZXJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaWdpdHNcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG52YXIgbGV0dGVyQ29tYmluYXRpb25zID0gZnVuY3Rpb24gKGRpZ2l0czogc3RyaW5nKSB7XG4gIGlmIChkaWdpdHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIC8vIOW5v+W6puS8mOWFiCDmt7HluqbkvJjlhYgg55qG5Y+vXG4gIC8vIOS9huaYryDov5jmmK/lm57muq/ms5Xmm7TkvbNcbiAgdHlwZSBkaWdpdEtleXMgPSBcIjJcIiB8IFwiM1wiIHwgXCI0XCIgfCBcIjVcIiB8IFwiNlwiIHwgXCI3XCIgfCBcIjhcIiB8IFwiOVwiO1xuICBjb25zdCBtYXA6IHsgW2tleSBpbiBkaWdpdEtleXNdOiBzdHJpbmcgfSA9IHtcbiAgICBcIjJcIjogXCJhYmNcIixcbiAgICBcIjNcIjogXCJkZWZcIixcbiAgICBcIjRcIjogXCJnaGlcIixcbiAgICBcIjVcIjogXCJqa2xcIixcbiAgICBcIjZcIjogXCJtbm9cIixcbiAgICBcIjdcIjogXCJwcXJzXCIsXG4gICAgXCI4XCI6IFwidHV2XCIsXG4gICAgXCI5XCI6IFwid3h5elwiLFxuICB9O1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGJhY2tUcmFjayhcIlwiLCBkaWdpdHMpO1xuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIGJhY2tUcmFjayhjdXJTdHI6IHN0cmluZywgcmVzdFN0cjogc3RyaW5nKSB7XG4gICAgaWYgKHJlc3RTdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChjdXJTdHIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5nRGF0YSA9IG1hcFtyZXN0U3RyWzBdIGFzIGRpZ2l0S2V5c107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBwaW5nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgYmFja1RyYWNrKGN1clN0ciArIG1hcHBpbmdEYXRhW2ldLCByZXN0U3RyLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChsZXR0ZXJDb21iaW5hdGlvbnMoXCJcIikuc29ydCgpLCBbXS5zb3J0KCkpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgbGV0dGVyQ29tYmluYXRpb25zKFwiMjNcIikuc29ydCgpLFxuICBbXCJhZFwiLCBcImFlXCIsIFwiYWZcIiwgXCJiZFwiLCBcImJlXCIsIFwiYmZcIiwgXCJjZFwiLCBcImNlXCIsIFwiY2ZcIl0uc29ydCgpXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgbGV0dGVyQ29tYmluYXRpb25zKFwiMjk1XCIpLnNvcnQoKSxcbiAgW1xuICAgIFwiYXdqXCIsXG4gICAgXCJhd2tcIixcbiAgICBcImF3bFwiLFxuICAgIFwiYXhqXCIsXG4gICAgXCJheGtcIixcbiAgICBcImF4bFwiLFxuICAgIFwiYXlqXCIsXG4gICAgXCJheWtcIixcbiAgICBcImF5bFwiLFxuICAgIFwiYXpqXCIsXG4gICAgXCJhemtcIixcbiAgICBcImF6bFwiLFxuICAgIFwiYndqXCIsXG4gICAgXCJid2tcIixcbiAgICBcImJ3bFwiLFxuICAgIFwiYnhqXCIsXG4gICAgXCJieGtcIixcbiAgICBcImJ4bFwiLFxuICAgIFwiYnlqXCIsXG4gICAgXCJieWtcIixcbiAgICBcImJ5bFwiLFxuICAgIFwiYnpqXCIsXG4gICAgXCJiemtcIixcbiAgICBcImJ6bFwiLFxuICAgIFwiY3dqXCIsXG4gICAgXCJjd2tcIixcbiAgICBcImN3bFwiLFxuICAgIFwiY3hqXCIsXG4gICAgXCJjeGtcIixcbiAgICBcImN4bFwiLFxuICAgIFwiY3lqXCIsXG4gICAgXCJjeWtcIixcbiAgICBcImN5bFwiLFxuICAgIFwiY3pqXCIsXG4gICAgXCJjemtcIixcbiAgICBcImN6bFwiLFxuICBdLnNvcnQoKVxuKTtcbiJdfQ==