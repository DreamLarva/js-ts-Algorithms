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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk4LuaJk+WutuWKq+iIjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTk4LuaJk+WutuWKq+iIjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNIOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVUsSUFBYztJQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU87SUFDUCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDZCxDQUFDO1NBQ0w7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNwQixFQUFFLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiDkvaDmmK/kuIDkuKrkuJPkuJrnmoTlsI/lgbfvvIzorqHliJLlgbfnqoPmsr/ooZfnmoTmiL/lsYvjgILmr4/pl7TmiL/lhoXpg73ol4/mnInkuIDlrprnmoTnjrDph5HvvIzlvbHlk43kvaDlgbfnqoPnmoTllK/kuIDliLbnuqblm6DntKDlsLHmmK/nm7jpgrvnmoTmiL/lsYvoo4XmnInnm7jkupLov57pgJrnmoTpmLLnm5fns7vnu5/vvIzlpoLmnpzkuKTpl7Tnm7jpgrvnmoTmiL/lsYvlnKjlkIzkuIDmmZrkuIrooqvlsI/lgbfpl6/lhaXvvIzns7vnu5/kvJroh6rliqjmiqXorabjgIJcclxuXHJcbue7meWumuS4gOS4quS7o+ihqOavj+S4quaIv+Wxi+WtmOaUvumHkemineeahOmdnui0n+aVtOaVsOaVsOe7hO+8jOiuoeeul+S9oOWcqOS4jeinpuWKqOitpuaKpeijhee9rueahOaDheWGteS4i++8jOiDveWkn+WBt+eqg+WIsOeahOacgOmrmOmHkemineOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFsxLDIsMywxXVxyXG7ovpPlh7o6IDRcclxu6Kej6YeKOiDlgbfnqoMgMSDlj7fmiL/lsYsgKOmHkeminSA9IDEpIO+8jOeEtuWQjuWBt+eqgyAzIOWPt+aIv+WxiyAo6YeR6aKdID0gMynjgIJcclxuICAgICDlgbfnqoPliLDnmoTmnIDpq5jph5Hpop0gPSAxICsgMyA9IDQg44CCXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBbMiw3LDksMywxXVxyXG7ovpPlh7o6IDEyXHJcbuino+mHijog5YG356qDIDEg5Y+35oi/5bGLICjph5Hpop0gPSAyKSwg5YG356qDIDMg5Y+35oi/5bGLICjph5Hpop0gPSA5Ke+8jOaOpeedgOWBt+eqgyA1IOWPt+aIv+WxiyAo6YeR6aKdID0gMSnjgIJcclxuICAgICAg5YG356qD5Yiw55qE5pyA6auY6YeR6aKdID0gMiArIDkgKyAxID0gMTIg44CCXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgcm9iID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG4gICAgLy8g5Yqo5oCB6KeE5YiSXHJcbiAgICBjb25zdCBtZW1vID0gW107XHJcbiAgICBtZW1vWzBdID0gbnVtc1swXTtcclxuICAgIGlmIChudW1zLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgbWVtb1sxXSA9IE1hdGgubWF4KG51bXNbMF0sIG51bXNbMV0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtZW1vW2ldID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICBudW1zW2ldICsgbWVtb1tpIC0gMl0sXHJcbiAgICAgICAgICAgICAgICBtZW1vW2kgLSAxXSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICByb2IoWzIsIDcsIDksIDMsIDFdKSxcclxuICAgIDEyLFxyXG4pO1xyXG4iXX0=