"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
        else if (num !== "") break;
        else {
          if (alphabet_reg.test(pop_data)) {
            str = pop_data + str;
          }
        }
        stack.pop();
      }
      stack.push(str.repeat(parseInt(num)));
    } else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk0LuWtl+espuS4suino+eggS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzk0LuWtl+espuS4suino+eggS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQWNJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLFNBQVM7SUFDVCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDN0IsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsaUJBQWlCO0lBQ3JELE1BQU0sS0FBSyxHQUFZLEVBQUUsQ0FBQztJQUMxQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNwQixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDaEIsb0JBQW9CO1lBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLEdBQUcsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO2lCQUN0QjtnQkFDRCxXQUFXO3FCQUNOLElBQUksR0FBRyxLQUFLLEVBQUU7b0JBQUUsTUFBTTtxQkFDdEI7b0JBQ0gsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMvQixHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2I7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFTO0lBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0U7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BFLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RFLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDckUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFdEUsMERBQWtDO0FBRWxDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxLQUFLO0tBQ0YsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUNaLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ2IsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFzQjtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ2Qsb0VBQW9FO0FBQ3RFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrnu4/ov4fnvJbnoIHnmoTlrZfnrKbkuLLvvIzov5Tlm57lroPop6PnoIHlkI7nmoTlrZfnrKbkuLLjgIJcblxu57yW56CB6KeE5YiZ5Li6OiBrW2VuY29kZWRfc3RyaW5nXe+8jOihqOekuuWFtuS4reaWueaLrOWPt+WGhemDqOeahCBlbmNvZGVkX3N0cmluZyDmraPlpb3ph43lpI0gayDmrKHjgILms6jmhI8gayDkv53or4HkuLrmraPmlbTmlbDjgIJcblxu5L2g5Y+v5Lul6K6k5Li66L6T5YWl5a2X56ym5Liy5oC75piv5pyJ5pWI55qE77yb6L6T5YWl5a2X56ym5Liy5Lit5rKh5pyJ6aKd5aSW55qE56m65qC877yM5LiU6L6T5YWl55qE5pa55ous5Y+35oC75piv56ym5ZCI5qC85byP6KaB5rGC55qE44CCXG5cbuatpOWklu+8jOS9oOWPr+S7peiupOS4uuWOn+Wni+aVsOaNruS4jeWMheWQq+aVsOWtl++8jOaJgOacieeahOaVsOWtl+WPquihqOekuumHjeWkjeeahOasoeaVsCBrIO+8jOS+i+WmguS4jeS8muWHuueOsOWDjyAzYSDmiJYgMls0XSDnmoTovpPlhaXjgIJcblxu56S65L6LOlxuXG5zID0gXCIzW2FdMltiY11cIiwg6L+U5ZueIFwiYWFhYmNiY1wiLlxucyA9IFwiM1thMltjXV1cIiwg6L+U5ZueIFwiYWNjYWNjYWNjXCIuXG5zID0gXCIyW2FiY10zW2NkXWVmXCIsIOi/lOWbniBcImFiY2FiY2NkY2RjZGVmXCIuXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBkZWNvZGVTdHJpbmcgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIC8vIOiAgeWunueahOS9v+eUqOagiFxuICBjb25zdCBudW1fc3RyID0gXCIxMjM0NTY3ODkwXCI7XG4gIGNvbnN0IGFscGhhYmV0X3JlZyA9IC9eW2EtekEtWl0rJC87IC8vIOaciVtd5bWM5aWX5bCx5pyJ5Y+v6IO95pyJ5aSa5LiqIOesplxuICBjb25zdCBzdGFjazpzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGNoYXIgb2Ygcykge1xuICAgIGlmIChjaGFyID09PSBcIl1cIikge1xuICAgICAgLy8g5om+5YiwIOWvueW6lOeahCBbIOWSjCDku5bkuYvliY3nmoTmlbDlrZdcbiAgICAgIGxldCBudW0gPSBcIlwiO1xuICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICB3aGlsZSAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgY29uc3QgcG9wX2RhdGEgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobnVtX3N0ci5pbmRleE9mKHBvcF9kYXRhKSAhPT0gLTEpIHtcbiAgICAgICAgICBudW0gPSBwb3BfZGF0YSArIG51bTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmlbDlrZfkuYvliY3nmoQg5pWw5o2uXG4gICAgICAgIGVsc2UgaWYgKG51bSAhPT0gXCJcIikgYnJlYWs7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChhbHBoYWJldF9yZWcudGVzdChwb3BfZGF0YSkpIHtcbiAgICAgICAgICAgIHN0ciA9IHBvcF9kYXRhICsgc3RyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaChzdHIucmVwZWF0KHBhcnNlSW50KG51bSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhY2sucHVzaChjaGFyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhY2suam9pbihcIlwiKTtcbn07XG5cbi8qKlxuICog5L2/55So5q2j5YiZIOecn+aYr+mAhuWkqeS6hlxuICogKi9cbnZhciBkZWNvZGVTdHJpbmcxID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICB3aGlsZSAoL1xcWy8udGVzdChzKSkge1xuICAgIHMgPSBzLnJlcGxhY2UoLyhcXGQrKVxcWyhbXlxcW1xcXV0rKV0vLCAobWF0Y2gsIG51bSwgc3RyKSA9PiBzdHIucmVwZWF0KG51bSkpO1xuICB9XG4gIHJldHVybiBzO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcoXCIzW2FdMltiY11cIiksIFwiYWFhYmNiY1wiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcoXCIzW2EyW2NdXVwiKSwgXCJhY2NhY2NhY2NcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGVjb2RlU3RyaW5nKFwiMlthYmNdM1tjZF1lZlwiKSwgXCJhYmNhYmNjZGNkY2RlZlwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChkZWNvZGVTdHJpbmcxKFwiM1thXTJbYjRbRl1jXVwiKSwgXCJhYWFiRkZGRmNiRkZGRmNcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGVjb2RlU3RyaW5nMShcIjNbYV0yW2JjXVwiKSwgXCJhYWFiY2JjXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGRlY29kZVN0cmluZzEoXCIzW2EyW2NdXVwiKSwgXCJhY2NhY2NhY2NcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGVjb2RlU3RyaW5nMShcIjJbYWJjXTNbY2RdZWZcIiksIFwiYWJjYWJjY2RjZGNkZWZcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZGVjb2RlU3RyaW5nMShcIjNbYV0yW2I0W0ZdY11cIiksIFwiYWFhYkZGRkZjYkZGRkZjXCIpO1xuXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcblxuY29uc3Qgc3VpdGUgPSBuZXcgQmVuY2htYXJrLlN1aXRlKCk7XG5zdWl0ZVxuICAuYWRkKFwic3RhY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlY29kZVN0cmluZyhcIjNbYV0yW2I0W0ZdY11cIik7XG4gIH0pXG4gIC5hZGQoXCJyZWdleHBcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlY29kZVN0cmluZzEoXCIzW2FdMltiNFtGXWNdXCIpO1xuICB9KVxuICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IEJlbmNobWFyay5FdmVudCkge1xuICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcbiAgfSlcbiAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IEJlbmNobWFyay5TdWl0ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdGYXN0ZXN0IGlzICcgKyB0aGlzLmZpbHRlcignZmFzdGVzdCcpLm1hcCggJ25hbWUnKSk7XG4gIH0pXG4gIC8vIHJ1biBhc3luY1xuICAucnVuKHsgYXN5bmM6IGZhbHNlIH0pO1xuIl19
