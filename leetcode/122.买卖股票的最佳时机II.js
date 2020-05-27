"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
* */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    // 只要是上升趋势 就赚取 今天 - 昨天的差价
    for (let i = 1; i < prices.length; i++) {
        const differences = prices[i] - prices[i - 1];
        if (differences > 0)
            profit += differences;
    }
    return profit;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIyLuS5sOWNluiCoeelqOeahOacgOS9s+aXtuacuklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMjIu5Lmw5Y2W6IKh56Wo55qE5pyA5L2z5pe25py6SUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksU0FBUyxHQUFHLFVBQVUsTUFBZ0I7SUFDeEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YseUJBQXlCO0lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksV0FBVyxHQUFHLENBQUM7WUFBRSxNQUFNLElBQUksV0FBVyxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVsOe7hO+8jOWug+eahOesrCBpIOS4quWFg+e0oOaYr+S4gOaUr+e7meWumuiCoeelqOesrCBpIOWkqeeahOS7t+agvOOAglxuXG7orr7orqHkuIDkuKrnrpfms5XmnaXorqHnrpfkvaDmiYDog73ojrflj5bnmoTmnIDlpKfliKnmtqbjgILkvaDlj6/ku6XlsL3lj6/og73lnLDlrozmiJDmm7TlpJrnmoTkuqTmmJPvvIjlpJrmrKHkubDljZbkuIDmlK/ogqHnpajvvInjgIJcblxu5rOo5oSP77ya5L2g5LiN6IO95ZCM5pe25Y+C5LiO5aSa56yU5Lqk5piT77yI5L2g5b+F6aG75Zyo5YaN5qyh6LSt5Lmw5YmN5Ye65ZSu5o6J5LmL5YmN55qE6IKh56Wo77yJ44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFs3LDEsNSwzLDYsNF1cbui+k+WHujogN1xu6Kej6YeKOiDlnKjnrKwgMiDlpKnvvIjogqHnpajku7fmoLwgPSAx77yJ55qE5pe25YCZ5Lmw5YWl77yM5Zyo56ysIDMg5aSp77yI6IKh56Wo5Lu35qC8ID0gNe+8ieeahOaXtuWAmeWNluWHuiwg6L+Z56yU5Lqk5piT5omA6IO96I635b6X5Yip5ramID0gNS0xID0gNCDjgIJcbiAgICAg6ZqP5ZCO77yM5Zyo56ysIDQg5aSp77yI6IKh56Wo5Lu35qC8ID0gM++8ieeahOaXtuWAmeS5sOWFpe+8jOWcqOesrCA1IOWkqe+8iOiCoeelqOS7t+agvCA9IDbvvInnmoTml7blgJnljZblh7osIOi/meeslOS6pOaYk+aJgOiDveiOt+W+l+WIqea2piA9IDYtMyA9IDMg44CCXG7npLrkvosgMjpcblxu6L6T5YWlOiBbMSwyLDMsNCw1XVxu6L6T5Ye6OiA0XG7op6Pph4o6IOWcqOesrCAxIOWkqe+8iOiCoeelqOS7t+agvCA9IDHvvInnmoTml7blgJnkubDlhaXvvIzlnKjnrKwgNSDlpKkg77yI6IKh56Wo5Lu35qC8ID0gNe+8ieeahOaXtuWAmeWNluWHuiwg6L+Z56yU5Lqk5piT5omA6IO96I635b6X5Yip5ramID0gNS0xID0gNCDjgIJcbiAgICAg5rOo5oSP5L2g5LiN6IO95Zyo56ysIDEg5aSp5ZKM56ysIDIg5aSp5o6l6L+e6LSt5Lmw6IKh56Wo77yM5LmL5ZCO5YaN5bCG5a6D5Lus5Y2W5Ye644CCXG4gICAgIOWboOS4uui/meagt+WxnuS6juWQjOaXtuWPguS4juS6huWkmueslOS6pOaYk++8jOS9oOW/hemhu+WcqOWGjeasoei0reS5sOWJjeWHuuWUruaOieS5i+WJjeeahOiCoeelqOOAglxu56S65L6LIDM6XG5cbui+k+WFpTogWzcsNiw0LDMsMV1cbui+k+WHujogMFxu6Kej6YeKOiDlnKjov5nnp43mg4XlhrXkuIssIOayoeacieS6pOaYk+WujOaIkCwg5omA5Lul5pyA5aSn5Yip5ram5Li6IDDjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gcHJpY2VzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBtYXhQcm9maXQgPSBmdW5jdGlvbiAocHJpY2VzOiBudW1iZXJbXSkge1xuICBsZXQgcHJvZml0ID0gMDtcbiAgLy8g5Y+q6KaB5piv5LiK5Y2H6LaL5Yq/IOWwsei1muWPliDku4rlpKkgLSDmmKjlpKnnmoTlt67ku7dcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaWZmZXJlbmNlcyA9IHByaWNlc1tpXSAtIHByaWNlc1tpIC0gMV07XG4gICAgaWYgKGRpZmZlcmVuY2VzID4gMCkgcHJvZml0ICs9IGRpZmZlcmVuY2VzO1xuICB9XG4gIHJldHVybiBwcm9maXQ7XG59O1xuXG5leHBvcnQge307XG4iXX0=