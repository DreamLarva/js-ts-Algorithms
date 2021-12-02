"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastStoneWeightII2 = void 0;
/*
1049. 最后一块石头的重量 II
有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。



示例 1：

输入：stones = [2,7,4,1,8,1]
输出：1
解释：
组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
示例 2：

输入：stones = [31,26,33,21,40]
输出：5
示例 3：

输入：stones = [1,2]
输出：1


提示：
  1 <= stones.length <= 30
  1 <= stones[i] <= 100

* */
function lastStoneWeightII(stones) {
  /**
   * 要使最后一块石头的重量尽可能地小，neg 需要在不超过 ⌊sum/2⌋ 的前提下尽可能地大。
   * 因此本问题可以看作是背包容量为 ⌊sum/2⌋，物品重量和价值均为 stonesi的 0-1 背包问题。
   */
  let sum = 0;
  for (const weight of stones) {
    sum += weight;
  }
  const n = stones.length,
    m = Math.floor(sum / 2);
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j <= m; ++j) {
      if (j < stones[i]) {
        // 石头太重 肯定凑不出 j , 肯定不选
        dp[i + 1][j] = dp[i][j];
      } else {
        // 如果 dp[i][j] 有方案 说明当前石头,也是不选
        // 如果 dp[i][j] 没方案 则尝试 dp[i][j - stones[i]]
        dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
      }
    }
  }
  console.log(dp);
  // 最右一列 从下往上 选取结果
  for (let j = m; ; --j) {
    if (dp[n][j]) {
      return sum - 2 * j;
    }
  }
}
/**
 * @link https://leetcode-cn.com/problems/last-stone-weight-ii/solution/zui-hou-yi-kuai-shi-tou-de-zhong-liang-i-95p9/
 *
 * 改用一维 使用倒序遍历
 * */
function lastStoneWeightII2(stones) {
  let sum = 0;
  for (const weight of stones) {
    sum += weight;
  }
  const m = Math.floor(sum / 2);
  const dp = new Array(m + 1).fill(false);
  dp[0] = true;
  for (const weight of stones) {
    for (let j = m; j >= weight; --j) {
      dp[j] = dp[j] || dp[j - weight];
    }
  }
  console.log(dp);
  for (let j = m; ; --j) {
    if (dp[j]) {
      return sum - 2 * j;
    }
  }
}
exports.lastStoneWeightII2 = lastStoneWeightII2;
const assert_1 = __importDefault(require("assert"));
// assert.strictEqual(lastStoneWeightII([2, 7, 4, 1, 8, 1]), 1);
// assert.strictEqual(lastStoneWeightII2([2, 7, 4, 1, 8, 1]), 1);
// assert.strictEqual(lastStoneWeightII([3, 2, 1]), 0);
// assert.strictEqual(lastStoneWeightII2([3, 2, 1]), 0);
assert_1.default.strictEqual(lastStoneWeightII([1, 2, 4]), 1);
assert_1.default.strictEqual(lastStoneWeightII2([1, 2, 4]), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA0OS7mnIDlkI7kuIDlnZfnn7PlpLTnmoTph43ph49JSS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA0OS7mnIDlkI7kuIDlnZfnn7PlpLTnmoTph43ph49JSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQ0k7QUFDSixTQUFTLGlCQUFpQixDQUFDLE1BQWdCO0lBQ3pDOzs7T0FHRztJQUNILElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLEtBQUssTUFBTSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQzNCLEdBQUcsSUFBSSxNQUFNLENBQUM7S0FDZjtJQUVELE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixzQkFBc0I7Z0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLDhCQUE4QjtnQkFDOUIsMkNBQTJDO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7S0FDRjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEIsaUJBQWlCO0lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLEVBQUUsQ0FBQyxFQUFFO1FBQ3JCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1osT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtLQUNGO0FBQ0gsQ0FBQztBQUVEOzs7O0tBSUs7QUFDTCxTQUFnQixrQkFBa0IsQ0FBQyxNQUFnQjtJQUNqRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixLQUFLLE1BQU0sTUFBTSxJQUFJLE1BQU0sRUFBRTtRQUMzQixHQUFHLElBQUksTUFBTSxDQUFDO0tBQ2Y7SUFDRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDYixLQUFLLE1BQU0sTUFBTSxJQUFJLE1BQU0sRUFBRTtRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNqQztLQUNGO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBSSxFQUFFLENBQUMsRUFBRTtRQUNyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNULE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7S0FDRjtBQUNILENBQUM7QUFuQkQsZ0RBbUJDO0FBRUQsb0RBQTRCO0FBRTVCLGdFQUFnRTtBQUNoRSxpRUFBaUU7QUFDakUsdURBQXVEO0FBQ3ZELHdEQUF3RDtBQUN4RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4xMDQ5LiDmnIDlkI7kuIDlnZfnn7PlpLTnmoTph43ph48gSUlcbuacieS4gOWghuefs+WktO+8jOeUqOaVtOaVsOaVsOe7hCBzdG9uZXMg6KGo56S644CC5YW25LitIHN0b25lc1tpXSDooajnpLrnrKwgaSDlnZfnn7PlpLTnmoTph43ph4/jgIJcblxu5q+P5LiA5Zue5ZCI77yM5LuO5Lit6YCJ5Ye65Lu75oSP5Lik5Z2X55+z5aS077yM54S25ZCO5bCG5a6D5Lus5LiA6LW357KJ56KO44CC5YGH6K6+55+z5aS055qE6YeN6YeP5YiG5Yir5Li6IHgg5ZKMIHnvvIzkuJQgeCA8PSB544CC6YKj5LmI57KJ56KO55qE5Y+v6IO957uT5p6c5aaC5LiL77yaXG5cbuWmguaenCB4ID09IHnvvIzpgqPkuYjkuKTlnZfnn7PlpLTpg73kvJrooqvlrozlhajnsonnoo7vvJtcbuWmguaenCB4ICE9IHnvvIzpgqPkuYjph43ph4/kuLogeCDnmoTnn7PlpLTlsIbkvJrlrozlhajnsonnoo7vvIzogIzph43ph4/kuLogeSDnmoTnn7PlpLTmlrDph43ph4/kuLogeS1444CCXG7mnIDlkI7vvIzmnIDlpJrlj6rkvJrliankuIvkuIDlnZcg55+z5aS044CC6L+U5Zue5q2k55+z5aS0IOacgOWwj+eahOWPr+iDvemHjemHjyDjgILlpoLmnpzmsqHmnInnn7PlpLTliankuIvvvIzlsLHov5Tlm54gMOOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yac3RvbmVzID0gWzIsNyw0LDEsOCwxXVxu6L6T5Ye677yaMVxu6Kej6YeK77yaXG7nu4TlkIggMiDlkowgNO+8jOW+l+WIsCAy77yM5omA5Lul5pWw57uE6L2s5YyW5Li6IFsyLDcsMSw4LDFd77yMXG7nu4TlkIggNyDlkowgOO+8jOW+l+WIsCAx77yM5omA5Lul5pWw57uE6L2s5YyW5Li6IFsyLDEsMSwxXe+8jFxu57uE5ZCIIDIg5ZKMIDHvvIzlvpfliLAgMe+8jOaJgOS7peaVsOe7hOi9rOWMluS4uiBbMSwxLDFd77yMXG7nu4TlkIggMSDlkowgMe+8jOW+l+WIsCAw77yM5omA5Lul5pWw57uE6L2s5YyW5Li6IFsxXe+8jOi/meWwseaYr+acgOS8mOWAvOOAglxu56S65L6LIDLvvJpcblxu6L6T5YWl77yac3RvbmVzID0gWzMxLDI2LDMzLDIxLDQwXVxu6L6T5Ye677yaNVxu56S65L6LIDPvvJpcblxu6L6T5YWl77yac3RvbmVzID0gWzEsMl1cbui+k+WHuu+8mjFcblxuXG7mj5DnpLrvvJpcbiAgMSA8PSBzdG9uZXMubGVuZ3RoIDw9IDMwXG4gIDEgPD0gc3RvbmVzW2ldIDw9IDEwMFxuXG4qICovXG5mdW5jdGlvbiBsYXN0U3RvbmVXZWlnaHRJSShzdG9uZXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgLyoqXG4gICAqIOimgeS9v+acgOWQjuS4gOWdl+efs+WktOeahOmHjemHj+WwveWPr+iDveWcsOWwj++8jG5lZyDpnIDopoHlnKjkuI3otoXov4cg4oyKc3VtLzLijIsg55qE5YmN5o+Q5LiL5bC95Y+v6IO95Zyw5aSn44CCXG4gICAqIOWboOatpOacrOmXrumimOWPr+S7peeci+S9nOaYr+iDjOWMheWuuemHj+S4uiDijIpzdW0vMuKMi++8jOeJqeWTgemHjemHj+WSjOS7t+WAvOWdh+S4uiBzdG9uZXNp55qEIDAtMSDog4zljIXpl67popjjgIJcbiAgICovXG4gIGxldCBzdW0gPSAwO1xuICBmb3IgKGNvbnN0IHdlaWdodCBvZiBzdG9uZXMpIHtcbiAgICBzdW0gKz0gd2VpZ2h0O1xuICB9XG5cbiAgY29uc3QgbiA9IHN0b25lcy5sZW5ndGgsXG4gICAgbSA9IE1hdGguZmxvb3Ioc3VtIC8gMik7XG4gIGNvbnN0IGRwID0gbmV3IEFycmF5KG4gKyAxKS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkobSArIDEpLmZpbGwoZmFsc2UpKTtcbiAgZHBbMF1bMF0gPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbTsgKytqKSB7XG4gICAgICBpZiAoaiA8IHN0b25lc1tpXSkge1xuICAgICAgICAvLyDnn7PlpLTlpKrph40g6IKv5a6a5YeR5LiN5Ye6IGogLCDogq/lrprkuI3pgIlcbiAgICAgICAgZHBbaSArIDFdW2pdID0gZHBbaV1bal07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlpoLmnpwgZHBbaV1bal0g5pyJ5pa55qGIIOivtOaYjuW9k+WJjeefs+WktCzkuZ/mmK/kuI3pgIlcbiAgICAgICAgLy8g5aaC5p6cIGRwW2ldW2pdIOayoeaWueahiCDliJnlsJ3or5UgZHBbaV1baiAtIHN0b25lc1tpXV1cbiAgICAgICAgZHBbaSArIDFdW2pdID0gZHBbaV1bal0gfHwgZHBbaV1baiAtIHN0b25lc1tpXV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGRwKTtcbiAgLy8g5pyA5Y+z5LiA5YiXIOS7juS4i+W+gOS4iiDpgInlj5bnu5PmnpxcbiAgZm9yIChsZXQgaiA9IG07IDsgLS1qKSB7XG4gICAgaWYgKGRwW25dW2pdKSB7XG4gICAgICByZXR1cm4gc3VtIC0gMiAqIGo7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGxpbmsgaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbGFzdC1zdG9uZS13ZWlnaHQtaWkvc29sdXRpb24venVpLWhvdS15aS1rdWFpLXNoaS10b3UtZGUtemhvbmctbGlhbmctaS05NXA5L1xuICpcbiAqIOaUueeUqOS4gOe7tCDkvb/nlKjlgJLluo/pgY3ljoZcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gbGFzdFN0b25lV2VpZ2h0SUkyKHN0b25lczogbnVtYmVyW10pOiBudW1iZXIge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChjb25zdCB3ZWlnaHQgb2Ygc3RvbmVzKSB7XG4gICAgc3VtICs9IHdlaWdodDtcbiAgfVxuICBjb25zdCBtID0gTWF0aC5mbG9vcihzdW0gLyAyKTtcbiAgY29uc3QgZHAgPSBuZXcgQXJyYXkobSArIDEpLmZpbGwoZmFsc2UpO1xuICBkcFswXSA9IHRydWU7XG4gIGZvciAoY29uc3Qgd2VpZ2h0IG9mIHN0b25lcykge1xuICAgIGZvciAobGV0IGogPSBtOyBqID49IHdlaWdodDsgLS1qKSB7XG4gICAgICBkcFtqXSA9IGRwW2pdIHx8IGRwW2ogLSB3ZWlnaHRdO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhkcCk7XG4gIGZvciAobGV0IGogPSBtOyA7IC0taikge1xuICAgIGlmIChkcFtqXSkge1xuICAgICAgcmV0dXJuIHN1bSAtIDIgKiBqO1xuICAgIH1cbiAgfVxufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGxhc3RTdG9uZVdlaWdodElJKFsyLCA3LCA0LCAxLCA4LCAxXSksIDEpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGxhc3RTdG9uZVdlaWdodElJMihbMiwgNywgNCwgMSwgOCwgMV0pLCAxKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChsYXN0U3RvbmVXZWlnaHRJSShbMywgMiwgMV0pLCAwKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChsYXN0U3RvbmVXZWlnaHRJSTIoWzMsIDIsIDFdKSwgMCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGFzdFN0b25lV2VpZ2h0SUkoWzEsIDIsIDRdKSwgMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGFzdFN0b25lV2VpZ2h0SUkyKFsxLCAyLCA0XSksIDEpO1xuIl19
