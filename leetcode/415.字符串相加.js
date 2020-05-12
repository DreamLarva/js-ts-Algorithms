"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

1. num1 和num2 的长度都小于 5100.
2. num1 和num2 都只包含数字 0-9.
3. num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  /**
   * 本题 实际考察的是 大数 相加的运算
   * javascript 中 能够正常做四则运算的 范围是 Math.MAX_SAFE_INTEGER = 2 ** 53 -1 = 9007199254740991  (16位)
   * 所以只要两个数相加不超过 16 位 就能够正确运算
   * 所以 将 两个字符串 按照 每 15 位 分为1组 相加 再使用 数学的相加 就能保证精度 不出错
   * */
  if (num1.length <= 15 && num2.length <= 15) {
    return String(Number(num1) + Number(num2));
  }
  const length_offset = num1.length - num2.length;
  if (length_offset < 0) return addStrings(num2, num1);
  const step = 15;
  const pairs = [];
  for (let i = 0; i < num1.length; i += step) {
    const pair = [];
    pair.push(num1.substr(i, step));
    if (i + step > length_offset) {
      const offset = i + step - length_offset;
      pair.push(
        num2.substr(
          Math.max(i - length_offset, 0),
          i - length_offset < 0 ? offset : step
        )
      );
    }
    pairs.push(pair);
  }
  let result = "";
  let carry = 0;
  pairs.reverse().forEach(([a, b = "0"]) => {
    const sum = Number(a) + Number(b) + carry;
    const max_length = Math.max(a.length, b.length);
    carry = 0;
    if (sum >= 10 ** max_length) {
      carry = 1;
      result = String(sum).slice(1) + result;
    } else {
      result = String(sum).padStart(max_length, "0") + result;
    }
  });
  return carry === 1 ? "1" + result : result;
};
/**
 * leetcode top 的 算法
 * 竖式相加
 * 从后往前 每位相加
 * */
var addStrings_2 = function (num1, num2) {
  let str = [];
  let p = num1.length - 1;
  let q = num2.length - 1;
  let l1 = num1.split("");
  let l2 = num2.split("");
  let carry = 0;
  while (p >= 0 || q >= 0 || carry != 0) {
    if (p >= 0) {
      let c = l1[p--];
      carry += c.charCodeAt(0) - "0".charCodeAt(0);
    }
    if (q >= 0) {
      let c = l2[q--];
      carry += c.charCodeAt(0) - "0".charCodeAt(0);
    }
    str.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return str.reverse().join("");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(
  addStrings(
    "123456789012345678901234567890123456789012345678901234567890",
    "123456789012345678901234567890"
  ),
  "123456789012345678901234567890246913578024691357802469135780"
);
assert_1.default.strictEqual(
  addStrings("9333852702227987", "85731737104263"),
  "9419584439332250"
);
assert_1.default.strictEqual(
  addStrings("96423702883453279", "72156405165936898"),
  "168580108049390177"
);
assert_1.default.strictEqual(
  addStrings(
    "401716832807512840963",
    "167141802233061013023557397451289113296441069"
  ),
  "167141802233061013023557799168121920809282032"
);
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
const sample1 =
  "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
const sample2 =
  "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
suite
  .add("mine", function () {
    addStrings(sample1, sample2);
  })
  .add("top", function () {
    addStrings_2(sample1, sample2);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
/**
 * 没错 我的方法 更屌!
 * */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE1LuWtl+espuS4suebuOWKoC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDE1LuWtl+espuS4suebuOWKoC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFZLEVBQUUsSUFBWTtJQUNqRDs7Ozs7U0FLSztJQUVMLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDeEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hELElBQUksYUFBYSxHQUFHLENBQUM7UUFBRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sS0FBSyxHQUFlLEVBQUUsQ0FBQztJQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ3hDLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLGFBQWEsRUFBRTtZQUMxQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENB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QUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQzNCOztLQUVLIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5Lik5Liq5a2X56ym5Liy5b2i5byP55qE6Z2e6LSf5pW05pWwwqBudW0xIOWSjG51bTLCoO+8jOiuoeeul+Wug+S7rOeahOWSjOOAglxyXG5cclxu5rOo5oSP77yaXHJcblxyXG4xLiBudW0xIOWSjG51bTLCoOeahOmVv+W6pumDveWwj+S6jiA1MTAwLlxyXG4yLiBudW0xIOWSjG51bTIg6YO95Y+q5YyF5ZCr5pWw5a2XwqAwLTkuXHJcbjMuIG51bTEg5ZKMbnVtMiDpg73kuI3ljIXlkKvku7vkvZXliY3lr7zpm7bjgIJcclxu5L2g5LiN6IO95L2/55So5Lu75L2V5YWn5bu6IEJpZ0ludGVnZXIg5bqT77yMwqDkuZ/kuI3og73nm7TmjqXlsIbovpPlhaXnmoTlrZfnrKbkuLLovazmjaLkuLrmlbTmlbDlvaLlvI/jgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2FkZC1zdHJpbmdzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbnVtMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbnVtMlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgYWRkU3RyaW5ncyA9IGZ1bmN0aW9uIChudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvKipcclxuICAgICAqIOacrOmimCDlrp7pmYXogIPlr5/nmoTmmK8g5aSn5pWwIOebuOWKoOeahOi/kOeul1xyXG4gICAgICogamF2YXNjcmlwdCDkuK0g6IO95aSf5q2j5bi45YGa5Zub5YiZ6L+Q566X55qEIOiMg+WbtOaYryBNYXRoLk1BWF9TQUZFX0lOVEVHRVIgPSAyICoqIDUzIC0xID0gOTAwNzE5OTI1NDc0MDk5MSAgKDE25L2NKVxyXG4gICAgICog5omA5Lul5Y+q6KaB5Lik5Liq5pWw55u45Yqg5LiN6LaF6L+HIDE2IOS9jSDlsLHog73lpJ/mraPnoa7ov5DnrpdcclxuICAgICAqIOaJgOS7pSDlsIYg5Lik5Liq5a2X56ym5LiyIOaMieeFpyDmr48gMTUg5L2NIOWIhuS4ujHnu4Qg55u45YqgIOWGjeS9v+eUqCDmlbDlrabnmoTnm7jliqAg5bCx6IO95L+d6K+B57K+5bqmIOS4jeWHuumUmVxyXG4gICAgICogKi9cclxuXHJcbiAgICBpZiAobnVtMS5sZW5ndGggPD0gMTUgJiYgbnVtMi5sZW5ndGggPD0gMTUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nKE51bWJlcihudW0xKSArIE51bWJlcihudW0yKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZW5ndGhfb2Zmc2V0ID0gbnVtMS5sZW5ndGggLSBudW0yLmxlbmd0aDtcclxuICAgIGlmIChsZW5ndGhfb2Zmc2V0IDwgMCkgcmV0dXJuIGFkZFN0cmluZ3MobnVtMiwgbnVtMSk7XHJcbiAgICBjb25zdCBzdGVwID0gMTU7XHJcbiAgICBjb25zdCBwYWlyczogc3RyaW5nW11bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0xLmxlbmd0aDsgaSArPSBzdGVwKSB7XHJcbiAgICAgICAgY29uc3QgcGFpcjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBwYWlyLnB1c2gobnVtMS5zdWJzdHIoaSwgc3RlcCkpO1xyXG4gICAgICAgIGlmIChpICsgc3RlcCA+IGxlbmd0aF9vZmZzZXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaSArIHN0ZXAgLSBsZW5ndGhfb2Zmc2V0O1xyXG4gICAgICAgICAgICBwYWlyLnB1c2gobnVtMi5zdWJzdHIoTWF0aC5tYXgoaSAtIGxlbmd0aF9vZmZzZXQsIDApLCBpIC0gbGVuZ3RoX29mZnNldCA8IDAgPyBvZmZzZXQgOiBzdGVwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhaXJzLnB1c2gocGFpcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgY2FycnkgPSAwO1xyXG4gICAgcGFpcnMucmV2ZXJzZSgpLmZvckVhY2goKFthLCBiID0gXCIwXCJdKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3VtID0gTnVtYmVyKGEpICsgTnVtYmVyKGIpICsgY2Fycnk7XHJcbiAgICAgICAgY29uc3QgbWF4X2xlbmd0aCA9IE1hdGgubWF4KGEubGVuZ3RoLCBiLmxlbmd0aCk7XHJcbiAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgIGlmIChzdW0gPj0gMTAgKiogbWF4X2xlbmd0aCkge1xyXG4gICAgICAgICAgICBjYXJyeSA9IDE7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFN0cmluZyhzdW0pLnNsaWNlKDEpICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFN0cmluZyhzdW0pLnBhZFN0YXJ0KG1heF9sZW5ndGgsIFwiMFwiKSArIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcnJ5ID09PSAxID8gXCIxXCIgKyByZXN1bHQgOiByZXN1bHQ7XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGxlZXRjb2RlIHRvcCDnmoQg566X5rOVXHJcbiAqIOerluW8j+ebuOWKoFxyXG4gKiDku47lkI7lvoDliY0g5q+P5L2N55u45YqgXHJcbiAqICovXHJcbnZhciBhZGRTdHJpbmdzXzIgPSBmdW5jdGlvbiAobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpIHtcclxuICAgIGxldCBzdHIgPSBbXTtcclxuICAgIGxldCBwID0gbnVtMS5sZW5ndGggLSAxO1xyXG4gICAgbGV0IHEgPSBudW0yLmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgbDEgPSBudW0xLnNwbGl0KCcnKTtcclxuICAgIGxldCBsMiA9IG51bTIuc3BsaXQoJycpO1xyXG4gICAgbGV0IGNhcnJ5ID0gMDtcclxuXHJcbiAgICB3aGlsZSAocCA+PSAwIHx8IHEgPj0gMCB8fCBjYXJyeSAhPSAwKSB7XHJcbiAgICAgICAgaWYgKHAgPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGwxW3AtLV07XHJcbiAgICAgICAgICAgIGNhcnJ5ICs9IGMuY2hhckNvZGVBdCgwKSAtICcwJy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gbDJbcS0tXTtcclxuICAgICAgICAgICAgY2FycnkgKz0gYy5jaGFyQ29kZUF0KDApIC0gJzAnLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ci5wdXNoKGNhcnJ5ICUgMTApO1xyXG4gICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIDEwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGFkZFN0cmluZ3MoXHJcbiAgICAgICAgXCIxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTBcIixcclxuICAgICAgICBcIjEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MFwiLFxyXG4gICAgKSxcclxuICAgIFwiMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMjQ2OTEzNTc4MDI0NjkxMzU3ODAyNDY5MTM1NzgwXCIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGFkZFN0cmluZ3MoXHJcbiAgICAgICAgXCI5MzMzODUyNzAyMjI3OTg3XCIsXHJcbiAgICAgICAgXCI4NTczMTczNzEwNDI2M1wiLFxyXG4gICAgKSxcclxuICAgIFwiOTQxOTU4NDQzOTMzMjI1MFwiLFxyXG4pO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgYWRkU3RyaW5ncyhcclxuICAgICAgICBcIjk2NDIzNzAyODgzNDUzMjc5XCIsXHJcbiAgICAgICAgXCI3MjE1NjQwNTE2NTkzNjg5OFwiLFxyXG4gICAgKSxcclxuICAgIFwiMTY4NTgwMTA4MDQ5MzkwMTc3XCIsXHJcbik7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBhZGRTdHJpbmdzKFxyXG4gICAgICAgIFwiNDAxNzE2ODMyODA3NTEyODQwOTYzXCIsXHJcbiAgICAgICAgXCIxNjcxNDE4MDIyMzMwNjEwMTMwMjM1NTczOTc0NTEyODkxMTMyOTY0NDEwNjlcIixcclxuICAgICksXHJcbiAgICBcIjE2NzE0MTgwMjIzMzA2MTAxMzAyMzU1Nzc5OTE2ODEyMTkyMDgwOTI4MjAzMlwiLFxyXG4pO1xyXG5cclxuY29uc3QgQmVuY2htYXJrID0gcmVxdWlyZSgnYmVuY2htYXJrJyk7XHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZTtcclxuY29uc3Qgc2FtcGxlMSA9IFwiOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlcIjtcclxuY29uc3Qgc2FtcGxlMiA9IFwiOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OVwiO1xyXG5zdWl0ZVxyXG4gICAgLmFkZCgnbWluZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhZGRTdHJpbmdzKHNhbXBsZTEsIHNhbXBsZTIpO1xyXG4gICAgfSlcclxuICAgIC5hZGQoJ3RvcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhZGRTdHJpbmdzXzIoc2FtcGxlMSwgc2FtcGxlMik7XHJcbiAgICB9KVxyXG5cclxuICAgIC5vbignY3ljbGUnLCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcclxuICAgIH0pXHJcbiAgICAub24oJ2NvbXBsZXRlJywgZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGYXN0ZXN0IGlzICcgKyB0aGlzLmZpbHRlcignZmFzdGVzdCcpLm1hcCgnbmFtZScpKTtcclxuICAgIH0pXHJcbiAgICAvLyBydW4gYXN5bmNcclxuICAgIC5ydW4oeydhc3luYyc6IGZhbHNlfSk7XHJcbi8qKlxyXG4gKiDmsqHplJkg5oiR55qE5pa55rOVIOabtOWxjCFcclxuICogKi9cclxuIl19
