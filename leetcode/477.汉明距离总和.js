"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
477. 汉明距离总和
两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

计算一个数组中，任意两个数之间汉明距离的总和。

示例:

输入: 4, 14, 2

输出: 6

解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
注意:

数组中元素的范围为从 0到 10^9。
数组的长度不超过 10^4。

* */
function totalHammingDistance(nums) {
    let result = 0;
    // 10^9 < 2^30 (2^0 + .... 2^29)
    for (let i = 0; i < 30; i++) {
        let one = 0;
        for (let j = 0; j < nums.length; j++) {
            one += (nums[j] >> i) & 1;
        }
        result += one * (nums.length - one);
    }
    return result;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(totalHammingDistance([4, 14, 2]), 6);
assert_1.default.strictEqual(totalHammingDistance([6, 1, 8, 6, 8]), 22);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc3LuaxieaYjui3neemu+aAu+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDc3LuaxieaYjui3neemu+aAu+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSTtBQUNKLFNBQVMsb0JBQW9CLENBQUMsSUFBYztJQUMxQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixnQ0FBZ0M7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDckM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuNDc3LiDmsYnmmI7ot53nprvmgLvlkoxcbuS4pOS4quaVtOaVsOeahCDmsYnmmI7ot53nprsg5oyH55qE5piv6L+Z5Lik5Liq5pWw5a2X55qE5LqM6L+b5Yi25pWw5a+55bqU5L2N5LiN5ZCM55qE5pWw6YeP44CCXG5cbuiuoeeul+S4gOS4quaVsOe7hOS4re+8jOS7u+aEj+S4pOS4quaVsOS5i+mXtOaxieaYjui3neemu+eahOaAu+WSjOOAglxuXG7npLrkvos6XG5cbui+k+WFpTogNCwgMTQsIDJcblxu6L6T5Ye6OiA2XG5cbuino+mHijog5Zyo5LqM6L+b5Yi26KGo56S65Lit77yMNOihqOekuuS4ujAxMDDvvIwxNOihqOekuuS4ujExMTDvvIwy6KGo56S65Li6MDAxMOOAgu+8iOi/meagt+ihqOekuuaYr+S4uuS6huS9k+eOsOWQjuWbm+S9jeS5i+mXtOWFs+ezu++8iVxu5omA5Lul562U5qGI5Li677yaXG5IYW1taW5nRGlzdGFuY2UoNCwgMTQpICsgSGFtbWluZ0Rpc3RhbmNlKDQsIDIpICsgSGFtbWluZ0Rpc3RhbmNlKDE0LCAyKSA9IDIgKyAyICsgMiA9IDYuXG7ms6jmhI86XG5cbuaVsOe7hOS4reWFg+e0oOeahOiMg+WbtOS4uuS7jiAw5YiwIDEwXjnjgIJcbuaVsOe7hOeahOmVv+W6puS4jei2hei/hyAxMF4044CCXG5cbiogKi9cbmZ1bmN0aW9uIHRvdGFsSGFtbWluZ0Rpc3RhbmNlKG51bXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIC8vIDEwXjkgPCAyXjMwICgyXjAgKyAuLi4uIDJeMjkpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgIGxldCBvbmUgPSAwO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtcy5sZW5ndGg7IGorKykge1xuICAgICAgb25lICs9IChudW1zW2pdID4+IGkpICYgMTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gb25lICogKG51bXMubGVuZ3RoIC0gb25lKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHRvdGFsSGFtbWluZ0Rpc3RhbmNlKFs0LCAxNCwgMl0pLCA2KTtcbmFzc2VydC5zdHJpY3RFcXVhbCh0b3RhbEhhbW1pbmdEaXN0YW5jZShbNiwgMSwgOCwgNiwgOF0pLCAyMik7XG4iXX0=