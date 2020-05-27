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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA0LuS6jOWIhuafpeaJvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA0LuS6jOWIhuafpeaJvi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qkk7QUFDSixvREFBdUI7QUFFdkI7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsSUFBYyxFQUFFLE1BQWM7SUFDbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEdBQUcsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksTUFBTSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTtRQUN4RSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1osSUFBSSxNQUFNLEtBQUssZ0JBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsSUFBSSxNQUFNLEtBQUssZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDcEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNyQixPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUMxQixLQUFLLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDeEI7S0FDRjtJQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZELGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV0QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5LiqwqBuwqDkuKrlhYPntKDmnInluo/nmoTvvIjljYfluo/vvInmlbTlnovmlbDnu4TCoG51bXMg5ZKM5LiA5Liq55uu5qCH5YC8wqB0YXJnZXQgwqDvvIzlhpnkuIDkuKrlh73mlbDmkJzntKLCoG51bXPCoOS4reeahCB0YXJnZXTvvIzlpoLmnpznm67moIflgLzlrZjlnKjov5Tlm57kuIvmoIfvvIzlkKbliJnov5Tlm54gLTHjgIJcblxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zID0gWy0xLDAsMyw1LDksMTJdLCB0YXJnZXQgPSA5XG7ovpPlh7o6IDRcbuino+mHijogOSDlh7rnjrDlnKggbnVtcyDkuK3lubbkuJTkuIvmoIfkuLogNFxu56S65L6LwqAyOlxuXG7ovpPlhaU6IG51bXMgPSBbLTEsMCwzLDUsOSwxMl0sIHRhcmdldCA9IDJcbui+k+WHujogLTFcbuino+mHijogMiDkuI3lrZjlnKggbnVtcyDkuK3lm6DmraTov5Tlm54gLTFcbsKgXG5cbuaPkOekuu+8mlxuICAgIDEuIOS9oOWPr+S7peWBh+iuviBudW1zwqDkuK3nmoTmiYDmnInlhYPntKDmmK/kuI3ph43lpI3nmoTjgIJcbiAgICAyLiBuwqDlsIblnKjCoFsxLCAxMDAwMF3kuYvpl7TjgIJcbiAgICAzLiBudW1zwqDnmoTmr4/kuKrlhYPntKDpg73lsIblnKjCoFstOTk5OSwgOTk5OV3kuYvpl7TjgIJcblxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2JpbmFyeS1zZWFyY2hcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHNlYXJjaCA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSwgdGFyZ2V0OiBudW1iZXIpIHtcbiAgaWYgKG51bXMubGVuZ3RoID09PSAwIHx8IHRhcmdldCA8IF8uZmlyc3QobnVtcykhIHx8IHRhcmdldCA+IF8ubGFzdChudW1zKSEpXG4gICAgcmV0dXJuIC0xO1xuICBpZiAodGFyZ2V0ID09PSBfLmZpcnN0KG51bXMpKSByZXR1cm4gMDtcbiAgaWYgKHRhcmdldCA9PT0gXy5sYXN0KG51bXMpKSByZXR1cm4gbnVtcy5sZW5ndGggLSAxO1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IG51bXMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKHJpZ2h0ID49IGxlZnQpIHtcbiAgICBjb25zdCBtaWRkbGVJbmRleCA9IGxlZnQgKyAoKHJpZ2h0IC0gbGVmdCkgPj4+IDEpO1xuICAgIGNvbnN0IG1pZGRsZSA9IG51bXNbbWlkZGxlSW5kZXhdO1xuICAgIGlmIChtaWRkbGUgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIG1pZGRsZUluZGV4O1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0IDwgbWlkZGxlKSB7XG4gICAgICByaWdodCA9IG1pZGRsZUluZGV4IC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IG1pZGRsZUluZGV4ICsgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHNlYXJjaChbLTEsIDAsIDMsIDUsIDksIDEyXSwgOSksIDQpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoc2VhcmNoKFtdLCA5KSwgLTEpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoc2VhcmNoKFstMSwgMCwgMywgNSwgOSwgMTJdLCAwKSwgMSk7XG4iXX0=