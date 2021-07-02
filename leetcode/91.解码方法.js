"use strict";
/*
91. 解码方法
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。



示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
示例 4：

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。


提示：
  1 <= s.length <= 100
  s 只包含数字，并且可能包含前导零。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numDecodings = function (s) {
    /**
     * 动态 规划只存 三个变量 而不存数组
     * */
    const n = s.length;
    let a = 0; // f[i-2]
    let b = 1; // f[i-1]
    let c = 0; // f[i]
    // 注意这里是<=n 所以会多算一个值 作为结果
    // 所以这里 f[i] 记录的是对应到 s[i - 1] 在内的计算结果
    // 要得到 s[i] 的结果 就要 f[i+1] 位置的结果
    for (let i = 1; i <= n; ++i) {
        // 新的一位 重新计算
        c = 0;
        // 可以用 1 位
        if (s[i - 1] !== "0") {
            c += b;
        }
        // 可以用 2 位
        if (i > 1 && // i = 1 计算的是 s[0] 的结果,因为之一个元素 自然不计算 2个元素的情况
            s[i - 2] !== "0" &&
            Number(s[i - 2]) * 10 + Number(s[i - 1]) <= 26) {
            c += a;
        }
        // 对应的值 都后移一位
        a = b;
        b = c;
    }
    return c;
};
function numDecodings2(s) {
    /**
     * 动态规划
     * */
    if (s[0] === "0")
        return 0;
    const cache = Array(s.length).fill(0);
    cache[0] = 1;
    for (let i = 1; i < s.length; i++) {
        // 可以用 1 位
        // 如果上一位是 0 那么说明只 一种情况
        // 那个0 一定是跟着 f[i - 2] 为一个字符
        if (s[i - 1] !== "0") {
            cache[i] += cache[i - 1];
        }
        // 可以用 2 位
        if (!(s[i - 1] === "0" ||
            s[i - 1] > "2" ||
            (s[i - 1] === "2" && Number(s[i]) > 6))) {
            cache[i] += cache[i - 2] ?? 1;
        }
    }
    return cache[cache.length - 1];
}
/**
 * 超时
 * */
function numDecodings1(s) {
    // 回溯算法
    let result = 0;
    function step(s, index = 0) {
        // 用1位
        if (s[index] === "0")
            return;
        // 用完
        if (index === s.length - 1)
            return result++;
        step(s, index + 1);
        // 用2位
        // 不够用2位
        if (index + 1 > s.length - 1)
            return;
        const first = Number(s[index]); // 已经排除第一位是 0
        const second = Number(s[index + 1]);
        if (first > 2)
            return;
        if (first === 2 && second > 6)
            return;
        // 用完
        if (index + 1 === s.length - 1)
            return result++;
        step(s, index + 2);
    }
    step(s);
    return result;
}
const assert_1 = __importDefault(require("assert"));
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite();
// assert.strictEqual(numDecodings("12"), 2);
assert_1.default.strictEqual(numDecodings("226"), 3);
// assert.strictEqual(numDecodings("0"), 0);
// assert.strictEqual(numDecodings("06"), 0);
// assert.strictEqual(
//   numDecodings("111111111111111111111111111111111111111111111"),
//   1836311903
// );
// assert.strictEqual(numDecodings("10"), 1);
// assert.strictEqual(numDecodings("27"), 1);
// assert.strictEqual(numDecodings("2101"), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTEu6Kej56CB5pa55rOVLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS85MS7op6PnoIHmlrnms5UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStDSTs7Ozs7QUFFSixJQUFJLFlBQVksR0FBRyxVQUFVLENBQVM7SUFDcEM7O1NBRUs7SUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUztJQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQ2xCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDM0IsWUFBWTtRQUNaLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFTixVQUFVO1FBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNwQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ1I7UUFFRCxVQUFVO1FBQ1YsSUFDRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDRDQUE0QztZQUNyRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7WUFDaEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQzlDO1lBQ0EsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNSO1FBQ0QsYUFBYTtRQUNiLENB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QUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXBDLDZDQUE2QztBQUM3QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsNENBQTRDO0FBQzVDLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsbUVBQW1FO0FBQ25FLGVBQWU7QUFDZixLQUFLO0FBQ0wsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3QywrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuOTEuIOino+eggeaWueazlVxu5LiA5p2h5YyF5ZCr5a2X5q+NIEEtWiDnmoTmtojmga/pgJrov4fku6XkuIvmmKDlsITov5vooYzkuoYg57yW56CBIO+8mlxuXG4nQScgLT4gMVxuJ0InIC0+IDJcbi4uLlxuJ1onIC0+IDI2XG7opoEg6Kej56CBIOW3sue8lueggeeahOa2iOaBr++8jOaJgOacieaVsOWtl+W/hemhu+WfuuS6juS4iui/sOaYoOWwhOeahOaWueazle+8jOWPjeWQkeaYoOWwhOWbnuWtl+avje+8iOWPr+iDveacieWkmuenjeaWueazle+8ieOAguS+i+Wmgu+8jFwiMTExMDZcIiDlj6/ku6XmmKDlsITkuLrvvJpcblxuXCJBQUpGXCIg77yM5bCG5raI5oGv5YiG57uE5Li6ICgxIDEgMTAgNilcblwiS0pGXCIg77yM5bCG5raI5oGv5YiG57uE5Li6ICgxMSAxMCA2KVxu5rOo5oSP77yM5raI5oGv5LiN6IO95YiG57uE5Li6ICAoMSAxMSAwNikg77yM5Zug5Li6IFwiMDZcIiDkuI3og73mmKDlsITkuLogXCJGXCIg77yM6L+Z5piv55Sx5LqOIFwiNlwiIOWSjCBcIjA2XCIg5Zyo5pig5bCE5Lit5bm25LiN562J5Lu344CCXG5cbue7meS9oOS4gOS4quWPquWQq+aVsOWtl+eahCDpnZ7nqbog5a2X56ym5LiyIHMg77yM6K+36K6h566X5bm26L+U5ZueIOino+eggSDmlrnms5XnmoQg5oC75pWwIOOAglxuXG7popjnm67mlbDmja7kv53or4HnrZTmoYjogq/lrprmmK/kuIDkuKogMzIg5L2NIOeahOaVtOaVsOOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yacyA9IFwiMTJcIlxu6L6T5Ye677yaMlxu6Kej6YeK77ya5a6D5Y+v5Lul6Kej56CB5Li6IFwiQUJcIu+8iDEgMu+8ieaIluiAhSBcIkxcIu+8iDEy77yJ44CCXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpzID0gXCIyMjZcIlxu6L6T5Ye677yaM1xu6Kej6YeK77ya5a6D5Y+v5Lul6Kej56CB5Li6IFwiQlpcIiAoMiAyNiksIFwiVkZcIiAoMjIgNiksIOaIluiAhSBcIkJCRlwiICgyIDIgNikg44CCXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpzID0gXCIwXCJcbui+k+WHuu+8mjBcbuino+mHiu+8muayoeacieWtl+espuaYoOWwhOWIsOS7pSAwIOW8gOWktOeahOaVsOWtl+OAglxu5ZCr5pyJIDAg55qE5pyJ5pWI5pig5bCE5pivICdKJyAtPiBcIjEwXCIg5ZKMICdUJy0+IFwiMjBcIiDjgIJcbueUseS6juayoeacieWtl+espu+8jOWboOatpOayoeacieacieaViOeahOaWueazleWvueatpOi/m+ihjOino+egge+8jOWboOS4uuaJgOacieaVsOWtl+mDvemcgOimgeaYoOWwhOOAglxu56S65L6LIDTvvJpcblxu6L6T5YWl77yacyA9IFwiMDZcIlxu6L6T5Ye677yaMFxu6Kej6YeK77yaXCIwNlwiIOS4jeiDveaYoOWwhOWIsCBcIkZcIiDvvIzlm6DkuLrlrZfnrKbkuLLlkKvmnInliY3lr7wgMO+8iFwiNlwiIOWSjCBcIjA2XCIg5Zyo5pig5bCE5Lit5bm25LiN562J5Lu377yJ44CCXG5cblxu5o+Q56S677yaXG4gIDEgPD0gcy5sZW5ndGggPD0gMTAwXG4gIHMg5Y+q5YyF5ZCr5pWw5a2X77yM5bm25LiU5Y+v6IO95YyF5ZCr5YmN5a+86Zu244CCXG4qICovXG5cbnZhciBudW1EZWNvZGluZ3MgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIC8qKlxuICAgKiDliqjmgIEg6KeE5YiS5Y+q5a2YIOS4ieS4quWPmOmHjyDogIzkuI3lrZjmlbDnu4RcbiAgICogKi9cbiAgY29uc3QgbiA9IHMubGVuZ3RoO1xuICBsZXQgYSA9IDA7IC8vIGZbaS0yXVxuICBsZXQgYiA9IDE7IC8vIGZbaS0xXVxuICBsZXQgYyA9IDA7IC8vIGZbaV1cbiAgLy8g5rOo5oSP6L+Z6YeM5pivPD1uIOaJgOS7peS8muWkmueul+S4gOS4quWAvCDkvZzkuLrnu5PmnpxcbiAgLy8g5omA5Lul6L+Z6YeMIGZbaV0g6K6w5b2V55qE5piv5a+55bqU5YiwIHNbaSAtIDFdIOWcqOWGheeahOiuoeeul+e7k+aenFxuICAvLyDopoHlvpfliLAgc1tpXSDnmoTnu5Pmnpwg5bCx6KaBIGZbaSsxXSDkvY3nva7nmoTnu5PmnpxcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgKytpKSB7XG4gICAgLy8g5paw55qE5LiA5L2NIOmHjeaWsOiuoeeul1xuICAgIGMgPSAwO1xuXG4gICAgLy8g5Y+v5Lul55SoIDEg5L2NXG4gICAgaWYgKHNbaSAtIDFdICE9PSBcIjBcIikge1xuICAgICAgYyArPSBiO1xuICAgIH1cblxuICAgIC8vIOWPr+S7peeUqCAyIOS9jVxuICAgIGlmIChcbiAgICAgIGkgPiAxICYmIC8vIGkgPSAxIOiuoeeul+eahOaYryBzWzBdIOeahOe7k+aenCzlm6DkuLrkuYvkuIDkuKrlhYPntKAg6Ieq54S25LiN6K6h566XIDLkuKrlhYPntKDnmoTmg4XlhrVcbiAgICAgIHNbaSAtIDJdICE9PSBcIjBcIiAmJlxuICAgICAgTnVtYmVyKHNbaSAtIDJdKSAqIDEwICsgTnVtYmVyKHNbaSAtIDFdKSA8PSAyNlxuICAgICkge1xuICAgICAgYyArPSBhO1xuICAgIH1cbiAgICAvLyDlr7nlupTnmoTlgLwg6YO95ZCO56e75LiA5L2NXG4gICAgYSA9IGI7XG4gICAgYiA9IGM7XG4gIH1cbiAgcmV0dXJuIGM7XG59O1xuXG5mdW5jdGlvbiBudW1EZWNvZGluZ3MyKHM6IHN0cmluZyk6IG51bWJlciB7XG4gIC8qKlxuICAgKiDliqjmgIHop4TliJJcbiAgICogKi9cbiAgaWYgKHNbMF0gPT09IFwiMFwiKSByZXR1cm4gMDtcbiAgY29uc3QgY2FjaGUgPSBBcnJheShzLmxlbmd0aCkuZmlsbCgwKTtcbiAgY2FjaGVbMF0gPSAxO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIOWPr+S7peeUqCAxIOS9jVxuICAgIC8vIOWmguaenOS4iuS4gOS9jeaYryAwIOmCo+S5iOivtOaYjuWPqiDkuIDnp43mg4XlhrVcbiAgICAvLyDpgqPkuKowIOS4gOWumuaYr+i3n+edgCBmW2kgLSAyXSDkuLrkuIDkuKrlrZfnrKZcbiAgICBpZiAoc1tpIC0gMV0gIT09IFwiMFwiKSB7XG4gICAgICBjYWNoZVtpXSArPSBjYWNoZVtpIC0gMV07XG4gICAgfVxuXG4gICAgLy8g5Y+v5Lul55SoIDIg5L2NXG4gICAgaWYgKFxuICAgICAgIShcbiAgICAgICAgc1tpIC0gMV0gPT09IFwiMFwiIHx8XG4gICAgICAgIHNbaSAtIDFdID4gXCIyXCIgfHxcbiAgICAgICAgKHNbaSAtIDFdID09PSBcIjJcIiAmJiBOdW1iZXIoc1tpXSkgPiA2KVxuICAgICAgKVxuICAgICkge1xuICAgICAgY2FjaGVbaV0gKz0gY2FjaGVbaSAtIDJdID8/IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2NhY2hlLmxlbmd0aCAtIDFdO1xufVxuXG4vKipcbiAqIOi2heaXtlxuICogKi9cbmZ1bmN0aW9uIG51bURlY29kaW5nczEoczogc3RyaW5nKTogbnVtYmVyIHtcbiAgLy8g5Zue5rqv566X5rOVXG4gIGxldCByZXN1bHQgPSAwO1xuXG4gIGZ1bmN0aW9uIHN0ZXAoczogc3RyaW5nLCBpbmRleDogbnVtYmVyID0gMCkge1xuICAgIC8vIOeUqDHkvY1cbiAgICBpZiAoc1tpbmRleF0gPT09IFwiMFwiKSByZXR1cm47XG4gICAgLy8g55So5a6MXG4gICAgaWYgKGluZGV4ID09PSBzLmxlbmd0aCAtIDEpIHJldHVybiByZXN1bHQrKztcbiAgICBzdGVwKHMsIGluZGV4ICsgMSk7XG5cbiAgICAvLyDnlKgy5L2NXG4gICAgLy8g5LiN5aSf55SoMuS9jVxuICAgIGlmIChpbmRleCArIDEgPiBzLmxlbmd0aCAtIDEpIHJldHVybjtcblxuICAgIGNvbnN0IGZpcnN0ID0gTnVtYmVyKHNbaW5kZXhdKTsgLy8g5bey57uP5o6S6Zmk56ys5LiA5L2N5pivIDBcbiAgICBjb25zdCBzZWNvbmQgPSBOdW1iZXIoc1tpbmRleCArIDFdKTtcbiAgICBpZiAoZmlyc3QgPiAyKSByZXR1cm47XG4gICAgaWYgKGZpcnN0ID09PSAyICYmIHNlY29uZCA+IDYpIHJldHVybjtcblxuICAgIC8vIOeUqOWujFxuICAgIGlmIChpbmRleCArIDEgPT09IHMubGVuZ3RoIC0gMSkgcmV0dXJuIHJlc3VsdCsrO1xuXG4gICAgc3RlcChzLCBpbmRleCArIDIpO1xuICB9XG5cbiAgc3RlcChzKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCBCZW5jaG1hcmsgZnJvbSBcImJlbmNobWFya1wiO1xuY29uc3Qgc3VpdGUgPSBuZXcgQmVuY2htYXJrLlN1aXRlKCk7XG5cbi8vIGFzc2VydC5zdHJpY3RFcXVhbChudW1EZWNvZGluZ3MoXCIxMlwiKSwgMik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobnVtRGVjb2RpbmdzKFwiMjI2XCIpLCAzKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChudW1EZWNvZGluZ3MoXCIwXCIpLCAwKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChudW1EZWNvZGluZ3MoXCIwNlwiKSwgMCk7XG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoXG4vLyAgIG51bURlY29kaW5ncyhcIjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVwiKSxcbi8vICAgMTgzNjMxMTkwM1xuLy8gKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChudW1EZWNvZGluZ3MoXCIxMFwiKSwgMSk7XG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwobnVtRGVjb2RpbmdzKFwiMjdcIiksIDEpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKG51bURlY29kaW5ncyhcIjIxMDFcIiksIDEpO1xuIl19