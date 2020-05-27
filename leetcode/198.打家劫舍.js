"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

示例 1:

输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2:

输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0)
        return 0;
    // 动态规划
    const memo = [];
    memo[0] = nums[0];
    if (nums.length >= 2) {
        memo[1] = Math.max(nums[0], nums[1]);
        for (let i = 2; i < nums.length; i++) {
            memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
        }
    }
    return memo[memo.length - 1];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(rob([2, 7, 9, 3, 1]), 12);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk4LuaJk+WutuWKq+iIjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTk4LuaJk+WutuWKq+iIjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNIOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVUsSUFBYztJQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU87SUFDUCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiDkvaDmmK/kuIDkuKrkuJPkuJrnmoTlsI/lgbfvvIzorqHliJLlgbfnqoPmsr/ooZfnmoTmiL/lsYvjgILmr4/pl7TmiL/lhoXpg73ol4/mnInkuIDlrprnmoTnjrDph5HvvIzlvbHlk43kvaDlgbfnqoPnmoTllK/kuIDliLbnuqblm6DntKDlsLHmmK/nm7jpgrvnmoTmiL/lsYvoo4XmnInnm7jkupLov57pgJrnmoTpmLLnm5fns7vnu5/vvIzlpoLmnpzkuKTpl7Tnm7jpgrvnmoTmiL/lsYvlnKjlkIzkuIDmmZrkuIrooqvlsI/lgbfpl6/lhaXvvIzns7vnu5/kvJroh6rliqjmiqXorabjgIJcblxu57uZ5a6a5LiA5Liq5Luj6KGo5q+P5Liq5oi/5bGL5a2Y5pS+6YeR6aKd55qE6Z2e6LSf5pW05pWw5pWw57uE77yM6K6h566X5L2g5Zyo5LiN6Kem5Yqo6K2m5oql6KOF572u55qE5oOF5Ya15LiL77yM6IO95aSf5YG356qD5Yiw55qE5pyA6auY6YeR6aKd44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFsxLDIsMywxXVxu6L6T5Ye6OiA0XG7op6Pph4o6IOWBt+eqgyAxIOWPt+aIv+WxiyAo6YeR6aKdID0gMSkg77yM54S25ZCO5YG356qDIDMg5Y+35oi/5bGLICjph5Hpop0gPSAzKeOAglxuICAgICDlgbfnqoPliLDnmoTmnIDpq5jph5Hpop0gPSAxICsgMyA9IDQg44CCXG7npLrkvosgMjpcblxu6L6T5YWlOiBbMiw3LDksMywxXVxu6L6T5Ye6OiAxMlxu6Kej6YeKOiDlgbfnqoMgMSDlj7fmiL/lsYsgKOmHkeminSA9IDIpLCDlgbfnqoMgMyDlj7fmiL/lsYsgKOmHkeminSA9IDkp77yM5o6l552A5YG356qDIDUg5Y+35oi/5bGLICjph5Hpop0gPSAxKeOAglxuICAgICAg5YG356qD5Yiw55qE5pyA6auY6YeR6aKdID0gMiArIDkgKyAxID0gMTIg44CCXG4gKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgcm9iID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gIC8vIOWKqOaAgeinhOWIklxuICBjb25zdCBtZW1vID0gW107XG4gIG1lbW9bMF0gPSBudW1zWzBdO1xuICBpZiAobnVtcy5sZW5ndGggPj0gMikge1xuICAgIG1lbW9bMV0gPSBNYXRoLm1heChudW1zWzBdLCBudW1zWzFdKTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1lbW9baV0gPSBNYXRoLm1heChudW1zW2ldICsgbWVtb1tpIC0gMl0sIG1lbW9baSAtIDFdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lbW9bbWVtby5sZW5ndGggLSAxXTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwocm9iKFsyLCA3LCA5LCAzLCAxXSksIDEyKTtcbiJdfQ==