"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 

提示：
    1. 你可以假设 nums 中的所有元素是不重复的。
    2. n 将在 [1, 10000]之间。
    3. nums 的每个元素都将在 [-9999, 9999]之间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0 || target < lodash_1.default.first(nums) || target > lodash_1.default.last(nums))
        return -1;
    if (target === lodash_1.default.first(nums))
        return 0;
    if (target === lodash_1.default.last(nums))
        return nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        const middleIndex = left + ((right - left) >>> 1);
        const middle = nums[middleIndex];
        if (middle === target) {
            return middleIndex;
        }
        else if (target < middle) {
            right = middleIndex - 1;
        }
        else {
            left = middleIndex + 1;
        }
    }
    return -1;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
assert_1.default.strictEqual(search([], 9), -1);
assert_1.default.strictEqual(search([-1, 0, 3, 5, 9, 12], 0), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA0LuS6jOWIhuafpeaJvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA0LuS6jOWIhuafpeaJvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSixvREFBdUI7QUFFdkI7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsSUFBYyxFQUFFLE1BQWM7SUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEdBQUcsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksTUFBTSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxNQUFNLEtBQUssZ0JBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsSUFBSSxNQUFNLEtBQUssZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNuQixPQUFPLFdBQVcsQ0FBQztTQUN0QjthQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUN4QixLQUFLLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0gsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDMUI7S0FDSjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFFZCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvQixDQUFDLENBQ0osQ0FBQztBQUVGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztBQUVGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDL0IsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrCoG7CoOS4quWFg+e0oOacieW6j+eahO+8iOWNh+W6j++8ieaVtOWei+aVsOe7hMKgbnVtcyDlkozkuIDkuKrnm67moIflgLzCoHRhcmdldCDCoO+8jOWGmeS4gOS4quWHveaVsOaQnOe0osKgbnVtc8Kg5Lit55qEIHRhcmdldO+8jOWmguaenOebruagh+WAvOWtmOWcqOi/lOWbnuS4i+agh++8jOWQpuWImei/lOWbniAtMeOAglxyXG5cclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBudW1zID0gWy0xLDAsMyw1LDksMTJdLCB0YXJnZXQgPSA5XHJcbui+k+WHujogNFxyXG7op6Pph4o6IDkg5Ye6546w5ZyoIG51bXMg5Lit5bm25LiU5LiL5qCH5Li6IDRcclxu56S65L6LwqAyOlxyXG5cclxu6L6T5YWlOiBudW1zID0gWy0xLDAsMyw1LDksMTJdLCB0YXJnZXQgPSAyXHJcbui+k+WHujogLTFcclxu6Kej6YeKOiAyIOS4jeWtmOWcqCBudW1zIOS4reWboOatpOi/lOWbniAtMVxyXG7CoFxyXG5cclxu5o+Q56S677yaXHJcbiAgICAxLiDkvaDlj6/ku6XlgYforr4gbnVtc8Kg5Lit55qE5omA5pyJ5YWD57Sg5piv5LiN6YeN5aSN55qE44CCXHJcbiAgICAyLiBuwqDlsIblnKjCoFsxLCAxMDAwMF3kuYvpl7TjgIJcclxuICAgIDMuIG51bXPCoOeahOavj+S4quWFg+e0oOmDveWwhuWcqMKgWy05OTk5LCA5OTk5XeS5i+mXtOOAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYmluYXJ5LXNlYXJjaFxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBzZWFyY2ggPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtcy5sZW5ndGggPT09IDAgfHwgdGFyZ2V0IDwgXy5maXJzdChudW1zKSEgfHwgdGFyZ2V0ID4gXy5sYXN0KG51bXMpISkgcmV0dXJuIC0xO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gXy5maXJzdChudW1zKSkgcmV0dXJuIDA7XHJcbiAgICBpZiAodGFyZ2V0ID09PSBfLmxhc3QobnVtcykpIHJldHVybiBudW1zLmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICBsZXQgcmlnaHQgPSBudW1zLmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAocmlnaHQgPj0gbGVmdCkge1xyXG4gICAgICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gbGVmdCArICgocmlnaHQgLSBsZWZ0KSA+Pj4gMSk7XHJcbiAgICAgICAgY29uc3QgbWlkZGxlID0gbnVtc1ttaWRkbGVJbmRleF07XHJcbiAgICAgICAgaWYgKG1pZGRsZSA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtaWRkbGVJbmRleDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA8IG1pZGRsZSkge1xyXG4gICAgICAgICAgICByaWdodCA9IG1pZGRsZUluZGV4IC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbWlkZGxlSW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gLTE7XHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBzZWFyY2goWy0xLCAwLCAzLCA1LCA5LCAxMl0sIDkpLFxyXG4gICAgNCxcclxuKTtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHNlYXJjaChbXSwgOSksXHJcbiAgICAtMSxcclxuKTtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHNlYXJjaChbLTEsIDAsIDMsIDUsIDksIDEyXSwgMCksXHJcbiAgICAxLFxyXG4pO1xyXG4iXX0=