"use strict";
/*
[70] 爬楼梯

https://leetcode-cn.com/problems/climbing-stairs/description/

Tags: algorithms adobe apple dynamic-programming

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (44.62%)
* Total Accepted: 35.6K
* Total Submissions: 79.5K
* Testcase Example: '2'

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 假设有 n 级台阶
 * 现在知道 n - 1 级台阶走法 a 现在到 n 级 都有一种走法就是  +1
 * 现在知道 n - 2 级台阶的走法 b 现在到n 级 都有一种走法 就是 +2
 * 所以是动态规划问题 n 级台阶的走法是 n-1级的走法 + n-2级的走法
 * fn(n) = fn(n - 1) + fn(n - 2)
 * */
function solution1(n) {
    if (n === 1)
        return 1;
    let current = 1;
    let last = 1;
    while (--n) {
        const temp = current + last;
        last = current;
        current = temp;
    }
    return current;
}
/**
 * 既然是斐波那契数列就能够使用斐波那契通项公式
 * */
function solution2(n) {
    const sqrt_5 = Math.sqrt(5);
    n = n + 1;
    return ((sqrt_5 / 5) *
        (Math.pow((1 + sqrt_5) / 2, n) - Math.pow((1 - sqrt_5) / 2, n)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAu54is5qW85qKvLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83MC7niKzmpbzmoq8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNDRTs7QUFFRjs7O0dBR0c7QUFFSDs7Ozs7O0tBTUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRWIsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNWLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDaEI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQ7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixPQUFPLENBQ0wsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5bNzBdIOeIrOalvOair1xuXG5odHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9jbGltYmluZy1zdGFpcnMvZGVzY3JpcHRpb24vXG5cblRhZ3M6IGFsZ29yaXRobXMgYWRvYmUgYXBwbGUgZHluYW1pYy1wcm9ncmFtbWluZ1xuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDQ0LjYyJSlcbiogVG90YWwgQWNjZXB0ZWQ6IDM1LjZLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiA3OS41S1xuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnMidcblxu5YGH6K6+5L2g5q2j5Zyo54is5qW85qKv44CC6ZyA6KaBIG4g6Zi25L2g5omN6IO95Yiw6L6+5qW86aG244CCXG5cbuavj+asoeS9oOWPr+S7peeIrCAxIOaIliAyIOS4quWPsOmYtuOAguS9oOacieWkmuWwkeenjeS4jeWQjOeahOaWueazleWPr+S7peeIrOWIsOalvOmhtuWRou+8n1xuXG7ms6jmhI/vvJrnu5nlrpogbiDmmK/kuIDkuKrmraPmlbTmlbDjgIJcblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaIDJcbui+k+WHuu+8miAyXG7op6Pph4rvvJog5pyJ5Lik56eN5pa55rOV5Y+v5Lul54is5Yiw5qW86aG244CCXG4xLiAxIOmYtiArIDEg6Zi2XG4yLiAyIOmYtlxuXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJogM1xu6L6T5Ye677yaIDNcbuino+mHiu+8miDmnInkuInnp43mlrnms5Xlj6/ku6XniKzliLDmpbzpobbjgIJcbjEuIDEg6Zi2ICsgMSDpmLYgKyAxIOmYtlxuMi4gMSDpmLYgKyAyIOmYtlxuMy4gMiDpmLYgKyAxIOmYtlxuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuLyoqXG4gKiDlgYforr7mnIkgbiDnuqflj7DpmLZcbiAqIOeOsOWcqOefpemBkyBuIC0gMSDnuqflj7DpmLbotbDms5UgYSDnjrDlnKjliLAgbiDnuqcg6YO95pyJ5LiA56eN6LWw5rOV5bCx5pivICArMVxuICog546w5Zyo55+l6YGTIG4gLSAyIOe6p+WPsOmYtueahOi1sOazlSBiIOeOsOWcqOWIsG4g57qnIOmDveacieS4gOenjei1sOazlSDlsLHmmK8gKzJcbiAqIOaJgOS7peaYr+WKqOaAgeinhOWIkumXrumimCBuIOe6p+WPsOmYtueahOi1sOazleaYryBuLTHnuqfnmoTotbDms5UgKyBuLTLnuqfnmoTotbDms5VcbiAqIGZuKG4pID0gZm4obiAtIDEpICsgZm4obiAtIDIpXG4gKiAqL1xuZnVuY3Rpb24gc29sdXRpb24xKG46IG51bWJlcikge1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIDE7XG4gIGxldCBjdXJyZW50ID0gMTtcbiAgbGV0IGxhc3QgPSAxO1xuXG4gIHdoaWxlICgtLW4pIHtcbiAgICBjb25zdCB0ZW1wID0gY3VycmVudCArIGxhc3Q7XG4gICAgbGFzdCA9IGN1cnJlbnQ7XG4gICAgY3VycmVudCA9IHRlbXA7XG4gIH1cblxuICByZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiDml6LnhLbmmK/mlpDms6LpgqPlpZHmlbDliJflsLHog73lpJ/kvb/nlKjmlpDms6LpgqPlpZHpgJrpobnlhazlvI9cbiAqICovXG5mdW5jdGlvbiBzb2x1dGlvbjIobjogbnVtYmVyKSB7XG4gIGNvbnN0IHNxcnRfNSA9IE1hdGguc3FydCg1KTtcbiAgbiA9IG4gKyAxO1xuICByZXR1cm4gKFxuICAgIChzcXJ0XzUgLyA1KSAqXG4gICAgKE1hdGgucG93KCgxICsgc3FydF81KSAvIDIsIG4pIC0gTWF0aC5wb3coKDEgLSBzcXJ0XzUpIC8gMiwgbikpXG4gICk7XG59XG5cbmV4cG9ydCB7fTtcbiJdfQ==