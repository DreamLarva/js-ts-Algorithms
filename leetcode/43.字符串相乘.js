"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
常见题
43. 字符串相乘
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
通过次数139,977提交次数313,224
* */
function multiply(num1, num2) {
  const step1 = [];
  // 乘
  let long;
  let short;
  if (num1.length > num2.length) {
    long = num1;
    short = num2;
  } else {
    long = num2;
    short = num1;
  }
  for (let i = short.length - 1; i >= 0; i--) {
    step1.push(multiplySingle(long, short[i]));
  }
  // 加
  let result = "0";
  for (let i = 0; i < step1.length; i++) {
    result = sum(result, step1[i] + "0".repeat(i));
  }
  return result;
}
function multiplySingle(long, single) {
  if (single === "0") return "0";
  let p = "";
  let j = 0;
  const s = Number(single);
  for (let i = long.length - 1; i >= 0; i--) {
    const d = s * Number(long[i]) + j;
    p = (d % 10) + p;
    j = Math.floor(d / 10);
  }
  return j === 0 ? p : j + p;
}
function sum(long, short) {
  if (short.length > long.length) [long, short] = [short, long];
  if (short === "0") return long;
  const r = (s) => s.split("").reverse();
  const s = r(short);
  const l = r(long);
  let result = "";
  let j = 0;
  for (let i = 0; i < long.length; i++) {
    const d = Number(s[i] ?? "0") + Number(l[i]) + j;
    result = (d % 10) + result;
    j = Math.floor(d / 10);
  }
  return j === 0 ? result : j + result;
}
function multiply2(num1, num2) {
  if (!+num1 || !+num2) return "0";
  const prod = Array(num1.length + num2.length).fill(0);
  let currIdx = prod.length - 1;
  for (let i = num1.length - 1; i >= 0; i--) {
    // idx 也就是这一层运算 最右一位 开始的位置
    let idx = currIdx--;
    for (let j = num2.length - 1; j >= 0; j--) {
      const res = +num1[i] * +num2[j] + prod[idx];
      prod[idx] = res % 10;
      prod[--idx] += Math.floor(res / 10);
    }
  }
  return prod.join("").replace(/^0+/, "");
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(multiplySingle("2", "1"), "2");
assert_1.default.strictEqual(multiplySingle("12", "3"), "36");
assert_1.default.strictEqual(multiplySingle("12", "5"), "60");
assert_1.default.strictEqual(multiplySingle("99", "9"), String(99 * 9));
assert_1.default.strictEqual(
  multiplySingle("123456789", "9"),
  String(9 * 123456789)
);
assert_1.default.strictEqual(sum("12", "21"), String(33));
assert_1.default.strictEqual(sum("99", "99"), String(99 + 99));
assert_1.default.strictEqual(multiply("2", "3"), "6");
assert_1.default.strictEqual(multiply("123", "456"), "56088");
assert_1.default.strictEqual(
  multiply("123456789", "987654321"),
  "121932631112635269"
);
assert_1.default.strictEqual(multiply2("123", "321"), String(123 * 321));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDMu5a2X56ym5Liy55u45LmYLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80My7lrZfnrKbkuLLnm7jkuZgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkk7QUFDSixTQUFTLFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUMxQyxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsSUFBSTtJQUNKLElBQUksSUFBWSxDQUFDO0lBQ2pCLElBQUksS0FBYSxDQUFDO0lBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQzdCLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2Q7U0FBTTtRQUNMLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ2Q7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUM7SUFFRCxJQUFJO0lBQ0osSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxjQUFj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QUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXJELGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFN0UsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5bi46KeB6aKYXG40My4g5a2X56ym5Liy55u45LmYXG7nu5nlrprkuKTkuKrku6XlrZfnrKbkuLLlvaLlvI/ooajnpLrnmoTpnZ7otJ/mlbTmlbAgbnVtMSDlkowgbnVtMu+8jOi/lOWbniBudW0xIOWSjCBudW0yIOeahOS5mOenr++8jOWug+S7rOeahOS5mOenr+S5n+ihqOekuuS4uuWtl+espuS4suW9ouW8j+OAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW0xID0gXCIyXCIsIG51bTIgPSBcIjNcIlxu6L6T5Ye6OiBcIjZcIlxu56S65L6LIDI6XG5cbui+k+WFpTogbnVtMSA9IFwiMTIzXCIsIG51bTIgPSBcIjQ1NlwiXG7ovpPlh7o6IFwiNTYwODhcIlxu6K+05piO77yaXG5cbm51bTEg5ZKMIG51bTIg55qE6ZW/5bqm5bCP5LqOMTEw44CCXG5udW0xIOWSjCBudW0yIOWPquWMheWQq+aVsOWtlyAwLTnjgIJcbm51bTEg5ZKMIG51bTIg5Z2H5LiN5Lul6Zu25byA5aS077yM6Zmk6Z2e5piv5pWw5a2XIDAg5pys6Lqr44CCXG7kuI3og73kvb/nlKjku7vkvZXmoIflh4blupPnmoTlpKfmlbDnsbvlnovvvIjmr5TlpoIgQmlnSW50ZWdlcu+8ieaIluebtOaOpeWwhui+k+WFpei9rOaNouS4uuaVtOaVsOadpeWkhOeQhuOAglxu6YCa6L+H5qyh5pWwMTM5LDk3N+aPkOS6pOasoeaVsDMxMywyMjRcbiogKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3RlcDE6IHN0cmluZ1tdID0gW107XG4gIC8vIOS5mFxuICBsZXQgbG9uZzogc3RyaW5nO1xuICBsZXQgc2hvcnQ6IHN0cmluZztcbiAgaWYgKG51bTEubGVuZ3RoID4gbnVtMi5sZW5ndGgpIHtcbiAgICBsb25nID0gbnVtMTtcbiAgICBzaG9ydCA9IG51bTI7XG4gIH0gZWxzZSB7XG4gICAgbG9uZyA9IG51bTI7XG4gICAgc2hvcnQgPSBudW0xO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IHNob3J0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgc3RlcDEucHVzaChtdWx0aXBseVNpbmdsZShsb25nLCBzaG9ydFtpXSkpO1xuICB9XG5cbiAgLy8g5YqgXG4gIGxldCByZXN1bHQgPSBcIjBcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwMS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCA9IHN1bShyZXN1bHQsIHN0ZXAxW2ldICsgXCIwXCIucmVwZWF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5U2luZ2xlKGxvbmc6IHN0cmluZywgc2luZ2xlOiBzdHJpbmcpIHtcbiAgaWYgKHNpbmdsZSA9PT0gXCIwXCIpIHJldHVybiBcIjBcIjtcbiAgbGV0IHAgPSBcIlwiO1xuICBsZXQgaiA9IDA7XG4gIGNvbnN0IHMgPSBOdW1iZXIoc2luZ2xlKTtcbiAgZm9yIChsZXQgaSA9IGxvbmcubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBkID0gcyAqIE51bWJlcihsb25nW2ldKSArIGo7XG4gICAgcCA9IChkICUgMTApICsgcDtcbiAgICBqID0gTWF0aC5mbG9vcihkIC8gMTApO1xuICB9XG5cbiAgcmV0dXJuIGogPT09IDAgPyBwIDogaiArIHA7XG59XG5cbmZ1bmN0aW9uIHN1bShsb25nOiBzdHJpbmcsIHNob3J0OiBzdHJpbmcpIHtcbiAgaWYgKHNob3J0Lmxlbmd0aCA+IGxvbmcubGVuZ3RoKSBbbG9uZywgc2hvcnRdID0gW3Nob3J0LCBsb25nXTtcbiAgaWYgKHNob3J0ID09PSBcIjBcIikgcmV0dXJuIGxvbmc7XG4gIGNvbnN0IHIgPSAoczogc3RyaW5nKSA9PiBzLnNwbGl0KFwiXCIpLnJldmVyc2UoKTtcbiAgY29uc3QgcyA9IHIoc2hvcnQpO1xuICBjb25zdCBsID0gcihsb25nKTtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGxldCBqID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZCA9IE51bWJlcihzW2ldID8/IFwiMFwiKSArIE51bWJlcihsW2ldKSArIGo7XG4gICAgcmVzdWx0ID0gKGQgJSAxMCkgKyByZXN1bHQ7XG4gICAgaiA9IE1hdGguZmxvb3IoZCAvIDEwKTtcbiAgfVxuXG4gIHJldHVybiBqID09PSAwID8gcmVzdWx0IDogaiArIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkyKG51bTE6IHN0cmluZywgbnVtMjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCErbnVtMSB8fCAhK251bTIpIHJldHVybiBcIjBcIjtcbiAgY29uc3QgcHJvZCA9IEFycmF5KG51bTEubGVuZ3RoICsgbnVtMi5sZW5ndGgpLmZpbGwoMCk7XG4gIGxldCBjdXJySWR4ID0gcHJvZC5sZW5ndGggLSAxO1xuXG4gIGZvciAobGV0IGkgPSBudW0xLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgLy8gaWR4IOS5n+WwseaYr+i/meS4gOWxgui/kOeulyDmnIDlj7PkuIDkvY0g5byA5aeL55qE5L2N572uXG4gICAgbGV0IGlkeCA9IGN1cnJJZHgtLTtcblxuICAgIGZvciAobGV0IGogPSBudW0yLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICBjb25zdCByZXMgPSArbnVtMVtpXSAqICtudW0yW2pdICsgcHJvZFtpZHhdO1xuICAgICAgcHJvZFtpZHhdID0gcmVzICUgMTA7XG4gICAgICBwcm9kWy0taWR4XSArPSBNYXRoLmZsb29yKHJlcyAvIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb2Quam9pbihcIlwiKS5yZXBsYWNlKC9eMCsvLCBcIlwiKTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChtdWx0aXBseVNpbmdsZShcIjJcIiwgXCIxXCIpLCBcIjJcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobXVsdGlwbHlTaW5nbGUoXCIxMlwiLCBcIjNcIiksIFwiMzZcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobXVsdGlwbHlTaW5nbGUoXCIxMlwiLCBcIjVcIiksIFwiNjBcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobXVsdGlwbHlTaW5nbGUoXCI5OVwiLCBcIjlcIiksIFN0cmluZyg5OSAqIDkpKTtcbmFzc2VydC5zdHJpY3RFcXVhbChtdWx0aXBseVNpbmdsZShcIjEyMzQ1Njc4OVwiLCBcIjlcIiksIFN0cmluZyg5ICogMTIzNDU2Nzg5KSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChzdW0oXCIxMlwiLCBcIjIxXCIpLCBTdHJpbmcoMzMpKTtcbmFzc2VydC5zdHJpY3RFcXVhbChzdW0oXCI5OVwiLCBcIjk5XCIpLCBTdHJpbmcoOTkgKyA5OSkpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobXVsdGlwbHkoXCIyXCIsIFwiM1wiKSwgXCI2XCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG11bHRpcGx5KFwiMTIzXCIsIFwiNDU2XCIpLCBcIjU2MDg4XCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG11bHRpcGx5KFwiMTIzNDU2Nzg5XCIsIFwiOTg3NjU0MzIxXCIpLCBcIjEyMTkzMjYzMTExMjYzNTI2OVwiKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKG11bHRpcGx5MihcIjEyM1wiLCBcIjMyMVwiKSwgU3RyaW5nKDEyMyAqIDMyMSkpO1xuIl19
