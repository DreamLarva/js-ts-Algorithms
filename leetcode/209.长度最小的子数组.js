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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQVMsRUFBRSxJQUFjO0lBQ3RELE1BQU07SUFDTixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7Ozs7U0FJSztJQUNMLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1Q7YUFBTTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUM7U0FDUjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdELGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWQq+acicKgbsKg5Liq5q2j5pW05pWw55qE5pWw57uE5ZKM5LiA5Liq5q2j5pW05pWwwqBzIO+8jOaJvuWHuuivpeaVsOe7hOS4rea7oei2s+WFtuWSjCDiiaUgcyDnmoTplb/luqbmnIDlsI/nmoTov57nu63lrZDmlbDnu4TjgILlpoLmnpzkuI3lrZjlnKjnrKblkIjmnaHku7bnmoTov57nu63lrZDmlbDnu4TvvIzov5Tlm54gMOOAglxuXG7npLrkvos6wqBcblxu6L6T5YWlOiBzID0gNywgbnVtcyA9IFsyLDMsMSwyLDQsM11cbui+k+WHujogMlxu6Kej6YeKOiDlrZDmlbDnu4TCoFs0LDNdwqDmmK/or6XmnaHku7bkuIvnmoTplb/luqbmnIDlsI/nmoTov57nu63lrZDmlbDnu4TjgIJcbui/m+mYtjpcblxu5aaC5p6c5L2g5bey57uP5a6M5oiQ5LqGTyhuKSDml7bpl7TlpI3mnYLluqbnmoTop6Pms5UsIOivt+WwneivlcKgTyhuIGxvZyBuKSDml7bpl7TlpI3mnYLluqbnmoTop6Pms5XjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL21pbmltdW0tc2l6ZS1zdWJhcnJheS1zdW1cbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gc1xuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbWluU3ViQXJyYXlMZW4gPSBmdW5jdGlvbiAoczogbnVtYmVyLCBudW1zOiBudW1iZXJbXSkge1xuICAvLyDlj4zmjIfpkohcbiAgbGV0IHJlc3VsdCA9IEluZmluaXR5O1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IDA7XG4gIC8qKlxuICAgKiDmr4/mrKEgbGVmdCDmiJYgcmlnaHQg5Y+Y5YqoIOW5tuS4jSDph43mlrDorqHnrpcg5Lik5Liq5LiL5qCH5LmL6Ze05YWD57Sg55qE5ZKMXG4gICAqIOiAjOaYryBsZWZ0IOenu+WKqCDlsLEg5YeP5Y67IGxlZnQg5LiL5qCH55qE5YC8XG4gICAqIHJpZ2h0IOenu+WKqOWwsSDliqDkuIogcmlnaHQg5LiL5qCH55qE5YC8XG4gICAqICovXG4gIGxldCBzdW0gPSAwO1xuICB3aGlsZSAocmlnaHQgPCBudW1zLmxlbmd0aCkge1xuICAgIGlmIChzdW0gKyBudW1zW3JpZ2h0XSA8IHMpIHtcbiAgICAgIHN1bSArPSBudW1zW3JpZ2h0XTtcbiAgICAgIHJpZ2h0Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyaWdodCAtIGxlZnQgPCBzKSByZXN1bHQgPSBNYXRoLm1pbihyZXN1bHQsIHJpZ2h0IC0gbGVmdCArIDEpO1xuICAgICAgc3VtIC09IG51bXNbbGVmdF07XG4gICAgICBsZWZ0Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShyZXN1bHQpID8gcmVzdWx0IDogMDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobWluU3ViQXJyYXlMZW4oMTAwLCBbXSksIDApO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG1pblN1YkFycmF5TGVuKDcsIFsyLCAzLCAxLCAyLCA0LCAzXSksIDIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG1pblN1YkFycmF5TGVuKDE1LCBbNSwgMSwgMywgNSwgMTAsIDcsIDQsIDksIDIsIDhdKSwgMik7XG4iXX0=