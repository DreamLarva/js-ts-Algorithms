"use strict";
/*
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  backtrack("", 0, n * 2);
  return result;
  /**
   * 回溯法
   * */
  function backtrack(str, depth, n) {
    // console.log(str)
    if (n === depth) {
      return result.push(str + ")".repeat(n));
    }
    if (depth + 1 <= n) {
      backtrack(str + "(", depth + 1, n - 1);
    }
    for (let i = 1; i <= depth; i++) {
      // 只添加 )( 而不是 ) 是因为
      // 如果使用 ) 会出现 之后全是 ) 的情况 就是 重复的操作(和最上面 n === depth 的分支 重复)
      backtrack(str + ")".repeat(i) + "(", depth - i + 1, n - i - 1);
    }
  }
};
/**
 * 官方 更优雅的解法
 * */
var generateParenthesis_1 = function (n) {
  let res = [];
  function h(ps, left, right) {
    if (left == n && right == n) {
      res.push(ps);
      return;
    }
    // 优先建立 (
    if (left < n) {
      h(ps + "(", left + 1, right);
    }
    // 再是 ), 又保证了 ( 比 ) 多 才 用) 保证了 () 的合法性 妙啊
    if (left > right) {
      h(ps + ")", left, right + 1);
    }
  }
  h("", 0, 0);
  return res;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(generateParenthesis(3).sort(), [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()",
]);
assert_1.default.deepStrictEqual(
  generateParenthesis(4).sort(),
  [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()",
  ].sort()
);
assert_1.default.deepStrictEqual(generateParenthesis_1(3).sort(), [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()",
]);
assert_1.default.deepStrictEqual(
  generateParenthesis_1(4).sort(),
  [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()",
  ].sort()
);
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
suite
  .add("mine", function () {
    generateParenthesis(7);
  })
  .add("other", function () {
    generateParenthesis_1(7);
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
/**
 * 差不多 我擦
 * */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIu5ous5Y+355Sf5oiQLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMi7mi6zlj7fnlJ/miJAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJOzs7OztBQUlKOzs7R0FHRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBVSxDQUFTO0lBRXpDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsT0FBTyxNQUFNLENBQUM7SUFFZDs7U0FFSztJQUNMLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsQ0FBUztRQUNwRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixtQkFBbUI7WUFDbkIsMERBQTBEO1lBRTFELFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7QUFDTCxDQUFDLENBQUM7QUFHRjs7S0FFSztB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Q0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUV6Qjs7S0FFSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlh7rCoG7CoOS7o+ihqOeUn+aIkOaLrOWPt+eahOWvueaVsO+8jOivt+S9oOWGmeWHuuS4gOS4quWHveaVsO+8jOS9v+WFtuiDveWkn+eUn+aIkOaJgOacieWPr+iDveeahOW5tuS4lOacieaViOeahOaLrOWPt+e7hOWQiOOAglxuXG7kvovlpoLvvIznu5nlh7rCoG4gPSAz77yM55Sf5oiQ57uT5p6c5Li677yaXG5cbltcbiAgXCIoKCgpKSlcIixcbiAgXCIoKCkoKSlcIixcbiAgXCIoKCkpKClcIixcbiAgXCIoKSgoKSlcIixcbiAgXCIoKSgpKClcIlxuXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZ2VuZXJhdGUtcGFyZW50aGVzZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG5pbXBvcnQge2NyZWF0ZURvdWJsZUxpbmtlZExpc3R9IGZyb20gXCIuLi91dGlsL0RvdWJsZUxpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBnZW5lcmF0ZVBhcmVudGhlc2lzID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGJhY2t0cmFjayhcIlwiLCAwLCBuICogMik7XG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIC8qKlxuICAgICAqIOWbnua6r+azlVxuICAgICAqICovXG4gICAgZnVuY3Rpb24gYmFja3RyYWNrKHN0cjogc3RyaW5nLCBkZXB0aDogbnVtYmVyLCBuOiBudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RyKVxuICAgICAgICBpZiAobiA9PT0gZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucHVzaChzdHIgKyBcIilcIi5yZXBlYXQobikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlcHRoICsgMSA8PSBuKSB7XG4gICAgICAgICAgICBiYWNrdHJhY2soc3RyICsgXCIoXCIsIGRlcHRoICsgMSwgbiAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGVwdGg7IGkrKykge1xuICAgICAgICAgICAgLy8g5Y+q5re75YqgICkoIOiAjOS4jeaYryApIOaYr+WboOS4ulxuICAgICAgICAgICAgLy8g5aaC5p6c5L2/55SoICkg5Lya5Ye6546wIOS5i+WQjuWFqOaYryApIOeahOaDheWGtSDlsLHmmK8g6YeN5aSN55qE5pON5L2cKOWSjOacgOS4iumdoiBuID09PSBkZXB0aCDnmoTliIbmlK8g6YeN5aSNKVxuXG4gICAgICAgICAgICBiYWNrdHJhY2soc3RyICsgXCIpXCIucmVwZWF0KGkpICsgXCIoXCIsIGRlcHRoIC0gaSArIDEsIG4gLSBpIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKlxuICog5a6Y5pa5IOabtOS8mOmbheeahOino+azlVxuICogKi9cbnZhciBnZW5lcmF0ZVBhcmVudGhlc2lzXzEgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gICAgbGV0IHJlczogc3RyaW5nW10gPSBbXTtcblxuICAgIGZ1bmN0aW9uIGgocHM6IHN0cmluZywgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChsZWZ0ID09IG4gJiYgcmlnaHQgPT0gbikge1xuICAgICAgICAgICAgcmVzLnB1c2gocHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS8mOWFiOW7uueriyAoXG4gICAgICAgIGlmIChsZWZ0IDwgbikge1xuICAgICAgICAgICAgaChwcyArICcoJywgbGVmdCArIDEsIHJpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlho3mmK8gKSwg5Y+I5L+d6K+B5LqGICgg5q+UICkg5aSaIOaJjSDnlKgpIOS/neivgeS6hiAoKSDnmoTlkIjms5XmgKcg5aaZ5ZWKXG4gICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIHtcbiAgICAgICAgICAgIGgocHMgKyAnKScsIGxlZnQsIHJpZ2h0ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoKCcnLCAwLCAwKTtcbiAgICByZXR1cm4gcmVzO1xufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGdlbmVyYXRlUGFyZW50aGVzaXMoMykuc29ydCgpLCBbXG4gICAgXCIoKCgpKSlcIixcbiAgICBcIigoKSgpKVwiLFxuICAgIFwiKCgpKSgpXCIsXG4gICAgXCIoKSgoKSlcIixcbiAgICBcIigpKCkoKVwiLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGdlbmVyYXRlUGFyZW50aGVzaXMoNCkuc29ydCgpLFxuICAgIFtcIigoKCgpKSkpXCIsIFwiKCgoKSgpKSlcIiwgXCIoKCgpKSgpKVwiLCBcIigoKCkpKSgpXCIsIFwiKCgpKCgpKSlcIiwgXCIoKCkoKSgpKVwiLCBcIigoKSgpKSgpXCIsIFwiKCgpKSgoKSlcIiwgXCIoKCkpKCkoKVwiLCBcIigpKCgoKSkpXCIsIFwiKCkoKCkoKSlcIiwgXCIoKSgoKSkoKVwiLCBcIigpKCkoKCkpXCIsIFwiKCkoKSgpKClcIl0uc29ydCgpLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2VuZXJhdGVQYXJlbnRoZXNpc18xKDMpLnNvcnQoKSwgW1xuICAgIFwiKCgoKSkpXCIsXG4gICAgXCIoKCkoKSlcIixcbiAgICBcIigoKSkoKVwiLFxuICAgIFwiKCkoKCkpXCIsXG4gICAgXCIoKSgpKClcIixcbl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBnZW5lcmF0ZVBhcmVudGhlc2lzXzEoNCkuc29ydCgpLFxuICAgIFtcIigoKCgpKSkpXCIsIFwiKCgoKSgpKSlcIiwgXCIoKCgpKSgpKVwiLCBcIigoKCkpKSgpXCIsIFwiKCgpKCgpKSlcIiwgXCIoKCkoKSgpKVwiLCBcIigoKSgpKSgpXCIsIFwiKCgpKSgoKSlcIiwgXCIoKCkpKCkoKVwiLCBcIigpKCgoKSkpXCIsIFwiKCkoKCkoKSlcIiwgXCIoKSgoKSkoKVwiLCBcIigpKCkoKCkpXCIsIFwiKCkoKSgpKClcIl0uc29ydCgpLFxuKTtcblxuY29uc3QgQmVuY2htYXJrID0gcmVxdWlyZShcImJlbmNobWFya1wiKTtcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZTtcblxuc3VpdGVcbiAgICAuYWRkKFwibWluZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdlbmVyYXRlUGFyZW50aGVzaXMoNyk7XG4gICAgfSlcbiAgICAuYWRkKFwib3RoZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBnZW5lcmF0ZVBhcmVudGhlc2lzXzEoNyk7XG4gICAgfSlcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XG4gICAgfSlcbiAgICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFzdGVzdCBpcyBcIiArIHRoaXMuZmlsdGVyKFwiZmFzdGVzdFwiKS5tYXAoXCJuYW1lXCIpKTtcbiAgICB9KVxuICAgIC8vIHJ1biBhc3luY1xuICAgIC5ydW4oe2FzeW5jOiBmYWxzZX0pO1xuXG4vKipcbiAqIOW3ruS4jeWkmiDmiJHmk6ZcbiAqICovXG4iXX0=
