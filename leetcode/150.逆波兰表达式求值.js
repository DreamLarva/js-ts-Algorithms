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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) return Number(tokens[0]);
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
      } else if (tokens[i] === "-") {
        after_operate = Number(a) - Number(b);
      } else if (tokens[i] === "*") {
        after_operate = Number(a) * Number(b);
      } else {
        after_operate = Math.trunc(Number(a) / Number(b));
      }
      if (i === tokens.length - 1) return after_operate;
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
assert_1.default.strictEqual(
  evalRPN([
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
  ]),
  22
);
assert_1.default.strictEqual(evalRPN(["10"]), 10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUwLumAhuazouWFsOihqOi+vuW8j+axguWAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUwLumAhuazouWFsOihqOi+vuW8j+axguWAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLE1BQWdCO0lBQ3BDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsV0FBVztJQUNYLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLGdCQUFnQjtRQUNoQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsaUJBQWlCO1lBQ2pCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxhQUFxQixDQUFDO1lBQzFCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDbkIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekM7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUMxQixhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzFCLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNILGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRDtZQUNELElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxPQUFPLGFBQWEsQ0FBQztZQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBRXJDO1FBQ0QsYUFBYTthQUNSO1lBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtLQUNKO0FBRUwsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNsQyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNuQyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQzlFLEVBQUUsQ0FDTCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDZixFQUFFLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuagueaNrumAhuazouWFsOihqOekuuazle+8jOaxguihqOi+vuW8j+eahOWAvOOAglxyXG5odHRwczovL2JhaWtlLmJhaWR1LmNvbS9pdGVtLyVFOSU4MCU4NiVFNiVCMyVBMiVFNSU4NSVCMCVFNSVCQyU4Ri8xMjg0MzdcclxuXHJcblxyXG7mnInmlYjnmoTov5DnrpfnrKbljIXmi6wgKywgLSwgKiwgLyDjgILmr4/kuKrov5Dnrpflr7nosaHlj6/ku6XmmK/mlbTmlbDvvIzkuZ/lj6/ku6XmmK/lj6bkuIDkuKrpgIbms6LlhbDooajovr7lvI/jgIJcclxuXHJcbuivtOaYju+8mlxyXG5cclxu5pW05pWw6Zmk5rOV5Y+q5L+d55WZ5pW05pWw6YOo5YiG44CCXHJcbue7meWumumAhuazouWFsOihqOi+vuW8j+aAu+aYr+acieaViOeahOOAguaNouWPpeivneivtO+8jOihqOi+vuW8j+aAu+S8muW+l+WHuuacieaViOaVsOWAvOS4lOS4jeWtmOWcqOmZpOaVsOS4uiAwIOeahOaDheWGteOAglxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWlOiBbXCIyXCIsIFwiMVwiLCBcIitcIiwgXCIzXCIsIFwiKlwiXVxyXG7ovpPlh7o6IDlcclxu6Kej6YeKOiAoKDIgKyAxKSAqIDMpID0gOVxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWlOiBbXCI0XCIsIFwiMTNcIiwgXCI1XCIsIFwiL1wiLCBcIitcIl1cclxu6L6T5Ye6OiA2XHJcbuino+mHijogKDQgKyAoMTMgLyA1KSkgPSA2XHJcbuekuuS+iyAz77yaXHJcblxyXG7ovpPlhaU6IFtcIjEwXCIsIFwiNlwiLCBcIjlcIiwgXCIzXCIsIFwiK1wiLCBcIi0xMVwiLCBcIipcIiwgXCIvXCIsIFwiKlwiLCBcIjE3XCIsIFwiK1wiLCBcIjVcIiwgXCIrXCJdXHJcbui+k+WHujogMjJcclxu6Kej6YeKOlxyXG4gICgoMTAgKiAoNiAvICgoOSArIDMpICogLTExKSkpICsgMTcpICsgNVxyXG49ICgoMTAgKiAoNiAvICgxMiAqIC0xMSkpKSArIDE3KSArIDVcclxuPSAoKDEwICogKDYgLyAtMTMyKSkgKyAxNykgKyA1XHJcbj0gKCgxMCAqIDApICsgMTcpICsgNVxyXG49ICgwICsgMTcpICsgNVxyXG49IDE3ICsgNVxyXG49IDIyXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGV2YWxSUE4gPSBmdW5jdGlvbiAodG9rZW5zOiBzdHJpbmdbXSkge1xyXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDEpIHJldHVybiBOdW1iZXIodG9rZW5zWzBdKTtcclxuICAgIC8vIOaJgOacieeahOaVsOWtpui/kOeul+esplxyXG4gICAgY29uc3Qgb3BlcmF0b3IgPSBbXCIrXCIsIFwiLVwiLCBcIipcIiwgXCIvXCJdO1xyXG4gICAgY29uc3Qgc3RhY2s6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIOaLv+WIsOeahOaYryDov5DnrpfnrKYg6L+b6KGM6L+Q566XXHJcbiAgICAgICAgaWYgKG9wZXJhdG9yLmluY2x1ZGVzKHRva2Vuc1tpXSkpIHtcclxuICAgICAgICAgICAgLy8g5Ye65Lik5LiqIOagiOmhtiDlh7rkuKTkuKrov5vooYzov5DnrpdcclxuICAgICAgICAgICAgY29uc3QgYiA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBhZnRlcl9vcGVyYXRlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbnNbaV0gPT09IFwiK1wiKSB7XHJcbiAgICAgICAgICAgICAgICBhZnRlcl9vcGVyYXRlID0gTnVtYmVyKGEpICsgTnVtYmVyKGIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgIGFmdGVyX29wZXJhdGUgPSBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIipcIikge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJfb3BlcmF0ZSA9IE51bWJlcihhKSAqIE51bWJlcihiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFmdGVyX29wZXJhdGUgPSBNYXRoLnRydW5jKE51bWJlcihhKSAvIE51bWJlcihiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPT09IHRva2Vucy5sZW5ndGggLSAxKSByZXR1cm4gYWZ0ZXJfb3BlcmF0ZTtcclxuICAgICAgICAgICAgc3RhY2sucHVzaChTdHJpbmcoYWZ0ZXJfb3BlcmF0ZSkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5ou/5Yiw55qE5pivIOaVsOWtlyDlhaXmoIhcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGV2YWxSUE4oW1wiMlwiLCBcIjFcIiwgXCIrXCIsIFwiM1wiLCBcIipcIl0pLFxyXG4gICAgOSxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZXZhbFJQTihbXCI0XCIsIFwiMTNcIiwgXCI1XCIsIFwiL1wiLCBcIitcIl0pLFxyXG4gICAgNixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZXZhbFJQTihbXCIxMFwiLCBcIjZcIiwgXCI5XCIsIFwiM1wiLCBcIitcIiwgXCItMTFcIiwgXCIqXCIsIFwiL1wiLCBcIipcIiwgXCIxN1wiLCBcIitcIiwgXCI1XCIsIFwiK1wiXSksXHJcbiAgICAyMixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZXZhbFJQTihbXCIxMFwiXSksXHJcbiAgICAxMCxcclxuKTtcclxuIl19
