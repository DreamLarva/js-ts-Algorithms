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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk4LuaJk+WutuWKq+iIjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTk4LuaJk+WutuWKq+iIjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNIOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVUsSUFBYztJQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU87SUFDUCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDZCxDQUFDO1NBQ0w7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNwQixFQUFFLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4g5L2g5piv5LiA5Liq5LiT5Lia55qE5bCP5YG377yM6K6h5YiS5YG356qD5rK/6KGX55qE5oi/5bGL44CC5q+P6Ze05oi/5YaF6YO96JeP5pyJ5LiA5a6a55qE546w6YeR77yM5b2x5ZON5L2g5YG356qD55qE5ZSv5LiA5Yi257qm5Zug57Sg5bCx5piv55u46YK755qE5oi/5bGL6KOF5pyJ55u45LqS6L+e6YCa55qE6Ziy55uX57O757uf77yM5aaC5p6c5Lik6Ze055u46YK755qE5oi/5bGL5Zyo5ZCM5LiA5pma5LiK6KKr5bCP5YG36Zev5YWl77yM57O757uf5Lya6Ieq5Yqo5oql6K2m44CCXG5cbue7meWumuS4gOS4quS7o+ihqOavj+S4quaIv+Wxi+WtmOaUvumHkemineeahOmdnui0n+aVtOaVsOaVsOe7hO+8jOiuoeeul+S9oOWcqOS4jeinpuWKqOitpuaKpeijhee9rueahOaDheWGteS4i++8jOiDveWkn+WBt+eqg+WIsOeahOacgOmrmOmHkemineOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBbMSwyLDMsMV1cbui+k+WHujogNFxu6Kej6YeKOiDlgbfnqoMgMSDlj7fmiL/lsYsgKOmHkeminSA9IDEpIO+8jOeEtuWQjuWBt+eqgyAzIOWPt+aIv+WxiyAo6YeR6aKdID0gMynjgIJcbiAgICAg5YG356qD5Yiw55qE5pyA6auY6YeR6aKdID0gMSArIDMgPSA0IOOAglxu56S65L6LIDI6XG5cbui+k+WFpTogWzIsNyw5LDMsMV1cbui+k+WHujogMTJcbuino+mHijog5YG356qDIDEg5Y+35oi/5bGLICjph5Hpop0gPSAyKSwg5YG356qDIDMg5Y+35oi/5bGLICjph5Hpop0gPSA5Ke+8jOaOpeedgOWBt+eqgyA1IOWPt+aIv+WxiyAo6YeR6aKdID0gMSnjgIJcbiAgICAgIOWBt+eqg+WIsOeahOacgOmrmOmHkeminSA9IDIgKyA5ICsgMSA9IDEyIOOAglxuICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHJvYiA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAgIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gICAgLy8g5Yqo5oCB6KeE5YiSXG4gICAgY29uc3QgbWVtbyA9IFtdO1xuICAgIG1lbW9bMF0gPSBudW1zWzBdO1xuICAgIGlmIChudW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIG1lbW9bMV0gPSBNYXRoLm1heChudW1zWzBdLCBudW1zWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtZW1vW2ldID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgbnVtc1tpXSArIG1lbW9baSAtIDJdLFxuICAgICAgICAgICAgICAgIG1lbW9baSAtIDFdLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVtb1ttZW1vLmxlbmd0aCAtIDFdO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICByb2IoWzIsIDcsIDksIDMsIDFdKSxcbiAgICAxMixcbik7XG4iXX0=