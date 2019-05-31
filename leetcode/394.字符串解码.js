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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk0LuWtl+espuS4suino+eggS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzk0LuWtl+espuS4suino+eggS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ2xDLFNBQVM7SUFDVCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDN0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsaUJBQWlCO0lBQ3JELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDZCxvQkFBb0I7WUFDcEIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRXpDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDbEMsR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7aUJBQ3hCO2dCQUNELFdBQVc7cUJBQ04sSUFBSSxHQUFHLEtBQUssRUFBRTtvQkFBRSxNQUFNO3FCQUN0QjtvQkFDRCxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQzdCLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO3FCQUN4QjtpQkFDSjtnQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDZjtZQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBR3pDO2FBQU07WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBRXpELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUM7QUFHRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUN6QixTQUFTLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFDeEIsV0FBVyxDQUNkLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQzdCLGdCQUFnQixDQUNuQixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUM5QixpQkFBaUIsQ0FDcEIsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFDMUIsU0FBUyxDQUNaLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQ3pCLFdBQVcsQ0FDZCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUM5QixnQkFBZ0IsQ0FDbkIsQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDOUIsaUJBQWlCLENBQ3BCLENBQUM7QUFHRiwwREFBa0M7QUFFbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBUyxDQUFDLEtBQUssQ0FBQztBQUNsQyxLQUFLO0tBQ0EsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUNWLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ1gsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFzQjtJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ1osb0VBQW9FO0FBQ3hFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrnu4/ov4fnvJbnoIHnmoTlrZfnrKbkuLLvvIzov5Tlm57lroPop6PnoIHlkI7nmoTlrZfnrKbkuLLjgIJcblxu57yW56CB6KeE5YiZ5Li6OiBrW2VuY29kZWRfc3RyaW5nXe+8jOihqOekuuWFtuS4reaWueaLrOWPt+WGhemDqOeahCBlbmNvZGVkX3N0cmluZyDmraPlpb3ph43lpI0gayDmrKHjgILms6jmhI8gayDkv53or4HkuLrmraPmlbTmlbDjgIJcblxu5L2g5Y+v5Lul6K6k5Li66L6T5YWl5a2X56ym5Liy5oC75piv5pyJ5pWI55qE77yb6L6T5YWl5a2X56ym5Liy5Lit5rKh5pyJ6aKd5aSW55qE56m65qC877yM5LiU6L6T5YWl55qE5pa55ous5Y+35oC75piv56ym5ZCI5qC85byP6KaB5rGC55qE44CCXG5cbuatpOWklu+8jOS9oOWPr+S7peiupOS4uuWOn+Wni+aVsOaNruS4jeWMheWQq+aVsOWtl++8jOaJgOacieeahOaVsOWtl+WPquihqOekuumHjeWkjeeahOasoeaVsCBrIO+8jOS+i+WmguS4jeS8muWHuueOsOWDjyAzYSDmiJYgMls0XSDnmoTovpPlhaXjgIJcblxu56S65L6LOlxuXG5zID0gXCIzW2FdMltiY11cIiwg6L+U5ZueIFwiYWFhYmNiY1wiLlxucyA9IFwiM1thMltjXV1cIiwg6L+U5ZueIFwiYWNjYWNjYWNjXCIuXG5zID0gXCIyW2FiY10zW2NkXWVmXCIsIOi/lOWbniBcImFiY2FiY2NkY2RjZGVmXCIuXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBkZWNvZGVTdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gICAgLy8g6ICB5a6e55qE5L2/55So5qCIXG4gICAgY29uc3QgbnVtX3N0ciA9IFwiMTIzNDU2Nzg5MFwiO1xuICAgIGNvbnN0IGFscGhhYmV0X3JlZyA9IC9eW2EtekEtWl0rJC87IC8vIOaciVtd5bWM5aWX5bCx5pyJ5Y+v6IO95pyJ5aSa5LiqIOesplxuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHMpIHtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXVwiKSB7XG4gICAgICAgICAgICAvLyDmib7liLAg5a+55bqU55qEIFsg5ZKMIOS7luS5i+WJjeeahOaVsOWtl1xuICAgICAgICAgICAgbGV0IG51bSA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgICAgIHdoaWxlIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcF9kYXRhID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtX3N0ci5pbmRleE9mKHBvcF9kYXRhKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gcG9wX2RhdGEgKyBudW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+S5i+WJjeeahCDmlbDmja5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChudW0gIT09IFwiXCIpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxwaGFiZXRfcmVnLnRlc3QocG9wX2RhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBwb3BfZGF0YSArIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhY2sucHVzaChzdHIucmVwZWF0KHBhcnNlSW50KG51bSkpKTtcblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGNoYXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrLmpvaW4oXCJcIik7XG59O1xuXG4vKipcbiAqIOS9v+eUqOato+WImSDnnJ/mmK/pgIblpKnkuoZcbiAqICovXG52YXIgZGVjb2RlU3RyaW5nMSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgICB3aGlsZSAoL1xcWy8udGVzdChzKSkge1xuICAgICAgICBzID0gcy5yZXBsYWNlKC8oXFxkKylcXFsoW15cXFtcXF1dKyldLywgZnVuY3Rpb24gKG1hdGNoLCBudW0sIHN0cikge1xuXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGVhdChudW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG59O1xuXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZGVjb2RlU3RyaW5nKFwiM1thXTJbYmNdXCIpLFxuICAgIFwiYWFhYmNiY1wiLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBkZWNvZGVTdHJpbmcoXCIzW2EyW2NdXVwiKSxcbiAgICBcImFjY2FjY2FjY1wiLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBkZWNvZGVTdHJpbmcoXCIyW2FiY10zW2NkXWVmXCIpLFxuICAgIFwiYWJjYWJjY2RjZGNkZWZcIixcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZGVjb2RlU3RyaW5nMShcIjNbYV0yW2I0W0ZdY11cIiksXG4gICAgXCJhYWFiRkZGRmNiRkZGRmNcIixcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZGVjb2RlU3RyaW5nMShcIjNbYV0yW2JjXVwiKSxcbiAgICBcImFhYWJjYmNcIixcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZGVjb2RlU3RyaW5nMShcIjNbYTJbY11dXCIpLFxuICAgIFwiYWNjYWNjYWNjXCIsXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIGRlY29kZVN0cmluZzEoXCIyW2FiY10zW2NkXWVmXCIpLFxuICAgIFwiYWJjYWJjY2RjZGNkZWZcIixcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgZGVjb2RlU3RyaW5nMShcIjNbYV0yW2I0W0ZdY11cIiksXG4gICAgXCJhYWFiRkZGRmNiRkZGRmNcIixcbik7XG5cblxuaW1wb3J0IEJlbmNobWFyayBmcm9tIFwiYmVuY2htYXJrXCI7XG5cbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZTtcbnN1aXRlXG4gICAgLmFkZCgnc3RhY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlY29kZVN0cmluZyhcIjNbYV0yW2I0W0ZdY11cIik7XG4gICAgfSlcbiAgICAuYWRkKCdyZWdleHAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlY29kZVN0cmluZzEoXCIzW2FdMltiNFtGXWNdXCIpO1xuICAgIH0pXG4gICAgLm9uKCdjeWNsZScsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcbiAgICB9KVxuICAgIC5vbignY29tcGxldGUnLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGYXN0ZXN0IGlzICcgKyB0aGlzLmZpbHRlcignZmFzdGVzdCcpLm1hcCggJ25hbWUnKSk7XG4gICAgfSlcbiAgICAvLyBydW4gYXN5bmNcbiAgICAucnVuKHsnYXN5bmMnOiBmYWxzZX0pO1xuIl19