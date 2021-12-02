"use strict";
/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 动态规划
  // 保证从头开始保证 每次都是最优解
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return max;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIxLuS5sOWNluiCoeelqOeahOacgOS9s+aXtuacui5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTIxLuS5sOWNluiCoeelqOeahOacgOS9s+aXtuacui50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTs7QUFFRjs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRyxVQUFVLE1BQWdCO0lBQ3hDLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFckMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pWw57uE77yM5a6D55qE56ysIGkg5Liq5YWD57Sg5piv5LiA5pSv57uZ5a6a6IKh56Wo56ysIGkg5aSp55qE5Lu35qC844CCXG5cbuWmguaenOS9oOacgOWkmuWPquWFgeiuuOWujOaIkOS4gOeslOS6pOaYk++8iOWNs+S5sOWFpeWSjOWNluWHuuS4gOaUr+iCoeelqO+8ie+8jOiuvuiuoeS4gOS4queul+azleadpeiuoeeul+S9oOaJgOiDveiOt+WPlueahOacgOWkp+WIqea2puOAglxuXG7ms6jmhI/kvaDkuI3og73lnKjkubDlhaXogqHnpajliY3ljZblh7rogqHnpajjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzcsMSw1LDMsNiw0XVxu6L6T5Ye6OiA1XG7op6Pph4o6IOWcqOesrCAyIOWkqe+8iOiCoeelqOS7t+agvCA9IDHvvInnmoTml7blgJnkubDlhaXvvIzlnKjnrKwgNSDlpKnvvIjogqHnpajku7fmoLwgPSA277yJ55qE5pe25YCZ5Y2W5Ye677yM5pyA5aSn5Yip5ramID0gNi0xID0gNSDjgIJcbiAgICAg5rOo5oSP5Yip5ram5LiN6IO95pivIDctMSA9IDYsIOWboOS4uuWNluWHuuS7t+agvOmcgOimgeWkp+S6juS5sOWFpeS7t+agvOOAglxu56S65L6LIDI6XG5cbui+k+WFpTogWzcsNiw0LDMsMV1cbui+k+WHujogMFxu6Kej6YeKOiDlnKjov5nnp43mg4XlhrXkuIssIOayoeacieS6pOaYk+WujOaIkCwg5omA5Lul5pyA5aSn5Yip5ram5Li6IDDjgIJcbiovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gcHJpY2VzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBtYXhQcm9maXQgPSBmdW5jdGlvbiAocHJpY2VzOiBudW1iZXJbXSkge1xuICAvLyDliqjmgIHop4TliJJcbiAgLy8g5L+d6K+B5LuO5aS05byA5aeL5L+d6K+BIOavj+asoemDveaYr+acgOS8mOino1xuICBsZXQgbWF4ID0gMDtcbiAgbGV0IG1pbiA9IHByaWNlc1swXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICBtYXggPSBNYXRoLm1heChtYXgsIHByaWNlc1tpXSAtIG1pbik7XG5cbiAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHByaWNlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIG1heDtcbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==
