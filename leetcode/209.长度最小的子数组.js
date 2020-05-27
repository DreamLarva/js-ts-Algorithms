"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例:

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    // 双指针
    let result = Infinity;
    let left = 0;
    let right = 0;
    /**
     * 每次 left 或 right 变动 并不 重新计算 两个下标之间元素的和
     * 而是 left 移动 就 减去 left 下标的值
     * right 移动就 加上 right 下标的值
     * */
    let sum = 0;
    while (right < nums.length) {
        if (sum + nums[right] < s) {
            sum += nums[right];
            right++;
        }
        else {
            if (right - left < s)
                result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return Number.isFinite(result) ? result : 0;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(minSubArrayLen(100, []), 0);
assert_1.default.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
assert_1.default.strictEqual(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQVMsRUFBRSxJQUFjO0lBQ3RELE1BQU07SUFDTixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7Ozs7U0FJSztJQUNMLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1Q7YUFBTTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUM7U0FDUjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdELGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5ZCr5pyJwqBuwqDkuKrmraPmlbTmlbDnmoTmlbDnu4TlkozkuIDkuKrmraPmlbTmlbDCoHMg77yM5om+5Ye66K+l5pWw57uE5Lit5ruh6Laz5YW25ZKMIOKJpSBzIOeahOmVv+W6puacgOWwj+eahOi/nue7reWtkOaVsOe7hOOAguWmguaenOS4jeWtmOWcqOespuWQiOadoeS7tueahOi/nue7reWtkOaVsOe7hO+8jOi/lOWbniAw44CCXHJcblxyXG7npLrkvos6wqBcclxuXHJcbui+k+WFpTogcyA9IDcsIG51bXMgPSBbMiwzLDEsMiw0LDNdXHJcbui+k+WHujogMlxyXG7op6Pph4o6IOWtkOaVsOe7hMKgWzQsM13CoOaYr+ivpeadoeS7tuS4i+eahOmVv+W6puacgOWwj+eahOi/nue7reWtkOaVsOe7hOOAglxyXG7ov5vpmLY6XHJcblxyXG7lpoLmnpzkvaDlt7Lnu4/lrozmiJDkuoZPKG4pIOaXtumXtOWkjeadguW6pueahOino+azlSwg6K+35bCd6K+VwqBPKG4gbG9nIG4pIOaXtumXtOWkjeadguW6pueahOino+azleOAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbWluaW11bS1zaXplLXN1YmFycmF5LXN1bVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHNcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgbWluU3ViQXJyYXlMZW4gPSBmdW5jdGlvbiAoczogbnVtYmVyLCBudW1zOiBudW1iZXJbXSkge1xyXG4gIC8vIOWPjOaMh+mSiFxyXG4gIGxldCByZXN1bHQgPSBJbmZpbml0eTtcclxuICBsZXQgbGVmdCA9IDA7XHJcbiAgbGV0IHJpZ2h0ID0gMDtcclxuICAvKipcclxuICAgKiDmr4/mrKEgbGVmdCDmiJYgcmlnaHQg5Y+Y5YqoIOW5tuS4jSDph43mlrDorqHnrpcg5Lik5Liq5LiL5qCH5LmL6Ze05YWD57Sg55qE5ZKMXHJcbiAgICog6ICM5pivIGxlZnQg56e75YqoIOWwsSDlh4/ljrsgbGVmdCDkuIvmoIfnmoTlgLxcclxuICAgKiByaWdodCDnp7vliqjlsLEg5Yqg5LiKIHJpZ2h0IOS4i+agh+eahOWAvFxyXG4gICAqICovXHJcbiAgbGV0IHN1bSA9IDA7XHJcbiAgd2hpbGUgKHJpZ2h0IDwgbnVtcy5sZW5ndGgpIHtcclxuICAgIGlmIChzdW0gKyBudW1zW3JpZ2h0XSA8IHMpIHtcclxuICAgICAgc3VtICs9IG51bXNbcmlnaHRdO1xyXG4gICAgICByaWdodCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8IHMpIHJlc3VsdCA9IE1hdGgubWluKHJlc3VsdCwgcmlnaHQgLSBsZWZ0ICsgMSk7XHJcbiAgICAgIHN1bSAtPSBudW1zW2xlZnRdO1xyXG4gICAgICBsZWZ0Kys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHJlc3VsdCkgPyByZXN1bHQgOiAwO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwobWluU3ViQXJyYXlMZW4oMTAwLCBbXSksIDApO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwobWluU3ViQXJyYXlMZW4oNywgWzIsIDMsIDEsIDIsIDQsIDNdKSwgMik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChtaW5TdWJBcnJheUxlbigxNSwgWzUsIDEsIDMsIDUsIDEwLCA3LCA0LCA5LCAyLCA4XSksIDIpO1xyXG4iXX0=