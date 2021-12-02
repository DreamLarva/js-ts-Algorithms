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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(solution2(2), 2);
assert_1.default.strictEqual(solution2(3), 3);
console.log(solution2(41));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzAu54is5qW85qKvLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83MC7niKzmpbzmoq8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNDRTs7Ozs7QUFFRjs7O0dBR0c7QUFFSDs7Ozs7O0tBTUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRWIsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNWLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNmLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDaEI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQ7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxDQUFTO0lBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixPQUFPLENBQ0wsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0FBQ0osQ0FBQztBQUlELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBR25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuWzcwXSDniKzmpbzmoq9cblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvY2xpbWJpbmctc3RhaXJzL2Rlc2NyaXB0aW9uL1xuXG5UYWdzOiBhbGdvcml0aG1zIGFkb2JlIGFwcGxlIGR5bmFtaWMtcHJvZ3JhbW1pbmdcblxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XG5cbiogYWxnb3JpdGhtc1xuKiBFYXN5ICg0NC42MiUpXG4qIFRvdGFsIEFjY2VwdGVkOiAzNS42S1xuKiBUb3RhbCBTdWJtaXNzaW9uczogNzkuNUtcbiogVGVzdGNhc2UgRXhhbXBsZTogJzInXG5cbuWBh+iuvuS9oOato+WcqOeIrOalvOair+OAgumcgOimgSBuIOmYtuS9oOaJjeiDveWIsOi+vualvOmhtuOAglxuXG7mr4/mrKHkvaDlj6/ku6XniKwgMSDmiJYgMiDkuKrlj7DpmLbjgILkvaDmnInlpJrlsJHnp43kuI3lkIznmoTmlrnms5Xlj6/ku6XniKzliLDmpbzpobblkaLvvJ9cblxu5rOo5oSP77ya57uZ5a6aIG4g5piv5LiA5Liq5q2j5pW05pWw44CCXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8miAyXG7ovpPlh7rvvJogMlxu6Kej6YeK77yaIOacieS4pOenjeaWueazleWPr+S7peeIrOWIsOalvOmhtuOAglxuMS4gMSDpmLYgKyAxIOmYtlxuMi4gMiDpmLZcblxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaIDNcbui+k+WHuu+8miAzXG7op6Pph4rvvJog5pyJ5LiJ56eN5pa55rOV5Y+v5Lul54is5Yiw5qW86aG244CCXG4xLiAxIOmYtiArIDEg6Zi2ICsgMSDpmLZcbjIuIDEg6Zi2ICsgMiDpmLZcbjMuIDIg6Zi2ICsgMSDpmLZcblxuKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbi8qKlxuICog5YGH6K6+5pyJIG4g57qn5Y+w6Zi2XG4gKiDnjrDlnKjnn6XpgZMgbiAtIDEg57qn5Y+w6Zi26LWw5rOVIGEg546w5Zyo5YiwIG4g57qnIOmDveacieS4gOenjei1sOazleWwseaYryAgKzFcbiAqIOeOsOWcqOefpemBkyBuIC0gMiDnuqflj7DpmLbnmoTotbDms5UgYiDnjrDlnKjliLBuIOe6pyDpg73mnInkuIDnp43otbDms5Ug5bCx5pivICsyXG4gKiDmiYDku6XmmK/liqjmgIHop4TliJLpl67popggbiDnuqflj7DpmLbnmoTotbDms5XmmK8gbi0x57qn55qE6LWw5rOVICsgbi0y57qn55qE6LWw5rOVXG4gKiBmbihuKSA9IGZuKG4gLSAxKSArIGZuKG4gLSAyKVxuICogKi9cbmZ1bmN0aW9uIHNvbHV0aW9uMShuOiBudW1iZXIpIHtcbiAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICBsZXQgY3VycmVudCA9IDE7XG4gIGxldCBsYXN0ID0gMTtcblxuICB3aGlsZSAoLS1uKSB7XG4gICAgY29uc3QgdGVtcCA9IGN1cnJlbnQgKyBsYXN0O1xuICAgIGxhc3QgPSBjdXJyZW50O1xuICAgIGN1cnJlbnQgPSB0ZW1wO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICog5pei54S25piv5paQ5rOi6YKj5aWR5pWw5YiX5bCx6IO95aSf5L2/55So5paQ5rOi6YKj5aWR6YCa6aG55YWs5byPXG4gKiAqL1xuZnVuY3Rpb24gc29sdXRpb24yKG46IG51bWJlcikge1xuICBjb25zdCBzcXJ0XzUgPSBNYXRoLnNxcnQoNSk7XG4gIG4gPSBuICsgMTtcbiAgcmV0dXJuIChcbiAgICAoc3FydF81IC8gNSkgKlxuICAgIChNYXRoLnBvdygoMSArIHNxcnRfNSkgLyAyLCBuKSAtIE1hdGgucG93KCgxIC0gc3FydF81KSAvIDIsIG4pKVxuICApO1xufVxuXG5leHBvcnQge307XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoc29sdXRpb24yKDIpLCAyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChzb2x1dGlvbjIoMyksIDMpXG5cblxuY29uc29sZS5sb2coc29sdXRpb24yKDQxKSk7XG4iXX0=
