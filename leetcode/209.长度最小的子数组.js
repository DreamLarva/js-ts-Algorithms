"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例:

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA5LumVv+W6puacgOWwj+eahOWtkOaVsOe7hC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQVMsRUFBRSxJQUFjO0lBQ3RELE1BQU07SUFDTixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2Q7Ozs7U0FJSztJQUNMLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1Q7YUFBTTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUM7U0FDUjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdELGdCQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWQq+aciSBuIOS4quato+aVtOaVsOeahOaVsOe7hOWSjOS4gOS4quato+aVtOaVsCBzIO+8jOaJvuWHuuivpeaVsOe7hOS4rea7oei2s+WFtuWSjCDiiaUgcyDnmoTplb/luqbmnIDlsI/nmoTov57nu63lrZDmlbDnu4TjgILlpoLmnpzkuI3lrZjlnKjnrKblkIjmnaHku7bnmoTov57nu63lrZDmlbDnu4TvvIzov5Tlm54gMOOAglxuXG7npLrkvos6XG5cbui+k+WFpTogcyA9IDcsIG51bXMgPSBbMiwzLDEsMiw0LDNdXG7ovpPlh7o6IDJcbuino+mHijog5a2Q5pWw57uEIFs0LDNdIOaYr+ivpeadoeS7tuS4i+eahOmVv+W6puacgOWwj+eahOi/nue7reWtkOaVsOe7hOOAglxu6L+b6Zi2OlxuXG7lpoLmnpzkvaDlt7Lnu4/lrozmiJDkuoZPKG4pIOaXtumXtOWkjeadguW6pueahOino+azlSwg6K+35bCd6K+VIE8obiBsb2cgbikg5pe26Ze05aSN5p2C5bqm55qE6Kej5rOV44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9taW5pbXVtLXNpemUtc3ViYXJyYXktc3VtXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHNcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG1pblN1YkFycmF5TGVuID0gZnVuY3Rpb24gKHM6IG51bWJlciwgbnVtczogbnVtYmVyW10pIHtcbiAgLy8g5Y+M5oyH6ZKIXG4gIGxldCByZXN1bHQgPSBJbmZpbml0eTtcbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgcmlnaHQgPSAwO1xuICAvKipcbiAgICog5q+P5qyhIGxlZnQg5oiWIHJpZ2h0IOWPmOWKqCDlubbkuI0g6YeN5paw6K6h566XIOS4pOS4quS4i+agh+S5i+mXtOWFg+e0oOeahOWSjFxuICAgKiDogIzmmK8gbGVmdCDnp7vliqgg5bCxIOWHj+WOuyBsZWZ0IOS4i+agh+eahOWAvFxuICAgKiByaWdodCDnp7vliqjlsLEg5Yqg5LiKIHJpZ2h0IOS4i+agh+eahOWAvFxuICAgKiAqL1xuICBsZXQgc3VtID0gMDtcbiAgd2hpbGUgKHJpZ2h0IDwgbnVtcy5sZW5ndGgpIHtcbiAgICBpZiAoc3VtICsgbnVtc1tyaWdodF0gPCBzKSB7XG4gICAgICBzdW0gKz0gbnVtc1tyaWdodF07XG4gICAgICByaWdodCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmlnaHQgLSBsZWZ0IDwgcykgcmVzdWx0ID0gTWF0aC5taW4ocmVzdWx0LCByaWdodCAtIGxlZnQgKyAxKTtcbiAgICAgIHN1bSAtPSBudW1zW2xlZnRdO1xuICAgICAgbGVmdCsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUocmVzdWx0KSA/IHJlc3VsdCA6IDA7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKG1pblN1YkFycmF5TGVuKDEwMCwgW10pLCAwKTtcbmFzc2VydC5zdHJpY3RFcXVhbChtaW5TdWJBcnJheUxlbig3LCBbMiwgMywgMSwgMiwgNCwgM10pLCAyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChtaW5TdWJBcnJheUxlbigxNSwgWzUsIDEsIDMsIDUsIDEwLCA3LCA0LCA5LCAyLCA4XSksIDIpO1xuIl19