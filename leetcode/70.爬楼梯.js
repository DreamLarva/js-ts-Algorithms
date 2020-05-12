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
  if (n === 1) return 1;
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
  return (
    (sqrt_5 / 5) *
    (Math.pow((1 + sqrt_5) / 2, n) - Math.pow((1 - sqrt_5) / 2, n))
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAu54is5qW85qKvLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83MC7niKzmpbzmoq8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNDRTs7QUFFRjs7O0dBR0c7QUFFSDs7Ozs7O0tBTUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRWIsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDbEI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2hFLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbls3MF0g54is5qW85qKvXG5cbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2NsaW1iaW5nLXN0YWlycy9kZXNjcmlwdGlvbi9cblxuVGFnczogYWxnb3JpdGhtcyBhZG9iZSBhcHBsZSBkeW5hbWljLXByb2dyYW1taW5nXG5cbkxhbmdzOiBjIGNwcCBjc2hhcnAgZ29sYW5nIGphdmEgamF2YXNjcmlwdCBrb3RsaW4gcGhwIHB5dGhvbiBweXRob24zIHJ1YnkgcnVzdCBzY2FsYSBzd2lmdFxuXG4qIGFsZ29yaXRobXNcbiogRWFzeSAoNDQuNjIlKVxuKiBUb3RhbCBBY2NlcHRlZDogMzUuNktcbiogVG90YWwgU3VibWlzc2lvbnM6IDc5LjVLXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICcyJ1xuXG7lgYforr7kvaDmraPlnKjniKzmpbzmoq/jgILpnIDopoEgbiDpmLbkvaDmiY3og73liLDovr7mpbzpobbjgIJcblxu5q+P5qyh5L2g5Y+v5Lul54isIDEg5oiWIDIg5Liq5Y+w6Zi244CC5L2g5pyJ5aSa5bCR56eN5LiN5ZCM55qE5pa55rOV5Y+v5Lul54is5Yiw5qW86aG25ZGi77yfXG5cbuazqOaEj++8mue7meWumiBuIOaYr+S4gOS4quato+aVtOaVsOOAglxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJogMlxu6L6T5Ye677yaIDJcbuino+mHiu+8miDmnInkuKTnp43mlrnms5Xlj6/ku6XniKzliLDmpbzpobbjgIJcbjEuIDEg6Zi2ICsgMSDpmLZcbjIuIDIg6Zi2XG5cbuekuuS+iyAy77yaXG5cbui+k+WFpe+8miAzXG7ovpPlh7rvvJogM1xu6Kej6YeK77yaIOacieS4ieenjeaWueazleWPr+S7peeIrOWIsOalvOmhtuOAglxuMS4gMSDpmLYgKyAxIOmYtiArIDEg6Zi2XG4yLiAxIOmYtiArIDIg6Zi2XG4zLiAyIOmYtiArIDEg6Zi2XG5cbiovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIOWBh+iuvuaciSBuIOe6p+WPsOmYtlxuICog546w5Zyo55+l6YGTIG4gLSAxIOe6p+WPsOmYtui1sOazlSBhIOeOsOWcqOWIsCBuIOe6pyDpg73mnInkuIDnp43otbDms5XlsLHmmK8gICsxXG4gKiDnjrDlnKjnn6XpgZMgbiAtIDIg57qn5Y+w6Zi255qE6LWw5rOVIGIg546w5Zyo5YiwbiDnuqcg6YO95pyJ5LiA56eN6LWw5rOVIOWwseaYryArMlxuICog5omA5Lul5piv5Yqo5oCB6KeE5YiS6Zeu6aKYIG4g57qn5Y+w6Zi255qE6LWw5rOV5pivIG4tMee6p+eahOi1sOazlSArIG4tMue6p+eahOi1sOazlVxuICogZm4obikgPSBmbihuIC0gMSkgKyBmbihuIC0gMilcbiAqICovXG5mdW5jdGlvbiBzb2x1dGlvbjEobjogbnVtYmVyKSB7XG4gICAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICAgIGxldCBjdXJyZW50ID0gMTtcbiAgICBsZXQgbGFzdCA9IDE7XG5cbiAgICB3aGlsZSAoLS1uKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBjdXJyZW50ICsgbGFzdDtcbiAgICAgICAgbGFzdCA9IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQgPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50O1xufVxuXG4vKipcbiAqIOaXoueEtuaYr+aWkOazoumCo+WlkeaVsOWIl+WwseiDveWkn+S9v+eUqOaWkOazoumCo+WlkemAmumhueWFrOW8j1xuICogKi9cbmZ1bmN0aW9uIHNvbHV0aW9uMihuOiBudW1iZXIpIHtcbiAgICBjb25zdCBzcXJ0XzUgPSBNYXRoLnNxcnQoNSk7XG4gICAgbiA9IG4gKyAxO1xuICAgIHJldHVybiBzcXJ0XzUgLyA1ICogKFxuICAgICAgICBNYXRoLnBvdygoMSArIHNxcnRfNSkgLyAyLCBuKSAtIE1hdGgucG93KCgxIC0gc3FydF81KSAvIDIsIG4pXG4gICAgKTtcbn1cblxuZXhwb3J0IHt9XG4iXX0=
