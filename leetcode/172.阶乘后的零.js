"use strict";
/*
给定一个整数 n，返回 n! 结果尾数中零的数量。

示例 1:

输入: 3
输出: 0
解释: 3! = 6, 尾数中没有零。
示例 2:

输入: 5
输出: 1
解释: 5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    /**
     * 就是求 阶乘中 5 的数量(2 的数量一定够的)
     * */
    let result = 0;
    let i = 1;
    while (Math.pow(5, i) <= n) {
        /**
         * 5 的个数
         * 25 的个数 (应该 + 2 但是 5 的个数 已经算过一次了 所以还是 + 1)
         * 125 的个数 (应该 + 2 但是 5 和 25 都算过一次 所以 还是 + 1)
         * */
        result += ~~(n / Math.pow(5, i));
        i++;
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(trailingZeroes(5), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcyLumYtuS5mOWQjueahOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTcyLumYtuS5mOWQjueahOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0k7Ozs7O0FBRUo7OztHQUdHO0FBQ0gsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFTO0lBQ3RDOztTQUVLO0lBQ0wsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUI7Ozs7YUFJSztRQUNMLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQztLQUNMO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbTmlbAgbu+8jOi/lOWbniBuISDnu5PmnpzlsL7mlbDkuK3pm7bnmoTmlbDph4/jgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogM1xu6L6T5Ye6OiAwXG7op6Pph4o6IDMhID0gNiwg5bC+5pWw5Lit5rKh5pyJ6Zu244CCXG7npLrkvosgMjpcblxu6L6T5YWlOiA1XG7ovpPlh7o6IDFcbuino+mHijogNSEgPSAxMjAsIOWwvuaVsOS4reaciSAxIOS4qumbti5cbuivtOaYjjog5L2g566X5rOV55qE5pe26Ze05aSN5p2C5bqm5bqU5Li6IE8obG9nIG4pIOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciB0cmFpbGluZ1plcm9lcyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgLyoqXG4gICAqIOWwseaYr+axgiDpmLbkuZjkuK0gNSDnmoTmlbDph48oMiDnmoTmlbDph4/kuIDlrprlpJ/nmoQpXG4gICAqICovXG4gIGxldCByZXN1bHQgPSAwO1xuICBsZXQgaSA9IDE7XG4gIHdoaWxlIChNYXRoLnBvdyg1LCBpKSA8PSBuKSB7XG4gICAgLyoqXG4gICAgICogNSDnmoTkuKrmlbBcbiAgICAgKiAyNSDnmoTkuKrmlbAgKOW6lOivpSArIDIg5L2G5pivIDUg55qE5Liq5pWwIOW3sue7j+eul+i/h+S4gOasoeS6hiDmiYDku6Xov5jmmK8gKyAxKVxuICAgICAqIDEyNSDnmoTkuKrmlbAgKOW6lOivpSArIDIg5L2G5pivIDUg5ZKMIDI1IOmDveeul+i/h+S4gOasoSDmiYDku6Ug6L+Y5pivICsgMSlcbiAgICAgKiAqL1xuICAgIHJlc3VsdCArPSB+fihuIC8gTWF0aC5wb3coNSwgaSkpO1xuICAgIGkrKztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCh0cmFpbGluZ1plcm9lcyg1KSwgMSk7XG4iXX0=