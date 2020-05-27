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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
assert_1.default.deepStrictEqual(generateParenthesis(4).sort(), [
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
].sort());
assert_1.default.deepStrictEqual(generateParenthesis_1(3).sort(), [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
]);
assert_1.default.deepStrictEqual(generateParenthesis_1(4).sort(), [
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
].sort());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIu5ous5Y+355Sf5oiQLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMi7mi6zlj7fnlJ/miJAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJOzs7OztBQUlKOzs7R0FHRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBVSxDQUFTO0lBQzNDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsT0FBTyxNQUFNLENBQUM7SUFFZDs7U0FFSztJQUNMLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsQ0FBUztRQUN0RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixtQkFBbUI7WUFDbkIsMERBQTBEO1lBRTFELFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7S0FFSztB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QUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7SUFDRixZQUFZO0tBQ1gsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFFekI7O0tBRUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5Ye6wqBuwqDku6PooajnlJ/miJDmi6zlj7fnmoTlr7nmlbDvvIzor7fkvaDlhpnlh7rkuIDkuKrlh73mlbDvvIzkvb/lhbbog73lpJ/nlJ/miJDmiYDmnInlj6/og73nmoTlubbkuJTmnInmlYjnmoTmi6zlj7fnu4TlkIjjgIJcblxu5L6L5aaC77yM57uZ5Ye6wqBuID0gM++8jOeUn+aIkOe7k+aenOS4uu+8mlxuXG5bXG4gIFwiKCgoKSkpXCIsXG4gIFwiKCgpKCkpXCIsXG4gIFwiKCgpKSgpXCIsXG4gIFwiKCkoKCkpXCIsXG4gIFwiKCkoKSgpXCJcbl1cblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2dlbmVyYXRlLXBhcmVudGhlc2VzXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuaW1wb3J0IHsgY3JlYXRlRG91YmxlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0RvdWJsZUxpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBnZW5lcmF0ZVBhcmVudGhlc2lzID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGJhY2t0cmFjayhcIlwiLCAwLCBuICogMik7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgLyoqXG4gICAqIOWbnua6r+azlVxuICAgKiAqL1xuICBmdW5jdGlvbiBiYWNrdHJhY2soc3RyOiBzdHJpbmcsIGRlcHRoOiBudW1iZXIsIG46IG51bWJlcikge1xuICAgIC8vIGNvbnNvbGUubG9nKHN0cilcbiAgICBpZiAobiA9PT0gZGVwdGgpIHtcbiAgICAgIHJldHVybiByZXN1bHQucHVzaChzdHIgKyBcIilcIi5yZXBlYXQobikpO1xuICAgIH1cblxuICAgIGlmIChkZXB0aCArIDEgPD0gbikge1xuICAgICAgYmFja3RyYWNrKHN0ciArIFwiKFwiLCBkZXB0aCArIDEsIG4gLSAxKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkZXB0aDsgaSsrKSB7XG4gICAgICAvLyDlj6rmt7vliqAgKSgg6ICM5LiN5pivICkg5piv5Zug5Li6XG4gICAgICAvLyDlpoLmnpzkvb/nlKggKSDkvJrlh7rnjrAg5LmL5ZCO5YWo5pivICkg55qE5oOF5Ya1IOWwseaYryDph43lpI3nmoTmk43kvZwo5ZKM5pyA5LiK6Z2iIG4gPT09IGRlcHRoIOeahOWIhuaUryDph43lpI0pXG5cbiAgICAgIGJhY2t0cmFjayhzdHIgKyBcIilcIi5yZXBlYXQoaSkgKyBcIihcIiwgZGVwdGggLSBpICsgMSwgbiAtIGkgLSAxKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICog5a6Y5pa5IOabtOS8mOmbheeahOino+azlVxuICogKi9cbnZhciBnZW5lcmF0ZVBhcmVudGhlc2lzXzEgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIGxldCByZXM6IHN0cmluZ1tdID0gW107XG5cbiAgZnVuY3Rpb24gaChwczogc3RyaW5nLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpIHtcbiAgICBpZiAobGVmdCA9PSBuICYmIHJpZ2h0ID09IG4pIHtcbiAgICAgIHJlcy5wdXNoKHBzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g5LyY5YWI5bu656uLIChcbiAgICBpZiAobGVmdCA8IG4pIHtcbiAgICAgIGgocHMgKyBcIihcIiwgbGVmdCArIDEsIHJpZ2h0KTtcbiAgICB9XG4gICAgLy8g5YaN5pivICksIOWPiOS/neivgeS6hiAoIOavlCApIOWkmiDmiY0g55SoKSDkv53or4HkuoYgKCkg55qE5ZCI5rOV5oCnIOWmmeWVilxuICAgIGlmIChsZWZ0ID4gcmlnaHQpIHtcbiAgICAgIGgocHMgKyBcIilcIiwgbGVmdCwgcmlnaHQgKyAxKTtcbiAgICB9XG4gIH1cblxuICBoKFwiXCIsIDAsIDApO1xuICByZXR1cm4gcmVzO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2VuZXJhdGVQYXJlbnRoZXNpcygzKS5zb3J0KCksIFtcbiAgXCIoKCgpKSlcIixcbiAgXCIoKCkoKSlcIixcbiAgXCIoKCkpKClcIixcbiAgXCIoKSgoKSlcIixcbiAgXCIoKSgpKClcIixcbl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgZ2VuZXJhdGVQYXJlbnRoZXNpcyg0KS5zb3J0KCksXG4gIFtcbiAgICBcIigoKCgpKSkpXCIsXG4gICAgXCIoKCgpKCkpKVwiLFxuICAgIFwiKCgoKSkoKSlcIixcbiAgICBcIigoKCkpKSgpXCIsXG4gICAgXCIoKCkoKCkpKVwiLFxuICAgIFwiKCgpKCkoKSlcIixcbiAgICBcIigoKSgpKSgpXCIsXG4gICAgXCIoKCkpKCgpKVwiLFxuICAgIFwiKCgpKSgpKClcIixcbiAgICBcIigpKCgoKSkpXCIsXG4gICAgXCIoKSgoKSgpKVwiLFxuICAgIFwiKCkoKCkpKClcIixcbiAgICBcIigpKCkoKCkpXCIsXG4gICAgXCIoKSgpKCkoKVwiLFxuICBdLnNvcnQoKVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2VuZXJhdGVQYXJlbnRoZXNpc18xKDMpLnNvcnQoKSwgW1xuICBcIigoKCkpKVwiLFxuICBcIigoKSgpKVwiLFxuICBcIigoKSkoKVwiLFxuICBcIigpKCgpKVwiLFxuICBcIigpKCkoKVwiLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBnZW5lcmF0ZVBhcmVudGhlc2lzXzEoNCkuc29ydCgpLFxuICBbXG4gICAgXCIoKCgoKSkpKVwiLFxuICAgIFwiKCgoKSgpKSlcIixcbiAgICBcIigoKCkpKCkpXCIsXG4gICAgXCIoKCgpKSkoKVwiLFxuICAgIFwiKCgpKCgpKSlcIixcbiAgICBcIigoKSgpKCkpXCIsXG4gICAgXCIoKCkoKSkoKVwiLFxuICAgIFwiKCgpKSgoKSlcIixcbiAgICBcIigoKSkoKSgpXCIsXG4gICAgXCIoKSgoKCkpKVwiLFxuICAgIFwiKCkoKCkoKSlcIixcbiAgICBcIigpKCgpKSgpXCIsXG4gICAgXCIoKSgpKCgpKVwiLFxuICAgIFwiKCkoKSgpKClcIixcbiAgXS5zb3J0KClcbik7XG5cbmNvbnN0IEJlbmNobWFyayA9IHJlcXVpcmUoXCJiZW5jaG1hcmtcIik7XG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGUoKTtcblxuc3VpdGVcbiAgLmFkZChcIm1pbmVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGdlbmVyYXRlUGFyZW50aGVzaXMoNyk7XG4gIH0pXG4gIC5hZGQoXCJvdGhlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZ2VuZXJhdGVQYXJlbnRoZXNpc18xKDcpO1xuICB9KVxuXG4gIC8vIGFkZCBsaXN0ZW5lcnNcbiAgLm9uKFwiY3ljbGVcIiwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XG4gIH0pXG4gIC5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkZhc3Rlc3QgaXMgXCIgKyB0aGlzLmZpbHRlcihcImZhc3Rlc3RcIikubWFwKFwibmFtZVwiKSk7XG4gIH0pXG4gIC8vIHJ1biBhc3luY1xuICAucnVuKHsgYXN5bmM6IGZhbHNlIH0pO1xuXG4vKipcbiAqIOW3ruS4jeWkmiDmiJHmk6ZcbiAqICovXG4iXX0=