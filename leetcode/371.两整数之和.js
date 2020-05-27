"use strict";
/*
不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

示例 1:

输入: a = 1, b = 2
输出: 3
示例 2:

输入: a = -2, b = 3
输出: 1
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    // 负数的表示
    // 符号位为1  其他位反码  然后 -1
    // 由于 符号位不同 一个正数 一个负数 做 异或运算 一定是负数
    const sum = a ^ b;
    // 表示 是不是还有没有进位的 位
    const carry = (a & b) << 1;
    if (carry)
        return getSum(sum, carry);
    return sum;
};
var getSum2 = function (a, b) {
    while (b != 0) {
        let sum = a ^ b;
        let carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(getSum(1, 2), 3);
assert_1.default.strictEqual(getSum(-2, 3), 1);
assert_1.default.strictEqual(getSum(-9, -1), -10);
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite();
suite
    .add("recursion", function () {
    getSum(99999, -1);
})
    .add("loop", function () {
    getSum2(99999, -1);
})
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ async: false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcxLuS4pOaVtOaVsOS5i+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzcxLuS4pOaVtOaVsOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0lBV0k7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDekMsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixrQkFBa0I7SUFDbEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLElBQUksS0FBSztRQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNSLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDWDtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEMsMERBQWtDO0FBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxLQUFLO0tBQ0YsR0FBRyxDQUFDLFdBQVcsRUFBRTtJQUNoQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNYLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBc0I7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNkLG9FQUFvRTtBQUN0RSxDQUFDLENBQUM7SUFDRixZQUFZO0tBQ1gsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7kuI3kvb/nlKjov5DnrpfnrKYgKyDlkowgLSDigIvigIvigIvigIvigIvigIvigIvvvIzorqHnrpfkuKTmlbTmlbAg4oCL4oCL4oCL4oCL4oCL4oCL4oCLYSDjgIFiIOKAi+KAi+KAi+KAi+KAi+KAi+KAi+S5i+WSjOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IGEgPSAxLCBiID0gMlxyXG7ovpPlh7o6IDNcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IGEgPSAtMiwgYiA9IDNcclxu6L6T5Ye6OiAxXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZ2V0U3VtID0gZnVuY3Rpb24gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyDotJ/mlbDnmoTooajnpLpcclxuICAvLyDnrKblj7fkvY3kuLoxICDlhbbku5bkvY3lj43noIEgIOeEtuWQjiAtMVxyXG4gIC8vIOeUseS6jiDnrKblj7fkvY3kuI3lkIwg5LiA5Liq5q2j5pWwIOS4gOS4qui0n+aVsCDlgZog5byC5oiW6L+Q566XIOS4gOWumuaYr+i0n+aVsFxyXG4gIGNvbnN0IHN1bSA9IGEgXiBiO1xyXG4gIC8vIOihqOekuiDmmK/kuI3mmK/ov5jmnInmsqHmnInov5vkvY3nmoQg5L2NXHJcbiAgY29uc3QgY2FycnkgPSAoYSAmIGIpIDw8IDE7XHJcbiAgaWYgKGNhcnJ5KSByZXR1cm4gZ2V0U3VtKHN1bSwgY2FycnkpO1xyXG4gIHJldHVybiBzdW07XHJcbn07XHJcbnZhciBnZXRTdW0yID0gZnVuY3Rpb24gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICB3aGlsZSAoYiAhPSAwKSB7XHJcbiAgICBsZXQgc3VtID0gYSBeIGI7XHJcbiAgICBsZXQgY2FycnkgPSAoYSAmIGIpIDw8IDE7XHJcbiAgICBhID0gc3VtO1xyXG4gICAgYiA9IGNhcnJ5O1xyXG4gIH1cclxuICByZXR1cm4gYTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGdldFN1bSgxLCAyKSwgMyk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZ2V0U3VtKC0yLCAzKSwgMSk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChnZXRTdW0oLTksIC0xKSwgLTEwKTtcclxuaW1wb3J0IEJlbmNobWFyayBmcm9tIFwiYmVuY2htYXJrXCI7XHJcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xyXG5zdWl0ZVxyXG4gIC5hZGQoXCJyZWN1cnNpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZ2V0U3VtKDk5OTk5LCAtMSk7XHJcbiAgfSlcclxuICAuYWRkKFwibG9vcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBnZXRTdW0yKDk5OTk5LCAtMSk7XHJcbiAgfSlcclxuICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IEJlbmNobWFyay5FdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xyXG4gIH0pXHJcbiAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IEJlbmNobWFyay5TdWl0ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCAnbmFtZScpKTtcclxuICB9KVxyXG4gIC8vIHJ1biBhc3luY1xyXG4gIC5ydW4oeyBhc3luYzogZmFsc2UgfSk7XHJcbiJdfQ==