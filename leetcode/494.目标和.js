"use strict";
/*
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，
你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例 1:

输入: nums: [1, 1, 1, 1, 1], S: 3
输出: 5
解释:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
注意:

1.数组的长度不会超过20，并且数组中的值全为正数。
2.初始的数组的和不会超过1000。
3.保证返回的最终结果为32位整数。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  /* 回溯法 */
  if (nums.length === 0) return S === 0 ? 1 : 0;
  const num = nums[0];
  const nums_next = nums.slice(1);
  return (
    findTargetSumWays(nums_next, S - num) +
    findTargetSumWays(nums_next, S + num)
  );
};
function findTargetSumWays2(nums, target) {
  /* 动态规划 */
  /**
   * 记数组的元素和为 sum，添加 - 号的元素之和为 neg，
   * 则其余添加 + 的元素之和为 sum−neg
   *
   * 则 成立
   * (sum−neg)−neg=sum−2⋅neg=target
   * 即
   * neg = (sum - target) / 2
   * */
  let sum = 0; // 全正数的总和
  for (const num of nums) {
    sum += num;
  }
  // diff 判断是否有解
  const diff = sum - target;
  // diff < 0 说明 sum 太小全部累加 都不够
  // diff % 2 !== 0 上面等式已经推导, 需要 除2, 且 target 为整数
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }
  const n = nums.length;
  const neg = diff / 2;
  /**
   * 动态规划 状态表
   * dp[i][j] 表示在数组 nums 的前 i 个数中选取元素，
   * 使得这些元素之和等于 j 的方案数。
   * 假设数组 nums 的长度为 n，
   * 则最终答案为 dp[n][neg]。
   *
   *
   * 边界条件
   * j = 0  => dp[0][j] = 1 // 当没有任何元素可以选取时，元素和只能是 0，对应的方案数是 1
   * j >= 1 => dp[0][j] = 0
   *
   * 状态转移方程为
   * 由于完全转换成 取 和不取的 情况, 则如果这i位 达不到要求,顺延 使用取i-1位的结果
   * j < nums[i] => dp[i][j] = dp[i−1][j]
   * j >= nums[i] => dp[i][j] + dp[i - 1][nums[j - nums[i]]
   * */
  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }
  return dp[n][neg];
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
// assert.strictEqual(findTargetSumWays2([1, 1, 1, 1, 1], 3), 5); // neg = 1
findTargetSumWays2([1, 2, 3, 4, 5, 6, 7], 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk0Luebruagh+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk0Luebruagh+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBQ3pELFNBQVM7SUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEMsT0FBTyxDQUNMLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQ3RDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixTQUFTLGtCQUFrQixDQUFDLElBQWMsRUFBRSxNQUFjO0lBQ3hELFVBQVU7SUFDVjs7Ozs7Ozs7U0FRSztJQUNMLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsR0FBRyxJQUFJLEdBQUcsQ0FBQztLQUNaO0lBQ0QsY0FBYztJQUNkLE1BQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDMUIsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxDQUFDLENBQUM7S0FDVjtJQUVELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNyQjs7Ozs7Ozs7Ozs7Ozs7OztTQWdCSztJQUNMLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdELDRFQUE0RTtBQUU1RSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qumdnui0n+aVtOaVsOaVsOe7hO+8jGExLCBhMiwgLi4uLCBhbiwg5ZKM5LiA5Liq55uu5qCH5pWw77yMU+OAgueOsOWcqOS9oOacieS4pOS4quespuWPtyArIOWSjCAt44CC5a+55LqO5pWw57uE5Lit55qE5Lu75oSP5LiA5Liq5pW05pWw77yMXG7kvaDpg73lj6/ku6Xku44gKyDmiJYgLeS4remAieaLqeS4gOS4quespuWPt+a3u+WKoOWcqOWJjemdouOAglxuXG7ov5Tlm57lj6/ku6Xkvb/mnIDnu4jmlbDnu4TlkozkuLrnm67moIfmlbAgUyDnmoTmiYDmnInmt7vliqDnrKblj7fnmoTmlrnms5XmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogbnVtczogWzEsIDEsIDEsIDEsIDFdLCBTOiAzXG7ovpPlh7o6IDVcbuino+mHijpcblxuLTErMSsxKzErMSA9IDNcbisxLTErMSsxKzEgPSAzXG4rMSsxLTErMSsxID0gM1xuKzErMSsxLTErMSA9IDNcbisxKzErMSsxLTEgPSAzXG5cbuS4gOWFseaciTXnp43mlrnms5XorqnmnIDnu4jnm67moIflkozkuLoz44CCXG7ms6jmhI86XG5cbjEu5pWw57uE55qE6ZW/5bqm5LiN5Lya6LaF6L+HMjDvvIzlubbkuJTmlbDnu4TkuK3nmoTlgLzlhajkuLrmraPmlbDjgIJcbjIu5Yid5aeL55qE5pWw57uE55qE5ZKM5LiN5Lya6LaF6L+HMTAwMOOAglxuMy7kv53or4Hov5Tlm57nmoTmnIDnu4jnu5PmnpzkuLozMuS9jeaVtOaVsOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBTXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBmaW5kVGFyZ2V0U3VtV2F5cyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSwgUzogbnVtYmVyKTogbnVtYmVyIHtcbiAgLyog5Zue5rqv5rOVICovXG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFMgPT09IDAgPyAxIDogMDtcblxuICBjb25zdCBudW0gPSBudW1zWzBdO1xuICBjb25zdCBudW1zX25leHQgPSBudW1zLnNsaWNlKDEpO1xuXG4gIHJldHVybiAoXG4gICAgZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTIC0gbnVtKSArXG4gICAgZmluZFRhcmdldFN1bVdheXMobnVtc19uZXh0LCBTICsgbnVtKVxuICApO1xufTtcblxuZnVuY3Rpb24gZmluZFRhcmdldFN1bVdheXMyKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcik6IG51bWJlciB7XG4gIC8qIOWKqOaAgeinhOWIkiAqL1xuICAvKipcbiAgICog6K6w5pWw57uE55qE5YWD57Sg5ZKM5Li6IHN1be+8jOa3u+WKoCAtIOWPt+eahOWFg+e0oOS5i+WSjOS4uiBuZWfvvIxcbiAgICog5YiZ5YW25L2Z5re75YqgICsg55qE5YWD57Sg5LmL5ZKM5Li6IHN1beKIkm5lZ1xuICAgKlxuICAgKiDliJkg5oiQ56uLXG4gICAqIChzdW3iiJJuZWcp4oiSbmVnPXN1beKIkjLii4VuZWc9dGFyZ2V0XG4gICAqIOWNs1xuICAgKiBuZWcgPSAoc3VtIC0gdGFyZ2V0KSAvIDJcbiAgICogKi9cbiAgbGV0IHN1bSA9IDA7IC8vIOWFqOato+aVsOeahOaAu+WSjFxuICBmb3IgKGNvbnN0IG51bSBvZiBudW1zKSB7XG4gICAgc3VtICs9IG51bTtcbiAgfVxuICAvLyBkaWZmIOWIpOaWreaYr+WQpuacieino1xuICBjb25zdCBkaWZmID0gc3VtIC0gdGFyZ2V0O1xuICAvLyBkaWZmIDwgMCDor7TmmI4gc3VtIOWkquWwj+WFqOmDqOe0r+WKoCDpg73kuI3lpJ9cbiAgLy8gZGlmZiAlIDIgIT09IDAg5LiK6Z2i562J5byP5bey57uP5o6o5a+8LCDpnIDopoEg6ZmkMiwg5LiUIHRhcmdldCDkuLrmlbTmlbBcbiAgaWYgKGRpZmYgPCAwIHx8IGRpZmYgJSAyICE9PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBuID0gbnVtcy5sZW5ndGg7XG4gIGNvbnN0IG5lZyA9IGRpZmYgLyAyO1xuICAvKipcbiAgICog5Yqo5oCB6KeE5YiSIOeKtuaAgeihqFxuICAgKiBkcFtpXVtqXSDooajnpLrlnKjmlbDnu4QgbnVtcyDnmoTliY0gaSDkuKrmlbDkuK3pgInlj5blhYPntKDvvIxcbiAgICog5L2/5b6X6L+Z5Lqb5YWD57Sg5LmL5ZKM562J5LqOIGog55qE5pa55qGI5pWw44CCXG4gICAqIOWBh+iuvuaVsOe7hCBudW1zIOeahOmVv+W6puS4uiBu77yMXG4gICAqIOWImeacgOe7iOetlOahiOS4uiBkcFtuXVtuZWdd44CCXG4gICAqXG4gICAqXG4gICAqIOi+ueeVjOadoeS7tlxuICAgKiBqID0gMCAgPT4gZHBbMF1bal0gPSAxIC8vIOW9k+ayoeacieS7u+S9leWFg+e0oOWPr+S7pemAieWPluaXtu+8jOWFg+e0oOWSjOWPquiDveaYryAw77yM5a+55bqU55qE5pa55qGI5pWw5pivIDFcbiAgICogaiA+PSAxID0+IGRwWzBdW2pdID0gMFxuICAgKlxuICAgKiDnirbmgIHovaznp7vmlrnnqIvkuLpcbiAgICog55Sx5LqO5a6M5YWo6L2s5o2i5oiQIOWPliDlkozkuI3lj5bnmoQg5oOF5Ya1LCDliJnlpoLmnpzov5lp5L2NIOi+vuS4jeWIsOimgeaxgizpobrlu7Yg5L2/55So5Y+WaS0x5L2N55qE57uT5p6cXG4gICAqIGogPCBudW1zW2ldID0+IGRwW2ldW2pdID0gZHBbaeKIkjFdW2pdXG4gICAqIGogPj0gbnVtc1tpXSA9PiBkcFtpXVtqXSArIGRwW2kgLSAxXVtudW1zW2ogLSBudW1zW2ldXVxuICAgKiAqL1xuICBjb25zdCBkcCA9IG5ldyBBcnJheShuICsgMSkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KG5lZyArIDEpLmZpbGwoMCkpO1xuICBkcFswXVswXSA9IDE7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IG51bSA9IG51bXNbaSAtIDFdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG5lZzsgaisrKSB7XG4gICAgICBkcFtpXVtqXSA9IGRwW2kgLSAxXVtqXTtcbiAgICAgIGlmIChqID49IG51bSkge1xuICAgICAgICBkcFtpXVtqXSArPSBkcFtpIC0gMV1baiAtIG51bV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkcFtuXVtuZWddO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRUYXJnZXRTdW1XYXlzKFsxLCAxLCAxLCAxLCAxXSwgMyksIDUpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRUYXJnZXRTdW1XYXlzMihbMSwgMSwgMSwgMSwgMV0sIDMpLCA1KTsgLy8gbmVnID0gMVxuXG5maW5kVGFyZ2V0U3VtV2F5czIoWzEsIDIsIDMsIDQsIDUsIDYsIDddLCA0KTtcbiJdfQ==
