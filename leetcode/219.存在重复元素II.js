"use strict";
/*
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (cache[cur] != null) {
            if (i - cache[cur] <= k)
                return true;
        }
        cache[cur] = i;
    }
    return false;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 2), false);
assert_1.default.strictEqual(containsNearbyDuplicate([1, 2, 3, 1], 4), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5LuWtmOWcqOmHjeWkjeWFg+e0oElJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMTku5a2Y5Zyo6YeN5aSN5YWD57SgSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7OztHQUlHO0FBQ0gsSUFBSSx1QkFBdUIsR0FBRyxVQUFVLElBQWMsRUFBRSxDQUFTO0lBSTdELE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1NBQ3hDO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25FLGdCQUFNLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbTmlbDmlbDnu4TlkozkuIDkuKrmlbTmlbAga++8jOWIpOaWreaVsOe7hOS4reaYr+WQpuWtmOWcqOS4pOS4quS4jeWQjOeahOe0ouW8lSBpIOWSjCBq77yM5L2/5b6XIG51bXMgW2ldID0gbnVtcyBbal3vvIzlubbkuJQgaSDlkowgaiDnmoTlt67nmoTnu53lr7nlgLzmnIDlpKfkuLoga+OAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBudW1zID0gWzEsMiwzLDFdLCBrID0gM1xu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOiBudW1zID0gWzEsMCwxLDFdLCBrID0gMVxu6L6T5Ye6OiB0cnVlXG7npLrkvosgMzpcblxu6L6T5YWlOiBudW1zID0gWzEsMiwzLDEsMiwzXSwgayA9IDJcbui+k+WHujogZmFsc2VcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0ga1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGNvbnRhaW5zTmVhcmJ5RHVwbGljYXRlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCBrOiBudW1iZXIpIHtcbiAgICB0eXBlIGNhY2hlID0ge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgICB9XG4gICAgY29uc3QgY2FjaGU6IGNhY2hlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1ciA9IG51bXNbaV07XG4gICAgICAgIGlmIChjYWNoZVtjdXJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpIC0gY2FjaGVbY3VyXSA8PSBrKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYWNoZVtjdXJdID0gaTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjb250YWluc05lYXJieUR1cGxpY2F0ZShbMSwgMiwgMywgMV0sIDMpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChjb250YWluc05lYXJieUR1cGxpY2F0ZShbMSwgMiwgMywgMV0sIDIpLCBmYWxzZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoY29udGFpbnNOZWFyYnlEdXBsaWNhdGUoWzEsIDIsIDMsIDFdLCA0KSwgdHJ1ZSk7XG4iXX0=