"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

你可以假设数组中不存在重复元素。

示例 1:

输入: [3,4,5,1,2]
输出: 1
示例 2:

输入: [4,5,6,7,0,1,2]
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1)
        return nums[0];
    /**
     * 依然是二分法
     * */
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (left + 1 === right)
            return Math.min(nums[left], nums[right]);
        const mid = Math.ceil((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    return nums[right];
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findMin([3, 4, 5, 1, 2]), 1);
assert_1.default.strictEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
assert_1.default.strictEqual(findMin([2, 3, 1]), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUzLuWvu+aJvuaXi+i9rOaOkuW6j+aVsOe7hOS4reeahOacgOWwj+WAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUzLuWvu+aJvuaXi+i9rOaOkuW6j+aVsOe7hOS4reeahOacgOWwj+WAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWM7SUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0Qzs7U0FFSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNILEtBQUssR0FBRyxHQUFHLENBQUM7U0FDZjtLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdkIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzlCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsQixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWBh+iuvuaMieeFp+WNh+W6j+aOkuW6j+eahOaVsOe7hOWcqOmihOWFiOacquefpeeahOafkOS4queCueS4iui/m+ihjOS6huaXi+i9rOOAglxyXG5cclxuKCDkvovlpoLvvIzmlbDnu4TCoFswLDEsMiw0LDUsNiw3XSDlj6/og73lj5jkuLrCoFs0LDUsNiw3LDAsMSwyXcKgKeOAglxyXG5cclxu6K+35om+5Ye65YW25Lit5pyA5bCP55qE5YWD57Sg44CCXHJcblxyXG7kvaDlj6/ku6XlgYforr7mlbDnu4TkuK3kuI3lrZjlnKjph43lpI3lhYPntKDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBbMyw0LDUsMSwyXVxyXG7ovpPlh7o6IDFcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFs0LDUsNiw3LDAsMSwyXVxyXG7ovpPlh7o6IDBcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ZpbmQtbWluaW11bS1pbi1yb3RhdGVkLXNvcnRlZC1hcnJheVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZmluZE1pbiA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAxKSByZXR1cm4gbnVtc1swXTtcclxuICAgIC8qKlxyXG4gICAgICog5L6d54S25piv5LqM5YiG5rOVXHJcbiAgICAgKiAqL1xyXG4gICAgbGV0IGxlZnQgPSAwO1xyXG4gICAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKGxlZnQgPCByaWdodCkge1xyXG4gICAgICAgIGlmIChsZWZ0ICsgMSA9PT0gcmlnaHQpIHJldHVybiBNYXRoLm1pbihudW1zW2xlZnRdLCBudW1zW3JpZ2h0XSk7XHJcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKChsZWZ0ICsgcmlnaHQpIC8gMik7XHJcbiAgICAgICAgaWYgKG51bXNbbWlkXSA+IG51bXNbcmlnaHRdKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBtaWQgKyAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gbWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudW1zW3JpZ2h0XTtcclxuXHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmRNaW4oWzMsIDQsIDUsIDEsIDJdKSxcclxuICAgIDEsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmRNaW4oWzQsIDUsIDYsIDcsIDAsIDEsIDJdKSxcclxuICAgIDAsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmRNaW4oWzIsIDMsIDFdKSxcclxuICAgIDEsXHJcbik7XHJcbiJdfQ==