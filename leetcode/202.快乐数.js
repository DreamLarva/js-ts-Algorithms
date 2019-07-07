"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例:

输入: 19
输出: true
解释:
1**2 + 9**2 = 82
8**2 + 2**2 = 68
6**2 + 8**2 = 100
1**2 + 0**2 + 0**2 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const memo = new Set();
    while (true) {
        n = step(n);
        if (n === 1)
            return true;
        if (memo.has(n))
            return false;
        memo.add(n);
    }
};
function step(num) {
    let result = 0;
    while (num) {
        result += (num % 10) ** 2;
        num = Math.trunc(num / 10);
    }
    return result;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isHappy(12345), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyLuW/q+S5kOaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAyLuW/q+S5kOaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFO0FBQ0Y7OztHQUdHO0FBQ0gsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFTO0lBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdkIsT0FBTyxJQUFJLEVBQUU7UUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7QUFDTCxDQUFDLENBQUM7QUFHRixTQUFTLElBQUksQ0FBQyxHQUFXO0lBQ3JCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLE9BQU8sR0FBRyxFQUFFO1FBQ1IsTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDOUI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsb0RBQTJCO0FBQzNCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDZCxLQUFLLENBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue8luWGmeS4gOS4queul+azleadpeWIpOaWreS4gOS4quaVsOaYr+S4jeaYr+KAnOW/q+S5kOaVsOKAneOAglxyXG5cclxu5LiA5Liq4oCc5b+r5LmQ5pWw4oCd5a6a5LmJ5Li677ya5a+55LqO5LiA5Liq5q2j5pW05pWw77yM5q+P5LiA5qyh5bCG6K+l5pWw5pu/5o2i5Li65a6D5q+P5Liq5L2N572u5LiK55qE5pWw5a2X55qE5bmz5pa55ZKM77yM54S25ZCO6YeN5aSN6L+Z5Liq6L+H56iL55u05Yiw6L+Z5Liq5pWw5Y+Y5Li6IDHvvIzkuZ/lj6/og73mmK/ml6DpmZDlvqrnjq/kvYblp4vnu4jlj5jkuI3liLAgMeOAguWmguaenOWPr+S7peWPmOS4uiAx77yM6YKj5LmI6L+Z5Liq5pWw5bCx5piv5b+r5LmQ5pWw44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IDE5XHJcbui+k+WHujogdHJ1ZVxyXG7op6Pph4o6XHJcbjEqKjIgKyA5KioyID0gODJcclxuOCoqMiArIDIqKjIgPSA2OFxyXG42KioyICsgOCoqMiA9IDEwMFxyXG4xKioyICsgMCoqMiArIDAqKjIgPSAxXHJcbiovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzSGFwcHkgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBtZW1vID0gbmV3IFNldCgpO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBuID0gc3RlcChuKTtcclxuICAgICAgICBpZiAobiA9PT0gMSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKG1lbW8uaGFzKG4pKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbWVtby5hZGQobik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gc3RlcChudW06IG51bWJlcikge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICB3aGlsZSAobnVtKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IChudW0gJSAxMCkgKiogMjtcclxuICAgICAgICBudW0gPSBNYXRoLnRydW5jKG51bSAvIDEwKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzSGFwcHkoMTIzNDUpLFxyXG4gICAgZmFsc2UsXHJcbik7XHJcbiJdfQ==