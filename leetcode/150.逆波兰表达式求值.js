"use strict";
/*
根据逆波兰表示法，求表达式的值。
https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437


有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
示例 1：

输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: ((2 + 1) * 3) = 9
示例 2：

输入: ["4", "13", "5", "/", "+"]
输出: 6
解释: (4 + (13 / 5)) = 6
示例 3：

输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
输出: 22
解释:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length === 1)
        return Number(tokens[0]);
    // 所有的数学运算符
    const operator = ["+", "-", "*", "/"];
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        // 拿到的是 运算符 进行运算
        if (operator.includes(tokens[i])) {
            // 出两个 栈顶 出两个进行运算
            const b = stack.pop();
            const a = stack.pop();
            let after_operate;
            if (tokens[i] === "+") {
                after_operate = Number(a) + Number(b);
            }
            else if (tokens[i] === "-") {
                after_operate = Number(a) - Number(b);
            }
            else if (tokens[i] === "*") {
                after_operate = Number(a) * Number(b);
            }
            else {
                after_operate = Math.trunc(Number(a) / Number(b));
            }
            if (i === tokens.length - 1)
                return after_operate;
            stack.push(String(after_operate));
        }
        // 拿到的是 数字 入栈
        else {
            stack.push(tokens[i]);
        }
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(evalRPN(["2", "1", "+", "3", "*"]), 9);
assert_1.default.strictEqual(evalRPN(["4", "13", "5", "/", "+"]), 6);
assert_1.default.strictEqual(evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
]), 22);
assert_1.default.strictEqual(evalRPN(["10"]), 10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUwLumAhuazouWFsOihqOi+vuW8j+axguWAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUwLumAhuazouWFsOihqOi+vuW8j+axguWAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLE1BQWdCO0lBQ3RDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsV0FBVztJQUNYLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLGdCQUFnQjtRQUNoQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsaUJBQWlCO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxhQUFxQixDQUFDO1lBQzFCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDckIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUM1QixhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzVCLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPLGFBQWEsQ0FBQztZQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsYUFBYTthQUNSO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNELGdCQUFNLENBQUMsV0FBVyxDQUNoQixPQUFPLENBQUM7SUFDTixJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEtBQUs7SUFDTCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxFQUNGLEVBQUUsQ0FDSCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7moLnmja7pgIbms6LlhbDooajnpLrms5XvvIzmsYLooajovr7lvI/nmoTlgLzjgIJcbmh0dHBzOi8vYmFpa2UuYmFpZHUuY29tL2l0ZW0vJUU5JTgwJTg2JUU2JUIzJUEyJUU1JTg1JUIwJUU1JUJDJThGLzEyODQzN1xuXG5cbuacieaViOeahOi/kOeul+espuWMheaLrCArLCAtLCAqLCAvIOOAguavj+S4qui/kOeul+WvueixoeWPr+S7peaYr+aVtOaVsO+8jOS5n+WPr+S7peaYr+WPpuS4gOS4qumAhuazouWFsOihqOi+vuW8j+OAglxuXG7or7TmmI7vvJpcblxu5pW05pWw6Zmk5rOV5Y+q5L+d55WZ5pW05pWw6YOo5YiG44CCXG7nu5nlrprpgIbms6LlhbDooajovr7lvI/mgLvmmK/mnInmlYjnmoTjgILmjaLlj6Xor53or7TvvIzooajovr7lvI/mgLvkvJrlvpflh7rmnInmlYjmlbDlgLzkuJTkuI3lrZjlnKjpmaTmlbDkuLogMCDnmoTmg4XlhrXjgIJcbuekuuS+iyAx77yaXG5cbui+k+WFpTogW1wiMlwiLCBcIjFcIiwgXCIrXCIsIFwiM1wiLCBcIipcIl1cbui+k+WHujogOVxu6Kej6YeKOiAoKDIgKyAxKSAqIDMpID0gOVxu56S65L6LIDLvvJpcblxu6L6T5YWlOiBbXCI0XCIsIFwiMTNcIiwgXCI1XCIsIFwiL1wiLCBcIitcIl1cbui+k+WHujogNlxu6Kej6YeKOiAoNCArICgxMyAvIDUpKSA9IDZcbuekuuS+iyAz77yaXG5cbui+k+WFpTogW1wiMTBcIiwgXCI2XCIsIFwiOVwiLCBcIjNcIiwgXCIrXCIsIFwiLTExXCIsIFwiKlwiLCBcIi9cIiwgXCIqXCIsIFwiMTdcIiwgXCIrXCIsIFwiNVwiLCBcIitcIl1cbui+k+WHujogMjJcbuino+mHijpcbiAgKCgxMCAqICg2IC8gKCg5ICsgMykgKiAtMTEpKSkgKyAxNykgKyA1XG49ICgoMTAgKiAoNiAvICgxMiAqIC0xMSkpKSArIDE3KSArIDVcbj0gKCgxMCAqICg2IC8gLTEzMikpICsgMTcpICsgNVxuPSAoKDEwICogMCkgKyAxNykgKyA1XG49ICgwICsgMTcpICsgNVxuPSAxNyArIDVcbj0gMjJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGV2YWxSUE4gPSBmdW5jdGlvbiAodG9rZW5zOiBzdHJpbmdbXSkge1xuICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMSkgcmV0dXJuIE51bWJlcih0b2tlbnNbMF0pO1xuICAvLyDmiYDmnInnmoTmlbDlrabov5DnrpfnrKZcbiAgY29uc3Qgb3BlcmF0b3IgPSBbXCIrXCIsIFwiLVwiLCBcIipcIiwgXCIvXCJdO1xuICBjb25zdCBzdGFjazogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyDmi7/liLDnmoTmmK8g6L+Q566X56ymIOi/m+ihjOi/kOeul1xuICAgIGlmIChvcGVyYXRvci5pbmNsdWRlcyh0b2tlbnNbaV0pKSB7XG4gICAgICAvLyDlh7rkuKTkuKog5qCI6aG2IOWHuuS4pOS4qui/m+ihjOi/kOeul1xuICAgICAgY29uc3QgYiA9IHN0YWNrLnBvcCgpO1xuICAgICAgY29uc3QgYSA9IHN0YWNrLnBvcCgpO1xuICAgICAgbGV0IGFmdGVyX29wZXJhdGU6IG51bWJlcjtcbiAgICAgIGlmICh0b2tlbnNbaV0gPT09IFwiK1wiKSB7XG4gICAgICAgIGFmdGVyX29wZXJhdGUgPSBOdW1iZXIoYSkgKyBOdW1iZXIoYik7XG4gICAgICB9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCItXCIpIHtcbiAgICAgICAgYWZ0ZXJfb3BlcmF0ZSA9IE51bWJlcihhKSAtIE51bWJlcihiKTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIipcIikge1xuICAgICAgICBhZnRlcl9vcGVyYXRlID0gTnVtYmVyKGEpICogTnVtYmVyKGIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWZ0ZXJfb3BlcmF0ZSA9IE1hdGgudHJ1bmMoTnVtYmVyKGEpIC8gTnVtYmVyKGIpKTtcbiAgICAgIH1cbiAgICAgIGlmIChpID09PSB0b2tlbnMubGVuZ3RoIC0gMSkgcmV0dXJuIGFmdGVyX29wZXJhdGU7XG4gICAgICBzdGFjay5wdXNoKFN0cmluZyhhZnRlcl9vcGVyYXRlKSk7XG4gICAgfVxuICAgIC8vIOaLv+WIsOeahOaYryDmlbDlrZcg5YWl5qCIXG4gICAgZWxzZSB7XG4gICAgICBzdGFjay5wdXNoKHRva2Vuc1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGV2YWxSUE4oW1wiMlwiLCBcIjFcIiwgXCIrXCIsIFwiM1wiLCBcIipcIl0pLCA5KTtcbmFzc2VydC5zdHJpY3RFcXVhbChldmFsUlBOKFtcIjRcIiwgXCIxM1wiLCBcIjVcIiwgXCIvXCIsIFwiK1wiXSksIDYpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBldmFsUlBOKFtcbiAgICBcIjEwXCIsXG4gICAgXCI2XCIsXG4gICAgXCI5XCIsXG4gICAgXCIzXCIsXG4gICAgXCIrXCIsXG4gICAgXCItMTFcIixcbiAgICBcIipcIixcbiAgICBcIi9cIixcbiAgICBcIipcIixcbiAgICBcIjE3XCIsXG4gICAgXCIrXCIsXG4gICAgXCI1XCIsXG4gICAgXCIrXCIsXG4gIF0pLFxuICAyMlxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChldmFsUlBOKFtcIjEwXCJdKSwgMTApO1xuIl19