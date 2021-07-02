"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUzLuWvu+aJvuaXi+i9rOaOkuW6j+aVsOe7hOS4reeahOacgOWwj+WAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTUzLuWvu+aJvuaXi+i9rOaOkuW6j+aVsOe7hOS4reeahOacgOWwj+WAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWM7SUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0Qzs7U0FFSztJQUNMLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNuQixJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWBh+iuvuaMieeFp+WNh+W6j+aOkuW6j+eahOaVsOe7hOWcqOmihOWFiOacquefpeeahOafkOS4queCueS4iui/m+ihjOS6huaXi+i9rOOAglxuXG4oIOS+i+Wmgu+8jOaVsOe7hCBbMCwxLDIsNCw1LDYsN10g5Y+v6IO95Y+Y5Li6IFs0LDUsNiw3LDAsMSwyXSAp44CCXG5cbuivt+aJvuWHuuWFtuS4reacgOWwj+eahOWFg+e0oOOAglxuXG7kvaDlj6/ku6XlgYforr7mlbDnu4TkuK3kuI3lrZjlnKjph43lpI3lhYPntKDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzMsNCw1LDEsMl1cbui+k+WHujogMVxu56S65L6LIDI6XG5cbui+k+WFpTogWzQsNSw2LDcsMCwxLDJdXG7ovpPlh7o6IDBcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ZpbmQtbWluaW11bS1pbi1yb3RhdGVkLXNvcnRlZC1hcnJheVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGZpbmRNaW4gPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgaWYgKG51bXMubGVuZ3RoID09PSAxKSByZXR1cm4gbnVtc1swXTtcbiAgLyoqXG4gICAqIOS+neeEtuaYr+S6jOWIhuazlVxuICAgKiAqL1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IG51bXMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGxlZnQgPCByaWdodCkge1xuICAgIGlmIChsZWZ0ICsgMSA9PT0gcmlnaHQpIHJldHVybiBNYXRoLm1pbihudW1zW2xlZnRdLCBudW1zW3JpZ2h0XSk7XG4gICAgY29uc3QgbWlkID0gTWF0aC5jZWlsKChsZWZ0ICsgcmlnaHQpIC8gMik7XG4gICAgaWYgKG51bXNbbWlkXSA+IG51bXNbcmlnaHRdKSB7XG4gICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmlnaHQgPSBtaWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1zW3JpZ2h0XTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE1pbihbMywgNCwgNSwgMSwgMl0pLCAxKTtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTWluKFs0LCA1LCA2LCA3LCAwLCAxLCAyXSksIDApO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmRNaW4oWzIsIDMsIDFdKSwgMSk7XG4iXX0=