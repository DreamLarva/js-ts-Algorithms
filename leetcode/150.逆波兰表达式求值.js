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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUwLumAhuazouWFsOihqOi+vuW8j+axguWAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUwLumAhuazouWFsOihqOi+vuW8j+axguWAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLE1BQWdCO0lBQ3RDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsV0FBVztJQUNYLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLGdCQUFnQjtRQUNoQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsaUJBQWlCO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxhQUFxQixDQUFDO1lBQzFCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDckIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUM1QixhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzVCLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPLGFBQWEsQ0FBQztZQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsYUFBYTthQUNSO1lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFELGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNELGdCQUFNLENBQUMsV0FBVyxDQUNoQixPQUFPLENBQUM7SUFDTixJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEtBQUs7SUFDTCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0NBQ0osQ0FBQyxFQUNGLEVBQUUsQ0FDSCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuagueaNrumAhuazouWFsOihqOekuuazle+8jOaxguihqOi+vuW8j+eahOWAvOOAglxyXG5odHRwczovL2JhaWtlLmJhaWR1LmNvbS9pdGVtLyVFOSU4MCU4NiVFNiVCMyVBMiVFNSU4NSVCMCVFNSVCQyU4Ri8xMjg0MzdcclxuXHJcblxyXG7mnInmlYjnmoTov5DnrpfnrKbljIXmi6wgKywgLSwgKiwgLyDjgILmr4/kuKrov5Dnrpflr7nosaHlj6/ku6XmmK/mlbTmlbDvvIzkuZ/lj6/ku6XmmK/lj6bkuIDkuKrpgIbms6LlhbDooajovr7lvI/jgIJcclxuXHJcbuivtOaYju+8mlxyXG5cclxu5pW05pWw6Zmk5rOV5Y+q5L+d55WZ5pW05pWw6YOo5YiG44CCXHJcbue7meWumumAhuazouWFsOihqOi+vuW8j+aAu+aYr+acieaViOeahOOAguaNouWPpeivneivtO+8jOihqOi+vuW8j+aAu+S8muW+l+WHuuacieaViOaVsOWAvOS4lOS4jeWtmOWcqOmZpOaVsOS4uiAwIOeahOaDheWGteOAglxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWlOiBbXCIyXCIsIFwiMVwiLCBcIitcIiwgXCIzXCIsIFwiKlwiXVxyXG7ovpPlh7o6IDlcclxu6Kej6YeKOiAoKDIgKyAxKSAqIDMpID0gOVxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWlOiBbXCI0XCIsIFwiMTNcIiwgXCI1XCIsIFwiL1wiLCBcIitcIl1cclxu6L6T5Ye6OiA2XHJcbuino+mHijogKDQgKyAoMTMgLyA1KSkgPSA2XHJcbuekuuS+iyAz77yaXHJcblxyXG7ovpPlhaU6IFtcIjEwXCIsIFwiNlwiLCBcIjlcIiwgXCIzXCIsIFwiK1wiLCBcIi0xMVwiLCBcIipcIiwgXCIvXCIsIFwiKlwiLCBcIjE3XCIsIFwiK1wiLCBcIjVcIiwgXCIrXCJdXHJcbui+k+WHujogMjJcclxu6Kej6YeKOlxyXG4gICgoMTAgKiAoNiAvICgoOSArIDMpICogLTExKSkpICsgMTcpICsgNVxyXG49ICgoMTAgKiAoNiAvICgxMiAqIC0xMSkpKSArIDE3KSArIDVcclxuPSAoKDEwICogKDYgLyAtMTMyKSkgKyAxNykgKyA1XHJcbj0gKCgxMCAqIDApICsgMTcpICsgNVxyXG49ICgwICsgMTcpICsgNVxyXG49IDE3ICsgNVxyXG49IDIyXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGV2YWxSUE4gPSBmdW5jdGlvbiAodG9rZW5zOiBzdHJpbmdbXSkge1xyXG4gIGlmICh0b2tlbnMubGVuZ3RoID09PSAxKSByZXR1cm4gTnVtYmVyKHRva2Vuc1swXSk7XHJcbiAgLy8g5omA5pyJ55qE5pWw5a2m6L+Q566X56ymXHJcbiAgY29uc3Qgb3BlcmF0b3IgPSBbXCIrXCIsIFwiLVwiLCBcIipcIiwgXCIvXCJdO1xyXG4gIGNvbnN0IHN0YWNrOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyDmi7/liLDnmoTmmK8g6L+Q566X56ymIOi/m+ihjOi/kOeul1xyXG4gICAgaWYgKG9wZXJhdG9yLmluY2x1ZGVzKHRva2Vuc1tpXSkpIHtcclxuICAgICAgLy8g5Ye65Lik5LiqIOagiOmhtiDlh7rkuKTkuKrov5vooYzov5DnrpdcclxuICAgICAgY29uc3QgYiA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBjb25zdCBhID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGxldCBhZnRlcl9vcGVyYXRlOiBudW1iZXI7XHJcbiAgICAgIGlmICh0b2tlbnNbaV0gPT09IFwiK1wiKSB7XHJcbiAgICAgICAgYWZ0ZXJfb3BlcmF0ZSA9IE51bWJlcihhKSArIE51bWJlcihiKTtcclxuICAgICAgfSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiLVwiKSB7XHJcbiAgICAgICAgYWZ0ZXJfb3BlcmF0ZSA9IE51bWJlcihhKSAtIE51bWJlcihiKTtcclxuICAgICAgfSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiKlwiKSB7XHJcbiAgICAgICAgYWZ0ZXJfb3BlcmF0ZSA9IE51bWJlcihhKSAqIE51bWJlcihiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhZnRlcl9vcGVyYXRlID0gTWF0aC50cnVuYyhOdW1iZXIoYSkgLyBOdW1iZXIoYikpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpID09PSB0b2tlbnMubGVuZ3RoIC0gMSkgcmV0dXJuIGFmdGVyX29wZXJhdGU7XHJcbiAgICAgIHN0YWNrLnB1c2goU3RyaW5nKGFmdGVyX29wZXJhdGUpKTtcclxuICAgIH1cclxuICAgIC8vIOaLv+WIsOeahOaYryDmlbDlrZcg5YWl5qCIXHJcbiAgICBlbHNlIHtcclxuICAgICAgc3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGV2YWxSUE4oW1wiMlwiLCBcIjFcIiwgXCIrXCIsIFwiM1wiLCBcIipcIl0pLCA5KTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGV2YWxSUE4oW1wiNFwiLCBcIjEzXCIsIFwiNVwiLCBcIi9cIiwgXCIrXCJdKSwgNik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICBldmFsUlBOKFtcclxuICAgIFwiMTBcIixcclxuICAgIFwiNlwiLFxyXG4gICAgXCI5XCIsXHJcbiAgICBcIjNcIixcclxuICAgIFwiK1wiLFxyXG4gICAgXCItMTFcIixcclxuICAgIFwiKlwiLFxyXG4gICAgXCIvXCIsXHJcbiAgICBcIipcIixcclxuICAgIFwiMTdcIixcclxuICAgIFwiK1wiLFxyXG4gICAgXCI1XCIsXHJcbiAgICBcIitcIixcclxuICBdKSxcclxuICAyMlxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZXZhbFJQTihbXCIxMFwiXSksIDEwKTtcclxuIl19