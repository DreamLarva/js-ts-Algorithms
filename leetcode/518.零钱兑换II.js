"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
518. 零钱兑换 II
给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。



示例 1:

输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
示例 2:

输入: amount = 3, coins = [2]
输出: 0
解释: 只用面额2的硬币不能凑成总金额3。
示例 3:

输入: amount = 10, coins = [10]
输出: 1


注意:

你可以假设：

0 <= amount (总金额) <= 5000
1 <= coin (硬币面额) <= 5000
硬币种类不超过 500 种
结果符合 32 位符号整数
* */
function change(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin] ?? 0;
    }
  }
  return dp[dp.length - 1];
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(change(5, [1, 2, 5]), 4);
assert_1.default.strictEqual(change(3, [2]), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTE4LumbtumSseWFkeaNoklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS81MTgu6Zu26ZKx5YWR5o2iSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtDSTtBQUNKLFNBQVMsTUFBTSxDQUFDLE1BQWMsRUFBRSxLQUFlO0lBQzdDLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUVULEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7SUFFRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG41MTguIOmbtumSseWFkeaNoiBJSVxu57uZ5a6a5LiN5ZCM6Z2i6aKd55qE56Gs5biB5ZKM5LiA5Liq5oC76YeR6aKd44CC5YaZ5Ye65Ye95pWw5p2l6K6h566X5Y+v5Lul5YeR5oiQ5oC76YeR6aKd55qE56Gs5biB57uE5ZCI5pWw44CC5YGH6K6+5q+P5LiA56eN6Z2i6aKd55qE56Gs5biB5pyJ5peg6ZmQ5Liq44CCXG5cblxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBhbW91bnQgPSA1LCBjb2lucyA9IFsxLCAyLCA1XVxu6L6T5Ye6OiA0XG7op6Pph4o6IOacieWbm+enjeaWueW8j+WPr+S7peWHkeaIkOaAu+mHkeminTpcbjU9NVxuNT0yKzIrMVxuNT0yKzErMSsxXG41PTErMSsxKzErMVxu56S65L6LIDI6XG5cbui+k+WFpTogYW1vdW50ID0gMywgY29pbnMgPSBbMl1cbui+k+WHujogMFxu6Kej6YeKOiDlj6rnlKjpnaLpop0y55qE56Gs5biB5LiN6IO95YeR5oiQ5oC76YeR6aKdM+OAglxu56S65L6LIDM6XG5cbui+k+WFpTogYW1vdW50ID0gMTAsIGNvaW5zID0gWzEwXVxu6L6T5Ye6OiAxXG5cblxu5rOo5oSPOlxuXG7kvaDlj6/ku6XlgYforr7vvJpcblxuMCA8PSBhbW91bnQgKOaAu+mHkeminSkgPD0gNTAwMFxuMSA8PSBjb2luICjnoazluIHpnaLpop0pIDw9IDUwMDBcbuehrOW4geenjeexu+S4jei2hei/hyA1MDAg56eNXG7nu5PmnpznrKblkIggMzIg5L2N56ym5Y+35pW05pWwXG4qICovXG5mdW5jdGlvbiBjaGFuZ2UoYW1vdW50OiBudW1iZXIsIGNvaW5zOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGNvbnN0IGRwID0gbmV3IEFycmF5KGFtb3VudCArIDEpLmZpbGwoMCk7XG4gIGRwWzBdID0gMVxuXG4gIGZvciAoY29uc3QgY29pbiBvZiBjb2lucykge1xuICAgIGZvciAobGV0IGkgPSBjb2luOyBpIDw9IGFtb3VudDsgaSsrKSB7XG4gICAgICBkcFtpXSArPSBkcFtpIC0gY29pbl0gPz8gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZHBbZHAubGVuZ3RoIC0gMV07XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2hhbmdlKDUsIFsxLCAyLCA1XSksIDQpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGNoYW5nZSgzLCBbMl0pLCAwKTtcbiJdfQ==
