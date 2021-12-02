"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。



示例：

输入：A = [4,5,0,-2,-3,1], K = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]


提示：
    1. 1 <= A.length <= 30000
    2. -10000 <= A[i] <= 10000
    3. 2 <= K <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-sums-divisible-by-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var subarraysDivByK = function (A, K) {
  /**
   * 根据 同余定理 如果 a mode K == b mode K 那么 (a-b) mode K == 0
   * 且 连续的子数组 P(i,j) = Sum(0,j) - Sum(0,i-1)
   * 所以记录下每个 0 ~ 下标 i 的数组的和 Sum(0,i)
   * 那么 每得到得到一个 Sum 就找 之前 同样余数的 Sum 就能组成 一个符合的结果
   * */
  // 如果刚好除尽 那么本身就是 一个符合的记过 不需要与之前的记过相对应
  const cache = { 0: 1 };
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    // 注意 C++ 取模的特殊性，当被除数为负数时取模结果为负数，需要纠正
    const mod = ((sum % K) + K) % K;
    console.log(mod);
    answer += cache[mod] ?? 0;
    cache[mod] = (cache[mod] ?? 0) + 1;
  }
  return answer;
};
subarraysDivByK([2, -2, 2, -4, 4], 6);
// assert.strictEqual(subarraysDivByK([2, -2, 2, -4], 6), 2);
// assert.strictEqual(subarraysDivByK([-1, 2, 9], 2), 2);
// assert.strictEqual(subarraysDivByK([5], 9), 0);
// assert.strictEqual(subarraysDivByK([4, 5, 0, -2, -3, 1], 5), 7);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTc0LuWSjOWPr+iiq0vmlbTpmaTnmoTlrZDmlbDnu4QuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzk3NC7lkozlj6/ooqtL5pW06Zmk55qE5a2Q5pWw57uELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkk7QUFDSixJQUFJLGVBQWUsR0FBRyxVQUFVLENBQVcsRUFBRSxDQUFTO0lBQ3BEOzs7OztTQUtLO0lBQ0wscUNBQXFDO0lBQ3JDLE1BQU0sS0FBSyxHQUE4QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1oscUNBQXFDO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUlGLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdEMsNkRBQTZEO0FBQzdELHlEQUF5RDtBQUN6RCxrREFBa0Q7QUFDbEQsbUVBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quaVtOaVsOaVsOe7hCBB77yM6L+U5Zue5YW25Lit5YWD57Sg5LmL5ZKM5Y+v6KKrIEsg5pW06Zmk55qE77yI6L+e57ut44CB6Z2e56m677yJ5a2Q5pWw57uE55qE5pWw55uu44CCXG5cblxuXG7npLrkvovvvJpcblxu6L6T5YWl77yaQSA9IFs0LDUsMCwtMiwtMywxXSwgSyA9IDVcbui+k+WHuu+8mjdcbuino+mHiu+8mlxu5pyJIDcg5Liq5a2Q5pWw57uE5ruh6Laz5YW25YWD57Sg5LmL5ZKM5Y+v6KKrIEsgPSA1IOaVtOmZpO+8mlxuWzQsIDUsIDAsIC0yLCAtMywgMV0sIFs1XSwgWzUsIDBdLCBbNSwgMCwgLTIsIC0zXSwgWzBdLCBbMCwgLTIsIC0zXSwgWy0yLCAtM11cblxuXG7mj5DnpLrvvJpcbiAgICAxLiAxIDw9IEEubGVuZ3RoIDw9IDMwMDAwXG4gICAgMi4gLTEwMDAwIDw9IEFbaV0gPD0gMTAwMDBcbiAgICAzLiAyIDw9IEsgPD0gMTAwMDBcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3N1YmFycmF5LXN1bXMtZGl2aXNpYmxlLWJ5LWtcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xudmFyIHN1YmFycmF5c0RpdkJ5SyA9IGZ1bmN0aW9uIChBOiBudW1iZXJbXSwgSzogbnVtYmVyKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOagueaNriDlkIzkvZnlrprnkIYg5aaC5p6cIGEgbW9kZSBLID09IGIgbW9kZSBLIOmCo+S5iCAoYS1iKSBtb2RlIEsgPT0gMFxuICAgKiDkuJQg6L+e57ut55qE5a2Q5pWw57uEIFAoaSxqKSA9IFN1bSgwLGopIC0gU3VtKDAsaS0xKVxuICAgKiDmiYDku6XorrDlvZXkuIvmr4/kuKogMCB+IOS4i+aghyBpIOeahOaVsOe7hOeahOWSjCBTdW0oMCxpKVxuICAgKiDpgqPkuYgg5q+P5b6X5Yiw5b6X5Yiw5LiA5LiqIFN1bSDlsLHmib4g5LmL5YmNIOWQjOagt+S9meaVsOeahCBTdW0g5bCx6IO957uE5oiQIOS4gOS4quespuWQiOeahOe7k+aenFxuICAgKiAqL1xuICAvLyDlpoLmnpzliJrlpb3pmaTlsL0g6YKj5LmI5pys6Lqr5bCx5pivIOS4gOS4quespuWQiOeahOiusOi/hyDkuI3pnIDopoHkuI7kuYvliY3nmoTorrDov4fnm7jlr7nlupRcbiAgY29uc3QgY2FjaGU6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7IDA6IDEgfTtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCBhbnN3ZXIgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEEubGVuZ3RoOyBpKyspIHtcbiAgICBzdW0gKz0gQVtpXTtcbiAgICAvLyDms6jmhI8gQysrIOWPluaooeeahOeJueauiuaAp++8jOW9k+iiq+mZpOaVsOS4uui0n+aVsOaXtuWPluaooee7k+aenOS4uui0n+aVsO+8jOmcgOimgee6oOato1xuICAgIGNvbnN0IG1vZCA9ICgoc3VtICUgSykgKyBLKSAlIEs7XG4gICAgY29uc29sZS5sb2cobW9kKTtcbiAgICBhbnN3ZXIgKz0gY2FjaGVbbW9kXSA/PyAwO1xuICAgIGNhY2hlW21vZF0gPSAoY2FjaGVbbW9kXSA/PyAwKSArIDE7XG4gIH1cblxuICByZXR1cm4gYW5zd2VyO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbnN1YmFycmF5c0RpdkJ5SyhbMiwgLTIsIDIsIC00LCA0XSwgNik7XG5cbi8vIGFzc2VydC5zdHJpY3RFcXVhbChzdWJhcnJheXNEaXZCeUsoWzIsIC0yLCAyLCAtNF0sIDYpLCAyKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChzdWJhcnJheXNEaXZCeUsoWy0xLCAyLCA5XSwgMiksIDIpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHN1YmFycmF5c0RpdkJ5SyhbNV0sIDkpLCAwKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChzdWJhcnJheXNEaXZCeUsoWzQsIDUsIDAsIC0yLCAtMywgMV0sIDUpLCA3KTtcbiJdfQ==
