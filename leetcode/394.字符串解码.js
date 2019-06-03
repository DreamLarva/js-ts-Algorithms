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
const suite = new benchmark_1.default.Suite;
suite
    .add('stack', function () {
    decodeString("3[a]2[b4[F]c]");
})
    .add('regexp', function () {
    decodeString1("3[a]2[b4[F]c]");
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ 'async': false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk0LuWtl+espuS4suino+eggS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzk0LuWtl+espuS4suino+eggS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ2xDLFNBQVM7SUFDVCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDN0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsaUJBQWlCO0lBQ3JELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDZCxvQkFBb0I7WUFDcEIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRXpDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDbEMsR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7aUJBQ3hCO2dCQUNELFdBQVc7cUJBQ04sSUFBSSxHQUFHLEtBQUssRUFBRTtvQkFBRSxNQUFNO3FCQUN0QjtvQkFDRCxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQzdCLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO3FCQUN4QjtpQkFDSjtnQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDZjtZQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBR3pDO2FBQU07WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBRXpELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUM7QUFHRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUN6QixTQUFTLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFDeEIsV0FBVyxDQUNkLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQzdCLGdCQUFnQixDQUNuQixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUM5QixpQkFBaUIsQ0FDcEIsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFDMUIsU0FBUyxDQUNaLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQ3pCLFdBQVcsQ0FDZCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUM5QixnQkFBZ0IsQ0FDbkIsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDOUIsaUJBQWlCLENBQ3BCLENBQUM7QUFHRiwwREFBa0M7QUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBUyxDQUFDLEtBQUssQ0FBQztBQUNsQyxLQUFLO0tBQ0EsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUNWLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ1gsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFzQjtJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ1osb0VBQW9FO0FBQ3hFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4que7j+i/h+e8lueggeeahOWtl+espuS4su+8jOi/lOWbnuWug+ino+eggeWQjueahOWtl+espuS4suOAglxyXG5cclxu57yW56CB6KeE5YiZ5Li6OiBrW2VuY29kZWRfc3RyaW5nXe+8jOihqOekuuWFtuS4reaWueaLrOWPt+WGhemDqOeahCBlbmNvZGVkX3N0cmluZyDmraPlpb3ph43lpI0gayDmrKHjgILms6jmhI8gayDkv53or4HkuLrmraPmlbTmlbDjgIJcclxuXHJcbuS9oOWPr+S7peiupOS4uui+k+WFpeWtl+espuS4suaAu+aYr+acieaViOeahO+8m+i+k+WFpeWtl+espuS4suS4reayoeaciemineWklueahOepuuagvO+8jOS4lOi+k+WFpeeahOaWueaLrOWPt+aAu+aYr+espuWQiOagvOW8j+imgeaxgueahOOAglxyXG5cclxu5q2k5aSW77yM5L2g5Y+v5Lul6K6k5Li65Y6f5aeL5pWw5o2u5LiN5YyF5ZCr5pWw5a2X77yM5omA5pyJ55qE5pWw5a2X5Y+q6KGo56S66YeN5aSN55qE5qyh5pWwIGsg77yM5L6L5aaC5LiN5Lya5Ye6546w5YOPIDNhIOaIliAyWzRdIOeahOi+k+WFpeOAglxyXG5cclxu56S65L6LOlxyXG5cclxucyA9IFwiM1thXTJbYmNdXCIsIOi/lOWbniBcImFhYWJjYmNcIi5cclxucyA9IFwiM1thMltjXV1cIiwg6L+U5ZueIFwiYWNjYWNjYWNjXCIuXHJcbnMgPSBcIjJbYWJjXTNbY2RdZWZcIiwg6L+U5ZueIFwiYWJjYWJjY2RjZGNkZWZcIi5cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIGRlY29kZVN0cmluZyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICAgIC8vIOiAgeWunueahOS9v+eUqOagiFxyXG4gICAgY29uc3QgbnVtX3N0ciA9IFwiMTIzNDU2Nzg5MFwiO1xyXG4gICAgY29uc3QgYWxwaGFiZXRfcmVnID0gL15bYS16QS1aXSskLzsgLy8g5pyJW13ltYzlpZflsLHmnInlj6/og73mnInlpJrkuKog56ymXHJcbiAgICBjb25zdCBzdGFjayA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHMpIHtcclxuICAgICAgICBpZiAoY2hhciA9PT0gXCJdXCIpIHtcclxuICAgICAgICAgICAgLy8g5om+5YiwIOWvueW6lOeahCBbIOWSjCDku5bkuYvliY3nmoTmlbDlrZdcclxuICAgICAgICAgICAgbGV0IG51bSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcF9kYXRhID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG51bV9zdHIuaW5kZXhPZihwb3BfZGF0YSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gcG9wX2RhdGEgKyBudW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDmlbDlrZfkuYvliY3nmoQg5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChudW0gIT09IFwiXCIpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscGhhYmV0X3JlZy50ZXN0KHBvcF9kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBwb3BfZGF0YSArIHN0cjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhY2sucHVzaChzdHIucmVwZWF0KHBhcnNlSW50KG51bSkpKTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2goY2hhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGFjay5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOS9v+eUqOato+WImSDnnJ/mmK/pgIblpKnkuoZcclxuICogKi9cclxudmFyIGRlY29kZVN0cmluZzEgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICB3aGlsZSAoL1xcWy8udGVzdChzKSkge1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyhcXGQrKVxcWyhbXlxcW1xcXV0rKV0vLCBmdW5jdGlvbiAobWF0Y2gsIG51bSwgc3RyKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGVhdChudW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM7XHJcbn07XHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBkZWNvZGVTdHJpbmcoXCIzW2FdMltiY11cIiksXHJcbiAgICBcImFhYWJjYmNcIixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZGVjb2RlU3RyaW5nKFwiM1thMltjXV1cIiksXHJcbiAgICBcImFjY2FjY2FjY1wiLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBkZWNvZGVTdHJpbmcoXCIyW2FiY10zW2NkXWVmXCIpLFxyXG4gICAgXCJhYmNhYmNjZGNkY2RlZlwiLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKSxcclxuICAgIFwiYWFhYkZGRkZjYkZGRkZjXCIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGRlY29kZVN0cmluZzEoXCIzW2FdMltiY11cIiksXHJcbiAgICBcImFhYWJjYmNcIixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZGVjb2RlU3RyaW5nMShcIjNbYTJbY11dXCIpLFxyXG4gICAgXCJhY2NhY2NhY2NcIixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZGVjb2RlU3RyaW5nMShcIjJbYWJjXTNbY2RdZWZcIiksXHJcbiAgICBcImFiY2FiY2NkY2RjZGVmXCIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGRlY29kZVN0cmluZzEoXCIzW2FdMltiNFtGXWNdXCIpLFxyXG4gICAgXCJhYWFiRkZGRmNiRkZGRmNcIixcclxuKTtcclxuXHJcblxyXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcclxuXHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZTtcclxuc3VpdGVcclxuICAgIC5hZGQoJ3N0YWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlY29kZVN0cmluZyhcIjNbYV0yW2I0W0ZdY11cIik7XHJcbiAgICB9KVxyXG4gICAgLmFkZCgncmVnZXhwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRlY29kZVN0cmluZzEoXCIzW2FdMltiNFtGXWNdXCIpO1xyXG4gICAgfSlcclxuICAgIC5vbignY3ljbGUnLCBmdW5jdGlvbiAoZXZlbnQ6IEJlbmNobWFyay5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcclxuICAgIH0pXHJcbiAgICAub24oJ2NvbXBsZXRlJywgZnVuY3Rpb24gKHRoaXM6IEJlbmNobWFyay5TdWl0ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGYXN0ZXN0IGlzICcgKyB0aGlzLmZpbHRlcignZmFzdGVzdCcpLm1hcCggJ25hbWUnKSk7XHJcbiAgICB9KVxyXG4gICAgLy8gcnVuIGFzeW5jXHJcbiAgICAucnVuKHsnYXN5bmMnOiBmYWxzZX0pO1xyXG4iXX0=