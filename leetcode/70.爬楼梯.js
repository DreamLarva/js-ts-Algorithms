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
    return sqrt_5 / 5 * (Math.pow((1 + sqrt_5) / 2, n) - Math.pow((1 - sqrt_5) / 2, n));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAu54is5qW85qKvLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83MC7niKzmpbzmoq8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNDRTs7QUFFRjs7O0dBR0c7QUFFSDs7Ozs7O0tBTUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRWIsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDbEI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2hFLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuWzcwXSDniKzmpbzmoq9cclxuXHJcbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2NsaW1iaW5nLXN0YWlycy9kZXNjcmlwdGlvbi9cclxuXHJcblRhZ3M6IGFsZ29yaXRobXMgYWRvYmUgYXBwbGUgZHluYW1pYy1wcm9ncmFtbWluZ1xyXG5cclxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XHJcblxyXG4qIGFsZ29yaXRobXNcclxuKiBFYXN5ICg0NC42MiUpXHJcbiogVG90YWwgQWNjZXB0ZWQ6IDM1LjZLXHJcbiogVG90YWwgU3VibWlzc2lvbnM6IDc5LjVLXHJcbiogVGVzdGNhc2UgRXhhbXBsZTogJzInXHJcblxyXG7lgYforr7kvaDmraPlnKjniKzmpbzmoq/jgILpnIDopoEgbiDpmLbkvaDmiY3og73liLDovr7mpbzpobbjgIJcclxuXHJcbuavj+asoeS9oOWPr+S7peeIrCAxIOaIliAyIOS4quWPsOmYtuOAguS9oOacieWkmuWwkeenjeS4jeWQjOeahOaWueazleWPr+S7peeIrOWIsOalvOmhtuWRou+8n1xyXG5cclxu5rOo5oSP77ya57uZ5a6aIG4g5piv5LiA5Liq5q2j5pW05pWw44CCXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWl77yaIDJcclxu6L6T5Ye677yaIDJcclxu6Kej6YeK77yaIOacieS4pOenjeaWueazleWPr+S7peeIrOWIsOalvOmhtuOAglxyXG4xLiAxIOmYtiArIDEg6Zi2XHJcbjIuIDIg6Zi2XHJcblxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWl77yaIDNcclxu6L6T5Ye677yaIDNcclxu6Kej6YeK77yaIOacieS4ieenjeaWueazleWPr+S7peeIrOWIsOalvOmhtuOAglxyXG4xLiAxIOmYtiArIDEg6Zi2ICsgMSDpmLZcclxuMi4gMSDpmLYgKyAyIOmYtlxyXG4zLiAyIOmYtiArIDEg6Zi2XHJcblxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcblxyXG4vKipcclxuICog5YGH6K6+5pyJIG4g57qn5Y+w6Zi2XHJcbiAqIOeOsOWcqOefpemBkyBuIC0gMSDnuqflj7DpmLbotbDms5UgYSDnjrDlnKjliLAgbiDnuqcg6YO95pyJ5LiA56eN6LWw5rOV5bCx5pivICArMVxyXG4gKiDnjrDlnKjnn6XpgZMgbiAtIDIg57qn5Y+w6Zi255qE6LWw5rOVIGIg546w5Zyo5YiwbiDnuqcg6YO95pyJ5LiA56eN6LWw5rOVIOWwseaYryArMlxyXG4gKiDmiYDku6XmmK/liqjmgIHop4TliJLpl67popggbiDnuqflj7DpmLbnmoTotbDms5XmmK8gbi0x57qn55qE6LWw5rOVICsgbi0y57qn55qE6LWw5rOVXHJcbiAqIGZuKG4pID0gZm4obiAtIDEpICsgZm4obiAtIDIpXHJcbiAqICovXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMShuOiBudW1iZXIpIHtcclxuICAgIGlmIChuID09PSAxKSByZXR1cm4gMTtcclxuICAgIGxldCBjdXJyZW50ID0gMTtcclxuICAgIGxldCBsYXN0ID0gMTtcclxuXHJcbiAgICB3aGlsZSAoLS1uKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGN1cnJlbnQgKyBsYXN0O1xyXG4gICAgICAgIGxhc3QgPSBjdXJyZW50O1xyXG4gICAgICAgIGN1cnJlbnQgPSB0ZW1wO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW50O1xyXG59XHJcblxyXG4vKipcclxuICog5pei54S25piv5paQ5rOi6YKj5aWR5pWw5YiX5bCx6IO95aSf5L2/55So5paQ5rOi6YKj5aWR6YCa6aG55YWs5byPXHJcbiAqICovXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMihuOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHNxcnRfNSA9IE1hdGguc3FydCg1KTtcclxuICAgIG4gPSBuICsgMTtcclxuICAgIHJldHVybiBzcXJ0XzUgLyA1ICogKFxyXG4gICAgICAgIE1hdGgucG93KCgxICsgc3FydF81KSAvIDIsIG4pIC0gTWF0aC5wb3coKDEgLSBzcXJ0XzUpIC8gMiwgbilcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=