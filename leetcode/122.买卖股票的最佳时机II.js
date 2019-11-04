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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIyLuS5sOWNluiCoeelqOeahOacgOS9s+aXtuacuklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMjIu5Lmw5Y2W6IKh56Wo55qE5pyA5L2z5pe25py6SUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksU0FBUyxHQUFHLFVBQVUsTUFBZTtJQUNyQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZix5QkFBeUI7SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxXQUFXLEdBQUcsQ0FBQztZQUFFLE1BQU0sSUFBSSxXQUFXLENBQUM7S0FDOUM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbDnu4TvvIzlroPnmoTnrKwgaSDkuKrlhYPntKDmmK/kuIDmlK/nu5nlrprogqHnpajnrKwgaSDlpKnnmoTku7fmoLzjgIJcclxuXHJcbuiuvuiuoeS4gOS4queul+azleadpeiuoeeul+S9oOaJgOiDveiOt+WPlueahOacgOWkp+WIqea2puOAguS9oOWPr+S7peWwveWPr+iDveWcsOWujOaIkOabtOWkmueahOS6pOaYk++8iOWkmuasoeS5sOWNluS4gOaUr+iCoeelqO+8ieOAglxyXG5cclxu5rOo5oSP77ya5L2g5LiN6IO95ZCM5pe25Y+C5LiO5aSa56yU5Lqk5piT77yI5L2g5b+F6aG75Zyo5YaN5qyh6LSt5Lmw5YmN5Ye65ZSu5o6J5LmL5YmN55qE6IKh56Wo77yJ44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogWzcsMSw1LDMsNiw0XVxyXG7ovpPlh7o6IDdcclxu6Kej6YeKOiDlnKjnrKwgMiDlpKnvvIjogqHnpajku7fmoLwgPSAx77yJ55qE5pe25YCZ5Lmw5YWl77yM5Zyo56ysIDMg5aSp77yI6IKh56Wo5Lu35qC8ID0gNe+8ieeahOaXtuWAmeWNluWHuiwg6L+Z56yU5Lqk5piT5omA6IO96I635b6X5Yip5ramID0gNS0xID0gNCDjgIJcclxuICAgICDpmo/lkI7vvIzlnKjnrKwgNCDlpKnvvIjogqHnpajku7fmoLwgPSAz77yJ55qE5pe25YCZ5Lmw5YWl77yM5Zyo56ysIDUg5aSp77yI6IKh56Wo5Lu35qC8ID0gNu+8ieeahOaXtuWAmeWNluWHuiwg6L+Z56yU5Lqk5piT5omA6IO96I635b6X5Yip5ramID0gNi0zID0gMyDjgIJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFsxLDIsMyw0LDVdXHJcbui+k+WHujogNFxyXG7op6Pph4o6IOWcqOesrCAxIOWkqe+8iOiCoeelqOS7t+agvCA9IDHvvInnmoTml7blgJnkubDlhaXvvIzlnKjnrKwgNSDlpKkg77yI6IKh56Wo5Lu35qC8ID0gNe+8ieeahOaXtuWAmeWNluWHuiwg6L+Z56yU5Lqk5piT5omA6IO96I635b6X5Yip5ramID0gNS0xID0gNCDjgIJcclxuICAgICDms6jmhI/kvaDkuI3og73lnKjnrKwgMSDlpKnlkoznrKwgMiDlpKnmjqXov57otK3kubDogqHnpajvvIzkuYvlkI7lho3lsIblroPku6zljZblh7rjgIJcclxuICAgICDlm6DkuLrov5nmoLflsZ7kuo7lkIzml7blj4LkuI7kuoblpJrnrJTkuqTmmJPvvIzkvaDlv4XpobvlnKjlho3mrKHotK3kubDliY3lh7rllK7mjonkuYvliY3nmoTogqHnpajjgIJcclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IFs3LDYsNCwzLDFdXHJcbui+k+WHujogMFxyXG7op6Pph4o6IOWcqOi/meenjeaDheWGteS4iywg5rKh5pyJ5Lqk5piT5a6M5oiQLCDmiYDku6XmnIDlpKfliKnmtqbkuLogMOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBwcmljZXNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG1heFByb2ZpdCA9IGZ1bmN0aW9uIChwcmljZXM6bnVtYmVyW10pIHtcclxuICAgIGxldCBwcm9maXQgPSAwO1xyXG4gICAgLy8g5Y+q6KaB5piv5LiK5Y2H6LaL5Yq/IOWwsei1muWPliDku4rlpKkgLSDmmKjlpKnnmoTlt67ku7dcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHJpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGlmZmVyZW5jZXMgPSBwcmljZXNbaV0gLSBwcmljZXNbaSAtIDFdO1xyXG4gICAgICAgIGlmIChkaWZmZXJlbmNlcyA+IDApIHByb2ZpdCArPSBkaWZmZXJlbmNlcztcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9maXQ7XHJcbn07XHJcblxyXG5leHBvcnQge31cclxuIl19