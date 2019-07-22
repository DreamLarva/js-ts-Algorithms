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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQVMsRUFBRSxJQUFjO0lBQ3BELE1BQU07SUFDTixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7Ozs7U0FJSztJQUNMLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1g7YUFBTTtZQUNILElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuRCxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlkKvmnInCoG7CoOS4quato+aVtOaVsOeahOaVsOe7hOWSjOS4gOS4quato+aVtOaVsMKgcyDvvIzmib7lh7ror6XmlbDnu4TkuK3mu6HotrPlhbblkowg4omlIHMg55qE6ZW/5bqm5pyA5bCP55qE6L+e57ut5a2Q5pWw57uE44CC5aaC5p6c5LiN5a2Y5Zyo56ym5ZCI5p2h5Lu255qE6L+e57ut5a2Q5pWw57uE77yM6L+U5ZueIDDjgIJcblxu56S65L6LOsKgXG5cbui+k+WFpTogcyA9IDcsIG51bXMgPSBbMiwzLDEsMiw0LDNdXG7ovpPlh7o6IDJcbuino+mHijog5a2Q5pWw57uEwqBbNCwzXcKg5piv6K+l5p2h5Lu25LiL55qE6ZW/5bqm5pyA5bCP55qE6L+e57ut5a2Q5pWw57uE44CCXG7ov5vpmLY6XG5cbuWmguaenOS9oOW3sue7j+WujOaIkOS6hk8obikg5pe26Ze05aSN5p2C5bqm55qE6Kej5rOVLCDor7flsJ3or5XCoE8obiBsb2cgbikg5pe26Ze05aSN5p2C5bqm55qE6Kej5rOV44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9taW5pbXVtLXNpemUtc3ViYXJyYXktc3VtXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHNcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG1pblN1YkFycmF5TGVuID0gZnVuY3Rpb24gKHM6IG51bWJlciwgbnVtczogbnVtYmVyW10pIHtcbiAgICAvLyDlj4zmjIfpkohcbiAgICBsZXQgcmVzdWx0ID0gSW5maW5pdHk7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCByaWdodCA9IDA7XG4gICAgLyoqXG4gICAgICog5q+P5qyhIGxlZnQg5oiWIHJpZ2h0IOWPmOWKqCDlubbkuI0g6YeN5paw6K6h566XIOS4pOS4quS4i+agh+S5i+mXtOWFg+e0oOeahOWSjFxuICAgICAqIOiAjOaYryBsZWZ0IOenu+WKqCDlsLEg5YeP5Y67IGxlZnQg5LiL5qCH55qE5YC8XG4gICAgICogcmlnaHQg56e75Yqo5bCxIOWKoOS4iiByaWdodCDkuIvmoIfnmoTlgLxcbiAgICAgKiAqL1xuICAgIGxldCBzdW0gPSAwO1xuICAgIHdoaWxlIChyaWdodCA8IG51bXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzdW0gKyBudW1zW3JpZ2h0XSA8IHMpIHtcbiAgICAgICAgICAgIHN1bSArPSBudW1zW3JpZ2h0XTtcbiAgICAgICAgICAgIHJpZ2h0Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDwgcykgcmVzdWx0ID0gTWF0aC5taW4ocmVzdWx0LCByaWdodCAtIGxlZnQgKyAxKTtcbiAgICAgICAgICAgIHN1bSAtPSBudW1zW2xlZnRdO1xuICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShyZXN1bHQpID8gcmVzdWx0IDogMDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgbWluU3ViQXJyYXlMZW4oMTAwLCBbXSksXG4gICAgMCxcbik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gICAgbWluU3ViQXJyYXlMZW4oNywgWzIsIDMsIDEsIDIsIDQsIDNdKSxcbiAgICAyLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBtaW5TdWJBcnJheUxlbigxNSwgWzUsIDEsIDMsIDUsIDEwLCA3LCA0LCA5LCAyLCA4XSksXG4gICAgMixcbik7XG4iXX0=