"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
483. 最小好进制
对于给定的整数 n, 如果n的k（k>=2）进制数的所有数位全为1，则称 k（k>=2）是 n 的一个好进制。

以字符串的形式给出 n, 以字符串的形式返回 n 的最小好进制。



示例 1：

输入："13"
输出："3"
解释：13 的 3 进制是 111。
示例 2：

输入："4681"
输出："8"
解释：4681 的 8 进制是 11111。
示例 3：

输入："1000000000000000000"
输出："999999999999999999"
解释：1000000000000000000 的 999999999999999999 进制是 11。


提示：

n的取值范围是 [3, 10^18]。
输入总是有效且没有前导 0。
* */
function smallestGoodBase(n) {
  // 最多64位
  const num = BigInt(n);
  let answer = Infinity;
  // 1e18 最多也就 64位2进制 64位数量级并不算大
  for (let i = 2; i < 64; i++) {
    let left = 2n;
    let right = num;
    // 二分搜索
    while (left < right) {
      const mid = left + ((right - left) >> 2n);
      const sum = check(mid, i);
      if (sum === num) {
        answer = answer > mid ? mid : answer;
        break;
      }
      if (sum < num) {
        left = mid + 1n;
      } else {
        right = mid;
      }
    }
  }
  return String(answer);
}
/**
 * m 位 x 进制的结果
 * @param x 进制
 * @param m 位数
 * */
function check(x, m) {
  let n = 1n;
  let answer = 1n;
  for (let i = 1; i < m; i++) {
    n *= x;
    answer += n;
  }
  return answer;
}
/**
 * 官方解
 * */
function smallestGoodBase2(n) {
  const nVal = parseInt(n);
  // 获得 n 进制的上限的值
  const mMax = Math.floor(Math.log(nVal) / Math.log(2));
  for (let m = mMax; m > 1; m--) {
    // 数学方法得到 n 机制 为位数 k 的上限
    const k = BigInt(Math.floor(Math.pow(nVal, 1.0 / m)));
    if (k > 1) {
      let mul = BigInt(1),
        sum = BigInt(1);
      // 判断是不是有 n位x进制1组成
      for (let i = 1; i <= m; i++) {
        mul *= k;
        sum += mul;
      }
      if (sum === BigInt(n)) {
        return k + "";
      }
    }
  }
  return BigInt(n) - BigInt(1) + "";
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(smallestGoodBase("13"), "3");
assert_1.default.strictEqual(smallestGoodBase("4681"), "8");
assert_1.default.strictEqual(
  smallestGoodBase("1000000000000000000"),
  "999999999999999999"
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgzLuacgOWwj+Wlvei/m+WIti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDgzLuacgOWwj+Wlvei/m+WIti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCSTtBQUNKLFNBQVMsZ0JBQWdCLENBQUMsQ0FBUztJQUNqQyxRQUFRO0lBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksTUFBTSxHQUFvQixRQUFRLENBQUM7SUFDdkMsOEJBQThCO0lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLE9BQU87UUFDUCxPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7WUFDbkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ2YsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxNQUFNO2FBQ1A7WUFDRCxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLEdBQUcsQ0FBQzthQUNiO1NBQ0Y7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFDRDs7OztLQUlLO0FBQ0wsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNQLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDYjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7S0FFSztBQUNMLFNBQVMsaUJBQWlCLENBQUMsQ0FBUztJQUNsQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsZUFBZTtJQUNmLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM3Qix3QkFBd0I7UUFDeEIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ2pCLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEIsa0JBQWtCO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsR0FBRyxJQUFJLEdBQUcsQ0FBQzthQUNaO1lBQ0QsSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDZjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEVBQ3ZDLG9CQUFvQixDQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjQ4My4g5pyA5bCP5aW96L+b5Yi2XG7lr7nkuo7nu5nlrprnmoTmlbTmlbAgbiwg5aaC5p6cbueahGvvvIhrPj0y77yJ6L+b5Yi25pWw55qE5omA5pyJ5pWw5L2N5YWo5Li6Me+8jOWImeensCBr77yIaz49Mu+8ieaYryBuIOeahOS4gOS4quWlvei/m+WItuOAglxuXG7ku6XlrZfnrKbkuLLnmoTlvaLlvI/nu5nlh7ogbiwg5Lul5a2X56ym5Liy55qE5b2i5byP6L+U5ZueIG4g55qE5pyA5bCP5aW96L+b5Yi244CCXG5cblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpcIjEzXCJcbui+k+WHuu+8mlwiM1wiXG7op6Pph4rvvJoxMyDnmoQgMyDov5vliLbmmK8gMTEx44CCXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpcIjQ2ODFcIlxu6L6T5Ye677yaXCI4XCJcbuino+mHiu+8mjQ2ODEg55qEIDgg6L+b5Yi25pivIDExMTEx44CCXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpcIjEwMDAwMDAwMDAwMDAwMDAwMDBcIlxu6L6T5Ye677yaXCI5OTk5OTk5OTk5OTk5OTk5OTlcIlxu6Kej6YeK77yaMTAwMDAwMDAwMDAwMDAwMDAwMCDnmoQgOTk5OTk5OTk5OTk5OTk5OTk5IOi/m+WItuaYryAxMeOAglxuXG5cbuaPkOekuu+8mlxuXG5u55qE5Y+W5YC86IyD5Zu05pivIFszLCAxMF4xOF3jgIJcbui+k+WFpeaAu+aYr+acieaViOS4lOayoeacieWJjeWvvCAw44CCXG4qICovXG5mdW5jdGlvbiBzbWFsbGVzdEdvb2RCYXNlKG46IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIOacgOWkmjY05L2NXG4gIGNvbnN0IG51bSA9IEJpZ0ludChuKTtcbiAgbGV0IGFuc3dlcjogbnVtYmVyIHwgYmlnaW50ID0gSW5maW5pdHk7XG4gIC8vIDFlMTgg5pyA5aSa5Lmf5bCxIDY05L2NMui/m+WItiA2NOS9jeaVsOmHj+e6p+W5tuS4jeeul+Wkp1xuICBmb3IgKGxldCBpID0gMjsgaSA8IDY0OyBpKyspIHtcbiAgICBsZXQgbGVmdCA9IDJuO1xuICAgIGxldCByaWdodCA9IG51bTtcbiAgICAvLyDkuozliIbmkJzntKJcbiAgICB3aGlsZSAobGVmdCA8IHJpZ2h0KSB7XG4gICAgICBjb25zdCBtaWQgPSBsZWZ0ICsgKChyaWdodCAtIGxlZnQpID4+IDJuKTtcbiAgICAgIGNvbnN0IHN1bSA9IGNoZWNrKG1pZCwgaSk7XG4gICAgICBpZiAoc3VtID09PSBudW0pIHtcbiAgICAgICAgYW5zd2VyID0gYW5zd2VyID4gbWlkID8gbWlkIDogYW5zd2VyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChzdW0gPCBudW0pIHtcbiAgICAgICAgbGVmdCA9IG1pZCArIDFuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlnaHQgPSBtaWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN0cmluZyhhbnN3ZXIpO1xufVxuLyoqXG4gKiBtIOS9jSB4IOi/m+WItueahOe7k+aenFxuICogQHBhcmFtIHgg6L+b5Yi2XG4gKiBAcGFyYW0gbSDkvY3mlbBcbiAqICovXG5mdW5jdGlvbiBjaGVjayh4LCBtKSB7XG4gIGxldCBuID0gMW47XG4gIGxldCBhbnN3ZXIgPSAxbjtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBtOyBpKyspIHtcbiAgICBuICo9IHg7XG4gICAgYW5zd2VyICs9IG47XG4gIH1cbiAgcmV0dXJuIGFuc3dlcjtcbn1cblxuLyoqXG4gKiDlrpjmlrnop6NcbiAqICovXG5mdW5jdGlvbiBzbWFsbGVzdEdvb2RCYXNlMihuOiBzdHJpbmcpIHtcbiAgY29uc3QgblZhbCA9IHBhcnNlSW50KG4pO1xuICAvLyDojrflvpcgbiDov5vliLbnmoTkuIrpmZDnmoTlgLxcbiAgY29uc3QgbU1heCA9IE1hdGguZmxvb3IoTWF0aC5sb2coblZhbCkgLyBNYXRoLmxvZygyKSk7XG4gIGZvciAobGV0IG0gPSBtTWF4OyBtID4gMTsgbS0tKSB7XG4gICAgLy8g5pWw5a2m5pa55rOV5b6X5YiwIG4g5py65Yi2IOS4uuS9jeaVsCBrIOeahOS4iumZkFxuICAgIGNvbnN0IGsgPSBCaWdJbnQoTWF0aC5mbG9vcihNYXRoLnBvdyhuVmFsLCAxLjAgLyBtKSkpO1xuXG4gICAgaWYgKGsgPiAxKSB7XG4gICAgICBsZXQgbXVsID0gQmlnSW50KDEpLFxuICAgICAgICBzdW0gPSBCaWdJbnQoMSk7XG5cbiAgICAgIC8vIOWIpOaWreaYr+S4jeaYr+aciSBu5L2NeOi/m+WItjHnu4TmiJBcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG07IGkrKykge1xuICAgICAgICBtdWwgKj0gaztcbiAgICAgICAgc3VtICs9IG11bDtcbiAgICAgIH1cbiAgICAgIGlmIChzdW0gPT09IEJpZ0ludChuKSkge1xuICAgICAgICByZXR1cm4gayArIFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBCaWdJbnQobikgLSBCaWdJbnQoMSkgKyBcIlwiO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChzbWFsbGVzdEdvb2RCYXNlKFwiMTNcIiksIFwiM1wiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChzbWFsbGVzdEdvb2RCYXNlKFwiNDY4MVwiKSwgXCI4XCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBzbWFsbGVzdEdvb2RCYXNlKFwiMTAwMDAwMDAwMDAwMDAwMDAwMFwiKSxcbiAgXCI5OTk5OTk5OTk5OTk5OTk5OTlcIlxuKTtcbiJdfQ==
