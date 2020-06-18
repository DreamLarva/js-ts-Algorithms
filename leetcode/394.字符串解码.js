"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
* */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // 老实的使用栈
    const num_str = "1234567890";
    const alphabet_reg = /^[a-zA-Z]+$/; // 有[]嵌套就有可能有多个 符
    const stack = [];
    for (const char of s) {
        if (char === "]") {
            // 找到 对应的 [ 和 他之前的数字
            let num = "";
            let str = "";
            while (stack[stack.length - 1]) {
                const pop_data = stack[stack.length - 1];
                if (num_str.indexOf(pop_data) !== -1) {
                    num = pop_data + num;
                }
                // 数字之前的 数据
                else if (num !== "")
                    break;
                else {
                    if (alphabet_reg.test(pop_data)) {
                        str = pop_data + str;
                    }
                }
                stack.pop();
            }
            stack.push(str.repeat(parseInt(num)));
        }
        else {
            stack.push(char);
        }
    }
    return stack.join("");
};
/**
 * 使用正则 真是逆天了
 * */
var decodeString1 = function (s) {
    while (/\[/.test(s)) {
        s = s.replace(/(\d+)\[([^\[\]]+)]/, (match, num, str) => str.repeat(num));
    }
    return s;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(decodeString("3[a]2[bc]"), "aaabcbc");
assert_1.default.strictEqual(decodeString("3[a2[c]]"), "accaccacc");
assert_1.default.strictEqual(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
assert_1.default.strictEqual(decodeString1("3[a]2[b4[F]c]"), "aaabFFFFcbFFFFc");
assert_1.default.strictEqual(decodeString1("3[a]2[bc]"), "aaabcbc");
assert_1.default.strictEqual(decodeString1("3[a2[c]]"), "accaccacc");
assert_1.default.strictEqual(decodeString1("2[abc]3[cd]ef"), "abcabccdcdcdef");
assert_1.default.strictEqual(decodeString1("3[a]2[b4[F]c]"), "aaabFFFFcbFFFFc");
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite();
suite
    .add("stack", function () {
    decodeString("3[a]2[b4[F]c]");
})
    .add("regexp", function () {
    decodeString1("3[a]2[b4[F]c]");
})
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ async: false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk0LuWtl+espuS4suino+eggS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzk0LuWtl+espuS4suino+eggS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLFNBQVM7SUFDVCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDN0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsaUJBQWlCO0lBQ3JELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDaEIsb0JBQW9CO1lBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO2lCQUN0QjtnQkFDRCxXQUFXO3FCQUNOLElBQUksR0FBRyxLQUFLLEVBQUU7b0JBQUUsTUFBTTtxQkFDdEI7b0JBQ0gsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMvQixHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2I7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFTO0lBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0U7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BFLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RFLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFdEUsMERBQWtDO0FBRWxDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxLQUFLO0tBQ0YsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUNaLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ2IsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFzQjtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ2Qsb0VBQW9FO0FBQ3RFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4que7j+i/h+e8lueggeeahOWtl+espuS4su+8jOi/lOWbnuWug+ino+eggeWQjueahOWtl+espuS4suOAglxyXG5cclxu57yW56CB6KeE5YiZ5Li6OiBrW2VuY29kZWRfc3RyaW5nXe+8jOihqOekuuWFtuS4reaWueaLrOWPt+WGhemDqOeahCBlbmNvZGVkX3N0cmluZyDmraPlpb3ph43lpI0gayDmrKHjgILms6jmhI8gayDkv53or4HkuLrmraPmlbTmlbDjgIJcclxuXHJcbuS9oOWPr+S7peiupOS4uui+k+WFpeWtl+espuS4suaAu+aYr+acieaViOeahO+8m+i+k+WFpeWtl+espuS4suS4reayoeaciemineWklueahOepuuagvO+8jOS4lOi+k+WFpeeahOaWueaLrOWPt+aAu+aYr+espuWQiOagvOW8j+imgeaxgueahOOAglxyXG5cclxu5q2k5aSW77yM5L2g5Y+v5Lul6K6k5Li65Y6f5aeL5pWw5o2u5LiN5YyF5ZCr5pWw5a2X77yM5omA5pyJ55qE5pWw5a2X5Y+q6KGo56S66YeN5aSN55qE5qyh5pWwIGsg77yM5L6L5aaC5LiN5Lya5Ye6546w5YOPIDNhIOaIliAyWzRdIOeahOi+k+WFpeOAglxyXG5cclxu56S65L6LOlxyXG5cclxucyA9IFwiM1thXTJbYmNdXCIsIOi/lOWbniBcImFhYWJjYmNcIi5cclxucyA9IFwiM1thMltjXV1cIiwg6L+U5ZueIFwiYWNjYWNjYWNjXCIuXHJcbnMgPSBcIjJbYWJjXTNbY2RdZWZcIiwg6L+U5ZueIFwiYWJjYWJjY2RjZGNkZWZcIi5cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIGRlY29kZVN0cmluZyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICAvLyDogIHlrp7nmoTkvb/nlKjmoIhcclxuICBjb25zdCBudW1fc3RyID0gXCIxMjM0NTY3ODkwXCI7XHJcbiAgY29uc3QgYWxwaGFiZXRfcmVnID0gL15bYS16QS1aXSskLzsgLy8g5pyJW13ltYzlpZflsLHmnInlj6/og73mnInlpJrkuKog56ymXHJcbiAgY29uc3Qgc3RhY2sgPSBbXTtcclxuICBmb3IgKGNvbnN0IGNoYXIgb2Ygcykge1xyXG4gICAgaWYgKGNoYXIgPT09IFwiXVwiKSB7XHJcbiAgICAgIC8vIOaJvuWIsCDlr7nlupTnmoQgWyDlkowg5LuW5LmL5YmN55qE5pWw5a2XXHJcbiAgICAgIGxldCBudW0gPSBcIlwiO1xyXG4gICAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgICAgd2hpbGUgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgY29uc3QgcG9wX2RhdGEgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgaWYgKG51bV9zdHIuaW5kZXhPZihwb3BfZGF0YSkgIT09IC0xKSB7XHJcbiAgICAgICAgICBudW0gPSBwb3BfZGF0YSArIG51bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pWw5a2X5LmL5YmN55qEIOaVsOaNrlxyXG4gICAgICAgIGVsc2UgaWYgKG51bSAhPT0gXCJcIikgYnJlYWs7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAoYWxwaGFiZXRfcmVnLnRlc3QocG9wX2RhdGEpKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHBvcF9kYXRhICsgc3RyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFjay5wb3AoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhY2sucHVzaChzdHIucmVwZWF0KHBhcnNlSW50KG51bSkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YWNrLnB1c2goY2hhcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhY2suam9pbihcIlwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjmraPliJkg55yf5piv6YCG5aSp5LqGXHJcbiAqICovXHJcbnZhciBkZWNvZGVTdHJpbmcxID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gIHdoaWxlICgvXFxbLy50ZXN0KHMpKSB7XHJcbiAgICBzID0gcy5yZXBsYWNlKC8oXFxkKylcXFsoW15cXFtcXF1dKyldLywgKG1hdGNoLCBudW0sIHN0cikgPT4gc3RyLnJlcGVhdChudW0pKTtcclxuICB9XHJcbiAgcmV0dXJuIHM7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcoXCIzW2FdMltiY11cIiksIFwiYWFhYmNiY1wiKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGRlY29kZVN0cmluZyhcIjNbYTJbY11dXCIpLCBcImFjY2FjY2FjY1wiKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGRlY29kZVN0cmluZyhcIjJbYWJjXTNbY2RdZWZcIiksIFwiYWJjYWJjY2RjZGNkZWZcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKSwgXCJhYWFiRkZGRmNiRkZGRmNcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYmNdXCIpLCBcImFhYWJjYmNcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thMltjXV1cIiksIFwiYWNjYWNjYWNjXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGVjb2RlU3RyaW5nMShcIjJbYWJjXTNbY2RdZWZcIiksIFwiYWJjYWJjY2RjZGNkZWZcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKSwgXCJhYWFiRkZGRmNiRkZGRmNcIik7XHJcblxyXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcclxuXHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xyXG5zdWl0ZVxyXG4gIC5hZGQoXCJzdGFja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWNvZGVTdHJpbmcoXCIzW2FdMltiNFtGXWNdXCIpO1xyXG4gIH0pXHJcbiAgLmFkZChcInJlZ2V4cFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKTtcclxuICB9KVxyXG4gIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XHJcbiAgfSlcclxuICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnRmFzdGVzdCBpcyAnICsgdGhpcy5maWx0ZXIoJ2Zhc3Rlc3QnKS5tYXAoICduYW1lJykpO1xyXG4gIH0pXHJcbiAgLy8gcnVuIGFzeW5jXHJcbiAgLnJ1bih7IGFzeW5jOiBmYWxzZSB9KTtcclxuIl19