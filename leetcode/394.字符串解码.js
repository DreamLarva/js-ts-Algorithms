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
        s = s.replace(/(\d+)\[([^\[\]]+)]/, function (match, num, str) {
            return str.repeat(num);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk0LuWtl+espuS4suino+eggS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzk0LuWtl+espuS4suino+eggS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLFNBQVM7SUFDVCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDN0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsaUJBQWlCO0lBQ3JELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDaEIsb0JBQW9CO1lBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO2lCQUN0QjtnQkFDRCxXQUFXO3FCQUNOLElBQUksR0FBRyxLQUFLLEVBQUU7b0JBQUUsTUFBTTtxQkFDdEI7b0JBQ0gsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMvQixHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2I7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFTO0lBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRztZQUMzRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDMUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDcEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDdEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMzRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNyRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUV0RSwwREFBa0M7QUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BDLEtBQUs7S0FDRixHQUFHLENBQUMsT0FBTyxFQUFFO0lBQ1osWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztLQUNELEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDYixhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQXNCO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDZCxvRUFBb0U7QUFDdEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq57uP6L+H57yW56CB55qE5a2X56ym5Liy77yM6L+U5Zue5a6D6Kej56CB5ZCO55qE5a2X56ym5Liy44CCXHJcblxyXG7nvJbnoIHop4TliJnkuLo6IGtbZW5jb2RlZF9zdHJpbmdd77yM6KGo56S65YW25Lit5pa55ous5Y+35YaF6YOo55qEIGVuY29kZWRfc3RyaW5nIOato+WlvemHjeWkjSBrIOasoeOAguazqOaEjyBrIOS/neivgeS4uuato+aVtOaVsOOAglxyXG5cclxu5L2g5Y+v5Lul6K6k5Li66L6T5YWl5a2X56ym5Liy5oC75piv5pyJ5pWI55qE77yb6L6T5YWl5a2X56ym5Liy5Lit5rKh5pyJ6aKd5aSW55qE56m65qC877yM5LiU6L6T5YWl55qE5pa55ous5Y+35oC75piv56ym5ZCI5qC85byP6KaB5rGC55qE44CCXHJcblxyXG7mraTlpJbvvIzkvaDlj6/ku6XorqTkuLrljp/lp4vmlbDmja7kuI3ljIXlkKvmlbDlrZfvvIzmiYDmnInnmoTmlbDlrZflj6rooajnpLrph43lpI3nmoTmrKHmlbAgayDvvIzkvovlpoLkuI3kvJrlh7rnjrDlg48gM2Eg5oiWIDJbNF0g55qE6L6T5YWl44CCXHJcblxyXG7npLrkvos6XHJcblxyXG5zID0gXCIzW2FdMltiY11cIiwg6L+U5ZueIFwiYWFhYmNiY1wiLlxyXG5zID0gXCIzW2EyW2NdXVwiLCDov5Tlm54gXCJhY2NhY2NhY2NcIi5cclxucyA9IFwiMlthYmNdM1tjZF1lZlwiLCDov5Tlm54gXCJhYmNhYmNjZGNkY2RlZlwiLlxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgZGVjb2RlU3RyaW5nID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xyXG4gIC8vIOiAgeWunueahOS9v+eUqOagiFxyXG4gIGNvbnN0IG51bV9zdHIgPSBcIjEyMzQ1Njc4OTBcIjtcclxuICBjb25zdCBhbHBoYWJldF9yZWcgPSAvXlthLXpBLVpdKyQvOyAvLyDmnIlbXeW1jOWll+WwseacieWPr+iDveacieWkmuS4qiDnrKZcclxuICBjb25zdCBzdGFjayA9IFtdO1xyXG4gIGZvciAoY29uc3QgY2hhciBvZiBzKSB7XHJcbiAgICBpZiAoY2hhciA9PT0gXCJdXCIpIHtcclxuICAgICAgLy8g5om+5YiwIOWvueW6lOeahCBbIOWSjCDku5bkuYvliY3nmoTmlbDlrZdcclxuICAgICAgbGV0IG51bSA9IFwiXCI7XHJcbiAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgICB3aGlsZSAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICBjb25zdCBwb3BfZGF0YSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICBpZiAobnVtX3N0ci5pbmRleE9mKHBvcF9kYXRhKSAhPT0gLTEpIHtcclxuICAgICAgICAgIG51bSA9IHBvcF9kYXRhICsgbnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmlbDlrZfkuYvliY3nmoQg5pWw5o2uXHJcbiAgICAgICAgZWxzZSBpZiAobnVtICE9PSBcIlwiKSBicmVhaztcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmIChhbHBoYWJldF9yZWcudGVzdChwb3BfZGF0YSkpIHtcclxuICAgICAgICAgICAgc3RyID0gcG9wX2RhdGEgKyBzdHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdGFjay5wdXNoKHN0ci5yZXBlYXQocGFyc2VJbnQobnVtKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhY2sucHVzaChjaGFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdGFjay5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOS9v+eUqOato+WImSDnnJ/mmK/pgIblpKnkuoZcclxuICogKi9cclxudmFyIGRlY29kZVN0cmluZzEgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgd2hpbGUgKC9cXFsvLnRlc3QocykpIHtcclxuICAgIHMgPSBzLnJlcGxhY2UoLyhcXGQrKVxcWyhbXlxcW1xcXV0rKV0vLCBmdW5jdGlvbiAobWF0Y2gsIG51bSwgc3RyKSB7XHJcbiAgICAgIHJldHVybiBzdHIucmVwZWF0KG51bSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHM7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcoXCIzW2FdMltiY11cIiksIFwiYWFhYmNiY1wiKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGRlY29kZVN0cmluZyhcIjNbYTJbY11dXCIpLCBcImFjY2FjY2FjY1wiKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGRlY29kZVN0cmluZyhcIjJbYWJjXTNbY2RdZWZcIiksIFwiYWJjYWJjY2RjZGNkZWZcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKSwgXCJhYWFiRkZGRmNiRkZGRmNcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYmNdXCIpLCBcImFhYWJjYmNcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thMltjXV1cIiksIFwiYWNjYWNjYWNjXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZGVjb2RlU3RyaW5nMShcIjJbYWJjXTNbY2RdZWZcIiksIFwiYWJjYWJjY2RjZGNkZWZcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKSwgXCJhYWFiRkZGRmNiRkZGRmNcIik7XHJcblxyXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcclxuXHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xyXG5zdWl0ZVxyXG4gIC5hZGQoXCJzdGFja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWNvZGVTdHJpbmcoXCIzW2FdMltiNFtGXWNdXCIpO1xyXG4gIH0pXHJcbiAgLmFkZChcInJlZ2V4cFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKTtcclxuICB9KVxyXG4gIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XHJcbiAgfSlcclxuICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnRmFzdGVzdCBpcyAnICsgdGhpcy5maWx0ZXIoJ2Zhc3Rlc3QnKS5tYXAoICduYW1lJykpO1xyXG4gIH0pXHJcbiAgLy8gcnVuIGFzeW5jXHJcbiAgLnJ1bih7IGFzeW5jOiBmYWxzZSB9KTtcclxuIl19